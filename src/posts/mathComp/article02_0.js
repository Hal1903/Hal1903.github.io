import '../../css/post.css';
import CodeDownloader from '../../components/CodeDownloader';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const title = "I/O, variables, types, condition";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <p>
                    A computer is essentially a calculator. It receives <b>input</b>,
                    processes data, and produces <b>output</b>.
                    Programming is the act of telling the computer how to do that.
                </p>

                <h2>1. Output and Basic Arithmetic</h2>

                <p>
                    The most basic way to display something in Python is with <Inline math="\texttt{print()}" />.
                </p>

                <div className="code-block">
                    <SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`print(-1+2-3)
print(1*2*3*4)
print(2/5)
print(10/3)
print(10//3)
print(100 % 7)
print(not True)
print(not False)`}
                    </SyntaxHighlighter>
                </div>

                <ul>
                    <li><Inline math="+" />, <Inline math="-" />, <Inline math="*" />, <Inline math="/" /> are arithmetic operators.</li>
                    <li><Inline math="//" /> performs integer division (floor division).</li>
                    <li><Inline math="%" /> returns the remainder (modulo).</li>
                    <li><Inline math="\texttt{not}" /> is a logical operator.</li>
                </ul>

                <p>
                    The hash symbol <Inline math="\texttt{\#}" /> starts a comment.
                    Comments are ignored by the interpreter.
                </p>

                <h2>2. Strings and Escape Characters</h2>

                <div className="code-block">
                    <SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`print("This is a text")
print("First line \\nSecond line")
print("Before tab \\t after tab")
print("\\"Outputting double quotations and backslashes \\\\ as a string requires escaping characters\\"")`}
                    </SyntaxHighlighter>
                </div>

                <ul>
                    <li>\n creates a new line.</li>
                    <li>\t inserts a tab.</li>
                    <li>\ is an escape character.</li>
                </ul>

                <h2>3. Variables</h2>

                <p>
                    Variables store data. You assign values using the equals sign.
                </p>

                <div className="code-block">
                    <SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`book_price = 3
num_books = 5
unit = "dollars"
buyer = "I"

print(f"{buyer} bought {num_books} and paid {book_price*num_books} {unit}")
print(buyer, "bought", num_books, "and paid", book_price*num_books, unit)`}
                    </SyntaxHighlighter>
                </div>

                <p>
                    The <Inline math="\texttt{f}" /> before a string allows formatted output.
                    Expressions inside <Inline math="\{\}" /> are evaluated dynamically.
                </p>

                <h2>4. Input and Type Conversion</h2>

                <p>
                    The <Inline math="\texttt{input()}" /> function always returns text (string).
                </p>

                <div className="code-block">
                    <SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`num_textbooks = input("how many textbooks did you buy? ")

try:
    total = num_textbooks + num_books
    print(f"You bought {total} books in total")
except TypeError:
    print("Type mismatch error!")`}
                    </SyntaxHighlighter>
                </div>

                <p>
                    Since text + integer is invalid, we must convert:
                </p>

                <div className="code-block">
                    <SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`num_textbooks = int(num_textbooks)
print(f"You bought {num_textbooks + num_books} books in total")`}
                    </SyntaxHighlighter>
                </div>

                <p>
                    This demonstrates <b>type conversion</b>.
                </p>

                <h2>5. Lists (Arrays)</h2>

                <div className="code-block">
                    <SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`cart = ["apple", "banana", "cucumber"]
cart.append("donut")
cart.remove("apple")

print(len(cart))
prices = [2,3,4,5]
print(sum(prices))`}
                    </SyntaxHighlighter>
                </div>

                <p>
                    Lists store ordered collections.
                    You can append, remove, measure length, and compute sums.
                </p>


<h3>Array Indexing</h3>

<p>
Lists are ordered collections, which means each element has a position (index).
Indexing starts at <Inline math="0" />.
</p>

<div className="code-block">
<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`numbers = [10, 20, 30, 40]

print(numbers[0])   # first element
print(numbers[1])   # second element
print(numbers[-1])  # last element

print(numbers[1:3]) # slicing (index 1 to 2)`}
</SyntaxHighlighter>
</div>

<ul>
<li><Inline math="[0]" /> accesses the first element.</li>
<li><Inline math="[-1]" /> accesses the last element.</li>
<li><Inline math="[a:b]" /> slices from index a to b-1.</li>
</ul>

<p>
Indexing is fundamental. Almost all data structures rely on position-based access.
</p>



                <h2>6. Sets (No Duplicates)</h2>

                <div className="code-block">
                    <SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`shop_list = set(["apple", "banana"])
shop_list.add("apple")
shop_list.add("corn")
shop_list.discard("apple")

print(shop_list)
print(type(shop_list))`}
                    </SyntaxHighlighter>
                </div>

                <p>
                    Sets automatically remove duplicates.
                </p>


