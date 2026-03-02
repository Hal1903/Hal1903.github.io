import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export const title = "Eigenvalues, Eigenvectors";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">

                This is where the div text of your article will go. You can write about anything you want here.


            </div>

        </div>
    );
}