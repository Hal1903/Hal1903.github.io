import '../../css/post.css';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Block, Inline} from "../../components/KatexBox";
import SideScrollableWrapper from '../../utils/SideScrollableWrapper';
import "katex/dist/katex.min.css";

export const title = "Metrics using Titanic Dataset";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
<div className="body">

<h2>Introduction</h2>
<p>
Evaluation metrics quantify how well a machine learning model performs.
Different tasks require different metrics. In supervised learning,
regression and classification use fundamentally different evaluation criteria.
Choosing the correct metric is often more important than choosing the model itself.
</p>
<p>
    We will use Titanic dataset, one of the most popular dataset for ML learners. 
</p>

<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`from kagglehub import dataset_load, KaggleDatasetAdapter

np.random.seed(42)

df = dataset_load(
    KaggleDatasetAdapter.PANDAS,
    "yasserh/titanic-dataset",
    "Titanic-Dataset.csv"
)
df_original = df.copy()
`}
</SyntaxHighlighter>


<hr />

<h2>Preprocessing and Data Exploration</h2>
<p>
Before getting into metrics, we should briefly touch a basic preprocessing flow again.
We would like to check the following:
<ul>
    <li><b>Class balance</b> — Are the target classes evenly distributed? 
        </li>
    <li><b>Missing values</b> — Which features contain missing data and how should they be handled? 
        (e.g., Age, Cabin, Embarked.)</li>
    <li><b>Categorical features</b> — Which variables are categorical and require encoding?
        (e.g., Sex, Embarked, Pclass, Name-derived Title.)</li>
    <li><b>One-hot encoding feasibility</b> — Are categorical features low-cardinality and suitable 
        for one-hot encoding without exploding dimensionality?</li>
    <li><b>Potential feature engineering opportunities</b> — 
        Can we extract useful information such as Title from Name or FamilySize from SibSp and Parch?</li>
</ul>

If you investigate the dataset, you can see that 
<ul>
    <li><b>Total entries:</b> 891 passengers.</li>
    <li><b>Target distribution:</b> 342 survived and 549 deceased 
        (moderate class imbalance, but not severe).</li>
    <li><b>Missing values:</b>
        <ul>
            <li>Age: 177 missing values (~20%)</li>
            <li>Cabin: 687 missing values (~77%)</li>
            <li>Embarked: 2 missing values</li>
        </ul>
    </li>
    <li><b>Feature types:</b>
        <ul>
            <li>Numerical: Age, Fare, SibSp, Parch</li>
            <li>Categorical: Sex, Embarked</li>
            <li>Ordinal: Pclass (1st, 2nd, 3rd class)</li>
            <li>High-cardinality text: Name, Ticket, Cabin</li>
        </ul>
    </li>
    <li><b>One-hot encoding feasibility:</b>
        <ul>
            <li>Sex (2 categories) → suitable for one-hot encoding.</li>
            <li>Embarked (3 categories: S, C, Q) → suitable for one-hot encoding.</li>
            <li>Pclass (3 levels) → can be treated as ordinal or one-hot encoded.</li>
            <li>Ticket → extremely high cardinality (mostly unique values), not suitable for direct one-hot encoding.</li>
            <li>Name → nearly unique per passenger, not suitable for one-hot encoding (but titles can be extracted).</li>
            <li>Cabin → many missing values and high cardinality, typically dropped or simplified.</li>
        </ul>
    </li>
</ul>

</p>

<p>
For simplicity, we will drop the <b>Name</b>, <b>Cabin</b>, and <b>Ticket</b> columns, 
as they either contain high-cardinality text data or an excessive number of missing values.
</p>

<p>
Missing values in <b>Age</b> and <b>Embarked</b> will be handled using median and mode imputation, respectively.
</p>

<p>
For demonstration purposes, although the dataset is relatively small and the benefit may be limited, 
we will also explore building a predictive model to estimate missing <b>Age</b> values. 
This allows us to illustrate how model-based imputation can be implemented and evaluated.
All the preprocessing code:
</p>

<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`df['Embarked'] = df['Embarked'].fillna(df['Embarked'].mode()[0])
df = df.drop(columns=["Cabin", "Name", "Ticket"])
categorical_cols = ["Sex", "Embarked", "Pclass"]
df = pd.get_dummies(df, columns=["Sex", "Embarked"], drop_first=True)
`}
</SyntaxHighlighter>



