import type { Application } from "@/types";

export const sampleApplications: Array<Application> = [
  {
    id: "1",
    jobTitle: "Frontend Developer",
    company: "Tech Corp",
    status: "IN_PROGRESS",
    appliedAt: new Date("2024-05-01"),
    updatedAt: new Date("2024-05-01"),
    userId: "user1",
  },
  {
    id: "2",
    jobTitle: "Backend Developer",
    company: "Innovate LLC",
    status: "APPLIED",
    appliedAt: new Date("2024-05-03"),
    updatedAt: new Date("2024-05-03"),
    userId: "user1",
  },
  {
    id: "3",
    jobTitle: "Backend Developer",
    company: "Innovate LLC",
    status: "WITHDRAWN",
    appliedAt: new Date("2024-05-03"),
    updatedAt: new Date("2024-05-03"),
    userId: "user1",
  },
  {
    id: "4",
    jobTitle: "Backend Developer",
    company: "Innovate LLC",
    status: "GHOSTED",
    appliedAt: new Date("2024-05-03"),
    updatedAt: new Date("2024-05-03"),
    userId: "user1",
  },
  {
    id: "5",
    jobTitle: "Backend Developer",
    company: "Innovate LLC",
    status: "OFFER",
    appliedAt: new Date("2024-05-03"),
    updatedAt: new Date("2024-05-03"),
    userId: "user1",
  },
  {
    id: "6",
    jobTitle: "Backend Developer",
    company: "Innovate LLC",
    status: "REJECTED",
    appliedAt: new Date("2024-05-03"),
    updatedAt: new Date("2024-05-03"),
    userId: "user1",
  }
];