import '../../css/post.css';
import { MathJax } from "better-react-mathjax";


export const title = "Dot Products and Matrices";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <MathJax>
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="body">

                <p>
                    This article introduces what a matrix is. First, consider the following system of equations:
                </p>

                <div className="latex-center" style={{ textAlign: 'center' }}>
                    {String.raw`$$
                    \begin{aligned}
                    x_1 + 2x_2 + 3x_3 &= 1 \\
                    2x_1 + 3x_2 + 6x_3 &= 0 \\
                    3x_1 + 2x_2 + x_3 &= -1
                    \end{aligned}
                    $$`}
                </div>

                <p>
                    We can view this as a collection of vectors. Each variable \( x_1, x_2, x_3 \) is an element of a vector, and we have three equations with different coefficients.
                    First, let’s define the dot product as follows:
                </p>

                <div className="latex-center" style={{ textAlign: 'center' }}>
                    {String.raw`$$
                    \vec{a} \cdot \vec{b}
                    =
                    \sum_{i=1}^n a_i b_i
                    =
                    \begin{pmatrix} a_1 & \dots & a_n \end{pmatrix}
                    \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix}
                    $$`}
                </div>

                <p>
                    If we let the column vector \( b \) represent unknown variables, the above becomes a linear equation with \( n \) variables.
                    If we have multiple such equations with a fixed vector \( b \), we get a <b>system of equations</b>:
                </p>

                <div className="latex-center" style={{ textAlign: 'center' }}>
                    {String.raw`$$
                    \begin{pmatrix} a_{1,1} & \dots & a_{1,n} \end{pmatrix}
                    \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = M_1
                    \\
                    \begin{pmatrix} a_{2,1} & \dots & a_{2,n} \end{pmatrix}
                    \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = M_2
                    $$`}
                </div>

                <p>
                    This can be written more compactly by stacking the row vectors:
                </p>

                <div className="latex-center" style={{ textAlign: 'center' }}>
                    {String.raw`$$
                    \begin{pmatrix} 
                    a_{1,1} & \dots & a_{1,n} \\
                    a_{2,1} & \dots & a_{2,n}
                    \end{pmatrix}
                    \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} 
                    =
                    \begin{pmatrix} M_1 \\ M_2 \end{pmatrix}
                    $$`}
                </div>

                    {`By stacking row vectors, we form a matrix $A$, enabling us to write the system in the linear form $Ax = b$ where $A \\in \\mathbb{R}^{2 \\times n}$ and $b \\in \\mathbb{R}^2$ in this case.`}




                <p>
                    In the next article, we will solve for \( x \) using Gaussian elimination.
                </p>
            </div>
        </div>
        </MathJax>
    );
}
