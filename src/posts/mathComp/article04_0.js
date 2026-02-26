import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const title = "Matplotlib: XY Plane for Geometry";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <h2>1. The Pythagorean Theorem</h2>

                <p>
                    Everything in this article begins with 
                    one of the most important ideas in geometry:
                    the Pythagorean Theorem.
                </p>

                <div className='image-center'>
                    <img src="/images/articles/math_comp/pytri.png" alt="tri img" />
                </div>

                <p>
                    In a right triangle, if the legs have 
                    lengths <Inline math="a" /> and <Inline math="b" />,
                    and the hypotenuse has length <Inline math="c" />, then:
                </p>

                <Block math={`a^2 + b^2 = c^2`} />

                <p>
                    This equation tells us how to compute the diagonal length of a right triangle.
                    For example, if <Inline math="a = 3" /> and <Inline math="b = 4" />, then:
                </p>

                <Block math={`3^2 + 4^2 = 9 + 16 = 25`} />

                <Block math={`c = 5`} />

                <h3>Proof (Optional, but recommended):</h3>
<details>
<summary><b>Click to Expand</b></summary>

<br />
<p>
Refer to the figure below. 
Let <Inline math="a" />, <Inline math="b" />, and <Inline math="c" /> denote 
the height, base, and hypotenuse of a right triangle, respectively.
</p>
                <div className='image-center'>
                    <img src="/images/articles/math_comp/Pythagoras_proof.png" alt="proof img" />
                </div>
<p>
Even though we do not yet know how to compute the length of <Inline math="c" />, 
we do know how to compute the area of a square once we know its side length. 
So instead of trying to find <Inline math="c" /> directly, let us begin by drawing a square whose side length is <Inline math="c" />.
</p>
<p>
The area of this square is <Inline math="c^2" />.
</p>
Now, place four identical right triangles 
(each with legs <Inline math="a" /> and <Inline math="b" />) around the square 
so that they perfectly surround a tilted inner square.

<p>
Each triangle has area:

<Block math="\frac{1}{2}ab" />

So the total area of the four triangles is 
<Block math="4 \cdot \frac{1}{2}ab = 2ab" />
</p>
<p>
Next, observe the entire large square formed by arranging these four triangles. 
Its side length is <Inline math="a + b" />, so its total area is:

<Block math="(a + b)^2" />

But this total area is also equal to:

the area of the inner square (<Inline math="c^2" />), plus

the area of the four surrounding triangles (<Inline math="2ab" />).
</p>
<p>
So we can write:

<Block math="(a + b)^2 = c^2 + 2ab" />

Expanding the left side:

<Block math="a^2 + 2ab + b^2 = c^2 + 2ab" />

Subtract <Inline math="2ab" /> from both sides:

<Block math="a^2 + b^2 = c^2" />

And that is the Pythagorean Theorem.
 </p>
</details>
<br />
                <p>
                    The key idea we will use later is 
                    this: <b>distance in geometry comes from right triangles.</b>
                </p>

                <hr />

<h2>2. The XY Plane</h2>

                <p>
                    Now let us move from pure geometry into coordinate geometry.
                </p>

                <p>
                    On the XY plane, every point is written as:
                </p>

                <Block math={`(x, y)`} />

                <p>
                    For example, we can plot (1,1), (-1,1), (1,-1), (-1,-1) as follow:
                </p>
                <div className='image-center'>
                <img src="/images/articles/math_comp/xy1.png" />
                </div>
                <br />
                <details>
                <summary><b>Code (Click to Expand)</b></summary>
                <SyntaxHighlighter language="python" style={oneDark}>
{`import matplotlib.pyplot as plt

# Define the points
points = [(1, 1), (-1, 1), (1, -1), (-1, -1)]

# Separate x and y coordinates
x_vals = [p[0] for p in points]
y_vals = [p[1] for p in points]

# Plot the points
plt.scatter(x_vals, y_vals)

# Label each point
for (x, y) in points:
    plt.text(x + 0.05, y + 0.05, f"({x}, {y})")

# Draw axes
plt.axhline(0)
plt.axvline(0)

# Make the plot square
plt.gca().set_aspect('equal', 'box')
plt.grid(True)

import numpy as np
plt.title("Four Symmetric Points on the Plane")
plt.xlim(-5, 5)
plt.ylim(-5, 5)
plt.xticks(np.arange(-5, 5.1, 1))
plt.yticks(np.arange(-5, 5.1, 1))

plt.show()`}
                </SyntaxHighlighter>
</details>
<br />

<hr />

{/* Rate of Change Between Two Points */}
<h2>3. Rate of Change (Slope Between Two Points)</h2>

<p>
    Suppose we move from one point to another on the coordinate plane.
    For example:
</p>

<Block math="(x_1, y_1) \quad \text{to} \quad (x_2, y_2)" />

<p>
    As we move, two things may change:
</p>

<ul>
    <li>The horizontal position (the change in <Inline math="x" />)</li>
    <li>The vertical position (the change in <Inline math="y" />)</li>
</ul>

<p>
    The horizontal change is:
</p>

<Block math="\Delta x = x_2 - x_1" />

<p>
    The vertical change is:
</p>

<Block math="\Delta y = y_2 - y_1" />

<p>
    The <b>rate of change</b> tells us how much the output changes
    compared to how much the input changes.
    In geometry, we call this the <b>slope</b>.
</p>

<Block math="\text{slope} = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}" />

