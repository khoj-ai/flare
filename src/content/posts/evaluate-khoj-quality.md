---
title: "Evaluating Khoj for Helpfulness"
author: debanjum
description: "A deep dive into how we implemented an automated evaluation harness and Khoj's excellent performance on modern factuality and reasoning benchmarks."
heroImage: /eval-khoj-quality.webp
pubDate: 2024-11-22
keywords: ["agent eval", "automated llm benchmark", "research mode"]
---

Khoj is an open, personal AI that can gather information from your documents and the web to generate accurate answers, paint images, visualize data, and create documents for you.

In this post, we share why and how we implemented an automated evaluation harness for Khoj and Khoj's performance on modern helpfulness benchmarks using this evaluation harness.

### Why We Need Rigorous Evaluation

As we build more advanced capabilities like Research Mode into Khoj, we need a principled approach to track improvements in helpfulness. While we've had basic capability tests in Khoj for a while, they weren't comprehensive enough to measure general helpfulness[^7].

Users often mentioned that Khoj felt more accurate than other closed AI alternatives, but without quantitative metrics, we couldn't verify these claims[^1].

Additionally, as agent capabilities increase, we need more widespread testing to track quality, capability and safety[^4].

### Our Evaluation Approach

#### Choosing the Right Benchmarks

We selected two primary benchmarks for evaluation:

1. **Google's [FRAMES](https://huggingface.co/datasets/google/frames-benchmark)**: This is the primary evaluation benchmark we tested against. It tests:
  - Multi-hop reasoning: Requires retrieval from multiple sources and reasoning over them.
  - Temporal reasoning: Requires reasoning about time.
  - Tabular reasoning: Requires reasoning on data in tables.

  These align well with our retrieval and reasoning goals for Khoj. The benchmark was released in September 2024 by Google. It is a public, reasonably challenging dataset for modern AI agents[^2].

2. **OpenAI's [SimpleQA](https://openai.com/index/introducing-simpleqa/)**: This is a recently released evaluation benchmark.
  - It evaluates the ability of large language models to give correct and truthful answers.
  - It was created as a challenging Q&A benchmark for modern LLMs. Top models like o1-preview and the latest claude 3.5 sonnet only get ~40% answers correct.

  These match our helpfulness goals for Khoj. This benchmark was released a few weeks ago by OpenAI. It is open-source and challenging for current state-of-the-art LLMs.

#### Evaluated Modes
Khoj can be interacted with in a few different modes. The 3 main ones from the lens of the evaluations are:
- **General**: This is like a closed book exam. No retrieval is allowed. The agent can't access external information, only the LLMs existing *general* knowledge.
- **Default**: This is like an open book exam. Single shot retrieval is allowed. The agent can search for information online, run calculations in a [code sandbox](/posts/ai-with-code-execution).
- **Research**: This is like a take home exam. Iterative retrieval is permitted. The agent can do deeper research for a bit longer with the same web search and code tools.

You can chat with Khoj in any of the 3 modes using a slash command like `/research`. Default mode doesn't require slash command. Research mode was released at the start of November and is still in beta.

#### Evaluation Harness

We developed an evaluation script to quiz Khoj on different benchmarks[^6]. It allows you to:
- Configure sample size, randomization, target benchmark.
- Test multiple modes: General vs. Default vs. Research.
- Track running accuracy and costs during the evaluation run.

