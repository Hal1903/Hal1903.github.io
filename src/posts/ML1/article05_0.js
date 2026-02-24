import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import SideScrollableWrapper from '../../utils/SideScrollableWrapper';
import "katex/dist/katex.min.css";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeDownloader from '../../components/CodeDownloader';

export const title = "Regularization";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <p>
                    In regression problems, especially when the number of features is large 
                    or when features are highly correlated, models can become unstable and overfitting.
                    Unstable here means that small changes in the data may cause large changes in the learned coefficients.
                    This phenomenon is called <b>high variance</b>.
                </p>

                <p>
                    <b>Regularization</b> is a technique that reduces variance by 
                    constraining the size of model parameters. By reducing the variance, 
                    the learning process would be smoother and thus mitigate overfitting issue as well.
                    The most well-known regularizations introduce a penalty term into the optimization problem.
                </p>

                <h2>Problem Setup</h2>
                <p>
                We are going to predict the LPSA level using prostate cancer data features. 
                After loading and splitting them into training and testing sets, make sure to standardize them.
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
# ==========================================
# 1. Data Loading + Target & Feature Definition
# ==========================================

import pandas as pd
import numpy as np

url = "https://web.stanford.edu/~hastie/ElemStatLearn/datasets/prostate.data"
df = pd.read_csv(url, sep="\t")

# Remove unnamed index column
df = df.drop(columns=["Unnamed: 0"])

print("Shape:", df.shape)
print(df.head())

# Define target and features
y = df["lpsa"]                      # log PSA level (target)
X = df.drop(columns=["lpsa", "train"])

# ==========================================
# 2. Train/Test Split + Standardization
# ==========================================

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)

scaler = StandardScaler()

X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

print("Training shape:", X_train.shape)
`}
</SyntaxHighlighter>

                <h2>1. Ordinary Least Squares (OLS)</h2>
                <p>
                    Before going to regularization, we will introduce least square method,
                    which is necessary to understand the mathematical background in regularization.
                    Even if you are not interested in math, OLS is still a popular regression tool,
                    so this still remains worth knowing.
                </p>
                <p>
                    Suppose we have 
                    training data <Inline math="X \in \mathbb{R}^{n \times p}" /> and 
                    targets <Inline math="y \in \mathbb{R}^n" />. <Inline math="\beta \in \mathbb{R}^n" /> is
                    a coefficient vector.
                    Linear regression assumes:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        y = X\beta + \varepsilon
                    `} />
                </div>

                <p>
                    The goal of Ordinary Least Squares (OLS) is to minimize the 
                    squared residual error:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \min_{\beta}
                        \| y - X\beta \|_2^2
                    `} />
                </div>

                <p>
                    Expanding this gives:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \| y - X\beta \|_2^2
                        =
                        (y - X\beta)^T (y - X\beta)
                    `} />
                </div>

                <p>
                    Setting the gradient to zero yields the closed-form solution:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \hat{\beta}_{OLS}
                        =
                        (X^T X)^{-1} X^T y
                    `} />
                </div>

                <p>
                    However, this requires 
                    <Inline math="X^T X" /> to be invertible.
                    If features are highly correlated (multicollinearity),
                    the matrix becomes nearly singular,
                    causing unstable coefficient estimates.
                </p>

                <p>
                    You may want to prove if you can really get this expression from the gradient of this norm.
                    The proof might be tedious, but the flow itself should be fairly straightforward if you understand linear algebra.
                </p>
                <p>
                    For implementation, you may use the sklearn library to save your time.
                    However, the formula above is almost requirement to understanding the
                    theory discussed in the upcoming topics.
                </p>
<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
# ==========================================
# 3. Ordinary Least Squares (OLS)
# ==========================================

from sklearn.linear_model import LinearRegression

ols = LinearRegression() # model
ols.fit(X_train, y_train) # train

print("OLS Coefficients:")
print(ols.coef_)
`}
</SyntaxHighlighter>

                <h2>2. L2 Regularization — Ridge Regression</h2>

                <p>
                    Ridge regression adds an <b>L2 penalty</b> to the loss:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \min_{\beta}
                        \left(
                        \| y - X\beta \|_2^2
                        +
                        \lambda \|\beta\|_2^2
                        \right)
                    `} />
                </div>

                <p>
                    where
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \|\beta\|_2^2 = \sum_{j=1}^{p} \beta_j^2
                    `} />
                </div>

                <p>
                    The second term inside minimum basically penalizes 
                    reliance on one strong feature and
                    the unnecessary weights on ineffective features, encouraging
                    the weights to be more distributed and efficient.
                </p>

                <p>
                    The hyperparameter 
                    <Inline math="\lambda \ge 0" /> 
                    controls the strength of regularization.
                    The closed-form solution becomes:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \hat{\beta}_{ridge}
                        =
                        (X^T X + \lambda I)^{-1} X^T y
                    `} />
                </div>

                <p>
                    The matrix 
                    <Inline math="X^T X + \lambda I" /> 
                    is always invertible when 
                    <Inline math="\lambda > 0" />,
                    which stabilizes the solution.
                </p>

                <p>
                    Geometrically, Ridge shrinks coefficients smoothly toward zero,
                    but never exactly to zero. Again, sklearn has already prepared a shortcut:
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
# ==========================================
# 4. Ridge Regression (Tuned)
# ==========================================

from sklearn.linear_model import Ridge
from sklearn.model_selection import GridSearchCV

alpha_grid = {"alpha": np.logspace(-4, 3, 100)}

ridge_grid = GridSearchCV(
    Ridge(),
    alpha_grid,
    cv=4, # cross validation
    scoring="neg_mean_absolute_error",
    n_jobs=-1
)

ridge_grid.fit(X_train, y_train)
best_ridge = ridge_grid.best_estimator_

print("Best Ridge alpha:", ridge_grid.best_params_)
`}
</SyntaxHighlighter>

                <h2>3. L1 Regularization — LASSO</h2>

                <p>
                    LASSO (Least Absolute Shrinkage and Selection Operator)
                    replaces the squared penalty with an L1 penalty:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \min_{\beta}
                        \left(
                        \| y - X\beta \|_2^2
                        +
                        \lambda \|\beta\|_1
                        \right)
                    `} />
                </div>

                <p>
                    where
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \|\beta\|_1 = \sum_{j=1}^{p} |\beta_j|
                    `} />
                </div>

                <p>
                    Unlike Ridge, LASSO does <b>not</b> have a simple closed-form solution.
                    The absolute value makes the objective non-differentiable at zero,
                    so iterative optimization methods such as 
                    coordinate descent are used.
                </p>

                <p>
                    A key property:
                    L1 regularization can force some coefficients to be <b>exactly zero</b>.
                    Therefore, LASSO performs automatic feature selection.
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
# ==========================================
# 5. LASSO 
# ==========================================

