import prisma from "@/lib/prisma";
import { getUser } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createApplicationSchema } from "@/lib/validators/application";
import type { Application, ApiResponse, ApiErrorResponse } from "@/types";
import z from "zod";

/**
 * @queryParams
 * - search: string (optional) - Search term to filter applications
 * - status: string (optional) - Filter by application status 
 * - sort: string (optional) - Field to sort by (default: appliedAt)
 * - order: "asc" | "desc" (optional) - Sort order (default: desc)
 * @returns All applications
 */
export async function GET(req: Request): Promise<NextResponse<ApiResponse<Application[]>>> {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized", status: 401 }, { status: 401 });

  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || undefined;
  const sort = (searchParams.get("sort") || "appliedAt") as string;
  const order = searchParams.get("order") === "asc" ? "asc" : "desc";

  // Validate sort field to avoid invalid fields being passed to Prisma
  const allowedSorts = new Set(["appliedAt", "updatedAt", "company", "jobTitle"]);
  const sortField = allowedSorts.has(sort) ? sort : "appliedAt";

  const where: any = {
    // `getUser()` returns the session user (which has email), so filter by relation via email
    user: { email: user.email! },
    ...(status ? { status } : {}),
  };

  if (search) {
    where.OR = [
      { jobTitle: { contains: search, mode: "insensitive" } },
      { company: { contains: search, mode: "insensitive" } },
      { jobLocation: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
      { notes: { contains: search, mode: "insensitive" } },
    ];
  }

  const applications = await prisma.application.findMany({
    where,
    orderBy: { [sortField]: order },
  });

  return NextResponse.json({ data: applications, status: 200 });
}

export async function POST(req: Request): Promise<NextResponse<ApiResponse<Application>> | NextResponse<ApiErrorResponse>> {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized", status: 401 }, { status: 401 });

  try {
    const json = await req.json();
    const body = createApplicationSchema.parse(json);


    const application = await prisma.application.create({
      data: {
        ...body,
        user: {
          connect: { email: user.email! },
        },
      },
    });

    return NextResponse.json({ data: application, status: 201 }, { status: 201 });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      console.log("Validation error creating application", err.issues);
      return NextResponse.json(
        { error: `${err.issues[0].path} ${err.issues[0].message} Format` || "Invalid input", status: 400 },
        { status: 400 }
      );
    }
    console.log("Error creating application", err);
    return NextResponse.json(
      { error: err.message || "Invalid input", status: 400 },
      { status: 400 }
    );
  }
}
