import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Critical Thinking";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
                <p>
                    Before getting into advanced contents, 
                    I'd like to give you some quizzes first:
                    <br></br>
                    Which of following choice(s) cannot even be the candidate for the answer of 
                    <Inline math="1234567890987654321 \div 7654567" /> ("..." means, remainder of)?
                    If you pick any of them below, justify.
                
                <ol>
                    <li>
                        <Inline math="18861024755983 ... 31099073" />
                    </li>
                    <li>
                        <Inline math="18861024755987 ... 81072" />
                    </li>
                    <li>
                        <Inline math="1886124755983  ... 31072" />
                    </li>
                </ol>

                </p>

                <p>
                    Here is another fun puzzle that tests your step-by-step logical reasoning:
                </p>



                <p></p>

            </div>

        </div>
    );
}