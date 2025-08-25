import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Correlation and Causation";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">

                <section>
                <p>
                Correlation does not imply causation. This is a common phrase in statistics, 
                but what does it really mean? Let's break it down.
                Suppose we have two events or variables — number of drownings and number of ice cream sales.
                We observe that when ice cream sales increase, the number of drownings also increases.
                This is a correlation, they are increasing togehter. 
                However, it would be incorrect to conclude that buying ice cream causes drowning or other way around.
                </p>
                <p>
                The reason for this correlation is a lurking variable (a hidden confounding variable): hot weather. 
                When the weather is hot, more people buy ice cream and more people go swimming,
                which can lead to more drownings. So, the hot weather is causing both the increase in ice cream sales and the increase in drownings.
                This is an example of how correlation does not imply causation.
                Now, assess the following scenarios and think about what other factors might be at play:
                </p>
                <h3 style={{textAlign: "center"}}>Scenario 1</h3>
                    <p>
                        Students who spend significant amounts of time playing mobile games often exhibit lower grades 
                        in school. The allure of these games, with their engaging mechanics and endless content, 
                        can easily divert a student's attention away from their academic responsibilities. 
                        Many of these games are designed to be addictive, offering continuous rewards and a 
                        sense of progress that can feel more immediate and gratifying than the long-term payoff of studying. 
                        This dedication to gaming often leads to less time available for homework and preparation for exams. 
                        Based on this observation, it is reasonable to conclude that playing mobile games directly causes a 
                        decline in a student's academic performance.
                    </p>   
                <h3 style={{textAlign: "center"}}>Scenario 2</h3>
                <p>
                    By looking through the job posts, it is easy to see that individuals who complete higher levels of education, 
                    such as a college degree or a master's degree would tend to earn significantly more over their 
                    lifetime compared to those with only a high school diploma. 
                    This is because higher education provides individuals with specialized knowledge, 
                    critical thinking skills, and a professional network that are highly valued by employers. 
                    It opens up access to a wider range of high-paying jobs and career advancement opportunities. 
                    Therefore, it is a sound conclusion that investing in higher education is a 
                    direct and effective way to increase one's earning potential over the long term.
                </p>
                <h3 style={{textAlign: "center"}}>Scenario 3</h3>
                <p>
                    A survey of top tech companies revealed that nearly all of their most productive 
                    and innovative employees use generative AI tools regularly in their work. 
                    These employees leverage AI to automate routine tasks, brainstorm new ideas, and 
                    analyze complex data, which allows them to complete projects faster and with greater creativity.
                    In contrast, a similar survey of a random sample of individuals from the general population 
                    who do not work in the tech industry found that a significant portion of them do not use 
                    generative AI, and these individuals, on average, report being less productive 
                    in their professional lives. Therefore, it is clear that using generative AI 
                    directly leads to higher productivity and innovation in one's career. 
                </p>
                <h2>Analysis</h2>
                <p>
                In each of these scenarios, while there is a correlation between the activities and the outcomes,
                it is important to consider other factors that may be influencing these results.
                </p>
                <p>
                For instance, in Scenario 1, factors such as time management skills, parental involvement,
                and the overall learning environment can also significantly impact a student's academic performance.
                Playing mobile games may be one of many distractions, but it is not the sole cause of lower grades.
                </p>
                <p>
                In Scenario 2, elements like socioeconomic background, access to quality education, and
                individual motivation may have played crucial roles in determining earning potential.
                Although higher education can enhance skills and opportunities, 
                it is not the only factor that influences income levels and the article itself does not have evidence 
                to conclude that it is a causation for the higher income.
                </p>
                <p>
                In Scenario 3, there is an issue more serious than potential confounding variables: 
                <b> selective bias</b>. 
                </p>
                <p>
                The survey of top tech companies focuses on a specific group of individuals
                who are already in a high-performing environment and likely have access to resources and support
                that encourage the use of generative AI. The general population survey, on the other hand,
                includes a broader range of individuals with varying levels of access to technology and differing
                professional demands. This discrepancy in the surveyed groups can lead to misleading conclusions
                about the effectiveness of generative AI in enhancing productivity. 
                We will learn about biases in more detail in later articles.
                </p>

                </section>


            </div>

        </div>
    );
}