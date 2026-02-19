import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Vector Spaces and Basis";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <h2>1. Vectors in ℝⁿ</h2>

                <p>
                    We begin with vectors in <Inline math="\mathbb{R}^n" />. 
                    A vector is simply an ordered list of real numbers:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        x =
                        \begin{pmatrix}
                        x_1 \\
                        x_2 \\
                        \vdots \\
                        x_n
                        \end{pmatrix}
                    `} />
                </div>

                <p>
                    In <Inline math="\mathbb{R}^2" />, vectors represent points in the plane.
                    In <Inline math="\mathbb{R}^3" />, they represent points in space.
                    In higher dimensions, we lose visualization — but the algebra remains identical.
                </p>

                <p>
                    The two fundamental operations are:
                </p>

                <ul>
                    <li>Vector addition</li>
                    <li>Scalar multiplication</li>
                </ul>

                <h2>2. Linear Combinations</h2>

                <p>
                    Given vectors <Inline math="v_1, \dots, v_k" />, 
                    a linear combination is any expression of the form:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        a_1 v_1 + a_2 v_2 + \dots + a_k v_k
                    `} />
                </div>

                <p>
                    where the coefficients <Inline math="a_i" /> are real numbers.
                    Linear combinations are the basic building blocks of linear algebra.
                </p>

                <h2>3. Span</h2>

                <p>
                    The <strong>span</strong> of vectors <Inline math="v_1, \dots, v_k" /> 
                    is the set of all their linear combinations:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \text{span}\{v_1, \dots, v_k\}
                        =
                        \{ a_1 v_1 + \dots + a_k v_k \}
                    `} />
                </div>

                <p>
                    Geometrically:
                </p>

                <ul>
                    <li>One nonzero vector in <Inline math="\mathbb{R}^2" /> spans a line.</li>
                    <li>Two independent vectors span the entire plane.</li>
                </ul>

                <p>
                    The span always forms a smaller “space” inside <Inline math="\mathbb{R}^n" />.
                    Such a space is called a <strong>subspace</strong>.
                </p>

                <h2>4. Linear Independence</h2>

                <p>
                    Vectors <Inline math="v_1, \dots, v_k" /> are <strong>linearly independent</strong> if
                    the only solution to
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        a_1 v_1 + \dots + a_k v_k = 0
                    `} />
                </div>

                <p>
                    is
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        a_1 = a_2 = \dots = a_k = 0.
                    `} />
                </div>

                <p>
                    Independence means no vector can be constructed from the others.
                    Each contributes a genuinely new direction.
                </p>

                <h2>5. Basis</h2>

                <p>
                    A <strong>basis</strong> of a space is a set of vectors that:
                </p>

                <ul>
                    <li>are linearly independent</li>
                    <li>span the entire space</li>
                </ul>

                <p>
                    The standard basis of <Inline math="\mathbb{R}^n" /> is:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        e_1 =
                        \begin{pmatrix}1\\0\\\vdots\\0\end{pmatrix},
                        \quad
                        e_2 =
                        \begin{pmatrix}0\\1\\\vdots\\0\end{pmatrix},
                        \quad \dots
                    `} />
                </div>

                <p>
                    Every vector in <Inline math="\mathbb{R}^n" /> can be written uniquely
                    as a linear combination of basis vectors.
                    By the way, does every vector space have basis?
                    This may sound trivial, but the proof is actually quite nontrivial
                    unless you admit all Axiom of Choice, Zorn's lemma, and well-ordering theorem
                    without hesitance. If you suspect one of them, you are suspecting all of them because
                    these propositions are proven to be logically equivalent! 
                    However, this is beyond the scope of this article, so we will move on to what dimensions are.
                </p>

                <h2>6. Dimension</h2>

                <p>
                    The <strong>dimension</strong> of a space is the number of vectors in a basis.
                </p>

                <p>
                    For example:
                </p>

                <ul>
                    <li><Inline math="\mathbb{R}^2" /> has dimension 2</li>
                    <li><Inline math="\mathbb{R}^3" /> has dimension 3</li>
                </ul>

                <p>
                    Dimension counts the number of independent directions in the space.
                </p>

                <h2>7. Change of Basis</h2>

                <p>
                    Suppose we have a new basis <Inline math="\{v_1, v_2\}" /> in 
                    <Inline math="\mathbb{R}^2" />.
                    Any vector can now be expressed relative to this new coordinate system.
                </p>

                <p>
                    If we arrange the basis vectors as columns of a matrix:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        P =
                        \begin{pmatrix}
                        | & | \\
                        v_1 & v_2 \\
                        | & |
                        \end{pmatrix}
                    `} />
                </div>

                <p>
                    then coordinates transform via:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        x = P [x]_{\text{new}}
                    `} />
                </div>

                <p>
                    A basis is therefore a choice of coordinate system.
                </p>

                <h2>8. Kernel and Range</h2>

                <p>
                    Let <Inline math="T : \mathbb{R}^n \to \mathbb{R}^m" /> 
                    be a linear transformation represented by a matrix <Inline math="A" />:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        Ax = b
                    `} />
                </div>

                <p>
                    The <strong>kernel</strong> (or null space) consists of all solutions to:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        Ax = 0
                    `} />
                </div>
                <p>
                    The kernel measures how many independent directions collapse to zero.
                </p>

                <p>
                    The <strong>range</strong> (or column space) is:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \{ Ax : x \in \mathbb{R}^n \}
                    `} />
                </div>

                <p>
                    Both are subspaces.
                    Each has a basis.
                </p>

                <p>
                    Their dimensions satisfy the fundamental identity:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \dim(\text{kernel}) + \dim(\text{range}) = n
                    `} />
                </div>

                <p>
                    This is the Rank-Nullity Theorem.
                </p>

                <h2>Conclusion</h2>

                <p>
                    A basis is not merely a convenient set of vectors.
                    It is a minimal generating system under linear operations.
                    It determines coordinates, dimension, and structure.
                </p>

                <p>
                    Linear algebra is, at its core, the study of how spaces are built
                    from independent directions.
                </p>

            </div>
        </div>
    );
}
