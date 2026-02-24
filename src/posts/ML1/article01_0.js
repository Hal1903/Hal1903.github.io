import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import CodeDownloader from '../../components/CodeDownloader';

export const title = "Low-Rank Image Approximation";
// export const category = "machine_learning";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">

                <h2>Introduction</h2>
                <p>
                    Before getting into machine learning, let's take a look at 
                    one dimension reduction method called Singular Value Decomposition (SVD).
                    In this article, we apply the most basic dimension reduction technique 
                    particularly for image processing, to compress and approximate images.
                    The key idea is that many images can be represented well
                    using only a few dominant singular values.
                </p>

                <p>
                    You may view and download my repository: <a href="https://github.com/Hal1903/LowRankApprxAnime/tree/master">
                     https://github.com/Hal1903/LowRankApprxAnime/tree/master </a>
                </p>

                <p>The image we will use is george.jpg (will be preprocessed to a gray scale):</p>
                <div className='image-center'>
                    <img alt="george.jpg" 
                    src="https://github.com/Hal1903/LowRankApprxAnime/blob/master/george.jpg?raw=true">
                    </img>
                </div>

                <h2>Matrix Representation of an Image</h2>
                <p>
                    A grayscale image can be represented as a matrix 
                    <Inline math="A \in \mathbb{R}^{m \times n}" /> 
                    where each entry corresponds to a pixel intensity.
                </p>

                <p>
                    Using Singular Value Decomposition:
                </p>

                <Block math="A = U \Sigma V^T" />

                <p>
                    where:
                </p>

                <ul>
                    <li><Inline math="U" /> contains left singular vectors</li>
                    <li><Inline math="\Sigma" /> is a diagonal matrix of singular values</li>
                    <li><Inline math="V^T" /> contains right singular vectors</li>
                </ul>

                <p>
                    The singular values are ordered from largest to smallest,
                    indicating their importance in reconstructing the image.
                </p>

                <h2>Low-Rank Approximation</h2>

                <p>
                    Instead of using all singular values, we approximate the matrix
                    using only the top <Inline math="k" /> singular values:
                </p>

                <Block math="A_k = U_k \Sigma_k V_k^T" />

                <p>
                    This produces the best rank-<Inline math="k" /> approximation
                    of <Inline math="A" /> in terms of Frobenius norm.
                </p>

                <Block math="A_k = \arg\min_{\mathrm{rank}(B)=k} \|A - B\|_F" />

                <p>
                    As <Inline math="k" /> increases, the approximation improves,
                    but storage cost also increases.
                </p>

                <h2>Storage Comparison</h2>

                <p>
                    Original storage:
                </p>

                <Block math="mn" />

                <p>
                    Low-rank storage:
                </p>

                <Block math="k(m + n + 1)" />
                <p>
                    Because U is <Inline math="m\times k" />, 
                    V is <Inline math="n\times k" />
                    and a vector of the singular values has a length of <Inline math="k" />,
                    so the total storage must be <Inline math="mk+nk+k" />.
                    Factoring by k leads to the expression above.
                </p>

                <p>
                    If <Inline math="k \ll \min(m,n)" />, the compression ratio
                    can be significant.
                </p>

                <div className='image-center'>
                    <img alt="plot" 
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAigAAAGzCAYAAAAFROyYAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjkuMCwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy80BEi2AAAACXBIWXMAAA9hAAAPYQGoP6dpAAA6iUlEQVR4nO3de3RU1aHH8d8kIZPwmAmBJANCAkUqpIAoaBjRqhAJmOIrWrTURuXCEgMVsNbSKlBrjVKrqEXoA4EWLYpXqKKgERSqhFcE5WER22i4wiRYSCagSUiy7x+Y40wIQsjjTMj3s9ZZi5yz58w+u13Jz/06DmOMEQAAQAgJs7sCAAAAtRFQAABAyCGgAACAkENAAQAAIYeAAgAAQg4BBQAAhBwCCgAACDkEFAAAEHIIKAAAIOQQUICzQI8ePXTbbbfZXQ3LFVdcoSuuuMLuapyRUGtLoLUioAAhbMeOHbrxxhuVlJSkqKgonXPOObrqqqv09NNP2101AGhSEXZXAEDdNmzYoCuvvFKJiYkaP368PB6P9u3bp40bN+rJJ5/U5MmTrbJ79uxRWBj/vQHg7EFAAULUb3/7W7ndbm3ZskUxMTFB14qKioJ+djqdzViz5lVZWanq6mpFRkbaXRUAzYj/5AJC1L///W9973vfOyGcSFJ8fHzQz7XnTSxatEgOh0Pvvfeepk2bpri4OLVr107XX3+9Dh48GPTZ6upqzZo1S127dlXbtm115ZVXavfu3Sfcc9asWXI4HCfUpea7Pv3005M+S0VFhWbMmKFBgwbJ7XarXbt2uuyyy/T2228Hlfv000/lcDj02GOPac6cOerVq5ecTqd2795d53379eunK6+88oTz1dXVOuecc3TjjTda5x577DFdcskl6tSpk6KjozVo0CC99NJLJ63zmT73qlWrdNlll6ldu3bq0KGD0tPTtWvXrqAyPp9Pt99+u7p16yan06kuXbro2muv/dY2BFobelCAEJWUlKTc3Fzt3LlT/fr1O6N7TJ48WR07dtTMmTP16aefas6cOZo0aZJeeOEFq8z06dM1e/ZsjR49Wmlpafrggw+UlpamsrKyxnoU+f1+/eUvf9Ett9yi8ePHq7S0VAsWLFBaWpo2b96sgQMHBpVfuHChysrKNGHCBDmdTsXGxtZ53zFjxmjWrFny+XzyeDzW+XfffVf79+/XzTffbJ178skndc0112js2LGqqKjQ0qVLddNNN2nlypVKT09vlOf829/+pszMTKWlpenRRx/Vl19+qXnz5unSSy/Vtm3b1KNHD0lSRkaGdu3apcmTJ6tHjx4qKipSTk6OCgoKrDJAq2cAhKQ333zThIeHm/DwcOP1es3Pf/5z88Ybb5iKiooTyiYlJZnMzEzr54ULFxpJJjU11VRXV1vnp06dasLDw01xcbExxhifz2ciIiLMddddF3S/WbNmGUlB95w5c6ap61dGzXfl5+db5y6//HJz+eWXWz9XVlaa8vLyoM8dPnzYJCQkmDvuuMM6l5+fbyQZl8tlioqKvrV9jDFmz549RpJ5+umng87fddddpn379ubLL7+0zgX+2xhjKioqTL9+/cywYcOCztduy9N97tLSUhMTE2PGjx8fVM7n8xm3222dP3z4sJFkfve7353y+YDWjCEeIERdddVVys3N1TXXXKMPPvhAs2fPVlpams455xy98sorp3WPCRMmBA1PXHbZZaqqqtJnn30mSVqzZo0qKyt11113BX0ucAJuYwgPD7fmkFRXV+vQoUOqrKzU4MGD9f77759QPiMjQ3Fxcae873e/+10NHDgwqEeoqqpKL730kkaPHq3o6GjrfOC/Dx8+rJKSEl122WV1fv+ZyMnJUXFxsW655RZ98cUX1hEeHq6UlBRrOCs6OlqRkZF65513dPjw4Ub5buBsREABQthFF12kl19+WYcPH9bmzZs1ffp0lZaW6sYbbzzpvIxAiYmJQT937NhRkqw/jDVB5dxzzw0qFxsba5VtLIsXL9aAAQMUFRWlTp06KS4uTq+99ppKSkpOKNuzZ8/Tvu+YMWP03nvv6fPPP5ckvfPOOyoqKtKYMWOCyq1cuVJDhgxRVFSUYmNjFRcXp3nz5tX5/Wdi7969kqRhw4YpLi4u6HjzzTetic1Op1OPPvqoVq1apYSEBH3/+9/X7Nmz5fP5GqUewNmCgAK0AJGRkbrooov08MMPa968eTp27JiWLVt2ys+Fh4fXed4YU+861DVRVDreY3EqS5Ys0W233aZevXppwYIFWr16tXJycjRs2DBVV1efUD6wt+NUxowZI2OM1R4vvvii3G63Ro4caZX55z//qWuuuUZRUVF65pln9PrrrysnJ0c/+tGPTtkWp/vcNc/xt7/9TTk5OScc//jHP6yyU6ZM0ccff6zs7GxFRUXpgQceUN++fbVt27bTfm7gbMckWaCFGTx4sCTpwIEDDb5XUlKSJOmTTz4J6rX473//e8LwQ02PSnFxcdDKoppemG/z0ksv6Tvf+Y5efvnloD/4M2fObEj1JR3vbbn44ov1wgsvaNKkSXr55Zd13XXXBS29/t///V9FRUXpjTfeCDq/cOHCU97/dJ+7V69eko6vsEpNTT3lfXv16qV77rlH99xzj/bu3auBAwfq97//vZYsWXLKzwKtAT0oQIh6++236/yv+9dff12SdN555zX4O4YPH66IiAjNmzcv6Pwf/vCHE8rW/AFev369de7o0aNavHjxKb+npicn8Hk2bdqk3NzcM6p3bWPGjNHGjRv17LPP6osvvjhheCc8PFwOhyOo1+PTTz/VihUrTnnv033utLQ0uVwuPfzwwzp27NgJ96lZ3v3ll1+esEKqV69e6tChg8rLy09ZH6C1oAcFCFGTJ0/Wl19+qeuvv159+vRRRUWFNmzYoBdeeEE9evTQ7bff3uDvSEhI0N13363f//73uuaaazRy5Eh98MEHWrVqlTp37hzU2zFixAglJiZq3LhxuvfeexUeHq5nn31WcXFxKigo+Nbv+cEPfqCXX35Z119/vdLT05Wfn6/58+crOTlZR44cafBz/PCHP9TPfvYz/exnP1NsbOwJPRjp6el6/PHHNXLkSP3oRz9SUVGR5s6dq3PPPVcffvjht977dJ/b5XJp3rx5uvXWW3XhhRfq5ptvtsq89tprGjp0qP7whz/o448/1vDhw/XDH/5QycnJioiI0PLly1VYWBi0LBpo9WxdQwTgpFatWmXuuOMO06dPH9O+fXsTGRlpzj33XDN58mRTWFgYVPZky4y3bNkSVO7tt982kszbb79tnausrDQPPPCA8Xg8Jjo62gwbNsx89NFHplOnTubOO+8M+nxeXp5JSUkxkZGRJjEx0Tz++OOntcy4urraPPzwwyYpKck4nU5zwQUXmJUrV5rMzEyTlJRklatZZnwmS3CHDh1qJJn/+Z//qfP6ggULTO/evY3T6TR9+vQxCxcurHMJce22rM9zG3O8jdPS0ozb7TZRUVGmV69e5rbbbjNbt241xhjzxRdfmKysLNOnTx/Trl0743a7TUpKinnxxRfr/czA2cxhzBnMlgNwVisuLlbHjh310EMP6Ve/+pXd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IaAAAICQ0yLeZlxbzd5yfr/f5poAAIDTVfN3+3T2iG2RAaW0tFSS1L17d5trAgAA6qu0tFRut/tby7TIre6rq6u1f/9+dejQQQ5H477AyO/3q3v37tq3bx/b6J8EbXRqtNGp0UanRhudGm10aqHURsYYlZaWqmvXrgoL+/ZZJi2yByUsLEzdunVr0u9wuVy2/w8Z6mijU6ONTo02OjXa6NRoo1MLlTY6Vc9JDSbJAgCAkENAAQAAIYeAUovT6dTMmTPldDrtrkrIoo1OjTY6Ndro1GijU6ONTq2ltlGLnCQLAADObvSgAACAkENAAQAAIYeAAgAAQg4BBQAAhBwCCgAACDkElABz585Vjx49FBUVpZSUFG3evNnuKjWb9evXa/To0eratascDodWrFgRdN0YoxkzZqhLly6Kjo5Wamqq9u7dG1Tm0KFDGjt2rFwul2JiYjRu3DgdOXKkGZ+iaWVnZ+uiiy5Shw4dFB8fr+uuu0579uwJKlNWVqasrCx16tRJ7du3V0ZGhgoLC4PKFBQUKD09XW3btlV8fLzuvfdeVVZWNuejNJl58+ZpwIAB1o6VXq9Xq1atsq639vapyyOPPCKHw6EpU6ZY51p7O82aNUsOhyPo6NOnj3W9tbdPjc8//1w//vGP1alTJ0VHR6t///7aunWrdb3F/942MMYYs3TpUhMZGWmeffZZs2vXLjN+/HgTExNjCgsL7a5as3j99dfNr371K/Pyyy8bSWb58uVB1x955BHjdrvNihUrzAcffGCuueYa07NnT/PVV19ZZUaOHGnOP/98s3HjRvPPf/7TnHvuueaWW25p5idpOmlpaWbhwoVm586dZvv27ebqq682iYmJ5siRI1aZO++803Tv3t2sWbPGbN261QwZMsRccskl1vXKykrTr18/k5qaarZt22Zef/1107lzZzN9+nQ7HqnRvfLKK+a1114zH3/8sdmzZ4/55S9/adq0aWN27txpjKF9atu8ebPp0aOHGTBggLn77rut8629nWbOnGm+973vmQMHDljHwYMHreutvX2MMebQoUMmKSnJ3HbbbWbTpk3mP//5j3njjTfMJ598YpVp6b+3CShfu/jii01WVpb1c1VVlenatavJzs62sVb2qB1QqqurjcfjMb/73e+sc8XFxcbpdJq///3vxhhjdu/ebSSZLVu2WGVWrVplHA6H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">
                    </img>
                </div>                
                <p>
                    The first singular value encodes the most, surpassing information on the image.
                    From the second to tenth, although the information (correlation between pixels) itself has decreased a lot, 
                    they all still have significant effect to shape curious george.
                    Adding ten values more will make it clear enough for anyone to discern the image as curious george.
                </p>

                <div className='image-center'>
                <img alt="gif" 
                src="https://raw.githubusercontent.com/Hal1903/LowRankApprxAnime/master/low_rank_approximation.gif"
                />
                </div>

                <p>
                    <ul>Small <Inline math="k" /> → blurry but recognizable image  </ul>
                    <ul>Larger <Inline math="k" /> → sharper reconstruction  </ul>
                </p>

                <h2>Why This Works</h2>

                <p>
                    Natural images contain strong correlations between pixels.
                    SVD captures the dominant patterns (edges, shapes, structures)
                    in the first few singular vectors.
                </p>

                <p>
                    This idea is foundational in:
                </p>

                <ul>
                    <li>Image compression</li>
                    <li><b>Principal Component Analysis (PCA)</b></li>
                    <li>Latent Semantic Analysis (LSA)</li>
                    <li>Collaborative filtering</li>
                </ul>

                <p>
                PCA is the most relevant technique for the upcoming articles.
                I am not planning to cover this topic, maybe someday. 
                However, this is worth looking up and implementation is straightforward.
                I highly recommend to know, and I hope this article helps a bit for your research.
                </p>

                <h2>Conclusion</h2>

                <p>
                    Low-rank approximation demonstrates a powerful concept:
                    high-dimensional data often lives in a much lower-dimensional
                    structure.
                </p>

                <p>
                    By keeping only the most important singular values,
                    we achieve compression while preserving most visual information.
                </p>


            </div>

        </div>
    );
}