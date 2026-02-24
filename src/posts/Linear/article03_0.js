import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Solving a System of Equations";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="body">

                {/* System of equations */}
                <div className="latex-center" style={{ textAlign: 'center' }}>
                    <Block math={`
\\begin{aligned}
x_1 + 2x_2 + 3x_3 &= 1 \\\\
2x_1 + 3x_2 + 6x_3 &= 0 \\\\
3x_1 + 2x_2 + x_3 &= -1
\\end{aligned}
                    `}/>
                </div>

                <div>
                    In a shorthand, we can describe it with an{" "}
                    <Inline math={`\\text{augmented matrix:}`}/>
                </div>

                {/* Augmented matrix */}
                <div className="latex-center" style={{ textAlign: 'center' }}>
                    <Block math={`
\\left(
\\begin{array}{ccc|c}
1 & 2 & 3 & 1 \\\\
2 & 3 & 6 & 0 \\\\
3 & 2 & 1 & -1
\\end{array}
\\right)
                    `}/>
                </div>

                <div>
                    omitting the <Inline math={`\\mathbf{x}`}/> variable specifications.
                    This is easier to see when we solve for each{" "}
                    <Inline math={`x_1, x_2, x_3`}/> or a whole <Inline math={`\\mathbf{x}`}/>.
                </div>

                <div>
                    To solve the system, we want a matrix in a form of:
                </div>

                {/* Row-reduced form */}
                <div className="latex-center" style={{ textAlign: 'center' }}>
                    <Block math={`
\\left(
\\begin{array}{ccc|c}
1 & 0 & 0 & b_1 \\\\
0 & 1 & 0 & b_2 \\\\
0 & 0 & 1 & b_3
\\end{array}
\\right)
                    `}/>
                </div>

                <div>
                    Recall the allowed operations on a system of equations. We could multiply a whole
                    equation by a scalar and add an equation to another equation. Additionally, swapping
                    two equations would not affect the system as a whole, which counts as an operation.
                    These can be translated to elementary matrix operations:
                    <ul>
                        <li>Multiply a row by a scalar</li>
                        <li>Add/subtract a row by another row</li>
                        <li>Swap two rows</li>
                    </ul>
                </div>

                <div>
                    Let's try a simple example. We first multiply the first row by 0.5 then subtract the
                    second row by the first row. Afterward, we scale the second row as well and subtract
                    the first row by the second, and we get the solution.
                </div>

                {/* Worked example */}
                <div className="latex-center" style={{ textAlign: 'center' }}>
                    <Block math={`
\\left(
\\begin{array}{cc|c}
2 & 2 & 4 \\\\
1 & 3 & 5
\\end{array}
\\right)
\\to
\\left(
\\begin{array}{cc|c}
1 & 1 & 2 \\\\
1 & 3 & 5
\\end{array}
\\right)
\\to
\\left(
\\begin{array}{cc|c}
1 & 1 & 2 \\\\
0 & 2 & 3
\\end{array}
\\right)
`}/>

<Block math={`
\\to
\\left(
\\begin{array}{cc|c}
1 & 1 & 2 \\\\
0 & 1 & 1.5
\\end{array}
\\right)
\\to
\\left(
\\begin{array}{cc|c}
1 & 0 & 0.5 \\\\
0 & 1 & 1.5
\\end{array}
\\right)
                    `}/>
                </div>
            </div>
            <br></br>
<details>
  <summary style={{ cursor: "pointer", fontWeight: "bold" }}>
    Exercise: Try to solve the system of equations given at the very beginning.
  </summary>

  {/* Step 1 */}
  <div className="latex-scroll">
    <Block math={String.raw`
\left(
\begin{array}{ccc|c}
1 & 2 & 3 & 1 \\
2 & 3 & 6 & 0 \\
3 & 2 & 1 & -1
\end{array}
\right)
\to
\left(
\begin{array}{ccc|c}
1 & 2 & 3 & 1 \\
0 & -1 & 0 & -2 \\
0 & -4 & -8 & -4
\end{array}
\right)
    `}/>
  </div>

  {/* Step 2 */}
  <div className="latex-scroll">
    <Block math={String.raw`
\left(
\begin{array}{ccc|c}
1 & 2 & 3 & 1 \\
0 & 1 & 0 & 2 \\
0 & -4 & -8 & -4
\end{array}
\right)
\to
\left(
\begin{array}{ccc|c}
1 & 0 & 3 & -3 \\
0 & 1 & 0 & 2 \\
0 & 0 & -8 & 4
\end{array}
\right)
    `}/>
  </div>

  {/* Step 3 */}
  <div className="latex-scroll">
    <Block math={String.raw`
\left(
\begin{array}{ccc|c}
1 & 0 & 3 & -3 \\
0 & 1 & 0 & 2 \\
0 & 0 & 1 & -\tfrac{1}{2}
\end{array}
\right)
\to
\left(
\begin{array}{ccc|c}
1 & 0 & 0 & -\tfrac{3}{2} \\
0 & 1 & 0 & 2 \\
0 & 0 & 1 & -\tfrac{1}{2}
\end{array}
\right)
    `}/>
  </div>
</details>

        </div>
    );
}
