import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const title = "Approximation of Square Roots";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <h2>1. What Is an Irrational Number?</h2>

                <p>
                    In mathematics, a <b>rational number</b> is a number that can be written as a fraction:
                </p>

                <Block math={"\\frac{a}{b}"} />

                <p>
                    where <Inline math={"a"} /> and <Inline math={"b"} /> are integers and 
                    <Inline math={"b \\neq 0"} />.
                </p>

                <p>Examples of rational numbers:</p>

                <ul>
                    <li><Inline math={"\\frac{1}{2}"} /></li>
                    <li><Inline math={"-\\frac{7}{3}"} /></li>
                    <li><Inline math={"5 = \\frac{5}{1}"} /></li>
                </ul>

                <p>
                    An <b>irrational number</b> is a number that <b>cannot</b> be written as a fraction of two integers.
                </p>

                <p>Famous examples include:</p>

                <ul>
                    <li><Inline math={"\\pi"} /> (pi)</li>
                    <li><Inline math={"\\sqrt{2}"} /></li>
                    <li>The golden ratio <Inline math={"\\varphi = \\frac{1 + \\sqrt{5}}{2}"} /></li>
                </ul>

                <p>
                    Irrational numbers have decimal expansions that:
                </p>

                <ul>
                    <li>Never end</li>
                    <li>Never repeat in a fixed pattern</li>
                </ul>

                <p>
                    For example:
                </p>

                <Block math={"\\pi = 3.1415926535\\dots"} />

                <Block math={"\\sqrt{2} = 1.4142135623\\dots"} />

                <p>
                    These decimals go on forever without repeating.
                </p>
<p>
Why did I say “without repeating”? You may have already noticed that rational numbers 
have repeating decimal expansions—and that's absolutely true.
</p>

