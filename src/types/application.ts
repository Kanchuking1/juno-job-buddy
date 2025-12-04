export type ApplicationStatus = 
  | "APPLIED" 
  | "IN_PROGRESS" 
  | "INTERVIEW" 
  | "OFFER" 
  | "REJECTED" 
  | "GHOSTED" 
  | "WITHDRAWN";

export function isApplicationStatus(status: string): status is ApplicationStatus {
  return [
    "APPLIED",
    "IN_PROGRESS",
    "INTERVIEW",
    "OFFER",
    "REJECTED",
    "GHOSTED",
    "WITHDRAWN",
  ].includes(status);
}

export type Application = {
  id: string;
  userId: string;
  jobTitle: string;
  company: string;
  jobLocation?: string | null;
  jobUrl?: string | null;
  status: ApplicationStatus;
  appliedAt: Date;
  updatedAt: Date;
  notes?: string | null;
  description?: string | null;
  resumeUsedId?: string | null;
};

export type CreateApplicationRequest = Omit<Application, "id" | "userId" | "appliedAt" | "updatedAt">;

export type UpdateApplicationRequest = Partial<Omit<Application, "id" | "userId" | "appliedAt">>;

export type ApplicationResponse = Application;

export type ApplicationTableProps = {
  isLoading?: boolean;
  onEdit?: (app: Application) => void;
  onDelete?: (appId: string) => void;
};

export type ApplicationStatsProps = {
  applications: Application[];
  isLoading?: boolean;
};

export type ApplicationModalProps = {
  application?: Application;
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: (data: CreateApplicationRequest) => Promise<void>;
};
