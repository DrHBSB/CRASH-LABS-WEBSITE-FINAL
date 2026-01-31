import React from 'react';
import { ApplicationData } from '../types';
import { Input } from '../../ui/Input';
import { TextArea } from '../../ui/TextArea';
import { CheckboxGroup } from '../../ui/CheckboxGroup';

interface StepProps {
    data: ApplicationData;
    updateData: (updates: Partial<ApplicationData>) => void;
    errors: Record<string, string>;
}

export const Step3: React.FC<StepProps> = ({ data, updateData, errors }) => {
    return (
        <div className="space-y-6">
            <CheckboxGroup
                label="Which technical or vertical areas are you most interested in? (Select all that apply)"
                options={[
                    { value: 'Computer Vision (CV)', label: 'Computer Vision (CV)' },
                    { value: 'NLP / LLMs', label: 'NLP / LLMs' },
                    { value: 'Multimodal AI', label: 'Multimodal AI' },
                    { value: 'Agentic / Autonomous Systems', label: 'Agentic / Autonomous Systems' },
                    { value: 'Evaluation, benchmarking, metrics', label: 'Evaluation, benchmarking, metrics' },
                    { value: 'Bias, fairness, safety, alignment', label: 'Bias, fairness, safety, alignment' },
                    { value: 'Data infrastructure / platforms', label: 'Data infrastructure / platforms' },
                    { value: 'Other', label: 'Other' }
                ]}
                selectedValues={data.technicalInterests}
                onChange={(values) => updateData({ technicalInterests: values })}
                error={errors.technicalInterests}
                required
            />

            <CheckboxGroup
                label="Which type(s) of work would you like to be involved in? (Select all that apply)"
                options={[
                    { value: 'Research (methods, experiments, papers)', label: 'Research (methods, experiments, papers)' },
                    { value: 'Engineering / systems building', label: 'Engineering / systems building' },
                    { value: 'Clinical validation / annotation', label: 'Clinical validation / annotation' },
                    { value: 'Dataset curation & audits', label: 'Dataset curation & audits' },
                    { value: 'Policy, ethics, governance', label: 'Policy, ethics, governance' },
                    { value: 'Documentation, writing, coordination', label: 'Documentation, writing, coordination' }
                ]}
                selectedValues={data.workTypes}
                onChange={(values) => updateData({ workTypes: values })}
                error={errors.workTypes}
                required
            />

            <Input
                label="Your Strongest skill (One primary strength you would bring to CRASH Lab)"
                name="strongestSkill"
                value={data.strongestSkill}
                onChange={(e) => updateData({ strongestSkill: e.target.value })}
                error={errors.strongestSkill}
                required
            />

            <TextArea
                label="Other skills you have (List secondary skills; bullet points encouraged)"
                name="otherSkills"
                value={data.otherSkills}
                onChange={(e) => updateData({ otherSkills: e.target.value })}
                rows={3}
            />

            <TextArea
                label="Technical background (if applicable) - Programming languages, tools, frameworks"
                name="technicalBackground"
                value={data.technicalBackground}
                onChange={(e) => updateData({ technicalBackground: e.target.value })}
                rows={2}
            />

            <TextArea
                label="Clinical background (if applicable) - Specialty, training level"
                name="clinicalBackground"
                value={data.clinicalBackground}
                onChange={(e) => updateData({ clinicalBackground: e.target.value })}
                rows={2}
            />

            <TextArea
                label="Social Science / policy / interdisciplinary background (if applicable)"
                name="socialBackground"
                value={data.socialBackground}
                onChange={(e) => updateData({ socialBackground: e.target.value })}
                rows={2}
            />
        </div>
    );
};
