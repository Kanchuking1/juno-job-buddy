import { prisma } from "@/lib/prisma";
import { getUser } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createApplicationSchema } from "@/lib/validators/application";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const application = await prisma.application.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!application || application.userId !== user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(application);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const json = await req.json();
    const body = createApplicationSchema.partial().parse(json);

    const updated = await prisma.application.update({
      where: {
        id: params.id,
      },
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
  { params }: { params: { id: string } }
) {
  const user = await getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  await prisma.application.delete({
    where: { id: params.id },
  });

  return NextResponse.json({ success: true });
}
