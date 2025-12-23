#!/bin/bash

# Logo Optimization Script
# Resizes all logos to height 80px and converts to WebP for optimal web performance

set -e

LOGO_DIR="/Users/dog/Documents/Medical/CRASH_LABS/CRASH-LABS-WEBSITE-FINAL/public/images/logos"
OUTPUT_DIR="${LOGO_DIR}/optimized"

# Target height (80px for 2x retina display on 40px container)
TARGET_HEIGHT=80
QUALITY=90

echo "🖼️  Logo Optimization"
echo "================================"
echo "Target height: ${TARGET_HEIGHT}px"
echo "Format: WebP (${QUALITY}% quality)"
echo ""

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found!"
    echo "Please install it with: brew install imagemagick"
    exit 1
fi

# Use 'magick' command if available (ImageMagick 7), otherwise 'convert' (ImageMagick 6)
if command -v magick &> /dev/null; then
    CONVERT_CMD="magick"
else
    CONVERT_CMD="convert"
fi

echo "✅ Using ImageMagick: $CONVERT_CMD"
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"
echo "📂 Output directory: $OUTPUT_DIR"
echo ""

# Process each image
cd "$LOGO_DIR"

shopt -s nullglob
for img in *.jpeg *.jpg *.png *.webp *.JPEG *.JPG *.PNG *.WEBP; do
    
    # Skip if it's already a directory or processed file
    [[ -d "$img" ]] && continue
    
    # Get base name without extension
    basename="${img%.*}"
    
    echo "🔄 Processing: $img"
    
    # Optimize image:
    # 1. Resize to target height (width auto)
    # 2. Convert to WebP
    # 3. Strip metadata
    # 4. Invert colors if it's IIT Delhi (handling the white logo issue)
    
    OPTS=""
    if [[ "$basename" == *"IITDelhi"* ]]; then
        echo "   ✨ Inverting colors for $basename (keeping transparency)"
        # Use -channel RGB -negate +channel to only invert colors, not alpha
        OPTS="-channel RGB -negate +channel"
    fi
    
    $CONVERT_CMD "$img" \
        $OPTS \
        -resize "x${TARGET_HEIGHT}" \
        -quality $QUALITY \
        -strip \
        -define webp:lossless=false \
        "${OUTPUT_DIR}/${basename}.webp"
    
    echo "   ✅ Optimized: ${basename}.webp"
    
    # Show size comparison
    orig_size=$(du -h "$img" | cut -f1)
    new_size=$(du -h "${OUTPUT_DIR}/${basename}.webp" | cut -f1)
    echo "   Size: $orig_size -> $new_size"
    echo ""
done

echo "================================"
echo "✨ Optimization complete!"
echo ""
echo "📊 Summary:"
ls -lh "$OUTPUT_DIR"
