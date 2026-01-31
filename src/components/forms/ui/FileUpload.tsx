import React, { useRef, useState } from 'react';
import { UploadCloud, File, X, AlertCircle } from 'lucide-react';

interface FileData {
    name: string;
    type: string;
    content: string; // Base64
}

interface FileUploadProps {
    label: string;
    onFileSelect: (file: FileData | null) => void;
    error?: string;
    required?: boolean;
    accept?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ label, onFileSelect, error, required, accept = ".pdf,.doc,.docx" }) => {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            alert("File is too large. Max 10MB.");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            setSelectedFile(file.name);
            onFileSelect({
                name: file.name,
                type: file.type,
                content: result
            });
        };
        reader.readAsDataURL(file);
    };

    const clearFile = () => {
        setSelectedFile(null);
        onFileSelect(null);
        if (inputRef.current) inputRef.current.value = '';
    };

    return (
        <div className="w-full">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {!selectedFile ? (
                <div
                    onClick={() => inputRef.current?.click()}
                    className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors group ${error ? 'border-red-300 bg-red-50/50' : 'border-gray-200'
                        }`}
                >
                    <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-brand-blue transition-colors" />
                    <p className="text-sm text-navy-900 font-medium">Click to upload CV / Resume</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC up to 10MB</p>
                    <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        accept={accept}
                        onChange={handleFileChange}
                    />
                </div>
            ) : (
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <File className="w-5 h-5 text-brand-blue" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-navy-900 truncate max-w-[200px]">{selectedFile}</p>
                            <p className="text-xs text-blue-600">Ready to upload</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={clearFile}
                        className="p-2 hover:bg-blue-100 rounded-full text-blue-400 hover:text-blue-600 transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>
            )}

            {error && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {error}
                </p>
            )}
        </div>
    );
};