from sklearn.linear_model import Lasso, LassoCV

lasso_cv = LassoCV(
    alphas=np.logspace(-4, 4, 300),
    cv=4,
    max_iter=20000,
    n_jobs=-1,
    random_state=42
)

lasso_cv.fit(X_train, y_train)

best_lasso = Lasso(alpha=lasso_cv.alpha_, max_iter=20000)

print("Best Lasso alpha:", lasso_cv.alpha_)
`}
</SyntaxHighlighter>

                <h2>4. Elastic Net — Combining L1 and L2</h2>

                <p>
                    Elastic Net combines both penalties:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \min_{\beta}
                        \left(
                        \| y - X\beta \|_2^2
                        +
                        \lambda
                        \left(
                        \alpha \|\beta\|_1
                        +
                        (1-\alpha)\|\beta\|_2^2
                        \right)
                        \right)
                    `} />
                </div>

                <p>
                    where 
                    <Inline math="0 \le \alpha \le 1" />.
                </p>

                <ul>
                    <li><Inline math="\alpha = 1" /> → LASSO</li>
                    <li><Inline math="\alpha = 0" /> → Ridge</li>
                </ul>

                <p>
                    Elastic Net is particularly useful when features are highly correlated.
                    LASSO may arbitrarily select one feature and ignore others,
                    while Elastic Net can keep groups of correlated features.
                </p>

                <h2>5. When Regularization Helps</h2>

                <ul>
                    <li>When the number of features is large relative to samples</li>
                    <li>When multicollinearity exists</li>
                    <li>When OLS shows large variance across folds</li>
                    <li>When overfitting is observed</li>
                </ul>

                <p>
                    Regularization introduces <b>bias</b> but reduces <b>variance</b>.
                    This is the classic bias–variance tradeoff.
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \text{Test Error}
                        =
                        \text{Bias}^2
                        +
                        \text{Variance}
                        +
                        \text{Noise}
                    `} />
                </div>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
# ==========================================
# 6. Elastic Net (L1 + L2)
# ==========================================

from sklearn.linear_model import ElasticNetCV

elastic = ElasticNetCV(
    l1_ratio=np.linspace(0.01, 0.2, 20),
    alphas=np.logspace(-4, 3, 100),
    cv=4,
    max_iter=20000,
    random_state=42
)

elastic.fit(X_train, y_train)

print("Best Elastic alpha:", elastic.alpha_)
print("Best Elastic l1_ratio:", elastic.l1_ratio_)
`}
</SyntaxHighlighter>

<h3>Model Comparison</h3>

