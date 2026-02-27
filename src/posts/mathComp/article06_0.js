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

                <h3>Allowed Operations (Elementary Row Operations)</h3>

                <ul>
                    <li>Multiply an equation by a nonzero scalar</li>
                    <li>Swap two equations</li>
                    <li>Add a multiple of one equation to another</li>
                </ul>
<p>
    The first two are straightforward.
    If we multiply both sides by a nonzero scalar, we are simply scaling the equation,
    and the equality remains unchanged.
    Swapping the order of the equations also does not affect the solution,
    although it may influence clarity or readability
    (this becomes especially important in Gaussian elimination).
</p>

<p>
    What about the second operation? This is actually quite natural operation.
    You can add two true equalities into one. 
    Consider a situation that you get 2 apples and 3 oranges per day, how many fruits do you "have" for each day, given you initially have none?
    You think of <Inline math="5x"/> because you computed <Inline math="2x+3x"/>, 
    but this is already a addition of 2 lines.
</p><p>
    Since <Inline math="x" /> and <Inline math="y" /> are shared across the equations,
    any solution that satisfies both original equations must also satisfy
    any linear combination of them.
</p>

<p>
    Consider two lines. If 
</p>

                <p>
                    These operations do not change the solution set.
                </p>

                <h2>3. Solving and Visualizing with SymPy</h2>

                <h3>Symbolic Solution</h3>

                <SyntaxHighlighter language="python" style={oneDark}>
{`from sympy import symbols, Eq, solve

x, y = symbols('x y')

a, b, c, d, e, f = symbols('a b c d e f')

eq1 = Eq(a*x + b*y, e)
eq2 = Eq(c*x + d*y, f)

solution = solve((eq1, eq2), (x, y))

print(solution)`}
                </SyntaxHighlighter>

                <p>
                    SymPy automatically computes the symbolic solution.
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

plt.show()`}
                </SyntaxHighlighter>

                <p>
                    The intersection of the two lines is the solution.
                </p>

                <h2>4. Consistency and Dependency</h2>

                <p>
                    A system is <strong>consistent</strong> if it has at least one solution.
                </p>

                <p>
                    There are three possibilities:
                </p>

                <ul>
                    <li>One unique solution (lines intersect once)</li>
                    <li>Infinitely many solutions (lines coincide)</li>
                    <li>No solution (parallel distinct lines)</li>
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
                    Therefore:
                </p>

                <Block math={String.raw`
ad - bc \neq 0
`} />

                <p>
                    implies a unique solution.
                </p>

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
                    is called the determinant.
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
                    in this simple 2×2 system.
                </p>

            </div>
        </div>
    );
}