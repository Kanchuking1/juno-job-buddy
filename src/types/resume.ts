export type Resume = {
  id: string;
  userId: string;
  title: string;
  fileUrl: string;
  createdAt: Date;
};

export type CreateResumeRequest = Omit<Resume, "id" | "userId" | "createdAt">;

export type ResumeWithApplications = Resume & {
  applications: Array<{
    id: string;
    jobTitle: string;
    company: string;
  }>;
};
