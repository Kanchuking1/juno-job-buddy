import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createApplicationSchema } from "@/lib/validators/application";

export async function GET(req: Request) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || undefined;
  const sort = searchParams.get("sort") || "appliedAt";
  const order = searchParams.get("order") === "asc" ? "asc" : "desc";

  const applications = await prisma.application.findMany({
    where: {
      user: { email: user.email! },
      OR: [
        { jobTitle: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
      ...(status ? { status } : {}),
    },
    orderBy: { [sort]: order },
  });

  return NextResponse.json(applications);
}

export async function POST(req: Request) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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

    return NextResponse.json(application, { status: 201 });
  } catch (err: any) {
    console.log("Error creating application", err);
    return NextResponse.json(
      { error: err.message || "Invalid input" },
      { status: 400 }
    );
  }
}
