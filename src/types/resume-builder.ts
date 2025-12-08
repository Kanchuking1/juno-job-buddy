export type ResumeData = {
    workExperience: Array<WorkExperience>;
    education: Array<Education>;
    skills: Array<string>;
}

export type WorkExperience = {
    company: string;
    position: string;
    startDate: string;
    endDate?: string;
    responsibilities: Array<string>;
    location?: string;
}

export type Education = {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
}