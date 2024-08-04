---
title: "10000 Stars Later"
author: saba
description: Reflecting back on the last few years of building Khoj, how we got here and the lessons we learnt along the way.
tldr: "The article chronicles the evolution of Khoj from a personal search engine to a cloud-scale personal AI with ability to paint, research online, provide specialized personas & run autonomously. It emphasizing key lessons learned in building an open-source company like prioritizing community engagement and iterative development to build human aligned AI."
heroImage: /blue_wave.png
pubDate: 2024-06-17
keywords: ["personal AI", "open-source", "community engagement"]
---
## The Khoj Journey So Far

The journey with Khoj has been an enlightening roller-coaster. Back in 2021, we were dabbling with creating these personal AI search engines - something to sift through our mountains of [org-mode](https://orgmode.org/) notes using a natural language interface. My co-founder [Debanjum](https://linkedin.com/in/debanjum) was turning these AI models into a local document search engine, while I was iterating on making Khoj easy to use, setup for other avid note takers.


![Star History Chart](https://assets.khoj.dev/star-history-202467.png)

Here's the ride we've been on so far:

1. We built a local document, image AI search engine for [Emacs](https://www.gnu.org/software/emacs/) users. Created the ability to chat with GPT, even about your notes, back [in 2021](https://github.com/khoj-ai/khoj/commit/0ac1e5f372dbe6baf16f1b0c3d4df1bf5da5efdb) [^1]. Did decently well on r/OrgMode. Missed being ChatGPT 🫠
2. Debanjum started working on Khoj full-time in the summer of '22. Our passion project to create an open-source, personal AI called Khoj, reached 300 GitHub stars. We landed [a spot](https://www.ycombinator.com/companies/khoj) in [YCombinator](https://ycombinator.com) for the summer of '23.
3. Someone hard-launched us on to the front page of HackerNews in July '23 but we [got roasted](https://news.ycombinator.com/item?id=36641542) for being mere chatgpt wrappers and not being open source enough.
4. We did a [ShowHN](https://news.ycombinator.com/item?id=36933452) of our new local chat with your docs experience. It got us on the front page of HN, this time with positive vibes.
5. On the impulse of closing the accessibility gap, we worked with Meta to integrate our personal AI into [WhatsApp](https://www.ycombinator.com/launches/JG4-khoj-your-superhuman-companion).
6. In November, I rearchitected Khoj to allow it to scale from a single user, self-hosted experience to a multi-user, cloud service[^2]. We launched the Khoj [cloud service](https://app.khoj.dev)!
7. Over the next few months we iterated based on user feedback, to turn Khoj into a capable AI agent. It now had the ability to research online, paint images, take on specialized [personas](https://app.khoj.dev/agents) and perform tasks [autonomously](https://app.khoj.dev/automations) on your behalf.
8. Performance was spotty, so we migrated from EC2 to ECS for smoother scaling.
9. [Some](https://www.youtube.com/watch?v=Lnx2K4TOnC4) [delightful](https://www.youtube.com/watch?v=10DUZA4KEvg) YouTube/[Twitter](https://x.com/tuturetom/status/1792877330571944078) posts made us go trending at #1 on Github. We scrambled to handle the big traffic spike. That earlier ECS migration became a massive lifesaver. Khoj crossed 10K stars. And our UX continued to look like it was straight out of a cartoon.
10. We hired our first teammate, [Raghav](https://www.linkedin.com/in/raghavtirumale/), for the summer, who's hit the grounding *sprinting* 🏃🏽‍♂️‍➡️

That brings us to today! Cool, so what did we learn?

### Building an Open Source AI Company

The dynamics of building an open-source AI company are quite different from closed-source companies. A lot of our early users are hackers and developers. This makes Khoj development more collaborative and transparent with less effort. It means the community can find vulnerabilities, test capabilities, report issues and contribute fixes earlier and faster. It means they can just jump in, get their hands dirty, and solve their problems without our assistance. **It means Khoj can get aligned to humans faster and stay aligned with them for longer.**

As maintainers of the repository, we need to do a better job of making it super easy for developers to help themselves. Documentation should be tight, complete. If someone asks you a question, answer it, and add the answer to your documentation right away. Your documentation should be really easily searchable ([Algolia + Docusaurus is GOAT](https://docusaurus.io/docs/search#using-algolia-docsearch)). You should flag good first issues for getting new contributors started with less effort.

The [Discord community](https://discord.gg/BDgyabRM6e) has been OP. Most of the people who self-host Khoj make their way there and give ample, active feedback. It's become a great place to share ideas and build our understanding of what AI will look like. That being said, it's really hard to scale great support while building your product. Sometimes you also have to say no to support requests, and that can be really hard. Especially when we were working on exclusively self-hosted LLM-application support, there was such a long tail of complex, bespoke user issues that we couldn't address. That can feel really disappointing.

**For engineering founders**, your job isn't just to build cool stuff. You also have to get good at sharing it with people, figuring out how to make something that actually solves an acute user need, and make it look nice. It pays dividends to actually design the UX of what you're going to build before you build it. And you'll thank yourself for creating specs before making architecture decisions. It makes it much easier to rubber duck your thought process and share it with your team. Don't write specs for single API endpoints.

Your team should be able to manage communication in a Slack channel or a WhatsApp group. You don't need a massive Notion or Jira dashboard when it's just two of you and an intern. Stay lean, keep your processes lightweight and efficient. Do weekly and monthly planning to stay focused.

The last year has been really eventful, full of learnings and adaptations. **Biggest lesson is to keep your ear to the ground, really listen to what pain points people are having, iterate on it quickly and cut out the noise.** We're not perfect, but we're learning.

### Convictions about AI

Through all this, we've also picked on a few pieces of conviction about AI:

- AI will fundamentally shift how we understand and access information. We need to carefully design our AI interfaces to ensure this shift improves our capabilities.
- Open-source AI is much faster and easier to keep aligned to individual human interests. We need our personal AI to be aligned to us and minimize chances of misalignment wherever possible. Even if the creators change, people should be able to take ownership of the service and ensure service/user alignment.
- Communication will get easier for people across languages, personas and mediums. But we need to ensure our communication channels do not get flooded with reality warping noise generated by AIs and humans.

**How we construct these new machines over these next few years will decide if AI improves the human condition. That is our north star. That is what we continue to innovate towards.**

### Footnotes
[^1]: There was no UX, just an experimental API for an intrepid explorer to discover
[^2]: This allowed folks to use Khoj from any device, even if they didn't have powerful GPUs. While folks with powerful machines could continue to self-host their Khoj privately.