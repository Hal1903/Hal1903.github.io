import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export const title = "The Euclidean Algorithm for GCD";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="body">

<h2>1. The Problem: Finding the Greatest Common Divisor</h2>

<p>
    Suppose you are given two whole numbers.
    How can you find the largest number that divides both of them?
</p>

<p>
    This number is called the <strong>Greatest Common Divisor (GCD)</strong>.
</p>

<p>
    For example, what is the GCD of 3968 and 976?
</p>

<p>
    There is a very fast and clever method to find it.
    It is called the <strong>Euclidean Algorithm</strong>.
</p>

<hr></hr>

<h3>Exercise</h3>

<p>
    Find all common divisors of 160 and 64.
</p>

<p>
    Then compute:
</p>

<Block math={`160 \\div 64`} />

<p>
    and compare the GCD of the divisor and remainder.
</p>

<p>
    Try the same with 338 and 91.
</p>

<p>
    What do you notice?
</p>

<details>
    <summary><b>Key Realization (Click to Expand)</b></summary>
<br />
<p>
You should discover something remarkable:
<inline math="gcd(a,b)=gcd(b,r)"/> where <Inline math="a=bq+r" />.
</p>
<p>
In words:
The greatest common divisor does not change when we replace the 
larger number by its remainder after division.
</p>
<p>
    Even if we do not know the GCD at the beginning, we can repeatedly apply this idea:
</p>

<ul>
    <li>Divide</li>
    <li>Replace the larger number with the remainder</li>
    <li>Repeat</li>
</ul>

<p>
    Each step makes the numbers smaller, and eventually the remainder becomes zero. 
    At that moment, the last non-zero divisor must be the GCD.
    Also, notice that this is precisely the kind 
    of <b>"fixed, step-by-step procedure"</b> that 
    computers execute extremely efficiently.
</p>

<p>
    This observation gives us a powerful and systematic method 
    for computing the greatest common divisor — 
    a method known as the <b>Euclidean Algorithm</b>. 
    Let us now explore it in detail.
</p>
<p>

</p>
</details>


<hr/>

<h2>2. The Euclidean Algorithm (Step-by-Step)</h2>

<p>
    The rule is simple:
</p>

<ol>
    <li>Divide the bigger number by the smaller number.</li>
    <li>Look at the remainder.</li>
    <li>Now divide the previous divisor by that remainder.</li>
    <li>Keep going until the remainder becomes 0.</li>
    <li>The last number you divided by is the GCD.</li>
</ol>

<p>
    Let's try it:
</p>

<Block math={`3968 \\div 976 = 4 \\text{ remainder } 64`} />
<Block math={`976 \\div 64 = 15 \\text{ remainder } 16`} />
<Block math={`64 \\div 16 = 4 \\text{ remainder } 0`} />

<p>
    The remainder became 0, so we stop.
</p>

<p>
    The last number we divided by was 16.
</p>

<Block math={`\\gcd(3968, 976) = 16`} />

<p>
    You can check that both 3968 and 976 are divisible by 16.
</p>

<h3>Exercise:</h3>
<p>Implement Euclidean Algorithm in Python.</p>
<details>
    <summary><b>Solution:</b></summary>

                <SyntaxHighlighter language="python" style={oneDark}>
{`def gcd(a, b):
    while b != 0:
        remainder = a % b
        a = b
        b = remainder
    return a


# Example
print(gcd(3968, 976))  # 16`}
                </SyntaxHighlighter>
</details>


<hr/>

<h2>3. Why Does This Work?</h2>

<p>
    The key idea is surprisingly simple.
</p>

<p>
    Suppose we divide a number like this:
</p>

<Block math={`a = b \\times q + r`} />

<p>
    This just means:
    dividend = divisor × quotient + remainder.
</p>

<p>
    Now here is the important observation:
</p>

<p>
    Any number that divides 
    both <Inline math="a" /> and <Inline math="b" /> must 
    also divide the remainder <Inline math="r" />.
</p>