<h2>Regression Metrics</h2>
<p>
Since Age is a continuous variable, predicting it is a regression task.
In regression problems, we evaluate model performance using metrics 
that measure the distance between predicted and true values.
Common evaluation metrics include:
</p>

<h3>Mean Squared Error (MSE)</h3>

<div className="latex-center">
<Block math={String.raw`
\text{MSE}
=
\frac{1}{n}
\sum_{i=1}^{n}
(y_i - \hat{y}_i)^2
`} />
</div>

<p>
MSE penalizes larger errors more heavily due to squaring.
It is differentiable and widely used as a training loss.
</p>

<h3>Root Mean Squared Error (RMSE)</h3>

<div className="latex-center">
<Block math={String.raw`
\text{RMSE}
=
\sqrt{\text{MSE}}
`} />
</div>

<p>
RMSE has the same units as the target variable,
making interpretation easier.
</p>

<h3>Mean Absolute Error (MAE)</h3>

<div className="latex-center">
<Block math={String.raw`
\text{MAE}
=
\frac{1}{n}
\sum_{i=1}^{n}
|y_i - \hat{y}_i|
`} />
</div>

<p>
MAE is more robust to outliers compared to MSE.
</p>

<h3>Coefficient of Determination (R²)</h3>

<div className="latex-center">
<Block math={String.raw`
R^2
=
1 -
\frac{\sum (y_i - \hat{y}_i)^2}
{\sum (y_i - \bar{y})^2}
`} />
</div>

<p>
<Inline math="R^2" /> measures the <b>proportion of variance explained by the model.</b>
An <Inline math="R^2 = 1" /> indicates perfect prediction,
while <Inline math="R^2 = 0" /> means the model performs no better than predicting the mean.
(adjusted <Inline math="R^2" /> can take negative.)
</p>

<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`# We could do median imputation, but try to predict the age and impute them
age_df = df.copy()

# Encode simple categorical features first
age_df["Age"] = df_original["Age"] # because we imputed age by median!

# Separate known / unknown ages
age_known = age_df[age_df["Age"].notnull()]
age_unknown = age_df[age_df["Age"].isnull()]

from sklearn.model_selection import train_test_split

X_age = age_known.drop("Age", axis=1)
y_age = age_known["Age"]

X_train_age, X_test_age, y_train_age, y_test_age = train_test_split(
    X_age, y_age, test_size=0.2, random_state=42
)

X_age_pred = age_unknown.drop("Age", axis=1)

# do pip install xgboost if you don't have a module
from xgboost import XGBRFRegressor

# age_model = RandomForestRegressor(n_estimators=200, max_depth=10)
age_model = XGBRFRegressor()

age_model.fit(X_train_age, y_train_age)

from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

y_pred_age = age_model.predict(X_test_age)

mae = mean_absolute_error(y_test_age, y_pred_age)
rmse = np.sqrt(mean_squared_error(y_test_age, y_pred_age))
r2 = r2_score(y_test_age, y_pred_age)

print("MAE:", mae)
print("RMSE:", rmse)
print("R2:", r2)

median_pred = np.full_like(y_test_age, y_train_age.median())
median_mae = mean_absolute_error(y_test_age, median_pred)

print("\nMedian MAE:", median_mae)
print("Model MAE:", mae)

if mae <= median_mae:
    predicted_ages = age_model.predict(X_age_pred)
    df.loc[age_unknown.index, "Age"] = predicted_ages
else:
    median_age = y_train_age.median() # avoiding data leakage
    df.loc[age_unknown.index, "Age"] = median_age
    
`}
</SyntaxHighlighter>
<br></br>
<p> You'll notice that the XGB regressor performs slightly better than simple median imputation. 
The <Inline math="R^2" /> score also indicates that the features do not explain much of the variance in age. 
This is acceptable—what matters is whether we can accurately predict survivors and deceased samples. </p>
<hr />

<h2>Classification Metrics</h2>
<p>
    Our target variable is now the "Survived" column, which contains binary values. 
    As a result, the evaluation methods differ from those used in regression, focusing on classification-specific metrics.
</p>

<h3>Confusion Matrix</h3>
<p>
    One of the most fundamental tools for evaluating binary classifiers is the confusion matrix. 
    It summarizes predictions by showing the counts of </p>

<ul>
<li>True Positive (TP)</li>
<li>True Negative (TN)</li>
<li>False Positive (FP) — Type I Error</li>
<li>False Negative (FN) — Type II Error</li>
</ul>

