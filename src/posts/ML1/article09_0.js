import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import SideScrollableWrapper from '../../utils/SideScrollableWrapper';
import "katex/dist/katex.min.css";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeDownloader from '../../components/CodeDownloader';

export const title = "Neural Networks using PyTorch";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
<p>
In the previous discussion, we established the mathematical foundations of MLP, 
including linear transformations, activation functions, loss functions, and gradient-based optimization. 
In this article, we transition from theory to implementation by constructing a fully connected neural network 
using PyTorch.
</p>

<p>
PyTorch provides a flexible and modular framework that scales from simple feedforward networks 
to advanced architectures such as convolutional networks and transformers.
This article emphasizes practical aspects of building neural networks with GPU acceleration
within the PyTorch ecosystem. 
</p>

                <h2>1. Dataset Preparation and Preprocessing</h2>

                <p>
                We begin by loading the MNIST dataset using sklearn. The dataset consists of 28×28 grayscale images 
                of handwritten digits, flattened into 784-dimensional vectors. Since the raw pixel values range from 
                0 to 255, we normalize them to the range [0, 1] by dividing by 255. This improves numerical stability 
                and accelerates training.
                </p>

                <p>
                Labels are converted to integer type because PyTorch’s CrossEntropyLoss expects class indices 
                in integer (long) format rather than strings.
                </p>

                <p>
                Finally, we split the dataset into training and testing sets using train_test_split. 
                This allows us to train the model on one subset and evaluate generalization on unseen data.
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
from sklearn.datasets import fetch_openml
from sklearn.model_selection import train_test_split

X, y = fetch_openml(
    "mnist_784",
    version=1,
    return_X_y=True,
    as_frame=False   # ensures numpy arrays instead of pandas
)

X = X.astype('float32') / 255.0
y = y.astype(int) # converting to int from str

# Split data into training and testing sets if needed
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

import torch
from torch.utils.data import TensorDataset, DataLoader

# Convert numpy arrays to torch tensors
X_train_tensor = torch.tensor(X_train)
y_train_tensor = torch.tensor(y_train, dtype=torch.long) # long is required for CrossEntropy

X_test_tensor = torch.tensor(X_test)
y_test_tensor = torch.tensor(y_test, dtype=torch.long)

model = FNN()
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

