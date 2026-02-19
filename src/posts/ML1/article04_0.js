import '../../css/post.css';
import '../../css/button.css';
import {Block, Inline} from "../../components/KatexBox";
import SideScrollableWrapper from '../../utils/SideScrollableWrapper';
import "katex/dist/katex.min.css";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeDownloader from '../../components/CodeDownloader';

export const title = "Demo Walkthrough + Data Preprocessing";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <p>
                    Before applying any machine learning model,
                    we must transform raw data into a clean and structured form.
                    This process is called <b>data preprocessing</b>.
                </p>

                <p>
                    In this article, 
                    we will work with the <b>California Housing dataset</b>,
                    where the goal is to predict:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        y = \text{Median House Value}
                    `} />
                </div>

                <p>
                    using various numerical and categorical features.
                </p>

                <h2>1. Data Loading and Inspection</h2>

                <p>
                    First, we load and inspect the dataset.
                    Inspection helps us understand:
                </p>

                <ul>
                    <li>Number of samples</li>
                    <li>Feature types</li>
                    <li>Missing values</li>
                    <li>Basic statistics</li>
                </ul>

<details>
<summary style={{ cursor: "pointer", fontWeight: "bold" }}>
Implementation: Load Dataset (Click to Expand)
</summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
import pandas as pd

url = "https://raw.githubusercontent.com/ageron/handson-ml/master/datasets/housing/housing.csv"
df = pd.read_csv(url)

print(df.head())
print(df.info())

`}
</SyntaxHighlighter>
</details>
<br></br>
                <p>
                    Mathematically, we are constructing a dataset:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \{(x_i, y_i)\}_{i=1}^{n}
                    `} />
                </div>

                <p>
                    where <Inline math="x_i \in \mathbb{R}^d" /> represents feature (input) vectors,
                    and <Inline math="y_i \in \mathbb{R}" /> is the target house value.
                </p>

                <h2>2. Handling Missing Values</h2>

                <p>
                    Real-world datasets often contain missing entries (NaN).
                    Many models cannot handle undefined values.
                </p>

                <h3>Why Missing Values Are Problematic</h3>

                <p>
                    Suppose a feature vector contains NaN:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        x_i = (x_{i1}, \dots, \text{NaN}, \dots, x_{id})
                    `} />
                </div>

                <p>
                    Then any computation involving this feature becomes undefined.
                </p>

                <h3>Imputation</h3>

                <p>
                    A common solution is replacing missing values with
                    the mean:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        x_{ij} \leftarrow \frac{1}{n} \sum_{i=1}^{n} x_{ij}
                    `} />
                </div>

<details>
<summary style={{ cursor: "pointer", fontWeight: "bold" }}>
Implementation: Mean Imputation
</summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
df = df.fillna(df.mean())
`}
</SyntaxHighlighter>
</details>

                <p>
                    Median or constant-value imputation may also be used,
                    depending on data distribution.
                </p>

                <h2>3. Handling Outliers</h2>

                <p>
                    Extreme values can distort regression models.
                </p>

                <p>
                    One common rule uses the interquartile range (IQR):
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \text{IQR} = Q_3 - Q_1
                    `} />
                </div>

                <div className="latex-center">
                    <Block math={String.raw`
                        x \text{ is an outlier if } 
                        x < Q_1 - 1.5\text{IQR}
                        \text{ or }
                        x > Q_3 + 1.5\text{IQR}
                    `} />
                </div>
        <div className="image-center">
                <img src={'/images/articles/ML/iqr.png'} 
                alt="plot 1" style={{maxWidth: "95%", minHeight: "200px"}}
                />
                <figcaption className="">(reference: <a href="https://en.wikipedia.org/wiki/Interquartile_range#" target="_blank" rel="noopener noreferrer">Wikipedia</a>)</figcaption>
        </div>
        <p>
            However, in this dataset, extrema may be valid (e.g., expensive houses),
            so we may choose not to remove them. 
            The implementation is shown below for reference. 
            Just as an additional note, "~" is a bitwise NOT operator, which negates the condition to keep non-outliers.
            "|" is a bitwise OR operator, which checks if any feature is an outlier for each sample.
        </p>

<details>
<summary style={{ cursor: "pointer", fontWeight: "bold" }}>
Implementation: Remove Outliers
</summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
Q1 = df.quantile(0.25)
Q3 = df.quantile(0.75)
IQR = Q3 - Q1

df = df[~((df < (Q1 - 1.5 * IQR)) | 
          (df > (Q3 + 1.5 * IQR))).any(axis=1)]
`}
</SyntaxHighlighter>
</details>

                <h2>4. Categorical Encoding</h2>

                <p>
                    Suppose we had a categorical variable such as
                    "Ocean Proximity":
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \text{Near Bay},\ \text{Inland},\ \text{Near Ocean}
                    `} />
                </div>

                <p>
                    Regression models require numerical input.
                </p>

                <h3>One-Hot Encoding</h3>

                <p>
                    We map each category to a binary vector:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \text{Near Bay} = (1,0,0)
                    `} />
                </div>

