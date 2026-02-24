import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Fallacies";
// export const category = "elementary_math";

// False Cause, Slippery Slope, Hasty Generalization, Straw Man, Band Wagon, Red Herring

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
                <p>
                Fallacies are errors in reasoning that can lead to incorrect conclusions. 
                They could be intentional or unintentional, 
                but it is crucial to recognize them to avoid constructing faulty arguments or being misled by such erroneous logic.
                In this article, we go through several common types of fallacies.
                </p>

            <section>


                <h2>Slippery Slope</h2>
                <p>
                    If you do not study as a student, you will not get a good job.
                    If you do not get a good job, you will not make money.
                    If you do not make money, you have less money to spend on health, 
                    leading you to difficulty maintaining your health.
                    This causes you to be less productive at work and eventually lose your job, 
                    which can easily leads you to poverty and homelessness.
                    Therefore, if you do not study as a student, you will become homeless.
                    <br></br>
                    This argument is flawed, although each individual step may seem plausible. Why?
                </p>
                <details>
                    <summary>Explanation</summary>
                    <p>
                    It assumes that one event will inevitably lead to a series of negative events 
                    without providing evidence for such a chain of events.
                    In reality, the situation may be more complex, and
                    it is not necessarily true that one event will lead to another.
                    This type of reasoning is often used to create fear or anxiety about a particular action or decision.
                    Keep in mind to avoid making assumptions without evidence.
                    </p>
                </details>

                <h2>Hasty Generalization</h2>
                <p>
                    Suppose you are a freshman majoring in computer science, and you observed that
                    many of your professors are from Asia. Your research mentor is also an Asian, and 
                    your favorite well-known programming-related YouTubers are also Asian because their explanation
                    makes a lot of sense than other channels. Hence, it is reasonable to conclude that
                    Asian people are inherently good at programming or engineering, or perhaps STEM in general.
                    However, is that true?
                </p>
                <details>
                    <summary>Explanation</summary>
                    <p>
                    This is an example of hasty generalization, which is a fallacy that occurs when
                    a conclusion is drawn based on insufficient or biased evidence.
                    In this case, the observation of a few individuals being good at programming
                    is used to make a unsupported generalization about an entire group of people.
                    This example also illustrates a common cognitive bias that we have seen in previous articles,
                    can you identify which one it is? What kind of people are more likely to be your professors,
                    mentors, or popular YouTubers?
                    </p>
                </details>

                <h2>Straw Man and Red Herring</h2>
                <p>
                Consider the following paragraph:
                    <i>
                    "
                    Regulating the sale and ownership of firearms is often justified by 
                    the need to balance individual rights with public safety. 
                    Proponents argue that a well-regulated system, 
                    including background checks and restrictions on certain weapon types, 
                    can reduce gun-related violence and deaths. 
                    Such process would prevent firearms from falling into the
                    potentially malicious individuals who has a history of violent crime or mental instability. 
                    {/* Ultimately, the goal is to protect communities while respecting the rights of law-abiding citizens. */}
                    "
                    </i>
                    <br></br>
                </p>

                <p>
                However, firearm is also used for protecting the innocent people. 
                Taking firearms away may result in a serious consequence.
                Implementing author's proposal makes ourselves defenseless, which is obviously unacceptable.
                I claim that rather than regarding firearms as a threatening weapon, 
                we should try to use it as a tool to defend and threaten back the hostile individuals.
                <br></br>
                I intentionally made an absurd counterargument (I don't even consider this a counterargument).
                Why is this not?
                </p>

                <details>
                    <summary>Explanation</summary>
                    <p>
                    This is combination of two fallacies. 
                    One is straw man, misrepresenting or oversimplifying opponent's claim.
                    In this example, while the article's actual argument is "regulating them,"
                    I interpreted the article's argument as "seizing them,"
                    making it much more extreme and easier to counterargue. 
                    That is the point of the strawman — fabricating the claim that is 
                    easier to knock down.
                   
                    <br></br>
                    Another one is red herring, which is introducing an irrelevant topic.
                    My call-to-action is about "self-defense" or "defending others,"
                    and this is irrelevant and not a counterclaim to the article's argument.
                    Indeed, firearms could be used for defense; 
                    however, regulating them does not hinder that.
                    It is important to keep in mind what topic is being discussed.

                    <br></br>
                    Also, if you have skipped the contents of article or if the article was hidden,
                    you would not know what the actual author was arguing. 
                    My claim itself is valid — if it is not a response to the provided article.
                    This is one reason that it is often recommended to check the source of information
                    to prevent being misled by fallacious, opinionated information.
                    
                    </p>
                </details>

                {/* <h2></h2>
                <p>
                    
                </p>

                <details>
                    <summary>Explanation</summary>
                    <p>
                    
                    </p>
                </details> */}

                {/* <h2>Ad Hominem</h2>
                <p>
                    
                </p>

                <details>
                    <summary>Explanation</summary>
                    <p>
                    
                    </p>
                </details> */}

            </section>
            <ul>
                <li><b>Ad Hominem: </b></li>
                    This is a fallacy that attacks the opponent's personality instead of their argument.
                    One example would be like, 
                    "No dating is allowed while going to this school? 
                    The principal does not have fun experience from it or have some ressentiment."
                    Clearly this is irrelevant to the logic and impudent, ill-formed inference.
                <br></br><br></br>
                <li><b>Bandwagon: </b></li>
                    "Everyone is watching anime A, so anime A must be wonderful"
                    — that is a bandwagon fallacy.
                    There is nothing to do with the quality of products and popularity.
                    There are media quite popular or well-known while being low quality.
                <br></br><br></br>
                <li><b>False Dilemma: </b></li>
                    If you are forced to choose 
                    "we shall sentence death penalty to all murderers" or 
                    "we shall not punish criminals,"
                    that's false dilemma because it eliminates all other possible options.

                <br></br><br></br>
                <li><b>Circular Argument: </b></li>
                    If you say that bible a God's word because Bible says so, 
                    you are doing circular argument.
                    When you define or prove a concept X, you cannot use concept X to justify.
                    In this case, you cannot use Bible to rationalize your point.

                <br></br><br></br>
        <p>
                <li><b>No True Scotsman:</b></li>
                    <b>Smith:</b> All Scotsmen are loyal and brave.
                            <br></br>
                    <b>Jones:</b> But McDougal over there is a Scotsman, 
                           and he was arrested by his commanding officer for running from the enemy.
                           <br></br>
                    <b>Smith:</b> Well, if that's right, it just shows that McDougal wasn't a TRUE Scotsman.
            <br></br>
            <a href="https://iep.utm.edu/fallacy/#NoTrueScotsman">(Source)</a>
            When your generalized claim for a certain group is challenged by the counterexample sample 
            and you just exclude the sample by denying the fact that they are not a part of the group
            (i.e. recharacterize the situation or assertion that you just made),
            that's No True Scotman fallacy.
            
        </p>
            </ul>
            
            <h2>Conclusion</h2>
            
            
            </div>

        </div>
    );
}