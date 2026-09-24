---
publish: true
course: huw161
type: classnotes
title: Class 4 — Website as architecture
term: Fall 2026
date: '2026-09-24'
order: 4
slug: class-4-website-as-architecture
---

### Agenda

- **Discussion: The Good Room**
- **Figma demo: Recreate & Reimagine, start to finish**
- **Break**
- **Recreate & Reimagine work time**

### Discussion

What makes a digital space feel inhabitable?

1. Think of a website or app you enjoy spending time in. What makes it feel that way? Is it something about how it looks, how it behaves, or something harder to name?

2. Now think of one you use constantly but don't actually like being in. What's the difference?

3. Chimero compares the NYPL Reading Room to Penn Station: one preserved as a public good, one demolished for profit. Can you think of a website or platform that got worse over time because it started prioritizing profits over people? What changed, specifically?

4. Chimero writes "there is so much convenience, but so little comfort." Pick an app on your phone — is it convenient, comfortable, both, or neither? What would need to change for it to become comfortable?

5. Is it possible to build something profitable and cared-for at the same time, or are those always in tension? Can you name an example that does both?

6. For your own scavenger hunt sites: are they being designed to serve the person looking at it, or to get something from them (attention, a click, a purchase)? Is that always a bad thing?

7. What's one small design choice — in navigation, typography, pacing, or interaction — that would make a digital space feel more like a "good room" and less like something optimized against you?


### Assignment: Recreate & Reimagine

**Due Thursday, October 1**

1. Take one of the examples you pulled from the Website Scavenger Hunt.

2. Recreate it in Figma — match the original's layout and text hierarchy as
   closely as you can (what's the headline, what's body text, what's a button
   or label).

3. Reimagine it using **three different typeface options**. All three must
   live in a **single Figma frame**, laid out so they can be compared side by
   side.

4. For each of your three options, write a short explanation (1–2 sentences)
   of *why* you chose that typeface — how it changes the tone, legibility, or
   feeling of the site compared to the original.

**Requirements**
- One Figma frame containing the recreated layout and all three typeface
  options
- Each option must actually change the typeface, not just the size or color
- A short written rationale per option, referencing at least one concept from
  class (hierarchy, weight, kerning, line height, or serif vs. sans-serif)
- Export your frames as jpeg or png

**Submit via Brightspace.**

### Rubric

| Category | Excellent | Proficient | Needs Improvement |
|---|---|---|---|
| **Recreation accuracy** (25 pts) | Layout and text hierarchy closely match the original | Layout is recognizable but hierarchy is unclear or inconsistent | Layout doesn't reflect the original's structure |
| **Typeface exploration** (25 pts) | Three distinct typefaces, each a thoughtful fit for the site's purpose and tone | Three typefaces present, but some choices feel arbitrary or mismatched to the site | Fewer than three typefaces, or choices show no real consideration of fit |
| **Written rationale** (25 pts) | Each explanation clearly connects the typeface to tone, legibility, or a class concept | Explanations are present but vague or generic ("it looks nice") | Rationale missing or doesn't relate to the typeface choice |
| **Craft & execution** (25 pts) | Frame is clean, organized, and easy to read at a glance | Frame is functional but cluttered or inconsistently spaced/aligned | Frame is difficult to follow or incomplete |



### Discussion: The Good Room

Last class you read Frank Chimero's *The Good Room*. Chimero compares websites to
physical rooms: some are built to take care of the people inside them, and some
are built to get something out of those people. We'll talk through the
discussion questions above as a group.

Keep question 6 in mind. When you reimagine your scavenger hunt site today, your
typeface choice is one of the main things that decides whether the site feels
welcoming or feels like it's selling to you.

### Figma demo: Recreate & Reimagine, start to finish

This demo follows the assignment in order, so you can use it as a checklist
while you work. You've already practiced the font picker, font size, line
height, and weight. Today we put those skills together and add a few new ones.

#### Step 1 — Set up your tracing reference

The easiest way to get a layout right is to trace over it, the way you'd trace
a drawing through thin paper.

1. Open your Figma file from the Internet Scavenger Hunt and find the
   screenshot of the site you're recreating. Copy it into a clear area of the
   canvas (the large gray workspace).
2. With the screenshot selected, press **⌘ + Option + G** (Mac) or
   **Ctrl + Alt + G** (Windows) to wrap it in a **frame**. A frame is Figma's
   version of a page or artboard: a box with its own size and background that
   holds your design. Doing it this way makes the frame exactly the same size
   as your screenshot.
3. Select the screenshot again. In the right panel, under **Layer**, lower its
   opacity to about **30–40%** so it's faint.
4. Lock it so you can't drag it by accident: hover over it in the **Layers
   panel** (the list of everything on the canvas, on the left) and click the
   lock icon.

#### Step 2 — Rebuild the layout on top

You're rebuilding the site's structure: what goes where, and how important each
piece of text is.

- **Layout regions:** Use the Frame tool (**F**) to draw a box for each big
  section of the site, such as the header, navigation, hero (the large top
  banner), content, and footer. Frames can sit inside other frames. That's
  called *nesting*, and it keeps each region together.
