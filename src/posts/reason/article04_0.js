import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Biases";
// confirmation, survivorship, selection, anchoring, bandwagon, halo

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
            <p>
            Unconscious biases can significantly influence our decisions and reasoning. 
            As we have seen an example earlier, 
            without prior knowledge of these biases or a conscious effort to recognize them, 
            it can be difficult to spot when they're affecting our judgment.
            This article introduces some common cognitive biases and how they can impact our inference.
            </p>

            <h2>Confirmation Bias</h2>
            <p>
            You have a hypothesis in mind and you seek out information that supports it,
            say, you believe that a certain financial investment, say Invest X, is a good one.
            It is often recommended to look for some evidence to validate your belief before making a decision,
            so you searched with "benefits of Invest X" and "why we should invest in Invest X" 
            which showed several articles praising the investment.
            Consequently, you feel validated and confident in your decision to invest.
            However, this is an example of bias, can you spot why?
            </p>
            <br></br>
            <details>

                <summary><b>Explanation (Click to Expand)</b></summary>
                <p>
                Confirmation bias is the tendency to search for, interpret, and remember information in a way that confirms one's beliefs or hypotheses.
                In this example, by only searching for positive data that supports the belief about Invest X,
                you may have overlooked or ignored information that contradicts this belief.
                This can lead to a skewed perception of the investment's potential and may result in poor decision-making.
                It is important to actively seek out diverse perspectives 
                and information that challenges your beliefs.
                <br></br>
                Also, availability bias, a bias where people overestimate the importance of information 
                that is readily available to them, is also somewhat related to this bias. 
                Confirmation bias can lead to or be influenced by availability bias.
                By selectively searching for and focusing on information that confirms their beliefs (confirmation), 
                a person makes that information more readily "available" to them in their memory. 
                This increased availability then leads them to overestimate the importance or frequency of that confirming information,
                which is precisely availability bias.
                </p>
            </details>

            <h2>Selection Bias</h2>
            <p>
            You are conducting a survey to understand people's habits and health concsiousness.
            The questions are sent out to a group of people, and by convenience,
            you decide to send the survey at a local gym that is close to your home.
            After collecting the responses, you analyze the data and find that a significant portion of respondents
            report regular exercise and healthy eating habits. 
            Therefore, you conclude that the general population is health-conscious and active.
            Where is the bias in this scenario?
            </p>

            <br></br>
            <details>

                <summary><b>Explanation</b></summary>
                <p>
                Selection bias occurs when the sample of data collected is not representative of the overall population.
                In this example, by sending the survey to a local gym,
                the sample is biased towards individuals who are already health-conscious and active.
                This can lead to an overestimation of the general population's health habits,
                as the sample does not accurately reflect the diversity of behaviors and attitudes in the broader community.
                To mitigate selection bias, it is important to use random sampling methods
                and ensure that the sample is representative of the population being studied.
                </p>
            </details>

            <h2>Survivorship Bias</h2>
            <p>
            You have been reading biographies of entrepreneurs who started from scratch and built thriving companies.
            Inspired by their stories, you are now considering starting a business of your own.
            You research these successful entrepreneurs and find that they all share certain traits,
            such as resilience, determination, and a willingness to take risks. Also,
            they overcame significant challenges by not giving up.
            You conclude that by adopting these traits and never giving up, 
            you can increase your chances of success.
            What is the bias in this reasoning?
            </p>

            <br></br>
            <details>

                <summary><b>Explanation</b></summary>
                <p>
                This is a specific form of selection bias, 
                where the selected special sample is "survivors" or successful cases.
                Survivorship bias occurs when we focus on successful individuals or entities
                while ignoring those that did not succeed.
                Often, we hear stories of successful people, but we rarely hear about those who failed,
                while their stories or lessons are equally important.
                In this example, by only studying successful entrepreneurs,
                you may overlook the many others who possessed similar traits but did not achieve success.
                This can lead to an overestimation of the importance of these traits
                and a failure to recognize other factors that contribute to success, such as timing, luck, etc.
                To mitigate survivorship bias, it is important to consider a broader range of cases,
                including those that did not succeed, and to analyze the factors that contributed to both success and failure.
                Thinking about confounding factors mentioned in previous articles may help.
                </p>
            </details>


            <h2>Framing Effect</h2>
            <p>
            Imagine a student that follows a very typical healthy lifestyle: 8 hours sleeping, 7 hours at school, 1.5 hours eating, 1 hour exercise, about 30 minutes shower, etc.
            Suppose your parents suggest you to follow one of the rules:
            {/* (8 hours sleep, 1.5 hours eating, 1 hour exercise, 8 hours school, 0.5 hours commute, 0.5 hours chores, 0.5 shower, 3 hrs left) */}
            <ul>
                <li>Rule A: You have to study for 2.5 hours after school, then you can play 3 hours of video games.</li>
                <li>Rule B: You have to study for an additional hour (3.5 hours after school), but then you can play video games however you want in your free time.</li>
            </ul>
            He selected Rule B because it gives you no limit time to play video games, but is this decision biased?
            </p>
            <br></br>
            <details>

                <summary><b>Explanation</b></summary>
                <p>
                The framing effect is a cognitive bias where people react differently to a particular choice
                depending on how it is presented or "framed".
                In this example, the reward of playing video games is framed differently in the two rules.
                Think about the typical daily schedule of students:
                7 or 8 hours sleep, 7 hours at school, 1.5 hours eating maybe with some sidework like chatting or watching videos, 
                0.5-1 hour exercise, 0.5 hours commute, 0.5 hours chores, 0.5 shower, etc.
                How much time is left for leisures or video games for him at maximum?            
                Taking the minimum time of each activity, we have 7 + 7 + 1.5 + 0.5 + 0.5 + 0.5 + 0.5 = 17.5 hours, 
                which leaves only 6.5 hours for video games or other leisures. This is probably a lower bound, so
                realistically, he may have only 4-5 hours left for video games.
                Then, regardless of his choice, he can only play video games for up to 3 hours, 
                and Rule B may not provide extra benefits.
                The way the options are framed can influence our perception and preference on the Rule B.
                It is important to consider the context and underlying details of a decision,
                rather than being swayed by how the options are presented.
                </p>
            </details>

            <h2>Blind Spot Bias</h2>
            <p>
            Now, you have learned about several cognitive biases, such as confirmation bias, selection bias, and framing effect.
            You will be more cautious about these biases in your future decisions, 
            and you believe that you can recognize these biases in others' reasoning.
            You are confident that you are less likely to be influenced by these biases compared to others.
            Is that true, or is there still a bias in this belief?
            </p>

            <br></br>
            <details>

                <summary><b>Explanation</b></summary>
                <p>
                This is called blind spot bias, the tendency to recognize the impact of biases on the judgment of others is 
                greater than the impact of biases on one's own judgment.
                Even if you are aware of cognitive biases and actively try to mitigate their effects,
                you may still be susceptible to them without realizing it.
                This can lead to overconfidence in your own objectivity.
                It is important to continuously reflect on your own reasoning processes
                and <b>seek feedback from others</b> to identify potential biases.
                </p>
            </details>

            <h2>Conclusion</h2>
            <p>
            Biases are not necessarily bad. It helps you to judge something quicker, 
            and particularly positive one is called heuristic.
            However, if that distorts the inference, that is problematic, so
            keeping these biases in mind can help us make more informed and objective decisions. 
            By actively questioning our assumptions and seeking out diverse perspectives,
            we can mitigate the impact of these biases on our reasoning.
            However, it is important to remember that everyone is susceptible to biases,
            and we should not assume that we are immune to them.
            Also, there are many more biases that are not covered in this article,
            and I encourage you to explore more on your own if you're interested.
            </p>

            </div>

        </div>
    );
}