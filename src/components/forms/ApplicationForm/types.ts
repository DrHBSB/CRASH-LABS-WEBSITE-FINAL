export interface ApplicationData {
    // Step 1: Personal Information
    fullName: string;
    email: string;
    phone: string;
    currentRole: string;
    selfDescription: string[]; // Multi-select

    // Step 2: Motivation & Fit
    motivation: string;
    specificProject: string;
    researchPaper: string;
    aiHealthcareExcitement: string;

    // Step 3: Interests & Skills
    technicalInterests: string[]; // Multi-select
    workTypes: string[]; // Multi-select
    strongestSkill: string;
    otherSkills: string;
    technicalBackground: string;
    clinicalBackground: string;
    socialBackground: string;

    // Step 4: Experience & Commitment
    prevResearchExp: string; // "Yes" | "No"
    researchRoleDescription: string;
    projectLinks: string;
    cvFile: { name: string; type: string; content: string } | null;
    weeklyHours: string;
    durationInterest: string;
    source: string;
    additionalInfo: string;
}

export const initialApplicationData: ApplicationData = {
    fullName: '',
    email: '',
    phone: '',
    currentRole: '',
    selfDescription: [],
    motivation: '',
    specificProject: '',
    researchPaper: '',
    aiHealthcareExcitement: '',
    technicalInterests: [],
    workTypes: [],
    strongestSkill: '',
    otherSkills: '',
    technicalBackground: '',
    clinicalBackground: '',
    socialBackground: '',
    prevResearchExp: '',
    researchRoleDescription: '',
    projectLinks: '',
    cvFile: null,
    weeklyHours: '',
    durationInterest: '',
    source: '',
    additionalInfo: ''
};
