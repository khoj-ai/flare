---
title: "The Future of Personal AI: Embracing Open-Source Innovation"
author: saba
authors:
  - saba
tags: [customizable, trust, observability, open-source, ai, artificial-intelligence]
description: There are critical reasons why the next generation of consumer tools for personal AI should be open source.
heroImage: /futuristic_green_utopia.png
pubDate: 2024-02-28
---

## Why closed, personalized AI services will fail
About a week ago, Google launched its new, rebranded personal AI assistant, Gemini. It got rather [mixed reviews](https://twitter.com/mjuric/status/1761981816125469064). At its core, the major problem Gemini has had is that it was overtly censored. Users were finding that it was resolute to only generate images of people who were non-white, despite the explicit prompts it received to do otherwise. If you want to see for yourself, [here](https://twitter.com/debarghya_das/status/1759786243519615169) are [some](https://twitter.com/iamyesyouareno/status/1760350903511449717) [examples](https://twitter.com/yishan/status/176085921487513216).

The image generation capability got so much backlash that Google [paused the feature](https://web.archive.org/web/20240226020752/https://blog.google/products/gemini/gemini-image-generation-issue/) for the time being. I will say, though, the images it generated were really impressive!

It turned out that the Bard team at Google was explicitly instructing Gemini in its system prompt to always make images depicting people to output diverse representations. Of course, the causes of promoting diverse voices is critical for achieving better equity in the world, but this isn't the way to do it. But this gaffe has more dire implications aside from the underlying racism in this decision.


> The issue is with a corporation deciding which values should be promoted for people socially, and in this medium deciding what truth should look like *to an audience unaware of this preconditioned bias*. In what subtle ways is Google being given the power to determine what reality looks like for all of us?

A week or so before the Gemini debacle, some anecdotal reports were emerging around how ChatGPT's performance has been degrading. Some people were seeing [deranged, garbled output](http://web.archive.org/web/20240228160957/https://arstechnica.com/information-technology/2024/02/chatgpt-alarms-users-by-spitting-out-shakespearean-nonsense-and-rambling/), and others were generally seeing the chatbot being less useful for basic tasks. OpenAI has reported that there was a GPU configuration issue that caused this behavior. Some Twitter people claimed they were able to extract its [system prompt](https://twitter.com/dylan522p/status/1755086111397863777) and saw some wonky things leading to degenerated utility. This is unverified, but it gets at a deep underlying paranoia that will always exist in an environment like this of closed software. These kinds of events create a baseline trust issue in the consumer.

As the organizations that implement these services become more opaque and ideological, the people who use these services lose access to freedom of thought and information. People need to have the option to know that they’re not being fed a silent dogma, no matter how well-intentioned the dogmatists are.

## Open-source is more observable, trustworthy, and aligned

We want our personal AIs to be available, responsive, and competent. AI is going to be commonplace in our lives. We'll be using natural language interfaces to interact with everyday technologies. If we don't move intentionally now, we'll have closed, misaligned, and exploitative AI agents.

> Open-source means that the application code is freely available to view and download. Open-source models and open-source applications are critical for combatting security and social risks in the next generation of digital services, from a perspective of trust, observability, and resilience.

**The beauty of Khoj is that you can literally [see the system prompts we're using](https://github.com/khoj-ai/khoj/blob/master/src/khoj/processor/conversation/prompts.py#L5), no gimmicks or tricks.** There's no need for trust required, because the code is fully available for anyone to verify and run privately. It’s difficult to stress how critical this is. End users do not have to worry about shady hacks that we as a company are using to make our product more sticky or trustworthy or diverse or accessible. Being open automatically enables that, no complicated jedi mind-jiu-jitsu or marketing required.

The beauty of HuggingFace and releasing open-source models to the public is that they can be rigorously tested in the open, so that independent bodies can verify certain behaviors and expectations. You get things like [transparent leaderboards](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard) where you can compare and contrast performance across a suite of tests. Before OpenAI closed up all their processes, their [research and publications](https://openai.com/research) were critical for better understanding how this technology is being developed and potential limitations, making it more observable and comprehensible.

Critically, people will be sharing their most sensitive data with personal AI services. Tax documents, electronic health records, immigration papers, these are all going to be shared with companies that store, process, and share your data. It's essential that we not again be trapped into an online incentive structure that sells people's data and provides predatory personalization for capital gain.

LLMs are so new, and they are a cornerstone for technology that is going to so change how we live. It’s critical we get the correct levers in the world of evaluation and verification to usher in the next generation of digital life safely. Trust and empowerment go a long way for moving humanity forward. And in the end, the power and capability for using any of these technologies needs to remain in the hands of the individuals whom they're meant to serve. Company targets changing and quarterly goals fluctuating shouldn’t mean our personal AIs go dark. We need to build with resilience in mind.

In summary, what we need is:
1. **Observability**: Independent researchers and auditors should easily be able to test the interactions between a system and its users.
2. **Transparency**: Users should be able to easily verify the behavior of an application.
3. **Ownership**: Users should always have the option for running their personal AI services on their own terms, even if the company providing a service goes out of business.

You shouldn't have to compromise on trust and safety. The first step in making personal AI work for people is to be open-source first.

To further this vision, we're planning to expose ways to make your agent on Khoj configurable and more personalized to you, by providing easy access points to configuring the system prompt and defining capability sets.
