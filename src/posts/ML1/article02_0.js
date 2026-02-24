import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const title = "Regression Models";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <p>
                    Regression is a method for modeling the relationship between variables.
                    Suppose we observe some data and want to predict a numerical quantity.
                    For example:
                </p>

                <ul>
                    <li>Predicting house price from square footage</li>
                    <li>Predicting exam score from study hours</li>
                    <li>Predicting temperature tomorrow from today's temperature</li>
                </ul>

                <p>
                    In each case, we have:
                </p>

                <ul>
                    <li>An <b>input variable</b> (also called feature)</li>
                    <li>An <b>output variable</b> (a real number we want to predict)</li>
                </ul>

                <p>
                    Regression attempts to find a function that maps input to output.
                </p>

                <h2>1. What Is Regression?</h2>

                <p>
                    Suppose we collect the following data about study hours and exam score:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \begin{array}{c|c}
                        \text{Hours} & \text{Score} \\
                        \hline
                        1 & 50 \\
                        2 & 55 \\
                        3 & 65 \\
                        4 & 70 \\
                        5 & 80
                        \end{array}
                    `} />
                </div>

                <p>
                    We want to predict score from hours studied.
                    A natural idea is to draw a line through the data.
                </p>

                <h2>2. Linear Regression</h2>

                <p>
                    Linear regression assumes the relationship looks like:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        y = mx + b
                    `} />
                </div>

                <p>
                    Here:
                </p>

                <ul>
                    <li><Inline math="x" /> = input (hours studied)</li>
                    <li><Inline math="y" /> = output (exam score)</li>
                    <li><Inline math="m" /> = slope (rate of change)</li>
                    <li><Inline math="b" /> = intercept</li>
                </ul>

                <p>
                    Our goal is to choose <Inline math="m" /> and <Inline math="b" /> so that the line fits the data well.
                </p>

                <h3>How Do We Measure “Fit”?</h3>

                <p>
                    For each data point, we compute the error:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \text{error}_i = y_i - (mx_i + b)
                    `} />
                </div>

                <p>
                    We square the errors to avoid negative cancellation and sum them:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        L(m,b) = \sum_{i=1}^{n} (y_i - (mx_i + b))^2
                    `} />
                </div>

                <p>
                    This is called the <b>least squares loss</b>.
                    We choose <Inline math="m" /> and <Inline math="b" /> to minimize this quantity.
                </p>

                <p>
                    Why do we use the least squares loss? Because using calculus (taking derivatives and setting them to zero),
                    we can solve for optimal values of <Inline math="m" /> and <Inline math="b" />.
                    If you are interested in machine learning, calculus is inevitable; 
                    however, we will proceed to what we can do with machine learning and how we can implement it, without going into the math details.
                </p>

                <h3>Manual Step-by-Step Computation</h3>

                <p>
                    Let's see how we could compute the slope <Inline math="m" /> and intercept <Inline math="b" /> manually for a small dataset:
                </p>

                <ul>
                    <li>Data points: (x, y) = (2, 56), (4, 75), (6, 85)</li>
                </ul>

                <p>
                    Step 1: Compute the means of <Inline math="x" /> and <Inline math="y" />:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \bar{x} = \frac{2+4+6}{3} = 4
                    `} />
                </div>

                <div className="latex-center">
                    <Block math={String.raw`
                        \bar{y} = \frac{56+75+85}{3} = 72
                    `} />
                </div>

                <p>
                    Step 2: Compute the slope using the formula:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        m = \frac{\sum_i (x_i - \bar{x})(y_i - \bar{y})}{\sum_i (x_i - \bar{x})^2}
                    `} />
                </div>

                <p>
                    Step 3: Plug in the values:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \sum_i (x_i - \bar{x})(y_i - \bar{y}) = (2-4)(56-72) + (4-4)(75-72) + (6-4)(85-72) = (-2)(-16) + 0 + (2)(13) = 32 + 26 = 58
                    `} />
                </div>

                <div className="latex-center">
                    <Block math={String.raw`
                        \sum_i (x_i - \bar{x})^2 = (2-4)^2 + (4-4)^2 + (6-4)^2 = 4 + 0 + 4 = 8
                    `} />
                </div>

                <div className="latex-center">
                    <Block math={String.raw`
                        m = \frac{58}{8} = 7.25
                    `} />
                </div>

                <p>
                    Step 4: Compute the intercept:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        b = \bar{y} - m \bar{x} = 72 - 7.25 \cdot 4 = 72 - 29 = 43
                    `} />
                </div>

                <p>
                    So the manually fitted line is approximately:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        y = 7.25x + 43
                    `} />
                </div>


                <h3>Example Result</h3>

                <p>
                    For the first study data above, the fitted line might look approximately like:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        y = 7.5x + 41.5
                    `} />
                </div>

                <p>
                    This means each additional hour increases predicted score by about 7 points.
                    Notice that the obtained line is not perfect; it does not go through all points, but it captures the overall trend.
                </p>


            <details>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>
                Implementation 1: Linear Regression from Scratch (Click to Expand)
            </summary>

              <SyntaxHighlighter
                language="python"
                style={oneDark}
                wrapLongLines={true}
                customStyle={{
                margin: 0,
                padding: "1rem",
                maxWidth: "100%",
                overflowX: "auto",
                }}
                codeTagProps={{
                style: {
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                }
                }}
            >
            {`
            import numpy as np
            from sklearn.linear_model import LinearRegression
            import matplotlib.pyplot as plt

            # Example data: hours studied vs exam score
            X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
            y = np.array([50, 55, 65, 70, 80])

            # Create model
            model = LinearRegression()
            model.fit(X, y)

            # Get parameters
            slope = model.coef_[0]
            intercept = model.intercept_

            print("Slope:", slope)
            print("Intercept:", intercept)

            # Predictions
            X_test = np.linspace(0, 6, 100).reshape(-1, 1)
            y_pred = model.predict(X_test)

            # Plot
            plt.scatter(X, y)
            plt.plot(X_test, y_pred)
            plt.xlabel("Hours Studied")
            plt.ylabel("Exam Score")
            plt.title("Linear Regression Example")
            plt.show()
            `}
            </SyntaxHighlighter>

            <p>
                This computes the best-fitting line:
                <Inline math="\hat{y} = \beta_0 + \beta_1 x" />.
            </p>
            </details>


                <h2>3. Polynomial Regression</h2>

                <p>
                    What if the data curves instead of forming a straight line?
                </p>

                <p>
                    Suppose plant growth over time looks curved.
                    A straight line may not capture this pattern well.
                </p>

                <p>
                    Polynomial regression assumes:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        y = a_2 x^2 + a_1 x + a_0
                    `} />
                </div>

                <p>
                    Now we fit a quadratic curve instead of a straight line.
                </p>

                <p>
                    The idea is exactly the same:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        L(a_0, a_1, a_2)
                        =
                        \sum_{i=1}^{n}
                        \left(
                        y_i -
                        (a_2 x_i^2 + a_1 x_i + a_0)
                        \right)^2
                    `} />
                </div>

                <p>
                    We again minimize squared error.
                </p>

                <p>
                    Higher degree polynomials allow more flexibility, but too much flexibility may lead to overfitting.
                    That means, it fits the training data very well but performs poorly on new data.
                    Think of exam preparation: if you memorize answers to specific questions, you may do well on a practice test but poorly on the actual exam with different questions.
                    The idea is analogous: if the machine learns a very complex curve that goes through every training point, it may not generalize well to new inputs.
                </p>

                <h2>4. Other Regression Algorithms</h2>

                <p>
                    Many modern regression methods extend this idea.
                    Here are a few important ones.
                </p>

                <h3>Ridge Regression</h3>

                <p>
                    Adds a penalty on large coefficients:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        L =
                        \sum (y_i - \hat{y}_i)^2
                        +
                        \lambda \sum w_j^2
                    `} />
                </div>

                <p>
                    This reduces overfitting. 
                    The parameter <Inline math="\lambda" /> controls the strength of regularization or how much the model is penalized for complexity.
                </p>

                <h3>Decision Tree Regression</h3>

                <p>
                    Instead of fitting equations, trees split data into regions
                    and assign average values.
                </p>

                <h3>Support Vector Regression (SVR)</h3>

                <p>
                    Attempts to fit a function within a tolerance margin,
                    focusing only on difficult points.
                </p>

                <h2>Example Implementation in Python (scikit-learn)</h2>

                <div className="latex-center">
                    <Block math={String.raw`
                        \text{Install: } \quad
                        \texttt{pip install scikit-learn}
                    `} />
                </div>

                <p>
                    Example code:
                </p>

{/* <div className="image-scroll">
  <img
    src="/images/slides/ca.jpeg"
    alt="Wide example"
    className="wide-image"
  />
</div> */}


<div className="code-block">
  <SyntaxHighlighter
    language="python"
    style={oneDark}
    wrapLongLines={true}
    customStyle={{
      margin: 0,
      padding: "1rem",
      maxWidth: "100%",
      overflowX: "auto",
    }}
    codeTagProps={{
      style: {
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }
    }}
  >
{`

