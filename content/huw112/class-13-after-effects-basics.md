---
publish: true
course: huw112
type: classnotes
title: Class 13 — After Effects Basics
term: Fall 2026
date: 2026-10-29T00:00:00.000Z
order: 13
slug: class-13-after-effects-basics
---
### Agenda

- Demo: project settings, compositions, importing
- Break
- Demo: keyframes
- Work time: animate your first frame
- Share

### Demo: set up a project

**A composition** has a size, a speed, and a length. Everything you animate happens inside one.

**Create a composition**

*Composition → New Composition*

| Setting | What to use | Why |
|---|---|---|
| **Width / Height** | Match your carousel: **1080 × 1920** or **1080 × 1350** | So nothing is cropped or stretched |
| **Frame rate** | **30** (or 24 if you want a film look) | How many pictures per second |
| **Duration** | **0:00:04:00** to start (4 seconds) | You can change it later |
| **Background color** | Pick one | It doesn't export as a layer, it's just the backdrop |

**The panels**

- **Project:** all your files
- **Composition:** what you see
- **Timeline:** layers over time
- **Character:** text settings

If everything looks wrong: *Window → Workspace → Reset "Default"*.

**Import your Figma exports**

- *File → Import → File*, or drag files in
- Drag from the Project panel onto the timeline
- **PNG:** comes in as one layer
- **SVG:** choose **Footage** for a single graphic. If you choose **Composition**, After Effects makes a *nested* composition and its length is limited to that comp's length. If a layer stops early, this is why.
### Assignment 3: Short Video

Due **Tuesday, November 17**, at the beginning of class.

Make a **20–30 second video** from your carousel, or a new story if you'd rather start over. Use animation, images, a video clip, and sound.

Pick one format:

1. **Teaser** for a game, movie, or project
2. **Explainer**
3. **Advertisement**
4. **Something else** (just check with me first)

### Break

### Demo: keyframes

**A keyframe is a "this is where it is, at this moment."**

You say where it starts, and where it ends. The computer fills in the middle.

**Make a thing move**

1. Click a layer
2. Press **P** for Position
3. Move the playhead to 0:00. Click the **stopwatch**. That's your first keyframe.
4. Move the playhead to 1:00. Drag the layer to a new place. A second keyframe appears.
5. Press **Space** to play

**The shortcut keys**

| Key | Property |
|---|---|
| **P** | Position |
| **S** | Scale |
| **R** | Rotation |
| **T** | Opacity |
| **U** | Show every property you've animated |

**Three ways to make something arrive**

- **Fade in:** Opacity from 0% to 100%
- **Slide in:** Position from off-screen to its home
- **Grow in:** Scale from 0% to 100%

Combine two and it gets interesting.

**Preview and export**

- **Space** or **0 (numpad)**: preview. Playback is rough at first, that's normal.
- *Composition → Add to Render Queue*, then choose **H.264** and a place to save. Render, then watch it on your phone.

### Work time: animate your first frame

1. Set up a composition that matches your carousel
2. Bring in the layers from **frame 1**
3. Retype the title
4. Animate **three things, max**:
   - What appears first?
   - What follows?
   - What stays still?
5. Export an MP4 and check it on your phone

**Goal:** by the end of class, a 3–4 second MP4 of frame 1.

**Stuck?**

- Nothing moves? You need *two* keyframes with different values.
- Layer disappears? Check the trim: the layer's bar must cover the playhead.
- Everything looks tiny? Check the comp size (*Composition → Composition Settings*).
- SVG stopped early? It came in as a composition. Drag it to a longer length or re-import as Footage.

### Share

Silent first. Play your MP4 for a partner without explaining anything. What did they notice first?

### Homework

- Animate **frame 2** the same way
- Keep your project file and exports in one folder. Name it clearly.
- Next class: easing, parenting, and transitions between frames.
