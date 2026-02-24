import '../../css/post.css';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Block, Inline} from "../../components/KatexBox";
import SideScrollableWrapper from '../../utils/SideScrollableWrapper';
import "katex/dist/katex.min.css";

export const title = "Metrics with Titanic Demo";
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

<hr />

<h2>Regression Metrics</h2>

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

                <p>
                The objective is reconstruction:
                </p>

                <div className="latex-center">
                    <Block math={`
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

                <h2>2. Denoising Autoencoder</h2>

                <div className='image-container'>
                    <img src="https://lilianweng.github.io/posts/2018-08-12-vae/denoising-autoencoder-architecture.png" />
                </div>

                <p>
                In image denoising, we corrupt the input:
                </p>

                <div className="latex-center">
                    <Block math={`
\tilde{x} = x + \epsilon
`} />
                </div>

                <p>
                and train the network to reconstruct the clean image:
                </p>

                <div className="latex-center">
                    <Block math={`
\mathcal{L} = \|x - g_\phi(f_\theta(\tilde{x}))\|^2
`} />
                </div>

                <p>
                This prevents trivial identity learning and encourages robust representations.
                </p>

                <h2>3. Convolutional Autoencoder Architecture</h2>

                <p>
                For images, we replace fully connected layers with convolutional layers.
                The encoder downsamples using Conv2d with stride.
                The decoder upsamples using ConvTranspose2d.
                </p>

                <h3>ConvTranspose2d Explanation</h3>

                <p>
                ConvTranspose2d is often misunderstood.
                It does not simply “reverse convolution”.
                It spreads each input activation over a spatial region.
                </p>

                <p>
                Output size is computed as:
                </p>

                <div className="latex-center">
                    <Block math={`
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

                <h2>4. Mathematical View of Autoencoder</h2>

                <p>
                Consider dataset <Inline math="\{x^{(i)}\}_{i=1}^N" />.
                The training objective:
                </p>

                <div className="latex-center">
                    <Block math={`
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
                    <Block math={`
\dim(z) < \dim(x)
`} />
                </div>

                <p>
                This bottleneck forces information compression.
                </p>

                <h2>5. Variational Autoencoder (VAE)</h2>

                <p>
                A Variational Autoencoder extends AE by learning a distribution in latent space.
                Instead of deterministic mapping:
                </p>

                <div className="latex-center">
                    <Block math={`
z = f_\theta(x)
`} />
                </div>

                <p>
                we learn:
                </p>

                <div className="latex-center">
                    <Block math={`
q_\theta(z|x) = \mathcal{N}(\mu(x), \sigma^2(x))
`} />
                </div>

                <p>
                The loss combines reconstruction and KL divergence:
                </p>

                <div className="latex-center">
                    <Block math={`
\mathcal{L}
=
\mathbb{E}_{q(z|x)}[\log p(x|z)]
-
D_{KL}(q(z|x) \| p(z))
`} />
                </div>

                <p>
                Unlike AE, VAE enables generative modeling.
                We can sample from latent space and generate new images.
                </p>

                <h3>Why is VAE exciting?</h3>

                <ul>
                    <li>Continuous latent space</li>
                    <li>Meaningful interpolation</li>
                    <li>Generative capability</li>
                </ul>

                <h2>6. Why We Construct AE Like This</h2>

                <p>
                The encoder compresses information to capture essential structure.
                The decoder reconstructs by inverting spatial compression.
                </p>

                <p>
                The bottleneck ensures that:
                </p>

                <div className="latex-center">
                    <Block math={`
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
                    <li>Autoencoders are unsupervised.</li>
                    <li>Latent dimension size controls compression strength.</li>
                    <li>Overcomplete autoencoders require regularization.</li>
                    <li>ConvTranspose2d must carefully match encoder stride.</li>
                </ul>

                <h2>Conclusion</h2>

                <p>
                Autoencoders mark the transition from predictive learning to representation learning.
                </p>

                <p>
                We compress, reconstruct, and discover hidden structure.
                </p>

                <p>
                Variational Autoencoders further allow generative modeling,
                bridging reconstruction and probabilistic reasoning.
                </p>

                <p>
                This concludes our journey from MLP and CNN into latent-space modeling.
                The next frontier would naturally lead to GANs and diffusion models.
                </p>

            </div>

        </div>
    );
}