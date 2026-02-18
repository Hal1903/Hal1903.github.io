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

                {/* <p>
                    We also observe that the number of terms grows:
                    2 for 2×2,
                    6 for 3×3,
                    and 24 for 4×4.
                    This factorial growth suggests a deeper combinatorial structure.
                </p> */}

                <p>
                    From here, we will dive into a more abstract discussion of the determinant function.
                    You may skip the next sections if you are only interested in computational techniques.
                    Even if you decided to proceed and get lost in the abstraction, don't worry — 
                    the next article will be more concrete again. You can come back to determinant anytime afterwards.
                    Now, let's get into "construction" of determinant.
                </p>

                <hr />

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
                    It is not insanely difficult, so if you are interested, 
                    you can check it out in any linear algebra textbook or online resources. Wikipedia includes the proofs as well.
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
