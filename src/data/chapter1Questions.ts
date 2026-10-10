import { Question } from '../types'

export const CHAPTER1_QUESTIONS: Question[] = [
  // ==========================================
  // SECTION 1.1: INTRODUCTION TO AI (Q1 - Q8, Q39 - Q41)
  // ==========================================
  {
    id: 101,
    chapterId: 'ch1',
    questionNumber: 1,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: 'A smartphone keyboard predicts the next word you want to type based on your past typing habits. Which characteristic makes this an application of AI?',
    options: [
      { id: 'A', text: 'It physically controls the touchscreen hardware.' },
      { id: 'B', text: 'It analyzes past data using algorithms to make probabilistic predictions.' },
      { id: 'C', text: 'It follows fixed mechanical wiring that never changes.' },
      { id: 'D', text: 'It stores dictionary words without processing their relationships.' }
    ],
    correctAnswer: 'B',
    explanation: 'AI systems process data through algorithms to identify patterns and predict future outcomes, such as word completion.',
    hint: 'Consider what enables the keyboard to learn from your previous habits rather than just following rigid, unchanging rules.',
    topics: ['introduction-to-ai', 'machine-learning']
  },
  {
    id: 102,
    chapterId: 'ch1',
    questionNumber: 2,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: "An automated email filter sorts incoming messages into 'Spam' or 'Inbox', while an unmanned aerial drone navigates through a forest avoiding obstacles on its own. How do these two AI systems compare?",
    options: [
      { id: 'A', text: 'The email filter is autonomous AI, but the drone is not.' },
      { id: 'B', text: 'Both are autonomous AI because both use digital software.' },
      { id: 'C', text: 'Both are AI, but only the drone is autonomous because it perceives and navigates a dynamic environment without human intervention.' },
      { id: 'D', text: 'Neither system uses AI because neither possesses human consciousness.' }
    ],
    correctAnswer: 'C',
    explanation: 'Autonomous AI specifically refers to systems that operate and make real-time decisions independently in dynamic environments without direct human control.',
    hint: 'Autonomy requires perceiving and reacting independently to a changing physical or dynamic environment.',
    topics: ['autonomous-ai', 'definitions']
  },
  {
    id: 103,
    chapterId: 'ch1',
    questionNumber: 3,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: "A hospital uses AI to detect skin conditions. Engineers give the model 5,000 photos, each pre-labeled by dermatologists as 'Benign' or 'Malignant'. Which training method is being used?",
    options: [
      { id: 'A', text: 'Supervised learning' },
      { id: 'B', text: 'Unsupervised learning' },
      { id: 'C', text: 'Reinforcement learning' },
      { id: 'D', text: 'Zero-shot learning' }
    ],
    correctAnswer: 'A',
    explanation: 'Supervised learning uses labeled training data where each example includes the target answer (label) provided by experts.',
    hint: "Notice that human doctors have already attached correct target labels ('Benign' or 'Malignant') to every training photo.",
    topics: ['supervised-learning', 'training-methods']
  },
  {
    id: 104,
    chapterId: 'ch1',
    questionNumber: 4,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: 'A store feeds raw customer purchase histories into an AI without giving it any product categories or group labels. The AI automatically identifies three distinct shopper types. What learning method did it use?',
    options: [
      { id: 'A', text: 'Supervised learning' },
      { id: 'B', text: 'Unsupervised learning' },
      { id: 'C', text: 'Rule-based learning' },
      { id: 'D', text: 'Fine-tuning' }
    ],
    correctAnswer: 'B',
    explanation: 'Unsupervised learning discovers hidden patterns, structures, or clusters in unlabeled data without human target guidance.',
    hint: 'The data was given without any pre-assigned categories or labels, yet the model grouped similar patterns together.',
    topics: ['unsupervised-learning', 'clustering']
  },
  {
    id: 105,
    chapterId: 'ch1',
    questionNumber: 5,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: 'In Reinforcement Learning from Human Feedback (RLHF), how does the AI learn to generate higher-quality answers?',
    options: [
      { id: 'A', text: "Human reviewers manually edit the model's underlying source code." },
      { id: 'B', text: 'The model is given rewards for responses ranked as helpful and penalties for poor responses.' },
      { id: 'C', text: 'The system automatically converts text into mathematical logic rules.' },
      { id: 'D', text: 'Human reviewers attach labels to unlabeled image files.' }
    ],
    correctAnswer: 'B',
    explanation: "RLHF relies on human feedback ranking to reward desirable AI outputs and penalize weak or harmful ones, refining the model's behavior.",
    hint: 'Think of reinforcement: rewarding good answers and penalizing poor ones based on human preference ratings.',
    topics: ['rlhf', 'model-training']
  },
  {
    id: 106,
    chapterId: 'ch1',
    questionNumber: 6,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: 'An AI Engineer is tasked with improving an image recognition tool. Which responsibility falls directly under their role?',
    options: [
      { id: 'A', text: 'Replacing faulty hardware microchips on server boards.' },
      { id: 'B', text: 'Preparing training datasets and tuning model algorithms to enhance prediction accuracy.' },
      { id: 'C', text: 'Enforcing international copyright laws in court.' },
      { id: 'D', text: 'Writing press releases about company marketing goals.' }
    ],
    correctAnswer: 'B',
    explanation: 'AI Engineers design, build, and train machine learning models using data and algorithms to solve specific operational tasks.',
    hint: 'An engineer works directly with data preparation, model architecture, and algorithmic tuning.',
    topics: ['ai-engineer-role', 'careers']
  },
  {
    id: 107,
    chapterId: 'ch1',
    questionNumber: 7,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: 'Which of the following scenarios best demonstrates a machine performing a task that requires human-like reasoning?',
    options: [
      { id: 'A', text: 'A digital clock changing the display time every 60 seconds.' },
      { id: 'B', text: 'A GPS app evaluating traffic delays, weather, and road closures to recommend an alternate route.' },
      { id: 'C', text: 'A hard drive saving a text file onto a solid-state disk.' },
      { id: 'D', text: 'A calculator executing a simple addition formula.' }
    ],
    correctAnswer: 'B',
    explanation: 'Evaluating multi-variable changing conditions (traffic, weather) to solve a complex decision problem reflects applied AI reasoning.',
    hint: 'Look for dynamic decision-making that weighs multiple changing environmental factors simultaneously.',
    topics: ['ai-reasoning', 'applications']
  },
  {
    id: 108,
    chapterId: 'ch1',
    questionNumber: 8,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: 'Why can an AI recommendation engine suggest products you might like, even if you have never searched for those specific items before?',
    options: [
      { id: 'A', text: 'It reads your personal thoughts using hardware sensors.' },
      { id: 'B', text: "It analyzes correlations across thousands of similar users' buying patterns to predict your preferences." },
      { id: 'C', text: "It uses fixed 'if-then' rules pre-programmed for every consumer in advance." },
      { id: 'D', text: 'It selects items completely at random from the store database.' }
    ],
    correctAnswer: 'B',
    explanation: 'AI recommendation systems analyze complex pattern correlations across large user datasets to make probabilistic predictions.',
    hint: 'If other users with similar tastes purchased an item, the model infers that you may like it too.',
    topics: ['recommendation-engines', 'pattern-recognition']
  },

  // ==========================================
  // SECTION 1.2: BRANCHES OF AI (Q9 - Q15, Q42 - Q43)
  // ==========================================
  {
    id: 109,
    chapterId: 'ch1',
    questionNumber: 9,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.2)',
    sectionId: '1.2',
    type: 'single-choice',
    prompt: 'A smartphone app scans a document using the built-in camera, extracts the text from the image, and then translates the text into Spanish. Which two AI branches are working together?',
    options: [
      { id: 'A', text: 'Computer Vision and Natural Language Processing (NLP)' },
      { id: 'B', text: 'Speech Recognition and Robotics' },
      { id: 'C', text: 'Expert Systems and Computer Vision' },
      { id: 'D', text: 'Machine Learning and Speech Recognition' }
    ],
    correctAnswer: 'A',
    explanation: 'Scanning visual shapes from an image uses Computer Vision; understanding and translating the resulting text uses NLP.',
    hint: 'One branch handles visual image processing, while the other analyzes and translates human written language.',
    topics: ['computer-vision', 'nlp', 'branches']
  },
  {
    id: 110,
    chapterId: 'ch1',
    questionNumber: 10,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.2)',
    sectionId: '1.2',
    type: 'single-choice',
    prompt: 'A factory deploys mechanical arms that inspect manufactured circuit boards for microscopic defects using visual sensors, then solder components in place. Which branches of AI are combined here?',
    options: [
      { id: 'A', text: 'Speech Recognition and Natural Language Processing' },
      { id: 'B', text: 'Computer Vision and Robotics' },
      { id: 'C', text: 'Expert Systems and Deepfakes' },
      { id: 'D', text: 'Generative AI and Speech Recognition' }
    ],
    correctAnswer: 'B',
    explanation: 'Inspecting visual defects relies on Computer Vision, while executing precise physical tasks with mechanical arms relies on Robotics.',
    hint: 'Visual inspection uses machine sight, and moving mechanical arms in physical space relies on robotics.',
    topics: ['computer-vision', 'robotics', 'branches']
  },
  {
    id: 111,
    chapterId: 'ch1',
    questionNumber: 11,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.2)',
    sectionId: '1.2',
    type: 'single-choice',
    prompt: "An online banking assistant uses pre-programmed 'if-then' logic pathways written by financial officers to help users troubleshoot lost credit cards. Which branch of AI does this represent?",
    options: [
      { id: 'A', text: 'Machine Learning' },
      { id: 'B', text: 'Expert Systems' },
      { id: 'C', text: 'Computer Vision' },
      { id: 'D', text: 'Deep Learning' }
    ],
    correctAnswer: 'B',
    explanation: "Expert Systems rely on structured 'if-then' rules developed by human subject-matter experts to solve specific decision problems.",
    hint: "Which branch uses rule-based 'if-then' decision trees designed by human domain experts?",
    topics: ['expert-systems', 'rule-based-ai']
  },
  {
    id: 112,
    chapterId: 'ch1',
    questionNumber: 12,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.2)',
    sectionId: '1.2',
    type: 'single-choice',
    prompt: "You speak a voice command into your phone: 'Set an alarm for 7 AM.' The phone converts your voice into text, then creates the alarm setting. What was the specific role of Speech Recognition?",
    options: [
      { id: 'A', text: 'Understanding the intent of the sentence and setting the clock.' },
      { id: 'B', text: 'Converting the acoustic sound waves of your spoken voice into written text.' },
      { id: 'C', text: 'Predicting what time you usually wake up based on past habits.' },
      { id: 'D', text: 'Synthesizing a realistic artificial human voice response.' }
    ],
    correctAnswer: 'B',
    explanation: 'Speech Recognition strictly handles acoustic sound-to-text conversion; downstream execution and meaning analysis belong to NLP/system logic.',
    hint: 'Speech recognition converts audio speech signals into digital text characters.',
    topics: ['speech-recognition', 'branches']
  },
  {
    id: 113,
    chapterId: 'ch1',
    questionNumber: 13,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.2)',
    sectionId: '1.2',
    type: 'single-choice',
    prompt: 'Which of the following tasks relies primarily on Natural Language Processing (NLP)?',
    options: [
      { id: 'A', text: 'Detecting facial features to unlock a tablet screen.' },
      { id: 'B', text: 'Analyzing an essay to evaluate grammatical structure and sentiment.' },
      { id: 'C', text: 'Guiding a robotic arm to assemble engine valves.' },
      { id: 'D', text: 'Filtering static noise out of an audio recording.' }
    ],
    correctAnswer: 'B',
    explanation: 'NLP enables computers to analyze, comprehend, structure, and evaluate human language text.',
    hint: 'NLP is dedicated to understanding, interpreting, and analyzing human language.',
    topics: ['nlp', 'branches']
  },
  {
    id: 114,
    chapterId: 'ch1',
    questionNumber: 14,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.2)',
    sectionId: '1.2',
    type: 'single-choice',
    prompt: 'How does Machine Learning differ from a traditional rule-based Expert System?',
    options: [
      { id: 'A', text: "Machine Learning relies on explicit 'if-then' rules coded by humans, while Expert Systems learn automatically from data." },
      { id: 'B', text: 'Machine Learning improves performance by finding patterns in data, while Expert Systems strictly follow static human-written rules.' },
      { id: 'C', text: 'Machine Learning works only with physical robots, while Expert Systems work only with text.' },
      { id: 'D', text: 'Machine Learning never requires data, while Expert Systems require massive server farms.' }
    ],
    correctAnswer: 'B',
    explanation: 'Machine Learning extracts statistical patterns directly from data to make predictions, whereas Expert Systems follow human-crafted explicit rules.',
    hint: 'Machine learning learns statistical patterns from examples, whereas an expert system follows rigid rules authored by humans.',
    topics: ['machine-learning', 'expert-systems']
  },
  {
    id: 115,
    chapterId: 'ch1',
    questionNumber: 15,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.2)',
    sectionId: '1.2',
    type: 'single-choice',
    prompt: 'A security camera at a gate opens automatically when it reads the license plate characters on an approaching car. Which AI branch extracts the plate characters from the visual video feed?',
    options: [
      { id: 'A', text: 'Computer Vision' },
      { id: 'B', text: 'Expert Systems' },
      { id: 'C', text: 'Speech Recognition' },
      { id: 'D', text: 'Generative AI' }
    ],
    correctAnswer: 'A',
    explanation: 'Interpreting visual data (reading text characters from an image or video feed) is a core task of Computer Vision.',
    hint: 'Which branch enables machines to identify and extract information from visual video or images?',
    topics: ['computer-vision', 'branches']
  },

  // ==========================================
  // SECTION 1.3: GENERATIVE AI (Q16 - Q32, Q44 - Q48)
  // ==========================================
  {
    id: 116,
    chapterId: 'ch1',
    questionNumber: 16,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'What is the fundamental difference between traditional AI (like a spam filter) and Generative AI (like ChatGPT or Midjourney)?',
    options: [
      { id: 'A', text: 'Traditional AI creates new content; Generative AI only categorizes existing files.' },
      { id: 'B', text: 'Traditional AI analyzes or classifies existing data; Generative AI creates new, original text, images, or audio based on learned patterns.' },
      { id: 'C', text: 'Traditional AI uses neural networks; Generative AI operates without algorithms.' },
      { id: 'D', text: 'Traditional AI requires internet access; Generative AI works only offline.' }
    ],
    correctAnswer: 'B',
    explanation: 'Generative AI produces new content (text, code, imagery, sound), whereas traditional AI typically classifies, scores, or predicts based on existing data.',
    hint: 'Generative AI generates novel media rather than simply classifying or sorting existing files.',
    topics: ['generative-ai', 'traditional-ai']
  },
  {
    id: 117,
    chapterId: 'ch1',
    questionNumber: 17,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'A tech team trains a Large Language Model on billions of web pages so it learns grammar and general world knowledge. Then, they train it on medical Q&As so it can assist doctors. What are these two stages?',
    options: [
      { id: 'A', text: 'Fine-tuning followed by Pretraining' },
      { id: 'B', text: 'Pretraining followed by Fine-tuning' },
      { id: 'C', text: 'Supervised learning followed by Unsupervised learning' },
      { id: 'D', text: 'Prompting followed by Meta-prompting' }
    ],
    correctAnswer: 'B',
    explanation: 'Pretraining builds broad pattern recognition across massive datasets; Fine-tuning adjusts the model on domain-specific data for specialized tasks.',
    hint: 'Broad foundation learning comes first (pre-training), followed by domain specialization (fine-tuning).',
    topics: ['pretraining', 'fine-tuning']
  },
  {
    id: 118,
    chapterId: 'ch1',
    questionNumber: 18,
    level: 3,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'Why are transformer architectures considered a major breakthrough for Large Language Models?',
    options: [
      { id: 'A', text: 'They process sentence words strictly one-by-one in sequential order.' },
      { id: 'B', text: 'They process all words in a text sequence simultaneously, capturing relationships and context across the entire sentence.' },
      { id: 'C', text: 'They replace software code with physical optical sensors.' },
      { id: 'D', text: 'They guarantee that AI outputs contain zero factual errors.' }
    ],
    correctAnswer: 'B',
    explanation: 'Transformers process text inputs in parallel (simultaneously) rather than sequentially, allowing the model to capture context and long-range word relationships effectively.',
    hint: 'Transformers analyze words simultaneously in parallel rather than word-by-word sequentially.',
    topics: ['transformers', 'neural-networks']
  },
  {
    id: 119,
    chapterId: 'ch1',
    questionNumber: 19,
    level: 3,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: "In the sentence 'The bank of the river was muddy', how does a transformer model determine the correct meaning of 'bank'?",
    options: [
      { id: 'A', text: 'It looks up the first definition in a pre-installed dictionary file.' },
      { id: 'B', text: "It evaluates 'bank' in context by analyzing its relationship to surrounding words like 'river' and 'muddy' simultaneously." },
      { id: 'C', text: 'It flips a digital coin between financial bank and river bank.' },
      { id: 'D', text: 'It pauses and prompts the user to select the definition.' }
    ],
    correctAnswer: 'B',
    explanation: 'Self-attention mechanisms in transformers analyze contextual relationships between all words in the input simultaneously.',
    hint: "Transformers use attention to evaluate words in relationship to contextual clues like 'river' and 'muddy'.",
    topics: ['self-attention', 'transformers']
  },
  {
    id: 120,
    chapterId: 'ch1',
    questionNumber: 20,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: "What does the 'P' in GPT stand for, and what does it mean in terms of how the model was created?",
    options: [
      { id: 'A', text: 'Programmed – meaning human programmers wrote every rule by hand.' },
      { id: 'B', text: 'Pretrained – meaning the model learned general language patterns on vast data before customization.' },
      { id: 'C', text: 'Predictive – meaning it only calculates numeric equations.' },
      { id: 'D', text: 'Parallel – meaning it runs on multiple computers at once.' }
    ],
    correctAnswer: 'B',
    explanation: "GPT stands for Generative Pretrained Transformer; 'Pretrained' indicates it underwent large-scale initial training before task fine-tuning.",
    hint: 'GPT = Generative Pretrained Transformer.',
    topics: ['gpt', 'definitions']
  },
  {
    id: 121,
    chapterId: 'ch1',
    questionNumber: 21,
    level: 3,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'In a Generative Adversarial Network (GAN), what happens during the competitive process between the generator and discriminator?',
    options: [
      { id: 'A', text: 'The generator creates fake images, while the discriminator tries to distinguish real images from generated ones, driving both to improve.' },
      { id: 'B', text: 'The generator converts text to speech, while the discriminator translates speech into text.' },
      { id: 'C', text: 'The generator writes computer code, while the discriminator executes it on server hardware.' },
      { id: 'D', text: 'Both networks generate images independently without comparing results.' }
    ],
    correctAnswer: 'A',
    explanation: 'GANs consist of a Generator (creating synthetic samples) and a Discriminator (evaluating authenticity), creating an adversarial learning loop.',
    hint: 'The generator produces synthetic images, and the discriminator tries to detect whether each image is real or fake.',
    topics: ['gans', 'generative-models']
  },
  {
    id: 122,
    chapterId: 'ch1',
    questionNumber: 22,
    level: 3,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'How does a diffusion model turn a text prompt into a high-detail image?',
    options: [
      { id: 'A', text: 'By combining pre-stored stock photos from an online database.' },
      { id: 'B', text: 'By starting with a grid of random visual noise (static) and iteratively removing noise step-by-step to reveal the target image.' },
      { id: 'C', text: 'By using robotic plotters to draw vector lines on a digital canvas.' },
      { id: 'D', text: 'By searching social media posts for tagged keywords.' }
    ],
    correctAnswer: 'B',
    explanation: 'Diffusion models generate images through a reverse denoising process, transforming random Gaussian noise into structured visual content.',
    hint: 'Diffusion models start with pure visual static (noise) and iteratively remove the noise in steps.',
    topics: ['diffusion-models', 'image-generation']
  },
  {
    id: 123,
    chapterId: 'ch1',
    questionNumber: 23,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: "Read these three student prompts:\nPrompt 1: 'Summarize the three main causes of the American Revolution.'\nPrompt 2: 'Write a poem about a robot discovering feelings.'\nPrompt 3: 'Evaluate the advantages and drawbacks of online learning.'\nWhich prompt types do 1, 2, and 3 represent?",
    options: [
      { id: 'A', text: '1: Informative, 2: Creative, 3: Analytical' },
      { id: 'B', text: '1: Analytical, 2: Informative, 3: Creative' },
      { id: 'C', text: '1: Creative, 2: Meta-prompt, 3: Informative' },
      { id: 'D', text: '1: Informative, 2: Analytical, 3: Meta-prompt' }
    ],
    correctAnswer: 'A',
    explanation: 'Prompt 1 requests factual summary (Informative), Prompt 2 asks for imaginative text (Creative), Prompt 3 requests structured comparison/evaluation (Analytical).',
    hint: '1 is asking for factual facts, 2 is writing imaginative poetry, 3 is evaluating pros and cons.',
    topics: ['prompt-types', 'prompting']
  },
  {
    id: 124,
    chapterId: 'ch1',
    questionNumber: 24,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'Which of the following is the best example of a meta-prompt?',
    options: [
      { id: 'A', text: "'What is the boiling point of water at high altitude?'" },
      { id: 'B', text: "'Act as a high school biology teacher and explain photosynthesis in 3 bullet points using simple analogies.'" },
      { id: 'C', text: "'Write a short story about a space mission to Mars.'" },
      { id: 'D', text: "'Translate the word welcome into five different languages.'" }
    ],
    correctAnswer: 'B',
    explanation: 'A meta-prompt sets persona, structural rules, formatting constraints, or behavioral guidelines for how the AI should formulate its response.',
    hint: "A meta-prompt sets the persona ('Act as...'), structural format ('3 bullet points'), and constraints.",
    topics: ['meta-prompts', 'prompting']
  },
  {
    id: 125,
    chapterId: 'ch1',
    questionNumber: 25,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: "A student enters a prompt: 'Write a short story.' Finding the result too generic, the student adds: 'Include a mystery theme and set it in a quiet library.' What prompt refinement technique is being practiced?",
    options: [
      { id: 'A', text: 'Pretraining' },
      { id: 'B', text: 'Iterative prompting' },
      { id: 'C', text: 'Zero-shot prompting' },
      { id: 'D', text: 'Unsupervised clustering' }
    ],
    correctAnswer: 'B',
    explanation: 'Iterative prompting involves continuously refining prompts step-by-step based on previous outputs to achieve a precise result.',
    hint: 'Refining prompts step-by-step across consecutive turns is called iterative prompting.',
    topics: ['iterative-prompting', 'prompting']
  },
  {
    id: 126,
    chapterId: 'ch1',
    questionNumber: 26,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: "A student asks GenAI: 'Write a 3-bullet-point summary of photosynthesis.' The AI responds with a factually correct, beautifully written 5-page essay. How should the student evaluate this output?",
    options: [
      { id: 'A', text: 'Highly Accurate and Highly Relevant.' },
      { id: 'B', text: 'Accurate in content, but low in Relevance because it failed the formatting and length constraints.' },
      { id: 'C', text: 'Relevant in format, but low in Accuracy.' },
      { id: 'D', text: 'Creative, but lacking fine-tuning data.' }
    ],
    correctAnswer: 'B',
    explanation: 'Relevance measures how well the output follows specific instructions (length, bullet format). Factually correct text that ignores constraints fails the relevance check.',
    hint: 'The information is true (accurate), but it failed to follow the requested length and format (not relevant).',
    topics: ['evaluating-output', 'accuracy-vs-relevance']
  },
  {
    id: 127,
    chapterId: 'ch1',
    questionNumber: 27,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'Which of the following prompts demonstrates bias-aware prompting?',
    options: [
      { id: 'A', text: "'Write an article explaining why traditional textbooks are completely useless compared to laptops.'" },
      { id: 'B', text: "'Examine the perspectives of both supporters and critics regarding the use of AI in high school classrooms.'" },
      { id: 'C', text: "'Prove why one specific political candidate is superior to all others.'" },
      { id: 'D', text: "'Explain why urban living is always better than rural living.'" }
    ],
    correctAnswer: 'B',
    explanation: 'Bias-aware prompting explicitly requests balanced coverage across multiple viewpoints rather than leading the AI toward a single biased stance.',
    hint: 'Look for the prompt requesting balanced arguments from both supporters and critics.',
    topics: ['bias-aware-prompting', 'ethics']
  },
  {
    id: 128,
    chapterId: 'ch1',
    questionNumber: 28,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'Which prompt will yield the most effective and targeted response from a GenAI tool?',
    options: [
      { id: 'A', text: "'Tell me something about climate change.'" },
      { id: 'B', text: "'Write an essay.'" },
      { id: 'C', text: "'Draft a 200-word summary explaining how rising ocean temperatures affect coral reefs, aimed at 9th-grade science students.'" },
      { id: 'D', text: "'Explain science stuff in detail.'" }
    ],
    correctAnswer: 'C',
    explanation: 'Good prompts provide clear context, explicit topic scope, target audience, and length/formatting requirements.',
    hint: 'Effective prompts specify word count, precise topic, mechanism, and target audience.',
    topics: ['effective-prompting', 'prompt-design']
  },
  {
    id: 129,
    chapterId: 'ch1',
    questionNumber: 29,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'How does a Large Language Model (LLM) generate text word-by-word?',
    options: [
      { id: 'A', text: 'It retrieves whole sentences pre-written by human authors stored in a database.' },
      { id: 'B', text: 'It calculates the statistical probability of the most likely next word based on surrounding context patterns learned during training.' },
      { id: 'C', text: 'It consults a live human operator before outputting each word.' },
      { id: 'D', text: 'It selects random words from a digital dictionary.' }
    ],
    correctAnswer: 'B',
    explanation: 'LLMs predict text autoregressively by calculating statistical probability distributions over vocabulary words given preceding context.',
    hint: 'LLMs generate text by predicting the statistically most likely next word given previous tokens.',
    topics: ['llm-mechanics', 'probabilistic-text']
  },
  {
    id: 130,
    chapterId: 'ch1',
    questionNumber: 30,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'Which set contains ONLY outputs that Generative AI can produce directly?',
    options: [
      { id: 'A', text: 'Computer source code, original digital images, and synthetic music tracks.' },
      { id: 'B', text: 'Physical plastic toys, computer code, and text summaries.' },
      { id: 'C', text: 'Silicon chips, digital artwork, and video camera lenses.' },
      { id: 'D', text: 'Real cooked food, synthetic audio, and legal essays.' }
    ],
    correctAnswer: 'A',
    explanation: 'GenAI generates digital software assets (text, code, image files, audio tracks) but cannot directly manufacture physical objects or hardware.',
    hint: 'Generative AI produces digital media and data files, not physical hardware or tangible food.',
    topics: ['genai-capabilities', 'digital-output']
  },
  {
    id: 131,
    chapterId: 'ch1',
    questionNumber: 31,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: "A user asks an image generator: 'Draw an astronaut on Mars.' The user wants a realistic photographic style, but the AI generates a cartoon drawing. What parameter or prompt element was missing?",
    options: [
      { id: 'A', text: 'The pretraining architecture.' },
      { id: 'B', text: 'Specific style and artistic medium instructions in the prompt.' },
      { id: 'C', text: 'An unsupervised clustering algorithm.' },
      { id: 'D', text: 'A speech-to-text converter.' }
    ],
    correctAnswer: 'B',
    explanation: 'Vague prompts leave aesthetic choices (cartoon vs. photorealistic) to model defaults; explicit style descriptors guide generation quality.',
    hint: 'To get a photorealistic image rather than an illustration, the prompt must explicitly specify the visual style and medium.',
    topics: ['image-prompting', 'style-descriptors']
  },
  {
    id: 132,
    chapterId: 'ch1',
    questionNumber: 32,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'Why might two different users submitting the exact same prompt to a Generative AI model receive slightly different responses?',
    options: [
      { id: 'A', text: 'The model hardware changes its memory chips every hour.' },
      { id: 'B', text: 'Generative models use probabilistic sampling rather than retrieving fixed, hard-coded answers.' },
      { id: 'C', text: 'One user computer has faster internet speed.' },
      { id: 'D', text: 'The model selectively ignores instructions for certain users.' }
    ],
    correctAnswer: 'B',
    explanation: 'GenAI models generate output probabilistically; unless randomness (temperature) is set to zero, responses naturally vary.',
    hint: 'Generative models compute probabilities and sample words dynamically rather than fetching static, identical answers.',
    topics: ['probabilistic-sampling', 'temperature']
  },

  // ==========================================
  // SECTION 1.4: AI AND ETHICS (Q33 - Q38, Q49 - Q50)
  // ==========================================
  {
    id: 133,
    chapterId: 'ch1',
    questionNumber: 33,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.4)',
    sectionId: '1.4',
    type: 'single-choice',
    prompt: 'A realistic video published online shows a school principal making unfair statements. Upon investigation, analysts discover the video was artificially synthesized using combined AI audio and visual tools. What is this called?',
    options: [
      { id: 'A', text: 'An Expert System' },
      { id: 'B', text: 'A Deepfake' },
      { id: 'C', text: 'A Meta-prompt' },
      { id: 'D', text: 'Unsupervised learning' }
    ],
    correctAnswer: 'B',
    explanation: 'Deepfakes are AI-generated synthetic media (video, audio, image) that realistically manipulate human appearances or voices to portray fake events.',
    hint: 'Artificially synthesized media that convincingly replaces likeness or voice is termed a deepfake.',
    topics: ['deepfakes', 'synthetic-media', 'ethics']
  },
  {
    id: 134,
    chapterId: 'ch1',
    questionNumber: 34,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.4)',
    sectionId: '1.4',
    type: 'single-choice',
    prompt: 'In the context of student assignment completion, which action constitutes plagiarism when using AI?',
    options: [
      { id: 'A', text: 'Asking an AI tool to explain a complex physics concept in simpler terms.' },
      { id: 'B', text: 'Copying AI-generated paragraphs directly into a research paper and turning it in as your original work.' },
      { id: 'C', text: 'Using an AI tool to generate practice quiz questions for self-study.' },
      { id: 'D', text: 'Asking AI to check your essay for typos and spelling mistakes.' }
    ],
    correctAnswer: 'B',
    explanation: "Submitting AI-generated text as one's own original intellectual work without permission or proper citation is academic plagiarism.",
    hint: 'Plagiarism means submitting work you did not write yourself as your own original creation.',
    topics: ['plagiarism', 'academic-integrity']
  },
  {
    id: 135,
    chapterId: 'ch1',
    questionNumber: 35,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.4)',
    sectionId: '1.4',
    type: 'single-choice',
    prompt: 'An AI tool used by a company to screen job applicants consistently ranks female candidates lower than male candidates. Why did the AI develop this unfair bias?',
    options: [
      { id: 'A', text: 'Computer processors have inherent personal opinions about gender.' },
      { id: 'B', text: 'The historical training data used to train the AI reflected past human hiring imbalances.' },
      { id: 'C', text: 'The AI was trained using unsupervised physical robotics.' },
      { id: 'D', text: "The AI's transformer architecture malfunctioned due to internet lag." }
    ],
    correctAnswer: 'B',
    explanation: 'AI models absorb and amplify bias present in historical training data if the data reflects past societal inequalities or unrepresentative samples.',
    hint: 'Models mirror the historical patterns and imbalances present in the human training data.',
    topics: ['algorithmic-bias', 'training-data']
  },
  {
    id: 136,
    chapterId: 'ch1',
    questionNumber: 36,
    level: 2,
    levelTitle: 'Part A — Multiple Choice (Section 1.4)',
    sectionId: '1.4',
    type: 'single-choice',
    prompt: 'A city installs AI-driven facial recognition cameras at public bus stops to track crime suspects. While crime drops, citizens protest. What major ethical trade-off is illustrated here?',
    options: [
      { id: 'A', text: 'High financial cost versus slow computing speed.' },
      { id: 'B', text: 'Enhanced public security versus loss of personal privacy.' },
      { id: 'C', text: 'Reduced traffic speed versus increased air pollution.' },
      { id: 'D', text: 'Improved hardware durability versus battery drain.' }
    ],
    correctAnswer: 'B',
    explanation: 'Mass public surveillance highlights the fundamental ethical tension between collective security benefits and individual privacy rights.',
    hint: 'Weighing collective security against the civil loss of personal privacy and freedom.',
    topics: ['surveillance', 'privacy-vs-security']
  },
  {
    id: 137,
    chapterId: 'ch1',
    questionNumber: 37,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.4)',
    sectionId: '1.4',
    type: 'single-choice',
    prompt: 'When interacting with public conversational AI platforms for study assistance, which safety rule regarding personal data privacy MUST students follow?',
    options: [
      { id: 'A', text: 'Always include your full name, home address, and school name so the AI can tailor its answers.' },
      { id: 'B', text: 'Never enter sensitive personal identifiable information (PII) such as phone numbers, passwords, or home addresses into AI prompts.' },
      { id: 'C', text: 'Share your account login credentials with classmates so the AI learns faster.' },
      { id: 'D', text: 'Upload scanned copies of personal government IDs to verify your age.' }
    ],
    correctAnswer: 'B',
    explanation: 'Public AI tools store prompt inputs for model training; entering PII creates severe privacy and security risks.',
    hint: 'Never input Personally Identifiable Information (PII) like addresses, phone numbers, or passwords.',
    topics: ['data-privacy', 'pii-protection']
  },
  {
    id: 138,
    chapterId: 'ch1',
    questionNumber: 38,
    level: 1,
    levelTitle: 'Part A — Multiple Choice (Section 1.4)',
    sectionId: '1.4',
    type: 'single-choice',
    prompt: 'Why must students independently fact-check information provided by Generative AI models before including it in academic reports?',
    options: [
      { id: 'A', text: 'AI models deliberately lie to confuse students.' },
      { id: 'B', text: "GenAI models can produce 'hallucinations'—convincing responses that contain incorrect or fabricated information." },
      { id: 'C', text: 'AI output is written in encrypted code that humans cannot read directly.' },
      { id: 'D', text: 'Textbooks are automatically updated by AI every day.' }
    ],
    correctAnswer: 'B',
    explanation: "GenAI predicts probable word sequences rather than querying a database of facts, leading to plausible-sounding false statements ('hallucinations').",
    hint: "Generative models can generate convincing, plausible-sounding falsehoods known as hallucinations.",
    topics: ['hallucinations', 'fact-checking']
  },

  // ==========================================
  // PART B: TRUE OR FALSE QUESTIONS (Q39 - Q50)
  // ==========================================
  {
    id: 139,
    chapterId: 'ch1',
    questionNumber: 39,
    level: 1,
    levelTitle: 'Part B — True or False (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: 'True or False: Any software application that incorporates machine learning algorithms is automatically classified as an autonomous AI system.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'False',
    explanation: 'Autonomous AI specifically requires independent decision-making and operational execution in dynamic environments without human control. A basic ML spam filter or recommender is not autonomous.',
    hint: 'Autonomy requires independent operation in dynamic environments, which basic ML applications like spam filters do not have.',
    topics: ['autonomous-ai', 'definitions']
  },
  {
    id: 140,
    chapterId: 'ch1',
    questionNumber: 40,
    level: 1,
    levelTitle: 'Part B — True or False (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: 'True or False: In supervised learning, the AI algorithm is provided with a training dataset where every input example is paired with an explicit correct label or target output.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'True',
    explanation: 'Supervised learning relies on labeled training pairs (input -> target label) provided during training.',
    hint: 'Supervised training means each training example comes with the correct target answer label.',
    topics: ['supervised-learning', 'definitions']
  },
  {
    id: 141,
    chapterId: 'ch1',
    questionNumber: 41,
    level: 2,
    levelTitle: 'Part B — True or False (Section 1.1)',
    sectionId: '1.1',
    type: 'single-choice',
    prompt: 'True or False: Unsupervised learning requires human reviewers to assign point scores and rank outputs after every training cycle.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'False',
    explanation: 'Unsupervised learning discovers hidden patterns without labels or scores. Assigning scores based on human feedback describes RLHF.',
    hint: 'Assigning scores and ranking based on human feedback describes RLHF, not unsupervised clustering.',
    topics: ['unsupervised-learning', 'rlhf']
  },
  {
    id: 142,
    chapterId: 'ch1',
    questionNumber: 42,
    level: 2,
    levelTitle: 'Part B — True or False (Section 1.2)',
    sectionId: '1.2',
    type: 'single-choice',
    prompt: 'True or False: Expert Systems rely on deep neural networks to learn visual patterns from raw image files automatically.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'False',
    explanation: "Expert systems operate using human-coded 'if-then' logical rules, not neural network visual pattern learning (which belongs to Computer Vision).",
    hint: "Expert Systems follow human-crafted 'if-then' rules, not deep neural network visual patterns.",
    topics: ['expert-systems', 'computer-vision']
  },
  {
    id: 143,
    chapterId: 'ch1',
    questionNumber: 43,
    level: 1,
    levelTitle: 'Part B — True or False (Section 1.2)',
    sectionId: '1.2',
    type: 'single-choice',
    prompt: 'True or False: Natural Language Processing (NLP) enables computers to analyze sentence structure and meaning, whereas Speech Recognition specifically converts acoustic speech signals into written text.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'True',
    explanation: 'Speech recognition performs audio-to-text conversion; NLP handles syntax, semantics, and comprehension of written text.',
    hint: 'Speech Recognition converts audio soundwaves to text; NLP understands syntax and meaning.',
    topics: ['nlp', 'speech-recognition']
  },
  {
    id: 144,
    chapterId: 'ch1',
    questionNumber: 44,
    level: 2,
    levelTitle: 'Part B — True or False (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'True or False: During AI development, fine-tuning takes place before pretraining to teach the model basic grammar rules across large public datasets.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'False',
    explanation: 'Pretraining comes first (learning broad general patterns across large datasets); fine-tuning comes second (customizing on task-specific data).',
    hint: "Look at the prefix: 'Pre-' training happens before fine-tuning, not after.",
    topics: ['pretraining', 'fine-tuning']
  },
  {
    id: 145,
    chapterId: 'ch1',
    questionNumber: 45,
    level: 2,
    levelTitle: 'Part B — True or False (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'True or False: In a Generative Adversarial Network (GAN), the discriminator network generates synthetic images while the generator network evaluates whether the images look real or fake.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'False',
    explanation: 'The roles are reversed: the Generator creates synthetic images, and the Discriminator evaluates whether they are real or generated/fake.',
    hint: 'The generator generates; the discriminator discriminates (detects). The statement has their roles reversed.',
    topics: ['gans', 'roles']
  },
  {
    id: 146,
    chapterId: 'ch1',
    questionNumber: 46,
    level: 2,
    levelTitle: 'Part B — True or False (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'True or False: Diffusion models create images by starting with random visual static (noise) and iteratively removing noise step-by-step to reveal a clear image matching a prompt.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'True',
    explanation: 'Diffusion models operate through a reverse denoising process that converts Gaussian noise into detailed images.',
    hint: 'Diffusion models reverse noise to produce structured images.',
    topics: ['diffusion-models', 'denoising']
  },
  {
    id: 147,
    chapterId: 'ch1',
    questionNumber: 47,
    level: 1,
    levelTitle: 'Part B — True or False (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'True or False: A meta-prompt sets rules regarding response style, tone, format, or perspective rather than specifying only the topic content.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'True',
    explanation: "Meta-prompts instruct the AI on how to format, structure, or stylize its answer (e.g., 'Act as a teacher', 'Use 3 bullet points').",
    hint: 'Meta-prompts establish instructions regarding how the response should be formatted and styled.',
    topics: ['meta-prompts', 'prompt-design']
  },
  {
    id: 148,
    chapterId: 'ch1',
    questionNumber: 48,
    level: 1,
    levelTitle: 'Part B — True or False (Section 1.3)',
    sectionId: '1.3',
    type: 'single-choice',
    prompt: 'True or False: Because Generative AI models read massive datasets, their responses are guaranteed to be 100% factually accurate without needing textbook verification.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'False',
    explanation: "GenAI can generate 'hallucinations' or plausible-sounding errors; fact-checking against trusted sources is essential.",
    hint: 'Generative models predict probable word sequences and can generate convincing hallucinations.',
    topics: ['fact-checking', 'hallucinations']
  },
  {
    id: 149,
    chapterId: 'ch1',
    questionNumber: 49,
    level: 1,
    levelTitle: 'Part B — True or False (Section 1.4)',
    sectionId: '1.4',
    type: 'single-choice',
    prompt: 'True or False: Entering your full name, phone number, and home address into conversational AI prompts is an ethical and safe practice for completing school projects.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'False',
    explanation: 'Entering personal identifiable information (PII) into public AI platforms violates privacy safety guidelines.',
    hint: 'Never submit PII (Personally Identifiable Information) into online AI prompts.',
    topics: ['data-privacy', 'safety']
  },
  {
    id: 150,
    chapterId: 'ch1',
    questionNumber: 50,
    level: 1,
    levelTitle: 'Part B — True or False (Section 1.4)',
    sectionId: '1.4',
    type: 'single-choice',
    prompt: 'True or False: Using AI as a tutoring helper to explain complex concepts or generate practice study problems is ethical as long as students do not submit AI output as their own work.',
    options: [
      { id: 'True', text: 'True' },
      { id: 'False', text: 'False' }
    ],
    correctAnswer: 'True',
    explanation: 'Using AI as an educational study aid for explanations or practice is ethical, provided students uphold academic integrity and do not plagiarize.',
    hint: 'Using AI to learn and understand is ethical as long as you do not copy and claim it as your own writing.',
    topics: ['academic-integrity', 'ethical-use']
  }
]