<h3>Exercise</h3>
<p>
Verify that <Inline math={"\\frac{1}{7}"} /> has a repeating decimal expansion. 
What digit appears in the 1000th and 7777th decimal place?
</p>

                <h2>2. Is <Inline math={"\\sqrt{2}"} /> Really Irrational?</h2>

                <p>
                    <b>The square root of 2 cannot be written as a fraction.</b>
                </p>

                <p>
                    Suppose, for contradiction, that:
                </p>

                <Block math={"\\sqrt{2} = \\frac{a}{b}"} />

                <p>
                    where <Inline math={"a"} /> and <Inline math={"b"} /> are integers 
                    and the fraction is fully simplified (meaning they share no common factors).
                </p>

                <p>
                    Square both sides:
                </p>

                <Block math={"2 = \\frac{a^2}{b^2}"} />

                <p>
                    Multiply both sides by <Inline math={"b^2"} />:
                </p>

                <Block math={"2b^2 = a^2"} />

                <p>
                    This means <Inline math={"a^2"} /> is even.
                    If <Inline math={"a^2"} /> is even, then <Inline math={"a"} /> must also be even.
                </p>

                <p>
                    So let's write:
                </p>

                <Block math={"a = 2k"} />

                <p>
                    Substitute back:
                </p>

                <Block math={"2b^2 = (2k)^2 = 4k^2"} />

                <Block math={"b^2 = 2k^2"} />

                <p>
                    This shows <Inline math={"b^2"} /> is also even, so <Inline math={"b"} /> is even.
                </p>

                <p>
                    But now both <Inline math={"a"} /> and <Inline math={"b"} /> are even.
                    That means the fraction was <b>not</b> fully simplified.
                </p>

                <p>
                    This is a contradiction.
                </p>

                <p>
                    Therefore:
                </p>

                <Block math={"\\sqrt{2} \\text{ is irrational.}"} />

                <p>
                    So we cannot write it exactly as a fraction.
                    But can we approximate it?
                </p>


                <h2>3. How Can We Approximate <Inline math={"\\sqrt{S}"} />?</h2>

                <p>
                    Suppose we want to compute:
                </p>

                <Block math={"\\sqrt{S}"} />

                <p>
                    where <Inline math={"S"} /> is a positive number.
                </p>

                <p>
                    We want a number <Inline math={"x"} /> such that:
                </p>

                <Block math={"x^2 = S"} />

                <h3>Geometric Idea</h3>

                <p>
                    Think about a square with area <Inline math={"S"} />.
                    The side length of that square must be <Inline math={"\\sqrt{S}"} />.
                </p>

                <p>
                    But suppose we guess a value <Inline math={"x_n"} />.
                </p>

                <p>
                    Then a rectangle with sides:
                </p>

                <Block math={"x_n \\quad \\text{and} \\quad \\frac{S}{x_n}"} />

                <p>
                    has area exactly <Inline math={"S"} />.
                </p>

                <p>
                    If <Inline math={"x_n"} /> is too large, then 
                    <Inline math={"\\frac{S}{x_n}"} /> is too small.
                </p>

                <p>
                    If <Inline math={"x_n"} /> is too small, then 
                    <Inline math={"\\frac{S}{x_n}"} /> is too large.
                </p>

                <p>
                    So what should we do?
                </p>

                <p>
                    A natural idea is to take the average of the two:
                </p>

                <Block math={"x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{S}{x_n}\\right)"} />

                <p>
                    This is called the <b>Babylonian Method</b>.
                </p>

                <p>
                    It was discovered thousands of years ago —
                    long before modern algebra and calculus existed!
                </p>

                <div className="image-center">
                    <img alt="animation" />
                    {/* Placeholder for geometric diagram of square vs rectangle */}
                </div>


                <h2>4. Hands-on Demo</h2>

                <p>
                    Let's approximate:
                </p>

                <Block math={"\\sqrt{2}"} />

                <p>
                    Start with an initial guess:
                </p>

                <Block math={"x_0 = 1"} />

                <p>
                    Apply the formula:
                </p>

                <Block math={"x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{2}{x_n}\\right)"} />

                <p>
                    First iteration:
                </p>

                <Block math={"x_1 = \\frac{1}{2}(1 + 2/1) = 1.5"} />

                <p>
                    Second iteration:
                </p>

                <Block math={"x_2 = \\frac{1}{2}(1.5 + 2/1.5) = 1.4167"} />

                <p>
                    Third iteration:
                </p>

                <Block math={"x_3 \\approx 1.4142157"} />

                <p>
                    Compare with:
                </p>

                <Block math={"\\sqrt{2} \\approx 1.41421356"} />

                <p>
                    After just three steps, we are already extremely close!
                </p>

                <h3>Exercise (Programming)</h3>

                <p>
                    Implement the Babylonian method.
                    Write a function that:
                </p>

                <ul>
                    <li>Takes <Inline math={"S"} /> and an initial guess</li>
                    <li>Repeats the update rule</li>
                    <li>Stops when the change becomes very small</li>
                </ul>
<details>
<summary><b>Solution</b></summary>
                <SyntaxHighlighter language="python" style={oneDark}>
{`def babylonian_sqrt(S, x0, tolerance=1e-10, max_iter=100):
    x = x0
    for _ in range(max_iter):
        next_x = 0.5 * (x + S / x)
        if abs(next_x - x) < tolerance:
            return next_x
        x = next_x
    return x

print(babylonian_sqrt(2, 1.0))`}
                </SyntaxHighlighter>
</details>
<br></br>
<h3>Exercise 2 (Plotting)</h3>
<p>
Iterate over all irrational numbers 
of the form <Inline math={"\\sqrt{N}"} />, 
where <Inline math="N" /> is a natural number 
satisfying <Inline math="2 \leq N \leq 10{,}000" /> and <Inline math="N" /> is 
not a perfect square.  
</p>
<p>
For each <Inline math="N" />, approximate 
<Inline math={"\\sqrt{N}"} /> with an absolute error 
less than <Inline math="10^{-5}" />.  
</p>
<p>
Measure the number of iteration counts required for each approximation, 
and plot the number of counts (y-axis) over <Inline math="N" />.
</p>
<p>
    Upon completion, you should get a plot like this:
