import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { Analyze } from "@/utils/ai";

export const POST = async () => {
  const user = await getUserFromClerkID();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "Express yourself...I am your canvas",
    },
  });

  const analysis = await Analyze(entry.content);
  await prisma.entryAnalysis.create({
    data: {
      entryId: entry.id,
      userId: user.id,
      ...analysis,
    },
  });

  revalidatePath("/journal");
  return NextResponse.json({ data: entry });
};
