import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Matrix Multiplication";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="body">

                <p>
                    Matrix addition is straightforward; it is just entry-wise addition. 
                    However, matrix multiplication is tricky — simply put, it comes from 
                    composition of linear transformations, and this article covers how matrix 
                    multiplication works, how it is derived, and the intuition of those concepts.
                </p>

                <p>
                    We will start from the most intuitive way that involves no complex mathematics 
                    (only dot product — review the previous post if needed).
                    Suppose we have a matrix expressing the number of different fruits sold at 
                    day 1, 2, and 3. Each row is a different day and each column is a fruit.
                </p>

                <p>
                    Apple Banana Grape <br/>
                    Day 1: 1 2 2 <br/>
                    Day 2: 2 1 2 <br/>
                    Day 3: 2 2 1
                </p>

                <p>
                    We also have a vector <Inline math={`(3, 1, 2)`}/> that contains a static price 
                    across all three days. Then we know how to take the dot product and compute the daily profit:
                </p>

                <Block math={`
\\begin{aligned}
\\left(
\\begin{array}{ccc}
1 & 2 & 2 \\\\
2 & 1 & 2 \\\\
2 & 2 & 1
\\end{array}
\\right)
\\left(
\\begin{array}{c}
3 \\\\
1 \\\\
2
\\end{array}
\\right)
=
\\left(
\\begin{array}{c}
9 \\\\
11 \\\\
10
\\end{array}
\\right)
\\end{aligned}
                `}/>

                <p>
                    We get 9, 11, and 10 for day 1, 2, and 3, respectively. 
                    Now we apply the same thing for multiple days. 
                    We have a matrix for the price of each fruit at each day, 
                    and how we stack the vector naturally is to the right. 
                    Say inflation is insane and each day all the fruits' price gets 
                    one dollar increment. We regard each day's prices are distinct (column) vector and combining together yields:
                </p>

                <p>
                    Day 1 Day 2 Day 3 <br/>
                    Apple: $3 $4 $5 <br/>
                    Banana: $1 $2 $3 <br/>
                    Grape: $2 $3 $4
                </p>

                <Block math={`
\\begin{aligned}
\\left(
\\begin{array}{ccc}
1 & 2 & 2 \\\\
2 & 1 & 2 \\\\
2 & 2 & 1
\\end{array}
\\right)
\\left(
\\begin{array}{ccc}
3 & 4 & 5 \\\\
1 & 2 & 3 \\\\
2 & 3 & 4
\\end{array}
\\right)
=
\\left(
\\begin{array}{ccc}
9 & 14 & 19 \\\\
11 & 16 & 21 \\\\
10 & 15 & 20
\\end{array}
\\right)
\\end{aligned}
                `}/>

                <p>
                    In a natural sense we know the first column is the first day profit, 
                    the second column is the second day profit, and so on. 
                    This is one way you can justify the repetition of row times column for matrix product.
                </p>

                <p>
                    Now, we will delve into mathematical depth of matrix product. 
                    From definition, a linear transformation 
                    <Inline math={`T: \\mathbb{R}^n \\to \\mathbb{R}^m`}/> 
                    is a transformation that satisfies linearity:
                </p>

                <Block math={`
\\begin{aligned}
T(u+v) &= T(u) + T(v) \\\\
T(cu) &= cT(u)
\\end{aligned}
                `}/>

                <p>
                    For all vectors <Inline math={`u`}/> and <Inline math={`v`}/> and scalars <Inline math={`c`}/>. 
                    These properties above effectively state something linear.
                </p>

                <p>
                    For a better intuition, consider one linear daily example, like the total cost of purchase without any discount. 
                    If you get a $5 apple, you pay $5. If you get two, you pay $10. 
                    This can be modeled by <Inline math={`P(x)=5x`}/> describing the total cost 
                    <Inline math={`P`}/> by the price <Inline math={`5 \\times x`}/>, 
                    which is clearly a linear function. 
                </p>

                <p>
                    To define a matrix multiplication, let <Inline math={`T`}/> 
                    be a matrix multiplication by <Inline math={`A`}/> to a vector input:
                </p>

                <Block math={`
\\begin{aligned}
T(u+v) &= Au + Av \\\\
T(cu) &= cAu
\\end{aligned}
                `}/>

                <p>
                    Matrix multiplication can be regarded as a composition of such transformations. 
                    Let <Inline math={`T_1`} /> and <Inline math={`T_2`}/> be transformations and 
                    <Inline math={`A_1`} />, <Inline math={`A_2`}/> be their corresponding matrices:
                </p>

                <Block math={`
\\begin{aligned}
T_1(T_2(v)) &= T_1(A_2 v) = A_1 A_2 v = Bv
\\end{aligned}
                `}/>

                <p>
                    where <Inline math={`B = A_1 A_2`}/>. 
                    Suppose the vector <Inline math={`v`}/> contains only one 1 at the 
                    <Inline math={`i`}/>th position and 0 for the rest of entries, 
                    we have <Inline math={`A_2 v`}/> equal to the <Inline math={`i`}/>th column of 
                    <Inline math={`A_2`}/>. Then <Inline math={`A_1 (A_2)_i`}/> 
                    is just a multiplication between <Inline math={`A_1`}/> and that column vector. 
                </p>

                <p>
                    If the matrices were <Inline math={`m \\times n`}/> and <Inline math={`n \\times k`}/>, 
                    you may be able to justify:
                </p>

                <Block math={`
\\begin{aligned}
B_{i,j} = \\sum_{k=1}^n (A_1)_{i,k} (A_2)_{k,j}, 
\\quad B \\in \\mathbb{R}^{m \\times k}
\\end{aligned}
                `}/>

                <h3>Exercise</h3>
                <p>
                    Is matrix multiplication commutative (<Inline math={`AB=BA`}/>), 
                    distributive (<Inline math={`A(B+C)=AB+AC`}/>), 
                    or does <Inline math={`A(B+C)=(B+C)A`}/> hold? Justify your answer.
                </p>

                <details>
                    <summary>Solution (detail)</summary>
                    <ol>
                        <li>No. <Inline math={`f(g(x)) \\neq g(f(x))`}/>.</li>
                        <li>It is distributive. You may demonstrate that entry-wise. 
                            Similarly, you may try to prove associativity.</li>
                        <li>No, because of 1.</li>
                    </ol>
                </details>

                <p>
                    Next time we would like to step back to solving the system with a new aim: 
                    is there a unique solution to the system? 
                    We use a tool called the <b>determinant</b> to check it.
                </p>

            </div>
        </div>
    );
}
