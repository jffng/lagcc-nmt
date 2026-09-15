import Link from "next/link";
import { listAllNotes, listCourses } from "@/lib/content";

export default function HomePage() {
  const courses = listCourses();
  const notes = listAllNotes();

  return (
    <main className="max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-semibold mb-8">Class Materials</h1>
      {courses.length === 0 ? (
        <p className="text-neutral-500">
          No published materials yet. Run <code>npm run sync</code> after
          marking notes with <code>publish: true</code>.
        </p>
      ) : (
        <ul className="space-y-6">
          {courses.map((course) => (
            <li key={course}>
              <Link href={`/${course}`} className="text-lg font-medium underline underline-offset-4">
                {course.toUpperCase()}
              </Link>
              <ul className="mt-2 ml-4 space-y-1 text-sm text-neutral-500">
                {notes
                  .filter((n) => n.course === course)
                  .map((n) => (
                    <li key={n.slug}>
                      <Link href={`/${n.course}/${n.slug}`} className="hover:underline">
                        {n.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
