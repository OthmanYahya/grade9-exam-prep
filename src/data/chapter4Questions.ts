import { Question } from '../types'

export const CHAPTER4_QUESTIONS: Question[] = [
  // ==========================================
  // SECTION A: CONDITIONAL STATEMENTS & SYNTAX (Q1 - Q5)
  // ==========================================
  {
    id: 201,
    chapterId: 'ch4',
    questionNumber: 1,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'multiple-choice',
    selectCount: 3,
    sectionId: '4.1',
    prompt: 'Which THREE of the following are the conditional statement structures taught in Chapter 4? (Select three)',
    options: [
      { id: 'A', text: 'if-else' },
      { id: 'B', text: 'elseif' },
      { id: 'C', text: 'if' },
      { id: 'D', text: 'for' },
      { id: 'E', text: 'if-elif-else' }
    ],
    correctAnswer: ['A', 'C', 'E'],
    hint: 'Think of the one-path, two-path, and multiple-path decision structures.',
    explanation: 'if, if-else, and if-elif-else are the three structures explicitly taught in Chapter 4. elseif is not a Python keyword, and for is a loop structure.',
    topics: ['structures', 'definitions']
  },
  {
    id: 202,
    chapterId: 'ch4',
    questionNumber: 2,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.1',
    prompt: 'Why do programmers use conditional statements?',
    options: [
      { id: 'A', text: 'To make a program choose instructions based on conditions' },
      { id: 'B', text: 'To make all statements run at the same time' },
      { id: 'C', text: 'To repeat a set of instructions forever' },
      { id: 'D', text: 'To convert every variable to text' },
      { id: 'E', text: 'To display a message without using print()' }
    ],
    correctAnswer: 'A',
    hint: 'Imagine a game displaying "Game Over" only when a condition is met.',
    explanation: 'Conditional statements control which path the program follows depending on whether conditions are true or false. Loops handle repetition, and print() handles output.',
    topics: ['definitions', 'control-flow']
  },
  {
    id: 203,
    chapterId: 'ch4',
    questionNumber: 3,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.1',
    prompt: 'Which line correctly starts an if statement that checks whether age is at least 18?',
    options: [
      { id: 'A', text: 'if age >= 18' },
      { id: 'B', text: 'if age >= 18:' },
      { id: 'C', text: 'if age = 18:' },
      { id: 'D', text: 'if: age >= 18' },
      { id: 'E', text: 'if (age >= 18) then:' }
    ],
    correctAnswer: 'B',
    hint: 'Look for the correct comparison operator and the punctuation at the end.',
    explanation: 'if age >= 18: uses the comparison >= and ends the header with a colon (:). = is assignment; then is not Python syntax.',
    topics: ['syntax', 'if-header']
  },
  {
    id: 204,
    chapterId: 'ch4',
    questionNumber: 4,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.1',
    prompt: 'Which expression checks whether score is exactly 100?',
    options: [
      { id: 'A', text: 'score = 100' },
      { id: 'B', text: 'print(score)' },
      { id: 'C', text: 'score == 100' },
      { id: 'D', text: 'score + 100' },
      { id: 'E', text: 'input("Score: ")' }
    ],
    correctAnswer: 'C',
    hint: 'To ask whether two values are equal, use a comparison rather than an assignment.',
    explanation: 'score == 100 produces True if the values are equal and False otherwise. = assigns a value rather than checking equality.',
    topics: ['operators', 'comparison']
  },
  {
    id: 205,
    chapterId: 'ch4',
    questionNumber: 5,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.1',
    prompt: 'Which statement about elif and else is correct?',
    options: [
      { id: 'A', text: 'else always needs a condition' },
      { id: 'B', text: 'elif means "else if" and adds another test' },
      { id: 'C', text: 'elif starts a loop' },
      { id: 'D', text: 'else is another spelling of if' },
      { id: 'E', text: 'Every if must have an elif' }
    ],
    correctAnswer: 'B',
    hint: 'Think of a program choosing among three or more possibilities.',
    explanation: 'elif means "else if" and introduces another condition in the chain. else has no condition and serves as the default fallback.',
    topics: ['elif', 'else', 'definitions']
  },

  // ==========================================
  // SECTION B: THE IF STATEMENT (Q6 - Q18)
  // ==========================================
  {
    id: 206,
    chapterId: 'ch4',
    questionNumber: 6,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'What tells Python that two instructions belong to the same if block?',
    options: [
      { id: 'A', text: 'Placing both lines between brackets []' },
      { id: 'B', text: 'Giving the lines the same proper indentation' },
      { id: 'C', text: 'Putting a plus sign before each line' },
      { id: 'D', text: 'Putting quotation marks around the lines' },
      { id: 'E', text: 'Ending each line with a semicolon' }
    ],
    correctAnswer: 'B',
    hint: 'Notice the spaces before print() in the presentation examples.',
    explanation: 'Python uses consistent indentation (typically 4 spaces) to define blocks of code (suites). It does not use brackets or keywords like begin/end.',
    topics: ['indentation', 'blocks']
  },
  {
    id: 207,
    chapterId: 'ch4',
    questionNumber: 7,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'What is printed by this program?',
    codeSnippet: `if 3 > 7:
    print("Inside")
print("Finish")`,
    options: [
      { id: 'A', text: 'Start only' },
      { id: 'B', text: 'Inside only' },
      { id: 'C', text: 'Finish only' },
      { id: 'D', text: 'Inside followed by Finish' },
      { id: 'E', text: 'Nothing' }
    ],
    correctAnswer: 'C',
    hint: 'Check 3 > 7, then look for the print() that is not indented.',
    explanation: '3 > 7 is False, so the indented print("Inside") is skipped. print("Finish") is unindented and runs regardless of the condition.',
    topics: ['tracing', 'if-block', 'indentation']
  },
  {
    id: 208,
    chapterId: 'ch4',
    questionNumber: 8,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'How many print() statements execute?',
    codeSnippet: `if 4 < 9:
    print("A")
    print("B")
    print("C")
print("End")`,
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' },
      { id: 'E', text: '0' }
    ],
    correctAnswer: 'D',
    hint: 'The condition is true; count the statements inside and after the block.',
    explanation: '4 < 9 is True. All three indented prints ("A", "B", "C") execute, followed by the unindented print("End"). Total = 4 executed prints.',
    topics: ['counting', 'print', 'tracing']
  },
  {
    id: 209,
    chapterId: 'ch4',
    questionNumber: 9,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'How many print() statements execute?',
    codeSnippet: `if 8 < 2:
    print("One")
    print("Two")
    print("Three")`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' },
      { id: 'E', text: '4' }
    ],
    correctAnswer: 'A',
    hint: 'Every print() has the same indentation. What happens when 8 < 2 is false?',
    explanation: '8 < 2 is False. Because all three prints are indented inside the if block, all three are skipped. Exactly 0 print statements execute.',
    topics: ['counting', 'tracing', 'if-block']
  },
  {
    id: 210,
    chapterId: 'ch4',
    questionNumber: 10,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'What value does the program print?',
    codeSnippet: `x = 18
if x < 20:
    x = 9
print(x)`,
    options: [
      { id: 'A', text: '18' },
      { id: 'B', text: '25' },
      { id: 'C', text: '9' },
      { id: 'D', text: 'True' },
      { id: 'E', text: 'An error' }
    ],
    correctAnswer: 'C',
    hint: 'The condition is checked using the original x, but the final print uses its latest value.',
    explanation: '18 < 20 is True, so x = 9 executes and updates x. print(x) prints the latest value: 9.',
    topics: ['reassignment', 'tracing']
  },
  {
    id: 211,
    chapterId: 'ch4',
    questionNumber: 11,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'What is the complete output?',
    codeSnippet: `n = 12
if n > 0:
    print("Positive")
if n == 0:
    print("Zero")
if n > 10:
    print("Over 10")`,
    options: [
      { id: 'A', text: 'Positive only' },
      { id: 'B', text: 'Over 10 only' },
      { id: 'C', text: 'Positive then Over 10' },
      { id: 'D', text: 'Zero then Over 10' },
      { id: 'E', text: 'Nothing' }
    ],
    correctAnswer: 'C',
    hint: 'There are three separate if statements, not a connected if-elif-else chain.',
    explanation: 'These are separate independent if statements. 12 > 0 is True ("Positive" prints). 12 == 0 is False. 12 > 10 is True ("Over 10" prints). Both lines print in order.',
    topics: ['independent-ifs', 'tracing']
  },
  {
    id: 212,
    chapterId: 'ch4',
    questionNumber: 12,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'multiple-choice',
    selectCount: 2,
    sectionId: '4.2',
    prompt: 'For which TWO values of x does the code print "Divisible"? (Select two)',
    codeSnippet: `x = ...
if x % 3 == 0:
    print("Divisible")`,
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '18' },
      { id: 'C', text: '23' },
      { id: 'D', text: '30' },
      { id: 'E', text: '41' }
    ],
    correctAnswer: ['B', 'D'],
    hint: '% finds the remainder. A remainder of zero means no remainder after division by 3.',
    explanation: '18 % 3 is 0 (18 = 3 * 6) and 30 % 3 is 0 (30 = 3 * 10). Both are divisible by 3 with no remainder.',
    topics: ['modulus', 'divisibility']
  },
  {
    id: 213,
    chapterId: 'ch4',
    questionNumber: 13,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'multiple-choice',
    selectCount: 2,
    sectionId: '4.2',
    prompt: 'For which TWO values of x does the condition become true? (Select two)',
    codeSnippet: `x = ...
if x * 2 > 20:
    print("Matched")`,
    options: [
      { id: 'A', text: '9' },
      { id: 'B', text: '10' },
      { id: 'C', text: '11' },
      { id: 'D', text: '7' },
      { id: 'E', text: '13' }
    ],
    correctAnswer: ['C', 'E'],
    hint: 'The condition means x * 2 must be strictly greater than 20, not equal to 20.',
    explanation: 'For x = 11, 11 * 2 = 22 > 20 (True). For x = 13, 13 * 2 = 26 > 20 (True). Note that for x = 10, 10 * 2 = 20, which is NOT strictly > 20.',
    topics: ['arithmetic-in-condition', 'boundaries']
  },
  {
    id: 214,
    chapterId: 'ch4',
    questionNumber: 14,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'multiple-choice',
    selectCount: 2,
    sectionId: '4.2',
    prompt: 'y is fixed at 8. For which TWO values of x is the test true? (Select two)',
    codeSnippet: `x = ...
y = 8
if x / y > 5:
    print("Matched")`,
    options: [
      { id: 'A', text: '39' },
      { id: 'B', text: '40' },
      { id: 'C', text: '41' },
      { id: 'D', text: '64' },
      { id: 'E', text: '24' }
    ],
    correctAnswer: ['C', 'D'],
    hint: 'The test is x / 8 > 5. Multiply both sides by 8 to find the threshold (x > 40).',
    explanation: 'x / 8 > 5 means x must be strictly greater than 40. 41 and 64 are both > 40. 40 / 8 is exactly 5.0, which is not > 5.',
    topics: ['division', 'algebra-in-conditions']
  },
  {
    id: 215,
    chapterId: 'ch4',
    questionNumber: 15,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'What happens when n = 10?',
    codeSnippet: `n = 10
if n >= 1 and n <= 10:
    print("Inside")`,
    options: [
      { id: 'A', text: 'Only Outside is printed' },
      { id: 'B', text: 'Only Inside is printed' },
      { id: 'C', text: 'Both lines are printed' },
      { id: 'D', text: 'An error occurs' },
      { id: 'E', text: 'Nothing is printed' }
    ],
    correctAnswer: 'B',
    hint: 'Check each part of n >= 1 and n <= 10 separately; remember <= includes equality.',
    explanation: 'At n = 10: 10 >= 1 is True and 10 <= 10 is True. True and True is True, so "Inside" prints.',
    topics: ['logical-and', 'inclusive-range']
  },
  {
    id: 216,
    chapterId: 'ch4',
    questionNumber: 16,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'What is the output?',
    codeSnippet: `n = 12
if n < 0 or n > 10:
    print("Special")`,
    options: [
      { id: 'A', text: 'Special' },
      { id: 'B', text: 'Not special' },
      { id: 'C', text: 'Both messages' },
      { id: 'D', text: 'An error' },
      { id: 'E', text: 'Nothing' }
    ],
    correctAnswer: 'A',
    hint: 'With or, only one of the two conditions needs to be true.',
    explanation: 'For n = 12: 12 < 0 is False, but 12 > 10 is True. False or True evaluates to True, so "Special" is printed.',
    topics: ['logical-or']
  },
  {
    id: 217,
    chapterId: 'ch4',
    questionNumber: 17,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'What is the output?',
    codeSnippet: `x = 5
y = 0
if x == 5:
    y *= x
    print(y)`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '5' },
      { id: 'C', text: '10' },
      { id: 'D', text: '25' },
      { id: 'E', text: 'Error' }
    ],
    correctAnswer: 'A',
    hint: 'y *= x means y = y * x. Find the current value of y before multiplying.',
    explanation: 'x == 5 is True. y starts at 0, so y *= x performs 0 * 5 = 0. print(y) outputs 0.',
    topics: ['compound-assignment', 'tracing']
  },
  {
    id: 218,
    chapterId: 'ch4',
    questionNumber: 18,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.2',
    prompt: 'What is the output?',
    codeSnippet: `x = 6
y = 1
if x == 6:
    y **= x
    print(y)`,
    options: [
      { id: 'A', text: '8' },
      { id: 'B', text: '1' },
      { id: 'C', text: '0' },
      { id: 'D', text: '64' },
      { id: 'E', text: 'Error' }
    ],
    correctAnswer: 'B',
    hint: 'y **= x means y = y ** x. What is 1 raised to any nonnegative integer power?',
    explanation: 'x == 6 is True. y **= x performs 1 ** 6. 1 raised to any power is 1. Output is 1.',
    topics: ['exponentiation', 'tracing']
  },

  // ==========================================
  // SECTION C: THE IF-ELSE STATEMENT (Q19 - Q28)
  // ==========================================
  {
    id: 219,
    chapterId: 'ch4',
    questionNumber: 19,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.3',
    prompt: 'What is the main advantage of if-else over a simple if?',
    options: [
      { id: 'A', text: 'It creates an endless loop' },
      { id: 'B', text: 'It can choose one of two alternative code blocks' },
      { id: 'C', text: 'It makes all conditions true' },
      { id: 'D', text: 'It removes the need for indentation' },
      { id: 'E', text: 'It changes every input to an integer' }
    ],
    correctAnswer: 'B',
    hint: 'Ask what happens when the condition is false.',
    explanation: 'if-else allows selecting between two mutually exclusive paths: one executes if the condition is True, and the other executes if False.',
    topics: ['if-else', 'definitions']
  },
  {
    id: 220,
    chapterId: 'ch4',
    questionNumber: 20,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.3',
    prompt: 'Which line is the correct way to begin the alternative branch after an if block?',
    options: [
      { id: 'A', text: 'else' },
      { id: 'B', text: 'else (condition):' },
      { id: 'C', text: 'else:' },
      { id: 'D', text: 'else if:' },
      { id: 'E', text: 'else then:' }
    ],
    correctAnswer: 'C',
    hint: 'The alternative branch needs a colon but no new condition.',
    explanation: 'The else branch requires the keyword else followed immediately by a colon (else:). It takes no condition.',
    topics: ['syntax', 'else']
  },
  {
    id: 221,
    chapterId: 'ch4',
    questionNumber: 21,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.3',
    prompt: 'What is printed when grade is 65?',
    codeSnippet: `grade = 65
if grade >= 65:
    print("Pass")
else:
    print("Fail")`,
    options: [
      { id: 'A', text: 'Fail' },
      { id: 'B', text: 'Pass' },
      { id: 'C', text: 'Pass then Fail' },
      { id: 'D', text: 'Nothing' },
      { id: 'E', text: 'Error' }
    ],
    correctAnswer: 'B',
    hint: '>= includes the exact boundary value.',
    explanation: '65 >= 65 is True, so the if block executes and prints "Pass". The else block is skipped.',
    topics: ['boundaries', 'if-else']
  },
  {
    id: 222,
    chapterId: 'ch4',
    questionNumber: 22,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.3',
    prompt: 'What number is printed?',
    codeSnippet: `value = 46
if value < 50:
    value = 50 - value
else:
    value = 50 + value
print(value)`,
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '46' },
      { id: 'C', text: '96' },
      { id: 'D', text: '50' },
      { id: 'E', text: '-4' }
    ],
    correctAnswer: 'A',
    hint: 'Since 46 is smaller than 50, use the subtraction branch.',
    explanation: '46 < 50 is True, so value = 50 - 46 = 4 executes. The else branch is skipped. Output is 4.',
    topics: ['tracing', 'arithmetic-in-branch']
  },
  {
    id: 223,
    chapterId: 'ch4',
    questionNumber: 23,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.3',
    prompt: 'What number is printed when value starts as exactly 50?',
    codeSnippet: `value = 50
if value < 50:
    value = 50 - value
else:
    value = 50 + value
print(value)`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '50' },
      { id: 'C', text: '100' },
      { id: 'D', text: '-50' },
      { id: 'E', text: 'Nothing' }
    ],
    correctAnswer: 'C',
    hint: 'value < 50 excludes exactly 50. Follow the branch that actually runs.',
    explanation: '50 < 50 is False. Therefore the else branch executes: value = 50 + 50 = 100. Output is 100.',
    topics: ['boundaries', 'strict-inequality']
  },
  {
    id: 224,
    chapterId: 'ch4',
    questionNumber: 24,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.3',
    prompt: 'What message is printed for the number 75?',
    codeSnippet: `number = 75
if number % 10 == 0:
    print("Divisible by 10")
else:
    print("Not divisible by 10")`,
    options: [
      { id: 'A', text: 'Divisible by 10' },
      { id: 'B', text: 'Not divisible by 10' },
      { id: 'C', text: 'Both messages' },
      { id: 'D', text: 'Nothing' },
      { id: 'E', text: 'SyntaxError' }
    ],
    correctAnswer: 'B',
    hint: 'Check the remainder of 75 divided by 10.',
    explanation: '75 % 10 equals 5, which does not equal 0. The if condition is False, so the else block prints "Not divisible by 10".',
    topics: ['divisibility', 'modulus', 'labs']
  },
  {
    id: 225,
    chapterId: 'ch4',
    questionNumber: 25,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'multiple-choice',
    selectCount: 2,
    sectionId: '4.3',
    prompt: 'Which TWO inputs lead to the message "Divisible"? (Select two)',
    codeSnippet: `n = int(input("Enter a number: "))
if n % 10 == 0:
    print("Divisible")
else:
    print("Not divisible")`,
    options: [
      { id: 'A', text: '20' },
      { id: 'B', text: '43' },
      { id: 'C', text: '70' },
      { id: 'D', text: '51' },
      { id: 'E', text: '89' }
    ],
    correctAnswer: ['A', 'C'],
    hint: 'The units digit of a nonnegative integer divisible by 10 is zero.',
    explanation: '20 % 10 == 0 and 70 % 10 == 0. Both numbers end in 0 and divide evenly by 10.',
    topics: ['modulus', 'divisibility']
  },
  {
    id: 226,
    chapterId: 'ch4',
    questionNumber: 26,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.3',
    prompt: 'What is the complete output?',
    codeSnippet: `tickets = 0
if tickets > 0:
    print("Ready")
else:
    print("Wait")
print("Done")`,
    options: [
      { id: 'A', text: 'Ready only' },
      { id: 'B', text: 'Wait only' },
      { id: 'C', text: 'Done only' },
      { id: 'D', text: 'Wait followed by Done' },
      { id: 'E', text: 'Ready followed by Done' }
    ],
    correctAnswer: 'D',
    hint: 'First choose the true or false branch; then check the final unindented line.',
    explanation: '0 > 0 is False, so the else branch prints "Wait". Then the unindented print("Done") runs regardless. Output: Wait then Done.',
    topics: ['unindented-print', 'if-else', 'tracing']
  },
  {
    id: 227,
    chapterId: 'ch4',
    questionNumber: 27,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.3',
    prompt: 'What is the output of the program?',
    codeSnippet: `a = 8
b = 4
if a / b >= 2:
    print("High")
else:
    print("Low")`,
    options: [
      { id: 'A', text: 'High' },
      { id: 'B', text: 'Low' },
      { id: 'C', text: '2' },
      { id: 'D', text: '8' },
      { id: 'E', text: 'An error' }
    ],
    correctAnswer: 'A',
    hint: 'Compute a / b first. The condition uses >=, not >.',
    explanation: '8 / 4 produces 2.0 (float division). 2.0 >= 2 is True, so the if block prints "High".',
    topics: ['division', 'float', 'comparison']
  },
  {
    id: 228,
    chapterId: 'ch4',
    questionNumber: 28,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.3',
    prompt: 'Which line correctly replaces # MISSING LINE so the program can print "Invalid" when age is under 18?',
    codeSnippet: `age = 15
if age >= 18:
    print("Adult")
# MISSING LINE
    print("Invalid")`,
    options: [
      { id: 'A', text: 'else' },
      { id: 'B', text: 'else:' },
      { id: 'C', text: 'elif:' },
      { id: 'D', text: 'if else:' },
      { id: 'E', text: 'else age < 18:' }
    ],
    correctAnswer: 'B',
    hint: 'The second block runs when the existing if condition is false.',
    explanation: 'else: starts the fallback branch for when the if condition evaluates to False. It requires a colon and takes no condition.',
    topics: ['code-repair', 'syntax', 'else']
  },

  // ==========================================
  // SECTION D: THE IF-ELIF-ELSE CHAIN (Q29 - Q43)
  // ==========================================
  {
    id: 229,
    chapterId: 'ch4',
    questionNumber: 29,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'What is the output when x equals 10?',
    codeSnippet: `x = 10
if x > 20:
    print("A")
elif x > 10:
    print("B")
elif x > 5:
    print("C")
else:
    print("D")`,
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'B' },
      { id: 'C', text: 'C' },
      { id: 'D', text: 'D' },
      { id: 'E', text: 'No output' }
    ],
    correctAnswer: 'C',
    hint: 'Test the comparisons from top to bottom. 10 > 10 is false, while 10 > 5 is true.',
    explanation: '10 > 20 is False. 10 > 10 is False (strict inequality). 10 > 5 is True, so "C" prints and the remaining else is skipped.',
    topics: ['if-elif-else', 'boundaries', 'tracing']
  },
  {
    id: 230,
    chapterId: 'ch4',
    questionNumber: 30,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'What is the output when x equals 5?',
    codeSnippet: `x = 5
if x > 20:
    print("A")
elif x > 10:
    print("B")
elif x > 5:
    print("C")
else:
    print("D")`,
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'B' },
      { id: 'C', text: 'C' },
      { id: 'D', text: 'D' },
      { id: 'E', text: 'Error' }
    ],
    correctAnswer: 'D',
    hint: '5 > 5 is false, so follow the else if nothing earlier matches.',
    explanation: '5 > 20 is False; 5 > 10 is False; 5 > 5 is False. Since none of the conditions matched, the else block runs, printing "D".',
    topics: ['if-elif-else', 'default-branch']
  },
  {
    id: 231,
    chapterId: 'ch4',
    questionNumber: 31,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'What is the output when x is 0?',
    codeSnippet: `x = 0
if x > 10:
    print("Large")
elif x > 0:
    print("Positive")
else:
    print("Zero or negative")`,
    options: [
      { id: 'A', text: 'Zero or negative' },
      { id: 'B', text: 'Positive' },
      { id: 'C', text: 'Large' },
      { id: 'D', text: 'Both Positive and Zero or negative' },
      { id: 'E', text: 'Nothing' }
    ],
    correctAnswer: 'A',
    hint: 'Zero is not positive. Check x > 0 carefully.',
    explanation: '0 > 10 is False. 0 > 0 is False. Python falls through to the else branch, printing "Zero or negative".',
    topics: ['strict-inequality', 'zero-handling']
  },
  {
    id: 232,
    chapterId: 'ch4',
    questionNumber: 32,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'What is printed for score = 90?',
    codeSnippet: `score = 90
if score > 90 and score <= 100:
    print("Excellent")
elif score > 80 and score <= 90:
    print("Very Good")
elif score > 70 and score <= 80:
    print("Good")
else:
    print("Needs Improvement")`,
    options: [
      { id: 'A', text: 'Excellent' },
      { id: 'B', text: 'Very Good' },
      { id: 'C', text: 'Good' },
      { id: 'D', text: 'Needs Improvement' },
      { id: 'E', text: 'Score out of Range' }
    ],
    correctAnswer: 'B',
    hint: 'Look closely at > 90 versus <= 90.',
    explanation: '90 > 90 is False, so the first branch is skipped. In the second branch, 90 > 80 is True and 90 <= 90 is True, so "Very Good" prints.',
    topics: ['score-bands', 'boundaries']
  },
  {
    id: 233,
    chapterId: 'ch4',
    questionNumber: 33,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'What is printed for score = 60?',
    codeSnippet: `score = 60
if score > 90 and score <= 100:
    print("Excellent")
elif score > 70 and score <= 90:
    print("Good")
elif score > 60 and score <= 70:
    print("Average")
elif score >= 0 and score <= 60:
    print("Needs Improvement")
else:
    print("Score out of Range")`,
    options: [
      { id: 'A', text: 'Average' },
      { id: 'B', text: 'Good' },
      { id: 'C', text: 'Excellent' },
      { id: 'D', text: 'Needs Improvement' },
      { id: 'E', text: 'Score out of Range' }
    ],
    correctAnswer: 'D',
    hint: 'The "Average" interval starts above 60, not at 60.',
    explanation: 'score > 60 is False for 60. The next condition score >= 0 and score <= 60 includes 60 (via <= 60), so "Needs Improvement" prints.',
    topics: ['boundaries', 'score-bands']
  },
  {
    id: 234,
    chapterId: 'ch4',
    questionNumber: 34,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'What is the output?',
    codeSnippet: `score = 15 * 3 - 45
if score > 90:
    print("Excellent")
elif score > 60:
    print("Average")
elif score >= 0:
    print("Needs Improvement")
else:
    print("Score out of Range")`,
    options: [
      { id: 'A', text: 'Average' },
      { id: 'B', text: 'Good' },
      { id: 'C', text: 'Needs Improvement' },
      { id: 'D', text: 'Excellent' },
      { id: 'E', text: 'Score out of Range' }
    ],
    correctAnswer: 'C',
    hint: 'Calculate 15 * 3 - 45 before testing any range.',
    explanation: '15 * 3 = 45; 45 - 45 = 0. score is 0. 0 > 90 is False; 0 > 60 is False; 0 >= 0 is True! "Needs Improvement" prints.',
    topics: ['preliminary-arithmetic', 'tracing']
  },
  {
    id: 235,
    chapterId: 'ch4',
    questionNumber: 35,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'What does the program print for score = 95?',
    codeSnippet: `score = 95
if score >= 50:
    print("Pass")
elif score >= 70:
    print("Good")
elif score >= 90:
    print("Excellent")
else:
    print("Fail")`,
    options: [
      { id: 'A', text: 'Excellent' },
      { id: 'B', text: 'Good' },
      { id: 'C', text: 'Pass' },
      { id: 'D', text: 'Fail' },
      { id: 'E', text: 'All three positive labels' }
    ],
    correctAnswer: 'C',
    hint: 'The if test is score >= 50. Does Python still test later elifs if this is true?',
    explanation: '95 >= 50 is True! In an if-elif-else chain, Python executes ONLY the first branch that evaluates to True and skips all subsequent branches. Output is "Pass". (Checking from low to high is a classic logic flaw).',
    topics: ['condition-order', 'logic-flaw', 'first-match']
  },
  {
    id: 236,
    chapterId: 'ch4',
    questionNumber: 36,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'How many print() statements execute?',
    codeSnippet: `n = 15
if n > 0:
    print("One")
if n > 5:
    print("Two")
if n > 10:
    print("Three")`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' },
      { id: 'E', text: '4' }
    ],
    correctAnswer: 'D',
    hint: 'These are independent if statements; no elif connects them.',
    explanation: 'Because these are 3 independent if statements, Python tests each one. For n = 15, all three conditions are True, so all 3 print statements execute.',
    topics: ['independent-ifs', 'counting']
  },
  {
    id: 237,
    chapterId: 'ch4',
    questionNumber: 37,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'In the PowerPoint lab’s mapping (1=Monday through 5=Friday), what will the program print for day = 4?',
    codeSnippet: `day = 4
if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
elif day == 3:
    print("Wednesday")
elif day == 4:
    print("Thursday")
elif day == 5:
    print("Friday")
else:
    print("Invalid")`,
    options: [
      { id: 'A', text: 'Tuesday' },
      { id: 'B', text: 'Wednesday' },
      { id: 'C', text: 'Thursday' },
      { id: 'D', text: 'Friday' },
      { id: 'E', text: 'Invalid' }
    ],
    correctAnswer: 'C',
    hint: 'Use the mapping stated in THIS question, not a different weekday scheme.',
    explanation: 'In the presentation lab: 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri. At day = 4, the branch elif day == 4 matches and prints "Thursday".',
    topics: ['weekday-lab', 'labs']
  },
  {
    id: 238,
    chapterId: 'ch4',
    questionNumber: 38,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'Using the slide lab’s 1–5 weekday mapping, what is printed when day = 6?',
    codeSnippet: `day = 6
if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
elif day == 3:
    print("Wednesday")
elif day == 4:
    print("Thursday")
elif day == 5:
    print("Friday")
else:
    print("Invalid input")`,
    options: [
      { id: 'A', text: 'Friday' },
      { id: 'B', text: 'Saturday' },
      { id: 'C', text: 'Sunday' },
      { id: 'D', text: 'Invalid input' },
      { id: 'E', text: 'No output' }
    ],
    correctAnswer: 'D',
    hint: 'Only numbers 1 through 5 are valid for this particular lab.',
    explanation: 'The lab defines days 1 through 5 only. When day is 6, none of the conditions match, so the else branch prints "Invalid input".',
    topics: ['weekday-lab', 'fallback']
  },
  {
    id: 239,
    chapterId: 'ch4',
    questionNumber: 39,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'A separate SDP-style program uses 1=Sunday, 2=Monday, ... , 7=Saturday. What does it print for day_number = 2?',
    codeSnippet: `day_number = 2
if day_number == 1:
    print("Sunday")
elif day_number == 2:
    print("Monday")
elif day_number == 3:
    print("Tuesday")
else:
    print("Another day or invalid input")`,
    options: [
      { id: 'A', text: 'Sunday' },
      { id: 'B', text: 'Monday' },
      { id: 'C', text: 'Tuesday' },
      { id: 'D', text: 'Saturday' },
      { id: 'E', text: 'Invalid input' }
    ],
    correctAnswer: 'B',
    hint: 'Explicitly follow the numbering in the question, which differs from the slide lab.',
    explanation: 'Under this question\'s 1=Sunday mapping: 1=Sunday, 2=Monday. day_number == 2 matches and prints "Monday". Always follow the mapping defined in the code.',
    topics: ['mapping-variations', 'tracing']
  },
  {
    id: 240,
    chapterId: 'ch4',
    questionNumber: 40,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'Which line correctly replaces # MISSING LINE so that score = 75 prints "Good"?',
    codeSnippet: `score = 75
if score >= 90:
    print("Excellent")
# MISSING LINE
    print("Good")
else:
    print("Try again")`,
    options: [
      { id: 'A', text: 'else score >= 70:' },
      { id: 'B', text: 'elif score >= 70:' },
      { id: 'C', text: 'elseif score >= 70:' },
      { id: 'D', text: 'elif:' },
      { id: 'E', text: 'if else score >= 70:' }
    ],
    correctAnswer: 'B',
    hint: 'An additional condition in the SAME decision chain uses a specific Python keyword.',
    explanation: 'elif score >= 70: is the correct syntax. elseif is not a Python keyword, and else cannot take a condition.',
    topics: ['code-repair', 'elif']
  },
  {
    id: 241,
    chapterId: 'ch4',
    questionNumber: 41,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'What is the complete output?',
    codeSnippet: `day = 9
if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
else:
    print("Invalid")
print("Finished")`,
    options: [
      { id: 'A', text: 'Invalid only' },
      { id: 'B', text: 'Finished only' },
      { id: 'C', text: 'Monday followed by Finished' },
      { id: 'D', text: 'Invalid followed by Finished' },
      { id: 'E', text: 'Nothing' }
    ],
    correctAnswer: 'D',
    hint: 'No day test matches 9. The final unindented print is still executed.',
    explanation: 'day = 9 enters the else branch and prints "Invalid". Then the unindented print("Finished") executes. Output: Invalid then Finished.',
    topics: ['tracing', 'unindented-print']
  },
  {
    id: 242,
    chapterId: 'ch4',
    questionNumber: 42,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'How many print() statements execute?',
    codeSnippet: `score = 75
if score >= 90:
    print("Excellent")
elif score >= 70:
    print("Good")
    print("Keep going")
else:
    print("Try again")
print("End")`,
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' },
      { id: 'E', text: '0' }
    ],
    correctAnswer: 'C',
    hint: 'Only one branch of an if-elif-else chain executes, but there can be several prints inside that branch.',
    explanation: 'score = 75 skips the if, enters the elif score >= 70 branch (which contains 2 prints: "Good" and "Keep going"), and skips else. Then print("End") runs. 2 + 1 = 3 prints.',
    topics: ['counting', 'branch-tracing']
  },
  {
    id: 243,
    chapterId: 'ch4',
    questionNumber: 43,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.4',
    prompt: 'What is the output?',
    codeSnippet: `temperature = 2 ** 4
temperature /= 8
if temperature < 0:
    print("Freezing")
elif temperature < 15:
    print("Chilly")
elif temperature < 25:
    print("Pleasant")
else:
    print("Warm")`,
    options: [
      { id: 'A', text: 'Freezing' },
      { id: 'B', text: 'Chilly' },
      { id: 'C', text: 'Pleasant' },
      { id: 'D', text: 'Warm' },
      { id: 'E', text: 'Error' }
    ],
    correctAnswer: 'B',
    hint: 'First calculate the exponent, then apply the division assignment.',
    explanation: '2 ** 4 = 16. temperature /= 8 performs 16 / 8 = 2.0. 2.0 < 0 is False; 2.0 < 15 is True! Output is "Chilly".',
    topics: ['preliminary-arithmetic', 'multi-branch', 'float']
  },

  // ==========================================
  // SECTION E: PYTHON COMMENTS (Q44 - Q50)
  // ==========================================
  {
    id: 244,
    chapterId: 'ch4',
    questionNumber: 44,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.5',
    prompt: 'Which symbol begins an ordinary single-line Python comment?',
    options: [
      { id: 'A', text: '//' },
      { id: 'B', text: '#' },
      { id: 'C', text: '/*' },
      { id: 'D', text: '%' },
      { id: 'E', text: '$' }
    ],
    correctAnswer: 'B',
    hint: 'Recall the notation shown in the Chapter 4 slides and SDP questions.',
    explanation: 'In Python, the hash character (#) starts a single-line comment. // is floor division, not a comment.',
    topics: ['comments', 'syntax']
  },
  {
    id: 245,
    chapterId: 'ch4',
    questionNumber: 45,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.5',
    prompt: 'Which line is a valid Python comment?',
    options: [
      { id: 'A', text: '// Check the score' },
      { id: 'B', text: '<!-- Check the score -->' },
      { id: 'C', text: '# Check the score' },
      { id: 'D', text: '/* Check the score */' },
      { id: 'E', text: 'Check the score #' }
    ],
    correctAnswer: 'C',
    hint: 'Put the Python comment symbol before the explanatory text.',
    explanation: '# Check the score is a valid comment. Python ignores everything on the line following #.',
    topics: ['comments', 'syntax']
  },
  {
    id: 246,
    chapterId: 'ch4',
    questionNumber: 46,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.5',
    prompt: 'What does the program print?',
    codeSnippet: `num1 = 20
num2 = 10
total = 0
# total = num1 + num2
total = total + num1
# total = total + num2
total = total + 1
print(total)`,
    options: [
      { id: 'A', text: '30' },
      { id: 'B', text: '21' },
      { id: 'C', text: '31' },
      { id: 'D', text: '20' },
      { id: 'E', text: '11' }
    ],
    correctAnswer: 'B',
    hint: 'Pretend lines beginning with # do not execute. Update total only for active assignment lines.',
    explanation: 'total starts at 0. The first active addition adds num1 (20), giving total = 20. The addition of num2 is commented out. Finally total = total + 1 gives 21. Output is 21.',
    topics: ['commented-code', 'tracing']
  },
  {
    id: 247,
    chapterId: 'ch4',
    questionNumber: 47,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.5',
    prompt: 'What is printed?',
    codeSnippet: `print("Code")  # example`,
    options: [
      { id: 'A', text: 'Code' },
      { id: 'B', text: '# Code' },
      { id: 'C', text: 'Code # example' },
      { id: 'D', text: 'example' },
      { id: 'E', text: 'Nothing' }
    ],
    correctAnswer: 'A',
    hint: 'Look at which part is inside the print() parentheses and which part starts with # outside the string.',
    explanation: 'The string literal passed to print() is "Code". # example is an inline comment and is completely ignored by Python. Output is "Code".',
    topics: ['inline-comments', 'print']
  },
  {
    id: 248,
    chapterId: 'ch4',
    questionNumber: 48,
    level: 2,
    levelTitle: 'Level 2: Core Branching & Tracing',
    type: 'single-choice',
    sectionId: '4.5',
    prompt: 'What is printed by the program?',
    codeSnippet: `print("A#B")`,
    options: [
      { id: 'A', text: 'A' },
      { id: 'B', text: 'B' },
      { id: 'C', text: 'A#B' },
      { id: 'D', text: 'Nothing' },
      { id: 'E', text: 'A syntax error' }
    ],
    correctAnswer: 'C',
    hint: 'Is the # inside or outside the quotation marks?',
    explanation: '# inside quotation marks is part of the string literal text, not a comment marker. print("A#B") prints "A#B".',
    topics: ['strings', 'hash-in-quotes']
  },
  {
    id: 249,
    chapterId: 'ch4',
    questionNumber: 49,
    level: 3,
    levelTitle: 'Level 3: Advanced Logic & Traces',
    type: 'single-choice',
    sectionId: '4.5',
    prompt: 'Which statement is most accurate about Python comments and triple-quoted text?',
    options: [
      { id: 'A', text: '// starts all normal Python comments' },
      { id: 'B', text: 'Triple quotes are the only way to write comments' },
      { id: 'C', text: '# starts real comments; triple quotes create strings that may be used as docstrings' },
      { id: 'D', text: 'Python executes every # comment as code' },
      { id: 'E', text: 'A comment must appear after every if' }
    ],
    correctAnswer: 'C',
    hint: 'Distinguish an actual comment token from a quoted string used for documentation.',
    explanation: '# is Python\'s official comment character. Triple quotes create multiline string literals; when positioned under a function or module header, they serve as docstrings.',
    topics: ['docstrings', 'multiline-comments']
  },
  {
    id: 250,
    chapterId: 'ch4',
    questionNumber: 50,
    level: 1,
    levelTitle: 'Level 1: Foundation Concepts',
    type: 'single-choice',
    sectionId: '4.5',
    prompt: 'Complete the sentence: "Programmers write ________ to explain why instructions are used and help others understand the code."',
    options: [
      { id: 'A', text: 'operators' },
      { id: 'B', text: 'conditions' },
      { id: 'C', text: 'comments' },
      { id: 'D', text: 'variables' },
      { id: 'E', text: 'outputs' }
    ],
    correctAnswer: 'C',
    hint: 'Think of text meant for human readers rather than instructions that Python runs.',
    explanation: 'Programmers write comments to document and explain code logic. Python skips comments completely when executing.',
    topics: ['comments', 'definitions']
  }
]
