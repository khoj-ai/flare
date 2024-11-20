---
title: "Mind-Mapping with your AI Assistant"
author: saba
description: "The why and the how of integrating Excalidraw with AI agents at Khoj."
heroImage: /whimsy_delve_clouds.png
pubDate: 2024-11-20
keywords: ["mind mapping", "open-source", "llm tools"]
---

### Why would I need a mind map from my AI assistant?

Large language models, on their own, are just text completion engines by default. You throw a prompt at them, and they spit back a wall of text. Extraordinarily helpful in some cases, but the utility is limited in others. That's why chaining and tool integration is so important.

Like lots of people, I’m a very visual learner. When I’m trying to wrap my head around a concept, I need to see it mapped out, connected, visualized. Take something like understanding the American Civil War - sure, you could read paragraphs about it, but seeing how different causes connect and influence each other in a mind map? The concept can embed better in your brain. You can visually break down categories like economic factors, social issues, and political tensions, then map out how they all interrelated to spark the conflict.

### How to get AI to generate dynamic visual content

One of my favorite tools for this type of thinking is [Excalidraw](https://excalidraw.com). It’s local-first (meaning your data stays in your browser), it's [open source](https://github.com/excalidraw/excalidraw) and it has that organic, hand-drawn feel. As a developer, it integrates super smoothly with [Node applications](https://docs.excalidraw.com/docs/@excalidraw/excalidraw/integration). (Shout-out to our [frontend code migration](https://blog.khoj.dev/posts/new-ux-fresh/) for enabling these goodies). But what really sold me on Excalidraw + AI was how forgiving it is. Even if the AI outputs something that’s not quite right, I can jump in and tweak things until they’re exactly how I want them, because of Excalidraw's editable UI.

So I figured we should hook Excalidraw up to Khoj's tool execution set. This would let anyone automatically create mind maps for topics they're studying, learning, understanding. So we built it. The implementation is pretty straightforward - there’s a sub agent that takes user intent and transforms it into a simplified diagram format, then hands it off to another agent that converts that into a JSON-format Excalidraw can understand.

Here's an example of what Khoj created for me using Excalidraw. I asked it to create a mind map of the American Civil War:

![Mind map of the American Civil War](/american_civil_war_mind_map.png)

Now, I should mention - this isn’t perfect. Getting AI agents to consistently output specific JSON formats (especially domain-specific ones) is like trying to herd cats. Sometimes it works beautifully, sometimes… not so much. Your mileage may vary quite a bit. But when it works, it’s pretty amazing for visual learners like me who want to leverage AI for more than just text generation.

You can try it out yourself. Try asking the AI to create a mind map about the components of a nucleus, a vacation plan, the causes of the nuclear arms race. Watch how it breaks down the complex factors/attributes into interconnected categories and subpoints. Be prepared to do some tweaking, but that’s part of the fun.

This is a neat entrypoint into seeing how AI can dynamically respond to your specific needs.