`}
</SyntaxHighlighter>

                <h2>2. Core PyTorch Modules</h2>

                <p>
                PyTorch provides several key modules required for neural network implementation:
                </p>
                <p>
                <b>torch.nn</b> contains layers and loss functions.  
                <br />
                <b>torch.optim</b> provides optimization algorithms such as Adam and SGD.  
                <br />
                <b>torch.utils.data</b> includes utilities like Dataset and DataLoader for batching and shuffling.  
                <br />
                <b>torchvision.transforms</b> offers image preprocessing tools.
                </p>

                <p>
                These modules collectively handle model definition, optimization, and data pipeline management.
                </p>

                <h2>3. Defining the Neural Network Class</h2>

                <p>
                The model inherits from nn.Module, which is the base class for all neural networks in PyTorch. 
                Every custom model must subclass nn.Module and implement two components: the constructor 
                (__init__) and the forward method. Here is the implementation, 
                and the description of each line is attached afterward:
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import datasets, transforms
from torch.utils.data import DataLoader


# Define a transform to convert the data to tensors and normalize it
transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,)),
])

class FNN(nn.Module):
    def __init__(self):
        super(FNN, self).__init__()

        self.network = nn.Sequential(
            nn.Linear(784, 128),
            nn.ReLU(),
            nn.Dropout(0.5),

            nn.Linear(128, 64),
            nn.ReLU(),
            nn.Dropout(0.5),

            nn.Linear(64, 10)
        )

    def forward(self, x):
        # x.size(0) return (batch_size, channels, height, width) -- for MNIST x.shape = (64, 1, 28, 28)
        # x.view(x.size(0), -1)  # x.view reshapes/flattens batch properly. -1 to determine the dimension automatically.
        # # but, sklearn mnist is already flattened! so we don't need x.view(...). For torchvision mnist data, we do. 
        x = self.network(x)
        return x
model = FNN()
print(model)
`}
</SyntaxHighlighter>

                <h3>3.1 Using nn.Sequential</h3>

                <p>
                nn.Sequential allows stacking layers in a linear order. Instead of defining each layer manually 
                and calling them one by one inside forward, we place them inside a Sequential container.
                </p>

                <p>
                The architecture consists of:
                </p>

                <p>
                Linear(784 → 128) → ReLU → Dropout  
                Linear(128 → 64) → ReLU → Dropout  
                Linear(64 → 10)
                </p>

                <p>
                784 is a length of an input digit (28*28).
                The final layer outputs raw logits (unnormalized scores) for 10 digit classes.
                </p>

                <h3>3.2 Dropout</h3>

                <div className='image-center'>
                <img src="https://thepythoncode.com/media/articles/dropout-regularization-in-pytorch/dopoutrepr.png" alt="dropout" />    
                </div>

                <p>
                Dropout randomly sets a percentage of neuron activations to zero during training. 
                With Dropout(0.5), half of the activations are randomly deactivated at each forward pass. 
                This prevents overfitting by reducing reliance on specific neurons and encourages 
                the network to learn more robust representations. You may think of this as a regularization method.
                </p>

                <p>
                Note that dropout is automatically disabled during evaluation mode.
                </p>

                <h3>3.3 The Forward Method</h3>

                <p>
                The forward method defines how data flows through the network. 
                When calling model(inputs), PyTorch automatically invokes forward.
                </p>

                <p>
                If using torchvision MNIST, images have shape (batch_size, 1, 28, 28) 
                and must be flattened using x.view(x.size(0), -1). 
                In our case, sklearn already provides flattened vectors, 
                so no reshaping is necessary.
                </p>

                <h2>4. Converting Data to Tensors</h2>

                <p>
                PyTorch operates on tensors rather than NumPy arrays. 
                Therefore, we convert the training and testing sets to torch.tensor objects.
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
# Convert numpy arrays to torch tensors
X_train_tensor = torch.tensor(X_train)
y_train_tensor = torch.tensor(y_train, dtype=torch.long) # long is required for CrossEntropy

X_test_tensor = torch.tensor(X_test)
y_test_tensor = torch.tensor(y_test, dtype=torch.long)
`}
</SyntaxHighlighter>
                <p>
                Labels must be converted using dtype=torch.long because CrossEntropyLoss 
                requires integer class indices.
                </p>

                <h2>5. TensorDataset and DataLoader</h2>

                <h3>5.1 TensorDataset</h3>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`
from torch.utils.data import TensorDataset, DataLoader

# Dataloader makes implementation easier and training more efficient
train_dataset = TensorDataset(X_train_tensor, y_train_tensor)
test_dataset = TensorDataset(X_test_tensor, y_test_tensor)

train_loader = DataLoader(train_dataset, batch_size=512, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=512, shuffle=False)


