import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoster, listCoursesWithRoster } from "@/lib/content";
import PairGenerator from "./PairGenerator";

export function generateStaticParams() {
  return listCoursesWithRoster().map((course) => ({ course }));
}

export default async function PairGeneratorPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const names = getRoster(course);
  if (names.length === 0) notFound();

  return (
    <main className="max-w-2xl px-6 py-16">
      <Link href={`/${course}`} className="text-sm text-neutral-500 hover:underline">
        ← {course.toUpperCase()}
      </Link>
      <h1 className="text-2xl font-semibold mt-4 mb-8">Pair Generator</h1>
      <PairGenerator names={names} />
    </main>
  );
}
