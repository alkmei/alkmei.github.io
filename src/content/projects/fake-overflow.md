---
title: "Fake Overflow"
description: "A simplified clone of Stack Overflow built with the MERN stack. It features user authentication, question posting, answer submission, tag searching, and voting functionality."
tags: ["MongoDB", "React", "Node.js", "Express"]
image: "@/assets/fake_overflow.png"
link: "https://fake-overflow-site.onrender.com/"
sourceLink: "https://github.com/alkmei/fake-overflow"
dateRange: "April 2024 - September 2024"
---

## Post Mortem

A Stack Overflow clone. Nuff said.

### tl;dr

This was an easy project for us to make. For me and my partner, it was conceptually simple as we had done similar projects in high school. This was my introduction to the MERN stack, which was a very popular stack for people to learn.

### Analysis
#### The Good

It forced me to learn React. Before this, I had only known Vue. The professor only required us to use Javascript, and at that point, I hated vanilla Javascript. We got permission to use Typescript, which was nice. 

#### The Bad and the Ugly

We didn't struggle much in this project. The only thing was probably handling searching posts. We did it client-side instead of server-side, because it worked and we never bothered to write queries for MongoDB.

#### Lessons Learned

I hate MongoDB. But in all seriousness, if I were to remake this project I would have probably chosen this stack:

- Django
- Any SQL database.

It provides server side rendering, authentication, and an amazing ORM. If I were forced to use the MERN stack though, I would've probably:

- Used Better-Auth for authentication,
- OpenAPI for handling contracts between the frontend and backend,
- Tanstack Query for caching,
- Begrudgingly still use MongoDB (but now in Docker).

My beef with MongoDB is the fact that Mongoose was not strictly typed, meaning handling schema changes was annoying. Otherwise, MongoDB is a bit of a trap for beginners. It and the MERN stack are heavily advertised and pushed by MongoDB Inc. which isn't a problem, but it encourages beginners to skip learning SQL and skip to using NoSQL databases.

Realistically, most of your data can and should be represented by relationships, so it would be more efficiently represented in SQL. That, and the fact SQL is from the 70s, is much more widely used in the industry, means that beginners should just learn SQL imo.

But the era of MERN dominance with beginners has mostly faded away, and most people just vibecode apps with Next.js and Supabase. Such is life.


### Final Rating - **5/5**

Nice and easy.