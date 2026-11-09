import { StudySection, ChecklistItem } from '../types'

export const CHAPTER4_STUDY_SECTIONS: StudySection[] = [
  {
    id: 21,
    chapterId: 'ch4',
    title: '4.1 What Are Conditional Statements? (LP1)',
    shortTitle: '4.1 Intro & Decisions',
    subtitle: 'Decisions in code, the 3 conditional structures, control flow, and core vocabulary (slides 3–5; p. 64)',
    relatedQuestionIds: [201, 202, 203, 204, 205],
    blocks: [
      {
        type: 'paragraph',
        title: 'Sequential Execution vs Decision Making',
        text: 'Normally, Python executes instructions sequentially from top to bottom. A conditional statement alters this linear flow by testing whether an expression evaluates to True or False, enabling the program to make intelligent decisions.'
      },
      {
        type: 'table',
        table: {
          headers: ['Real-Life Scenario', 'Underlying Condition', 'Program Decision / Output'],
          rows: [
            ['Shopping Cart App', 'total > 100', 'Display a 10% discount message; otherwise charge full price.'],
            ['Video Game', 'player_health <= 0', 'Display "Game Over" and trigger restart screen.'],
            ['School Grading System', 'mark >= 50', 'Display "Pass"; otherwise display "Fail".']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'The Three Core Conditional Structures',
        text: 'Chapter 4 teaches three fundamental decision structures in Python:'
      },
      {
        type: 'table',
        table: {
          headers: ['Structure', 'Core Question Answered', 'Execution Behavior'],
          rows: [
            ['if', '“Should I execute this action?”', 'Runs its indented block ONLY when condition is True; otherwise skips it completely.'],
            ['if-else', '“Which of these TWO paths should I take?”', 'Runs EITHER the if block (when True) OR the else block (when False). Exactly one path runs.'],
            ['if-elif-else', '“Which ONE of multiple paths should I take?”', 'Tests conditions top to bottom; runs the FIRST branch that is True, then exits the chain. If none match, runs else.'],
            ['# comment', '“What does this code mean?”', 'Explains code to readers; Python completely ignores everything from # to end of line.']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'Essential Vocabulary',
        text: 'Master these terms to understand exam questions accurately:'
      },
      {
        type: 'table',
        table: {
          headers: ['Term', 'Precise Definition', 'Concrete Example'],
          rows: [
            ['Condition', 'An expression that evaluates strictly to a Boolean value (True or False).', 'score >= 50'],
            ['Boolean (bool)', 'Python data type with exactly two values: True and False (must have capital T and F).', 'True, False'],
            ['Branch', 'One of the alternative code paths the program can follow after testing a condition.', 'The if path vs the else path'],
            ['Block (Suite)', 'A group of statements sharing the same indentation level that execute together.', 'Four spaces indented under if'],
            ['Control Flow', 'The exact order in which individual statements are evaluated or executed by Python.', 'Sequence vs Branching'],
            ['Nested Condition', 'An if statement placed completely inside another if or else block.', 'Checking num2 != 0 inside a division branch']
          ]
        }
      },
      {
        type: 'callout',
        calloutType: 'remember',
        title: 'Important Distinction: Decisions vs Loops',
        text: 'A conditional statement makes a decision (choosing which branch to run once). It does NOT repeat code. Repetition belongs to loops (while/for), which are separate from this chapter.'
      }
    ]
  },
  {
    id: 22,
    chapterId: 'ch4',
    title: 'Foundations: Conditions, Operators & User Input',
    shortTitle: '4.1 Conditions & Operators',
    subtitle: 'Comparison operators, logical operators (and/or/not), arithmetic in conditions (%), and reading user input',
    relatedQuestionIds: [203, 204, 212, 213, 214, 215, 216],
    blocks: [
      {
        type: 'paragraph',
        title: 'Comparison Operators (Evaluating Truth)',
        text: 'Conditions rely on comparison operators to compare two operands, returning True or False:'
      },
      {
        type: 'table',
        table: {
          headers: ['Operator', 'Meaning', 'Example', 'Evaluates To'],
          rows: [
            ['==', 'Equal to (checks equality)', '8 == 8', 'True'],
            ['!=', 'Not equal to', '8 != 8', 'False'],
            ['>', 'Greater than', '10 > 5', 'True'],
            ['<', 'Less than', '10 < 5', 'False'],
            ['>=', 'Greater than OR equal to', '10 >= 10', 'True'],
            ['<=', 'Less than OR equal to', '10 <= 9', 'False']
          ]
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        title: 'Crucial Exam Trap: = versus ==',
        text: '= is the assignment operator (stores a value into a variable, e.g. score = 75). == is the comparison operator (asks if two values are equal, e.g. score == 75). Writing "if score = 75:" causes an immediate SyntaxError!'
      },
      {
        type: 'paragraph',
        title: 'Logical Operators (Combining Conditions)',
        text: 'Use logical operators to combine or invert Boolean conditions: and, or, and not.'
      },
      {
        type: 'table',
        table: {
          headers: ['A', 'B', 'A and B (Both True)', 'A or B (At Least One True)'],
          rows: [
            ['True', 'True', 'True', 'True'],
            ['True', 'False', 'False', 'True'],
            ['False', 'True', 'False', 'True'],
            ['False', 'False', 'False', 'False']
          ]
        }
      },
      {
        type: 'code',
        language: 'python',
        title: 'Range Checking with and',
        code: `num = int(input("Enter number: "))
if (num >= 1) and (num <= 10):
    print("Inside the range 1 through 10")`,
        note: 'num >= 1 and num <= 10 INCLUDES both 1 and 10. In contrast, num > 1 and num < 10 EXCLUDES 1 and 10!'
      },
      {
        type: 'table',
        table: {
          headers: ['Arithmetic Operator', 'Operation in Condition', 'Divisibility / Math Example'],
          rows: [
            ['%', 'Remainder (Modulus)', '24 % 3 == 0 is True (24 is divisible by 3 with 0 remainder)'],
            ['/', 'Division (always returns float)', '40 / 8 produces 5.0 (float)'],
            ['**', 'Exponentiation (power)', '2 ** 4 produces 16'],
            ['*=', 'Multiply & store', 'y *= 10 means y = y * 10 (if y was 0, 0 * 10 remains 0)']
          ]
        }
      },
      {
        type: 'callout',
        calloutType: 'tip',
        title: 'Divisibility Rule: % vs /',
        text: 'To test if a number is divisible by 10, write: number % 10 == 0. Never use number / 10 == 0 because division returns the quotient, not the remainder!'
      },
      {
        type: 'paragraph',
        title: 'Reading Numeric Input',
        text: 'Remember from Chapter 3 that input() ALWAYS returns text (str). You MUST wrap input() with int() or float() before performing numerical comparisons or arithmetic.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Proper Type Conversion for Conditionals',
        code: `age = int(input("Enter age: "))
if age >= 18:
    print("Eligible to vote")`,
        note: 'Without int(), Python compares strings, leading to TypeError or incorrect string comparisons.'
      }
    ]
  },
  {
    id: 23,
    chapterId: 'ch4',
    title: '4.2 The if Statement: One-Way Decisions (LP2)',
    shortTitle: '4.2 The if Statement',
    subtitle: 'One-way branch execution, colon syntax, indentation rules, and counting executed print statements (slides 6–10; pp. 64–65)',
    relatedQuestionIds: [206, 207, 208, 209, 210, 211, 217, 218],
    blocks: [
      {
        type: 'paragraph',
        title: 'Exact Syntax of the if Statement',
        text: 'The if statement evaluates a condition. If the condition is True, the indented block of code executes. If False, the block is skipped and execution continues with the next unindented statement.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Structure of if',
        code: `if condition:
    statement_1
    statement_2
next_statement  # Always runs regardless of condition`,
        note: '1. Lowercase keyword "if"; 2. Condition; 3. Colon (:); 4. Four-space indentation for the block.'
      },
      {
        type: 'paragraph',
        title: 'The Curriculum Range Pattern (Slides 7–8)',
        text: 'Study this exact program from the textbook slides:'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Range Check Program',
        code: `num = int(input("please enter a number: "))
if (num >= 1) and (num <= 10):
    print("You entered a number between 1 and 10")
    print("Thank you")
print("Good Bye")`,
        note: 'Notice print("Good Bye") is NOT indented. It belongs outside the if block.'
      },
      {
        type: 'table',
        table: {
          headers: ['User Input', 'Is Condition True?', 'Exact Lines Printed After Prompt'],
          rows: [
            ['4', 'Yes (4 is between 1 and 10)', 'You entered a number between 1 and 10\nThank you\nGood Bye (3 lines)'],
            ['10', 'Yes (10 is included via <= 10)', 'You entered a number between 1 and 10\nThank you\nGood Bye (3 lines)'],
            ['15', 'No (15 <= 10 is False)', 'Good Bye (1 line only)'],
            ['-3', 'No (-3 >= 1 is False)', 'Good Bye (1 line only)']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'Indentation Changes Output Dramatically',
        text: 'Exams frequently test indentation by moving statements in and out of the block:'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Program A vs Program B (False Condition 5 > 10)',
        code: `# Program A: final print OUTSIDE the if
if 5 > 10:
    print("Inside")
print("Finished")
# Prints: Finished (1 line)

# Program B: both prints INSIDE the if
if 5 > 10:
    print("Inside")
    print("Finished")
# Prints NOTHING (0 lines)`
      },
      {
        type: 'callout',
        calloutType: 'remember',
        title: 'Exam Rule for Counting Printed Lines',
        text: 'To count how many lines print: 1. Evaluate whether condition is True or False; 2. Inspect the indentation of every print() line. Indented lines run only when True; unindented lines run unconditionally.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Updating Variables Inside if',
        code: `x = 30
if x > 25:
    x = 12
print(x)`,
        output: '12',
        note: 'Since 30 > 25 is True, x is updated to 12. print(x) prints the new value 12, not 30.'
      }
    ]
  },
  {
    id: 24,
    chapterId: 'ch4',
    title: '4.3 The if-else Statement: Two Alternative Paths (LP3)',
    shortTitle: '4.3 The if-else Statement',
    subtitle: 'Choosing between two mutually exclusive paths, the divisible-by-10 lab, variable updates, and game dev (slides 11–17; pp. 65–67)',
    relatedQuestionIds: [219, 220, 221, 222, 223, 224, 225, 226, 227, 228],
    blocks: [
      {
        type: 'paragraph',
        title: 'Choosing Between Two Paths',
        text: 'When a decision requires doing one thing if a condition is True and a different thing if it is False, use an if-else statement. Exactly one branch will execute.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'if-else Syntax',
        code: `if condition:
    # Executed when condition is True
    print("True path")
else:
    # Executed when condition is False
    print("False path")
print("Continue")  # Always runs after either branch completes`,
        note: 'else has NO condition and always requires a colon (:). The else must align with the if.'
      },
      {
        type: 'paragraph',
        title: 'Presentation Example: Valid vs Invalid (Slide 12)',
        text: 'Extending the range check to give feedback on invalid inputs:'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Valid vs Invalid Number Program',
        code: `num = int(input("please enter a number: "))
if (num >= 1) and (num <= 10):
    print("You entered a number between 1 and 10")
    print("Thank you")
else:
    print("Invalid")
print("Good Bye")`
      },
      {
        type: 'table',
        table: {
          headers: ['Input', 'Branch Run', 'Output After Prompt'],
          rows: [
            ['5', 'if branch', 'You entered a number between 1 and 10\nThank you\nGood Bye'],
            ['11', 'else branch', 'Invalid\nGood Bye'],
            ['0', 'else branch', 'Invalid\nGood Bye']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'Core Lab: Divisible by 10 (Slide 15)',
        text: 'A signature lab task in Level K requires testing if a number is divisible by 10 using modulus (%):'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Divisibility by 10 Lab Code',
        code: `number = int(input("Enter a number: "))
if number % 10 == 0:
    print("This number is divisible by 10.")
else:
    print("This number is not a multiple of 10.")`,
        note: 'number % 10 calculates the remainder. If remainder == 0, it is a clean multiple of 10.'
      },
      {
        type: 'table',
        table: {
          headers: ['Input Number', 'number % 10 Calculation', 'Result Message'],
          rows: [
            ['50', '50 % 10 == 0 (True)', 'This number is divisible by 10.'],
            ['27', '27 % 10 == 7 (False)', 'This number is not a multiple of 10.'],
            ['100', '100 % 10 == 0 (True)', 'This number is divisible by 10.'],
            ['0', '0 % 10 == 0 (True)', 'This number is divisible by 10. (0 is a multiple of 10)']
          ]
        }
      },
      {
        type: 'code',
        language: 'python',
        title: 'Tracing Variable Arithmetic in if-else (SDP Style)',
        code: `value = 48
if value < 50:
    value = 50 - value
else:
    value = 50 + value
print(value)`,
        output: '2',
        note: '48 < 50 is True -> value = 50 - 48 = 2. If value had been 51, the else branch would run: 50 + 51 = 101.'
      },
      {
        type: 'callout',
        calloutType: 'note',
        title: 'Career Connection: Video Game Development (Slide 14)',
        text: 'Game developers use if-else conditional logic for player health, obstacle collisions, score multipliers, and game states (e.g. if health <= 0: print("Game Over") else: print("Keep Playing")).'
      }
    ]
  },
  {
    id: 25,
    chapterId: 'ch4',
    title: '4.4 The if-elif-else Statement: Multi-Way Decisions (LP4)',
    shortTitle: '4.4 The if-elif-else Chain',
    subtitle: 'Choosing one of multiple alternatives, condition ordering, separate ifs vs chains, and weekday lab (slides 18–25; pp. 67–69)',
    relatedQuestionIds: [229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243],
    blocks: [
      {
        type: 'paragraph',
        title: 'Multi-Way Decisions with elif',
        text: 'When a scenario has more than two possible outcomes, use if-elif-else. "elif" stands for "else if". Python tests conditions from top to bottom and executes ONLY the first branch that evaluates to True.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'if-elif-else Syntax',
        code: `if condition_1:
    print("Option 1")
elif condition_2:
    print("Option 2")
elif condition_3:
    print("Option 3")
else:
    print("Default option if none matched")`,
        note: 'Once any condition matches, Python executes its block and immediately skips all remaining elif and else blocks.'
      },
      {
        type: 'paragraph',
        title: 'Presentation 4-Range Program (Slides 19–20)',
        text: 'Study how the textbook structures multi-range classification:'
      },
      {
        type: 'code',
        language: 'python',
        title: '4-Range Number Classifier',
        code: `num = int(input("please enter a number: "))
if (num >= 1) and (num <= 10):
    print("You entered a number between 1 and 10")
    print("Thank you")
elif (num > 10) and (num <= 100):
    print("You entered a number between 10 and 100")
elif num > 100:
    print("You entered a number greater than 100")
else:
    print("You entered a number less than 1")
print("Good Bye")`
      },
      {
        type: 'table',
        table: {
          headers: ['Input', 'First True Condition', 'Printed Output After Prompt'],
          rows: [
            ['4', '1 <= num <= 10', 'Between 1 and 10\nThank you\nGood Bye'],
            ['10', '1 <= num <= 10', 'Between 1 and 10\nThank you\nGood Bye (10 belongs to first branch!)'],
            ['15', '10 < num <= 100', 'Between 10 and 100\nGood Bye'],
            ['100', '10 < num <= 100', 'Between 10 and 100\nGood Bye'],
            ['104', 'num > 100', 'Greater than 100\nGood Bye'],
            ['0', 'else', 'Less than 1\nGood Bye'],
            ['-3', 'else', 'Less than 1\nGood Bye']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'Condition Ordering: Why Order Matters',
        text: 'Conditions are checked from top to bottom. If broader conditions come before narrower ones, logic errors occur:'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Correct High-to-Low vs Flawed Low-to-High Order',
        code: `# CORRECT: High-to-low threshold ordering
score = 95
if score >= 90:
    print("Excellent")
elif score >= 70:
    print("Good")
elif score >= 50:
    print("Pass")
else:
    print("Fail")
# Output: Excellent

# FLAWED: Low-to-high threshold ordering
if score >= 50:
    print("Pass")
elif score >= 70:
    print("Good")
elif score >= 90:
    print("Excellent")
# Output: Pass (WRONG! 95 >= 50 matches first, preventing Excellent from ever running)`
      },
      {
        type: 'table',
        table: {
          headers: ['Score', 'First True Condition (High-to-Low)', 'Output Message'],
          rows: [
            ['90 or higher (e.g. 95)', 'score >= 90', 'Excellent'],
            ['70 to 89 (e.g. 75)', 'score >= 70', 'Good'],
            ['50 to 69 (e.g. 50)', 'score >= 50', 'Pass'],
            ['Below 50 (e.g. 45)', 'else (none matched)', 'Fail']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'Separate if Statements vs One if-elif-else Chain',
        text: 'This is one of the most frequently tested concepts on Level K examinations:'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Independent ifs (Multiple Prints) vs Chain (Single Print)',
        code: `# Case A: Three independent if statements
x = 12
if x > 0:
    print("Positive")
if x > 5:
    print("Greater than 5")
if x > 10:
    print("Greater than 10")
# Output: ALL 3 PRINT (Positive, Greater than 5, Greater than 10)

# Case B: One if-elif-else chain
x = 12
if x > 0:
    print("Positive")
elif x > 5:
    print("Greater than 5")
elif x > 10:
    print("Greater than 10")
# Output: ONLY 1 PRINTS (Positive - because it matched first)`
      },
      {
        type: 'paragraph',
        title: 'Core Lab: Weekday Numbers 1–5 (Slide 22)',
        text: 'Maps integer input 1 through 5 to corresponding school weekdays:'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Weekday Number Lab Code',
        code: `day = int(input("Enter a day number (1–5): "))
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
    print("Invalid input. Please enter a number between 1 and 5.")`,
        note: 'Input 3 outputs Wednesday. Input 8 matches none and triggers the else branch.'
      }
    ]
  },
  {
    id: 26,
    chapterId: 'ch4',
    title: '4.5 Comments, Docstrings & STEAM Calculator (LP5)',
    shortTitle: '4.5 Comments & Calculator',
    subtitle: 'Using #, commented-out line tracing, triple-quoted docstrings, and complete STEAM calculator (slides 26–31; pp. 70–71)',
    relatedQuestionIds: [244, 245, 246, 247, 248, 249, 250],
    blocks: [
      {
        type: 'paragraph',
        title: 'The Purpose of Comments in Code',
        text: 'Comments are explanatory notes written in program code. They help programmers understand logic, aid team collaboration, and assist with maintenance. Python completely ignores comments during execution.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Single-Line Comments (#)',
        code: `# This is a full-line comment
score = 75  # This is an inline comment
if score >= 50:
    print("Pass")`,
        note: '# begins a comment outside quotation marks. Python does not support // or /* */.'
      },
      {
        type: 'paragraph',
        title: 'Tracing Code with Commented-Out Lines',
        text: 'Exams test your attention by placing commented-out arithmetic lines inside code:'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Commented-Out Line Trace',
        code: `num1 = 20
num2 = 10
total = 0
# total = num1 + num2   <- IGNORED!
total = total + num1   # total becomes 20
# total = total + num2   <- IGNORED!
total = total + 1      # total becomes 21
print(total)`,
        output: '21',
        note: 'Only active lines execute. 0 + 20 + 1 = 21.'
      },
      {
        type: 'table',
        table: {
          headers: ['Comment Technique', 'Python Syntax', 'Technical Reality & Best Practice'],
          rows: [
            ['Single-Line Comment', '# Comment text', 'Standard, official Python comment marker. Put # at start of every line.'],
            ['Multiline Comment convention', '# Line 1\\n# Line 2', 'Recommended PEP 8 way to write multi-line comments in Python.'],
            ['Triple-Quoted Text', '""" Text """ or \'\'\' Text \'\'\'', 'Creates a string literal. When placed immediately under a function/module header, it serves as a docstring.']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'STEAM Quest: The Basic Calculator (Slide 30)',
        text: 'The STEAM project requires building calculator.py reading two numbers and an operator (+, -, *, /) and computing the result:'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Complete STEAM Calculator Program',
        code: `# calculator.py — Basic Calculator
num1 = float(input("First number: "))
num2 = float(input("Second number: "))
operator = input("Operator (+, -, *, /): ")

if operator == "+":
    print(num1 + num2)
elif operator == "-":
    print(num1 - num2)
elif operator == "*":
    print(num1 * num2)
elif operator == "/":
    if num2 != 0:
        print(num1 / num2)
    else:
        print("Cannot divide by zero")
else:
    print("Invalid operator")`,
        note: 'Notice the nested if testing num2 != 0 to prevent division-by-zero crashes!'
      },
      {
        type: 'table',
        table: {
          headers: ['Inputs (num1, num2, operator)', 'Branch Executed', 'Output'],
          rows: [
            ['8, 2, "+"', 'if operator == "+"', '10.0'],
            ['8, 2, "-"', 'elif operator == "-"', '6.0'],
            ['8, 2, "*"', 'elif operator == "*"', '16.0'],
            ['8, 2, "/"', 'elif operator == "/"', '4.0'],
            ['8, 0, "/"', 'Nested else (num2 == 0)', 'Cannot divide by zero'],
            ['8, 2, "%"', 'Final else (unknown op)', 'Invalid operator']
          ]
        }
      }
    ]
  },
  {
    id: 27,
    chapterId: 'ch4',
    title: 'Output Tracing & The 15 Exam Traps (SDP Alignment)',
    shortTitle: '4.6 Tracing & 15 Traps',
    subtitle: '5-step code tracing method, worked traces A through F, the 15 classic exam traps, and syntax vs logic errors',
    relatedQuestionIds: [207, 208, 217, 218, 222, 223, 234, 235, 236, 243, 246],
    blocks: [
      {
        type: 'paragraph',
        title: 'The Five-Step Code Tracing Method',
        text: 'Follow these 5 steps systematically for every exam question:'
      },
      {
        type: 'list',
        items: [
          '1. Record starting values: Write down initial values of all variables before entering conditions.',
          '2. Solve preliminary arithmetic: Compute expressions (e.g. 2 ** 4 = 16) before evaluating the condition.',
          '3. Evaluate condition truth: Determine strictly if the comparison evaluates to True or False.',
          '4. Mark active branch: In if-elif-else, select the FIRST True branch and ignore all remaining branches.',
          '5. Track indentation: Any print() at outer indentation level executes regardless of conditions.'
        ]
      },
      {
        type: 'paragraph',
        title: 'Key Worked Traces (Curriculum Patterns)',
        text: 'Exams rely on recurring numerical patterns:'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Trace B: Zero Multiplied Stays Zero',
        code: `x = 10
y = 0
if x == 10:
    y *= x
    print(y)`,
        output: '0',
        note: 'y *= x means y = 0 * 10 = 0.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Trace C: One Raised to Power Stays One',
        code: `x = 10
y = 1
if x == 10:
    y **= x
    print(y)`,
        output: '1',
        note: '1 ** 10 = 1.'
      },
      {
        type: 'code',
        language: 'python',
        title: 'Trace E: Arithmetic Evaluated First',
        code: `temperature = 2 ** 4    # 16
temperature /= 8        # 16 / 8 = 2.0
if temperature < 0:
    print("Freezing")
elif temperature < 15:
    print("Chilly")
else:
    print("Warmer")`,
        output: 'Chilly',
        note: 'temperature is 2.0. 2.0 < 0 is False; 2.0 < 15 is True -> "Chilly".'
      },
      {
        type: 'table',
        table: {
          headers: ['Exam Trap', 'Why Students Lose Marks', 'Correct Python Rule'],
          rows: [
            ['Using = for equality', '= assigns value to a variable', 'Always use == to check equality in conditions.'],
            ['Missing colon (:)', 'Omitting : at end of if/elif/else header', 'Headers must end with a colon (:).'],
            ['Bad indentation', 'Statements inside if block not indented', 'Must indent statements inside block by 4 spaces.'],
            ['Unindented print()', 'Thinking unindented print is part of if', 'Unindented lines are outside and always run.'],
            ['else condition:', 'Writing a condition after else', 'else cannot have a condition; use elif if condition needed.'],
            ['else if keyword', 'Writing "else if" with space', 'Python keyword is strictly elif.'],
            ['elif checks all', 'Thinking all matching elifs run', 'ONLY the FIRST matching condition runs, then chain exits.'],
            ['Separate ifs vs chain', 'Confusing multiple ifs with elif chain', 'Independent ifs can each execute; elif chain executes at most one.'],
            ['> vs >= boundaries', 'Forgetting that 10 > 10 is False', '10 > 10 is False, but 10 >= 10 is True.'],
            ['input() without int()', 'Comparing strings instead of numbers', 'input() returns str; wrap with int() for numeric math.'],
            ['/ instead of %', 'Using division to check divisibility', 'Use number % divisor == 0 to check divisibility.'],
            ['# comments execution', 'Thinking commented line runs', 'Python skips commented-out lines completely.'],
            ['""" comment myth', 'Thinking triple quotes are official comments', '# is the actual comment marker; triple quotes are strings/docstrings.'],
            ['Reassigned values', 'Forgetting earlier variables change', 'The latest assigned value overwrites previous values.']
          ]
        }
      },
      {
        type: 'callout',
        calloutType: 'warning',
        title: 'Syntax Error vs Indentation Error vs Flawed Logic',
        text: 'Missing a colon (if x > 5) raises a SyntaxError. Failing to indent under if raises an IndentationError. Ordering conditions incorrectly (score >= 50 before score >= 90) runs without crashing, but gives flawed logic output!'
      }
    ]
  },
  {
    id: 28,
    chapterId: 'ch4',
    title: 'Chapter Review, Self-Test & 10 Golden Rules',
    shortTitle: '4.7 Review & 10 Rules',
    subtitle: 'Official presentation activities answer key, Chapter review answers, 12 quick drills, and the 10 golden rules',
    relatedQuestionIds: [201, 203, 206, 219, 220, 221, 224, 237, 240, 244, 250],
    blocks: [
      {
        type: 'paragraph',
        title: 'Official Chapter Review Answer Key (pp. 73–74; Slides 33–42)',
        text: 'Verified answers to all 10 review questions in the textbook:'
      },
      {
        type: 'table',
        table: {
          headers: ['Question', 'Concept Tested', 'Correct Answer', 'Rationale'],
          rows: [
            ['Q1', 'Correct if syntax', 'B: if <condition>:', 'Must have "if", condition, colon, and indented block.'],
            ['Q2', 'Trace with outer print', 'A: "Young"', 'age = 17 fails age >= 33; "Young" is unindented and runs.'],
            ['Q3', 'Meaning of if-else', 'B: Choose between two alternatives', 'Evaluates condition; runs one of two paths.'],
            ['Q4', 'Trace score = 45', 'E: "Fail"', '45 >= 50 is False, so else branch ("Fail") runs.'],
            ['Q5', 'Equality operator', 'E: ==', '== tests equality; = assigns value.'],
            ['Q6', 'Single-line comment', 'D: # This is a comment', '# begins a single-line comment.'],
            ['Q7', 'Header character', 'C: Colon (:)', 'All Python block headers end with a colon.'],
            ['Q8', 'Role of indentation', 'B: Defines statements belonging to block', 'Indentation specifies block structure in Python.'],
            ['Q9', 'Additional condition keyword', 'B: elif', 'elif introduces a new condition in an existing chain.'],
            ['Q10', 'Default fallback keyword', 'C: else', 'else runs when all prior conditions are False.']
          ]
        }
      },
      {
        type: 'paragraph',
        title: 'The 10 Golden Rules of Chapter 4',
        text: 'Memorize these 10 rules for full marks on Chapter 4 questions:'
      },
      {
        type: 'list',
        items: [
          '1. A conditional statement lets a program make decisions and choose code paths.',
          '2. Every condition evaluates strictly to True or False (Boolean).',
          '3. if is a one-way choice; if-else has two paths; if-elif-else selects among many.',
          '4. Always end if, elif, and else headers with a colon (:).',
          '5. Indentation defines the block; statements with outer indentation always execute.',
          '6. = is assignment (store value); == is comparison (test equality).',
          '7. and requires both conditions True; or requires at least one; not reverses truth.',
          '8. In an if-elif-else chain, ONLY the FIRST True branch executes.',
          '9. Use int(input(...)) for whole numbers and % for remainder / divisibility checks.',
          '10. # starts a comment; triple quotes create string literals used as docstrings.'
        ]
      },
      {
        type: 'callout',
        calloutType: 'tip',
        title: 'Exam Readiness Check',
        text: 'Before taking the exam, open the Last-Minute Checklist in the sidebar and make sure you can check off every single target without looking at your notes!'
      }
    ]
  }
]

export const CHAPTER4_CHECKLIST: ChecklistItem[] = [
  { id: 'ch4-c1', text: 'I can define conditional statement, condition, branch, block, and indentation.' },
  { id: 'ch4-c2', text: 'I can write syntactically correct headers for if, if-else, and if-elif-else with colons (:).' },
  { id: 'ch4-c3', text: 'I can count exactly how many print() lines execute by evaluating conditions and indentation.' },
  { id: 'ch4-c4', text: 'I can explain the difference between assignment (=) and equality comparison (==).' },
  { id: 'ch4-c5', text: 'I understand boundary comparisons (e.g. why 10 > 10 is False but 10 >= 10 is True).' },
  { id: 'ch4-c6', text: 'I can trace variable updates and preliminary arithmetic before selecting a conditional branch.' },
  { id: 'ch4-c7', text: 'I understand the difference between multiple independent ifs and a single if-elif-else chain.' },
  { id: 'ch4-c8', text: 'I can write the divisible-by-10 program using modulus (number % 10 == 0).' },
  { id: 'ch4-c9', text: 'I can use # for single-line comments and explain why triple quotes are docstring literals.' },
  { id: 'ch4-c10', text: 'I can trace the STEAM calculator and explain the nested check for zero division (num2 != 0).' }
]
