import React from 'react';
import { ApplicationData } from '../types';
import { TextArea } from '../../ui/TextArea';

interface StepProps {
    data: ApplicationData;
    updateData: (updates: Partial<ApplicationData>) => void;
    errors: Record<string, string>;
}

export const Step2: React.FC<StepProps> = ({ data, updateData, errors }) => {
    return (
        <div className="space-y-6">
            <div className="bg-blue-50/50 p-4 rounded-lg text-sm text-navy-800 border border-blue-100 mb-6">
                <h3 className="font-bold mb-1">Motivation & Fit</h3>
                <p>Help us understand why you want to join CRASH Lab.</p>
            </div>

            <TextArea
                label="Why do you want to in CRASH Lab specifically? (2-3 sentences max)"
                name="motivation"
                value={data.motivation}
                onChange={(e) => updateData({ motivation: e.target.value })}
                rows={3}
                error={errors.motivation}
                required
            />

            <TextArea
                label="Is there any specific CRASH Lab project, theme, or direction that attracted you?"
                name="specificProject"
                value={data.specificProject}
                onChange={(e) => updateData({ specificProject: e.target.value })}
                rows={2}
            />

            <TextArea
                label="Is there any research paper / report / project you would like to work on or extend?"
                name="researchPaper"
                value={data.researchPaper}
                onChange={(e) => updateData({ researchPaper: e.target.value })}
                rows={2}
            />

            <TextArea
                label="What excites you about working at the intersection of AI and healthcare? (1-2 sentences)"
                name="aiHealthcareExcitement"
                value={data.aiHealthcareExcitement}
                onChange={(e) => updateData({ aiHealthcareExcitement: e.target.value })}
                rows={3}
            />
        </div>
    );
};