model = FNN()
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
`}
</SyntaxHighlighter>
                <p>
                TensorDataset wraps feature tensors and label tensors together. 
                Each index corresponds to a single (input, label) pair.
                </p>

                <h3>5.2 DataLoader</h3>

                <p>
                DataLoader handles batching, shuffling, and iteration over the dataset.
                </p>

                <p>
                batch_size=512 means 512 samples are processed per iteration.  
                shuffle=True randomizes the order of training samples each epoch, 
                which improves convergence.  
                shuffle=False is used for testing to maintain deterministic evaluation.
                </p>

                <p>
                DataLoader significantly simplifies mini-batch gradient descent implementation.
                </p>

                <h2>6. Loss Function and Optimizer</h2>

                <p>
                CrossEntropyLoss combines two operations internally:
                </p>

                <p>
                LogSoftmax on the output logits  
                Negative Log Likelihood loss
                </p>

                <p>
                Therefore, we do not apply Softmax manually in the final layer.
                </p>

                <p>
                Adam optimizer adapts learning rates for each parameter using 
                first and second moment estimates. It generally converges faster 
                than standard stochastic gradient descent for feedforward networks.
                </p>

                <h2>7. CUDA and Device Management</h2>

                <p>
                To utilize GPU acceleration, we define:
                </p>

<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true} 
>
{`const device = torch.device("cuda" if available else "cpu")
`}
</SyntaxHighlighter>

                <p>
                The model and data must both be moved to the same device 
                using .to(device). If either remains on CPU while the other 
                is on GPU, computation will fail.
                </p>

                <p>
                When CUDA is available, matrix multiplications and backpropagation 
                are executed on the GPU, significantly accelerating training 
                for larger models.
                </p>

                <h2>8. Training Loop</h2>
<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`model = FNN()
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

for epoch in range(100):
    model.train()
    running_loss = 0.0

    for inputs, labels in train_loader:
        inputs, labels = inputs.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        running_loss += loss.item()
    if epoch % 10 == 9:
        print(f"Epoch {epoch+1}, Loss: {running_loss/len(train_loader):.4f}")
`}
</SyntaxHighlighter>
                <p>
                Each epoch consists of iterating over all mini-batches in the training loader.
                </p>

                <p>
                model.train() activates training mode, enabling dropout.
                </p>

                <p>
                The training steps per batch are:
                </p>

                <ol>
                <li>Zero existing gradients using optimizer.zero_grad() </li>
                <li>Forward pass: outputs = model(inputs)  </li>
                <li>Compute loss  </li>
                <li>Backward pass: loss.backward() </li> 
                <li>Parameter update: optimizer.step() </li>
                </ol>

                <p>
                running_loss accumulates batch losses and is averaged 
                over the number of batches to monitor training progress.
                </p>

                <h2>9. Evaluation Mode</h2>
<SyntaxHighlighter language="python" style={oneDark} wrapLongLines={true}>
{`model.eval()
correct = 0
total = 0

with torch.no_grad():
    for inputs, labels in test_loader:
        inputs, labels = inputs.to(device), labels.to(device)
        outputs = model(inputs)
        _, predicted = torch.max(outputs, 1)

        total += labels.size(0)
        correct += (predicted == labels).sum().item()

accuracy = 100 * correct / total
print(f"Test Accuracy: {accuracy:.2f}%")`}
</SyntaxHighlighter>
<br></br>
                <p>
                <b>model.eval()</b> switches the network to evaluation mode. 
                Dropout and batch-dependent layers behave deterministically.
                </p>

                <p>
                <b>torch.no_grad()</b> disables gradient computation, reducing 
                memory usage and speeding up inference.
                </p>

                <p>
                Predictions are obtained using:
                </p>

                <p><b>
                _, predicted = torch.max(outputs, 1)
                </b></p>

                <p>
                This selects the class with the highest logit score.
                Accuracy is then computed as the percentage of correctly 
                classified samples.
                </p>

    <CodeDownloader href="/code/ml/FNN.ipynb" fileName="FNN.ipynb">
        Download Full Code
    </CodeDownloader>

                <h2>10. Comparison with sklearn MLP & Conclusion</h2>

                <p>
                Performance is typically similar to sklearn's MLPClassifier 
                for MNIST with comparable architecture. 
                However, sklearn may train faster on small datasets 
                because it is highly optimized 
                for CPU execution and uses internal vectorized routines.
                </p>

                <p>
                The advantage of PyTorch lies in flexibility. 
                You can easily extend this implementation to convolutional networks, 
                custom architectures, advanced regularization techniques, 
                and GPU acceleration for large-scale problems.
                </p>

                <p>
                In the next article, we will move beyond fully connected networks 
                and introduce convolutional neural networks for image processing tasks.
                </p>

            </div>

        </div>
    );
}