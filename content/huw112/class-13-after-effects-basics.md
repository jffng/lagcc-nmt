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

- Discussion
- Review inspiration:
- Install and get set up with After Effects
- Prepare poster layers for export

## Discussion
- What is a meme? 
	- Everyone add one of your favorite or more recently encountered meme to the figma board from last week: https://www.figma.com/board/mRwVikIJKbhOYrYFu4CZJv/Animation---Video-Inspo?node-id=0-1&p=f&t=ay8OUho0lkYWTdrg-0
- What is a gif? 
- What is a video? 
	- Sequence of images and sound played back together over time.
	- Do they offer a representation of reality?

![](/content-assets/original_689e8c3b300108c959b68c06c2352b14.gif)

- What are the qualities of a good animation? 

- What is frames per second? 
	- **~10-12 fps — motion starts to read as motion.** Below this, the brain perceives a sequence of distinct images rather than continuous movement. Early animation (Disney's "Steamboat Willie", traditional hand-drawn animation) often runs at 12 fps with each frame held for two frames of a 24 fps film — "animating on twos." You see the seams clearly, but it still reads as motion. Anime traditionally uses this approach and leans into the choppiness as style.
	- **~16 fps — the historical "persistence of vision" threshold.** Silent films ran here. Motion is continuous but flickery. This is the floor of "watchable."
	- **24 fps — the cinematic standard.** Adopted in 1927 for sound film (the speed needed for reliable audio sync). Reads as smooth motion to most viewers, but you can still see the seams in fast pans or fast motion — this is the "judder" you notice in panning shots in movies. The film industry kept this as a feature, not a bug; it's part of what makes movies look like movies.
	- **30 fps — broadcast / web video standard.** Smoother than 24, less "cinematic." Most TikToks, YouTube, etc.
	- **60 fps — the threshold where most people stop seeing individual frames in normal viewing.** This is the standard for games and high-frame-rate web content. Motion looks "real" or "video-like" rather than "cinematic."

- What are keyframes? 
	- Keyframes describe _states_. The animation is what happens between described states.
	- **keyframes are nouns, interpolation is the verb.** You declare nouns ("here, the circle is small"; "here, it's big"). The software supplies the verb ("growing").
	- This is also why character animators tend to prefer keyframe tools — the timing of a performance lives in specific beats, and you want to author each beat. And why generative artists tend to prefer code — the work is the system, and authoring individual moments would be missing the point.


### Demo: set up a project

**A composition** has a size, a speed, and a length. Everything you animate happens inside one.

**Create a composition**

*Composition → New Composition*

| Setting              | What to use                                             | Why                                                  |
| -------------------- | ------------------------------------------------------- | ---------------------------------------------------- |
| **Width / Height**   | Match your carousel: **1080 × 1920** or **1080 × 1350** | So nothing is cropped or stretched                   |
| **Frame rate**       | **30**                                                  | How many pictures per second                         |
| **Duration**         | **0:00:04:00** to start (4 seconds)                     | You can change it later                              |
| **Background color** | Pick one                                                | It doesn't export as a layer, it's just the backdrop |

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

- Nothing moves? You need *two* keyframes with different values.
- Layer disappears? Check the trim: the layer's bar must cover the playhead.
- Everything looks tiny? Check the comp size (*Composition → Composition Settings*).
- SVG stopped early? It came in as a composition. Drag it to a longer length or re-import as Footage.
