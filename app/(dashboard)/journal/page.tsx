import NewEntryCard from "@/components/NewEntryCard";
import { getUserFromClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import EntryCard from "@/components/EntryCard";
import Link from "next/link";

const JournalEntries = async () => {
  const user = await getUserFromClerkID();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return entries;
};

const Journal = async () => {
  const entries = await JournalEntries();

  return (
    <div className="p-8 bg-zinc-400/10">
      <h2 className="text-3xl mb-8">Journal</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Journal;