</p>
<div className='image-center'>
    <img src="/images/articles/math_comp/log_bab.png" />
    <figcaption>
    If you analyze the algorithm's "complexity,"
    you realize that Babylonian method has <Inline math="O(\log N)" />.
    This graph depicts the runtime follows a logarithmic growth.
    </figcaption>

</div>

                <h2>5. What Is Convergence?</h2>

                <p>
                    When we repeat a process again and again, sometimes the results
                    begin to settle down toward a fixed value.
                </p>

                <p>
                    This idea is called <b>convergence</b>.
                </p>

                <p>
                    A sequence of numbers:
                </p>

                <Block math={"x_0, x_1, x_2, x_3, \\dots"} />

                <p>
                    is said to <b>converge</b> if the values get closer and closer to
                    some number.
                </p>

                <p>
                    For example, in our approximation of <Inline math={"\\sqrt{2}"} />:
                </p>

                <Block math={"1"} />
                <Block math={"1.5"} />
                <Block math={"1.4167"} />
                <Block math={"1.4142157"} />
                <Block math={"1.41421356\\dots"} />

                <p>
                    These values are getting closer and closer to:
                </p>

                <Block math={"\\sqrt{2} \\approx 1.41421356\\dots"} />

                <h3>How Do We Know It Converges?</h3>

                <p>
                    Let's think about what the formula does:
                </p>

                <Block math={"x_{n+1} = \\frac{1}{2}\\left(x_n + \\frac{S}{x_n}\\right)"} />

                <p>
                    If <Inline math={"x_n"} /> is too large, then 
                    <Inline math={"\\frac{S}{x_n}"} /> is too small.
                </p>

                <p>
                    If <Inline math={"x_n"} /> is too small, then 
                    <Inline math={"\\frac{S}{x_n}"} /> is too large.
                </p>

                <p>
                    Taking the average pulls the value toward the correct balance.
                </p>

                <p>
                    In fact, once the guess becomes reasonably close,
                    the number of correct digits roughly <b>doubles</b> each step!
                </p>

                <p>
                    This is why the Babylonian method converges very quickly.
                </p>

                <h3>Fixed Point Idea (Simple Version)</h3>

                <p>
                    Suppose the sequence has already reached the exact value.
                    That means:
                </p>

                <Block math={"x_{n+1} = x_n = x"} />

                <p>
                    Then the formula becomes:
                </p>

                <Block math={"x = \\frac{1}{2}\\left(x + \\frac{S}{x}\\right)"} />

                <p>
                    Multiply both sides by 2:
                </p>

                <Block math={"2x = x + \\frac{S}{x}"} />

                <p>
                    Rearranging:
                </p>

                <Block math={"x = \\frac{S}{x}"} />

                <p>
                    Multiply both sides by <Inline math={"x"} />:
                </p>

                <Block math={"x^2 = S"} />

                <p>
                    So the only stable value of this process is:
                </p>

                <Block math={"x = \\sqrt{S}"} />

                <p>
                    This explains why the method naturally moves toward the square root.
                </p>



<hr />
                <h3>Exercise: Visualizing Convergence</h3>

                <p>
                    To really understand convergence, it helps to see it.
                </p>

                <p>
                    Write a program that:
                </p>

                <ul>
                    <li>Stores each approximation</li>
                    <li>Takes the absolute difference between the approximated and true values</li>
                    <li>Plots the differences</li>
                </ul>

                <h3>Step 1: Collect the Iterations</h3>

<details> <summary><b>Solution</b></summary>
                <SyntaxHighlighter language="python" style={oneDark}>
{`import math

def babylonian_steps(S, x0, steps=10):
    x = x0
    values = [x]
    for _ in range(steps):
        x = 0.5 * (x + S / x)
        values.append(x)
    return values

values = babylonian_steps(2, 1.0, steps=8)
print(values)`}
                </SyntaxHighlighter>
</details> 

                <h3>Step 2: Plot the Convergence</h3>
