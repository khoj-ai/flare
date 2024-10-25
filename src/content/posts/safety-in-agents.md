---
title: "How to Make AI Agents Safer"
author: saba
description: Customizable AI agents have massive potential, but they also come with risks. These are some things to keep in mind at the application layer.
heroImage: /network_lock_cropped.png
pubDate: 2024-10-24
keywords: ["personal AI", "ai agents", "community"]
---
As an application, Khoj helps people do better research with AI agents that can retrieve any publicly available information, read from your knowledge base, and perform some tasks on your behalf. Most of our use cases are centered around helping people learn, understand, and create.

You can find all public agents here: https://app.khoj.dev/agents. Custom agent creation is currently limited to the [Futurist tier](https://khoj.dev/#pricing).

Customization is a necessity for any research utility. You'll find yourself often wanting to tweak the agent's behavior to better suit your needs. This could be changing the system prompt, defining the capabilities of the agent, changing what information it has access to.

You can create a coding agent that specializes in Rust, a outdoorsy travel planning agent for Kyrgyzstan, a study buddy that helps you with applied linear algebra, or a creative partner that helps update the copy for your marketing campaign.

You always have the general-purpose Khoj agent available, but we recognize that deeper projects require specialization. We're really psyched to see what people come up with here.

We've made custom agents very easy to share, because distributing knowledge and expertise amongst each other should be trivial. Currently, you can share your "protected" agents with a direct link. Once we're more confident in the safety of the system, we'll allow you to share your agents publicly. 

![ballot info processor agent screenshot](/ballot_info_processor_agent.png)

That being said, ease of sharing also demands increased guardrails. We're acutely aware of the dangers that come with viral systems in the AI economy. That's why we've baked a few safety features into Khoj:
- **Prompt verification**: When you save your custom protected or public agent, we'll verify that the system prompt is responsible and abides by our community guidelines. Our agents will not support propagation of hate speech, misinformation, or any other harmful content. 
- **Prompt transparency**: Anyone you share your agent with can see the system prompt you've configured. Transparency is critical to making sure all parties are aware of the goal function of the technology they're interacting with.
- **Manual agent review**: When you share your agent with the world, we'll review it to make sure it's safe for everyone.

With all that said, these principles will not be perfect. We're constantly iterating on how to make Khoj a safer place for everyone. If you have any suggestions, please reach out to us.
