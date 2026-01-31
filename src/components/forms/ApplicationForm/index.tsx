import React from 'react';
import { X } from 'lucide-react';
import { ApplicationForm } from './ApplicationForm';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-transparent rounded-xl no-scrollbar">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-50 bg-black/20 rounded-full backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                <ApplicationForm onSuccess={onClose} />
            </div>
        </div>
    );
};
