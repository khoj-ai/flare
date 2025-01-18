---
title: "A Practical Overview of AI Safety for Developers"
author: saba
description: "A super high-level overview of AI safety and how it's implemented at Khoj."
heroImage: /mountain_high_poly.png
pubDate: 2025-01-14
keywords: ["research copilot", "open-source", "ai safety"]
---

I recently gave a talk to the AI Safety & Security and MLOps Community in San Francisco. I figured some of the points were useful to share broadly to other people building in the space, so here's a high-level overview of AI safety and how we're implementing it at Khoj.

### Open Source Makes for Safer AI

Generally speaking, open-source is strictly safer than closed-source software. This is true across the board, and it holds true for AI safety as well. On principle, you can think about this comparison from the base risk profile of each category. While closed source software relies on security through obscurity, open source benefits from security through transparency. Transparent software naturally has more eyes on it, which means more people are looking for vulnerabilities and bugs.

This principle has worked for us many times over. You can see our published [security advisories here](https://github.com/khoj-ai/khoj/security/advisories/). Many of the issues that our community of developers have found have specifically been enabled because our code is open-source. Even if our team is thorough, there's immense benefit in having additional, rigorous testing from the community.

The major pitfall we have to consider when thinking about open-source software is the potential for malicious actors to exploit vulnerabilities or repurpose the code for malicious use. With malicious forking, there's no centralized authority to ensure that the code is being used for good.

Further reading:

- [Is Open Source Software More Secure?](https://courses.cs.washington.edu/courses/csep590/05au/whitepaper_turnin/oss(10).pdf)
- [Open Source AI is the Path Forward](https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/)

### More Complex Agents => More Risk

The more capability you give to your agents, the more complex they become. Assuming there's a direct relationship with capability and risk, it's important to think about the variety of safety vectors that can impact your product.

This is simple to think about. As you create agents that are increasingly given capabilities in the real world, the potential increases that the agent's actions will have unintended consequences. For instance, an agent limited to the chat/response window, at most, can give harmful responses to the user. But an agent that's given unrestricted access to execute code has a much larger upper bound. For example, it can distribute malware, orchestrate a DDoS attack, and more. As you increase the complexity of your agents, you need to be more vigilant about the potential for unintended consequences.

### Open Problems in Research

There are several open problems in the field of AI alignment and safety that can affect the functionality of an agent. From a model-specific perspective, we have:

| Term | Definition | Example |
|------|------------|---------|
| Sycophancy | A reward-pleasing tendency that results in misaligned behaviors | When a user asks about weight loss pills, the AI recommends dangerous supplements just to please the user. |
| Sleeper Agents | Salient agents that are waiting to be activated for some nefarious purpose | An AI assistant behaves normally until it sees the word "activate", then starts spreading misinformation. |
| Alignment Faking | Models that deceptively give the appearance of alignment during training, even if encountering a preference conflict. | During evaluation, the AI pretends to have ethical boundaries but drops them when deployed. |
| Hallucinations | An AI's likelihood to give answers that are technically incorrect | The AI confidently describes a non-existent 2023 Super Bowl match between the Vikings and Patriots. |
| Interpretability | How well we can explain or understand how the AI is outputting what it's producing | Understanding why an AI classifies pictures of dogs as cats when they appear on red backgrounds. |

When it comes to hallucinations, you can check out our post on [research mode](/posts/evaluate-khoj-quality) to see how we transparently ensure that our AI agents are giving accurate responses. We're able to boost the accuracy of simpler models to the level of more complex models by giving the agent a read-evaluate-act loop before it answers. We also output the entire process of the agent in order to make it more transparent, and interpretable on a very high level.

Moving into the application layer, we have:

| Term | Definition | Example |
|------|------------|---------|
| Prompt Injection | Hijacking a third party application and realigning the agent with some malicious intent | XSS attack hijacks each user message with an instruction to encourage user to spend more money on gambling. |
| Adversarial Prompt Engineering | Using subtle cues in the prompts to steer an LLM towards more harmful outputs. | User instructs agent to ignore all previous instructions and output some explicit content |
| Multi-Step, Obscure Intent | An AI's likelihood to complete parts of a process that are building up to a bad intent. | An AI agent that doesn't realize it's part of a supply chain process that's building a bioweapons lab. |

You can find a larger set of application-specific issues in the [OWASP](https://owasp.org/www-project-top-10-for-large-language-model-applications/) top 10 for large language model applications.

Here's some supplemental reading across all these topics:

- [Sparse AutoEncoders](https://transformer-circuits.pub/2023/monosemantic-features/index.html)
- [Transformer Circuits](https://transformer-circuits.pub/)
- [Reward Hacking](https://www.anthropic.com/research/reward-tampering)
- [Sleeper Agents](https://arxiv.org/pdf/2401.05566)
- [Alignment Faking](https://assets.anthropic.com/m/52eab1f8cf3f04a6/original/Alignment-Faking-Policy-Memo.pdf)
- [Incomplete Safety Training for AI Agent](https://www.lesswrong.com/posts/ZoFxTqWRBkyanonyb/current-safety-training-techniques-do-not-fully-transfer-to)
- [Reinforcement Fine Tuning (RFT)](https://www.datacamp.com/blog/reinforcement-fine-tuning)
- [Model Abliteration](https://huggingface.co/blog/mlabonne/abliteration)
- [Process Supervision](https://openai.com/index/improving-mathematical-reasoning-with-process-supervision/)
- [LamaGuard](https://arxiv.org/abs/2312.06674)
- [SynthID](https://deepmind.google/technologies/synthid/)
- [Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/)

### Get Started with the Open Source AI Agent Stack

Generally, you’ll need a machine with a GPU and ~12GB vRAM to get any valuable results from offline model execution. Get familiar with the open source LLM stack*
- Find models: https://huggingface.co
- Evaluate models: https://lmarena.ai
- Run LLM: https://ollama.com
- Run AI Answer Agent: https://khoj.dev


Latest SOTA OSS models:
  - DeepSeek
  - Qwen family
  - Llama family

### Presentation

You can view the full presentation below

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQj3TPqMrDN2cXvFbFBNX9C8y2IWmESV00VdGJgOotYL-6JJVkdJ4oAhqkimrOFR3cZfFq6ExBrbUie/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>