import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const title = "SymPy: System of Equations";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <h2>1. Introduction</h2>
                <p>
                    Systems of equations appear everywhere in mathematics,
                    science, and engineering. Whenever two quantities must satisfy
                    multiple conditions at once, we are solving a system.
                </p>
                {/* <p>
                    In this article, we will:
                </p>
                <ul>
                    <li>Understand systems geometrically as intersections of lines</li>
                    <li>Learn the allowed algebraic operations</li>
                    <li>Visualize solutions using matplotlib</li>
                    <li>Study consistency and dependency</li>
                    <li>Connect everything to determinants</li>
                </ul> */}

                <h2>2. Linear Systems in Two Variables</h2>

                <p>
                    A general linear equation in two variables looks like:
                </p>

                <Block math={String.raw`ax + by = c`} />

                <p>
                    If <Inline math="b \neq 0" />, we can rewrite it as:
                </p>

                <Block math={String.raw`y = -\frac{a}{b}x + \frac{c}{b}`} />

                <p>
                    Recall that this is a line, i.e. linear function. 
                    Therefore, a system of two equations represents
                    two lines.
                    Consider the system:
                </p>

                <Block math={String.raw`
\begin{aligned}
a x + b y &= e \\
c x + d y &= f
\end{aligned}
`} />

                <p>
                    Since both lines share the same <Inline math="x"/> and <Inline math="y"/>,
                    the solution (<Inline math="x"/>, <Inline math="y"/>)
                    must be their intersection point.
                </p>

<h3>Visualization with matplotlib</h3>

                <SyntaxHighlighter language="python" style={oneDark}>
{`import numpy as np
import matplotlib.pyplot as plt

# Example numeric system
# 2x + y = 5
# x - y = 1

x_vals = np.linspace(-5, 5, 400)

y1 = 5 - 2*x_vals
y2 = x_vals - 1

plt.plot(x_vals, y1)
plt.plot(x_vals, y2)

plt.axhline(0)
plt.axvline(0)
# will show that the intersection point = the solution to the system
plt.show()`}
                </SyntaxHighlighter>


                <h3>Allowed Operations (Elementary Row Operations)</h3>
<p> That means, the following operations do not change the solution set: </p>
                <ul>
                    <li>Multiply an equation by a nonzero scalar</li>
                    <li>Swap two equations</li>
                    <li>Add (a multiple of) one equation to another</li>
                </ul>
<p>
    The first two are straightforward.
    If we multiply both sides by a nonzero scalar, we are simply scaling the equation 
    (only the coefficient parts change), and the solution remains unchanged.
    Swapping the order of the equations also does not affect the solution
    but clarity or readability
    (this becomes especially important in Gaussian elimination).
</p>

<p>
    What about the second operation? 
    If you add two true equalities into one, 
    this addition has nothing to do with solutions, too. 
    Since <Inline math="x" /> and <Inline math="y" /> are shared across the equations,
    any solution that satisfies both original equations must also satisfy
    any linear combination of them:
    <Block math={String.raw`
(c + ka)x + (d + kb)y = f + ke
`} />
</p>
<p>
If you just want to verify that numerically, 
consider a situation that you get 2 apples and 3 oranges per day. 
How many fruits do you "have" for each day, given you initially have none?
    You think of <Inline math="5x"/> because you computed <Inline math="2x+3x"/>, 
    but this is already a addition of 2 lines, and your intuition is actually correct.
</p>

<h2>3. Solving and Visualizing with SymPy</h2>

<h3>A Numerical Example (Step-by-Step)</h3>

<p>
    Consider the system:
</p>

<Block math={String.raw`
\begin{aligned}
2x + y &= 5 \\
x - y &= 1
\end{aligned}
`} />

<p>
    We'd like to eliminate <Inline math="x" /> or <Inline math="y" /> from 
    the first line using row scaling and row addition,
    because solving one equation in one variable is simpler
    than solving two equations in two variables.
</p>

<h4>Step 1: Eliminate one variable</h4>

<p>
    The coefficients of <Inline math="y" /> are already
    <Inline math="+1" /> and <Inline math="-1" />.
    This suggests adding the equations to eliminate <Inline math="y" />.
</p>

<Block math={String.raw`
(2x + y) + (x - y) = 5 + 1
`} />

<Block math={String.raw`
3x = 6
`} />

<p>
    The variable <Inline math="y" /> disappears.
    That is exactly why we chose addition.
</p>

<h4>Step 2: Solve for the remaining variable</h4>

<Block math={String.raw`
x = 2
`} />

<p>
    Now that we know <Inline math="x" />,
    we substitute it back into one of the original equations.
    This works because any solution must satisfy both equations.
</p>

<h4>Step 3: Substitute back</h4>

<Block math={String.raw`
2(2) + y = 5
`} />

<Block math={String.raw`
4 + y = 5
`} />

<Block math={String.raw`
y = 1
`} />

<p>
    Therefore, the solution is:
</p>

<Block math={String.raw`
(x, y) = (2, 1)
`} />

<h3>Summary of the Process</h3>

<ol>
    <li>Use row operations to eliminate one variable.</li>
    <li>Solve the resulting single-variable equation.</li>
    <li>Substitute the value back into one original equation.</li>
    <li>State the ordered pair solution.</li>
    <li>Optionally verify in the second equation.</li>
</ol>

<h3>Exercise:</h3>
<p>Solve the systems:</p>
    <div className='image-center'>
        <img src="/images/articles/math_comp/sysEx.png" alt="sys img" />
    </div>

<h3>Python for the Algebra</h3>

<p>
    Python provides SymPy library that handles symbolic manipulation.
    Let us explore how we can apply that to solving system of equations.
