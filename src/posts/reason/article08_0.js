import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Logic: Truth Tables and Logical Connectives";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">

                <p>
                    Logic helps us understand how statements combine and how truth behaves.
                    In this article, we will learn four important logical connectives:
                    AND, OR, NOT, and IF (implication).
                </p>

                <hr />

                <h2>AND ( <Inline math="x \land y" /> )</h2>

                <h3>1. Example</h3>
                <p>
                    Suppose:
                </p>
                <p>
                    <Inline math="x" />: “It is sunny.”  
                    <br />
                    <Inline math="y" />: “It is warm.”
                </p>
                <p>
                    Question: When is the statement <b>“It is sunny AND warm.”</b> true?
                    
                </p>

                <h3>2. Definition</h3>
                <p>
                    The conjunction <Inline math="x \land y" /> is true 
                    only if both <Inline math="x" /> and <Inline math="y" /> are true.
                </p>

                <h3>3. Truth Table</h3>

                <Block math={`
\\begin{array}{c|c|c}
x & y & x \\land y \\\\
\\hline
T & T & T \\\\
T & F & F \\\\
F & T & F \\\\
F & F & F
\\end{array}
`} />

                <p>
                    Only when it is sunny <b>and</b> warm at the same time is the statement true.
                </p>

                <hr />

                <h2>OR ( <Inline math="x \lor y" /> )</h2>

                <h3>1. Example</h3>
                <p>
                    Using the same example:
                </p>
                <p>
                    <Inline math="x" />: “It is sunny.”  
                    <br />
                    <Inline math="y" />: “It is warm.”
                </p>
                <p>
                    Question: When is  
                    <b>“It is sunny OR warm.”</b> true?
                </p>

                <h3>2. Definition</h3>
                <p>
                    The disjunction <Inline math="x \lor y" /> is true if at least one of
                    <Inline math="x" /> or <Inline math="y" /> is true.
                </p>
                <p>
                    This is called the <b>inclusive OR</b>.
                </p>

                <h3>3. Truth Table</h3>

                <Block math={`
\\begin{array}{c|c|c}
x & y & x \\lor y \\\\
\\hline
T & T & T \\\\
T & F & T \\\\
F & T & T \\\\
F & F & F
\\end{array}
`} />

                <p>
                    If at least one condition is true, the OR statement is true.
                </p>

                <hr />

                <h2>NOT ( <Inline math="\lnot x" /> )</h2>

                <h3>1. Example</h3>
                <p>
                    <Inline math="x" />: “It is sunny.”
                </p>
                <p>
                    What does <Inline math="\lnot x" /> mean?
                </p>

                <h3>2. Definition</h3>
                <p>
                    Negation flips the truth value.
                </p>

                <h3>3. Truth Table</h3>

                <Block math={`
\\begin{array}{c|c}
x & \\lnot x \\\\
\\hline
T & F \\\\
F & T
\\end{array}
`} />

                <p>
                    If it is sunny, then “not sunny” is false.
                    If it is not sunny, then “not sunny” is true.
                </p>

                <hr />

                <h2>IF (Implication)  
                ( <Inline math="x \to y" /> )</h2>

                <h3>1. Example</h3>
                <p>
                    <Inline math="x" />: “It is raining.”  
                    <br />
                    <Inline math="y" />: “I use an umbrella.”
                </p>
                <p>
                    Consider the statement:
                    <br />
                    <b>“If it is raining, then I use an umbrella.”</b>
                </p>

                <h3>2. Definition</h3>
                <p>
                    The <b>implication</b> <Inline math="x \to y" /> is false only when
                    <Inline math="x" /> is true but <Inline math="y" /> is false.
                </p>
                <p>
                    In other words:
                    If it is raining but I do NOT use an umbrella,
                    the statement is broken.
                </p>

                <h3>3. Truth Table</h3>

                <Block math={`
\\begin{array}{c|c|c}
x & y & x \\to y \\\\
\\hline
T & T & T \\\\
T & F & F \\\\
F & T & T \\\\
F & F & T
\\end{array}
`} />

                <p>
                    Notice something surprising:
                    If it is NOT raining, the statement is automatically true.
                </p>
                <p>
                    Why? If the premise is false, there is nothing to do with the implication!
                    Suppose you promised your friend to give a chocolate 
                    if they got a better grade on the next exam, and they did not?
                </p>
                <p>
                    You could give them a chocolate anyway! However, it does not violate your promise.
                    You only promised what would happen when they outperformed you, but mentioned anything otherwise.
                    Such truth due to the falsity in the premise is called <b>vacuous truth</b>.
                </p>

                <h3>Exercise</h3>
                <p>Rewrite IF implication only using AND/OR/NOT (you do not have to use all of them).</p>
                <details>
                    <summary><b>Solution (click to expand):</b></summary>
                    <p> not x or y: <Inline math="\lnot x \lor y" /> </p>
                    
                </details>
                <br></br>

                <hr />

                <h2>IF AND ONLY IF  
                ( <Inline math="x \leftrightarrow y" /> )</h2>

                <h3>1. Example</h3>
                <p>
                    “It is raining if and only if I use an umbrella.”
                </p>
                <p>
                    This means both:
                    <Inline math="x \to y" /> and <Inline math="y \to x" />.
                </p>

                <h3>2. Definition</h3>
                <p>
                    <Inline math="x \leftrightarrow y" /> is true when
                    both statements have the same truth value.
                </p>

                <h3>3. Truth Table</h3>

                <Block math={`
\\begin{array}{c|c|c}
x & y & x \\leftrightarrow y \\\\
\\hline
T & T & T \\\\
T & F & F \\\\
F & T & F \\\\
F & F & T
\\end{array}
`} />

                <hr />

                <h2>Exercises</h2>

                <h3>1. Ternary Logic Practice</h3>
                <p>
                    Suppose:
                    <br />
                    <Inline math="x" />: It is sunny  
                    <br />
                    <Inline math="y" />: It is warm  
                    <br />
                    <Inline math="z" />: I go outside
                </p>
                <p>
                    Evaluate the truth of:
                    <br />
                    <Inline math="(x \land y) \to z" />
                    <br />
                    When does this become false?
                </p>

                <details>
                    <summary>Solution</summary>
                    The statement is false only when:
                    It is sunny AND warm, but I do NOT go outside.
                </details>

                <h3>2. Contraposition</h3>
                <p>
                    Original statement:
                    <br />
                    <Inline math="x \to y" />
                </p>
                <p>
                    Contrapositive:
                    <br />
                    <Inline math="\lnot y \to \lnot x" />
                </p>

                <p>
                    Let:
                    <br />
                    <Inline math="x" />: It is raining  
                    <br />
                    <Inline math="y" />: I use an umbrella
                </p>

                <p>
                    Contrapositive:
                    <br />
                    “If I do NOT use an umbrella, then it is NOT raining.”
                </p>
                <p>Evaluate the truth value of this statement for each x and y. 
                How does this relate to the original statement?</p>
                <Block math={`
\\begin{array}{c|c|c|c}
x & y & x \\to y & \\lnot y \\to \\lnot x \\\\
\\hline
T & T & T &  \\\\
T & F & F &  \\\\
F & T & T &  \\\\
F & F & T & 
\\end{array}
`} />

                <details>
                    <summary>Solution</summary>
                    The truth columns would be identical if evaluated correctly.
                    Therefore,
                    <Inline math="x \to y" />
                    is logically equivalent to
                    <Inline math="\lnot y \to \lnot x" />.
                </details>

            </div>

        </div>
    );
}