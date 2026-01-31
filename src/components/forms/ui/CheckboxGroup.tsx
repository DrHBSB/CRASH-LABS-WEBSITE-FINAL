import React from 'react';
import { AlertCircle, Check } from 'lucide-react';

interface Option {
    value: string;
    label: string;
}

interface CheckboxGroupProps {
    label: string;
    options: Option[];
    selectedValues: string[];
    onChange: (values: string[]) => void;
    error?: string;
    required?: boolean;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ label, options, selectedValues, onChange, error, required }) => {
    const toggleValue = (value: string) => {
        if (selectedValues.includes(value)) {
            onChange(selectedValues.filter((v) => v !== value));
        } else {
            onChange([...selectedValues, value]);
        }
    };

    return (
        <div className="w-full">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="space-y-3">
                {options.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                        <label key={option.value} className="flex items-start gap-3 cursor-pointer group">
                            <div className="relative flex items-center justify-center mt-0.5">
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => toggleValue(option.value)}
                                    className="peer sr-only"
                                />
                                <div className={`w-5 h-5 border-2 rounded transition-all flex items-center justify-center ${isSelected ? 'bg-brand-blue border-brand-blue' : 'border-gray-300 bg-white group-hover:border-brand-blue'
                                    }`}>
                                    <Check size={14} className={`text-white transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                            </div>
                            <span className="text-sm text-navy-900 group-hover:text-brand-blue transition-colors">
                                {option.label}
                            </span>
                        </label>
                    );
                })}
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
