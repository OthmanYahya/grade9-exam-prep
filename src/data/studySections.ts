import { StudySection, ChecklistItem } from '../types'
import { CHAPTER1_STUDY_SECTIONS, CHAPTER1_CHECKLIST } from './chapter1Study'

const RAW_CHAPTER3_STUDY_SECTIONS: Omit<StudySection, 'chapterId'>[] = [
  {
    id: 1,
    title: '1. What the exam is most likely to test',
    shortTitle: 'Exam Priorities',
    subtitle: 'High-yield topics, predicted question distributions, and what to skip',
    relatedQuestionIds: [1, 2, 5, 8, 9, 13, 24, 25],
    blocks: [
      {
        type: 'paragraph',
        text: 'The 53-question bank mainly tests variable names, basic print() / input(), assignment operators, comparisons, and short traces. The 100-slide lesson also teaches sep=, end=, arithmetic, all three logical operators, basic data types, and practical programs using input. The prediction below is an informed guide for your revision.'
      },
      {
        type: 'table',
        table: {
          headers: ['Priority', 'Topics to Practise', 'Why It Matters'],
          rows: [
            ['Must Know', 'Variable updates and capitalization; print() vs input(); int(); =, ==, !=; +=, /=, %=; True/False', 'Repeated throughout the original question bank and lesson slides.'],
            ['Extra Attention', 'sep= and end=; exact output; and, or, not; mixed operations (+, *, %, **, /)', 'Clearly taught in the lesson slides, but appears less often in basic drills.'],
            ['Possible Twists', 'Multiple changes to one variable; input stored as text; negative numbers; a code error rather than a number; two print() statements interacting', 'Natural harder combinations of chapter ideas that exam writers love to ask.']
          ]
        }
      },
      {
        type: 'callout',
        calloutType: 'note',
        title: 'Not a focus of this chapter',
        text: 'Do not spend revision time learning if-statements, while/for loops, lists, or custom def functions yet! The curriculum states that if-statements begin in the next chapter. Focus purely on variables, operators, input/output, and expressions.'
      }
    ]
  },
  {
    id: 2,
    title: '2. The five ideas you must understand first',
    shortTitle: 'Core Concepts & IDLE',
    subtitle: 'Programs, variables, functions, and the IDLE workflow (Editor vs Shell)',
    relatedQuestionIds: [1, 2, 3, 4, 8],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['Concept', 'Simple Meaning', 'Python Example'],
          rows: [
            ['Program', 'A set of instructions telling a computer what to do', 'print("Hi")'],
            ['Python', 'A readable programming language popular in AI and software engineering', 'print("Welcome")'],
            ['Variable', 'A labelled box in computer memory holding a value', 'score = 9'],
            ['Function', 'A built-in instruction that performs a specific action', 'print(), input(), int()'],
            ['Output', 'What the program displays on screen for the user', 'The text displayed in the shell']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'IDLE: Shell versus Editor',
        text: 'IDLE stands for Integrated Development and Learning Environment. It contains two distinct windows:'
      },
      {
        type: 'list',
        items: [
          'Python Shell: Opens when IDLE starts. Shows program output and is used to test single instructions immediately.',
          'Python Editor: Used to write, edit, save, and run a complete multi-line program file.',
          'To open editor: In the shell, click File → New File.',
          'To save: File → Save (or Save As); files end with the .py extension.',
          'To run: Run → Run Module (or press F5 on your keyboard); the output appears in the Shell.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'remember',
        title: 'Memory Rule',
        text: 'Editor = Write & Save. Shell = See Output. Always save your file before pressing F5 to run.'
      }
    ]
  },
  {
    id: 3,
    title: '3. Variables: the most important tracing skill',
    shortTitle: 'Variables & Tracing',
    subtitle: 'Reassignment, independent boxes, naming rules, data types, and line-by-line tracing',
    relatedQuestionIds: [5, 6, 13, 14, 15, 27, 37, 38, 42],
    blocks: [
      {
        type: 'code',
        language: 'python',
        title: 'Reassignment Example',
        code: `points = 5
points = 12
print(points)`,
        output: '12',
        note: 'The later assignment replaces the earlier value. In Python, = means "store value on the right into the variable on the left". It does not mean compare.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Independent Variables Example',
        code: `A = B = 4
A = A + 3
print(A, B)`,
        output: '7 4',
        note: 'At the start both hold 4. Updating A does NOT change B. Each variable is an independent box in memory.'
      },
      {
        type: 'callout',
        calloutType: 'warning',
        title: 'Variable Naming Rules',
        text: 'Allowed: Letters, digits, and underscores (_).\nForbidden: Cannot start with a digit (e.g. 1student is invalid). Cannot contain spaces, hyphens (my-grade is invalid), or symbols (@, !, #).\nCase Sensitivity: Score, score, and SCORE are three completely different variables in Python!'
      },
      {
        type: 'table',
        table: {
          headers: ['Data Type', 'Python Name', 'Example Values'],
          rows: [
            ['Integer', 'int', '7, -3, 0, 100'],
            ['Float', 'float', '7.5, 3.14, 4.0'],
            ['String', 'str', '"7", "Hello", "Maya"']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'Guided Trace: Follow the Boxes',
        text: 'When tracing code on an exam, write down a small table and update values one line at a time.'
      },
      {
        type: 'code',
        language: 'python',
        code: `x = 3
y = x + 2
x = y * 2
print(x, y)`
      },
      {
        type: 'table',
        table: {
          headers: ['Line', 'New Value of x', 'New Value of y', 'Explanation'],
          rows: [
            ['x = 3', '3', 'not set', 'x is created with 3'],
            ['y = x + 2', '3', '5', 'y becomes 3 + 2 = 5'],
            ['x = y * 2', '10', '5', 'x becomes 5 * 2 = 10 (old x is replaced!)'],
            ['print(x, y)', '10', '5', 'Output: 10 5']
          ]
        }
      }
    ]
  },
  {
    id: 4,
    title: '4. print(): output, quotes, separators and line endings',
    shortTitle: 'print(), sep & end',
    subtitle: 'Commas vs quotes, sep= parameter, end= parameter, and combined spacing',
    relatedQuestionIds: [7, 16, 17, 26, 32, 33, 44, 48],
    blocks: [
      {
        type: 'code',
        language: 'python',
        title: 'Text vs Variable',
        code: `name = "Maya"
print("name")    # prints the word name
print(name)      # prints Maya
print("Hi", name)`,
        output: `name
Maya
Hi Maya`,
        note: 'Quotation marks print the literal characters. Without quotes, Python evaluates the variable. A comma in print() separates arguments with a single space.'
      },
      {
        type: 'table',
        table: {
          headers: ['Code', 'Output', 'Rule Explanation'],
          rows: [
            ['print("A", "B")', 'A B', 'Default separator is a single space.'],
            ['print("A", "B", sep="-")', 'A-B', 'sep replaces what goes between items.'],
            ['print("A", "B", sep="")', 'AB', 'Empty separator means no gap at all.'],
            ['print("Hi", end="!")', 'Hi!', 'end replaces the default newline at the end of the line.']
          ]
        }
      },
      {
        type: 'code',
        language: 'python',
        title: 'Staying on One Line with end',
        code: `print("Good", end=" ")
print("morning")`,
        output: 'Good morning',
        note: 'Each print() normally moves to the next line. Setting end=" " prevents the newline, joining the subsequent print on the same line.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Combined sep and end',
        code: `print("red", "blue", sep="/", end="!")
print("GO")`,
        output: 'red/blue!GO',
        note: 'sep handles the middle; end handles the finish. Output stays on one single line.'
      }
    ]
  },
  {
    id: 5,
    title: '5. input() and int(): the classic exam trap',
    shortTitle: 'input() & int() Trap',
    subtitle: 'Why input() returns text, and how int() enables mathematical addition',
    relatedQuestionIds: [8, 9, 24, 25, 36, 41, 43, 45, 47],
    blocks: [
      {
        type: 'callout',
        calloutType: 'warning',
        title: 'The Number One Exam Trap',
        text: 'The value returned by input() is ALWAYS text (a string), even if the user types digits like 14! To do math, you must convert it using int().'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Trap: Without int() (Text Concatenation)',
        code: `# User enters 14
age = input("Age? ")
print(age + "1")`,
        output: '141',
        note: '"14" + "1" joins the two strings together, giving "141", not 15!'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Solution: With int() (Mathematical Addition)',
        code: `# User enters 14
age = int(input("Age? "))
print(age + 1)`,
        output: '15',
        note: 'int() converts text "14" to integer 14, so 14 + 1 produces 15.'
      },
      {
        type: 'callout',
        calloutType: 'tip',
        title: 'Conversion Rule',
        text: '"5" + "2" = "52" (string joining)\n5 + 2 = 7 (integer addition)\nint("hello") causes a ValueError because letters cannot become numbers!'
      }
    ]
  },
  {
    id: 6,
    title: '6. Operators: learn what every symbol means',
    shortTitle: 'Operators Guide',
    subtitle: 'Arithmetic (+, -, *, /, %, **), assignment updates (+=, etc.), comparisons, and logic',
    relatedQuestionIds: [10, 11, 12, 18, 19, 20, 21, 22, 23, 28, 29, 30, 31, 34, 35, 46],
    blocks: [
      {
        type: 'table',
        table: {
          headers: ['Symbol', 'Meaning', 'Example & Result', 'Key Exam Note'],
          rows: [
            ['+', 'Addition', '8 + 3 → 11', 'Also joins strings: "a" + "b" → "ab"'],
            ['-', 'Subtraction', '8 - 3 → 5', 'Standard mathematical subtraction'],
            ['*', 'Multiplication', '8 * 3 → 24', 'Takes precedence over addition'],
            ['/', 'Division', '8 / 2 → 4.0', 'ALWAYS produces a float with a decimal in Python 3!'],
            ['%', 'Remainder (Modulo)', '8 % 3 → 2', 'Leaves what remains after division. Not percentage!'],
            ['**', 'Exponentiation (Power)', '2 ** 3 → 8', '2 raised to power 3 (2 × 2 × 2)']
          ]
        }
      },
      {
        type: 'table',
        table: {
          headers: ['Assignment Shortcut', 'Equivalent To', 'If x starts at 8, new x'],
          rows: [
            ['x += 3', 'x = x + 3', '11'],
            ['x -= 3', 'x = x - 3', '5'],
            ['x *= 3', 'x = x * 3', '24'],
            ['x /= 2', 'x = x / 2', '4.0'],
            ['x %= 3', 'x = x % 3', '2'],
            ['x **= 2', 'x = x ** 2', '64']
          ]
        }
      },
      {
        type: 'table',
        table: {
          headers: ['Comparison', 'Meaning', 'Example & Result'],
          rows: [
            ['==', 'Equal to', '5 == 5 → True; 5 == 6 → False'],
            ['!=', 'Not equal to', '5 != 2 → True; 5 != 5 → False'],
            ['>', 'Greater than', '3 > 7 → False; 8 > 2 → True'],
            ['<', 'Less than', '3 < 7 → True; 9 < 4 → False'],
            ['>=', 'Greater than or equal to', '7 >= 7 → True (equality counts!)'],
            ['<=', 'Less than or equal to', '6 <= 5 → False; -3 <= -3 → True']
          ]
        }
      },
      {
        type: 'callout',
        calloutType: 'note',
        title: 'Negative Numbers Comparison',
        text: '-2 > -10 is True! On a number line, numbers closer to zero are greater. -2 is greater than -10.'
      },
      {
        type: 'table',
        table: {
          headers: ['Logical Operator', 'Rule', 'Example & Result'],
          rows: [
            ['and', 'Both sides must be True', '(5 > 2) and (3 == 3) → True'],
            ['or', 'At least one side must be True', '(1 > 8) or (3 == 3) → True'],
            ['not', 'Reverses the truth value', 'not (4 > 1) → False']
          ]
        }
      }
    ]
  },
  {
    id: 7,
    title: '7. How to solve a "What is the output?" question',
    shortTitle: 'Solving Output Questions',
    subtitle: 'A disciplined 6-step method to prevent careless mistakes on tricky traces',
    relatedQuestionIds: [13, 14, 16, 17, 27, 32, 33, 36, 42, 48],
    blocks: [
      {
        type: 'list',
        items: [
          '1. Scan for inputs: Check whether input() returns text or is converted with int().',
          '2. Make a mini trace table: Write down every variable name. When a line updates a variable, cross out the old number and write the new one.',
          '3. Check operators carefully: Remember that % is remainder, ** is power, and / produces a float (e.g. 4.0).',
          '4. Evaluate brackets first: Follow BODMAS/PEMDAS. In boolean logic, evaluate comparisons first, then and/or/not.',
          '5. Inspect print(): Look at quotes (text) vs no quotes (variable). Commas add one space unless sep changes it. end affects whether output moves to a new line.',
          '6. Watch out for errors: Capitalization mismatches (Score vs score) or int("words") cause errors rather than printing a value!'
        ]
      },
      {
        type: 'code',
        language: 'python',
        title: 'Combined Tracing Walkthrough',
        code: `p = 4
q = p + 3
p += q
print("P", p, sep="=", end="; ")
print("Q", q, sep="=")`,
        output: 'P=11; Q=7',
        note: 'Trace: p starts at 4 → q becomes 4 + 3 = 7 → p += q sets p to 4 + 7 = 11. First print outputs "P=11; " without ending line. Second print outputs "Q=7". Result is P=11; Q=7.'
      }
    ]
  },
  {
    id: 8,
    title: '8. Traps worth memorising before the exam',
    shortTitle: 'Exam Traps & Checklist',
    subtitle: 'The 9 most common pitfalls and mistakes that trip students up',
    relatedQuestionIds: [15, 17, 21, 22, 24, 26, 31, 37, 41, 47],
    blocks: [
      {
        type: 'list',
        items: [
          'print("A") prints the letter A; print(A) prints the value of variable A (or errors if A is undefined).',
          'Name is not name. Capitalization counts everywhere in Python.',
          '= stores a value in a variable; == asks if two values are equal.',
          '>= includes equality (e.g. 7 >= 7 is True); > does not.',
          'input() returns text. Always wrap with int(input(...)) when whole number calculations are needed.',
          'sep= changes gaps between items inside one print; end= changes what happens at the end of that print.',
          'A variable can change both its value and its type: the last assignment wins.',
          'print() adds spaces between comma-separated items; punctuation in a separate item will have a space before it (e.g. "Hi", "Sam", "!" → "Hi Sam !").',
          'int("abc") and undefined variables cause runtime errors: do not guess a number when code raises an error!'
        ]
      },
      {
        type: 'callout',
        calloutType: 'tip',
        title: 'Study Advice',
        text: 'For every wrong answer in practice, write: "My mistake was ___; next time I will ___." Getting a question wrong and understanding why is the fastest way to master Python.'
      }
    ]
  }
]

export const CHAPTER3_STUDY_SECTIONS: StudySection[] = RAW_CHAPTER3_STUDY_SECTIONS.map((s) => ({
  ...s,
  chapterId: 'ch3' as const
}))

export { CHAPTER1_STUDY_SECTIONS, CHAPTER1_CHECKLIST }

export const STUDY_SECTIONS: StudySection[] = [...CHAPTER3_STUDY_SECTIONS, ...CHAPTER1_STUDY_SECTIONS]

export const CHAPTER3_CHECKLIST: ChecklistItem[] = [
  { id: 'c1', text: 'I can explain the shell/editor difference and remember File → New File, Save, and F5.' },
  { id: 'c2', text: 'I can identify valid variable names and spot case-sensitivity errors.' },
  { id: 'c3', text: 'I can trace variables across 4–6 lines in a table without mixing up old values.' },
  { id: 'c4', text: 'I know exactly how print(), sep=, and end= affect output and line breaks.' },
  { id: 'c5', text: 'I know that input() returns text and int() converts numeric text into whole numbers.' },
  { id: 'c6', text: 'I can calculate +, -, *, /, %, ** and update using shortcuts like +=, -=, *=.' },
  { id: 'c7', text: 'I can test ==, !=, <, >, <=, >= including negative numbers.' },
  { id: 'c8', text: 'I know and = both must be true, or = at least one true, not = reverse truth.' },
  { id: 'c9', text: 'I can recognize when code raises an error rather than producing normal output.' }
]

export const CHECKLIST_ITEMS: ChecklistItem[] = [...CHAPTER3_CHECKLIST, ...CHAPTER1_CHECKLIST]

export const MASTERY_TARGETS = [
  { level: 1, title: 'Level 1: Build confidence', target: '10 / 12', desc: 'Core definitions, IDLE basics, syntax rules' },
  { level: 2, title: 'Level 2: Regular exam practice', target: '11 / 14', desc: 'Single-step traces, operators, print formatting' },
  { level: 3, title: 'Level 3: Predicted harder questions', target: '8 / 12', desc: 'Multi-step traces, exact output, combined logic' },
  { level: 4, title: 'Level 4: Surprise / repair / writing', target: '6 / 10', desc: 'Bug-fixing, code correction, short programs' },
]

