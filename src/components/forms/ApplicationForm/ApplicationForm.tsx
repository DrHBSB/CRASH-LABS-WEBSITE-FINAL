import React, { useState } from 'react';
import { initialApplicationData, ApplicationData } from './types';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Step3 } from './steps/Step3';
import { Step4 } from './steps/Step4';
import { ProgressBar } from '../ui/ProgressBar';
import { useGoogleForm } from '../../../hooks/useGoogleForm';
import { AlertCircle, CheckCircle, ChevronLeft, ChevronRight, Send } from 'lucide-react';

interface ApplicationFormProps {
    onSuccess?: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ onSuccess }) => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<ApplicationData>(initialApplicationData);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [globalError, setGlobalError] = useState<string | null>(null);

    // Use the hook - ensure you set the correct sheet name matching your Apps Script logic
    const { submit, loading, error, success } = useGoogleForm({ sheetName: 'Applications' });

    const totalSteps = 4;

    const updateData = (updates: Partial<ApplicationData>) => {
        setData(prev => ({ ...prev, ...updates }));
        // Clear errors for updated fields
        const newErrors = { ...errors };
        Object.keys(updates).forEach(key => delete newErrors[key]);
        setErrors(newErrors);
    };

    const validateStep = (currentStep: number): boolean => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        if (currentStep === 1) {
            if (!data.fullName) newErrors.fullName = "Full Name is required";
            if (!data.email) newErrors.email = "Email is required";
            else if (!/^\S+@\S+\.\S+$/.test(data.email)) newErrors.email = "Invalid email format";
            if (!data.phone) newErrors.phone = "Phone is required";
            if (!data.currentRole) newErrors.currentRole = "Role is required";
            if (data.selfDescription.length === 0) newErrors.selfDescription = "Select at least one option";
        }

        if (currentStep === 2) {
            if (!data.motivation) newErrors.motivation = "This field is required";
            if (!data.aiHealthcareExcitement) newErrors.aiHealthcareExcitement = "This field is required";
        }

        if (currentStep === 3) {
            if (data.technicalInterests.length === 0) newErrors.technicalInterests = "Select at least one area";
            if (data.workTypes.length === 0) newErrors.workTypes = "Select at least one work type";
            if (!data.strongestSkill) newErrors.strongestSkill = "This field is required";
        }

        if (currentStep === 4) {
            if (!data.prevResearchExp) newErrors.prevResearchExp = "Required";
            if (data.prevResearchExp === 'Yes' && !data.researchRoleDescription) {
                newErrors.researchRoleDescription = "Please describe your role";
            }
            if (!data.weeklyHours) newErrors.weeklyHours = "Required";
            if (!data.durationInterest) newErrors.durationInterest = "Required";
            if (!data.source) newErrors.source = "Required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            isValid = false;
        }

        return isValid;
    };

    const handleNext = () => {
        if (validateStep(step)) {
            setGlobalError(null);
            setStep(prev => Math.min(prev + 1, totalSteps));
            window.scrollTo(0, 0);
        } else {
            setGlobalError("Please complete all required fields correctly.");
            // Clear global error after 3 seconds
            setTimeout(() => setGlobalError(null), 3000);
        }
    };

    const handleBack = () => {
        setStep(prev => Math.max(prev - 1, 1));
        window.scrollTo(0, 0);
    };

    const handleSubmit = async () => {
        if (validateStep(step)) {
            setGlobalError(null);
            const result = await submit(data);
            if (result.success && onSuccess) {
                setTimeout(onSuccess, 2000); // Wait a bit before closing or let the user see the success message
            }
        } else {
            setGlobalError("Please complete all required fields correctly.");
            setTimeout(() => setGlobalError(null), 3000);
        }
    };

    if (success) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-navy-900 mb-3">
                    Application Received!
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for your interest in CRASH Lab. We will review your application and get back to you soon.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-navy-900 p-6 text-white">
                <h2 className="text-2xl font-serif font-semibold mb-2">Join the Team</h2>
                <p className="text-white/70 text-sm">
                    Shape the future of responsible AI in healthcare.
                </p>
            </div>

            {/* Progress */}
            <div className="px-6 pt-6">
                <ProgressBar currentStep={step} totalSteps={totalSteps} />
            </div>

            {/* Form Content */}
            <div className="p-6 min-h-[400px]">
                {step === 1 && <Step1 data={data} updateData={updateData} errors={errors} />}
                {step === 2 && <Step2 data={data} updateData={updateData} errors={errors} />}
                {step === 3 && <Step3 data={data} updateData={updateData} errors={errors} />}
                {step === 4 && <Step4 data={data} updateData={updateData} errors={errors} />}

                {error && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-lg flex items-center gap-3 text-red-600">
                        <AlertCircle size={20} />
                        <p className="text-sm font-medium">{error}</p>
                    </div>
                )}
            </div>

            {/* Footer Navigation */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col gap-4">
                {globalError && (
                    <div className="flex items-center justify-center p-2 mb-2 bg-red-100 text-red-700 text-sm font-medium rounded-lg animate-fade-in">
                        <AlertCircle size={16} className="mr-2" />
                        {globalError}
                    </div>
                )}
                <div className="flex justify-between items-center">
                    <button
                        onClick={handleBack}
                        disabled={step === 1 || loading}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${step === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-navy-900 hover:bg-gray-200'
                            }`}
                    >
                        <ChevronLeft size={16} />
                        Back
                    </button>

                    {step < totalSteps ? (
                        <button
                            onClick={handleNext}
                            className="flex items-center gap-2 px-6 py-2.5 bg-navy-900 text-white text-sm font-medium rounded-lg hover:bg-brand-blue transition-colors shadow-lg shadow-brand-blue/20"
                        >
                            Next
                            <ChevronRight size={16} />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="flex items-center gap-2 px-8 py-2.5 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-brand-blue/20 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Submit Application
                                    <Send size={16} />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
