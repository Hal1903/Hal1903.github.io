import '../../css/post.css';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Block, Inline} from "../../components/KatexBox";
import SideScrollableWrapper from '../../utils/SideScrollableWrapper';
import "katex/dist/katex.min.css";

export const title = "Autoencoder: Image Denoising";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <p>
                We have now explored MLP, FNN, and CNN. Those models were primarily supervised:
                given input <Inline math="x" />, predict label <Inline math="y" />.
                Now we move into a different paradigm — representation learning.
                </p>

                <h2>1. What is an Autoencoder?</h2>

                <div className='image-center'>
                    <img src="https://lilianweng.github.io/posts/2018-08-12-vae/autoencoder-architecture.png" />
                </div>

                <p>
                An Autoencoder (AE) is a neural network trained to reconstruct its input.
                Instead of predicting a label, it tries to learn a compressed internal representation,
                so it falls into a category of unsupervised learning.
                </p>

                <p>
                Formally, we define:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
z = f_\theta(x)
`} />
                </div>

                <p>
                where <Inline math="f_\theta" /> is the encoder, mapping input to latent space.
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
\hat{x} = g_\phi(z)
`} />
                </div>

                <p>
                where <Inline math="g_\phi" /> is the decoder.
                </p>

                <p>
                The objective is reconstruction:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
\mathcal{L} = \|x - \hat{x}\|^2
`} />
                </div>

                <p>
                Unlike typical supervised learning, there are no labels.
                The target is the input itself.
                </p>

                <h3>Why is this useful?</h3>

                <ul>
                    <li>Dimensionality reduction</li>
                    <li>Feature extraction</li>
                    <li>Denoising</li>
                    <li>Pretraining</li>
                </ul>

                <p>
                We are happy about autoencoders because they force the model to learn structure
                rather than memorize pixel-level noise.
                </p>
                <p>
                   We use MNIST datasets from torchvision for demonstration.
                </p>
<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, TensorDataset
from torchvision import datasets, transforms
import numpy as np
import matplotlib.pyplot as plt

transform = transforms.Compose([
    transforms.ToTensor()  # scales to [0,1]
])

train_dataset = datasets.MNIST(root='./data', train=True, transform=transform, download=True)
test_dataset  = datasets.MNIST(root='./data', train=False, transform=transform, download=True)

`}
</SyntaxHighlighter>

                <h2>2. Denoising Autoencoder</h2>

                <div className='image-center'>
                    <img src="https://lilianweng.github.io/posts/2018-08-12-vae/denoising-autoencoder-architecture.png" />
                </div>

                <p>
                In image denoising, we corrupt the input:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
\tilde{x} = x + \epsilon
`} />
                </div>

<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`def add_noise(imgs, noise_factor=0.5):
    noisy = imgs + noise_factor * torch.randn_like(imgs)
    return torch.clip(noisy, 0., 1.)

train_imgs = train_dataset.data.unsqueeze(1).float() / 255.0
test_imgs  = test_dataset.data.unsqueeze(1).float() / 255.0

train_noisy = add_noise(train_imgs)
test_noisy  = add_noise(test_imgs)

train_loader = DataLoader(TensorDataset(train_noisy, train_imgs), batch_size=128, shuffle=True)
test_loader  = DataLoader(TensorDataset(test_noisy, test_imgs), batch_size=128, shuffle=False)

`}
</SyntaxHighlighter>

                <p>
                and train the network to reconstruct the clean image:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
\mathcal{L} = \|x - g_\phi(f_\theta(\tilde{x}))\|^2
`} />
                </div>

                <p>
                The loss measures the discrepancy between the input and "reconstructed" input.
                The decoder benefits from encoder if it compressed the data well so that the decoder has richer information to reconstruct with better accuracy. 
                Adding noise prevents trivial identity learning (just copying the input for output) 
                and encourages robust representations.
                </p>

                <h2>3. Convolutional Autoencoder Architecture</h2>

                <p>
                For images, we replace fully connected layers with convolutional layers.
                The encoder downsamples using Conv2d with stride.
                The decoder upsamples using ConvTranspose2d.
                </p>

                <h3>ConvTranspose2d Explanation</h3>

                <p>
                ConvTranspose2d is sometimes misunderstood.
                It does not simply “reverse convolution”.
                It spreads each input activation over a spatial region.
                It is easier to get the intuition from a figure:
                </p>

<div className='image-center'>
  <img src="https://raw.githubusercontent.com/Hal1903/media/master/7x7_ConvTransposeDemo_ManimCE_v0.19.1.gif" />
  <figcaption>
Using a <Inline math="3\times 3" /> input and one <Inline math="3\times 3" /> kernel, 
ConvTranspose2D outputs <Inline math="7\times 7" /> upsampled matrix. 
We are multiplying the kernel entries by the selected input entry (yellow unit square).
Notice that there is 0 insertion(s) between entries.
  </figcaption>
</div>


                <p>
                Output size is computed as:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
H_{out} = (H - 1)s - 2p + k + \text{output\_padding}
`} />
                </div>

                <p>
                where:
                </p>

                <ul>
                    <li><Inline math="s" /> = stride</li>
                    <li><Inline math="p" /> = padding</li>
                    <li><Inline math="k" /> = kernel size</li>
                </ul>
<p>
Each input pixel contributes via weighted overlapping patches.
The operation can be interpreted as the matrix transpose of a convolution.
</p>

<p> 
Padding in transposed convolution shifts the kernel placement inward, 
effectively cropping the output feature map. 
As a result, early kernel applications may partially fall outside the valid region, 
so only some output entries are updated.
</p>

<div className='image-center'>
  <img src="https://raw.githubusercontent.com/Hal1903/media/master/ConvTransposeDemo_ManimCE_v0.19.1.gif" />
  <figcaption>
Remark that the first update protrude the valid output region. 
This comes from padding, but output margin captures some.
  </figcaption>
</div>

<p>
Conceptually, transposed convolution first produces a larger full convolution result. 
The padding parameter reduces this size by cropping the borders. 
The output_padding parameter, although similarly named, serves a different purpose: 
it slightly increases the final output dimension (by at most stride - 1) 
to resolve ambiguity when stride <Inline math='>1'/>. 
It does not change the convolution operation itself.
</p>
                
<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`# Autoencoder Model

