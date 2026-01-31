import React from 'react';
import { AlertCircle } from 'lucide-react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
    required?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, required, className = '', ...props }) => {
    return (
        <div className="w-full">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <textarea
                className={`w-full px-4 py-3 bg-white border rounded-lg text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors resize-none ${error ? 'border-red-400' : 'border-gray-200'
                    } ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {error}
                </p>
            )}
        </div>
    );
};
