"use client";

import { useEffect, useState } from "react";

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function makeGroups(names: string[]): string[][] {
  const shuffled = shuffle(names);
  const groups: string[][] = [];
  for (let i = 0; i < shuffled.length; i += 2) {
    groups.push(shuffled.slice(i, i + 2));
  }
  // Fold a leftover single student into the last pair to make a trio.
  if (groups.length > 1 && groups[groups.length - 1].length === 1) {
    const odd = groups.pop()!;
    groups[groups.length - 1].push(...odd);
  }
  return groups;
}

function parseNames(raw: string): string[] {
  return raw
    .split("\n")
    .map((name) => name.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

export default function PairGenerator({ course }: { course: string }) {
  const storageKey = `pair-generator:${course}:roster`;
  const [raw, setRaw] = useState("");
  const [groups, setGroups] = useState<string[][]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setRaw(saved);
    } catch {
      // Ignore storage access failures (e.g. private browsing).
    }
  }, [storageKey]);

  function handleRawChange(value: string) {
    setRaw(value);
    try {
      localStorage.setItem(storageKey, value);
    } catch {
      // Ignore storage access failures (e.g. private browsing).
    }
  }

  const names = parseNames(raw);

  return (
    <div>
      <label htmlFor="roster" className="block text-sm font-medium mb-2">
        Names (one per line)
      </label>
      <textarea
        id="roster"
        value={raw}
        onChange={(e) => handleRawChange(e.target.value)}
        rows={8}
        placeholder={"Ada Lovelace\nGrace Hopper\nAlan Turing"}
        className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm font-mono"
      />

      <button
        onClick={() => setGroups(makeGroups(names))}
        disabled={names.length === 0}
        className="mt-4 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Generate pairs
      </button>

      {groups.length > 0 && (
        <ul className="mt-8 space-y-2">
          {groups.map((group, i) => (
            <li
              key={i}
              className="rounded-md border border-neutral-200 px-4 py-2 text-sm"
            >
              {group.join(" & ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
