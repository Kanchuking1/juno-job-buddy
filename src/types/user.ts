export type User = {
  id: string;
  name?: string;
  email: string;
  image?: string;
  emailVerified?: Date;
};

export type UserWithApplications = User & {
  applications: Array<{
    id: string;
    jobTitle: string;
    company: string;
    status: string;
    appliedAt: Date;
  }>;
};

export type UserProfile = User;