import numpy as np
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn.tree import DecisionTreeRegressor
from sklearn.svm import SVR

# Data
X = np.array([[1],[2],[3],[4],[5]])
y = np.array([50,55,65,70,80])

# --------------------
# Linear Regression
# --------------------
model = LinearRegression()
model.fit(X,y)
print("Linear prediction for 6 hours:",
      model.predict([[6]]))

# --------------------
# Polynomial Regression (degree 2)
# --------------------
poly_model = make_pipeline(
    PolynomialFeatures(2),
    LinearRegression()
)
poly_model.fit(X,y)
print("Polynomial prediction for 6 hours:",
      poly_model.predict([[6]]))

# --------------------
# Ridge Regression
# --------------------
ridge_model = Ridge(alpha=1.0)  # alpha controls regularization strength
ridge_model.fit(X,y)
print("Ridge prediction for 6 hours:",
      ridge_model.predict([[6]]))

# --------------------
# Decision Tree Regression
# --------------------
tree_model = DecisionTreeRegressor(max_depth=3)
tree_model.fit(X,y)
print("Decision Tree prediction for 6 hours:",
      tree_model.predict([[6]]))

# --------------------
# Support Vector Regression (SVM)
# --------------------
svm_model = SVR(kernel="rbf")
svm_model.fit(X,y)
print("SVM prediction for 6 hours:",
      svm_model.predict([[6]]))


`}
</SyntaxHighlighter>
</div> 
                {/* </pre> */}

                <h2>Summary</h2>

                <ul>
                    <li>Regression predicts numerical values.</li>
                    <li>Linear regression fits a straight line.</li>
                    <li>Polynomial regression fits curves.</li>
                    <li>Regularization and tree methods provide alternatives.</li>
                </ul>

                <p>
                    In future articles, we will explore how to evaluate regression models, handle categorical variables, and apply regression to real-world datasets.
                    But before that, we will cover one more fundamental topic: classification.
                </p>

            </div>
        </div>
    );
}
