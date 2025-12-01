import { z } from "zod";

export const createApplicationSchema = z.object({
  jobTitle: z.string().min(2),
  company: z.string().min(2),
  jobLocation: z.string().optional(),
  jobUrl: z.string().url().optional(),
  status: z.enum([
    "APPLIED",
    "IN_PROGRESS",
    "INTERVIEW",
    "OFFER",
    "REJECTED",
    "GHOSTED",
    "WITHDRAWN",
  ]).optional(),
});

export type CreateApplication = z.infer<typeof createApplicationSchema>;
