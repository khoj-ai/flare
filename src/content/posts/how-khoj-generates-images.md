---
title: "How Khoj Generates Personalized Images"
author: saba
description: Khoj offers a unique approach to generating images that are personalized to the user's preferences and context. 
tldr: "Khoj personalizes content creation, particularly images, by using a Retrieval Augmented Generation (RAG) system. It enhances the interaction with large language models (LLMs) by incorporating your personal data, internet-sourced information, and cultural context to produce images that are meaningful and relevant to you."
heroImage: /pacific_coast_highway.png
pubDate: 2024-03-09
---

## What Khoj Can Do

Large language models (LLMs) lack the ability to understand who you are when you first use them. This results in outputs that are broad and impersonal, requiring you to spend time customizing them to fit your needs. With Khoj, we address this shortcoming by leveraging the retrieval augmented generation (RAG) to personalize content, especially images, based on your shared data. RAG is necessary because context windows to LLMs are still limited, hence information shared with a model should be optimized.

Here's how Khoj ensures the images it generates are uniquely tailored to you:
1. It utilizes the context provided by your notes and personal data via a retrieval augmented generation (RAG) system.
2. It incorporates relevant information sourced from the internet.
3. It employs localization data to reflect cultural diversity.

These elements enable Khoj to craft images that resonate with your personal experiences and cultural background. Typically, image generation models default to Western-centric themes due to their training data. To mitigate this, we inject localization data based on where the user is, nudging image generation in a more personal direction.

Below is an example of an image generation prompt I've used with my data in Khoj:

> paint a picture of how i feel about cdmx

![a picture showing many happy people in parks, with buses, and some iconic buildings in mexico city](/my_impressions_of_cdmx.png)

<details>
<summary>Khoj's Inferred Query</summary>
Create an image that captures the essence of Mexico City (CDMX) as a place of warmth, community, and vibrant culture, reflecting the user's deep emotional connection and nostalgia for the city. The composition should include elements that evoke the user's fond memories and experiences as described in their notes:

1. The atmosphere should be alive with local music, perhaps illustrated by the inclusion of street-side food stalls where you can almost hear the strumming of Requinto guitars and the sounds of mariachi bands, providing a sense of the unique cultural soundscape.
1. Visualize the affectionate and multigenerational social fabric of CDMX, with smiling children playing, fathers caring for their young ones, and elderly people actively participating in the community.
1. Include imagery that showcases the local, non-pretentious expat community, perhaps through a social event in a park or market area, where people are gathered, chatting, and enjoying each other's company.
1. Depict the strong indigenous presence in the city, with people dressed in traditional clothing, authentic decorations, and native food, offering a glimpse into the rich cultural heritage.
1. Emphasize the walkability and human scale of the city by illustrating pedestrian-friendly streets, small one-way roads, and a robust public transit system with frequent buses and a metro.
1. Show the environmentally friendly aspect of CDMX by including recycling stations and the rewarding of citizens for participating in sustainability efforts.
1. Convey the sense of security and stability that the user associates with love and community, in contrast to their solitary ambition, by displaying scenes of togetherness and support among the city's residents.
1. Capture the user's personal reflections on the importance of love and happiness, perhaps by portraying a couple or a family sharing a joyful moment together in a park or a cozy home setting.


The image should have a warm, inviting color palette, with hues that reflect the city's vibrancy and the user's emotional warmth towards CDMX. The overall tone should be one of happiness, generosity, and a strong sense of place, resonating with the user's description of CDMX as a city that is community-oriented, kind, and rich in culture.
</details>

###  Make your own personalized images
Please note that generating images may take up to two minutes, so we appreciate your patience 🙂.

Give it a try now! Create an account, and you'll automatically hop on a 7-day trial. Go to https://app.khoj.dev to get started.

## Our Streamlined Image Generation Pipeline

Khoj's image generation is a multi-step pipeline that crafts images tailored to your personal experiences. Here's a high-level overview of the process:

![Diagram of image generation process](/image_generation_diagram.jpeg)

1. You ask Khoj to create an image, like "Create a picture of my roadtrip from Boston to Seattle."
1. Khoj identifies the type of content you're requesting.
1. Khoj decides if it needs to reference your personal notes, search the internet, or use general knowledge to fulfill your request.
1. Khoj conducts the necessary searches:
    - It may analyze your notes to find relevant details using our RAG system.
    - It might perform internet searches to gather additional context.
1. Khoj combines all the gathered information into a comprehensive prompt that enhances your original request.
1. This enriched prompt is then processed by our generative model to create your personalized image.
1. Once the image is ready, we upload it to a cloud storage service for easy retrieval.

If you're passionate about creating AI that enhances personal digital experiences, we'd love to hear from you. Reach out to us at team@khoj.dev to join our mission.
