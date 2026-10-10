import { Question } from '../types'
import { CHAPTER1_QUESTIONS } from './chapter1Questions'

const RAW_CHAPTER3_QUESTIONS: Omit<Question, 'chapterId' | 'questionNumber'>[] = [
  // ==========================================
  // LEVEL 1: BUILD CONFIDENCE (Q1 - Q12)
  // ==========================================
  {
    id: 1,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'Which statement is true?',
    options: [
      { id: 'A', text: 'Python is a word processor.' },
      { id: 'B', text: 'Python is a programming language.' },
      { id: 'C', text: 'Python is a physical computer.' },
      { id: 'D', text: 'Python is used only to draw flowcharts.' }
    ],
    correctAnswer: 'B',
    explanation: 'Python is a programming language. A program is a set of instructions.',
    hint: 'Think about what kind of tool Python is when you write code to give instructions to a computer.',
    topics: ['basics', 'definitions']
  },
  {
    id: 2,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'What does IDLE stand for?',
    options: [
      { id: 'A', text: 'Integrated Development and Learning Environment' },
      { id: 'B', text: 'Internal Data and Logic Editor' },
      { id: 'C', text: 'Internet Design and Learning Engine' },
      { id: 'D', text: 'Integrated Display and Language Editor' },
    ],
    correctAnswer: 'A',
    explanation: 'IDLE = Integrated Development and Learning Environment.',
    hint: 'Notice the words "Development" and "Learning"—it was specifically created for students learning Python.',
    topics: ['idle', 'definitions']
  },
  {
    id: 3,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'Which pairing is correct?',
    options: [
      { id: 'A', text: 'Editor: quick command results; shell: write and save programs' },
      { id: 'B', text: 'Editor: write/save programs; shell: show output and run quick instructions' },
      { id: 'C', text: 'Editor: only for printing paper; shell: only for drawings' },
      { id: 'D', text: 'Editor and shell have no difference' },
    ],
    correctAnswer: 'B',
    explanation: 'Write and save in the editor; see output and test quick commands in the shell. Remember: Editor = write, Shell = see.',
    hint: 'Remember the rule from Section 2: Editor = write & save; Shell = see output.',
    topics: ['idle', 'environment']
  },
  {
    id: 4,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'In IDLE, which steps are correct for opening the editor and running a saved program?',
    options: [
      { id: 'A', text: 'File → New File; Run → Run Module (F5)' },
      { id: 'B', text: 'Edit → New File; press F2' },
      { id: 'C', text: 'Help → Editor; press F1' },
      { id: 'D', text: 'File → Open Website; press F9' },
    ],
    correctAnswer: 'A',
    explanation: 'Open the editor with File → New File; run using Run → Run Module or F5. Save the program first.',
    hint: 'Which menu creates a new file, and which function key runs a module in IDLE?',
    topics: ['idle', 'workflow']
  },
  {
    id: 5,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'multiple-choice',
    selectCount: 2,
    prompt: 'Select TWO answers. Which variable names are valid?',
    options: [
      { id: 'A', text: '1student' },
      { id: 'B', text: 'student_1' },
      { id: 'C', text: 'my-grade' },
      { id: 'D', text: 'MyGrade' },
      { id: 'E', text: 'my@grade' },
    ],
    correctAnswer: ['B', 'D'],
    explanation: 'student_1 and MyGrade follow variable naming rules. Variable names cannot begin with a number (like 1student) or contain hyphens (-) or symbols (@).',
    hint: 'A valid variable name must not start with a digit and cannot contain hyphens or symbols like @. Underscores are allowed.',
    topics: ['variables', 'naming-rules']
  },
  {
    id: 6,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'Which is a string?',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '12.5' },
      { id: 'C', text: '"12"' },
      { id: 'D', text: '12 + 5' },
    ],
    correctAnswer: 'C',
    explanation: '"12" has quotation marks, so it is text (a string). 12 is an integer; 12.5 is a float.',
    hint: 'Strings in Python are always surrounded by quotes.',
    topics: ['types', 'data-types']
  },
  {
    id: 7,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'Which instruction correctly displays Hello?',
    options: [
      { id: 'A', text: 'print(Hello)' },
      { id: 'B', text: 'print("Hello")' },
      { id: 'C', text: 'show("Hello")' },
      { id: 'D', text: 'print = "Hello"' },
    ],
    correctAnswer: 'B',
    explanation: 'Text must be inside quotes: print("Hello"). Without quotes, Python looks for a variable called Hello.',
    hint: 'To print literal text rather than an undefined variable name, you need quotation marks inside print().',
    topics: ['print', 'syntax']
  },
  {
    id: 8,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'What does input() do?',
    options: [
      { id: 'A', text: 'Displays an answer only' },
      { id: 'B', text: 'Requests a value from the user' },
      { id: 'C', text: 'Always converts a value to a number' },
      { id: 'D', text: 'Saves the file' },
    ],
    correctAnswer: 'B',
    explanation: 'input() reads something the user types at the keyboard and returns it as text.',
    hint: 'Think about input vs output: input takes information into the program from the user.',
    topics: ['input', 'functions']
  },
  {
    id: 9,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'Which instruction stores an entered whole number in age?',
    options: [
      { id: 'A', text: 'age == input("Age?")' },
      { id: 'B', text: 'age = print("Age?")' },
      { id: 'C', text: 'age = int(input("Age?"))' },
      { id: 'D', text: 'age = input(int("Age?"))' },
    ],
    correctAnswer: 'C',
    explanation: 'int(input("Age?")) receives text from the user and converts it to an integer.',
    hint: 'input() returns text; int(...) wraps around the input to convert that text into an integer.',
    topics: ['input', 'int-conversion']
  },
  {
    id: 10,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'Which symbol means "raised to the power of"?',
    options: [
      { id: 'A', text: '*' },
      { id: 'B', text: '**' },
      { id: 'C', text: '%' },
      { id: 'D', text: '/' },
    ],
    correctAnswer: 'B',
    explanation: '** means exponentiation: 2 ** 3 is 8. A single * is multiplication.',
    hint: 'Multiplication is *, so power is two asterisks.',
    topics: ['operators', 'arithmetic']
  },
  {
    id: 11,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'multiple-choice',
    selectCount: 3,
    prompt: 'Select THREE answers. Which are comparison operators?',
    options: [
      { id: 'A', text: '>=' },
      { id: 'B', text: '+=' },
      { id: 'C', text: '!=' },
      { id: 'D', text: '==' },
      { id: 'E', text: '**' },
    ],
    correctAnswer: ['A', 'C', 'D'],
    explanation: '>=, !=, and == compare values and return True or False. += is an assignment operator; ** is arithmetic.',
    hint: 'Comparison operators compare two values (e.g. greater than or equal, not equal, equal). Assignment (+==) and arithmetic (**) are not comparison operators.',
    topics: ['operators', 'comparisons']
  },
  {
    id: 12,
    level: 1,
    levelTitle: 'Level 1 — Build confidence',
    type: 'single-choice',
    prompt: 'When is A and B true?',
    options: [
      { id: 'A', text: 'When either one is true' },
      { id: 'B', text: 'Only when both are true' },
      { id: 'C', text: 'Only when both are false' },
      { id: 'D', text: 'Whenever A is false' },
    ],
    correctAnswer: 'B',
    explanation: 'and is true only if both conditions are true. If either one is false, the whole expression is false.',
    hint: 'Think of "AND" in everyday life: you need both requirements to be true.',
    topics: ['operators', 'logic']
  },

  // ==========================================
  // LEVEL 2: REGULAR EXAM PRACTICE (Q13 - Q26)
  // ==========================================
  {
    id: 13,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `mark = 60
mark = 84
print(mark)`,
    options: [
      { id: 'A', text: '60' },
      { id: 'B', text: '84' },
      { id: 'C', text: '60 84' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'B',
    explanation: 'mark = 84 replaces the previous value 60. In Python, variables hold only the most recent value assigned to them.',
    hint: 'When a variable is assigned a new value, the old value is overwritten.',
    traceSteps: [
      { step: 'mark = 60', state: 'mark is 60' },
      { step: 'mark = 84', state: 'mark is overwritten with 84' },
      { step: 'print(mark)', state: 'prints 84' },
    ],
    topics: ['variables', 'assignment']
  },
  {
    id: 14,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `A = B = 7
A += 2
print(A, B)`,
    options: [
      { id: 'A', text: '9 9' },
      { id: 'B', text: '7 9' },
      { id: 'C', text: '9 7' },
      { id: 'D', text: '7 7' },
    ],
    correctAnswer: 'C',
    explanation: 'Both variables start as 7; A += 2 changes A to 9, but B stays 7. Changing A does not affect B.',
    hint: 'Both start at 7. Notice which variable is updated by += 2. Does updating A change B?',
    traceSteps: [
      { step: 'A = B = 7', state: 'A = 7, B = 7' },
      { step: 'A += 2', state: 'A = 9, B = 7' },
      { step: 'print(A, B)', state: 'prints 9 7' },
    ],
    topics: ['variables', 'assignment-operators']
  },
  {
    id: 15,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What happens?',
    codeSnippet: `Score = 15
print(score)`,
    options: [
      { id: 'A', text: 'Prints 15' },
      { id: 'B', text: 'Prints score' },
      { id: 'C', text: 'Prints 0' },
      { id: 'D', text: 'Raises an error' },
    ],
    correctAnswer: 'D',
    explanation: 'Python is case-sensitive: Score and score are different variable names. Because score was never defined, Python raises a NameError.',
    hint: 'Look closely at the capitalization of Score in line 1 versus score in line 2.',
    topics: ['variables', 'case-sensitivity', 'errors']
  },
  {
    id: 16,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `x = 6
print("x", x)`,
    options: [
      { id: 'A', text: '6 6' },
      { id: 'B', text: 'x 6' },
      { id: 'C', text: 'x x' },
      { id: 'D', text: 'x6' },
    ],
    correctAnswer: 'B',
    explanation: '"x" inside quotes is literal text x; x without quotes is the variable value (6). The comma in print() inserts a space between items.',
    hint: '"x" is text, but x without quotes refers to the variable. Comma inserts a single space.',
    topics: ['print', 'variables', 'strings']
  },
  {
    id: 17,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is the exact output?',
    codeSnippet: `print("Hi", "Sam", "!")`,
    options: [
      { id: 'A', text: 'HiSam!' },
      { id: 'B', text: 'Hi Sam!' },
      { id: 'C', text: 'Hi Sam !' },
      { id: 'D', text: '"Hi" "Sam" "!"' },
    ],
    correctAnswer: 'C',
    explanation: 'Commas insert one space before each following item, including "!". Since "!" was passed as a separate argument, there is a space before it: Hi Sam !.',
    hint: 'Each comma in print() separates arguments and inserts one space between them. Look at where the exclamation mark is placed.',
    topics: ['print', 'exact-output', 'spacing']
  },
  {
    id: 18,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `n = 10
n -= 4
n *= 2
print(n)`,
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '16' },
      { id: 'C', text: '8' },
      { id: 'D', text: '28' },
    ],
    correctAnswer: 'A',
    explanation: 'Start with 10 → subtract 4 gives 6 → multiply 6 by 2 gives 12.',
    hint: 'Track n line by line: first subtract 4, then multiply the result by 2.',
    traceSteps: [
      { step: 'n = 10', state: 'n = 10' },
      { step: 'n -= 4', state: 'n = 6' },
      { step: 'n *= 2', state: 'n = 12' },
      { step: 'print(n)', state: 'prints 12' },
    ],
    topics: ['assignment-operators', 'tracing']
  },
  {
    id: 19,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `print(17 % 5)`,
    options: [
      { id: 'A', text: '3.4' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '12' },
    ],
    correctAnswer: 'B',
    explanation: '% gives the remainder after division: 17 divided by 5 is 3 with a remainder of 2 (17 = 5 × 3 + 2).',
    hint: '% is the remainder operator, not division or percentage. 5 goes into 17 three times; what is left over?',
    topics: ['operators', 'remainder']
  },
  {
    id: 20,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `z = 2
z **= 3
print(z)`,
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '8' },
      { id: 'C', text: '9' },
      { id: 'D', text: '5' },
    ],
    correctAnswer: 'B',
    explanation: 'z **= 3 means z = 2 ** 3 (2 raised to the 3rd power, or 2 × 2 × 2), which is 8.',
    hint: '**= means raise to the power of. What is 2 raised to the power of 3?',
    traceSteps: [
      { step: 'z = 2', state: 'z = 2' },
      { step: 'z **= 3', state: 'z = 2 ** 3 = 8' },
      { step: 'print(z)', state: 'prints 8' },
    ],
    topics: ['operators', 'power']
  },
  {
    id: 21,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `x = 12
x /= 3
print(x)`,
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '4.0' },
      { id: 'C', text: '9' },
      { id: 'D', text: '36' },
    ],
    correctAnswer: 'B',
    explanation: 'The regular division operator / always returns a floating-point number in Python 3, so 12 / 3 produces 4.0.',
    hint: 'Remember that single slash / division in Python 3 always results in a float with a decimal point.',
    topics: ['operators', 'division', 'floats']
  },
  {
    id: 22,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `print(-3 >= -3)`,
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' },
      { id: 'C', text: '-3' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'A',
    explanation: 'Both sides equal -3. The operator >= means "greater than or equal to". Because -3 equals -3, the condition is True.',
    hint: '>= includes "or equal to". Is -3 equal to -3?',
    topics: ['operators', 'comparisons', 'negative-numbers']
  },
  {
    id: 23,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `print((4 < 2) or (5 != 1))`,
    options: [
      { id: 'A', text: 'False' },
      { id: 'B', text: 'True' },
      { id: 'C', text: '4 5' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'B',
    explanation: '4 < 2 is False, but 5 != 1 is True. With "or", only one side needs to be True for the whole statement to be True.',
    hint: 'Evaluate each side: is 4 < 2? Is 5 != 1? What does "or" require?',
    topics: ['operators', 'logic']
  },
  {
    id: 24,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    inputContext: 'The user enters 5',
    prompt: 'What is printed if the user enters 5?',
    codeSnippet: `n = input("Number: ")
print(n + "2")`,
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '52' },
      { id: 'C', text: '5 2' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'B',
    explanation: 'input() returns a string ("5"). The + operator between two strings joins (concatenates) them: "5" + "2" results in "52".',
    hint: 'input() produces text, not an integer. What does + do when joining two pieces of text?',
    topics: ['input', 'strings', 'concatenation']
  },
  {
    id: 25,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    inputContext: 'The user enters 5',
    prompt: 'What is printed if the user enters 5?',
    codeSnippet: `n = int(input("Number: "))
print(n + 2)`,
    options: [
      { id: 'A', text: '52' },
      { id: 'B', text: '7' },
      { id: 'C', text: '5 2' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'B',
    explanation: 'int(input(...)) converts the user\'s entered text "5" into integer 5. Then 5 + 2 performs mathematical addition, resulting in 7.',
    hint: 'Notice int() around input(). This turns the user input into a number before adding 2.',
    topics: ['input', 'int-conversion', 'arithmetic']
  },
  {
    id: 26,
    level: 2,
    levelTitle: 'Level 2 — Regular exam practice',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `print("sun", "moon", sep="/")`,
    options: [
      { id: 'A', text: 'sun moon' },
      { id: 'B', text: 'sun/moon' },
      { id: 'C', text: 'sun / moon' },
      { id: 'D', text: 'sunmoon' },
    ],
    correctAnswer: 'B',
    explanation: 'The sep="/" parameter replaces the default space separator with "/". There are no extra spaces inside the strings.',
    hint: 'sep specifies what appears between the items instead of the default space.',
    topics: ['print', 'sep', 'formatting']
  },

  // ==========================================
  // LEVEL 3: PREDICTED HARDER QUESTIONS (Q27 - Q38)
  // ==========================================
  {
    id: 27,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `x = 2
y = x + 5
x = y * 2
y = x - 3
print(x, y)`,
    options: [
      { id: 'A', text: '14 11' },
      { id: 'B', text: '7 11' },
      { id: 'C', text: '14 4' },
      { id: 'D', text: '7 14' },
    ],
    correctAnswer: 'A',
    explanation: 'Line 1: x = 2. Line 2: y = 2 + 5 = 7. Line 3: x = 7 * 2 = 14. Line 4: y = 14 - 3 = 11. Finally print(x, y) prints 14 11.',
    hint: 'Trace each line one at a time. When x is updated in line 3, use that new value in line 4.',
    traceSteps: [
      { step: 'x = 2', state: 'x = 2, y is unset' },
      { step: 'y = x + 5', state: 'x = 2, y = 7' },
      { step: 'x = y * 2', state: 'x = 14, y = 7' },
      { step: 'y = x - 3', state: 'x = 14, y = 11' },
      { step: 'print(x, y)', state: 'prints 14 11' },
    ],
    topics: ['tracing', 'variables', 'multi-step']
  },
  {
    id: 28,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `a = 5
b = 5
a = a + 1
print(a == b)`,
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' },
      { id: 'C', text: '6' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'B',
    explanation: 'a becomes 5 + 1 = 6, while b remains 5. The comparison 6 == 5 evaluates to False.',
    hint: 'What is a after adding 1? What is b? Does == check equality?',
    traceSteps: [
      { step: 'a = 5, b = 5', state: 'a = 5, b = 5' },
      { step: 'a = a + 1', state: 'a = 6, b = 5' },
      { step: 'print(a == b)', state: '6 == 5 is False' },
    ],
    topics: ['variables', 'comparisons']
  },
  {
    id: 29,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `x = 8
y = 3
print((x > 5) and (y >= 3))`,
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' },
      { id: 'C', text: '8' },
      { id: 'D', text: '3' },
    ],
    correctAnswer: 'A',
    explanation: '8 > 5 is True, and 3 >= 3 is True. Since both sides are True, True and True evaluates to True.',
    hint: 'Test both conditions: 8 > 5 is True; 3 >= 3 is True (since >= includes equality). and requires both to be True.',
    topics: ['operators', 'comparisons', 'logic']
  },
  {
    id: 30,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `print(not (6 != 6))`,
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' },
      { id: 'C', text: '6' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'A',
    explanation: '6 != 6 asks "is 6 not equal to 6?", which is False. not False flips False to True.',
    hint: 'First work out what is inside the parentheses: (6 != 6). Then flip that boolean using not.',
    topics: ['operators', 'logic', 'not']
  },
  {
    id: 31,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `a = -2
b = -10
print((a < b) or (a > 0))`,
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' },
      { id: 'C', text: '-2' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'B',
    explanation: '-2 < -10 is False (on a number line, -2 is greater than -10 because it is closer to zero). -2 > 0 is also False. False or False is False.',
    hint: 'Be careful with negative numbers: -2 is actually greater than -10. Is -2 greater than 0?',
    topics: ['negative-numbers', 'comparisons', 'logic']
  },
  {
    id: 32,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'exact-output',
    prompt: 'Write the exact output, including whether it is on one or two lines.',
    codeSnippet: `print("Good", end="-")
print("Luck")`,
    correctAnswer: 'Good-Luck',
    acceptableOutputs: ['Good-Luck', 'Good-Luck\n'],
    explanation: 'Exact output: Good-Luck on one line. The first print ends with "-" instead of a line break; the second prints "Luck" immediately afterward.',
    hint: 'Notice end="-" in the first print. This replaces the usual line break with a hyphen, keeping the next print on the same line.',
    topics: ['print', 'end', 'exact-output']
  },
  {
    id: 33,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'exact-output',
    prompt: 'Write the exact output.',
    codeSnippet: `print("A", "B", sep="*", end="!")
print("C", "D", sep="-")`,
    correctAnswer: 'A*B!C-D',
    acceptableOutputs: ['A*B!C-D', 'A*B!C-D\n'],
    explanation: 'Exact output: A*B!C-D on one line. First sep="*" inserts * between A and B, and end="!" finishes with ! (no newline). The second print uses sep="-" between C and D.',
    hint: 'Track both prints: first print places * between A and B, ends with ! without a newline. Second print places - between C and D.',
    topics: ['print', 'sep', 'end', 'exact-output']
  },
  {
    id: 34,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `print(2 + 3 * 4)`,
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '14' },
      { id: 'C', text: '24' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'B',
    explanation: 'Order of operations (BODMAS/PEMDAS): multiplication happens before addition. 3 * 4 = 12, then 2 + 12 = 14.',
    hint: 'Multiplication (*) takes priority over addition (+). Calculate 3 * 4 first.',
    topics: ['operators', 'order-of-operations']
  },
  {
    id: 35,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `n = 4
n += 3
n %= 5
print(n)`,
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '2' },
      { id: 'C', text: '1' },
      { id: 'D', text: '5' },
    ],
    correctAnswer: 'B',
    explanation: 'n = 4 → n += 3 makes n = 7 → n %= 5 calculates the remainder of 7 divided by 5, which is 2.',
    hint: 'n starts at 4, increases by 3 to 7. What is 7 % 5 (the remainder when 7 is divided by 5)?',
    traceSteps: [
      { step: 'n = 4', state: 'n = 4' },
      { step: 'n += 3', state: 'n = 7' },
      { step: 'n %= 5', state: 'n = 7 % 5 = 2' },
      { step: 'print(n)', state: 'prints 2' },
    ],
    topics: ['assignment-operators', 'remainder', 'tracing']
  },
  {
    id: 36,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    inputContext: 'Two numbers entered: first 8, then 4',
    prompt: 'Two numbers are entered: first 8, then 4. What is printed?',
    codeSnippet: `A = int(input("A? "))
B = int(input("B? "))
print(A + B, A > B)`,
    options: [
      { id: 'A', text: '84 True' },
      { id: 'B', text: '12 True' },
      { id: 'C', text: '12 False' },
      { id: 'D', text: '84 False' },
    ],
    correctAnswer: 'B',
    explanation: 'Integers 8 and 4 are converted via int(). A + B is 8 + 4 = 12. A > B is 8 > 4, which is True. print() separates them with a space: 12 True.',
    hint: 'Since both inputs are wrapped in int(), A + B adds integers (8 + 4 = 12), and A > B evaluates whether 8 is greater than 4.',
    topics: ['input', 'int-conversion', 'comparisons', 'print']
  },
  {
    id: 37,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    prompt: 'What happens?',
    codeSnippet: `value = 9
Value = 2
print(value - Value)`,
    options: [
      { id: 'A', text: 'Prints 7' },
      { id: 'B', text: 'Prints 0' },
      { id: 'C', text: 'Prints 9' },
      { id: 'D', text: 'Raises an error' },
    ],
    correctAnswer: 'A',
    explanation: 'Python is case-sensitive, so value (lowercase) is 9 and Value (uppercase) is 2. Both variables exist! 9 - 2 = 7.',
    hint: 'Look closely: value and Value are two separate variables because Python is case-sensitive. Both have been defined.',
    topics: ['variables', 'case-sensitivity', 'subtraction']
  },
  {
    id: 38,
    level: 3,
    levelTitle: 'Level 3 — Predicted harder questions',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `x = "Hello"
x = 10
x = x + 5
print(x)`,
    options: [
      { id: 'A', text: 'Hello15' },
      { id: 'B', text: '10' },
      { id: 'C', text: '15' },
      { id: 'D', text: 'Error' },
    ],
    correctAnswer: 'C',
    explanation: 'In Python, variables can change types. The string "Hello" is replaced by integer 10. Then 10 + 5 = 15.',
    hint: 'The string "Hello" is overwritten by 10. Can an integer be added to another integer?',
    traceSteps: [
      { step: 'x = "Hello"', state: 'x is string "Hello"' },
      { step: 'x = 10', state: 'x is overwritten with int 10' },
      { step: 'x = x + 5', state: 'x = 10 + 5 = 15' },
      { step: 'print(x)', state: 'prints 15' },
    ],
    topics: ['variables', 'dynamic-types', 'reassignment']
  },

  // ==========================================
  // LEVEL 4: SURPRISE / REPAIR / WRITING (Q39 - Q48)
  // ==========================================
  {
    id: 39,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'code-repair',
    prompt: 'Find the mistake, then rewrite the incorrect line so the program prints 20.',
    codeSnippet: `Total = 20
print(total)`,
    starterCode: 'print(total)',
    modelSolution: 'print(Total)',
    correctAnswer: 'print(Total)',
    explanation: 'Corrected line: print(Total). The program defines uppercase Total and must use the exact same capitalization to retrieve it.',
    hint: 'Notice the uppercase T in Total = 20, but lowercase t in print(total).',
    topics: ['debugging', 'case-sensitivity']
  },
  {
    id: 40,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'code-repair',
    prompt: 'Fix the line below so it prints the word Welcome (not a variable).',
    codeSnippet: `print(Welcome)`,
    starterCode: 'print(Welcome)',
    modelSolution: 'print("Welcome")',
    correctAnswer: 'print("Welcome")',
    explanation: 'Corrected line: print("Welcome"). The quotes make Welcome literal text rather than an undefined variable name.',
    hint: 'To print the literal word Welcome instead of looking up a variable, what must enclose the word?',
    topics: ['debugging', 'strings', 'quotes']
  },
  {
    id: 41,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'code-repair',
    inputContext: 'The user types 9',
    prompt: 'A student wrote the following program. The user types 9. Why doesn\'t it calculate 10? Write the corrected first line.',
    codeSnippet: `number = input("Number: ")
print(number + 1)`,
    starterCode: 'number = input("Number: ")',
    modelSolution: 'number = int(input("Number: "))',
    correctAnswer: 'number = int(input("Number: "))',
    explanation: 'input() returns text (string); attempting to add an integer to text causes a TypeError. Correct the first line to: number = int(input("Number: ")).',
    hint: 'input() returns a string ("9"). Python cannot add a string and integer with +. How do you convert the input to a whole number?',
    topics: ['debugging', 'input', 'int-conversion']
  },
  {
    id: 42,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'single-choice',
    prompt: 'What is printed?',
    codeSnippet: `A = 3
B = 4
A = B
B = A + 2
print(A, B)`,
    options: [
      { id: 'A', text: '3 6' },
      { id: 'B', text: '4 5' },
      { id: 'C', text: '4 6' },
      { id: 'D', text: '6 6' },
    ],
    correctAnswer: 'C',
    explanation: 'Initially A = 3, B = 4. Then A = B sets A to 4. Next B = A + 2 uses the new value of A (4) + 2 = 6. Output is 4 6.',
    hint: 'Step by step: A starts as 3 and B as 4. In line 3, A becomes 4. In line 4, what is A + 2?',
    traceSteps: [
      { step: 'A = 3, B = 4', state: 'A = 3, B = 4' },
      { step: 'A = B', state: 'A = 4, B = 4' },
      { step: 'B = A + 2', state: 'A = 4, B = 4 + 2 = 6' },
      { step: 'print(A, B)', state: 'prints 4 6' },
    ],
    topics: ['variables', 'assignment', 'tracing']
  },
  {
    id: 43,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'code-writing',
    prompt: 'Complete the two missing instructions. Ask the user for two whole numbers, store them as first and second, and print their product.',
    codeSnippet: `first = ______________________________
second = _____________________________
print(first * second)`,
    starterCode: `first = int(input("First number: "))
second = int(input("Second number: "))
print(first * second)`,
    modelSolution: `first = int(input("First number: "))
second = int(input("Second number: "))
print(first * second)`,
    correctAnswer: 'first = int(input(...)) and second = int(input(...))',
    explanation: 'The int() function is required when entered values will be multiplied as whole numbers: first = int(input("...")) and second = int(input("...")). Prompt wording can vary.',
    hint: 'Both lines need int(input("...")) to read text from the user and convert it into an integer for multiplication.',
    topics: ['code-writing', 'input', 'int-conversion']
  },
  {
    id: 44,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'code-writing',
    prompt: 'Write two print() statements that display cat-dog!END on ONE line. The first statement must print cat and dog as separate items using sep and end. The second prints END.',
    starterCode: `print("cat", "dog", sep="-", end="!")
print("END")`,
    modelSolution: `print("cat", "dog", sep="-", end="!")
print("END")`,
    correctAnswer: 'print("cat", "dog", sep="-", end="!")\\nprint("END")',
    explanation: 'Exact output: cat-dog!END on one line. sep="-" replaces the space between "cat" and "dog"; end="!" prevents moving to a new line.',
    hint: 'Use sep="-" to separate "cat" and "dog", and end="!" to attach the exclamation mark and prevent a newline.',
    topics: ['code-writing', 'print', 'sep', 'end']
  },
  {
    id: 45,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'code-writing',
    inputContext: 'User enters 10, 30, and 5 in that order',
    prompt: 'Write a simple acceleration calculator. The formula is: acceleration = (final velocity - initial velocity) / time. Assume the user enters 10, 30, and 5 in that order. Write a program using three inputs converted with int(), then calculate and print the acceleration.',
    starterCode: `initial = int(input("Initial velocity: "))
final = int(input("Final velocity: "))
time = int(input("Time: "))
acceleration = (final - initial) / time
print(acceleration)`,
    modelSolution: `initial = int(input("Initial velocity: "))
final = int(input("Final velocity: "))
time = int(input("Time: "))
acceleration = (final - initial) / time
print(acceleration)`,
    correctAnswer: 'initial = int(input(...))\\nfinal = int(input(...))\\ntime = int(input(...))\\nacceleration = (final - initial) / time\\nprint(acceleration)',
    explanation: 'For user entries 10, 30, and 5, the output is 4.0 because (30 - 10) / 5 = 4.0 in Python 3. Division with / produces a float.',
    hint: 'Ask for three inputs using int(input(...)), apply brackets around (final - initial) before dividing by time, then print the result.',
    topics: ['code-writing', 'input', 'formulas', 'arithmetic']
  },
  {
    id: 46,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'multiple-choice',
    selectCount: 2,
    prompt: 'Select TWO answers. Which comparisons are True?',
    options: [
      { id: 'A', text: '-4 > -2' },
      { id: 'B', text: '0 <= 0' },
      { id: 'C', text: '-1 >= 3' },
      { id: 'D', text: '-2 > -10' },
      { id: 'E', text: '7 != 7' },
    ],
    correctAnswer: ['B', 'D'],
    explanation: '0 <= 0 is True (equality counts in <=), and -2 > -10 is True (closer to zero is larger). -4 > -2 is False; -1 >= 3 is False; 7 != 7 is False.',
    hint: 'Remember: <= includes equality, and on the negative number line, numbers closer to zero are greater (e.g. -2 is greater than -10).',
    topics: ['negative-numbers', 'comparisons']
  },
  {
    id: 47,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'single-choice',
    prompt: 'Stretch: What happens in Python 3?',
    codeSnippet: `n = int("nine")
print(n)`,
    options: [
      { id: 'A', text: 'Prints 9' },
      { id: 'B', text: 'Prints nine' },
      { id: 'C', text: 'Raises an error because "nine" is not an integer string' },
      { id: 'D', text: 'Prints 0' },
    ],
    correctAnswer: 'C',
    explanation: 'int() cannot convert English words like "nine" into an integer; it only converts numeric strings like "9". This causes a ValueError.',
    hint: 'Does Python understand English words when converting to int(), or does it only convert strings made of digits like "9"?',
    topics: ['errors', 'int-conversion']
  },
  {
    id: 48,
    level: 4,
    levelTitle: 'Level 4 — Surprise / repair / writing challenges',
    type: 'single-choice',
    prompt: 'What is the exact output? Be careful about spaces.',
    codeSnippet: `print("Score:", 8, "points")`,
    options: [
      { id: 'A', text: 'Score:8points' },
      { id: 'B', text: 'Score: 8 points' },
      { id: 'C', text: 'Score:8 points' },
      { id: 'D', text: 'Score : 8 points' },
    ],
    correctAnswer: 'B',
    explanation: 'The three print arguments are "Score:", 8, and "points". Commas place one space between each argument. Because there is no space inside "Score:" before the colon, the result is Score: 8 points.',
    hint: 'There are three separate items separated by commas. Each comma automatically inserts a single space.',
    topics: ['print', 'exact-output', 'spacing']
  }
]

export const CHAPTER3_QUESTIONS: Question[] = RAW_CHAPTER3_QUESTIONS.map((q) => ({
  ...q,
  chapterId: 'ch3' as const,
  questionNumber: q.id
}))

export { CHAPTER1_QUESTIONS }

export const QUESTIONS: Question[] = [...CHAPTER3_QUESTIONS, ...CHAPTER1_QUESTIONS]

