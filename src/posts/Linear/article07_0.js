import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Determinant (with deeper dive!)";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <p>
                    In my opinion, determinant is one of the most beautiful and well-summarized 
                    concepts in linear algebra. 
                    What is a determinant, and what does it tell us?
                   
                </p>

                <p>
                    A determinant reveals several fundamental properties of a matrix:
                </p>

                <ul>
                    <li>The existence of a unique solution of a linear system</li>
                    <li>The scaling factor of area, volume, and higher dimensional measure</li>
                    <li>Invertibility</li>
                </ul>

                <p>
                    Often, the geometric interpretation (area/volume scaling) is emphasized.
                    However, historically and structurally, the determinant first emerged from
                    the problem of solving systems of equations. 
                    In this article, we follow that algebraic motivation.
                    Due to my fondness of this concept, I will dive into a deeper discussion in this article, 
                    but I promise that this article provides with better understanding than typical linear algebra lectures do,
                    and the detail still remains completely optional  :)
                </p>

                <hr />

                <h2>1. Determinant from Solving Systems</h2>

                <p>
                    Consider the 2×2 system:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \begin{pmatrix}
                        a & b \\
                        c & d
                        \end{pmatrix}
                        \begin{pmatrix}
                        x_1 \\ x_2
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        e \\ f
                        \end{pmatrix}
                    `} />
                </div>

                <p>
                    Solving the system explicitly gives:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        x_1 = \frac{ed - bf}{ad - bc}, \quad
                        x_2 = \frac{af - ec}{ad - bc}
                    `} />
                </div>

                <p>
                    The denominator <Inline math="ad - bc" /> determines whether the solution exists uniquely.
                    If it equals zero, the system loses uniqueness.
                </p>

                <p>
                    We therefore define:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \det(A) = ad - bc
                    `} />
                </div>

                <p>
                    Notice something important:
                    if the two rows are proportional (linearly dependent),
                    then <Inline math="ad - bc = 0" />.
                    Thus the determinant tells us about dependence. 
                    You can try a 3D case, too, and the result should match the result in the following section: 
                </p>

                <p>
Since matrix multiplication corresponds to composing linear systems,
and since the determinant detects whether a system loses uniqueness,
 the determinant must behave compatibly with composition. 
This leads to the multiplicative property—or a theorem
<Block math="\det(AB)=\det(A)\det(B)" />
                </p>

                <hr />

                <h2>2. The 3×3 Case and Cofactor Structure</h2>

                <p>
                    For a 3×3 matrix:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \begin{pmatrix}
                        a & b & c \\
                        d & e & f \\
                        g & h & i
                        \end{pmatrix}
                    `} />
                </div>

                <p>
                    The determinant becomes:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \det(A)
                        =
                        aei + bfg + cdh
                        -
                        ceg - afh - bdi
                    `} />
                </div>

                <p>
                    This can be rewritten as:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        a(ei - fh)
                        -
                        b(di - fg)
                        +
                        c(dh - eg)
                    `} />
                </div>

                <p>
                    Each term is itself a determinant of a 2×2 submatrix.
                    This leads to the cofactor (Laplace) expansion.
                </p>

                <p>
                    In the 3×3 case, the determinant is built from 2×2 sub-determinants, and vanishes whenever one row can be written as a linear combination of the others.

                    This pattern continues in general: 
                    the determinant measures whether the rows (or columns) span the full space.
                    If they collapse into a lower-dimensional subspace, the determinant becomes zero.
                </p> 
                <p>
                    This geometric interpretation make the next theorem (1) easier to follow.
                </p>

                {/* <p>
                    We also observe that the number of terms grows:
                    2 for 2×2,
                    6 for 3×3,
                    and 24 for 4×4.
                    This factorial growth suggests a deeper combinatorial structure.
                </p> */}
    <hr />

    <h4>Theorems:</h4>
    <p> 1. <Inline math="\det(A)=0" /> if and only if the rows or columns of A are linearly dependent. </p>
    <p> 2. <Inline math="\det(AB)=\det(A)\det(B)" /> </p>
    <p> 3. If A is n×n diagonal or triangular, </p>
        <Block math="\det(A)=\prod_{i=1}^{n} a_{ii}"/>

