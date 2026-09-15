import Link from "next/link";
import { notFound } from "next/navigation";
import { getNote, listAllNotes } from "@/lib/content";

export function generateStaticParams() {
  return listAllNotes().map((n) => ({ course: n.course, slug: n.slug }));
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ course: string; slug: string }>;
}) {
  const { course, slug } = await params;
  const note = getNote(course, slug);
  if (!note) notFound();

  return (
    <main className="max-w-2xl px-6 py-16">
      <Link href={`/${course}`} className="text-sm text-neutral-500 hover:underline">
        ← {course.toUpperCase()}
      </Link>
      <h1 className="text-2xl font-semibold mt-4 mb-8">{note.title}</h1>
      <article
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: note.html }}
      />
    </main>
  );
}
