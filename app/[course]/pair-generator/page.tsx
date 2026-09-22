import Link from "next/link";
import { listCourses } from "@/lib/content";
import PairGenerator from "./PairGenerator";

export function generateStaticParams() {
  return listCourses().map((course) => ({ course }));
}

export default async function PairGeneratorPage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;

  return (
    <main className="max-w-2xl px-6 py-16">
      <Link href={`/${course}`} className="text-sm text-neutral-500 hover:underline">
        ← {course.toUpperCase()}
      </Link>
      <h1 className="text-2xl font-semibold mt-4 mb-8">Pair Generator</h1>
      <PairGenerator course={course} />
    </main>
  );
}
