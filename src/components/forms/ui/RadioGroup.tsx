import React from 'react';
import { AlertCircle } from 'lucide-react';

interface Option {
    value: string;
    label: string;
}

interface RadioGroupProps {
    label: string;
    name: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ label, name, options, value, onChange, error, required }) => {
    return (
        <div className="w-full">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="space-y-3">
                {options.map((option) => (
                    <label key={option.value} className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-0.5">
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={(e) => onChange(e.target.value)}
                                className="peer sr-only"
                            />
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-brand-blue peer-checked:bg-white transition-all"></div>
                            <div className="absolute w-2.5 h-2.5 bg-brand-blue rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                        </div>
                        <span className="text-sm text-navy-900 group-hover:text-brand-blue transition-colors">
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>
            {error && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {error}
                </p>
            )}
        </div>
    );
};