class DenoiseAutoencoder(nn.Module):
    def __init__(self, latent_dim=128):
        super().__init__()
        # Encoder
        self.enc = nn.Sequential(
            nn.Conv2d(1, 32, kernel_size=3, stride=2, padding=1),  # 28 -> 14
            nn.ReLU(),
            nn.Conv2d(32, 64, kernel_size=3, stride=2, padding=1), # 14 -> 7
            nn.ReLU(),
        )
        # Bottleneck
        self.fc_enc = nn.Linear(64*7*7, latent_dim)
        self.fc_dec = nn.Linear(latent_dim, 64*7*7)

        # Decoder
        self.dec = nn.Sequential(
            # (Batch, 64, 7, 7) -> (B, 32, 14, 14)
            nn.ConvTranspose2d(64, 32, kernel_size=3, stride=2, padding=1, output_padding=1),
            nn.ReLU(),
            # (B, 32, 14, 14) -> (B, 1, 28, 28)
            nn.ConvTranspose2d(32, 1,  kernel_size=3, stride=2, padding=1, output_padding=1),
            nn.Sigmoid() # required for BCE
        )

    def forward(self, x):
        x = self.enc(x)
        x = x.view(x.size(0), -1)
        x = self.fc_enc(x)

        x = self.fc_dec(x)
        x = x.view(x.size(0), 64, 7, 7)
        x = self.dec(x)
        return x

model = DenoiseAutoencoder()
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model.to(device)
`}
</SyntaxHighlighter>

                <h2>4. Mathematical View of Autoencoder</h2>

                <p>
                Consider dataset <Inline math="\{x^{(i)}\}_{i=1}^N" />.
                The training objective:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
\min_{\theta,\phi}
\frac{1}{N}
\sum_{i=1}^{N}
\|x^{(i)} - g_\phi(f_\theta(x^{(i)}))\|^2
`} />
                </div>

                <p>
                The latent representation <Inline math="z" /> typically has lower dimension:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
\dim(z) < \dim(x)
`} />
                </div>

                <p>
                This bottleneck forces information compression, forming a latent vector or feature embedding.
                </p>

<h2>5. Training and Results </h2>
<p>
    Let's run this training code. You should reach the loss equal to roughly 0.08-0.09.
</p>
<SyntaxHighlighter language="python" style={oneDark} customStyle={{margin:0}}>
{`# Training
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=5e-4)

epochs = 30
for ep in range(epochs):
    model.train()
    total_loss = 0
    for noisy_imgs, clean_imgs in train_loader:
        noisy_imgs, clean_imgs = noisy_imgs.to(device), clean_imgs.to(device)

        optimizer.zero_grad()
        outputs = model(noisy_imgs)
        loss = criterion(outputs, clean_imgs)
        loss.backward()
        optimizer.step()

        total_loss += loss.item()

    avg = total_loss / len(train_loader)
    print(f"Epoch [{ep+1}/{epochs}] Loss: {avg:.4f}")

`}
</SyntaxHighlighter>

<br></br>
<p> The performance looks impressive. 
You may notice that the digits 2, 5, and the second 9 appear noticeably clearer after denoising. 
This highlights the power of representation learning: rather than simply memorizing the input, the model captures underlying structure shared across samples. 
By leveraging patterns learned from the entire dataset, 
it is able not only to reconstruct the image, but also to enhance its quality during the process. 
</p>


<div className='image-center'>
  <img src="https://raw.githubusercontent.com/Hal1903/media/master/output_AEdenoise.png" />
  <figcaption>
The first row is consisted of inputs, and the middle illustrates the noisy images.
The last row shows the output of denoising autoencoder.
  </figcaption>
</div>

                <h2>6. Why We Construct AE Like This</h2>

                <p>
                The encoder compresses information to capture essential structure.
                The decoder reconstructs by inverting spatial compression.
                </p>

                <p>
                The bottleneck ensures that:
                </p>

                <div className="latex-center">
                    <Block math={String.raw`
I(z; x)
`} />
                </div>

                <p>
                captures only meaningful mutual information.
                </p>

                <p>
                Without the bottleneck, the network could simply memorize identity mapping.
                </p>

                <h2>Additional Notes</h2>

                <ul>
                    <li>Latent dimension size controls compression strength.</li>
                    <li>Overcomplete autoencoders require regularization.</li>
                    <li>ConvTranspose2d must carefully match encoder stride.</li>
                </ul>

                <h2>Conclusion</h2>

<ul>
                <li>
                Autoencoders mark the transition from predictive learning to representation learning.
                </li>

                <li>
                We compress, reconstruct, and discover hidden structure.
                </li>

                <li>
                As a consequence, we successfully built a model to denoise the images.
                </li>
</ul>
                <p>
                This concludes our journey from MLP and CNN into latent-space modeling.
                The next frontier would naturally lead to GANs and diffusion models.
                One of my project uses GAN, so I might cover this at some point.
                However at this point, you may be able to read through the resources on your own.
                I hope I could assist your academic journey. Thank you for checking my ML course. 
                </p>

            </div>
        </div>
    );
}