<br></br>
{/* <p>
Although I understand the proof for theorem 1 using the discussion in the latter half of this article,
ChatGPT gave me one conceptual proof outline: fix a matrix A and define a function of B as <Inline math="f(B):=\det(AB)" /> 
thus <Inline math="f(I):=\det(A)" />. AB is just B of whose basis were linearly transformed by A.
<Inline math="f(B):=\det(AB)" /> satisfies determinant properties, which is straightforward to check or find resources.
Then we just need to show the uniqueness...but this part should rely on the definition of determinant discussed soon later.
I will not write the full proof, but you can find one fairly easily.
</p> */}
{/* <br></br> */}

<h3>Exercise 1</h3>
<p>Prove that if <Inline math="\det(AB)=0"/> then A or B is singular. </p>
<details>
  <summary>
    <b>Solution:</b>
  </summary>

  <p>
    Suppose <Inline math="\det(AB)=0"/>.  
    By the multiplicative property of the determinant,
  </p>

  <p>
    <Inline math="\det(AB)=\det(A)\det(B)"/>.
  </p>

  <p>
    Hence
  </p>

  <p>
    <Inline math="\det(A)\det(B)=0"/>.
  </p>

  <p>
    Over the real (or rational) numbers, a product is zero if and only if at least one factor is zero. 
    Therefore,
  </p>

  <p>
    <Inline math="\det(A)=0 \quad \text{or} \quad \det(B)=0"/>.
  </p>

  <p>
    By Theorem 1, a matrix has zero determinant if and only if it is singular. 
    Hence A or B is singular.
  </p>

  <p>
    Alternatively, one can argue directly: if both A and B were invertible, 
    then their product AB would also be invertible (since <Inline math="(AB)^{-1}=B^{-1}A^{-1}"/>).  
    But an invertible matrix has nonzero determinant, contradicting <Inline math="\det(AB)=0"/>.  
    Therefore at least one of A or B must be singular.
  </p>

</details>


<h3>Exercise 2</h3>
<p>Prove <Inline math="\det(A)=0"/> if and only if A is singular.</p>
<details>
  <summary>
    <b>Solution:</b>
  </summary>
  <p>
    We prove both directions.
  </p>

  <p>
    (<b>⇒</b>) Suppose <Inline math="\det(A)=0"/>.  
    If <Inline math="A"/> were invertible, then there would exist <Inline math="A^{-1}"/> 
    such that <Inline math="AA^{-1}=I"/>. Taking determinants on both sides gives
  </p>

  <p>
    <Inline math="\det(A)\det(A^{-1})=\det(I)=1"/>.
  </p>

  <p>
    Since <Inline math="\det(A)=0"/>, the left-hand side equals 0, which is impossible.  
    Therefore <Inline math="A"/> cannot be invertible. Hence <Inline math="A"/> is singular.
  </p>

  <p>
    (<b>⇐</b>) Suppose <Inline math="A"/> is singular.  
    Then <Inline math="A"/> is not invertible, so there exists a nonzero vector 
    <Inline math="x \neq 0"/> such that
  </p>

  <p>
    <Inline math="Ax=0"/>.
  </p>

  <p>
    This means the columns of <Inline math="A"/> are linearly dependent.  
    But the determinant of a matrix is zero if its columns are linearly dependent.  
    Therefore,
  </p>

  <p>
    <Inline math="\det(A)=0"/>.
  </p>

  <p>
    Hence <Inline math="\det(A)=0"/> if and only if <Inline math="A"/> is singular.
  </p>
</details>

