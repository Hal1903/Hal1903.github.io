import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Mean, Median, and Mode";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="body">

                <p>
                    The concept of the <strong>mean</strong> is often introduced in elementary school as the "average," 
                    which is calculated by summing up all the values and dividing by the number of values.
                    For example, if four people score 40, 85, 65, and 90 on a test, 
                    the mean (average) is 
                    <Inline math="(40+85+65+90) \div 4 = 70" /> points. 
                    In a bar chart, this would represent the height if you made all the bars equal. 
                    The mean is often used as an indicator of the overall performance level of the group.
                </p>

                <p>
                    On the other hand, there is also the <strong>median</strong>, which represents the “middle” of the data. 
                    To find it, we first sort the data from lowest to highest (or vice versa). 
                    For example, the median of the same four scores is 
                    <Inline math="(65+85) \div 2 = 75.5" /> points. 
                    If we had someone scoring 70 points, that is the score in the middle, so the median would be 70 points.
                </p>

                <p>
                    When and why should we use one instead of the other? 
                    Imagine you want to work at a company with a high salary. 
                    Suppose Company A has an average salary of 10 million yen, 
                    while Company B has an average of 6 million yen. 
                    At first glance, A looks more attractive. 
                    But what if the salary distribution in Company A looks like this:
                </p>

                <div style={{textAlign: "center", margin: "1.5rem 0"}}>
                    <img src="\images\articles\reason\1-3\stat1.png" alt="Salary distribution" style={{width: "90%"}} />
                </div>

                <p>
                    Wouldn’t Company B seem like a better choice? 
                    The mean in A is pulled upward by a few people earning more than 20 million yen, 
                    but that doesn’t mean your salary would be that high. 
                    Realistically, you might end up with 4 or 5 million yen. 
                    In contrast, Company B has a more balanced spread, 
                    and earning 6 million yen there doesn’t look unrealistic.
                </p>

                <p>
                    This difference shows up in the mean and median values, 
                    and it highlights why it is important to use them appropriately. 
                    If the data is evenly distributed, like in Company B, 
                    the mean and median are roughly the same and can be treated as such. 
                    But when the data is skewed, you have to be careful.
                </p>
                
                <p>
                    <b>Mode</b> is simply the most frequently occurring value in a dataset. It could be one value, multiple values, or none at all.
                    In the example of salaries at Company A above, 300 and 450 are the modes.
                    In the example of test scores (40, 85, 65, 90), there is no mode since all scores are unique without repetition.

                </p>

                <h3>Conclusion</h3>
                <p>
                    In short, the mean is useful for understanding the overall level of a dataset,
                    while the median is better for understanding the typical value, 
                    especially <u>when the data is skewed.</u>
                    The mode can be useful for identifying the most common value(s) in a dataset.
                    Depends on the situation, you may want to use different measures 
                    to get a good picture of the data.
                </p>

                <h3>Practice Problems</h3>

                <p>
                    <strong>Problem 1: </strong>  
                    Write the expressions for the mean and median of  
                    <Inline math="\hspace{5pt} \{45, 45, 55, 65, 70, 80\}" />. Also, 
                    find the mode of the dataset.
                </p>

                <p>
                    <strong>Problem 2: </strong>  
                    Shohei Ohtani's annual salary is about 2 billion yen (which is, incredibly enormous). 
                    If you want to know the average income of people who graduated the same high school at the same time as him, 
                    should you use the mean or the median?
                </p>

                <p>
                    <strong>Problem 3: </strong>  
                    The mean and median of a dataset are both 50.
                    Which of the following is always true statements about the dataset? If none, why?
                    <ol>
                        <li>The dataset is perfectly symmetrical. (i.e. it looks the same when flipped left to right)</li>
                        <li>The dataset has a few extremely high or low values.</li>
                        <li>The dataset has an even number of values.</li>
                        <li>The dataset has an odd number of values.</li>
                        <li>The dataset has a mode.</li>
                        <li>The dataset contains a single middle value within itself.</li>
                    </ol>
                    
                </p>

            </div>
        </div>
    );
}
