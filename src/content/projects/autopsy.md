---
title: "Autopsy"
description: "A web game built using Typescript and our professor's custom game engine called Wolfie2d. The game engine was designed to be as barebones as possible."
tags: ["TypeScript", "Game Development", "Wolfie2d"]
image: "@/assets/autopsy.png"
link: "https://autopsy-32c5e.web.app/"
sourceLink: "https://github.com/alkmei/autopsy-wolfie2d"
dateRange: "March 2024 - August 2024"
---

## Post Mortem

Autopsy is a web game we made for CSE 380 at Stony Brook University, a 2D game programming class. We were put under the constraints of using the Wolfie2d engine, which, in no offense to the authors, was very crap. This was intentional, as it forced us to learn how to work under a low level environment for a game engine.

The game itself is an action platformer, inspired by the Megaman Zero games. You play as a grim reaper and reap enemies.

### tl;dr

After months of struggling to keep up with deadlines, we managed to complete the six levels, one of which was a boss level. It did good enough to be entered as a finalist in the school's [game programming contest in 2024](https://www3.cs.stonybrook.edu/~games/history.html), which none of us could attend. 

### Analysis
#### The Good

I was surprised by how well the player character feels, despite having to work in the constraints of the engine, and in general, I was glad at how we managed to finish the game in the time constraints that we had. 

#### The Bad and the Ugly

Oh what to say... Some of the levels are way too long. The boss at the end is too much of a difficulty spike. I had originally intended for the player character to have multiple weapons, and a more intricate combo system. The game is thematically messy. The levels don't really follow a coherent theme, the music is inconsistent, and one of the backgrounds was AI generated (we did it mostly as a joke, back then, image generation was crap).

It's been a while, so I don't remember all my problems with the engine, but I do remember that the way the engine was structured tied entities directly to sprites, as in sprites *were* entities with hitboxes and state machines. The sprite entity amalgamate was also limited to one state machine, which I had to hack my way around in order to implement the player controller correctly. The engine was weirdly opinionated. It was hardcoded to use *Tiled*, and maps had to be tilemaps. 

Also, the game *Have a Nice Death* came out a year we thought of the idea, and we had no idea the game existed. 

#### Lessons Learned

I would use a better game engine, like Godot. It would've probably let us make the game in half the time. Also, a side note, the game was technically a compromise on my part. The original idea I had wasn't an action platformer, but instead a puzzle game that would switch between 2D and 3D using raycasting. It would've probably been harder to make, but I think it would've been more satisfying for me to have made.

### Final Rating - **4/5**

Despite my complaining, it was a really fun project for us to make, and it humbled me on just how hard and multidisciplinary game development is. 