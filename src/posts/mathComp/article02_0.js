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

                <h2>7. Conditions</h2>

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

                <h2>8. Logical Combination Example</h2>

                <div className="code-block">
                    <SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`if (test_score % 2 == 0 and test_score % 3 == 0):
    print("multiple of 6")
elif (test_score % 2 == 0):
    print("even")
elif (test_score % 3 == 0):
    print("multiple of three")`}
                    </SyntaxHighlighter>
                </div>

                <p>
                    Logical operators allow complex decision structures.
                </p>

                <h2>9. Exercises</h2>

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