<p>
    In simple words:
</p>

<ul>
    <li>How much did we go up?</li>
    <li>How much did we go right?</li>
</ul>

<p>
    The slope measures how steep a line is.
    A large slope means the line rises quickly.
    A small slope means the line rises slowly.
    A negative slope means the line falls as we move to the right.
</p>

<p>
    This idea of “rise over run” will naturally lead us
    to the equation of a linear function.
</p>

<hr />

{/* Linear Function */}
<h2>4. Linear Functions</h2>
                <p>
                    A linear function has the form:
                </p>

                <Block math={`y = mx + b`} />

                <p>
                    Here:
                </p>

                <ul>
                    <li><Inline math="m" /> is the slope (rise over run)</li>
                    <li><Inline math="b" /> is the vertical intercept</li>
                </ul>

                <p>
                    The slope represents how much the function rises vertically
                    when we move horizontally.
                </p>

                <h3>Visualizing a Line in Matplotlib</h3>

                <SyntaxHighlighter language="python" style={oneDark}>
{`import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5, 5, 100)
y = 2*x + 1

plt.axhline(0)
plt.axvline(0)
plt.plot(x, y)
plt.title("y = 2x + 1")
plt.show()`}
                </SyntaxHighlighter>

                <p>
                    The horizontal and vertical axes themselves form a right angle.
                    This means any point <Inline math="(a, b)" /> naturally forms
                    a right triangle with the axes.
                </p>

                <h3>Exercise</h3>

                <p>
                    Choose a point on your line.
                    Draw the horizontal and vertical legs from the axes to that point.
                    You have just created a Pythagorean triangle.
                </p>

<h3>Get Used to Matplotlib</h3>


                <hr />

                <h2>3. The Distance Formula</h2>

                <p>
                    Suppose we have two points:
                </p>

                <Block math={`(x_1, y_1) \\quad \\text{and} \\quad (x_2, y_2)`} />

                <p>
                    The horizontal difference is:
                </p>

                <Block math={`x_2 - x_1`} />

                <p>
                    The vertical difference is:
                </p>

                <Block math={`y_2 - y_1`} />

                <p>
                    These two differences form the legs of a right triangle.
                    Applying the Pythagorean theorem gives the distance:
                </p>

                <Block math={`d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`} />

                <p>
                    This formula is not new —
                    it is simply the Pythagorean theorem written in coordinates.
                </p>

                <h3>Visualizing Distance Between Two Points</h3>

                <SyntaxHighlighter language="python" style={oneDark}>
{`import numpy as np
import matplotlib.pyplot as plt

x1, y1 = 1, 2
x2, y2 = 5, 6

plt.scatter([x1, x2], [y1, y2])
plt.plot([x1, x2], [y1, y1])
plt.plot([x2, x2], [y1, y2])
plt.plot([x1, x2], [y1, y2])

distance = np.sqrt((x2 - x1)**2 + (y2 - y1)**2)

plt.title(f"Distance = {distance:.2f}")
plt.axhline(0)
plt.axvline(0)
plt.show()`}
                </SyntaxHighlighter>

                <h3>Exercise</h3>

                <p>
                    Write a function that computes the distance between any two points.
                    Then visualize it with your own example.
                </p>

                <hr />

                <h2>4. From Distance to Circle</h2>

                <p>
                    A circle is defined as:
                </p>

                <p>
                    <b>All points that are a fixed distance from a center.</b>
                </p>

                <p>
                    Suppose the center is:
                </p>

                <Block math={`(a, b)`} />

                <p>
                    And the fixed distance (radius) is:
                </p>

                <Block math={`r`} />

                <p>
                    Using the distance formula:
                </p>

                <Block math={`\\sqrt{(x-a)^2 + (y-b)^2} = r`} />

                <p>
                    Squaring both sides gives the equation of a circle:
                </p>

                <Block math={`(x-a)^2 + (y-b)^2 = r^2`} />

                <p>
                    Notice something beautiful:
                    this is simply the Pythagorean theorem again.
                </p>

                <h3>Visualizing a Circle</h3>

                <SyntaxHighlighter language="python" style={oneDark}>
{`import numpy as np
import matplotlib.pyplot as plt

a, b = 2, 1
r = 3

theta = np.linspace(0, 2*np.pi, 200)
x = a + r*np.cos(theta)
y = b + r*np.sin(theta)

plt.plot(x, y)
plt.scatter(a, b)
plt.axhline(0)
plt.axvline(0)
plt.gca().set_aspect('equal', 'box')
plt.title("Circle from Distance Formula")
plt.show()`}
                </SyntaxHighlighter>

                <h3>Exercise</h3>

                <p>
                    Draw several triangles from the center to different points on the circle.
                    Verify visually that each hypotenuse has length <Inline math="r" />.
                </p>

                <hr />

                <h2>Final Reflection</h2>

                <p>
                    Let us reflect on the journey:
                </p>

                <ul>
                    <li>Pythagorean theorem describes right triangles.</li>
                    <li>The XY plane lets us build triangles using coordinates.</li>
                    <li>The distance formula is the Pythagorean theorem in disguise.</li>
                    <li>The circle equation comes directly from fixed distance.</li>
                </ul>

                <p>
                    Geometry and algebra are not separate subjects.
                    They are two different languages describing the same structure.
                </p>

                <p>
                    And with matplotlib, we can see that structure unfold visually.
                </p>

            </div>
        </div>
    );
}