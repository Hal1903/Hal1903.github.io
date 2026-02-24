import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import CodeDownloader from '../../components/CodeDownloader';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const title = "Multilayer Perceptron";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
                <p>
                    In this article, we will explore how 
                    Multilayer Perceptron works mathematically 
                    and compare the performance of it on image classification with 
                    other powerful tools like logistic regression and XGBoost (Extra Gradient Boost Trees).
                </p>

                <p>
                    One of the strengths of deep learning is that complex model selection
                    and heavy feature engineering are often less critical than in traditional
                    machine learning. While data preprocessing is still crucial — and high-quality
                    data is especially important for large models such as GPT or domain-specific
                    language models — deep neural networks can learn useful representations
                    automatically.
                </p>

                <p>
                    Although different neural networks may include additional components
                    such as convolutional layers (for images) or attention mechanisms (for language),
                    the fundamental learning procedure remains largely the same.
                    In this article, we focus on the core structure of a Multilayer Perceptron (MLP).
                </p>

                <p>
                    In this article, we first go through the mathematical background, 
                    then we will see an example with implementation.
                </p>

                <hr />

                <h2>General Outline</h2>

                <p>
                    A neural network adjusts its weights in order to minimize the difference
                    (loss) between its predictions and the true target values.
                </p>

                <hr />

                <h2>1. Input</h2>

                <p>
                    The input can take many forms:
                </p>
                <ul>
                    <li>A single time value</li>
                    <li>A numerical feature vector</li>
                    <li>An image tensor (such as RGB pixels)</li>
                    <li>A sequence of words (for language models)</li>
                </ul>

                <p>
                    Regardless of the form, the input is simply numerical data that the
                    network processes.
                </p>

                <hr />

                <h2>2. Forward Propagation</h2>

                <p>
                    During forward propagation, each layer transforms the data
                    using a weight matrix and bias vector.
                </p>

                <Block math={`
z_l = W_l a_{l-1} + b_l
`} />

                <p>
                    Here:
                </p>
                <ul>
                    <li><Inline math="l" /> denotes the layer index</li>
                    <li><Inline math="W_l" /> is the weight matrix</li>
                    <li><Inline math="b_l" /> is the bias vector</li>
                    <li><Inline math="a_{l-1}" /> is the output from the previous layer</li>
                </ul>

                <p>
                    If there is more than one hidden layer, the network is called
                    a deep neural network.
                </p>

                <hr />

                <h2>3. Activation Function</h2>

                <p>
                    After computing <Inline math="z_l" />, we apply an activation function:
                </p>

                <Block math={`
a_l = \\sigma(z_l)
`} />

                <p>
                    The activation function introduces nonlinearity.
                    Without it, stacking multiple layers would still produce
                    only a linear model.
                </p>

                <p>
                    A common example is ReLU:
                </p>

                <Block math={`
\\text{ReLU}(x) = \\max(0, x)
`} />

                <p>
                    If the input is positive, it remains unchanged.
                    If negative, it becomes zero.
                </p>

                <p>
                    Other activation functions include:
                </p>
                <ul>
                    <li><Inline math="\tanh" /></li>
                    <li>Leaky ReLU</li>
                    <li>ELU</li>
                    <li>Swish</li>
                </ul>

                <hr />

                <h2>4. Loss Function</h2>

                <p>
                    After the final layer (denoted <Inline math="L" />),
                    we compute the loss between prediction and target.
                </p>

                <p><b>For regression (Mean Squared Error):</b></p>

                <Block math={`
\\mathcal{L} = \\frac{1}{2} ||a_L - y||^2
`} />

                <p><b>For classification (Cross-Entropy):</b></p>

                <Block math={`
\\mathcal{L} = - \\left[ y \\log(a_L) + (1 - y) \\log(1 - a_L) \\right]
`} />

                <p>
                    The loss measures how far the prediction is from the correct answer.
                </p>

                <hr />

                <h2>5. Backpropagation and Optimization</h2>

                <p>
                    Using the loss, we compute gradients and update parameters:
                </p>

                <Block math={`
W_l \\leftarrow W_l - \\eta \\frac{\\partial \\mathcal{L}}{\\partial W_l}
`} />

                <Block math={`
b_l \\leftarrow b_l - \\eta \\frac{\\partial \\mathcal{L}}{\\partial b_l}
`} />

                <p>
                    <Inline math="\eta" /> is the learning rate,
                    which controls how large each update step is.
                </p>

                <p>
                    Basic gradient descent is rarely used alone in practice.
                    More advanced optimizers such as Adam incorporate momentum
                    and adaptive learning rates.
                </p>

                <hr />

                <h2>6. Output</h2>

                <p>
                    The output depends on the task:
                </p>
                <ul>
                    <li>A predicted numerical value (regression)</li>
                    <li>A probability distribution over classes</li>
                    <li>A generated word or token (language models)</li>
                </ul>

                <hr />

                <h2>Demo</h2>
                <p>
                    We will use the MNIST dataset (28×28 grayscale handwritten digits)
                    to compare several models:
                    Logistic Regression, XGBoost, and a Multilayer Perceptron (MLP).
                    The goal is simple: classify digits 0–9.
                </p>

                {/* ====================================== */}
                <h3>1. Data Loading</h3>
                <p>
                    We load MNIST from OpenML. The dataset contains 70,000 images,
                    each flattened into a 784-dimensional vector (28×28).
                    We normalize pixel values to the range [0,1] and convert labels to integers.
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
from sklearn.datasets import fetch_openml
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