- **Frames vs. groups:** A **group** (**⌘/Ctrl + G**) just bundles layers so
  they move together. It has no size or background of its own. Use **frames**
  for layout regions and **groups** for small bundles, like an icon plus its
  label.
- **Images:** Use the real images from the site. In your browser, right-click
  the image → **Copy Image**, then paste it into Figma. Hold **Shift** while
  you resize it so it doesn't stretch. If it needs cropping, drag it into a
  frame the size you want. Frames hide anything that hangs outside their
  edges.
- **Buttons:** Draw a rectangle (**R**) and put a text label on top.
- **Text and hierarchy:** Use the Text tool (**T**) to rebuild every piece of
  text. *Hierarchy* means how the design shows you what to read first, second,
  and third. Before you style anything, sort the site's text into levels:
  headline, subheadings, body text, and buttons/labels. Then rename each layer
  to match (double-click its name in the Layers panel: "Headline," "Body,"
  "Button label"). Each level should be clearly different from the others in
  size and weight.
- **Matching the original font:** Use Chrome DevTools (from last class) to find
  the site's font. If Figma doesn't have that font, choose the closest match
  you can find and say so in your notes.
- **Matching colors:** Select a shape or text layer, click its color swatch
  under **Fill**, and use the **eyedropper** (or press **I**) to pick the exact
  color from your screenshot.
- **Alignment and spacing:** Select several layers and use the alignment
  buttons at the top of the right panel to line up their edges or centers.
  Use **Distribute** to make the gaps between them equal. Even spacing is what
  separates a clean frame from a cluttered one, and it's graded under **Craft
  & execution**.

When you're done, **delete the faint screenshot** from inside the frame. Keep
an unlocked copy next to your work on the canvas so you can still compare.

#### Step 3 — Duplicate and swap typefaces

1. Select your finished recreation and press **⌘/Ctrl + D** three times to make
   three copies. Arrange all four in a row.
2. Select all four, then press **⌘ + Option + G** / **Ctrl + Alt + G** to wrap
   them in one **parent frame**. This is the "single Figma frame" the
   assignment asks for. Your original recreation plus Options 1, 2, and 3 sit
   inside it.
3. **Swap the font on many text layers at once.** In one copy, hold **Shift**
   and click every text layer in the Layers panel, then choose a new font in
   the Typography section. Each layer keeps its own size; only the typeface
   changes. To select all the text at one level quickly, right-click a text
   layer → **Select matching layers**.
4. **Fix what breaks.** Every typeface has different widths and proportions,
   so the text will reflow: lines wrap in new places, and headlines may spill
   out of their boxes. Adjust size, line height, and weight until the
   hierarchy reads clearly again. If Figma shows a font weight as missing, the
   new typeface doesn't come in that weight, so choose the closest one it has.
5. **Letter spacing = kerning (roughly).** Figma doesn't have a setting called
   "kerning." The **letter spacing** field in the Typography section controls
   the space between all the letters. Tightening it slightly on large
   headlines is a common fix.

Remember: every option has to change the **typeface itself**, not just the
size or color.

#### Step 4 — Label each option and write your rationale

Under each of your three options, still inside the parent frame, add a text
box with:

- The typeface name (e.g. "Option 2 — Playfair Display")
- 1–2 sentences on **why** you chose it, using at least one class concept:
  hierarchy, weight, kerning, line height, or serif vs. sans-serif

A strong rationale compares your option to the original:

> *Option 2 — Playfair Display.* This high-contrast serif makes the headline
> feel like a magazine cover: more editorial and less corporate than the
> original's geometric sans-serif. I increased the body text's line height so
> the thinner strokes stay easy to read.

A weak rationale: *"I chose this font because it looks nice and modern."*
This scores "Needs Improvement" because it doesn't say what changes or why.

Also label the first design "Original — [font name]" so anyone looking can
compare.

#### Step 5 — Export and submit

1. Click the **parent frame's name** on the canvas to select the whole thing.
2. At the bottom of the right panel, find **Export** and click **+**.
3. Set the format to **PNG** and the size to **2x**, which makes the image
   sharp enough to read the small text. Click **Export**.
4. Copy your file's link: click **Share** (top right) → **Copy link**.
5. On Brightspace, upload the **PNG** and paste the **Figma link**.

### Break

### Recreate & Reimagine work time

You have the rest of today and all of next Tuesday (Sep 29) in class to work
on this. It's due **Thursday, October 1**. Suggested pace:

- **By the end of today:** Steps 1–2 done. Your recreation matches the
  original's layout and text hierarchy.
- **By the end of Tuesday:** Steps 3–4 done. You have three typeface options
  and a written rationale for each.
- **Before Thursday:** Check everything against the rubric, then export and
  submit (Step 5).

**Before you submit, check:**

- [ ] One parent frame containing your recreation + three options
- [ ] Real images from the site, not blank boxes
- [ ] Headline, body, and labels are clearly different levels in every option
- [ ] Each option uses a different **typeface**, not just a different size or
      color
- [ ] Each option has a typeface label and a 1–2 sentence rationale that
      names a class concept
- [ ] Everything is aligned and evenly spaced
- [ ] PNG (2x) and Figma link both uploaded to Brightspace
