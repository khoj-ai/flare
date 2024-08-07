---
title: "Springing forward in our web stack"
author: saba
description: Khoj recently migrated to Next.js with static site generation, refreshing our front-end and paving the way for future scalability.
tldr: Khoj transitioned from a bespoke web stack using FastAPI, Django, and plain HTML/CSS/JS to a modern framework with Next.js, Tailwind, and Shadcn. This migration addressed development bottlenecks, improved scalability, and resulted in a significant UI upgrade, demonstrating the importance of evolving technology choices as a product grows.
heroImage: /abstract_orange_blue_dots.png
pubDate: 2024-08-07
keywords: ["front-end", "web stack", "UIUX"]
---


Our web stack at Khoj has been quite unique. We have a Python web server using FastAPI as our app layer and Django for ORM and admin pages. While this served us fine initially, it's led to some [performance issues](https://github.com/fastapi/fastapi/discussions/8009) that keep me up at night and deserve their own discussion.

Our front-end journey is equally interesting. We recently launched [a brand new UX](https://app.khoj.dev) (we call it Spring UX), migrating our front-end code base in the process.

For three years, we served pages using Jinja templates with FastAPI. This approach allowed for partial server-side rendering but meant building web components from scratch. Yes, we were using plain HTML, CSS, and JavaScript even after reaching 10,000 users! We chose this path of under-engineering for several reasons:

1. Lightweight static HTML pages
2. Simplified development without cross-OS compatibility issues
3. Abundant solutions to common problems, making AI assistance more effective
4. Avoiding time-consuming migration to modern frameworks while validating our product

This strategy worked well initially, but as we grew, limitations became apparent. We faced development bottlenecks due to writing core code from scratch and struggled with code duplication. As we prepared for a major redesign, it became clear that our front-end needed an overhaul too.

We needed a graceful migration path that minimized server-side changes. After considering options like [Svelte](https://kit.svelte.dev/) and [HTML Components](https://www.w3.org/TR/NOTE-HTMLComponents), we settled on Next.js with [static site generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation). This choice allows us to:

- Leverage popular component libraries
- Migrate without a complete overhaul
- Minimize new technology risks
- Potentially move our front-end entirely to a CDN in the future

We adopted the startup starter pack ™️, aka [Next.js](https://nextjs.org/), [Tailwind](https://tailwindcss.com/), and [Shadcn](https://ui.shadcn.com/).

An additional consideration was our [Python package on PyPI](https://pypi.org/project/khoj/). We needed the new front-end pages to work within this package. Our solution involves building files in our GitHub action, packaging them into a distribution directory, and serving them from a static directory.

Since then, we've moved from a cartoon-like UX to a more colorful, modern interface we call "spring" – symbolizing both our visual refresh and a leap forward in user experience.

This journey highlights the evolution of our tech stack, balancing simplicity with the need for scalability and "modern practices". Eventually, you do actually have to remove the stilts on your codebase as your product grows and user needs evolve. 

| Before                                                                   | After                                                                   |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| ![cartoon ux](https://s3.amazonaws.com/assets.khoj.dev/old_ux_still.png) | ![spring ux](https://s3.amazonaws.com/assets.khoj.dev/new_ux_still.png) |
