#!/bin/bash

# Team Image Optimization Script
# Standardizes all team images to 600x800px JPEG format for optimal web performance

set -e

TEAM_DIR="/Users/dog/Documents/Medical/CRASH_LABS/CRASH-LABS-WEBSITE-FINAL/public/images/team"
BACKUP_DIR="${TEAM_DIR}/originals_backup_$(date +%Y%m%d_%H%M%S)"

# Target dimensions (3:4 aspect ratio)
TARGET_WIDTH=600
TARGET_HEIGHT=800
QUALITY=85

echo "🖼️  Team Image Optimization"
echo "================================"
echo "Target size: ${TARGET_WIDTH}x${TARGET_HEIGHT}px"
echo "Format: JPEG (${QUALITY}% quality)"
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

# Create backup directory
mkdir -p "$BACKUP_DIR"
echo "📦 Backup directory: $BACKUP_DIR"
echo ""

# Process each image
cd "$TEAM_DIR"

shopt -s nullglob
for img in *.jpeg *.jpg *.png *.JPEG *.JPG *.PNG; do
    
    # Skip if it's already a backup directory
    [[ "$img" == *"originals_backup"* ]] && continue
    
    # Get base name without extension
    basename="${img%.*}"
    
    # Skip duplicates (prefer .jpeg over .jpg, skip .png if .jpeg exists)
    if [[ "$img" == *.jpg ]] && [[ -f "${basename}.jpeg" ]]; then
        echo "⏭️  Skipping $img (duplicate, .jpeg exists)"
        continue
    fi
    
    if [[ "$img" == *.png ]] && [[ -f "${basename}.jpeg" ]]; then
        echo "⏭️  Skipping $img (duplicate, .jpeg exists)"
        continue
    fi
    
    echo "🔄 Processing: $img"
    
    # Backup original
    cp "$img" "$BACKUP_DIR/"
    
    # Get current dimensions
    dimensions=$($CONVERT_CMD "$img" -format "%wx%h" info:)
    echo "   Original: $dimensions"
    
    # Optimize image:
    # 1. Resize to fit within target dimensions while maintaining aspect ratio
    # 2. Extend canvas to exact target size with smart cropping (gravity center)
    # 3. Convert to JPEG with specified quality
    # 4. Strip metadata
    # 5. Apply slight sharpening after resize
    
    $CONVERT_CMD "$img" \
        -resize "${TARGET_WIDTH}x${TARGET_HEIGHT}^" \
        -gravity center \
        -extent "${TARGET_WIDTH}x${TARGET_HEIGHT}" \
        -quality $QUALITY \
        -strip \
        -unsharp 0x0.5 \
        "${basename}.jpeg"
    
    # Remove old file if it was PNG or .jpg
    if [[ "$img" != "${basename}.jpeg" ]]; then
        rm "$img"
        echo "   ✅ Converted to ${basename}.jpeg"
    else
        echo "   ✅ Optimized ${basename}.jpeg"
    fi
    
    # Show new file size
    new_size=$(du -h "${basename}.jpeg" | awk '{print $1}')
    echo "   New size: ${TARGET_WIDTH}x${TARGET_HEIGHT}, $new_size"
    echo ""
done

echo "================================"
echo "✨ Optimization complete!"
echo ""
echo "📊 Summary:"
du -h *.jpeg | awk '{print "   " $2 ": " $1}'
echo ""
echo "Total size:"
du -ch *.jpeg | grep total
echo ""
echo "💾 Original files backed up to:"
echo "   $BACKUP_DIR"
