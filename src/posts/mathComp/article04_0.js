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
                
                <p>Hence the length of hypothenuse is a square root of it:</p>
                <Block math={`c = \\sqrt{a^2 + b^2}`} />

                <p>
                    This equation tells us how to compute the diagonal length of a right triangle.
                    For example, if <Inline math="a = 3" /> and <Inline math="b = 4" />, then:
                </p>

                <Block math={`3^2 + 4^2 = 9 + 16 = 25`} />
                <Block math={`c = \\sqrt{25} = 5`} />

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

# Make the plot square (get current axes)
# set_aspect scales x wrt y. 'equal' sets x and y have the same scaling: 
# XY window is now consisted of squares. 'box' adjusts window space.
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
    <li>How far did we go up? (down implies negative)</li>
    <li>How far did we go right? (similarly, left implies negative)</li>
</ul>

<p>
    The slope measures how steep a line is.
    We are dividing the growth of <Inline math="y" /> by
    "a unit change of <Inline math="x" />," so slope describes 
    how <Inline math="y" /> changes given <Inline math="x" /> changes by 1.
</p>
<p>
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

# 9 points between interval -4 to 4, endpoints inclusive
x = np.linspace(-4, 4, 9)
print(x) # the same as np.array([-4, -3, -2, -1,  0,  1,  2,  3,  4])
y = 2*x

plt.axhline(0)
plt.axvline(0)
plt.plot(x, y)
plt.title("y = 2x + 1")

plt.grid(True) # show the grid
plt.xlim(-5, 5) # x limit
plt.ylim(-5, 5) # y limit
plt.xticks(np.arange(-5, 5.01, 1)) # to include 5 in the plot, we set a slightly greater value
plt.yticks(np.arange(-5, 5.01, 1))

plt.show()
`}
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

                <div className='image-center'>
                <img src="https://raw.githubusercontent.com/Hal1903/media/master/pythagorean_triangle_animation.gif" alt="exercise gif" />
                </div>

<h3>Get Used to Matplotlib</h3>

<p>
    Let us strengthen our understanding of lines, slope, and matplotlib
    by writing small visualization exercises.
</p>

<hr />

<h4>Exercise 1 — Parallel and Perpendicular Lines</h4>

<p>
    Visualize the following lines:
</p>

<ul>
    <li><Inline math="y = x" /></li>
    <li><Inline math="y = 3x" /></li>
</ul>

<p>
    Then draw a line perpendicular to each of them.
</p>

<p>
    Plot all four lines on the same graph.
    Use different labels so we can identify them clearly.
</p>

<details>
<summary><b>Solution</b></summary>
<p>
    Observe that
</p>

<ul>
    <li>If a line has slope <Inline math="m" />,</li>
    <li>A perpendicular line has slope <Inline math="-\frac{1}{m}" />.</li>
</ul>

<SyntaxHighlighter language="python" style={oneDark}>
{`import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5, 5, 200)

# Original lines
y1 = x          # slope = 1
y2 = 3*x        # slope = 3

# Perpendicular slopes
y1_perp = -1*x          # slope = -1
y2_perp = -(1/3)*x      # slope = -1/3

plt.plot(x, y1, label="y = x")
plt.plot(x, y1_perp, label="Perpendicular to y = x")

plt.plot(x, y2, label="y = 3x")
plt.plot(x, y2_perp, label="Perpendicular to y = 3x")

plt.axhline(0)
plt.axvline(0)
plt.grid(True)
plt.legend()
plt.gca().set_aspect('equal', 'box')