<details>
<summary style={{ cursor: "pointer", fontWeight: "bold" }}>
Implementation: One-Hot Encoding
</summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
df = pd.get_dummies(df, columns=["ocean_proximity"])
`}
</SyntaxHighlighter>
</details>

                <p>
                    This prevents artificial ordering that would occur with label encoding.
                </p>

                <h2>5. Feature Scaling</h2>

                <p>
                    Features often have different scales.
                    For example:
                </p>

                <ul>
                    <li>Population</li>
                    <li>Median income</li>
                </ul>

                <p>
                    In gradient-based optimization, large-scale features dominate the loss:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        L = \sum (y_i - w^T x_i)^2
                    `} />
                </div>

                <p>
                    If one feature is very large,
                    its gradient component dominates:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \frac{\partial L}{\partial w_j}
                        = -2 \sum x_{ij}(y_i - w^T x_i)
                    `} />
                </div>

                <h3>Standardization</h3>
                <p>
                    We can standardize features to have a mean <Inline math="\mu=0" />  and 
                    variance <Inline math="\sigma^2=1" />, so that all features contribute equally to the loss.
                </p>
                <p>
                    Subtracting the mean "centers" the data, while dividing by the standard deviation scales it:
                </p>
                <div className="latex-center">
                    <Block math={String.raw`
                        x' = \frac{x - \mu}{\sigma}
                    `} />
                </div>
                <br></br>
                <p>
                    If this does not come to your mind immediately, let's see one example numerically:
                    suppose we have two features: population (in thousands) and median income (in tens of thousands),
                    and suppose population has a mean of 500,000 and a standard deviation of 200,000, 
                    while median income has a mean of 50,000 and a standard deviation of 10,000.
                    If we do not standardize, the population feature will have a much larger scale than median income,
                    and the model will primarily learn to fit the population feature, potentially ignoring median income.
                </p>

<details>
<summary style={{ cursor: "pointer", fontWeight: "bold" }}>
Implementation: StandardScaler
</summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(df.drop("MedHouseVal", axis=1))
`}
</SyntaxHighlighter>
</details>

                <h2>6. Feature Engineering</h2>

                <p>
                    We can construct new features to improve predictive power.
                </p>

                <p>
                    Example: ratio of rooms per household:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
                        \text{RoomsPerHousehold}
                        =
                        \frac{\text{TotalRooms}}
                        {\text{Households}}
                    `} />
                </div>
<br></br>
                <p>
                You can drop the original features after creating the new one, or keep them both.
                If you remove them, you basically eliminates the multicollinearity between the new feature and the original features, 
                which can help some models perform better and improve interpretability. 
                However, if you keep them both, some models can still learn useful information from the original features that may not be fully captured by the new feature. 
                It depends on the specific dataset and model you are using, 
                so it's often a good idea to experiment with both approaches and see which one yields better performance.
                </p>

<details>
<summary style={{ cursor: "pointer", fontWeight: "bold" }}>
Implementation: New Feature
</summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
df["RoomsPerHousehold"] = \
df["AveRooms"] / df["AveOccup"]
`}
</SyntaxHighlighter>
</details>
<h2>7. Model Building & Evaluation</h2>

<p>
    Now that our dataset is cleaned, scaled, and enriched with engineered features,
    we can begin training different regression models.
</p>

<p>
    We will compare the following models:
</p>

<ul>
    <li>Linear Regression</li>
    <li>Ridge Regression</li>
    <li>Lasso Regression</li>
    <li>Decision Tree</li>
    <li>Random Forest</li>
</ul>

<p>
    To evaluate performance, we use <strong>Mean Absolute Error (MAE)</strong>:
</p>

<div className="latex-center">
    <Block math={String.raw`
        MAE
        =
        \frac{1}{n}
        \sum_{i=1}^{n}
        |y_i - \hat{y}_i|
    `} />
</div>

<br />

<p>
    MAE is measured in US dollars, which makes interpretation straightforward.
    For example, an MAE of 40,000 means that on average, predictions are off by about $40,000.
