import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Inverse and Rank of Matrix";
// export const category = "elementary_math";

export default function ArticleInverse() {
  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <p>
  Suppose we have vectors written as columns of a matrix. For example,
</p>

<Block math="A = \begin{pmatrix} 
1 & 2 & 3 \\\\ 
0 & 1 & 4 \\\\ 
0 & 0 & 0 
\end{pmatrix}" />

<p>
  To check if the columns are linearly <b>independent</b> or <b>dependent</b>, we check whether  
  one column can be written as a combination of the others.  
  In practice, this is the same as checking whether there is a nontrivial solution
  to <Inline math="Ax = 0" />.
</p>

<p>
  The test uses <b>row reduction</b> (Gaussian elimination). Every pivot column in
  the reduced form corresponds to an independent column of the original matrix.
</p>

<p>
  - If every column is a pivot column, then all columns are independent.  
  - If some column has no pivot, then it can be expressed using earlier pivot columns,
    so the set is dependent.
</p>

<h3>Rank of a Matrix</h3>

<p>
  The <b>rank</b> of a matrix is simply the number of pivot columns you get
  after row reducing. For example, in the matrix above there are 2 pivots,
  so <Inline math="\operatorname{rank}(A) = 2" />.
</p>

<p>
  Intuitively, the rank tells us how many columns carry “new information.”
  Extra columns without pivots are combinations of the pivot columns.
</p>



      <p>
        Once you know how matrix multiplication works, you may wonder about
        <b> inverses</b>. The <i>multiplicative inverse</i>{" "}
        <Inline math="e_1" /> of an element <Inline math="e_0" /> is an element
        such that <Inline math="e_1 e_0 = 1" />.
      </p>

      <p>
        For real numbers, division is defined in this way. If{" "}
        <Inline math="c_1, c_2 \in \mathbb{R}" />, then{" "}
        <Inline math="c_1 \div c_2 = c_1 \times \tfrac{1}{c_2} = c_1(c_2^{-1})" />
        . In particular, <Inline math="c_2 \cdot c_2^{-1} = 1" />.
      </p>

      <p>
        What about matrices? Does every matrix have an inverse?
      </p>

      <p>
        Notice that multiplying by <Inline math="1" /> does not change
        anything. That is why <Inline math="1" /> is called the{" "}
        <b>multiplicative identity</b>. The inverse can be seen as the
        operation that <i>undoes</i> another. For instance, when solving{" "}
        <Inline math="3x = 9" />, we multiply both sides by{" "}
        <Inline math="\tfrac{1}{3}" />, which is the inverse of{" "}
        <Inline math="3" />, to recover <Inline math="x = 3" />.
      </p>

      <p>
        For matrices, when solving <Inline math="Ax = b" /> (where{" "}
        <Inline math="A" /> and <Inline math="b" /> are known), we would like to
        solve for <Inline math="x" /> in the same way. This motivates the
        question: what is the identity element for matrices?
      </p>

      <h2>Identity Matrix</h2>
      <Block
        math={`I =
        \\begin{pmatrix}
        1 & 0 & 0 & \\dots & 0 \\\\
        0 & 1 & 0 & \\dots & 0 \\\\
        0 & 0 & 1 & \\dots & 0 \\\\
        \\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\
        0 & 0 & 0 & \\dots & 1
        \\end{pmatrix} \\in \\mathbb{R}^{n \\times n}`}
      />

      <p>
        Suppose we have matrices <Inline math="A, B" /> with{" "}
        <Inline math="AB = I" />, where <Inline math="I" /> is the identity
        matrix. If <Inline math="A \in \mathbb{R}^{m \times n}" /> with{" "}
        <Inline math="m \neq n" />, then the product cannot be{" "}
        <Inline math="n \times n" /> identity. In this case,{" "}
        <Inline math="A" /> may have only a <b>right inverse</b> or a{" "}
        <b>left inverse</b>, provided <Inline math="A" /> is full rank. Only
        when <Inline math="A \in \mathbb{R}^{n \times n}" /> can it have both
        left and right inverses, i.e. a true inverse.
      </p>

    <h2>Exercise 1</h2>
        <p>
        For matrices <Inline math="A \in \mathbb{R}^{m\times n}"/> and
        <Inline math="B \in \mathbb{R}^{n\times p}"/>, prove <Inline math="\operatorname{rank}(AB) \le \min\{\operatorname{rank}(A), \operatorname{rank}(B)\}" />
        </p>

    
    <details>
    <summary><b>Solution:</b></summary>

    <p>
        Think about the pivots. The rank of <Inline math="AB" /> counts pivots
        that appear after multiplying. But:
    </p>

    <p>
        1. Multiplying by <Inline math="A" /> cannot create <i>more</i> pivots than
        <Inline math="A" /> already has. So, 
        <Inline math="\hspace{3pt} \operatorname{rank}(AB) \le \operatorname{rank}(A)" />.
    </p>

    <p>
        2. Similarly, before multiplication, <Inline math="B" /> already determines
        how many independent columns you have to work with.
        Multiplying by <Inline math="A" /> can only reduce them, not increase them. So
        <Inline math="\operatorname{rank}(AB) \le \operatorname{rank}(B)" />.
    </p>

    <p>
        Putting both together:
    </p>

    <Block math="\operatorname{rank}(AB) \le \min\{\operatorname{rank}(A), \operatorname{rank}(B)\}" />
    </details>

      <h2>Exercise 2</h2>
      <p>Does a non-invertible square matrix exist? If so, when?</p>
    <details>
      <summary>
        <b>Solution:</b>
      </summary>
      <p>
         Yes. A square matrix is non-invertible (singular) when
        its rows or columns are linearly dependent. Full-rank square matrices
        are always invertible. We will study this more with determinants.
      </p>
    </details>


      <h2>Exercise 3</h2>
      <p>
        Prove that <Inline math="(AB)^{-1} = B^{-1}A^{-1}" />.
      </p>

        <details>

            <p>
                <summary><b>Solution:</b></summary>
            </p>
            <Block
                math={`(AB)(AB)^{-1} = I \\\\
        (AB)^{-1}A = B^{-1} \\\\
        (AB)^{-1} = B^{-1}A^{-1}`}
            />

        </details>

    </div>
  );
}
