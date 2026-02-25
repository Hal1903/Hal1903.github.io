import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Induction";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">

            <p  style={{ marginBottom: '200px' }}>
                1,10,100,1000, ... what is the next number?
            </p>

            <details>
                <summary>
                    <b>Click to expand:</b>
                </summary>
                <p>
                    One answer I can suggest is 3439.
                    This is not necessarily 10,000. 
                    For example, 
                    if I claim that this number sequence follows a 
                    pattern called Lagrange interpolation polynomial shown below, 
                    it indeed computes 1, 10, 100, 1000, then 3439.
                </p>
                            <div className='latex-center'>
            <Block math="
            f\left(x\right)=
            \frac{\left(x-2\right)\left(x-3\right)\left(x-4\right)}{\left(1-2\right)\left(1-3\right)\left(1-4\right)}\left(1\right)
            +\frac{\left(x-1\right)\left(x-3\right)\left(x-4\right)}{\left(2-1\right)\left(2-3\right)\left(2-4\right)}\left(10\right)
            +\frac{\left(x-2\right)\left(x-1\right)\left(x-4\right)}{\left(3-2\right)\left(3-1\right)\left(3-4\right)}\left(100\right)
            +\frac{\left(x-2\right)\left(x-3\right)\left(x-1\right)}{\left(4-1\right)\left(4-2\right)\left(4-3\right)}\left(1000\right)
            " />
            </div>
            <br></br>
                <p>
                I know this feels unfair—but this reveals an important fact.
                First of all, for those answered 10,000 for the previous question, 
                how did you justify your answer?
            </p>

        <p>
            I assume that most of you saw a pattern that the next term is a previous term multiplied by 10.
            This is called <b>inductive reasoning,</b> assuming the pattern you found locally extends to a global pattern.
            This is one of fundamental and natural human abilities. 
            However, we must admit that induction does not necessarily reveal <b>truth</b> itself.
                </p> 
                <p>
            Many natural sciences like physics, chemistry, etc. has been developed based on induction.
            Therefore, it is only certain only its premise were true.
            Yes, it is rational that we think we will wake up next morning because it happened thousands of times,
            so we do not have to freak out everyday for the fear of death.
            It is even more rational that this universe will continue for next few decades.
            However, it is still not a proof or flawless justification.
            For that reason, it was a philosophical topic to discuss what science is or what makes we call something science. 
            We are not going to dive into this deeper as our focus here is what induction is, but I highly recommend all to look up the discussions in the history.
        </p>
{/* A philosopher argued that our interpretation is reliable (or non-pseudoscientific) if it's "based on and constrained by physical evidence,"
                    whereas pseudoscience "reaches a preferred conclusion in advance, then selects evidence, often removed from any relevant context, 
                    to lend supposed support for their conclusions," 
                    <sup><a href="https://en.wikipedia.org/wiki/Demarcation_problem">(src)</a></sup> */}
            
                <p>
                    <br></br>
                    Whereas induction is not perfectly certain, one type of induction called <b>mathematical induction</b> always draws a true statement
             or proof if appropriately used (although it usually does not give you general, intuitive understanding).
             How does that work? Let's see a couple of examples:
                </p>

<h3>Example 1: every multiple of 10 is an even number.</h3>
<p>
We first check the <b>base case</b> to verify if the first occasion is true or aligns the statement.
0 is multiple of 10, so this is valid (0 is a multiple of every number).
</p>
<p>
Now, you <b>assume the pattern continues up to N</b> times.
</p>
<p>
So suppose <Inline math="10" />, <Inline math="10 \times 10 = 100 = 10^2" />, ..., <Inline math="10 \times 10 \dots \times 10 = 10^N" /> are 
multiples of 10.
</p>
<p>
Now, <b>Check N+1 case</b>. 
If this holds true, any succeeding cases are also true by chain.
In case it does not make sense, think about N=2, N=3, ... and so on.
If up to N=2 is true and you proved for any N+1 is true, you
basically proved N=3 to be true, and N=4 is just N=3+1, 
so everything after is true using the same logic. 
</p>
<p>
    Here, you have <Inline math="10^{N+1}=10\times 10^N" />, but this is 
    clearly divisible by 10 hence a multiple of 10, and we complete the induction.
</p>
<p>
    The demonstration is purely for explaining what induction is, but 
    if you really think about the problem, you did not have to use induction at all!
    You have to first consider whether induction is the right tool to describe something.
</p>

</details>
            </div>

        </div>
    );
}