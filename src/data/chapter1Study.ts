import { StudySection, ChecklistItem } from '../types'

export const CHAPTER1_STUDY_SECTIONS: StudySection[] = [
  {
    id: 11,
    chapterId: 'ch1',
    title: '1.1 Introduction to AI & Autonomy',
    shortTitle: '1.1 Intro & Autonomy',
    subtitle: 'What defines AI, autonomous systems, supervised vs unsupervised learning, RLHF, and AI engineering',
    relatedQuestionIds: [101, 102, 103, 104, 105, 106, 107, 108, 139, 140, 141],
    blocks: [
      {
        type: 'paragraph',
        title: 'What Makes a System AI?',
        text: 'Artificial Intelligence refers to computer systems that analyze past data using algorithms to make probabilistic predictions, identify patterns, and solve problems that normally require human intelligence (such as next-word prediction on a smartphone keyboard).'
      },
      {
        type: 'table',
        table: {
          headers: ['Concept', 'Definition', 'Example from Curriculum'],
          rows: [
            ['Standard AI', 'Uses algorithms to process data, sort information, or predict outcomes.', 'An email filter categorizing messages into Spam or Inbox.'],
            ['Autonomous AI', 'Perceives and navigates a dynamic environment, making real-time decisions without human intervention.', 'An unmanned aerial drone flying through a dense forest and dodging obstacles autonomously.'],
            ['AI Engineer', 'Prepares training datasets, tunes model hyperparameters, and optimizes algorithmic prediction accuracy.', 'Tuning an image classification model to detect medical anomalies accurately.']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'Core Machine Learning Training Paradigms',
        text: 'Machine Learning algorithms learn from data. There are three key training paradigms tested in Chapter 1:'
      },
      {
        type: 'table',
        table: {
          headers: ['Learning Paradigm', 'How It Works', 'Exam Scenario'],
          rows: [
            ['Supervised Learning', 'Model is trained on labeled data where every example is paired with an explicit correct target answer.', '5,000 skin lesion photos pre-labeled by dermatologists as Benign or Malignant.'],
            ['Unsupervised Learning', 'Model discovers hidden patterns, structures, or clusters in raw unlabeled data without human target guidance.', 'Feeding customer purchase histories without labels to discover 3 distinct shopper types.'],
            ['Reinforcement Learning (RLHF)', 'Model is trained using human feedback ranking; desirable answers receive rewards, while poor outputs receive penalties.', 'Human evaluators ranking chatbot responses to teach the model how to be more helpful and harmless.']
          ]
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        title: 'Exam Trap: Not All AI is Autonomous',
        text: 'A common exam misconception is thinking all software using machine learning is autonomous. A spam filter or recommendation engine uses ML, but only systems that navigate dynamic real-world environments independently (like self-driving vehicles or drones) are classified as autonomous AI.'
      }
    ]
  },
  {
    id: 12,
    chapterId: 'ch1',
    title: '1.2 Core Branches of AI',
    shortTitle: '1.2 Branches of AI',
    subtitle: 'Computer Vision, Natural Language Processing, Speech Recognition, Expert Systems, and Robotics',
    relatedQuestionIds: [109, 110, 111, 112, 113, 114, 115, 142, 143],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['Branch of AI', 'Primary Focus', 'Practical Real-World Example'],
          rows: [
            ['Computer Vision', 'Extracts, processes, and understands information from visual images and video feeds.', 'Reading license plate characters at a security gate, inspecting circuit boards for defects.'],
            ['Natural Language Processing (NLP)', 'Enables computers to analyze, comprehend, and evaluate the grammar, meaning, and sentiment of human written text.', 'Analyzing student essays for grammatical structure and sentiment; machine translation.'],
            ['Speech Recognition', 'Specifically converts acoustic sound waves of human speech into written digital text.', 'Converting your spoken voice into text when saying "Set an alarm for 7 AM".'],
            ['Expert Systems', 'Solves specific decision problems using structured "if-then" rules authored by human domain specialists.', 'Online banking diagnostic assistant troubleshooting lost credit cards using financial rules.'],
            ['Robotics', 'Combines mechanical engineering with sensors and AI to manipulate objects and move in physical space.', 'Mechanical factory arms soldering electronic components on circuit boards.']
          ]
        }
      },
      {
        type: 'callout',
        calloutType: 'note',
        title: 'Speech Recognition vs NLP',
        text: 'Speech Recognition strictly handles acoustic sound-to-text conversion (turning audio into letters). NLP handles understanding the meaning, syntax, intent, and translation of that text.'
      },
      {
        type: 'callout',
        calloutType: 'remember',
        title: 'Machine Learning vs Expert Systems',
        text: 'Machine Learning extracts statistical patterns directly from data to make predictions. Expert Systems do NOT learn from data; they strictly follow static human-written "if-then" logic rules.'
      }
    ]
  },
  {
    id: 13,
    chapterId: 'ch1',
    title: '1.3 Generative AI & Prompt Engineering',
    shortTitle: '1.3 Generative AI',
    subtitle: 'Traditional AI vs GenAI, Transformers, Pretraining, GANs, Diffusion, and Prompt Design',
    relatedQuestionIds: [116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 144, 145, 146, 147, 148],
    blocks: [
      {
        type: 'paragraph',
        title: 'Traditional AI vs Generative AI',
        text: 'Traditional AI analyzes, classifies, scores, or predicts based on existing files (e.g. sorting spam or recommending a movie). Generative AI (like ChatGPT, Claude, Midjourney) creates brand new, original digital content (text, computer code, images, audio) based on learned patterns.'
      },
      {
        type: 'table',
        table: {
          headers: ['Concept / Architecture', 'Key Mechanism', 'Why It Matters'],
          rows: [
            ['Pretraining', 'Initial training on massive web datasets to learn general grammar and world patterns.', 'First stage in foundation models before specialized customization.'],
            ['Fine-Tuning', 'Secondary training on curated domain-specific datasets (e.g. medical Q&As).', 'Adapts a pretrained general model into a specialized assistant.'],
            ['Transformers', 'Processes all words in parallel simultaneously rather than one-by-one sequentially.', 'Breakthrough architecture behind modern LLMs; captures long-range context.'],
            ['Self-Attention', 'Evaluates relationships between words across the whole sentence at once.', 'Disambiguates words like "bank" in "The bank of the river was muddy".'],
            ['GPT', 'Generative Pretrained Transformer.', '"P" stands for Pretrained.'],
            ['GAN (Generative Adversarial Network)', 'Generator creates synthetic candidates; Discriminator tries to distinguish real from fake.', 'Competitive loop drives image quality up.'],
            ['Diffusion Models', 'Starts with Gaussian visual static (noise) and iteratively denoises step-by-step.', 'State-of-the-art technique behind image generators like Midjourney and Stable Diffusion.']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'Prompt Engineering Types & Techniques',
        text: 'How you phrase your prompt determines the quality, relevance, and accuracy of AI responses:'
      },
      {
        type: 'list',
        items: [
          'Informative Prompt: Requests factual knowledge (e.g. "Summarize the three main causes of the American Revolution").',
          'Creative Prompt: Requests imaginative or artistic creation (e.g. "Write a poem about a robot discovering feelings").',
          'Analytical Prompt: Requests structured comparison or evaluation (e.g. "Evaluate the advantages and drawbacks of online learning").',
          'Meta-Prompt: Sets persona, formatting constraints, rules, or tone (e.g. "Act as a high school biology teacher and explain photosynthesis in 3 bullet points using simple analogies").',
          'Iterative Prompting: Step-by-step prompt refinement where you adjust your prompt based on previous outputs to reach your goal.',
          'Bias-Aware Prompting: Explicitly requesting balanced coverage across multiple viewpoints ("Examine perspectives of both supporters and critics").'
        ]
      },
      {
        type: 'callout',
        calloutType: 'warning',
        title: 'Relevance vs Accuracy Trap',
        text: 'If you ask for a 3-bullet-point summary and the AI returns a factually flawless 5-page essay, the output is Highly Accurate (true facts) but Low in Relevance because it failed the requested formatting and length constraints!'
      }
    ]
  },
  {
    id: 14,
    chapterId: 'ch1',
    title: '1.4 AI Ethics, Safety & Academic Integrity',
    shortTitle: '1.4 AI and Ethics',
    subtitle: 'Deepfakes, plagiarism, algorithmic bias, privacy vs surveillance, PII, and hallucinations',
    relatedQuestionIds: [133, 134, 135, 136, 137, 138, 149, 150],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['Ethical Challenge', 'Description & Mechanism', 'Correct Student Practice'],
          rows: [
            ['Deepfakes', 'Artificially synthesized media (video, audio, image) manipulating human appearances or voices.', 'Verify media authenticity through trusted journalistic channels.'],
            ['Plagiarism', 'Copying AI-generated text directly into an assignment and claiming it as your own work.', 'Use AI as a tutor to explain ideas; write your own papers and cite assistance.'],
            ['Algorithmic Bias', 'When models absorb and amplify societal inequalities present in historical training data.', 'Be aware of biased datasets; audit AI tools for equal opportunity.'],
            ['Surveillance vs Privacy', 'Facial recognition in public spaces enhances security but strips individual privacy.', 'Understand democratic checks on mass data surveillance.'],
            ['PII Protection', 'Public AI platforms store prompts for model training.', 'NEVER enter Personally Identifiable Information (full name, phone, address, passwords).'],
            ['Hallucinations', 'LLMs calculate word probability, NOT truth databases; they can convincingly fabricate false claims.', 'ALWAYS cross-check AI claims with authoritative textbooks and verified sources.']
          ]
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        title: 'Academic Integrity Rule',
        text: 'Using AI as a personal tutor to explain complex topics, test your understanding, or generate practice questions is completely ethical. Submitting AI output as your own original work is academic dishonesty.'
      }
    ]
  }
]