The eval is automatically run on every release using a Github [workflow](https://github.com/khoj-ai/khoj/blob/master/.github/workflows/run_evals.yml). The workflow:
1. Boots up a local Khoj instance with gemini-1.5-flash-002.
2. Gives it the ability to search the web and run code.
3. Quizzes Khoj on 200 random questions from the FRAMES benchmark.
4. Grades the responses using gemini-1.5-pro-002 as the LLM judge.
5. Publishes the scores and a downloadable report for verification.

Using a public evaluation workflow provides transparency at multiple levels. It creates an audit trail to inspect the setup, reasoning traces and detailed results of Khoj's performance across time and code changes. You can see the raw logs from a recent eval workflow run [here](https://github.com/khoj-ai/khoj/actions/runs/11963916969/job/33355284137#step:8:38398).

### Results

These runs evaluate Khoj with gemini-1.5-flash-002 on a 200-question random subset of the target benchmark[^5]. This results in error margins of ~6% at reasonable costs ($5 across the 3 modes and 2 benchmarks).

| Benchmark | General | Default | Research | Baseline |
|-----------|------|---------|---------|----------|
| [FRAMES](https://huggingface.co/datasets/google/frames-benchmark) | [27.14](https://github.com/khoj-ai/khoj/actions/runs/11941817410/attempts/1#summary-33287504889) | [42.00](https://github.com/khoj-ai/khoj/actions/runs/11944716303/attempts/1#summary-33296136909) | [63.5](https://github.com/khoj-ai/khoj/actions/runs/11945673147/attempts/1#summary-33298733849) | 26.3% (flash-1.5-001) |
| [SimpleQA](https://openai.com/index/introducing-simpleqa/) | [10.00](https://github.com/khoj-ai/khoj/actions/runs/11963066702/attempts/1#summary-33352767460) | [84.00](https://github.com/khoj-ai/khoj/actions/runs/11963354200/attempts/1#summary-33353634493) | [86.00](https://github.com/khoj-ai/khoj/actions/runs/11963916969/attempts/1#summary-33355284137) | 43.5% (o1 preview) |

The graphs below visualize the improvements across the 3 modes on the evaluated benchmarks:

![](/khoj-on-frames.webp)

![](/khoj-on-simpleqa.webp)

### Key Findings

Khoj upgrades small hosted LLMs into AI agents that perform at or beyond the capabilities of state-of-the-art LLMs across both these modern benchmarks.

#### Improvements on the FRAMES Benchmark
- General to Default mode: **55%** improvement from 27% to 42%.
- Default to Research mode: **50% additional** improvement from 42% to 63.5%.
- Khoj more than doubled **(230%) the accuracy of gemini-1.5-flash** from 27% to 63.5%. This seems close to saturating the models reasoning capabilities on this benchmark.
- Khoj research mode upgrades gemini-1.5-flash (63.5%) to achieve gemini-1.5-pro performance (66%) with the multi-step retrieval from the FRAMES paper.
- For reference when shown all relevant documents gemini-1.5-flash achieves a 66.5% score. This is the ceiling of the model's reasoning capabilities given perfect retrieval.

#### Improvements on the SimpleQA Benchmark
- General to Default mode: **840%** improvement from 10% to 84%.
- Default to Research mode: 2.4% additional improvement from 84% to **86%**.
- The massive jump from General to Default mode seems to saturate the eval. The research mode accuracy is reported just for completeness.
- Khoj upgrades small LLMs to achieve 2x the accuracy of modern state-of-the-art LLMs and close to human performance on the SimpleQA benchmark.
- For reference the strongest model, o1-preview, scores a 43.5% and humans got a [94.4%](https://openai.com/index/introducing-simpleqa/#:~:text=We%20found%20that%20the%20third%20AI%20trainer%E2%80%99s%20answer%20matched%20the%20original%20agreed%20answers%2094.4%25%20of%20the%20time)[^3].

#### Impact of Code Interpreter Tool
Khoj can [run code](/posts/ai-with-code-execution). This ability results in notable accuracy improvements:
- Default mode accuracy **without** code tool: 35.68%.
- Default mode accuracy **with** code tool: 42.00%.
- Net relative improvement: ~**18%** from 35.68% to 42.00%.

### Future Work
- Add ability to efficiently test retrieval across internal and external knowledge. Our current eval only measures retrieval from the internet, not from your documents.
- Test ability to retrieve, reason over and provide helpful multi-modal answers. Our current eval only tests uni-modal, text based information retrieval and reasoning.
- Test reasoning over multi-turn interactions with a user. Our current eval only tests single turn interactions. This does not match Khoj's real-world interaction patterns.
- Test confidence calibration similar to what is done in the official SimpleQA evaluations.

These enhancements should improve our test coverage and understanding of performance on a more complete set of Khoj's capabilities and user interactions.

### Conclusion

We built a transparent, automated evaluation harness. Our evaluations show Khoj significantly enhances base model performance across multiple modern benchmarks.

Through systematic testing and continuous monitoring, we can now quantitatively track and improve Khoj's helpfulness across different modes, models and time.

You can fork our [eval script](https://github.com/khoj-ai/khoj/blob/master/tests/evals/eval.py) & [workflow](https://github.com/khoj-ai/khoj/blob/master/.github/workflows/run_evals.yml) to adapt it as an automated eval harness for your agents.

#### Footnotes
[^1]: The uncertainty motivated us to build this automated evaluation harness to track and catch any drops in quality across time.
[^2]: While FRAMES has good quality questions, it has a somewhat limited score range (26% to 66% for flash) for testing the models retrieval capabilities as an agent.
[^3]: The performance jump on SimpleQA suggests either remarkable effectiveness of Khoj's approach or potential brittleness in the benchmark itself. Or maybe our eval is broken?
[^4]: We expect dangerous behaviors and capabilities to appear in AI agents before LLMs. Building systems to detect and isolate these at the AI agent layer is important. That topic needs a separate post. You can read [this](https://www.lesswrong.com/posts/ZoFxTqWRBkyanonyb/current-safety-training-techniques-do-not-fully-transfer-to#Discussion) post until then.
[^5]: Similar quality improvements were seen in our internal evaluations of 4o-mini on a 100 random question subset of both the benchmarks.
[^6]: We verified that gemini-1.5-flash-002 in general mode on our eval get similar baseline score as gemini-1.5-flash-001 on the FRAMES [paper](https://arxiv.org/abs/2409.12941) of 26.3%.
[^7]: For the scope of this post, we define helpfulness as the ability to accurately and truthfully answer a query.