plt.title("Parallel and Perpendicular Lines")
plt.show()`}
</SyntaxHighlighter>

<p>
    Observe how the perpendicular lines form right angles
    with their corresponding original lines.
</p>
</details>

<hr />

<h4>Exercise 2 — Line Through Two Points</h4>

<p>
    We know that two distinct points determine exactly one line.
</p>

<p>
    Write a function that:
</p>

<ul>
    <li>Takes an array of <Inline math="x" /> values</li>
    <li>Takes an array of <Inline math="y" /> values</li>
    <li>Each pair <Inline math="(x[i], y[i])" /> forms a point</li>
    <li>Computes the slope using the first two points</li>
    <li>Draws the line passing through them</li>
</ul>

<p>
    Hint:
</p>

<Block math={`m = \\frac{y_2 - y_1}{x_2 - x_1}`} />

<details>
<summary><b>Solution</b></summary>

<SyntaxHighlighter language="python" style={oneDark}>
{`import numpy as np
import matplotlib.pyplot as plt

def plot_line_from_points(x_vals, y_vals):
    if len(x_vals) < 2:
        print("Need at least two points.")
        return
    
    x1, x2 = x_vals[0], x_vals[1]
    y1, y2 = y_vals[0], y_vals[1]
    
    # Compute slope
    m = (y2 - y1) / (x2 - x1)
    
    # Compute intercept
    b = y1 - m*x1
    
    # Generate line
    x_line = np.linspace(-5, 5, 200)
    y_line = m*x_line + b
    
    plt.plot(x_line, y_line, label=f"y = {m:.2f}x + {b:.2f}")
    plt.scatter(x_vals, y_vals, color="red")
    
    plt.axhline(0)
    plt.axvline(0)
    plt.grid(True)
    plt.legend()
    plt.gca().set_aspect('equal', 'box')
    plt.title("Line Through Two Points")
    plt.show()


# Example usage
x_points = [1, 4]
y_points = [2, 8]

plot_line_from_points(x_points, y_points)`}
</SyntaxHighlighter>

<p>
    This function:
</p>

<ul>
    <li>Computes the slope from the first two points</li>
    <li>Finds the intercept</li>
    <li>Draws the entire line</li>
    <li>Highlights the original points in red</li>
</ul>

<p>
    Try changing the points and observe how the line changes.
    What happens if the line is vertical?
</p>
</details>
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
x2, y2 = 4, 6

plt.scatter([x1, x2], [y1, y2])
plt.plot([x1, x2], [y1, y1])
plt.plot([x2, x2], [y1, y2])
plt.plot([x1, x2], [y1, y2])

distance = np.sqrt((x2 - x1)**2 + (y2 - y1)**2)

plt.title(f"Distance = {distance:.2f}")
plt.axhline(0)
plt.axvline(0)
plt.grid(True)
plt.show()`}
</SyntaxHighlighter>

                <h3>Exercise</h3>

                <ol>
                    <li>
                        Write a function that computes the distance between any two points.
                        Then visualize it with your own example.
                    </li>
                    <li>
                        Write a function that takes two distinct points on the XY plane.
                        Your program must:
                        <ul>
                            <li>Plot both points.</li>
                            <li>Draw the horizontal segment from the first point to align with the second point.</li>
                            <li>Draw the vertical segment to complete a right triangle.</li>
                            <li>Draw the segment connecting the two points (the hypotenuse).</li>
                            <li>Always display the x-axis and y-axis.</li>
                            <li>Include additional padding around the figure so the triangle is clearly visible.</li>
                        </ul>
                        The graph should clearly illustrate the right triangle and visually reinforce the Pythagorean relationship.
                    </li>
                </ol>

<details>
<summary><b>Solution</b></summary>
<SyntaxHighlighter language="python" style={oneDark}>
{`import numpy as np
import matplotlib.pyplot as plt

x1, y1 = 1, 2
x2, y2 = 4, 6

plt.scatter([x1, x2], [y1, y2])
plt.plot([x1, x2], [y1, y1])
plt.plot([x2, x2], [y1, y2])
plt.plot([x1, x2], [y1, y2])

distance = np.sqrt((x2 - x1)**2 + (y2 - y1)**2)

plt.title(f"Distance = {distance:.2f}")
plt.axhline(0)
plt.axvline(0)
plt.grid(True)
plt.show()`}
</SyntaxHighlighter>
</details>

                <hr />