<p>
    Why?
</p>

<p>
    Because if a number divides <Inline math="a" /> and 
    it also divides <Inline math="b \times q" /> (such a number 
    always exist, because 1 always divides two numbers!),
    then it must divide the difference between them.
</p>

<Block math={`r = a - b \\times q`} />

<p>
    So every common divisor of <Inline math="a" /> and <Inline math="b" /> is
    also a divisor of <Inline math="b" /> and <Inline math="r" />.
</p>

<p>
    And the reverse is also true:
    if a number divides <Inline math="b" /> and <Inline math="r" />,
    then it also divides <Inline math="a" />, by the same logic!
</p>

<p>
    That means:
</p>

<p>
    <b>The common divisors do not change.</b>
</p>

<p>
    So the greatest one does not change either.
</p>

<p>
    This is why we are allowed to replace
    the pair (a, b) with (b, remainder)
    again and again.
</p>

<p>
    Eventually, the remainder becomes 0,
    and the answer appears. 
    Why can we say this is the "greatest"? 
    Because at the end we have <Inline math="x\div y = q" /> with 
    a remainder 0. If a number divides 
    both <Inline math="x, y" /> then <Inline math="y" /> itself 
    must be the largest one among such numbers.
    This concludes Euclidean Algorithm always finds the GCD.
</p>

<hr/>

<h2>4. Practice Problems</h2>

<h3>Problem 1</h3>

<p>
    Use the Euclidean Algorithm to find the GCD of 8928 and 696.
</p>



<h3>Problem 2</h3>

<p>
    Suppose when dividing <Inline math="X \div 285" />,
    you get a remainder.
</p>

<p>
    After repeating the Euclidean Algorithm,
    the fourth division ends with
    2 remainder 0.
</p>

<p>
    The GCD turns out to be 57.
</p>

<p>
    What is the smallest possible value of <Inline math="X" />?
</p>

<p>
    <b>(Hint: Work backwards.)</b>
</p>

<h3>Coding Exercise:</h3>
<p>
Implement an algorithm that computes <Inline math="X" /> in Problem 2.
The function should take the following parameters:
<ul>
<li> <Inline math="n" /> — the number of steps  </li>
<li> <Inline math="b" /> — the first divisor (optional)  </li>
<li> <Inline math="d=\gcd(X, b)" />  </li>
<li> <Inline math="q_n" /> — the last quotient  </li>
</ul>

</p>
<details>
    <summary><b>Solution:</b></summary>

<SyntaxHighlighter language="python" style={oneDark}>
{`def backward_euclidean(n, b, gcd, q_n):
    # first solve for X_n
    X_n = gcd * q_n
    r_last = gcd
    for _ in range(1, n): 
        b_n = X_n
        r_n = r_last
        r_last = b_n
# because we are finding such the smallest X, 1 is the only option for us
        X_n = b_n*(1) + r_n
        print(f"({X_n} div {b_n} = 1 ... {r_n})")
    
    return X_n if gcd_euc(X_n, b) == gcd else "No Solution"
    
print(backward_euclidean(4, 285, 57, 2))
print(gcd_euc(456, 285))  # 57
`}
</SyntaxHighlighter>
</details>


<hr/>

<h2>5. Why Not Just Use Prime Factorization?</h2>

<p>
    Another way to find the GCD is to break both numbers
    into prime factors and multiply the common ones.
</p>

<p>
    But for large numbers,
    prime factorization can take a long time.
</p>

<p>
    The Euclidean Algorithm only uses division,
    and it finishes very quickly.
</p>

<p>
    For 3968 and 976,
    we needed only three divisions!
</p>

<hr/>

<h2>Conclusion</h2>

<p>
    The Euclidean Algorithm shows how
    a simple idea about division
    leads to a powerful method.
</p>

<p>
    It was discovered more than 2000 years ago,
    and it is still used in modern mathematics
    and computer science.
</p>

<p>
    Simple idea. Powerful result.
</p>

            </div>
        </div>
    );
}