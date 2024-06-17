---
title: "One Year and 10000 Stars Later"
author: saba
description: Reflecting back on the last year of building Khoj, and how we got here.
tldr: "The article chronicles the evolution of Khoj from a personal search engine to an open-source cloud service leveraging large language models, online search, and other AI tools, while emphasizing key lessons learned in building an open-source company like prioritizing documentation, community engagement, and iterative development to address user needs."
heroImage: /blue_wave.png
pubDate: 2024-06-17
---
## Scaling an open-source consumer AI service

The journey with Khoj has been enlightening. Back in 2022, we were just dabbling with the idea of a personal search engine - something to sift through your mountain of notes and documents with a natural language interface. My co-founder [Debanjum](https://linkedin.com/in/debanjum) was knee-deep in language models, while I was iterating on our dev ops.


![Star History Chart](https://assets.khoj.dev/star-history-202467.png)

Here's the ride we've been on:

1. Our small note-handling side project called Khoj with 300 GitHub stars landed us a spot in [YCombinator](https://ycombinator.com) for summer of '23.
2. Someone hard-launched us on HackerNews in July '23 and we [got roasted](https://news.ycombinator.com/item?id=36641542) for not supporting open source LLMs.
3. Tried letting people run LLMs locally without internet, but making GPU-enabled, cross-OS Python work smoothly in an app is way harder than it seems.
4. Went back to Hacker News with an improved version and the [feedback](https://news.ycombinator.com/item?id=36933452) was much better.
5. Realized AI could widen the existing accessibility gap, so we integrated personal AI assistance into [WhatsApp](https://www.ycombinator.com/launches/JG4-khoj-your-superhuman-companion).
6. In November, we opened up a beta version of our [cloud service](https://app.khoj.dev)!
7. We felt the limitations of recency in training data. We integrated online search into Khoj's tool belt, and found it to generally be a great information aggregator. It's way easier than consuming search results.
8. Performance was spotty at one point, so we migrated to ECS containers.
9. Added some specialized [agents](https://app.khoj.dev/agents) to handle different use cases better. Set up [automations](https://app.khoj.dev/automations) for repetitive queries with inbox digests, alerts, etc.
10. [Some](https://www.youtube.com/watch?v=Lnx2K4TOnC4)  [delightful](https://www.youtube.com/watch?v=10DUZA4KEvg) YouTube/[Twitter](https://x.com/tuturetom/status/1792877330571944078) posts led to a big traffic spike we scrambled to handle. That ECS migration was a massive lifesaver. Our UX continues to be the butt of jokes.
11. Finally hired our first teammate, [Raghav](https://www.linkedin.com/in/raghavtirumale/), who's hit the grounding *sprinting* for the summer.

That brings us to today! Through all this, we've picked on a few pieces of conviction:

- AI will fundamentally shift how we learn and understand information
- We need to have an open-source alternative to cornerstone AI applications. Even when the creators rotate and swap out, people should be able to own their service and ensure service/user alignment.
- AI is already making the hard-to-reach (like medical and legal advice) way more accessible
- Communication will get easier to the point of seamlessness for people across languages
- We will spend a lot less time rifling through specific bits of information ourselves, more time doing creative tasks on top of it

## Cool, so what did we learn?

The dynamics of building an open-source company are quite different from closed-source companies. A lot of our users are hackers and developers. This helps us find security vulnerabilities, and it also means that users can sometimes jump in, get their hands dirty, and solve their own problems!

As maintainers of the repository, we need to do a better job of making it easy as possible for developers to help themselves. Documentation should be tight, complete. If someone asks you a question, answer it, and add the answer to your documentation right away. Your documentation should be really easily searchable ([Algolia + Docusaurus is GOAT](https://docusaurus.io/docs/search#using-algolia-docsearch)) For people looking to get involved, you should flag good first issues for getting setup.

The [Discord community](https://discord.gg/BDgyabRM6e) has been OP. Most of the people who self-host Khoj make their way there and give ample, active feedback. It's become a great place to share ideas and build our understanding of what AI will look like. That being said, it's really hard to scale great support while building your product. Sometimes you also have to say no to support requests, and that can be really hard. Especially when we were working on exclusively self-hosted LLM-application support, there was such a long tail of complex, bespoke user issues that we couldn't address. That can feel really disappointing.

**For engineering founders**, your job isn't just to build cool stuff. You also have to get good at sharing it with people, figuring out how to make something that actually solves an acute user need, and make it look nice. It pays dividends to actually design the UX of what you're going to build before you build it. And you'll thank yourself for creating specs before making architecture decisions. It makes it much easier to rubber duck your thought process and share it with your team. Don't write specs for single API endpoints.

Your team should be able to manage communication in a Slack channel or a WhatsApp group. You don't need a massive Notion or Jira dashboard when it's just two of you and an intern. Stay lean, keep your processes lightweight and efficient. Do weekly and monthly planning to stay focused.

The last year has been really eventful, full of learnings and adaptations. Biggest lesson, you have to keep your ear to the ground, really listen to what pain points people are having and wonder whether they're being addressed appropriately. We're not perfect, but we're learning. The key thing is to just keep iterating.