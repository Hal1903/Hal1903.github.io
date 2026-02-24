import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import CodeDownloader from '../../components/CodeDownloader';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const title = "Iteration, Function, Files, Libraries";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

<h2>0. Libraries — Using Code Written by Others</h2>

<p>
Before writing our own logic, we often rely on <strong>libraries</strong>.
A library is a collection of pre-written code that provides useful tools.
</p>

<p>
Instead of reinventing everything from scratch,
we can import and use these tools.
</p>

<h3>0.1 Importing a Library</h3>

<SyntaxHighlighter language="python" style={oneDark}>
{`import random as rand`}
</SyntaxHighlighter>

<h3>Understanding the Syntax</h3>

<ul>
    <li><code>import</code> — keyword that loads a library.</li>
    <li><code>random</code> — the name of the library.</li>
    <li><code>as</code> — gives the library a nickname (alias).</li>
    <li><code>rand</code> — the alias we will use in our program.</li>
</ul>

<p>
After importing, we can access functions inside the library using:
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`rand.randint(1, 6)`}
</SyntaxHighlighter>

<p>
The dot <code>.</code> means:
“use something inside this library.”
</p>

<h3>0.2 What Is a Module?</h3>

<p>
In Python terminology, a library file is called a <strong>module</strong>.
The <code>random</code> module contains functions for generating random numbers.
</p>

<h3>0.3 Popular Python Libraries</h3>

<ul>
    <li><strong>math</strong> — mathematical functions like <code>sqrt()</code>, <code>sin()</code></li>
    <li><strong>csv</strong> — reading and writing CSV files</li>
    <li><strong>os</strong> — interacting with the operating system</li>
    <li><strong>sys</strong> — system-level tools</li>
    
    <li><strong>numpy</strong> — numerical computing</li>
    <li><strong>pandas</strong> — data analysis</li>
    <li><strong>matplotlib</strong> — plotting graphs</li>
    <li><strong>SymPy</strong> — working with symbols like x and y</li>
</ul>

<p>
In this chapter, we will mainly use:
</p>

<ul>
    <li><code>random</code> — for simulating dice rolls</li>
    <li><code>csv</code> — for saving results to a file</li>
</ul>



                <h2>1. Iteration — Repeating Code</h2>

                <p>
                    Iteration means repeating a block of code multiple times.
                    Python provides two main tools:
                </p>

                <ul>
                    <li><strong>for loop</strong> — when the number of repetitions is known</li>
                    <li><strong>while loop</strong> — when repetition depends on a condition</li>
                </ul>

                <h3>1.1 The for Loop</h3>

                <p>
                    The <Inline math={"range(a,b)"} /> function generates numbers from 
                    <Inline math={"a"} /> (included) to <Inline math={"b"} /> (not included).
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`import random as rand

for i in range(1, 10):
    print(f"{i}: {rand.randint(1,5)}")`}
                </SyntaxHighlighter>

                <p>
                    Here:
                </p>

                <ul>
                    <li><code>range(1,10)</code> generates numbers 1 through 9.</li>
                    <li><code>rand.randint(1,5)</code> includes both endpoints.</li>
                </ul>

                <h3>1.2 The while Loop</h3>

                <p>
                    A <code>while</code> loop continues as long as a condition is true.
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`counter = 0

while counter < 10:
    print(counter)
    counter += 1`}
                </SyntaxHighlighter>

                <p>
                    Be careful: if the condition never becomes false,
                    the loop runs forever.
                </p>

                <h2>2. Iterating Over Collections</h2>

                <h3>2.1 Lists</h3>

                <SyntaxHighlighter language="python" style={oneDark}>
{`items = [3, 1, 4, 1, 5]

for item in items:
    print(item)`}
                </SyntaxHighlighter>

                <p>
                    Python automatically extracts each element from the list.
                </p>

                <h3>2.2 Strings</h3>

                <p>
                    A string is just a sequence of characters.
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`string1 = "oyasumi"

for char in string1:
    print(char)`}
                </SyntaxHighlighter>

                <h2>3. Functions — Reusable Code Blocks</h2>

                <p>
                    A function is a reusable set of instructions.
                    In mathematics:
                </p>

                <Block math={"f(x) = x + 1"} />

                <p>
                    In programming:
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`def roll_a_die():
    return rand.randint(1,6)

die = roll_a_die()
print(die)`}
                </SyntaxHighlighter>

                <p>
                    Functions:
                </p>

                <ul>
                    <li>Encapsulate logic</li>
                    <li>Improve readability</li>
                    <li>Prevent repetition</li>
                </ul>

                <h3>Returning Values</h3>

                <SyntaxHighlighter language="python" style={oneDark}>
{`def roll_n_count(counter):
    print("Rolling...")
    return counter + 1`}
                </SyntaxHighlighter>

                <p>
                    Instead of modifying external variables directly,
                    we return a new value.
                </p>

                <h2>4. Scope — Why Returning Matters</h2>

                <p>
                    Variables defined inside a function are local.
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`x = 10

def test():
    x = 5
    print(x)

test()
print(x)`}
                </SyntaxHighlighter>

                <p>
                    Output:
                </p>

                <ul>
                    <li>5 (inside function)</li>
                    <li>10 (outside function)</li>
                </ul>

                <p>
                    The inner <code>x</code> does not change the outer one.
                </p>

                <h2>5. Writing to a File</h2>

                <p>
                    Python includes a built-in <code>csv</code> library
                    for writing structured data.
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`import csv
import random as rand

def record_dice(n=1000):
    with open("dice_record.csv", "w", newline="") as file:
        writer = csv.writer(file)

        for _ in range(n):
            roll = rand.randint(1,6)
            writer.writerow([roll])`}
                </SyntaxHighlighter>

                <p>
                    Important details:
                </p>

                <ul>
                    <li><code>with open(...)</code> automatically closes the file.</li>
                    <li><code>writer.writerow()</code> writes one row at a time.</li>
                </ul>

                <h2>6. Returning Multiple Values</h2>

                <p>
                    Python allows returning multiple values at once.
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`def record_roll(counter, record):
    n = rand.randint(1,6)
    record.append(n)
    return counter + 1, record`}
                </SyntaxHighlighter>

                <p>
                    This lets us update both:
                </p>

                <ul>
                    <li>The number of rolls</li>
                    <li>The history of results</li>
                </ul>

