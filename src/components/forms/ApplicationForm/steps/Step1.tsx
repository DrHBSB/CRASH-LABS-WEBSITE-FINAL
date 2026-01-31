import React from 'react';
import { ApplicationData } from '../types';
import { Input } from '../../ui/Input';
import { CheckboxGroup } from '../../ui/CheckboxGroup';

interface StepProps {
    data: ApplicationData;
    updateData: (updates: Partial<ApplicationData>) => void;
    errors: Record<string, string>;
}

export const Step1: React.FC<StepProps> = ({ data, updateData, errors }) => {
    return (
        <div className="space-y-6">
            <Input
                label="Full Name"
                name="fullName"
                value={data.fullName}
                onChange={(e) => updateData({ fullName: e.target.value })}
                placeholder="Jane Doe"
                error={errors.fullName}
                required
                autoFocus
            />

            <Input
                label="Email Address"
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => updateData({ email: e.target.value })}
                placeholder="jane@university.edu"
                error={errors.email}
                required
            />

            <Input
                label="Phone Number (WhatsApp preferred)"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={(e) => updateData({ phone: e.target.value })}
                placeholder="+1 234 567 8900"
                error={errors.phone}
                required
            />

            <Input
                label="Current Role / Affiliation"
                name="currentRole"
                value={data.currentRole}
                onChange={(e) => updateData({ currentRole: e.target.value })}
                placeholder="e.g. PhD Student, Software Engineer, Radiologist"
                error={errors.currentRole}
                required
            />

            <CheckboxGroup
                label="How would you best describe yourself? (Select all that apply)"
                options={[
                    { value: 'Clinician', label: 'Clinician' },
                    { value: 'Engineer / Developer', label: 'Engineer / Developer' },
                    { value: 'AI / ML Researcher', label: 'AI / ML Researcher' },
                    { value: 'Data Scientist', label: 'Data Scientist' },
                    { value: 'Social Science / Policy / Ethics', label: 'Social Science / Policy / Ethics' },
                    { value: 'Designer / Product', label: 'Designer / Product' },
                    { value: 'Independent / Interdisciplinary', label: 'Independent / Interdisciplinary' },
                    { value: 'Other', label: 'Other' }
                ]}
                selectedValues={data.selfDescription}
                onChange={(values) => updateData({ selfDescription: values })}
                error={errors.selfDescription}
                required
            />
        </div>
    );
};