<div class="table-container">
<table className="comparison-table">
    <thead>
        <tr>
            <th>Model</th>
            <th>MAE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Elastic</td>
            <td>0.476072</td>
        </tr>
        <tr>
            <td>Ridge (Tuned)</td>
            <td>0.480390</td>
        </tr>
        <tr>
            <td>Linear Regression</td>
            <td>0.496802</td>
        </tr>
        <tr>
            <td>Lasso (Tuned)</td>
            <td>0.501044</td>
        </tr>
        <tr>
            <td>Random Forest</td>
            <td>0.632334</td>
        </tr>
        <tr>
            <td>Decision Tree</td>
            <td>0.815808</td>
        </tr>
    </tbody>
</table>
</div>
<p>
    We can observe that Elastic Net performs the best.
    However, this is the product of careful parameter tuning;
    if you do this naively, you could get Ridge regression performing the best.
    Actually, the first result I got from elastic net was 0.49 or a bit worse, so
    combining L1 and L2 does not automatically mean it is strictly better than L1 and L2!
</p>

                <h2>6. When Regularization Can Perform Worse</h2>

                <ul>
                    <li>If the true relationship is simple and data is abundant</li>
                    <li>If important coefficients are heavily shrunk</li>
                    <li>If features are already well-conditioned</li>
                </ul>

                <p>
                    In low-variance settings with sufficient data,
                    OLS may outperform regularized models
                    because it introduces no shrinkage bias.
                </p>

                <h2>7. Geometric Intuition</h2>

                <p>
                    The constraint regions explain the difference:
                </p>

                <ul>
                    <li>L2 penalty → circular constraint</li>
                    <li>L1 penalty → diamond-shaped constraint</li>
                </ul>

                <p>
                    The sharp corners of the L1 constraint 
                    increase the probability that the solution lies exactly on an axis,
                    producing sparse coefficients.
                </p>
                <p>
                    Below is a visual interpretation of L1 and L2 regularization.
                    Although this picture is widely used to explain the regularization, 
                    I personally don't like this; this took me years to fully comprehend.
                    Once you understand, this is indeed a great illustration, but this might not be a beginner-friendly picture.
                    So, I will provide a supplementary description together.
                    
                </p>
                <br></br>
                <div className="image-center">
                <img alt="pic" style={{maxWidth: "85%",}}
                src="https://upload.wikimedia.org/wikipedia/commons/5/58/Regularization.jpg">
                </img>

                <figcaption>
                    It requires readers to understand following components: <br></br>
                    (1) The center of the ellipse <Inline math="\hat\beta" /> is the unique solution of the weights from OLS.
                    <br></br>
                    (2) Each elliptic curve from the center describes a unit change from the optimal weights based on OLS.
                    <br></br>
                    (3) <Inline math="\beta_1" /> has smaller contribution to predict the target <Inline math="y" />,
                    so smaller change in <Inline math="\beta_1" /> causes to have a 
                    smaller step toward optimal direction by this unit change.
                    Meanwhile, <Inline math="\beta_2" /> has larger contribution and thus has the larger step per unit change in <Inline math="\beta_2" />
                    <br></br>
                    (4) The circle or diamond (focus on the outermost line!) describes 
                    the regularization term: 
                    <b><Inline math="\lambda || \beta_1+\beta_2 || = \lambda (||\beta_1||^2 + ||\beta_2||^2)" />,</b>
                    which is precisely the <b>algebraic formula of a circle.</b>
                    <br></br>
                    (5) If you increase the <Inline math="\lambda" /> you are basically increasing the radius.
                    Intersection point of the ellipse and circle is the optimal point under regularization.
                    If you increase the lambda, you get less effect on mitigating overfit 
                    because you don't have much effect from large steps that <Inline math="\beta_2" /> could make.
                </figcaption>
                <p>
                In reality, features are much more complex and high dimensional, but the idea remains the same.
                I hope this caption helps you to get the concept. But this geometrical interpretation is optional, I would say.
                Just remember that L2 does not squash the weights down to 0, but L1 can.
                </p>
                </div>

                <br></br>
<hr></hr>
<br></br>
    <CodeDownloader href="/code/ml/prostate_cancer.ipynb" fileName="prostate_cancer.ipynb">
        Download Full Code
    </CodeDownloader>

                <h2>Conclusion</h2>

                <ul>
                    <li>OLS minimizes squared residuals.</li>
                    <li>Ridge adds an L2 penalty and stabilizes inversion.</li>
                    <li>LASSO adds an L1 penalty and performs feature selection.</li>
                    <li>Elastic Net combines both.</li>
                    <li>Regularization trades bias for lower variance.</li>
                </ul>

            </div>
        </div>
    );
}