<br></br> <hr></hr> <br></br>
                <p>
                    From here, we will dive into a more abstract discussion of the determinant function.
                    You may skip the next sections if you are only interested in computational techniques.
                    Even if you decided to proceed and get lost, don't worry — 
                    the next article will be more concrete again. You can come back to determinant anytime afterwards.
                    Now, let's get into "construction" of determinant.
                </p>



                <h2>3. What Should a Determinant Be?</h2>

                <p>
                    From solving systems, we learned that the determinant must:
                </p>

                <ul>
                    <li>Be linear in each row (equations are linear; if we add or scale, the solution changes accordingly)</li>
                    <li>Vanish when rows become dependent</li>
                    <li>Equal 1 for the identity matrix</li>
                </ul>

                <p>
                    The second condition is often regarded as the most crucial line.
                    If two rows are equal, the system collapses dimensionally.
                    Geometrically, area or volume becomes zero.
                    Algebraically, uniqueness disappears.
                </p>

                <p>
                    To ensure this, we require the determinant to change sign
                    when two rows are swapped...but what does that mean?
                </p>

            <h3>Orientation and Sign</h3>
                <p>
                    Consider Gaussian elimination:
                    when we perform row addition, it would not change the dependence thereby not changing the determinant.
                    Row scaling would scale the determinant by the same factor because each row is linear.
                </p>

                <p>
                    What about swapping? Think of <b>basis</b> — particularly, in 2D space.
                    The standard basis is <Inline math="\{e_1, e_2\}" />, but
                    if we swap two basis vectors, the orientation flips. 
                    You cannot rotate the swapped basis back to the original one without reflection.
                    We must assign a sign to the determinant to capture such orientation.
                    This applies to any two vectors in any dimension—if we swap them, the orientation flips.
                </p>
                <p>
                    If it does not convince you, try 3D case, too: write down the standard basis in 3D. 
                    Assign x, y, z for each row from the top, respectively, and then swap two row vectors. 
                    Do all six permutations, and check if each one of them can be inverted to the identity by rotation.
                    You will see three of them would be inverted by a rotation, while the other three would require a reflection!
                    This observation naturally leads to the concept of orientation and the sign function in the Leibniz formula.
                </p>

                <p>
                    Also, how many orientations are there in 2D? ...Two! clockwise and counterclockwise.
                    In 3D, you might already have checked that there are six orientations (right hand rule and its permutations).
                    As you might have guessed it, there are n! orientations in n dimensions.
                    This is the combinatorial structure underlying the determinant, 
                    and it is why symmetric sums over permutations appear in the formula.
                </p>
                <p>
                    Now, it is straightforward to answer why we require 0 for a dependent system.
                    Swapping two equivalent rows should not change the value at all.
                    Then, we must have <Inline math="D=-D" /> in that case, which forces <Inline math="D=0" />. 
                    This is precisely the reason why the determinant vanishes when rows become dependent.
                </p>

                <hr />

                <h2>4. Constructing the Formula (Leibniz)</h2>

                <p>
                    Now we construct the determinant systematically.
                </p>

                <p>
                    Write each row as a linear combination of basis vectors:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \text{row}_i
                        =
                        a_{i1} e_1 + \dots + a_{in} e_n
                    `} />
                </div>

                <p>
                    Recall that scaling a row scales the determinant by the same factor by linearity.
                    The determinant is multilinear,
                    so expanding across all rows produces a sum over all choices
                    of one basis vector per row:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \sum
                        D(e_{j_1}, \dots, e_{j_n})
                        a_{1j_1} \dots a_{nj_n}
                    `} />
                </div>

                <p>
                    However, if two indices coincide,
                    two rows become equal and the term vanishes.
                    Therefore only permutations survive.
                </p>

                <p>
                    Denoting permutations by <Inline math="\sigma \in S_n" />,
                    and assigning sign according to orientation,
                    we obtain the Leibniz formula:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \det(A)
                        =
                        \sum_{\sigma \in S_n}
                        \operatorname{sgn}(\sigma)
                        \prod_{i=1}^n a_{i,\sigma(i)}
                    `} />
                </div>

                {/* <p>
                    (Image placeholder: Leibniz formula illustration from Wikipedia)
                </p> */}

                <p>
                    This formula is not just a computational tool; in fact, its complexity is not practical for large matrices.
                    However, it reveals the deep combinatorial and geometric structure of the determinant.
                    It is forced by multilinearity,
                    alternation, and normalization.
                    These properties uniquely determine the determinant function, 
                    but the proof is beyond the scope of this article. 
                    It is not insanely difficult once you understand above, so if you are interested, 
                    you can check it out in any linear algebra textbook or online resources. Wikipedia includes the proofs as well.
                </p>

                <p>
                From the understanding of these three characteristics, it is also possible to 
                prove the therem <Inline math="\det(AB)=\det(A)\det(B)" />, so 
                if you are interested, try to prove this as well.
                </p>

                <hr />

                <h2>5. Conclusion</h2>

                <p>
                    The determinant began as a criterion for solving systems.
                    It evolved into a measure of orientation and volume.
                    Its combinatorial structure emerges naturally
                    from linearity and the requirement that dependence
                    must collapse the value to zero.
                    I hope you enjoyed this deeper dive into the determinant, and that it gives you a better appreciation for this fundamental concept in linear algebra.
                </p>

            </div>
        </div>
    );
}