<p>providing a clear overview of how well the model distinguishes between 
survivors and deceased samples.</p>
<p>There are two types of classification errors:</p>
<ul>
<li><b>Type I Error (False Positive): </b> predicting positive when the true label is negative.  </li>
<li><b>Type II Error (False Negative): </b> predicting negative when the true label is positive.</li>
</ul>

<hr />

<h3>Accuracy</h3>

<div className="latex-center">
<Block math={String.raw`
\text{Accuracy}
=
\frac{TP + TN}
{TP + TN + FP + FN}
`} />
</div>

<p>
This answers “how often is the model right overall?” Accuracy measures overall correctness but can be misleading under class imbalance.
</p>
<p>
For example, if 95% of samples are negative,
a model that always predicts negative achieves 95% accuracy
while being completely useless for detecting positives.
</p>

<h3>Precision</h3>

<div className="latex-center">
<Block math={String.raw`
\text{Precision}
=
\frac{TP}{TP + FP}
`} />
</div>

<p>
Precision answers “when the model predicts positive, how often is it correct?” 
High precision means few false positives.
It is especially important when false alarms are costly,
such as spam detection or fraud detection.
</p>

<h3>Recall (Sensitivity)</h3>

<div className="latex-center">
<Block math={String.raw`
\text{Recall}
=
\frac{TP}{TP + FN}
`} />
</div>

<p>
Recall measures how many actual positives are correctly identified or caught.
</p>
<p>
High recall means a few false negatives.
It is critical in applications such as medical diagnosis,
where missing a positive case can be dangerous.
</p>

<h3>F1-Score</h3>

<div className="latex-center">
<Block math={String.raw`
F_1
=
\frac{2}{\frac{1}{\text{Precision}}+\frac{1}{\text{Recall}}}
=
2
\cdot
\frac{\text{Precision} \cdot \text{Recall}}
{\text{Precision} + \text{Recall}}
`} />
</div>

<p>
As the expression in the middle shows, the F1-score is the harmonic mean 
of precision and recall. It balances false positives and false negatives.
F1 is useful when classes are imbalanced 
and when both precision and recall matter equally.
</p>
<p>
Remark that highest F1-score does not necessarily indicate an optimal model. 
Model selection should reflect the relative cost of false positives and false negatives, 
and the primary metric should align with the real-world objective 
while keeping other errors within acceptable limits.
</p>

<h3>Demo</h3>
<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`from sklearn.model_selection import train_test_split

y = df["Survived"]
X = df.drop(columns=["Survived"])
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42, stratify=y)

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix
from sklearn.metrics import classification_report

def train_eval_predict(X_train, y_train, X_test, y_test):
    # Training
    model = RandomForestClassifier(n_estimators=100, criterion='log_loss', max_depth=32)
    model.fit(X_train, y_train)

    # Predict
    y_pred = model.predict(X_test)

    # Evaluation
    cm = confusion_matrix(y_test, y_pred)

    cm_df = pd.DataFrame(
        cm,
        index=["Actual 0", "Actual 1"],
        columns=["Predicted 0", "Predicted 1"]
    )

    print(cm_df, end="\n\n")

    # more conveniently, this method works
    print(classification_report(y_test, y_pred))
    
    return model, y_pred

model, y_pred = train_eval_predict(X_train, y_train, X_test, y_test)

# or alternatively,
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

print("Accuracy:", accuracy)
print("Precision:", precision)
print("Recall:", recall)
print("F1 Score:", f1)
`}
</SyntaxHighlighter>
<br></br>

<div className='table-container'>
<table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th></th>
            <th>Predicted 0</th>
            <th>Predicted 1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Actual 0</td>
            <td>120</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Actual 1</td>
            <td>27</td>
            <td>59</td>
          </tr>
        </tbody>
      </table>
</div>
<ul>
    <li>
        <strong>Class 0:</strong>
        <ul>
        <li>Precision: 0.82</li>
        <li>Recall: 0.88</li>
        <li>F1-score: 0.85</li>
        <li>Support: 137</li>
        </ul>
    </li>
    <li>
        <strong>Class 1:</strong>
        <ul>
        <li>Precision: 0.78</li>
        <li>Recall: 0.69</li>
        <li>F1-score: 0.73</li>
        <li>Support: 86</li>
        </ul>
    </li>
