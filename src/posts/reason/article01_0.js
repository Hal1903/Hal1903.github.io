import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Correlation and Inference";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
                <div className='image-center'>
                <img src={'/images/articles/reason/1-3/ice_drown.png'} alt="correlation vs causation" style={{width: "100%"}}/>
                </div>
                <br></br><br></br>
                <section> 
                <p>
                Correlation does not imply causation. This is a common phrase in statistics, 
                but what does it really mean? Let's break it down.
                Suppose we have two events or variables — number of drownings and number of ice cream sales.
                We observe that when ice cream sales increase, the number of drownings also increases.
                This is a correlation, they are increasing togehter. 
                However, it would be incorrect to conclude or infer that buying ice cream causes drowning or other way around.
                </p>
                <p>
                The reason for this correlation is a lurking variable (a hidden confounding variable): hot weather. 
                When the weather is hot, more people buy ice cream and more people go swimming,
                which can lead to more drownings. So, the hot weather is causing both the increase in ice cream sales and the increase in drownings.
                This is an example of how correlation does not imply causation.
                The inference without considering other factors can lead to incorrect conclusions, 
                which can have serious consequences in various fields of studies.

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

                <details>
                    <summary><b>Analysis (Click to expand)</b></summary>
                <p>
                In each of these scenarios, while there is a correlation between the activities and the outcomes,
                it is important to consider other factors that may be influencing these results.
                <br></br>
                In Scenario 1, factors such as time management skills, parental involvement,
                and the overall learning environment can also significantly impact a student's academic performance.
                Playing mobile games may be one of many distractions, but it is not the sole cause of lower grades.
                </p>
                </details>


                <h3 style={{textAlign: "center"}}>Scenario 2</h3>
                <p>
                    Atmospheric carbon dioxide (CO2) levels have been steadily rising 
                    over the past century, a period that also corresponds with significant 
                    global climate changes, including increased average temperatures and 
                    more frequent extreme weather events. 
                    This strong correlation has led many to propose that 
                    rising CO2 emissions are a direct cause of these environmental shifts. 
                    Given that economic principles suggest increasing the cost of a good will 
                    decrease its consumption, a direct and effective way to reduce these 
                    emissions would be to implement a carbon tax. 
                    Therefore, we should implement a tax system for CO2 emissions 
                    to directly mitigate the climate change.
                </p>

                <details>
                    <summary><b>Analysis (Click to expand)</b></summary>
                <p>
                In Scenario 2, it is true that CO2 levels and climate change are correlated, 
                and indeed it is a causal relationship (Greenhouse effect).
                However, the statement "if we have to pay more, we tend to refrain from getting the things" 
                is a flawed inference. There is a phenomenon called Giffens goods,
                where people tend to buy more of certain goods when the price goes up
                because they can't afford to buy more expensive alternatives.
                </p>
                </details>

                <h3 style={{textAlign: "center"}}>Scenario 3</h3>
                <p>
                    Global promotion of electric vehicles (EVs) is often cited as 
                    a key strategy to combat climate change, as their use directly results 
                    in fewer tailpipe emissions than traditional gasoline cars. 
                    This has led to the common conclusion that propagating more EVs will 
                    lead to a global reduction in CO2 emissions. 
                    Therefore, governments and manufacturers should be more advocated to push 
                    for the global adoption of EVs to lower overall carbon emissions.
                </p>

                <details>
                    <summary><b>Analysis (Click to expand)</b></summary>
                <p>
                In Scenario 3, while EV's do produce fewer tailpipe emissions,
                the overall environmental impact of EVs depends on various factors,
                especially how the electricity used to charge them is generated:
                if the electricity is generated from fossil fuels (carbon, oil, etc.), 
                the reduction in emissions may be minimal, 
                or it could be increment of emissions in the worst case (it actually happened).
                The inference that promoting EVs will directly lead to a 
                global reduction in CO2 emissions is an oversimplification of a complex issue.
                </p>
                </details>

                <h3 style={{textAlign: "center"}}>Scenario 4</h3>
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

                <details>
                    <summary><b>Analysis (Click to expand)</b></summary>
                <p>
                In Scenario 4, there is an issue more serious than potential confounding variables: 
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
                </details>

                </section>
                
            <h2>Conclusion</h2>
            <p>
                It is generally difficult to establish causation without rigorous scientific, statistical investigation and evidence.
                Making inference based solely on correlation can lead to potentially harmful decisions,
                as seen in the scenarios above. 
                Always consider other factors and seek comprehensive understanding before drawing conclusions.
            </p>

            </div>

        </div>
    );
}