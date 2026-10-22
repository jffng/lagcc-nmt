import type { Metadata } from "next";
import Link from "next/link";
import { listSubmissions } from "@/lib/assignment2";
import PhoneViewer from "./PhoneViewer";

export const metadata: Metadata = {
  title: "Assignment 2 — Mini-Comic or Photo Essay",
};

export default function Assignment2Page() {
  const submissions = listSubmissions();

  return (
    <main className="max-w-5xl px-6 py-16">
      <Link href="/huw112" className="text-sm text-neutral-500 hover:underline">
        ← HUW112
      </Link>
      <h1 className="text-2xl font-semibold mt-4 mb-8">
        Assignment 2: Mini-Comic or Photo Essay
      </h1>
      {submissions.length === 0 ? (
        <p className="text-sm text-neutral-600">
          No submissions yet. Add images to{" "}
          <code className="font-mono">public/assignment2/&lt;student-name&gt;/</code> as
          .png or .jpg (named 1.png, 2.png, …), then rebuild.
        </p>
      ) : (
        <PhoneViewer submissions={submissions} />
      )}
    </main>
  );
}