</ul>
<p>
The model's performance is decent—an F1 score of 0.9 is generally considered excellent.
However, do you remember how the predictions are classified and labeled?
So far, we've been using a threshold of 0.5, but this can be adjusted depending on our priorities.
Next, let's explore how to optimize the decision threshold using the ROC AUC curve.
</p>


<hr />

<h2>ROC Curve and AUC</h2>

<p>
The Receiver Operating Characteristic (ROC) curve visualizes
the trade-off between sensitivity and false alarm rate
across different classification thresholds. It plots:
</p>

<ul>
<li>True Positive Rate (TPR) = <Inline math="\frac{TP}{TP+FN}" /></li>
<li>False Positive Rate (FPR) = <Inline math="\frac{FP}{FP+TN}" /></li>
</ul>

<div className='image-center'>
  <img src="https://raw.githubusercontent.com/Hal1903/media/master/roc_auc_titanic.png" />
  <figcaption>
    Titanic ROC_AUC
  </figcaption>
</div>

<p>
Each point on the ROC curve corresponds to a different threshold.
Moving the threshold changes how conservative or aggressive the classifier is, 
which also affects the value of F1. 
</p>

<h3>Area Under the Curve (AUC)</h3>

<div className="latex-center">
<Block math={String.raw`
\text{AUC}
=
\int_0^1
\text{TPR}(FPR)
\, d(FPR)
`} />
</div>

<p>
AUC measures the probability that a randomly chosen positive instance
is ranked higher than a randomly chosen negative instance. 
</p>

<p>
An <Inline math="\text{AUC} = 1" /> indicates perfect separation,
while <Inline math="\text{AUC} = 0.5" /> corresponds to random guessing. 
</p>

<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`from sklearn.metrics import roc_auc_score, roc_curve
import matplotlib.pyplot as plt

# 1. Get predicted probabilities for the positive class
y_proba = model.predict_proba(X_test)[:, 1]  # probability of class 1

# 2. Compute ROC AUC
roc_auc = roc_auc_score(y_test, y_proba)
print(f"ROC AUC: {roc_auc:.3f}")

# 3. Optional: plot the ROC curve
fpr, tpr, thresholds = roc_curve(y_test, y_proba)

plt.figure(figsize=(6,6))
plt.plot(fpr, tpr, label=f"ROC curve (AUC = {roc_auc:.3f})")
plt.plot([0,1], [0,1], 'k--', label="Random chance")
plt.xlabel("False Positive Rate")
plt.ylabel("True Positive Rate")
plt.title("ROC Curve")
plt.legend()
plt.show()
`}
</SyntaxHighlighter>
<br></br>
<p>
If you would like to optimize the threshold for F1 (or could be another metric),
You can compute and plot the F1-threshold curve like this:
</p>
<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`# Get predicted probabilities for the positive class
y_proba = model.predict_proba(X_test)[:, 1]

# Generate thresholds from 0 to 1
thresholds = np.linspace(0, 1, 101)
f1_scores = []

for thresh in thresholds:
    y_pred_thresh = (y_proba >= thresh).astype(int)
    f1 = f1_score(y_test, y_pred_thresh)
    f1_scores.append(f1)

# Find the threshold with the maximum F1
best_idx = np.argmax(f1_scores)
best_thresh = thresholds[best_idx]
best_f1 = f1_scores[best_idx]

# Plot F1 vs threshold
plt.figure(figsize=(6,4))
plt.plot(thresholds, f1_scores, label="F1 score")
plt.axvline(best_thresh, color='r', linestyle='--', label=f"Best threshold = {best_thresh:.2f}")
plt.xlabel("Threshold")
plt.ylabel("F1 Score")
plt.title("F1 Score vs Decision Threshold")
plt.legend()
plt.show()

print(f"Optimal threshold: {best_thresh:.2f} with F1 score: {best_f1:.3f}")
`}
</SyntaxHighlighter>
<div className='image-center'>
  <img src="https://raw.githubusercontent.com/Hal1903/media/master/f1_thresh_titanic.png" />
  <figcaption>
    The optimal threshold for F1 is 0.52.
  </figcaption>
</div>

<hr />

<h2>Conclusion</h2>

<p>
Regression metrics measure prediction error magnitude and variance explanation.
Classification metrics evaluate decision quality under thresholding.
Understanding the relationships among precision, recall, Type I/II errors,
and ROC behavior is essential for proper model evaluation.
</p>

<p>
Metric selection should always reflect the real-world cost of errors,
not merely mathematical convenience.
</p>

</div>

        </div>
    );
}