<h2>4. From Distance to Circle</h2>

<p>
    Recall that a circle is defined as <b>all points that are a fixed distance from a center.</b>
</p>


<h3>Step 1 — Start with the Origin</h3>

<p>
    Let us begin with the simplest possible center <Inline math={`(0,0)`} />
</p>

<p>
    Suppose the fixed distance (radius) is <Inline math={`r`} />.
</p>

<p>
    If a point <Inline math={`(x,y)`} /> lies on the circle,
    then its distance from the origin must equal <Inline math={`r`} />.
</p>

<p>
    Using the distance formula from the origin:
</p>

<Block math={`\\sqrt{x^2 + y^2}`} />

<p>
    Setting this equal to <Inline math={`r`} />:
</p>

<Block math={`\\sqrt{x^2 + y^2} = r`} />

<p>
    Squaring both sides:
</p>

<Block math={`x^2 + y^2 = r^2`} />

<p>
    That is the equation of a circle centered at the origin.
</p>

<p>
    Notice something important:
</p>

<p>
    This is exactly the Pythagorean theorem.
</p>

<p>
    The radius is the hypotenuse,
    and <Inline math={`x`} /> and <Inline math={`y`} /> are the legs of a right triangle.
</p>

<hr />

<h3>Step 2 — Shift the Center</h3>

<p>
    Now suppose the center is no longer at the origin.
</p>

<p>
    Let the center be: <Inline math={`(a,b)`} /> — What changes?
</p>

<p>
    The definition of a circle does not change: It is still all points that are a distance <Inline math={`r`} /> from the center.
</p>

<p>
    But now the distance must be measured from <Inline math={`(a,b)`} />,
    not from <Inline math={`(0,0)`} />.
</p>

<p>
    So instead of using <Inline math={`x`} /> and <Inline math={`y`} />,
    we must measure how far <Inline math={`x`} /> is from <Inline math={`a`} />,
    and how far <Inline math={`y`} /> is from <Inline math={`b`} />.
</p>

<p>
    The horizontal shift is:
</p>

<Block math={`x - a`} />

<p>
    The vertical shift is:
</p>

<Block math={`y - b`} />

<p>
    These are simply “compensations” for the movement of the center.
</p>

<p>
    Apply the Pythagorean theorem again:
</p>

<Block math={`\\sqrt{(x-a)^2 + (y-b)^2} = r`} />

<p>
    Squaring both sides:
</p>

<Block math={`(x-a)^2 + (y-b)^2 = r^2`} />

<hr />

<h3>Why This Makes Sense</h3>

<p>
    When the center was at the origin,
    the legs of the right triangle were <Inline math={`x`} /> and <Inline math={`y`} />.
</p>

<p>
    When the center moves to <Inline math={`(a,b)`} />,
    the legs become the horizontal and vertical distances from that new center:
</p>

<p>
    <Inline math={`(x-a)`} /> and <Inline math={`(y-b)`} />.
</p>

<p>
    Nothing else changes.
</p>

<p>
    The circle equation is still just the Pythagorean theorem —
    only translated.
</p>

<hr />

<h3>Geometric Interpretation</h3>

<p>
    The equation
</p>

<Block math={`(x-a)^2 + (y-b)^2 = r^2`} />

<p>
    is simply the origin-circle equation
</p>

<Block math={`x^2 + y^2 = r^2`} />

<p>
    shifted horizontally by <Inline math={`a`} /> and 
    vertically by <Inline math={`b`} />.
</p>

<p>
    Translation does not change shape —
    it only changes position.
</p>

<p>
    The shape remains a circle because
    the Pythagorean relationship remains intact.
</p>


{/* PYTHAGOREAN TO CIRCLE */}
<hr />

<h3>A Circle Directly From Pythagorean</h3>

<p>
When you first learned the Pythagorean theorem, some of you may have wondered:
</p>

<p>
"If the hypotenuse is fixed, aren't there infinitely many possible right triangles?"
</p>