</p>

<h3>Symbolic Solution for 2D System</h3>
<p>We again use the system</p>
<Block math={String.raw`
\begin{aligned}
2x + y &= 5 \\
x - y &= 1
\end{aligned}
`} />

<p>You can solve the system in Python with exact precision using the following code:</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`from sympy import symbols, Eq, solve

x, y = symbols('x y')

# Define the equations
eq1 = Eq(2*x + y, 5) # 2x+y=5
eq2 = Eq(x - y, 1) # x-y=1

# Solve for x and y in the system formed by eq1 and eq2
solution = solve((eq1, eq2), (x, y)) 

# Print the solutions
print(f"x = {solution[x]}")
print(f"y = {solution[y]}")`}
</SyntaxHighlighter>

<p>You may try to extend this code to 3D or include variables.</p>

                <h2>4. Consistency and Dependency</h2>

            <p>
                A system is <strong>consistent</strong> if it has at least one solution.
            </p>

            <p>
                There are three possibilities:
            </p>

            <ul>
                <li>One unique solution (lines intersect once i.e. the system is <b>independent + consistent</b>)</li>
                <li>Infinitely many solutions (lines coincide i.e. the system is <b>dependent</b>)</li>
                <li>No solution (parallel distinct lines i.e. the system is <b>inconsistent</b>)</li>
            </ul>

            <p>
                Infinitely many solutions occur when one equation
                is a scalar multiple of the other:
            </p>
                <Block math={String.raw`
a x + b y = e
`} />

                <Block math={String.raw`
k a x + k b y = k e
`} />

                <p>
                    These represent the same line.
                </p>
            <p>
                No solution occurs when the equations have proportional coefficients
                but different constant terms (The term <Inline math="b" /> in <Inline math="y=mx+b" />).
            </p>

<h3>Exercise:</h3>
<p>
    Create your own two <Inline math="2\times 2" /> consistent systems. 
    Verify that they both have unique solutions.
    Similarly, create two <Inline math="2\times 2" /> dependent and inconsistent systems.

</p>

                <h2>5. When Is There a Unique Solution?</h2>

                <p>
                    Consider again:
                </p>

                <Block math={String.raw`
\begin{aligned}
a x + b y &= e \\
c x + d y &= f
\end{aligned}
`} />

<p>
Try to show that, for a <Inline math="2\times 2" /> system,
nonzero <Inline math="ad-bc" /> implies that 
the system has a unique solution, and/or its converse that 
the existence of a unique solution implies <Inline math="ad-bc\neq 0" />.
</p>

<details>
<summary><b>Solution</b></summary>
            <p>
                Solve using elimination.
            </p>

            <p>
                Multiply the first equation by <Inline math="d" /> and
                the second by <Inline math="b" />:
            </p>

                <Block math={String.raw`
\begin{aligned}
a d x + b d y &= d e \\
b c x + b d y &= b f
\end{aligned}
`} />

                <p>
                    Subtract:
                </p>

                <Block math={String.raw`
(ad - bc)x = de - bf
`} />

                <p>
                    If <Inline math="ad - bc \neq 0" />, then:
                </p>

                <Block math={String.raw`
x = \frac{de - bf}{ad - bc}
`} />

                <p>
                    A similar formula holds for <Inline math="y" />.
                </p>

                <p>
                    <Inline math="x" /> is wel-defined 
                    unless the denominator is zero. Hence, 
                </p>

<Block math={String.raw`
ad - bc \neq 0
`} />

                <p>
                    implies a unique solution.
                </p>
</details>

                <h2>6. Determinant of a 2×2 System</h2>

                <p>
                    The expression:
                </p>

                <Block math={String.raw`
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
= ad - bc
`} />

                <p>
                    is called the determinant (of a 2D system).
                </p>

                <p>
                    The determinant measures whether the system is invertible.
                </p>

                <ul>
                    <li>If determinant ≠ 0 → unique solution</li>
                    <li>If determinant = 0 → no solution or infinitely many</li>
                </ul>

                <p>
                    In fact, the solution formulas can be written as:
                </p>

                <Block math={String.raw`
x =
\frac{
\begin{vmatrix}
e & b \\
f & d
\end{vmatrix}
}{
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
}
`} />

                <Block math={String.raw`
y =
\frac{
\begin{vmatrix}
a & e \\
c & f
\end{vmatrix}
}{
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix}
}
`} />

                <p>
                    This is known as Cramer's Rule.
                </p>

<h3>Exercise</h3>
<p>
Write a code to compute the 
determinant of <Inline math="2\times 2" /> and <Inline math="3\times 3" /> using SymPy.
You may want to use <code>sol.denom</code> property to output where <code>sol = solve(...)</code>.
</p>
<details>
    <summary><b>Solution</b></summary>
<SyntaxHighlighter language="python" style={oneDark}>
{`from sympy import symbols, Eq, solve

x, y = symbols('x y')

a, b, c, d, e, f = symbols('a b c d e f')

eq1 = Eq(a*x + b*y, e)
eq2 = Eq(c*x + d*y, f)

solution = solve((eq1, eq2), (x, y))

print(solution)
sol_x1 = simplify(solution[x1])
print("Determinant = Denominator of a solution =", sol_x1.denom)
`}
</SyntaxHighlighter>
</details>
                <h2>Conclusion</h2>

                <p>
                    A system of two equations represents two lines.
                    Their intersection determines the solution.
                </p>

                <p>
                    The determinant <Inline math="ad - bc" /> tells us
                    whether that intersection exists uniquely.
                </p>

                <p>
                    Algebra, geometry, and computation all connect beautifully
                    in simple system of equations.
                </p>

            </div>
        </div>
    );
}