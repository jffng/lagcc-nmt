---
publish: true
course: huw112
type: classnotes
title: Class 16 — Subcompositions
term: Fall 2026
date: 2026-11-12T00:00:00.000Z
order: 16
slug: class-16-subcompositions
---
### Agenda

- Demo
	- Null Objects + Paths
	- Motion Blur
	- Track Mattes
	- Pre compositions
	- Adding Sound
- Work time

https://cuny907-my.sharepoint.com/:u:/g/personal/jeffrey_ong97_login_cuny_edu/IQD6AK-PXb2MSIIwGwQ6TJaaAdsVEZ_6Hzp1VamL2rJAmh0?e=ODrF1Q

**Drawing a Motion path using a Null Object**

1. Draw a **mask** or **shape layer path** with the Pen tool (it can be open, not closed).
2. Select the mask path in the timeline (**Layer > Mask > Mask Path**), then **Cmd/Ctrl+C** to copy it.
3. Select your layer, press **P**, click the Position property name, then **Cmd/Ctrl+V** to paste.
4. AE converts the path into Position keyframes. The first keyframe lands at the playhead and the last at the path’s end, so move the playhead to where you want the move to start before pasting.
5. Adjust timing by dragging the last keyframe, or select all keyframes and Option/Alt-drag the end to stretch them.

**The built-in motion blur**

1. In the Timeline panel, find the **Motion Blur switch** column. It’s a small icon of three circles. If you don’t see it, click **Toggle Switches / Modes** at the bottom of the timeline to show the switches.
2. Turn it on **per layer** by clicking the switch for that layer.
3. Turn on the **master switch**, the same three-circle icon in the top bar of the timeline. Without it, nothing renders blur, even if the layer switches are on.

**Recipe: word-by-word rise and fade**

1. Create your text layer. Twirl open it, then click **Animate** (next to Text) and add **Position**. Then click **Animate** again and add **Opacity**.
2. Set the Animator’s **Position** to something like `0, 30` (it starts 30 px low) and **Opacity** to `0%`.
3. Open the **Range Selector**. Under **Advanced**, set **Based On** to **Words** (or **Lines** for infographics).
4. Keyframe the Range Selector’s **Offset** from `-100%` to `100%`. Words rise and appear one after another.
5. Under Advanced, set **Shape** to **Ramp Up** or **Smoothness** around 100%, and add **Ease High/Low** values for softer motion. This is where the polish comes from.
6. Adjust the timing: faster offset for punchy, slower for dramatic.

**Making it work for speech bubbles**

- Animate the bubble first with a **scale pop** (0% to 105% to 100%, Easy Ease) or a **Trim Paths** draw-on if it’s a shape.
- Start the text animation about 4-6 frames after the bubble lands, so the bubble feels like it contains the words.
- For comic dialogue, set **Based On** to **Characters** and make the offset quick. It reads as typing or speaking without needing a literal typewriter effect.
- Add a slight **Scale** animator (90% to 100%) to make each word feel like it’s “spoken.”

**Making it work for infographics**

- Use **Lines** instead of words, and stagger more slowly.
- Pair with a **mask reveal**, where text slides up from behind a mask edge. Draw a rectangle mask around the text, then animate Position upward from outside the mask. It’s a classic, clean look that doesn’t need an animator.
- For numbers (like your 67 km counter), let the label reveal first and the number count up second, so the viewer reads in order.
### Demo: pre-compose

**A subcomposition is a composition inside a composition.** It bundles layers so you can treat them as one.

**Why**

- Apply one effect or transition to a whole frame
- Clean up a crowded timeline
- Build something once and reuse it

**Steps**

1. Select all the layers of frame 1
2. *Layer → Pre-compose* (**Cmd+Shift+C**)
3. Name it `Frame 1`
4. Choose **Move all attributes into the new composition**
5. OK. The layers are now one layer.
6. **Double-click** it to open the inside. Use the tabs at the top of the timeline to go back.

**Now try this**

1. Select the `Frame 1` layer
2. *Effect → Transition → Linear Wipe*
3. Animate Transition Completion
4. The whole frame wipes as one piece

**Gotchas**

- Nested layer stops early? The inner comp is too short. *Composition → Composition Settings → Duration*.
- Keyframes disappeared? Open the comp. They moved inside.
- Want to un-nest? Select the inner layers, cut, go back, paste.

### Demo: Track Mattes

**Setup**

1. Put your **video layer** in the timeline.
2. Create a **text layer** and place it **above** the video. Use a thick, bold font at a large size, since thin letters show very little video.
3. If you don’t see the **Track Matte** column, click **Toggle Switches / Modes** at the bottom of the timeline until it appears. It’s labeled **TrkMat**.
4. On the **video layer**, open its TrkMat dropdown and choose **Alpha Matte “[your text layer name]”**. In current versions of After Effects you can pick the matte layer from a second dropdown or the pick whip next to it.
5. The text layer’s own visibility toggles off automatically, and the video now shows only inside the letter shapes.

The matte layer needs to be _above_ the layer it’s affecting in older versions. Newer versions (2020 and later) let you choose any layer as the matte, but keeping text above the video is the safest habit.

**Choosing the matte type**

- **Alpha Matte:** shows the video wherever the text exists. This is what you want.
- **Alpha Inverted Matte:** flips it, so the video appears everywhere _except_ the text, and the letters become holes.
- **Luma Matte and Luma Inverted Matte** use brightness instead of transparency. They’re useful for gradients and grayscale reveals, but not needed for plain text.

**Adding a background behind it**  
Once the video is only visible through the text, the rest of the frame is transparent. Add a **solid layer** (Layer > New > Solid) _below_ the video and set it to a color or gradient.

**Making it more interesting**

- **Animate the text.** Because the text is the matte, any Text Animator you apply, such as the word-by-word rise from earlier, will reveal the video through the letters as they appear.
- **Move the video independently.** Since the video is its own layer, you can scale or slide it inside the letters while the text stays still. Parallax between the two feels dynamic.
- **Outline the letters.** Duplicate the text layer, turn the duplicate into a stroke-only style (or use Layer Styles > Stroke), and leave it as a visible layer above the video. The outline sits crisply on top of the masked video.
- **Precomp the pair.** Select both the video and the text, **Pre-compose** them, and you can treat the whole thing as one layer for further effects or timing changes.

### Demo: reuse and organize

**Reuse**

- Build a repeating element once (speech bubble, caption bar, logo), pre-compose it as `Caption`
- Drag the same comp onto the timeline twice: **editing one edits both**
- Want an independent copy? In the Project panel, select the comp and **Cmd+D** (duplicate)
- Change the text inside the duplicate

**Line frames up automatically**

1. Select all the `Frame` layers (in order)
2. *Animate → Keyframe Assistant → Sequence Layers*
3. Check **Overlap**, duration 10–15 frames
4. They line up end to end, overlapping slightly
5. Add a fade or wipe to the overlap

**Organize**

- Rename layers: select one and press **Return**
- Use colors (label column) for frames
- Folders in the Project panel
- Delete unused footage

**Go further (optional, for a few students)**

- **Loop:** Option+click the stopwatch on a property, type `loopOut()`, hit Enter. The animation repeats forever.
- **Trim Paths:** on a shape layer with a stroke, *Add → Trim Paths*, animate **End** 0% → 100% to draw a line
