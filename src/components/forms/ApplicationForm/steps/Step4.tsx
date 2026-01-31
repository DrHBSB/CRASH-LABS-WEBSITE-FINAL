import React from 'react';
import { ApplicationData } from '../types';
import { Input } from '../../ui/Input';
import { TextArea } from '../../ui/TextArea';
import { RadioGroup } from '../../ui/RadioGroup';
import { FileUpload } from '../../ui/FileUpload';

interface StepProps {
    data: ApplicationData;
    updateData: (updates: Partial<ApplicationData>) => void;
    errors: Record<string, string>;
}

export const Step4: React.FC<StepProps> = ({ data, updateData, errors }) => {
    return (
        <div className="space-y-6">
            <RadioGroup
                label="Have you previously worked in a research group or lab?"
                name="prevResearchExp"
                options={[
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                ]}
                value={data.prevResearchExp}
                onChange={(value) => updateData({ prevResearchExp: value })}
                required
            />

            {data.prevResearchExp === 'Yes' && (
                <TextArea
                    label="Briefly describe your role and responsibilities"
                    name="researchRoleDescription"
                    value={data.researchRoleDescription}
                    onChange={(e) => updateData({ researchRoleDescription: e.target.value })}
                    required
                />
            )}

            <Input
                label="Links to relevant projects / GitHub / publications / writing (if any)"
                name="projectLinks"
                value={data.projectLinks}
                onChange={(e) => updateData({ projectLinks: e.target.value })}
            />

            <FileUpload
                label="Upload your CV / Resume (Optional)"
                onFileSelect={(file) => updateData({ cvFile: file })}
                error={errors.cvFile}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RadioGroup
                    label="How many hours per week can you realistically commit?"
                    name="weeklyHours"
                    options={[
                        { value: '5-10 hours', label: '5-10 hours' },
                        { value: '10-20 hours', label: '10-20 hours' },
                        { value: '20+ hours', label: '20+ hours' },
                        { value: 'Full-time / intensive', label: 'Full-time / intensive' }
                    ]}
                    value={data.weeklyHours}
                    onChange={(value) => updateData({ weeklyHours: value })}
                    required
                    error={errors.weeklyHours}
                />

                <RadioGroup
                    label="How long are you interested in being part of CRASH Lab?"
                    name="durationInterest"
                    options={[
                        { value: '6-12 months', label: '6-12 months' },
                        { value: '12+ months', label: '12+ months' },
                        { value: 'Long term / open-ended', label: 'Long term / open-ended' }
                    ]}
                    value={data.durationInterest}
                    onChange={(value) => updateData({ durationInterest: value })}
                    required
                    error={errors.durationInterest}
                />
            </div>

            <RadioGroup
                label="How did you hear about CRASH Lab?"
                name="source"
                options={[
                    { value: 'Twitter / LinkedIn', label: 'Twitter / LinkedIn' },
                    { value: 'Website', label: 'Website' },
                    { value: 'University / lab mailing list', label: 'University / lab mailing list' },
                    { value: 'Friend / colleague', label: 'Friend / colleague' },
                    { value: 'Event / workshop', label: 'Event / workshop' },
                    { value: 'Other', label: 'Other' }
                ]}
                value={data.source}
                onChange={(value) => updateData({ source: value })}
                required
                error={errors.source}
            />

            <TextArea
                label="Any additional information you would like us to know?"
                name="additionalInfo"
                value={data.additionalInfo}
                onChange={(e) => updateData({ additionalInfo: e.target.value })}
                rows={2}
            />
        </div>
    );
};
