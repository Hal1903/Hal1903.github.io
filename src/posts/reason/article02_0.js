import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Plots";
// export const category = "elementary_math";

// bar chart with truncated y-axis
// significant increment (not really significant) by changing y-axis or distance
// pie chart with unfair area proportion (30% vs 70% but area is 50% vs 50%)
// 3D chart that distorts the area
// 2 different scale in one plot


// 詐欺グラフの例を作ってください。
// 実際のデータに基づいていなくて構いません。例えば、"number of samples affected to disease X" などがタイトルでよいものとします。上記のようなグラフを五つほどお願いします。
// XBox unsubscribe

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
            <section>
                <p>
                    Visualizations are powerful tools for communicating information, and 
                    we may refer to them when making decisions.
                    However, they can also be manipulated to mislead or deceive viewers.
                    This article introduces several common types of misleading plots and how to identify them
                    for better data literacy.
                </p>
                <h2>Example 1</h2>
                <p>
                The following image shows the number of people affected by a certain disease before and after a certain event.
                The affected people seems doubled, isn't that a significant increase, or is this really a significant increase?
                
                </p>
                <div className="image-center">
                <img src={'/images/articles/reason/1-3/bar_truncated_y.png'} alt="plot 1" style={{maxWidth: "95%", minHeight: "200px"}}/>
                </div>
                <br></br> <br></br>
                <details>
                    <summary><b>Explanation (Click to expand)</b></summary>
                        <p>
                            This is a truncated y-axis, a common technique used to exaggerate differences between data points.
                            By cutting off the lower part of the y-axis, small differences can appear much larger than they actually are.
                            In this case, the y-axis starts at 980.
                            The actual increase from 988 to 1000 is only about 1.2% increase, but the truncated y-axis makes it look like a much larger increase.
                            This can lead to misinterpretation of the data and can be particularly misleading when comparing values that are close together.
                            Always check the y-axis range to ensure it starts at zero or an appropriate baseline, or make sure the truncation is clearly indicated.
                        </p>
                        <div className="image-center">"
                            <img src={'/images/articles/reason/1-3/bar_truncated_y_correct.png'} alt="plot 1 corrected" style={{maxWidth: "95%", minHeight: "200px"}}/>
                        </div>
                </details>

                <br></br>

                <h2>Example 2</h2>
                <p>
                The following figure juxtaposes two data: GDP growth rates of Country A and B. 
                This plot depicts that Country A's GDP growth is significantly higher than Country B's 
                — to what extent are they different?
                </p>
                
                <div className="image-center">
                    <img src={'/images/articles/reason/1-3/gdp_dual_axis_misleading.png'} alt="plot 2" style={{maxWidth: "95%", minHeight: "200px"}}/>
                </div>

                <br></br> <br></br>
                <details>
                    <summary><b>Explanation</b></summary>
                        <p>
                        Actually, their growth rates are not quite different.
                        This is a dual-axis plot, which uses two different y-axes to represent two different variables.
                        The left y-axis represents the Country A GDP, while the right y-axis represents the Country B GDP.
                        The scales of the two y-axes are different, which can create a misleading impression of the data.
                        The correct way to compare these two variables is to use a single y-axis with a consistent scale:
                        <div className="image-center">"
                        <img src={'/images/articles/reason/1-3/gdp_dual_axis_correct.png'} alt="plot 2 corrected" style={{maxWidth: "95%", minHeight: "200px"}}/>
                        </div>
                        </p>
                    </details>


                <h2>Example 3</h2>
                <p>
                The pie chart below shows that video game addiction is a significant issue.
                This example is fallacious, but can you identify why?
                </p>
                <div className="image-center">
                    <img src={'/images/articles/reason/1-3/fake_pie.png'} alt="plot 3" style={{maxWidth: "95%", minHeight: "200px"}}/>
                </div>

                <br></br> <br></br>

                <details>
                    <summary><b>Explanation</b></summary>
                        <p>
                        This is a pie chart that misrepresents the proportions of two categories by distorting the area of the slices.
                        The left pie chart shows the actual proportions of addicted class (25%) and non-addicted class (95%).
                        The addicted class is 3 times smaller than the non-addicted class; 
                        however, the shown pie chart distorts the area of the slices particularly to highlight the addicted class more than it should be.
                        Pie charts should accurately represent the <b>proportions</b> of the categories they depict.
                        The right pie chart correctly represents the proportions of the two categories:
                        
                        <div className="image-center">"
                            <img src={'/images/articles/reason/1-3/correct_pie.png'} alt="plot 3 corrected" style={{maxWidth: "100%"}}/>
                        </div>
                        
                        Moreover, the description at the beginning "pie chart below shows that video game addiction is a significant issue" 
                        is somewhat inconsistent as well.
                        This figure itself does not convey whether the issue is significant or not;
                        it simply shows the proportions of the two categories.
                        Indeed, the youths' video game addiction is a serious issue, but 
                        the pie chart itself does not provide any information about the significance of the issue.
                        It is noteworthy that the description or title of the plot may be biased or misleading.
                        
                        </p>
                    </details>
                </section>
                <section>
                <h2>Conclusion</h2>
                <p>
                    Misleading plots can distort our understanding of data and lead to incorrect conclusions.
                    By being aware of common techniques used to manipulate visualizations, we can become more critical consumers of information.
                    This article covered 3 examples, but there are many other types of misleading plots.
                    Always examine the axes, scales, and proportions in plots, and consider whether the visualization accurately
                    represents the underlying data.
                </p>
                </section>

            </div>

        </div>
    );
}