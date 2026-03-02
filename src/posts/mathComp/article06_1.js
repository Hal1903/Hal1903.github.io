import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const title = "System of Equations II";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <h2>1. What is a Vector?</h2>

                <p>
                    A <strong>vector</strong> is a mathematical object that has both
                    magnitude (length) and direction.
                </p>

                <p>
                    In two dimensions, we usually write a vector like this:
                </p>

                <Block math={`\\vec{v} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}`} />

                <p>
                    This means: move 2 units in the x-direction,
                    and 1 unit in the y-direction.
                </p>

                <p>
                    We can visualize a vector as an arrow starting from the origin.
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`import matplotlib.pyplot as plt

plt.quiver(0, 0, 2, 1, angles='xy', scale_units='xy', scale=1)
plt.xlim(-1, 4)
plt.ylim(-1, 4)
plt.axhline(0)
plt.axvline(0)
plt.gca().set_aspect('equal')
plt.show()`}
                </SyntaxHighlighter>

                <p>
                    The arrow represents the vector 
                    <Inline math={`(2,1)`} />.
                </p>

                <hr/>

                <h2>2. Vector Addition</h2>

                <p>
                    If we have two vectors:
                </p>

                <Block math={`\\vec{a} = \\begin{pmatrix}2 \\\\ 1\\end{pmatrix}, 
                \\quad
                \\vec{b} = \\begin{pmatrix}3 \\\\ 2\\end{pmatrix}`} />

                <p>
                    Their sum is computed component-wise:
                </p>

                <Block math={`\\vec{a} + \\vec{b}
                =
                \\begin{pmatrix}
                2+3 \\\\
                1+2
                \\end{pmatrix}
                =
                \\begin{pmatrix}
                5 \\\\
                3
                \\end{pmatrix}`} />

                <p>
                    Geometrically, we place one arrow at the tip of the other 
                    (the example code uses different vectors).
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`import matplotlib.pyplot as plt

plt.quiver(0, 0, 3, 1, angles='xy', scale_units='xy', scale=1)
plt.quiver(3, 1, 3, 3, angles='xy', scale_units='xy', scale=1)
plt.quiver(0, 0, 6, 4, angles='xy', scale_units='xy', scale=1, color='red')

plt.xlim(-1, 7)
plt.ylim(-1, 5)
plt.axhline(0)
plt.axvline(0)
plt.gca().set_aspect('equal')
plt.show()`}
                </SyntaxHighlighter>

                <div className="image-center">
                    <img src="/images/articles/math_comp/vec_add.png" />
                </div>

                <p>
                    The final arrow from the origin is their sum.
                </p>

                <hr/>

                <h2>3. A System as Two Vectors</h2>

                <p>
                    Consider the system:
                </p>

                <Block math={`\\begin{cases}
                2x + 3y = 1 \\\\
                x + 2y = 0
                \\end{cases}`} />

                <p>
                    Notice something interesting.
                    We can rewrite it by grouping x and y:
                </p>

                <Block math={`x \\begin{pmatrix}2 \\\\ 1\\end{pmatrix}
                +
                y \\begin{pmatrix}3 \\\\ 2\\end{pmatrix}
                =
                \\begin{pmatrix}1 \\\\ 0\\end{pmatrix}`} />

                <p>
                    The two column vectors are:
                </p>

                <Block math={`\\vec{v}_1 = \\begin{pmatrix}2 \\\\ 1\\end{pmatrix}, 
                \\quad
                \\vec{v}_2 = \\begin{pmatrix}3 \\\\ 2\\end{pmatrix}`} />

                <p>
                    Solving the system means:
                </p>

                <p>
                    <strong>
                        Can we combine these two arrows (by scaling them with x and y)
                        to land exactly on the vector 
                        <Inline math={`(1,0)`} />?
                    </strong>
                </p>

                <hr/>

                <h2>4. Linear Combination and Column Space</h2>

                <p>
                    A <strong>linear combination</strong> of two vectors means:
                </p>

                <Block math={`x\\vec{v}_1 + y\\vec{v}_2`} />

                <p>
                    where x and y are just numbers.
                </p>

                <p>
                    If we vary x and y freely, we can reach many points in the plane.
                </p>

                <p>
                    The set of all possible linear combinations 
                    of <Inline math={`\\vec{v}_1`} /> and <Inline math={`\\vec{v}_2`} /> is
                    called their <strong>column space</strong>.
                </p>

                <p>
                    In simple words:
                </p>

                <p>
                    It is the collection of all places we can reach
                    by mixing those two arrows.
                </p>

                <p>
                    Solving the system means checking 
                    whether <Inline math={`(1,0)`} /> lies inside that reachable set.
                </p>