<p>
You are absolutely correct.
</p>

<p>
If we are working over the real numbers 
<b>(<Inline math={"\\mathbb{R}"} />)</b>, 
there are infinitely many choices of 
<Inline math={"x"} /> and <Inline math={"y"} /> 
that satisfy the Pythagorean relationship.
</p>

<p>
Now fix a constant radius <Inline math={"r"} /> in the equation
</p>

<Block math={"x^2 + y^2 = r^2"} />

<p>
and ask:
</p>

<p>
What are <b>all real pairs</b> <Inline math={"(x,y)"} /> 
that satisfy this equation?
</p>

<p>
By definition, this equation describes every point whose distance
from the origin is exactly <Inline math={"r"} />.
</p>

<p>
But that is precisely the definition of a circle.
</p>

<hr />

<h4>A Subtle but Important Detail</h4>

<p>
Solve the equation for <Inline math={"y"} />:
</p>

<Block math={"y = \\pm \\sqrt{r^2 - x^2}"} />

<p>
Notice something important.
</p>

<p>
Real solutions exist only when the expression inside the 
square root is nonnegative:
</p>

<Block math={"r^2 - x^2 \\ge 0"} />

<p>
This inequality implies:
</p>

<Block math={"-r \\le x \\le r"} />

<p>
So although there are infinitely many solutions,
they are not arbitrary.
The variable <Inline math={"x"} /> is restricted to the 
closed interval <Inline math={"[-r, r]"} />.
</p>

<p>
For each valid <Inline math={"x"} />, 
there are two corresponding values of <Inline math={"y"} />:
one positive and one negative.
</p>

<p>
As <Inline math={"x"} /> moves continuously from 
<Inline math={"-r"} /> to <Inline math={"r"} />, 
these real solutions trace out the upper and lower halves of a circle.
</p>

<p>
Therefore, a circle is nothing more than
the complete set of real solutions to a Pythagorean equation
with a fixed hypotenuse.
</p>

<div className='image-center'>
<img src="https://raw.githubusercontent.com/Hal1903/media/master/rotating_pythagorean_triangle.gif" alt="pyt rot gif" />
</div>



<p>
Geometry emerges naturally from algebra.
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
Given that the center is the origin, plot all integer points 
(points whose <Inline math="x" /> and <Inline math="y" /> coordinates 
are both integers) that lie on a circle of radius <Inline math="r = 5, 13, 17" />.
</p>

<p>
Plot the points for all three radii on the same coordinate plane.
</p>

<hr />

<h3>Exercise</h3>

<p>
Write a program that determines whether a circle centered at the origin 
with radius <Inline math="r" /> contains at least one rational point 
(a point where both coordinates are rational numbers).
</p>

<p>
If such points exist, display all of them.
Otherwise, print a message stating that no rational points were found.
</p>

<hr />

<h3>Exercise (Optional)</h3>

<p>
Suppose <Inline math="r" /> is a prime number 
of the form <Inline math="4k + 3" />, 
such as <Inline math="3, 7, 11" />, and so on.
</p>

<p>
Is it possible for the circle
</p>

<Block math="x^2 + y^2 = r^2" />

<p>
to contain an integer point other than the trivial ones 
<Inline math="(\pm r, 0)" /> and <Inline math="(0, \pm r)" />?
</p>

<p>
Use your previous program to experiment with several examples.
What pattern do you observe?
If you think it is possible (or not), try to explain why.
</p>
<p>
If desperate, you can find the solution in my article 
about <b>"remainders"</b> <a href="https://hal1903.github.io/#/course/elementary_math/article04_0">here</a>: 
the article is in Japanese, so please translate the entire page 
by Google or GPT or other tools on your preference.
</p>
<p>
    Although the article does not explicitly discuss the integer point, 
    you may be able to decode that the Fermat's Square Sum theorem directly 
    tells the answer.
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
                    <li>The circle equation comes directly from 
                        fixed distance and Pythagorean.</li>
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