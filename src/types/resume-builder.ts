export type ResumeData = {
    contactInformation: ContactInformation;
    workExperience: Array<WorkExperience>;
    education: Array<Education>;
    projects: Array<Project>;
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
    level: "Masters" | "Bachelors" | "PhD";
    concentration: string;
    startDate: string;
    endDate: string;
}

export type Project = {
    name: string;
    startDate: string;
    link?: string;
    endDate?: string;
    features: Array<string>;
}

export type ContactInformation = {
    firstName: string;
    lastName: string;
    targetRoles: string[];
    phoneNumber: string;
    email: string;
    links: string[]
}