<h2>7. Dictionaries (Key-Value Mapping)</h2>

<p>
A dictionary stores data as <b>key-value pairs</b>.
Instead of numeric indices, we use keys.
</p>

<div className="code-block">
<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`student = {
    "name": "Alice",
    "score": 95,
    "passed": True
}

print(student["name"])
print(student["score"])

student["score"] = 100  # modify value`}
</SyntaxHighlighter>
</div>

<ul>
<li>Keys must be unique.</li>
<li>Access values using <Inline math='["key"]' />.</li>
<li>Dictionaries model structured data.</li>
</ul>

<p>
Dictionaries are one of the most important structures in Python.
Many real programs use them to represent objects or records.
</p>



                <h2>8. Conditions</h2>

                <div className="code-block">
<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`test_score = 67

if (test_score > 67):
    print("you passed!")
elif (test_score == 67):
    print("six seven")
else:
    print("you failed")`}
                    </SyntaxHighlighter>
                </div>


                <p>
                    Conditions use:
                </p>

                <ul>
                    <li><Inline math="==" /> for comparison</li>
                    <li><Inline math="and" /> for multiple conditions</li>
                    <li><Inline math="or" /> for alternative conditions</li>
                </ul>
    <h3>Flowchart (visual understanding of code):</h3>
                <div className='image-center'>
                        <img src="/images/articles/comp/flow1.png" />
                </div>

<h3>Exercise</h3>
<p>
Prepare a dictionary with the keys "food", "drink", and "snacks".
Each key should store a list of specific items belonging to that category.
</p>
<p>
Then:
<ul>
    <li>Ask the user to enter a category name.</li>
    <li>Ask the user to enter an integer index.
        Make sure the input is an integer. You may want to use
        <code>{`int_var.isdigit()`}</code> method that returns True 
        if the content of the variable is an integer.
    </li>
    <li>If the category exists and the index is within range, print the corresponding item.</li>
    <li>Otherwise, print "INVALID".</li>
</ul>
</p>

<details>
<summary><b>Solution (Click to Expand)</b></summary>
<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`# Prepare the dictionary
menu = {
    "food": ["pizza", "burger", "pasta"],
    "drink": ["water", "juice", "coffee"],
    "snacks": ["chips", "cookies", "nuts"]
}

# Take user input
category = input("Enter a category (food, drink, snacks): ")
index_input = input("Enter an index: ")

# Validate index is an integer
if not index_input.isdigit():
    print("INVALID")
else:
    index = int(index_input)
    # Check if category exists and index is valid
    if category in menu and 0 <= index < len(menu[category]):
        print(menu[category][index])
    else:
        print("INVALID")`}
</SyntaxHighlighter>
</details>

<h2>9. Boolean Logic (Formal View)</h2>

<p>
Boolean logic studies operations on truth values:
<Inline math="\texttt{True}" /> and <Inline math="\texttt{False}" />.
Formally, we often denote them as <Inline math="T" /> and <Inline math="F" />, 
or equivalently as <Inline math="1" /> and <Inline math="0" />.
</p>

<p>
Let <Inline math="x" /> and <Inline math="y" /> be boolean variables.
Each logical operator defines a rule that determines the resulting truth value.
These rules are completely described by their <b>truth tables</b>.
</p>

<h3>AND ( <Inline math="x \land y" /> )</h3>

<p>
The conjunction <Inline math="x \land y" /> is 
true <b>only if both</b> <Inline math="x" /> and <Inline math="y" /> are true.
</p>

<Block math={`
\\begin{array}{c|c|c}
x & y & x \\land y \\\\
\\hline
T & T & T \\\\
T & F & F \\\\
F & T & F \\\\
F & F & F
\\end{array}
`} />

<p>
Interpretation: AND models situations where multiple conditions must hold simultaneously.
</p>

<h3>OR ( <Inline math="x \lor y" /> )</h3>

<p>
The disjunction <Inline math="x \lor y" /> is true 
if <b>at least one</b> of <Inline math="x" /> or <Inline math="y" /> is true.
</p>

<Block math={`
\\begin{array}{c|c|c}
x & y & x \\lor y \\\\
\\hline
T & T & T \\\\
T & F & T \\\\
F & T & T \\\\
F & F & F
\\end{array}
`} />

<p>
Note: This is the <i>inclusive OR</i>. It is still true when both inputs are true.
</p>

<h3>NOT ( <Inline math="\lnot x" /> )</h3>

<p>
Negation inverts the truth value.
</p>

