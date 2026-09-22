"use client";

import { useState } from "react";

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

export default function PairGenerator({ names }: { names: string[] }) {
  const [groups, setGroups] = useState<string[][]>([]);

  return (
    <div>
      <button
        onClick={() => setGroups(makeGroups(names))}
        className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
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