</p>

<p>
    If you actually run the code, you will see the similar output to the following:
</p>
<img src={'/images/articles/ML/table.png'} alt="model comparison" style={{maxWidth: "95%", minHeight: "200px"}} />

<p>The full code to get the output is attached at the end of this article, just in case you want to reproduce the results.</p>

<details>
<summary style={{ cursor: "pointer", fontWeight: "bold" }}>
Implementation: Model Training & Evaluation
</summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
# ==========================================
# Regression Models & Evaluation
# ==========================================

from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.tree import DecisionTreeRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.ensemble import RandomForestRegressor
import pandas as pd
import numpy as np

# --------------------------------
# 1. Initialize Models
# --------------------------------

models = {
    "Linear Regression": LinearRegression(),
    "Ridge Regression": Ridge(alpha=1.0),
    "Lasso Regression": Lasso(alpha=0.001, max_iter=10000),
    "Decision Tree": DecisionTreeRegressor(max_depth=32, random_state=42),
    "Random Forest": RandomForestRegressor(
        n_estimators=100,
        max_depth=32,
        random_state=42
    ),
}

# --------------------------------
# 2. Train & Evaluate
# --------------------------------

results = []

for name, model in models.items():

    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)

    mae = mean_absolute_error(y_test, y_pred)

    results.append({
        "Model": name,
        "MAE": mae
    })

results_df = pd.DataFrame(results)
print(results_df)
`}
</SyntaxHighlighter>
</details>

---

<h2>8. Handling Target Skewness (Log Transformation)</h2>

<p>
    House prices are typically right-skewed:
    a small number of very expensive houses can heavily influence the model.
</p>

<p>
    To reduce skewness and stabilize variance, we apply a log transformation:
</p>

<div className="latex-center">
    <Block math={String.raw`
        y' = \log(1 + y)
    `} />
</div>

<br />

<p>
    This compresses extreme values and often improves model performance,
    especially for tree-based methods.
</p>

<details>
<summary style={{ cursor: "pointer", fontWeight: "bold" }}>
Implementation: Log-Transformed Target
</summary>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
# Log transformation of target variable
y_train_log = np.log1p(y_train)
y_test_log = np.log1p(y_test)

results = []

for name, model in models.items():

    model.fit(X_train, y_train_log)
    y_pred = model.predict(X_test)

    mse = mean_squared_error(y_test_log, y_pred)
    mae = mean_absolute_error(y_test_log, y_pred)

    results.append({
        "Model": name,
        "MSE": mse,
        "MAE": mae
    })

results_df = pd.DataFrame(results)
results_df = results_df.sort_values(by="MSE")

print(results_df)
`}
</SyntaxHighlighter>
</details>

---

<h2>9. Discussion</h2>

<p>
    From our experiments, we observe several important patterns:
</p>

<ul>
    <li>
        Linear models perform reasonably well but may struggle with nonlinear
        relationships in geographic data.
    </li>
    <li>
        Decision Trees capture nonlinear structure better but may overfit
        if depth is too large.
    </li>
    <li>
        Random Forest generally provides improved stability and performance
        by averaging multiple trees.
    </li>
    <li>
        Log transformation often reduces error by stabilizing the distribution
        of the target variable.
    </li>
</ul>

<p>
    In practice, model selection depends on your goal:
</p>

<ul>
    <li>For interpretability → Linear or Ridge Regression</li>
    <li>For predictive performance → Random Forest or boosting models</li>
</ul>

---

<h2>10. Conclusion</h2>

<p>
    In this article, we built a complete regression pipeline:
</p>

<ul>
    <li>Data preprocessing and scaling</li>
    <li>Feature engineering</li>
    <li>Multiple regression models</li>
    <li>Error comparison using MAE and MSE</li>
    <li>Target transformation to handle skewness</li>
</ul>

<p>
    This workflow demonstrates how careful preprocessing,
    thoughtful feature engineering, and appropriate model selection
    significantly impact predictive performance.
</p>

<div className="button-container">
  <CodeDownloader href="/code/housePrice.ipynb" fileName="CaliforniaHousePrice.ipynb">
    Download Full Code
  </CodeDownloader>
</div>



<p>
    Further improvements could include:
</p>

<ul>
    <li>Hyperparameter tuning with cross-validation</li>
    <li>Gradient boosting (e.g., XGBoost)</li>
    <li>Ensembling multiple models</li>
</ul>

            </div>
        </div>
        
    );
}