<Block math={`
\\begin{array}{c|c}
x & \\lnot x \\\\
\\hline
T & F \\\\
F & T
\\end{array}
`} />

<p>
NOT allows us to construct complementary statements.
</p>

<h3>Example: Boolean Expressions in Code</h3>

<p>
In programming languages like Python or JavaScript, these logical operators 
control execution flow.
</p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`x = True
y = False

print(x and y)   # False
print(x or y)    # True
print(not x)     # False`}
</SyntaxHighlighter>

<p>
We can also combine expressions:
</p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`age = 22
has_id = True

if age >= 15 and has_id:
    print("Social Media allowed")
else:
    print("Access denied")`}
</SyntaxHighlighter>

<p>
Here, the condition is evaluated as a boolean expression. 
The program executes different branches depending on 
whether the expression evaluates to <Inline math="\texttt{True}" /> or <Inline math="\texttt{False}" />.
</p>

<h3>Why Boolean Logic Matters</h3>

<ul>
<li>Conditional statements (<Inline math="\texttt{if}" />, loops)</li>
<li>Decision systems and algorithms</li>
<li>Formal logic and proofs</li>
<li>Digital circuits (AND, OR, NOT gates)</li>
<li>Database queries and filtering</li>
</ul>

<p>
From a formal perspective, all program control flow reduces to evaluating 
boolean expressions. Complex systems are ultimately built from compositions 
of these simple truth-valued operations.
</p>


                <h2>10. Exercises</h2>

                <h3>Exercise 1</h3>
                <p>
                    Write a calculator program that:
                </p>
                <ul>
                    <li>Asks which operation (add/sub/mul/div)</li>
                    <li>Asks for two numbers</li>
                    <li>Outputs the result</li>
                </ul>

                <h3>Exercise 2</h3>
                <p>
                    Ask:
                </p>
                <ul>
                    <li>"Do you like dogs?"</li>
                    <li>"Do you like cats?"</li>
                </ul>

                <p>
                    Then output:
                </p>

                <ul>
                    <li>Likes both</li>
                    <li>Likes either</li>
                    <li>Likes neither</li>
                </ul>

<h3>Exercise: Dictionary + Array (Terminal To-Do List)</h3>

<p>
We represent a simple terminal-based to-do system using a dictionary.
</p>

<ul>
<li><b>Key</b> = person's name</li>
<li><b>Value</b> = list (array) of task names</li>
</ul>

<p>
Initial setup:
</p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>

{`todo = {
    "Abel": ["write proof", "review notes"],
    "Borel": ["buy groceries", "reply to email", "clean desk"],
    "Cayley": ["read chapter 1", "solve exercises", "prepare slides", "meet advisor"]
}`}
</SyntaxHighlighter>

<p>
Here:
</p>

<ul>
<li>Abel has 2 tasks</li>
<li>Borel has 3 tasks</li>
<li>Cayley has 4 tasks</li>
</ul>

<h4>Tasks</h4>

<ol>
<li>Extract Abel's final task.</li>
<li>Borel's first task was done. Remove the first task <b>without referring to its exact name</b>.</li>
<li>Cayley gets a new task <code>"study linear algebra"</code>. Append it to the end.</li>
<li>Borel and Cayley must swap their entire task lists.</li>
<li>Print the name of whoever has more than 2 tasks.</li>
</ol>

<hr />


<h4>Concepts Tested</h4>

<ul>
<li>Dictionary key access (<code>todo["Abel"]</code>)</li>
<li>List indexing (<code>[-1]</code>, <code>[0]</code>)</li>
<li>List mutation (<code>append</code>, <code>pop</code>)</li>
<li>Tuple unpacking for swapping</li>
<li>Iteration over dictionary (<code>.items()</code>)</li>
<li>Length check with <code>len()</code></li>
</ul>

<p>
This exercise reinforces how dictionaries and arrays (lists) interact in structured data models — a common pattern in real programs.
</p>



<div className="button-container">
  <CodeDownloader href="/code/mathPy/math_2.py" fileName="mathPy_example(2).py">
    Download Full Code
  </CodeDownloader>
  <figcaption>Includes the solutions to the exercises</figcaption>
</div>

                <h2>Summary</h2>

                <ul>
                    <li>Computers process input and produce output.</li>
                    <li>Variables store data.</li>
                    <li>Type conversion is essential.</li>
                    <li>Lists and sets manage collections.</li>
                    <li>Conditions control logic flow.</li>
                </ul>

                <p>
                    These fundamentals form the foundation of all programming.
                    More advanced topics — including libraries and machine learning —
                    are built on top of these simple ideas.
                </p>

            </div>
        </div>
    );
}