<h3>
    Numerical Demonstration
</h3>
<p>
If you solve the system, you get (2, -1) as a solution, hence
</p>

<Block math={`2\\begin{pmatrix}2\\\\1\\end{pmatrix}
-
1\\begin{pmatrix}3\\\\2\\end{pmatrix}
=
\\begin{pmatrix}1\\\\0\\end{pmatrix}`} />

<p>
Geometrically, we first 
stretch <Inline math={`\\vec{v}_1`} /> by 2, 
which gives the vector <Inline math={`(4,2)`} />.
</p>

<p>
Then we stretch <Inline math={`\\vec{v}_2`} /> by -1, 
which reverses its direction and gives <Inline math={`(-3,-2)`} />.
</p>

<p>
Adding those two arrows head-to-tail produces
</p>

<Block math={`(4,2) + (-3,-2) = (1,0)`} />

<div className="image-center">
    <img src="/images/articles/math_comp/colspace.png" />
</div>

<p>
So the target vector 
<Inline math={`(1,0)`} />
is indeed a linear combination of the two column vectors.
</p>

<p>
This means:
</p>

<p>
<strong>
The vector (1,0) lies inside the column space.
</strong>
</p>

<p>
And that tells us something important about the system:
</p>

<p>
If the right-hand side vector lies inside the column space,
then the system has at least one solution.
</p>

<p>
If it lies outside that space,
then no combination of the columns can produce it,
and the system is inconsistent.
</p>

<p>
So solving a linear system is really a geometric question:
</p>

<p>
<strong>
Can the target vector be built from the column vectors?
</strong>
</p>

<h3>Exercise 1:</h3>
<p>
Write a code to produce the figure above.
You may just modify and add several lines to the code introduced earlier.
</p>

{/* <h3>Exercise 2:</h3>
<p>

</p> */}


                <hr/>

            <h2>5. A System as an Action on a Vector</h2>

            <p>
                We can write the system in matrix form:
            </p>

            <Block math={`A =
            \\begin{pmatrix}
            2 & 3 \\\\
            1 & 2
            \\end{pmatrix}`} />

            <p>
                and
            </p>

            <Block math={`A
            \\begin{pmatrix}
            x \\\\
            y
            \\end{pmatrix}
            =
            \\begin{pmatrix}
            1 \\\\
            0
            \\end{pmatrix}`} />

            <p>
                The matrix A acts on the vector 
                <Inline math={`(x,y)`} />
                and produces a new vector.
            </p>

            <p>
                So a system of equations is simply:
            </p>

            <p>
                <strong>
                    Find an input vector that the matrix transforms
                    into the target vector.
                </strong>
            </p>

<h3>Multiplication Procedure</h3>

<p>
How does a matrix multiply a vector?
It is simply a structured way of computing
linear combinations!
</p>

<p>
Given
</p>

<Block math={`A =
\\begin{pmatrix}
2 & 3 \\\\
1 & 2
\\end{pmatrix}`} />

<p>
and a vector
</p>

<Block math={`\\vec{v} =
\\begin{pmatrix}
x \\\\
y
\\end{pmatrix}`} />

<p>
the multiplication <Inline math={`A\\vec{v}`} /> is performed row by row.
</p>

<p>
First row:
</p>

<Block math={`2x + 3y`} />

<p>
Second row:
</p>

<Block math={`1x + 2y`} />

<p>
So
</p>

<Block math={`A
\\begin{pmatrix}
x \\\\
y
\\end{pmatrix}
=
\\begin{pmatrix}
2x + 3y \\\\
x + 2y
\\end{pmatrix}`} />

<hr />

<h3>Numerical Example</h3>

<p>
Let's see an actual computation.
Take
</p>

<Block math={`\\vec{v} =
\\begin{pmatrix}
1 \\\\
2
\\end{pmatrix}`} />

<p>
Now multiply:
</p>

<Block math={`A
\\begin{pmatrix}
1 \\\\
2
\\end{pmatrix}
=
\\begin{pmatrix}
2(1) + 3(2) \\\\
1(1) + 2(2)
\\end{pmatrix}`} />