export const CHAPTER1_CHECKLIST: ChecklistItem[] = [
  { id: 'ai1', text: 'I can distinguish standard AI (spam filter) from autonomous AI (unmanned drone navigating dynamic environments).' },
  { id: 'ai2', text: 'I can identify Supervised learning (labeled data), Unsupervised learning (clustering unlabeled data), and RLHF (human reward feedback).' },
  { id: 'ai3', text: 'I can match the 5 branches: Computer Vision, NLP, Speech Recognition, Expert Systems, and Robotics.' },
  { id: 'ai4', text: 'I know that Expert Systems follow human-crafted if-then rules, while Machine Learning learns patterns from data.' },
  { id: 'ai5', text: 'I can explain Pretraining (broad foundation) vs Fine-tuning (task specialization).' },
  { id: 'ai6', text: 'I understand that Transformers use self-attention to process words simultaneously in parallel.' },
  { id: 'ai7', text: 'I can describe GANs (Generator vs Discriminator) and Diffusion models (iterative denoising of Gaussian static).' },
  { id: 'ai8', text: 'I can recognize Meta-prompts, Iterative prompting, and differentiate Accuracy from Relevance.' },
  { id: 'ai9', text: 'I know the ethical rules: protecting PII, recognizing Deepfakes, avoiding Plagiarism, and fact-checking Hallucinations.' }
]
