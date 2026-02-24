import '../../css/post.css';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Block, Inline} from "../../components/KatexBox";
import SideScrollableWrapper from '../../utils/SideScrollableWrapper';
import "katex/dist/katex.min.css";

export const title = "Convolutional Neural Networks";

export default function ArticleCNN() {

const transformCode = `transform = transforms.Compose(
    [
        transforms.ToTensor(),
        transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
    ]
)`;

const datasetCode = `batch_size = 8

trainset = torchvision.datasets.CIFAR10(root='./data', train=True,
                                        download=True, transform=transform)
trainloader = torch.utils.data.DataLoader(trainset, batch_size=batch_size,
                                          shuffle=False, num_workers=2)

testset = torchvision.datasets.CIFAR10(root='./data', train=False,
                                       download=True, transform=transform)
testloader = torch.utils.data.DataLoader(testset, batch_size=batch_size,
                                         shuffle=False, num_workers=2)

classes = ('plane', 'car', 'bird', 'cat',
           'deer', 'dog', 'frog', 'horse', 'ship', 'truck')`;

const modelCode = `class Net(nn.Module):
    def __init__(self):
        super().__init__()

        self.conv_block1 = nn.Sequential(
            nn.Conv2d(3, 32, 3, padding=1),
            nn.BatchNorm2d(32),
            nn.ReLU(),
            nn.Conv2d(32, 32, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )

        self.conv_block2 = nn.Sequential(
            nn.Conv2d(32, 64, 3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.Conv2d(64, 64, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )

        self.fc = nn.Sequential(
            nn.Linear(64 * 8 * 8, 256),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(256, 10)
        )

    def forward(self, x):
        x = self.conv_block1(x)
        x = self.conv_block2(x)
        x = torch.flatten(x, 1)
        x = self.fc(x)
        return x`;

const trainingCode = `criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(net.parameters(), lr=0.001, weight_decay=5e-4)

for epoch in range(5):
    running_loss = 0.0
    batch_count = 0

    for i, data in enumerate(trainloader):
        inputs, labels = data

        optimizer.zero_grad()
        outputs = net(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        running_loss += loss.item()
        batch_count += 1`;

const evaluationCode = `correct = 0
total = 0

with torch.no_grad():
    for data in testloader:
        images, labels = data
        outputs = net(images)
        _, predicted = torch.max(outputs, 1)
        total += labels.size(0)
        correct += (predicted == labels).sum().item()

print(f'Accuracy: {100 * correct // total} %')`;

return (
<div className="container">
<div className="title">
<h1>{title}</h1>
</div>

<div className="body">

<h2>Introduction</h2>
<p>
We now move from fully connected networks to convolutional neural networks. 
Unlike multilayer perceptrons, CNNs preserve spatial structure and learn local feature patterns 
using convolutional filters. This implementation uses CIFAR-10, a dataset of 32×32 RGB images 
across 10 object categories (inarguably the most complex dataset we have ever used!).
</p>
<hr />

<h2>Data Transformation and Normalization</h2>
<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{transformCode}
</SyntaxHighlighter>
<p> <br></br>
<b>transforms.Compose</b> chains preprocessing steps. <b>ToTensor</b> converts images to tensors 
and rescales pixel values. Normalize shifts the distribution to approximately 
[-1,1] using channel-wise mean and standard deviation using 
</p>

<div className="latex-center">
<Block math={String.raw`
x' = \frac{x - \mu}{\sigma}
`} />
</div>

<p>
In our case, we approximate  <Inline math="\mu = 0.5" /> and  <Inline math="\sigma = 0.5" />, 
which shifts values from <Inline math="[0,1]" /> to approximately <Inline math="[-1,1]" />.
</p>

<p>
Because CIFAR-10 images are RGB, normalization requires three values, one per channel.
</p>

<hr />

<h2>Dataset and DataLoader</h2>
<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{datasetCode}
</SyntaxHighlighter>
<p> <br></br>
<b>torchvision.datasets.CIFAR10</b> automatically downloads and structures the dataset. 
The transform argument ensures preprocessing is applied during loading.
</p>
<p>
<b>DataLoader</b> handles batching and parallel loading. batch_size controls how many images 
are processed per iteration. num_workers enables multiprocessing for faster data fetching.
</p>
<p>
The classes tuple maps numerical labels to readable class names.
</p>

<hr />



<h2>Convolutional Network Architecture</h2>


<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{modelCode}
</SyntaxHighlighter>

<h3>First Convolutional Block</h3>

<p>
You may check out the gif below to build intuition for convolution.
<b>nn.Conv2d(3, 32, 3, padding=1)</b> applies 32 learnable filters of 
size <Inline math="3 \times 3" /> to an RGB input image.
Padding ensures the spatial resolution remains 
<Inline math="32 \times 32" />.
</p>

<p>
Each filter is a small weight tensor that slides across the input.
At every spatial location, it computes a weighted sum of the local patch.
In practice (as implemented in deep learning libraries),
this operation is cross-correlation rather than strict mathematical convolution.
</p>

<div className="latex-center">
<Block math={String.raw`
Y(i,j)
=
\sum_{u=1}^{K}
\sum_{v=1}^{K}
X(i+u, j+v) W(u,v)
`} />
</div>

<p>
The output spatial dimension is determined by:
</p>

<div className="latex-center">
<Block math={String.raw`
H_{out}
=
\left\lfloor
\frac{H_{in} + 2P - K}{S}
\right\rfloor + 1
`} />
</div>

<ul>
    <li><Inline math="H_{in}" />: input height</li>
    <li><Inline math="P" />: padding</li>
    <li><Inline math="K" />: kernel size</li>
    <li><Inline math="S" />: stride</li>
</ul>

<p>
In our case:
<Inline math="H_{in}=32" />, <Inline math="P=1" />,
<Inline math="K=3" />, <Inline math="S=1" />.
This gives <Inline math="H_{out}=32" />.
</p>

<p>
Each <Inline math="3 \times 3" /> filter computes one scalar per spatial location
via element-wise multiplication and summation (often informally called a Hadamard product followed by summation).
Sliding the filter over the entire image produces one feature map.
</p>

<p>
Because the input is RGB, the actual filter is 
3-dimensional: <Inline math="3 \times 3 \times 3" />.
Formally:
</p>

<div className="latex-center">
<Block math={String.raw`
Y_k(i,j)
=
\sum_{c=1}^{3}
(X_c * W_{k,c})(i,j) + b_k
`} />
</div>

<p>
Thus each filter spans all three color channels.
Since we define 32 filters, the output tensor has shape:
<Inline math="(N, 32, 32, 32)" /> before pooling.
</p>

<p>
In the demo gif, only one filter is shown for visualization.
In our actual code, 32 different filters are learned simultaneously,
each producing its own feature map.
</p>

<div className='image-center'>
  <img src="https://raw.githubusercontent.com/Hal1903/CNN_demo/master/CNNFilterDemo_ManimCE_v0.19.1.gif" />
  <figcaption>
    created by Manim.
  </figcaption>
</div>

<p>
BatchNorm2d after convolution stabilizes learning by normalizing feature maps per channel. 
ReLU introduces non-linearity. 
MaxPool2d(2) halves spatial dimensions from 32×32 to 16×16.

<p>
After two pooling operations:
</p>

<div className="latex-center">
<Block math={String.raw`
32 \times 32 
\rightarrow 16 \times 16
\rightarrow 8 \times 8
`} />
</div>

<p>
Final tensor shape becomes 
<Inline math="(N, 64, 8, 8)" />, 
which is reshaped (flattened) to 
<Inline math="(N, 64 \cdot 8 \cdot 8)" />.
</p>
</p>



<h3>Second Convolutional Block</h3>
<p>
The second block increases channel depth from 32 to 64. 
After another pooling layer, spatial resolution becomes 8×8. 
However, the basic process is the same as the first block;
this only differs by the dimensions of the data we have.
</p>
<p>
At this point, the feature tensor has shape (batch_size, 64, 8, 8).
</p>

<h3>Fully Connected Layers</h3>
<p>
<b>torch.flatten(x, 1)</b> reshapes the tensor into (batch_size, 64*8*8). 
This prepares the features for classification.
</p>
<p>
The first linear layer reduces dimensionality to 256 neurons. 
Dropout(0.5) provides regularization. 
The final linear layer outputs 10 logits corresponding to CIFAR-10 classes.
</p>

<div className='image-center'>
<img alt="wiki cnn image" src="/images/articles/ML/cnn1.png" />
</div>
<br></br>

<hr />

<h2>Training Loop</h2>
<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{trainingCode}
</SyntaxHighlighter>
<br></br>
<p>
CrossEntropyLoss measures the accuracy of predictions by considering the probabilities computed for all 10 classes.
<div className="latex-center">
<Block math={String.raw`
\mathcal{L}
=
- \sum_{i=1}^{10}
y_i \log(\hat{y}_i)
`} />
</div>
Adam optimizer updates parameters adaptively.  <b>weight_decay</b> introduces L2 regularization.
</p>

<ol>
<li>Zero gradients</li>
<li>Forward pass</li>
<li>Compute loss</li>
<li>Backward propagation</li>
<li>Update parameters</li>
</ol>

<p>
running_loss tracks training progress across batches.
If you plot how the model tries to minimize the loss, 
you should get a plot like this:
</p>

<div className='image-center'>
  <img src="https://raw.githubusercontent.com/Hal1903/CNN_demo/master/learning_curve_cnn.png" />
  <figcaption>
Training behavior is inherently unstable because
no optimizer has prior knowledge of the global minimum of the loss function.
Overshooting is expected during updates, 
and convergence emerges gradually through iterative correction.
  </figcaption>
</div>


<hr />

<h2>Evaluation</h2>
<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{evaluationCode}
</SyntaxHighlighter>
<br></br>
<p>
Model evaluation is performed under torch.no_grad to disable gradient tracking. 
torch.max selects the class with the highest logit score.
</p>

<p>
Accuracy is computed by dividing correctly predicted samples by total samples.
</p>

<hr />

<h2>Per-Class Accuracy Analysis</h2>
<p>
After computing overall accuracy, per-class evaluation reveals which categories 
are harder to classify. In CIFAR-10, visually similar animals such as cat and dog 
often produce lower accuracy compared to structured objects like ship or truck.
</p>

<p>
This type of breakdown is critical when evaluating real-world classification systems.
</p>

<hr />

<h2>Conclusion</h2>
<p>
This implementation demonstrates how convolutional layers, normalization, pooling, 
and fully connected layers integrate into a complete training pipeline.
</p>
<p>
Compared to multilayer perceptrons, CNNs exploit spatial locality and hierarchical 
feature extraction, making them significantly more effective for image data.
</p>

</div>
</div>
);
}