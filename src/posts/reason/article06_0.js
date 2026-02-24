import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Induction and Hidden Premise";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">

                <p>
                    Because every time the sun went down the sun went up, the next time the sun goes down, the sun will rise up.
                    We dropped a ball 100 times and it hits the ground, so next time you drop a ball, it must hit the ground.
                    You flipped a fair coin and got a tail for 10000 times, so the next time you will get a tail as well.
                    <br></br>
                    Are they true statements?
                </p>
                <p>
                    This sort of logic is called induction, 
                    a reasoning method that draws a conclusion for the all cases from local or partial observation
                    assuming that the next occurrence follows from the last one.
                    The third statement is a quite weak inductive claim that is simultaneously fallacious.
                    The probability of getting head or tail from a "fair" coin is 50%, so 
                    even though you have gotten 10000 tails consecutively, it has nothing to do with the future result
                    (in reality, you may doubt whether this is really a fair coin, but this is out of scope). 
                </p> 
                <p>
                    On the other hand, the first two induction are relatively more backed up. 
                    These claims are based on physics; however, they must acknowledge that physics 
                    never inform us the <b>truth</b> — meaning that, it is certain only within its premise.
                    Sciences, particularly natural sciences, are built upon patterns, not definitive truths,
                    thereby providing a guarantee of the future. 
                    We still have possibility experiencing unpredictable (within our formulated system) change in a physical law.
                    <br></br>
                    However, it is still important to learn those sciences to solidify our logical sense and reliability, 
                    in addition to describe the phenomena around us,
                    generate a creative solution to a problem, and discern fraudulent claims and conspiracy.
                    A philosopher argued that our interpretation is reliable (or non-pseudoscientific) if it's "based on and constrained by physical evidence,"
                    whereas pseudoscience "reaches a preferred conclusion in advance, then selects evidence, often removed from any relevant context, 
                    to lend supposed support for their conclusions," 
                    <sup><a href="https://en.wikipedia.org/wiki/Demarcation_problem">(src)</a></sup>
                    which likely establishes biased, unreliable arguments with irreproducible evidence.
                </p> 
                <p>
                    <br></br>
                    Whereas induction is not perfectly certain, one type of induction called <b>mathematical induction</b> always draws a true statement
                    or proof if appropriately used, although it usually does not give you general, intuitive understanding.
                </p>

                <p>

                </p>

            </div>

        </div>
    );
}