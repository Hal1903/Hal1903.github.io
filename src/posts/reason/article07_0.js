import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Circular Logic";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">

                <h2>1. What is “Left”?</h2>
                <p>
                    Imagine someone asks you:
                </p>
                <p><b>“What is left?”</b></p>
                <p>
                    At first, it feels like an easy question. You use the word every day.
                    But how would you explain it to someone who has never heard the word before?
                </p>
                <p>
                    You might point in a direction. But that assumes they already understand direction.
                    You might rotate your body. But that assumes they understand orientation.
                    Suddenly, the simple word “left” becomes surprisingly hard to define.
                </p>

                <h2>2. Attempts That Fail (Circular Reasoning)</h2>

                <h3>a) “Left is where your left hand is.”</h3>
                <p>
                    This sounds reasonable. But what if the person does not know which hand is their left hand?
                    Then we would say:
                </p>
                <p>
                    “Your left hand is the one on your left side.”
                </p>
                <p>
                    That explanation uses the word “left” again. We explained left by using left.
                    That is circular reasoning.
                </p>

                <h3>b) “Left is the opposite of right.”</h3>
                <p>
                    This only works if “right” is already understood.
                    But if someone does not know either word,
                    saying “left is the opposite of right” explains nothing.
                    Then, you end up with necessity of explaining what "right" is,
                    which is equally arduous.
                </p>

                <h3>c) “Left is West when you face North.”</h3>
                <p>
                    This might sound more scientific. 
                    But it assumes we already know:
                </p>
                <ul>
                    <li>What North is</li>
                    <li>How direction works</li>
                    <li>How to determine orientation</li>
                </ul>
                <p>
                    If North is defined using a compass, and the compass itself depends on
                    Earth's magnetic field, then we are using another system of direction
                    to define direction. The explanation depends on another orientation system.
                </p>

                <h3>d) “Left is counterclockwise.”</h3>
                <p>
                    Then what is counterclockwise?
                    It depends on how we define clockwise.
                </p>
                <p>
                    And what is clockwise? It depends on how a clock's hands move.
                    But that movement itself was historically chosen using conventions.
                    Again, we depend on prior agreement.
                </p>

                <p>
                    In each case, we tried to define “left” using something that already
                    assumes a concept of orientation. That is circular logic.
                </p>

                <h2>3. A Non-Trivial Circular Case</h2>
                <p>
                    Circular reasoning is not always obvious.
                </p>
                <p>
                    Consider this statement:
                </p>
                <p><b>“This rule is correct because it is written in the official rulebook.”</b></p>
                <p>
                    Now suppose we ask:
                </p>
                <p><b>“Why is the rulebook correct?”</b></p>
                <p>
                    If the answer is:
                </p>
                <p><b>“Because it contains the correct rules.”</b></p>
                <p>
                    Then the argument goes in a circle.
                </p>
                <p>
                    The rule is correct because of the rulebook,
                    and the rulebook is correct because of the rules.
                    Nothing outside the system justifies it.
                </p>
                <p>
                    This is more subtle than the “left hand” example,
                    but the structure is the same.
                </p>

                <h2>4. Exercises</h2>
                <ol>
                    <li>
                        Try defining “up” without using “down,” gravity, or pointing.
                        Can you avoid circularity?
                    </li>
                    <li>
                        Someone says: “You can trust me because I always tell the truth.”
                        Is this circular? Why or why not?
                    </li>
                    <li>
                        Can you think of a situation where circular reasoning might
                        be unavoidable?
                    </li>
                </ol>

                <h2>5. Conclusion</h2>
                <p>
                    Circular logic happens when a conclusion depends on itself,
                    directly or indirectly.
                </p>
                <p>
                    Some circular definitions are harmless in daily life—
                    especially for basic concepts like direction.
                    However, in sciences, it is not tolerated. 
                    And if you would like to be conscientious, 
                    you should be aware of circularity prevalent in this world.
                    When reasoning about rules, truth, authority, or systems,
                    I recommend to ask yourself:
                </p>
                <p><b>“Is this explanation really moving forward — or just moving in a circle?”</b></p>

            </div>

        </div>
    );
}