import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import SideScrollableWrapper from '../../utils/SideScrollableWrapper';
import "katex/dist/katex.min.css";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const title = "Classification Models";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <p>
                    Classification is a method for predicting <b>categories</b>.
                    Unlike regression, which predicts numerical values,
                    classification predicts discrete labels.
                </p>

                <ul>
                    <li>Email: spam or not spam</li>
                    <li>Medical diagnosis: sick or healthy</li>
                    <li>Student result: pass or fail</li>
                </ul>

                <h2>1. Binary Classification Problem</h2>

                <p>
                    Suppose we observe how many hours a student studies per day,
                    and we classify whether the student <b>passes</b> or <b>fails</b>.
                </p>

                {/* <SideScrollableWrapper> */}
                {/* <div className="latex-center">
                    <Block math={String.raw`
                        \begin{array}{c|cccccccccc}
                        \text{Hours Studied} & 0 & 1.5 & 2 & 2 & 2.5 & 2.5 & 2.5 & 3 & 3.5 & 4 \\
                        \hline
                        \text{Result} & 
                        \text{fail} & 
                        \text{fail} & 
                        \text{fail} & 
                        \text{pass} & 
                        \text{pass} & 
                        \text{fail} & 
                        \text{pass} & 
                        \text{pass} & 
                        \text{pass} & 
                        \text{pass}
                        \end{array}
                    `} />
                </div> */}
                {/* </SideScrollableWrapper> */}

                <div className="latex-center">
                    <Block math={String.raw`
                        \begin{array}{c|c}
                        \text{Hours Studied} & \text{Result} \\
                        \hline
                        0   & \text{fail} \\
                        1.5 & \text{fail} \\
                        2   & \text{fail} \\
                        2   & \text{pass} \\
                        2.5 & \text{pass} \\
                        2.5 & \text{fail} \\
                        2.5 & \text{pass} \\
                        3   & \text{pass} \\
                        3.5 & \text{pass} \\
                        4   & \text{pass}
                        \end{array}
                    `} />
                </div>


                <p>
                    We want to learn a function:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        f(x) = \text{pass or fail}
                    `} />
                </div>

                <p>
                    Since there are only two categories,
                    this is called <b>binary classification</b>.
                </p>

                <h2>2. Supervised Classification: Logistic Regression</h2>

                <p>
                    <b>Supervised learning</b> means we have labeled data (pass/fail or could be multi-class) to train our model.
                    This is not limited to classification; we can also do supervised regression. 
                    In fact, the linear regression we discussed in the previous article is a supervised regression model.
                    <br></br>
                    A simple model for binary classification is <b>logistic regression</b>.
                    Instead of predicting a number directly,
                    it predicts the probability of passing.
                </p>

                <p>
                    We first compute a linear score. <Inline math="z" /> is called the <b>logit</b> or <b>log-odds</b>.
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        z = wx + b
                    `} />
                </div>
                

                <p>
                    The logit is continuous and can take any real value, but we want it to bound between 0 and 1 to represent a probability.
                    Thus, we transform it using a special function called <b>sigmoid</b>:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \sigma(z) = \frac{1}{1 + e^{-z}}
                    `} />
                </div>

                <p>
                    The probability of passing is:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        p(\text{pass} \mid x) = \sigma(wx + b)
                    `} />
                </div>

                <p>
                    If this probability is greater than 0.5,
                    we predict <b>pass</b>.
                    Otherwise, we predict <b>fail</b>.
                </p>

                <h3>Manual Walkthrough</h3>

                <p>
                    Suppose we choose:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        w = 3, \quad b = -7
                    `} />
                </div>

                <p>
                    For a student who studies 2 hours:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        z = 3(2) - 7 = -1
                    `} />
                </div>

                <div className="latex-center">
                    <Block math={String.raw`
                        \sigma(-1) \approx 0.27
                    `} />
                </div>

                <p>
                    So the probability of passing is 27%.
                    We predict <b>fail</b>.
                </p>

                <p>
                    For a student who studies 3 hours:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        z = 3(3) - 7 = 2
                    `} />
                </div>

                <div className="latex-center">
                    <Block math={String.raw`
                        \sigma(2) \approx 0.88
                    `} />
                </div>

                <p>
                    Now the probability is 88%.
                    We predict <b>pass</b>.
                </p>

                <p>
                    During training, the parameters <Inline math="w" /> and <Inline math="b" /> are 
                    chosen to minimize the <b>cross-entropy loss</b>:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        L =
                        - \sum_{i=1}^{n}
                        \left[
                        y_i \log p_i
                        +
                        (1-y_i)\log(1-p_i)
                        \right]
                    `} />
                </div>
        <p>
            Remark that <Inline math="\log(0)" /> is undefined, but <Inline math="p_i" /> will never be exactly 0 or 1 
            due to the sigmoid function, so the loss is always defined.
        </p>

        <p>
            Why does this work? To put it simply, loss is a measure of how bad our predictions are. <br></br>
            Intuitively, if the true label <Inline math="y_i" /> is 1 (pass), 
            we want to maximize <Inline math="p_i" /> (the predicted probability of passing), 
            which minimizes the loss. If the true label is 0 (fail), 
            we want to minimize <Inline math="p_i" />, which also minimizes the loss. 
        </p>
        <p>
            {/* <br></br> */}
            Observe that if the model predicts a probability close to the true label, the loss is small—
            if the label is 1 and the predicted probability is close to 1, <Inline math="\log p_i" /> must approach 0.
            The second term is clearly near zero in that case, so the overall loss is small. 
            Conversely, if the model predicts a probability far from the true label, the loss becomes large.            
            This loss function effectively characterizes the quality of our probability predictions,
            guiding the model to learn parameters that yield accurate probabilities!
        </p>

                <details>
                <summary style={{ cursor: "pointer", fontWeight: "bold" }}>
                    Implementation: Logistic Regression (Click to Expand)
                </summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
