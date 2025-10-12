import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import Quote from "../../components/Quote";

export const title = "Important Things to Keep in Mind";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title" >
                <h1>{title}</h1>
                </div>
            <div className="body">
            <section>
                <p className='quote' style={{textAlign: "center"}}>
                    I know that I know nothing. - Socrates
                </p>
                <p>
                In our journey to understand the world around us, 
                we often encounter situations where we must make decisions 
                based on incomplete information.
                For example, we still do not know the Einstein's theory of relativity is correct or not,
                although it is sophisticated enough to build GPS systems that we rely on every day.
                We do not know Big Bang theory is correct or not — this is also a mere model that fits our observations so far.
                We inherently can't build a computer that can determine if a given program will finish or not (Halting Problem).
                We can't even be sure that our own senses are reliable, as they can be easily deceived by optical illusions, other phenomena, biological/neurological factors.
                </p>
                <p>
                Even with the most advanced tools and technologies at our disposal,
                we are still limited by our own knowledge and perspective.
                It's crucial to recognize that our extent of knowledge and observation is limited,
                and we should approach such situations with caution and humbleness.
                </p>
            </section>
            <section>
                <p>
                    The reason I bring this up is that, I sometimes see people who boldly claim themselves to be experts in a certain field 
                    making fun of others. Sometimes it is just Dunning-Kruger effect, 
                    but it also happens for the people who are objectively experts in their fields.
                    Nonetheless, they are still human beings whose understanding of the world is limited.
                    Although mathematical statements are always correct as long as they are proven,
                    there is no excuse for them to call themselves superior to others in general by subjective standards, 
                    no matter how sophisticated knowledge they have in one or two area.
                    This applies to personalities or culture as well. 
                    We should be humble and open-minded, as we can never be sure that we are right.
                    This is fundamental policy that I want to share with you for learning and life in general,
                    which may help you with being cautious about making claims, reasons, and judgements.
                </p>
                <p>
                    <b>P.S.</b> My personal habit is to always try to make a counter-argument for my own claims;
                    I do not know this is effective or not, but it helps me to be more humble and open-minded.
                    Feel free to try it out:)
                </p>
            </section>
            </div>

        </div>
    );
}