import type { Application, ApiResponse } from "@/types";
import prisma from "@/lib/prisma";
import { getUser } from "@/lib/auth";

export async function getAllApplications(
  options?: {
    search?: string;
    status?: string;
    sort?: string;
    order?: "asc" | "desc";
  }
): Promise<Application[]> {
  try {
    const user = await getUser();
    if (!user?.email) return [];

    const where: any = {
      user: { email: user.email },
    };

    if (options?.status) {
      where.status = options.status;
    }

    if (options?.search) {
      where.OR = [
        { jobTitle: { contains: options.search, mode: "insensitive" } },
        { company: { contains: options.search, mode: "insensitive" } },
        { jobLocation: { contains: options.search, mode: "insensitive" } },
        { description: { contains: options.search, mode: "insensitive" } },
        { notes: { contains: options.search, mode: "insensitive" } },
      ];
    }

    const allowedSorts = new Set(["appliedAt", "updatedAt", "company", "jobTitle"]);
    const sortField = allowedSorts.has(options?.sort || "") ? options?.sort : "appliedAt";
    const order = options?.order === "asc" ? "asc" : "desc";

    const applications = await prisma.application.findMany({
      where,
      orderBy: { [sortField || "appliedAt"]: order },
    });

    return applications;
  } catch (error) {
    console.error("Error fetching applications:", error);
    return [];
  }
}