import numpy as np
from sklearn.linear_model import LogisticRegression

# Data
X = np.array([[0],[1.5],[2],[2],[2.5],[2.5],[2.5],[3],[3.5],[4]])
y = np.array([0,0,0,1,1,0,1,1,1,1])  # 0 = fail, 1 = pass

model = LogisticRegression()
model.fit(X, y)

print("Prediction for 2.2 hours:")
print(model.predict([[2.2]]))

print("Probability of passing:")
print(model.predict_proba([[2.2]]))
`}
</SyntaxHighlighter>
                </details>

                <h2>3. Unsupervised Classification: K-Means Clustering</h2>

                <p>
                    In <b>unsupervised learning</b>, we do not use labels (pass/fail).
                    We let the algorithm find structure in the data automatically—
                    using the principle of similarity, we can group similar data points together.
                    We call unsupervised learning for classification as <b>clustering</b>.
                    One of the most popular clustering algorithms is <b>K-means</b>.
                </p>

                <p>
                    K-means divides data into K groups by minimizing:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \sum_{i=1}^{n} \| x_i - \mu_{c_i} \|^2
                    `} />
                </div>

                <p>
                    where <Inline math="\mu_{c_i}" /> is the 
                    center of cluster 
                    <Inline math="c_i" />. <Inline math="\|\cdot\|" /> denotes L2 norm, 
                    where we measure the distance between data points and their assigned cluster centers.
                    Basically, we want to find cluster centers that minimize the distance to the data points in their respective clusters,
                    which effectively reflects the principle of similarity: data points in the same cluster are similar to each other and different from those in other clusters.
                </p>
                <p>
                    Note that K-means does not use any labels; it simply groups data based on similarity;
                    therefore, it does not know which cluster corresponds to "pass" or "fail".
                </p>

                <details>
                <summary style={{ cursor: "pointer", fontWeight: "bold" }}>
                    Implementation: K-Means (Click to Expand)
                </summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
from sklearn.cluster import KMeans
import numpy as np

X = np.array([[0],[1.5],[2],[2],[2.5],[2.5],[2.5],[3],[3.5],[4]])

kmeans = KMeans(n_clusters=2, random_state=0)
kmeans.fit(X)

print("Cluster centers:")
print(kmeans.cluster_centers_)

print("Assignments:")
print(kmeans.labels_)
`}
</SyntaxHighlighter>
                </details>

                <h2>4. From Binary to Multi-Class (Softmax)</h2>

                <p>
                    Logistic regression handles only two classes.
                    If we had three categories (for example: fail, pass, excellent),
                    we would use the <b>softmax function</b>.
                    Clustering naturally extends to multiple clusters, 
                    so we don't need a special function for that.
                    </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        p(y=k \mid x)
                        =
                        \frac{e^{w_k x + b_k}}
                        {\sum_{j=1}^{K} e^{w_j x + b_j}}
                    `} />
                </div>

                <p>
                    This produces one probability per class,
                    and we choose the class with the highest probability.
                    Binary logistic regression is simply the special case when K = 2.
                </p>

                <h2>Conclusion</h2>

                <ul>
                    <li>Classification predicts categories instead of numbers.</li>
                    <li>Binary logistic regression models probabilities using the sigmoid function.</li>
                    <li>Cross-entropy measures prediction quality.</li>
                    <li>K-means groups data without labels.</li>
                    <li>Softmax extends logistic regression to multiple classes.</li>
                </ul>

            </div>
        </div>
    );
}
