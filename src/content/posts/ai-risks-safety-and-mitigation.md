---
title: "Personal AI must be open-source"
author: saba
description: Exploring the necessity of open-source frameworks in the development of personal AI to ensure trust, transparency, and user empowerment.
heroImage: /futuristic_green_utopia.png
pubDate: 2024-02-28
---

## The Pitfalls of Proprietary AI Services
Google recently launched its rebranded personal AI assistant, Gemini. It got rather [mixed reviews](https://twitter.com/mjuric/status/1761981816125469064), highlighting significant concerns over censorship and bias. Users discovered that Gemini stubbornly generated images of non-white people, regardless of the explicit prompts given, leading to a [temporary suspension of the feature](https://web.archive.org/web/20240226020752/https://blog.google/products/gemini/gemini-image-generation-issue/). If you want to see for yourself, [here](https://twitter.com/debarghya_das/status/1759786243519615169) are [some](https://twitter.com/iamyesyouareno/status/1760350903511449717) [examples](https://twitter.com/yishan/status/176085921487513216).

It turned out that Google was explicitly instructing Gemini in its system prompt to always make images depicting people to output diverse representations. This incident underscores the dangers of allowing corporations to unilaterally shape social values and perceptions of truth without user awareness or consent.

> The core issue is with a black-box corporation deciding which values should be promoted for people socially. In this medium, they decide what truth should look like to an audience unaware of this preconditioned bias.

Simultaneously, some anecdotal reports were emerging around how ChatGPT's performance has been degrading. While some encountered [unintelligible output](http://web.archive.org/web/20240228160957/https://arstechnica.com/information-technology/2024/02/chatgpt-alarms-users-by-spitting-out-shakespearean-nonsense-and-rambling/), others were generally seeing the chatbot being less useful for basic tasks. OpenAI has reported that there was a GPU configuration issue that caused this behavior. At the time, end users speculated that the degraded performance was due to a complex, massive [system prompt](https://twitter.com/dylan522p/status/1755086111397863777). This is unverified, but it gets at a deep underlying paranoia that will always exist in an environment like this of closed software.

Such episodes erode consumer trust and raise alarms about the transparency of closed software systems.

## The Imperative for Open-Source Personal AI

As AI becomes more integrated into our daily lives, it is crucial to prioritize open-source solutions to foster trust, observability, and alignment with user needs. Open-source code allows for independent verification and private use, eliminating the need for blind trust in the intentions of AI providers.

> Open-source models and open-source applications are critical for combatting security and social risks in the next generation of digital services, from a perspective of trust, observability, and resilience.

**Khoj leans into this approach, because we are completely open-source.** For example, you can directly [see the system prompts we're using](https://github.com/khoj-ai/khoj/blob/master/src/khoj/processor/conversation/prompts.py#L5), no gimmicks or tricks. There's no need for trust, because the code is fully available for anyone to verify and run privately. End users do not have to worry about shady hacks that we as a company are using to make our product more sticky or trustworthy or diverse or accessible. Being open automatically enables that.

[HuggingFace](https://huggingface.co/) is a bulwark in ths space, releasing open-source models to the public, which in turn can be rigorously tested in the open. This allows independent bodies to verify certain behaviors and expectations. It also enables [transparent leaderboards](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard) where you can compare and contrast performance across a suite of tests. Before OpenAI closed up all their processes, their [research and publications](https://openai.com/research) were critical for better understanding how this technology is being developed and potential limitations, making it more observable and comprehensible.

When it comes to data and privacy, the stakes are high, as personal AI services will be handling sensitive data like tax documents, health records, immigration papers. **We must avoid repeating past mistakes where data was commodified and personalization became predatory.**

Large language models (LLMs) are reshaping our digital existence, making it imperative to establish robust mechanisms for evaluation and verification. Trust and empowerment go a long way for moving humanity forward. 

In the end, the capability for using any of these technologies needs to remain in the hands of the individuals whom they're meant to serve. Company targets changing and quarterly goals fluctuating shouldn’t mean our personal AIs go dark. We need to build with resilience in mind.

## Building a Resilient and Trustworthy Personal AI Ecosystem

To ensure personal AI serves its users ethically and reliably, we must commit to:

1. **Observability**: Independent researchers and auditors should easily be able to test the interactions between a system and its users.
2. **Transparency**: Users should be able to easily verify the behavior of an application.
3. **Ownership**: Users should always have the option for running their personal AI services on their own terms, even if the company providing a service goes out of business.

You shouldn't have to compromise on trust and safety. The first step in making personal AI work for people is to be open-source first.

To further this vision, we're planning to expose ways to make your agent on Khoj configurable and more personalized to you, by providing easy access points to configuring the system prompt and defining capability sets.
