export type ApplicationStatus = 
  | "APPLIED" 
  | "IN_PROGRESS" 
  | "INTERVIEW" 
  | "OFFER" 
  | "REJECTED" 
  | "GHOSTED" 
  | "WITHDRAWN";

export type Application = {
  id: string;
  userId: string;
  jobTitle: string;
  company: string;
  jobLocation?: string;
  jobUrl?: string;
  status: ApplicationStatus;
  appliedAt: Date;
  updatedAt: Date;
  notes?: string;
  description?: string;
  resumeUsedId?: string;
};

export type CreateApplicationRequest = Omit<Application, "id" | "userId" | "appliedAt" | "updatedAt">;

export type UpdateApplicationRequest = Partial<Omit<Application, "id" | "userId" | "appliedAt">>;

export type ApplicationResponse = Application;

export type ApplicationTableProps = {
  applications: Application[];
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
