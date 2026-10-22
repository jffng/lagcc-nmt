"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Submission } from "@/lib/assignment2";

// iPhone 15 screen is 393 × 852 pt.
const SCREEN_RATIO = 393 / 852;
// Drag farther than this (px) to swipe; less than TAP_SLOP counts as a tap.
const SWIPE_THRESHOLD = 50;
const TAP_SLOP = 10;
// Phone size multiplier, for projectors. Adjust with the Size buttons or the +/- keys.
const MIN_SCALE = 1;
const MAX_SCALE = 2;
const SCALE_STEP = 0.25;

export default function PhoneViewer({ submissions }: { submissions: Submission[] }) {
  const [studentIndex, setStudentIndex] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [scale, setScale] = useState(1);
  const dragStartX = useRef<number | null>(null);

  const student = submissions[studentIndex];
  const lastFrame = student.frames.length - 1;

  function selectStudent(index: number) {
    setStudentIndex(index);
    setFrameIndex(0);
  }

  function resize(delta: number) {
    setScale((s) => Math.min(Math.max(s + delta, MIN_SCALE), MAX_SCALE));
  }

  function step(delta: number) {
    setFrameIndex((i) => Math.min(Math.max(i + delta, 0), lastFrame));
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") setFrameIndex((i) => Math.min(i + 1, lastFrame));
      if (e.key === "ArrowLeft") setFrameIndex((i) => Math.max(i - 1, 0));
      if (e.key === "+" || e.key === "=") resize(SCALE_STEP);
      if (e.key === "-") resize(-SCALE_STEP);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lastFrame]);

  // Touch, pen, and mouse all go through pointer events: drag to swipe,
  // tap the left third to go back, tap anywhere else to go forward.
  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragStartX.current = e.clientX;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (dragStartX.current === null) return;
    let dx = e.clientX - dragStartX.current;
    // Resist dragging past the first or last frame.
    if ((dx > 0 && frameIndex === 0) || (dx < 0 && frameIndex === lastFrame)) dx /= 3;
    setDragX(dx);
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>, cancelled: boolean) {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    dragStartX.current = null;
    setDragging(false);
    setDragX(0);
    if (cancelled) return;

    if (Math.abs(dx) >= SWIPE_THRESHOLD) {
      step(dx < 0 ? 1 : -1);
    } else if (Math.abs(dx) < TAP_SLOP) {
      const rect = e.currentTarget.getBoundingClientRect();
      step(e.clientX - rect.left < rect.width / 3 ? -1 : 1);
    }
  }

  return (
    <div className="grid gap-10 md:grid-cols-[14rem_1fr]">
      <nav aria-label="Students">
        <ul className="flex flex-wrap gap-2 md:flex-col md:gap-1">
          {submissions.map((s, i) => (
            <li key={s.id}>
              <button
                onClick={() => selectStudent(i)}
                aria-current={i === studentIndex}
                className={`w-full rounded-md px-3 py-1.5 text-left text-sm ${
                  i === studentIndex
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {s.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col items-center">
        <div
          className="relative"
          style={{
            width: `min(${20 * scale}rem, 85vw, calc((100svh - 11rem) * ${0.46 * scale}))`,
          }}
        >
          {/* side buttons */}
          <span className="absolute -left-[1%] top-[14%] h-[4%] w-[1.5%] rounded-l bg-neutral-700" />
          <span className="absolute -left-[1%] top-[21%] h-[7%] w-[1.5%] rounded-l bg-neutral-700" />
          <span className="absolute -left-[1%] top-[30%] h-[7%] w-[1.5%] rounded-l bg-neutral-700" />
          <span className="absolute -right-[1%] top-[24%] h-[11%] w-[1.5%] rounded-r bg-neutral-700" />

          {/* body */}
          <div className="rounded-[14%/6.5%] bg-neutral-900 p-[3%] shadow-xl ring-1 ring-neutral-700">
            {/* screen */}
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={(e) => endDrag(e, false)}
              onPointerCancel={(e) => endDrag(e, true)}
              className="relative w-full cursor-grab touch-pan-y select-none overflow-hidden rounded-[11.5%/5.3%] bg-black active:cursor-grabbing"
              style={{ aspectRatio: SCREEN_RATIO }}
            >
              {/* All frames sit side by side; dragging slides the whole track, so the
                  neighboring frame is visible while you swipe. Keyed by student so
                  switching students doesn't animate across different frame sets. */}
              <div
                key={student.id}
                className="pointer-events-none flex h-full"
                style={{
                  transform: `translateX(calc(${-frameIndex * 100}% + ${dragX}px))`,
                  transition: dragging ? "none" : "transform 250ms ease-out",
                }}
              >
                {student.frames.map((src, i) => (
                  <div key={src} className="relative h-full w-full shrink-0">
                    <Image
                      src={src}
                      alt={`${student.name}, frame ${i + 1} of ${student.frames.length}`}
                      fill
                      unoptimized
                      loading={Math.abs(i - frameIndex) <= 1 ? "eager" : "lazy"}
                      draggable={false}
                      sizes="40rem"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              {/* Dynamic Island */}
              <span className="pointer-events-none absolute left-1/2 top-[1.6%] h-[3.4%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => step(-1)}
            disabled={frameIndex === 0}
            aria-label="Previous frame"
            className="rounded-md border border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            ←
          </button>
          <div role="group" aria-label="Frames" className="flex items-center">
            {student.frames.map((_, i) => (
              <button
                key={i}
                onClick={() => setFrameIndex(i)}
                aria-label={`Go to frame ${i + 1}`}
                aria-current={i === frameIndex}
                className="p-1"
              >
                <span
                  className={`block h-2.5 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.5)] ring-1 ring-white transition-all ${
                    i === frameIndex
                      ? "w-6 bg-neutral-900"
                      : "w-2.5 bg-neutral-500 hover:bg-neutral-700"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => step(1)}
            disabled={frameIndex === lastFrame}
            aria-label="Next frame"
            className="rounded-md border border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            →
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-neutral-600">
          <span>Size</span>
          <button
            onClick={() => resize(-SCALE_STEP)}
            disabled={scale <= MIN_SCALE}
            aria-label="Make phone smaller"
            className="rounded-md border border-neutral-300 px-2.5 py-0.5 hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            −
          </button>
          <span className="w-12 text-center tabular-nums">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => resize(SCALE_STEP)}
            disabled={scale >= MAX_SCALE}
            aria-label="Make phone bigger"
            className="rounded-md border border-neutral-300 px-2.5 py-0.5 hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            +
          </button>
        </div>
        <p className="sr-only" aria-live="polite">
          Frame {frameIndex + 1} of {student.frames.length}
        </p>
      </div>
    </div>
  );
}
