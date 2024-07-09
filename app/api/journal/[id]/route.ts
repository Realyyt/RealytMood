import { Analyze } from "@/utils/ai";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, { params }) => {
  const { content } = await request.json();
  const user = await getUserFromClerkID();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content,
    },
  });
  const analysis = await Analyze(updatedEntry.content);
  const updated = await prisma.entryAnalysis.upsert({
    where: {
      entryId: updatedEntry.id,
      userId: user.id,
    },
    create: {
      entry: {
        connect: {
          id: updatedEntry.id,
        },
      },
      ...analysis,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
    update: analysis,
  });

  console.log(updated)

  return NextResponse.json({ data:{... updatedEntry, analysis:updated} });
};