<Block math={`=
\\begin{pmatrix}
8 \\\\
5
\\end{pmatrix}`} />

<p>
So the matrix transforms the input vector <Inline math={`(1,2)`} />
into the output vector <Inline math={`(8,5)`} />.
</p>


<p>
Another way to think about this is:
the matrix takes the vector's coordinates
and forms new coordinates using linear combinations
of its components.
</p>

<p>
Putting it formally, this is why 
solving a system <Inline math={`A\\vec{x} = \\vec{b}`} /> means:
</p>

<p>
<strong>
Find the vector whose image under this 
transformation equals <Inline math={`\\vec{b}`} />.
</strong>
</p>

<h3>Exercise:</h3>
Check <code>numpy</code> library and learn 
how you can compute the matrix-vector multiplicaiton using Python.


<hr/>

<h2>6. Composition of Two Systems</h2>

<p>
Before talking about matrices, let's think about composition the way
we first learned it — as <strong>substitution</strong>, just like function composition.
</p>

<p>
Suppose we have two systems:
</p>

<Block math={`\\text{System 1:}`} />
<Block math={`\\begin{cases}
y_1 = 2x_1 + x_2 \\\\
y_2 = x_1 + 3x_2
\\end{cases}`} />

<Block math={`\\text{System 2:}`} />
<Block math={`\\begin{cases}
z_1 = y_1 - y_2 \\\\
z_2 = 4y_1 + y_2
\\end{cases}`} />

<p>
The first system transforms <Inline math="\vec{x}" /> into <Inline math="\vec{y}" />.
The second system transforms <Inline math="\vec{y}" /> into <Inline math="\vec{z}" />.
</p>

<p>
To perform both steps, we simply substitute the expressions for 
<Inline math="y_1" /> and <Inline math="y_2" /> into the second system.
</p>

<p>
For example:
</p>

<Block math={`z_1 = y_1 - y_2`} />

<p>
Substitute:
</p>

<Block math={`z_1 = (2x_1 + x_2) - (x_1 + 3x_2)`} />

<Block math={`z_1 = x_1 - 2x_2`} />

<p>
Now for <Inline math="z_2" />:
</p>

<Block math={`z_2 = 4y_1 + y_2`} />

<Block math={`z_2 = 4(2x_1 + x_2) + (x_1 + 3x_2)`} />

<Block math={`z_2 = 9x_1 + 7x_2`} />

<p>
So doing both systems together gives a new single system:
</p>

<Block math={`\\begin{cases}
z_1 = x_1 - 2x_2 \\\\
z_2 = 9x_1 + 7x_2
\\end{cases}`} />

<p>
Notice what happened:
we didn't do anything mysterious —
we simply substituted one transformation into another.
This is exactly like function composition:
</p>

<Block math={`f(g(x))`} />



<h3>Matrix and Composition</h3>
<p>
Now let's write the same thing in matrix form.
</p>

<Block math={`A\\vec{x} = \\vec{y}`} />
<Block math={`B\\vec{y} = \\vec{z}`} />

<p>
Substituting the first equation into the second:
</p>

<Block math={`B(A\\vec{x}) = \\vec{z}`} />

<p>
By definition of matrix multiplication,
</p>

<Block math={`B(A\\vec{x}) = (BA)\\vec{x}`} />

<p>
So instead of performing two separate systems,
we can multiply the matrices first and obtain
a single combined transformation:
</p>

<Block math={`(BA)\\vec{x} = \\vec{z}`} />

<p>
Composition of linear systems corresponds exactly
to <strong>matrix multiplication</strong>.
Matrix multiplication is nothing more than organized substitution.
</p>
                <p>
                    That is why matrix multiplication is not random —
                    it represents doing one transformation after another.
                </p>

                <hr/>

                <h2>Summary</h2>

<ul>
    <li>A vector is an arrow (for now; in reality, it can signify many different objects).</li>
    <li>Scalar multiplication stretches or reverses an arrow.</li>
    <li>Vector addition combines arrows.</li>
    <li>A linear system asks whether a target vector can be built as a linear combination of the column vectors.</li>
    <li>The column space is the set of all reachable outputs.</li>
    <li>Matrix-vector multiplication performs that linear combination.</li>
    <li>Composing systems corresponds to multiplying matrices.</li>
</ul>


            </div>
        </div>
    );
}