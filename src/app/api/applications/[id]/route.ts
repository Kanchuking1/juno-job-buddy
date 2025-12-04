import prisma from "@/lib/prisma";
import { getUser } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createApplicationSchema } from "@/lib/validators/application";

export async function GET(
  req: Request,
  { params }: { params: any }
) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const resolved = await params;
  const id = resolved.id as string;

  const application = await prisma.application.findUnique({
    where: { id },
    include: { user: true },
  });

  if (!application || application.user?.email !== user.email) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(application);
}

export async function PATCH(
  req: Request,
  { params }: { params: any }
) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const resolved = await params;
    const id = resolved.id as string;

    // ensure application belongs to user
    const existing = await prisma.application.findUnique({ where: { id }, include: { user: true } });
    if (!existing || existing.user?.email !== user.email) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const json = await req.json();
    const body = createApplicationSchema.partial().parse(json);

    const updated = await prisma.application.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Update failed" },
      { status: 400 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: any }
) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const resolved = await params;
  const id = resolved.id as string;

  // Check if the application exists and belongs to the user
  const application = await prisma.application.findUnique({ where: { id }, include: { user: true } });
  if (!application) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (application.user?.email !== user.email) {
    return NextResponse.json({ error: "Forbidden: Application does not belong to user" }, { status: 403 });
  }

  await prisma.application.delete({ where: { id } });

  return NextResponse.json({ success: true });
}