<h2>Exercise: Dice Simulator with a Record</h2>

<p>
In this exercise, you will improve your earlier dice program so that
it <strong>keeps a full history of every roll</strong>, not just the number of times rolled.
</p>

<p>
Given a function
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`def record_roll_n_count(counter: int, record: list):
    n = rand.randint(1,6)
    record.append(n)
    print(f"Number: {n}")
    return counter + 1, record`}
</SyntaxHighlighter>

<h3>Your task is:</h3>

<ul>
    <li>Modify the main loop so that it updates <code>counter</code> <strong>and</strong> <code>record</code>.</li>
    <li>Store every roll inside a list called <code>numbers</code>.</li>
    <li>When the user stops, print the entire roll history.</li>
</ul>

<h3>What This Tests</h3>

<ul>
    <li>Returning multiple values from a function</li>
    <li>Tuple unpacking (e.g., <code>counter, numbers = ...</code>)</li>
    <li>List mutation using <code>.append()</code></li>
    <li>Understanding variable scope</li>
</ul>

<p>
Important: Notice that simply updating <code>counter</code> is not enough.
You must capture both returned values correctly.
</p>

<p>
When completed correctly, your program should:
</p>

<ul>
    <li>Roll repeatedly</li>
    <li>Track total roll count</li>
    <li>Store all roll results</li>
    <li>Print the full history at the end</li>
</ul>

<hr />

<h2>Capstone: Dice Statistics Simulator</h2>

<p>
This is a complete mini-project that combines everything you have learned so far:
iteration, functions, conditionals, user input, lists, dictionaries, file writing,
and basic probability.
</p>

<h3>Project Goal</h3>

<p>
Build a configurable dice simulator that:
</p>

<ul>
    <li>Allows the user to choose the number of dice sides (even numbers only, 6–20).</li>
    <li>Requires more than 1000 rolls.</li>
    <li>Records every roll into a CSV file.</li>
    <li>Analyzes whether the empirical probability converges to a uniform distribution.</li>
</ul>

<h3>Part 1 — Input Validation</h3>

<p>
The user must:
</p>

<ul>
    <li>Enter an <strong>even integer</strong> between 6 and 20.</li>
    <li>Enter a roll count greater than 1000.</li>
</ul>

<p>
This tests:
</p>

<ul>
    <li><code>while True</code> loops</li>
    <li><code>try / except</code></li>
    <li>Logical conditions (<code>and</code>, modulo operator <code>%</code>)</li>
</ul>

<h3>Part 2 — Simulation</h3>

<p>
The program must:
</p>

<ul>
    <li>Roll the dice the requested number of times.</li>
    <li>Store results inside a list.</li>
    <li>Write results to <code>dice_record.csv</code>.</li>
</ul>

<p>
This tests:
</p>

<ul>
    <li><code>for</code> loops</li>
    <li>List building</li>
    <li><code>with open(...)</code> file handling</li>
    <li><code>csv.writer</code></li>
</ul>

<h3>Part 3 — Statistical Analysis</h3>

<p>
For an n-sided fair dice, the theoretical probability of each face is:
</p>

<Block math={"P = \\frac{1}{n}"} />

<p>
Your program must:
</p>

<ul>
    <li>Count how many times each face appears.</li>
    <li>Compute empirical probability: <code>count / total_rolls</code>.</li>
    <li>Compare it to the theoretical value.</li>
    <li>Check whether the difference is within ± <code>0.02</code>.</li>
</ul>

<p>
If all faces fall within the tolerance range, the distribution is considered
to have converged to uniform.
</p>

<h3>What This Capstone Tests</h3>

<ul>
    <li>Decomposing a large task into small functions</li>
    <li>Dictionary usage for counting</li>
    <li>Probability interpretation</li>
    <li>Structured program design</li>
    <li>Separation of logic (input, simulation, analysis, output)</li>
</ul>

<p>
This is your first full simulation program.
If you can complete this cleanly and correctly,
you are beginning to think like a programmer.
</p>

<div className="button-container">
  <CodeDownloader href="/code/mathPy/math_3.py" fileName="mathPy_example(3).py">
    Download Full Code
  </CodeDownloader>
  <figcaption>Includes the solutions to the exercises</figcaption>
</div>


                <h2>8. What have we covered?</h2>

                <ul>
                    <li>Difference between <strong>for</strong> and <strong>while</strong></li>
                    <li>How iteration works on lists and strings</li>
                    <li>Why functions improve structure</li>
                    <li>Why returning values is safer than modifying globals</li>
                    <li>How to write structured data into a CSV file</li>
                </ul>

                <p>
                    These are core foundations of programming.
                    Once you master these ideas, you can build simulations,
                    data generators, or interactive programs.
                </p>

            </div>
        </div>
    );
}
