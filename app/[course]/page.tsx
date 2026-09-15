import Link from "next/link";
import { notFound } from "next/navigation";
import { listCourses, listNotes } from "@/lib/content";

export function generateStaticParams() {
  return listCourses().map((course) => ({ course }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const notes = listNotes(course);
  if (notes.length === 0) notFound();

  return (
    <main className="max-w-2xl px-6 py-16">
      <Link href="/" className="text-sm text-neutral-500 hover:underline">
        ← All classes
      </Link>
      <h1 className="text-2xl font-semibold mt-4 mb-8">{course.toUpperCase()}</h1>
      <ul className="space-y-2">
        {notes.map((n) => (
          <li key={n.slug}>
            <Link href={`/${n.course}/${n.slug}`} className="underline underline-offset-4">
              {n.title}
            </Link>
            {n.type && <span className="ml-2 text-xs text-neutral-500">{n.type}</span>}
          </li>
        ))}
      </ul>
    </main>
  );
}