X, y = fetch_openml(
    "mnist_784",
    version=1,
    return_X_y=True,
    as_frame=False
)

# Normalize pixel values
X = X.astype('float32') / 255.0

# Convert labels from string to int
y = y.astype(int)

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.25,
    random_state=42,
    stratify=y
)

print(X_train.shape, y_train.shape)
`}
</SyntaxHighlighter>

                {/* ====================================== */}
                <h3>2. Checking the Size and Visualizing Samples</h3>
                <p>
                    Each image is stored as a flattened vector of length 784.
                    To visualize it, we reshape it back into a 28×28 matrix.
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
images_and_labels = list(zip(X, y))

for index, (data, label) in enumerate(images_and_labels[:4]):
    imgdim = int(np.sqrt(X[index].shape[0]))
    img = np.reshape(X[index], (imgdim, imgdim))
    
    plt.subplot(2, 4, index + 1)
    plt.axis('off')
    plt.imshow(img, cmap=plt.cm.gray_r)
    plt.title(f'Training: {label}')
`}
</SyntaxHighlighter>

                <p>
                    Even though the images are flattened, the underlying spatial
                    structure still exists. Neural networks can exploit this
                    structure more effectively than linear models.
                </p>

                {/* ====================================== */}
                <h3>3. Model Definition</h3>
                <p>
                    We define three models:
                </p>
                <ul>
                    <li><b>Logistic Regression</b> – a linear baseline model</li>
                    <li><b>XGBoost</b> – a strong gradient boosting tree model</li>
                    <li><b>MLP</b> – a feedforward neural network</li>
                </ul>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
from sklearn.neural_network import MLPClassifier
from xgboost import XGBClassifier
from sklearn.linear_model import LogisticRegression

models = {
    "Logistic Regression": LogisticRegression(
        max_iter=1000,
        n_jobs=-1
    ),
    
    "XGBoost": XGBClassifier(
        n_estimators=200,
        max_depth=6,
        learning_rate=0.1,
        subsample=0.8,
        colsample_bytree=0.8,
        tree_method="hist",
        eval_metric="mlogloss",
        random_state=42
    ),
    
    "MLP": MLPClassifier(
        hidden_layer_sizes=(256, 256),
        activation="relu",
        solver="adam",
        alpha=1e-4,
        learning_rate_init=0.001,
        max_iter=3000,
        early_stopping=True,
        validation_fraction=0.1,
        random_state=42
    )
}
`}
</SyntaxHighlighter>

                <p>
                    The MLP uses two hidden layers with ReLU activation.
                    Early stopping prevents overfitting by monitoring validation performance.
                </p>

                {/* ====================================== */}
                <h3>4. Training and Evaluation</h3>
                <p>
                    We train each model and evaluate accuracy on the test set.
                    Note that XGBoost and MLP may take several minutes depending
                    on hardware.
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
from sklearn.metrics import accuracy_score

results = []

for name, model in models.items():
    
    print(f"Training {name}...")
    model.fit(X_train, y_train)
    
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    
    results.append({
        "Model": name,
        "Accuracy": acc
    })

results_df = pd.DataFrame(results).sort_values(
    by="Accuracy",
    ascending=False
)

print("\\nModel Comparison:\\n")
print(results_df)
`}
</SyntaxHighlighter>
<hr></hr>
<h3>Model Comparison</h3>

<div class="table-container">
<table style={{ 
    width: "100%", 
    borderCollapse: "collapse", 
    marginTop: "1rem" 
}}>
    <thead>
        <tr style={{ borderBottom: "2px solid #ccc" }}>
            <th style={{ textAlign: "left", padding: "8px" }}>Model</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Accuracy</th>
        </tr>
    </thead>
    <tbody>
        <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "8px" }}>MLP</td>
            <td style={{ padding: "8px" }}>0.977600</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "8px" }}>XGBoost</td>
            <td style={{ padding: "8px" }}>0.975429</td>
        </tr>
        <tr>
            <td style={{ padding: "8px" }}>Logistic Regression</td>
            <td style={{ padding: "8px" }}>0.921714</td>
        </tr>
    </tbody>
</table>
</div>
<br></br>

                <p>
                    This experiment highlights an important lesson:
                    tree-based boosting models are extremely competitive on
                    structured data, while neural networks shine when
                    representation learning becomes crucial or when dataset
                    size grows even larger.
                </p>


    <CodeDownloader href="/code/ml/MLP.ipynb" fileName="MLP_image_classification.ipynb">
        Download Full Code
    </CodeDownloader>
<br></br>
<hr />

                <h2>Conclusion</h2>

                <p>
                    A neural network composed only of fully-connected linear transformations,
                    activation functions, and backpropagation is called
                    a Multilayer Perceptron.
                </p>

                <p>
                    Despite its simplicity, an MLP can approximate
                    any continuous function given enough neurons.
                    This property is known as the Universal Approximation Theorem.
                </p>

                <p>
                    MLP forms the foundation of modern deep learning.
                    More advanced architectures build upon these same core principles.
                </p>

            </div>

        </div>
    );
}