<details> <summary><b>Solution</b></summary>
                <SyntaxHighlighter language="python" style={oneDark}>
{`import matplotlib.pyplot as plt

true_value = math.sqrt(2)

plt.plot(values, marker='o')
plt.axhline(true_value, linestyle='--')
plt.title("Convergence of Babylonian Method for sqrt(2)")
plt.xlabel("Iteration")
plt.ylabel("Approximation")
plt.show()`}
                </SyntaxHighlighter>
</details>
<br />
                <p>
                    Upon completion, you should get a plot like this:
                </p>


                <div className="image-center">
                    <img src="/images/articles/math_comp/conv_bab.png" />
                </div>

                <ul>
                    <li>The first guess far away</li>
                    <li>Each step getting closer</li>
                    <li>The graph flattening near the true value</li>
                </ul>


                <p>
                    See the error dropping extremely fast.
                </p>

                <p>
                    That is the power of (logarithmic) convergence.
                </p>
                <hr />


<h2>Optional: Density and Completeness</h2>

<p>
    We have seen that <Inline math={"\\sqrt{2}"} /> is irrational.
    That means it cannot be written as a fraction.
</p>

<p>
Both rationals and irrationals exist infinitely many.
</p>

<p>
    In fact, there are infinitely many rational numbers
    between any two numbers you choose.
</p>


<h3>Density of Rational Numbers</h3>

<p>
    Suppose we pick two numbers:
</p>

<Block math={"1 \\quad \\text{and} \\quad 2"} />

<p>
    Is there a rational number between them?
</p>

<p>
    Of course:
</p>

<Block math={"\\frac{3}{2} = 1.5"} />

<p>
    But we can do more.
</p>

<p>
    Between <Inline math={"1"} /> and <Inline math={"1.5"} />:
</p>

<Block math={"\\frac{5}{4} = 1.25"} />

<p>
    Between <Inline math={"1.25"} /> and <Inline math={"1.5"} />:
</p>

<Block math={"\\frac{9}{8} = 1.125"} />

<p>
    We can keep going forever.
</p>

<p>
    This idea is called <b>density</b>.
    A set is dense if:
</p>

<p><b>
    Between any two numbers, there is always another number from that set.
</b></p>

<p>
    Both rationals and irrationals are dense in the real numbers.
    Between any two numbers, there are:
</p>

<ul>
    <li>Infinitely many rational numbers</li>
    <li>Infinitely many irrational numbers</li>
</ul>


<h3>But Something Is Missing...</h3>

<p>
    If rational numbers are everywhere,
    Can't they represent everything?
</p>

<p>
    No — the key idea is called <b>completeness</b>.
</p>

<p>
    Let's look at our approximation sequence for 
    <Inline math={"\\sqrt{2}"} />:
</p>

<Block math={"1, \\; 1.5, \\; 1.4167, \\; 1.4142157, \\dots"} />

<p>
    Every number in this list is rational.
</p>

<p>
    But where it is converging to is <Inline math={"\\sqrt{2}"} />,
    and that number is not rational.
</p>

<p>
    So inside the rational numbers alone,
    this sequence gets closer and closer to something —
    but never actually reaches a rational limit.
</p>

<p>
    In other words:
</p>

<ul>
    <li>The rational numbers are dense.</li>
    <li>But they are not complete.</li>
</ul>

<p>
    There are “holes” in the rational number system.
</p>

<p>
    Irrational numbers fill those holes.
</p>

<p>
    This idea — completeness — is one of the foundations of modern mathematics.
</p>


                <hr />

                <h2>Conclusion</h2>
                <p>This article covered</p>
                <ul>
                    <li>What irrational numbers are</li>
                    <li>Why <Inline math={"\\sqrt{2}"} /> is irrational</li>
                    <li>How ancient mathematicians approximated square roots</li>
                    <li>What convergence means</li>
                    <li>How to visualize convergence using programming</li>
                    <li>Completeness</li>
                </ul>

                <p>
                    Even though we can never write <Inline math={"\\sqrt{2}"} /> exactly as a fraction,
                    we can approximate it as closely as we like.
                </p>

                <p>
                    That is one of the beautiful ideas in mathematics:
                    infinite precision can be approached through finite steps.
                </p>


            </div>
        </div>
    );
}