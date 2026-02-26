import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import CodeDownloader from '../../components/CodeDownloader';

export const title = "Class and Modules + Coding Project!";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">

                <h2>1. What is a Module?</h2>
                <p>
                    A module in Python is simply a file that contains Python code.
                    We use modules to organize code into smaller, reusable parts.
                </p>

                <p>
                    In this lesson, we have three files, which can be downloaded by the button below:
                </p>

                <ul>
                    <li>modules_area.py</li>
                    <li>modules_animals.py</li>
                    <li>main.py (the file that runs everything)</li>
                </ul>

    <CodeDownloader href="/code/mathPy/math_class.zip" fileName="modules.zip">
        Download All Three Files in Zip
    </CodeDownloader>

                <hr />

                <h2>2. Creating a Simple Math Module</h2>
                <p>
                    Let's look at <strong>modules_area.py</strong>.
                    This file contains two functions.
                </p>

                <SyntaxHighlighter language="python" style={oneDark}>
{`def area_circle(radius):
    return 3.14159 * radius ** 2

def area_rectangle(width, height):
    return width * height`}
                </SyntaxHighlighter>

                <h3>Explanation</h3>
                <ul>
                    <li><strong>area_circle</strong> calculates the area of a circle.</li>
                    <li><strong>area_rectangle</strong> calculates the area of a rectangle.</li>
                </ul>

                <p>
                    These functions can now be reused in other Python files.
                </p>

                <hr />

                <h2>3. Creating a Class Module</h2>
                <p>
                    Now let's look at <strong>modules_animals.py</strong>.
                </p>

<h3>Step 1 — The Animal Class</h3>

<SyntaxHighlighter language="python" style={oneDark}>
{`class Animal:
    def __init__(self, name):
        self.name = name
        self.awake = True`}
</SyntaxHighlighter>

<p>
The constructor (<code>__init__</code>) runs when we create an object.
Each Animal has:
</p>

<ul>
    <li>a name</li>
    <li>an awake state</li>
</ul>

<p>
<code>self.name = name</code> assigns the value passed during 
object creation to this object's name attribute.
</p>

<h4>What is <code>self</code>? (More like optional)</h4>

<p>
<code>self</code> represents the object itself.
When we create an object, Python automatically passes that object
as the first argument to its methods.
</p>

<p>
For example:
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`dog = Animal("Buddy")`}
</SyntaxHighlighter>

<p>
Behind the scenes, Python does something like:
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`Animal.__init__(dog, "Buddy")`}
</SyntaxHighlighter>

<p>
So inside the constructor:
</p>

<ul>
    <li><code>self</code> refers to <code>dog</code></li>
    <li><code>self.name = name</code> stores the value inside that object</li>
</ul>

<p>
Every object has its own <code>self</code>.  
That is how different objects keep different values.
</p>
                <h3>Step 2 — Adding Behavior</h3>

                <SyntaxHighlighter language="python" style={oneDark}>
{`def talk(self):
    if self.awake:
        print(f"{self.name} says {self.cry}")
    else:
        print(f"{self.name} is sleeping.")

def switch_awake(self):
    self.awake = not self.awake`}
                </SyntaxHighlighter>

                <p>
                    The <strong>talk()</strong> method prints a message.
                    The <strong>switch_awake()</strong> method changes the awake state.
                </p>

<hr />

<h3>Quick Demo — How It Works</h3>

<p>
Let's create an object and call its methods step by step.
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`a = Animal("Charlie")

a.talk()          # Charlie says ...
a.switch_awake()  # Charlie changes state
a.talk()          # Now Charlie is sleeping`}
</SyntaxHighlighter>

<h4>Step-by-Step Explanation</h4>

<ul>
    <li>
        <code>a = Animal("Charlie")</code><br/>
        A new object is created. Its name is "Charlie" and it starts as awake.
    </li>

    <li>
        <code>a.talk()</code><br/>
        Since <code>awake</code> is <code>True</code>, it prints:
        <br />
        <code>Charlie says ...</code>
    </li>
    <p>
    Note that we call a method using the following pattern:
<SyntaxHighlighter language="python" style={oneDark}>
{`objectName.methodName()`}
</SyntaxHighlighter>
In this case, the object's name is "a" and we are calling a method named "talk".
    </p>

    <li>
        <code>a.switch_awake()</code><br/>
        The value of <code>awake</code> becomes <code>False</code>.
    </li>

    <li>
        <code>a.talk()</code><br/>
        Now the object is sleeping, so it prints:
        <br />
        <code>Charlie is sleeping.</code>
    </li>
</ul>

<p>
This demonstrates how an object's internal state
(<code>awake</code>) affects its behavior.
</p>

                <hr />

<h2>4. Inheritance (Dog Class)</h2>

<SyntaxHighlighter language="python" style={oneDark}>
{`class Dog(Animal):
    def __init__(self, name, cry):
        super().__init__(name)

    def whoIsThis(self, name):
        print(self.name)`}
</SyntaxHighlighter>

<h3>Understanding Inheritance</h3>

<p>
The <code>Dog</code> class is written as:
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`class Dog(Animal):`}
</SyntaxHighlighter>

<p>
This means <strong>Dog inherits from Animal</strong>.
Inheritance allows one class to reuse the properties and behaviors
of another class.
</p>

<p>
Because <code>Dog</code> inherits from <code>Animal</code>,
every Dog object automatically has:
</p>

<ul>
    <li><code>self.name</code></li>
    <li><code>self.awake</code></li>
    <li><code>talk()</code></li>
    <li><code>switch_awake()</code></li>
</ul>

<p>
We do not need to rewrite those methods again.
They are already defined in the parent class.
</p>

<h3>What Does <code>super()</code> Do?</h3>

<p>
Inside the constructor:
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`super().__init__(name)`}
</SyntaxHighlighter>

<p>
<code>super()</code> calls the constructor of the parent class (<code>Animal</code>).
</p>

<p>
So when we create:
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`dog = Dog("Pochi", "Bow wow")`}
</SyntaxHighlighter>

<p>
Python first runs the <code>Dog</code> constructor,
which then calls the <code>Animal</code> constructor.
</p>

<p>
That is how the Dog object receives its <code>name</code> and
<code>awake</code> attributes.
</p>

<h3>Adding New Behavior</h3>

<p>
The Dog class also defines a new method:
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`def whoIsThis(self, name):
    print(self.name)`}
</SyntaxHighlighter>

<p>
This method does not exist in the Animal class.
It is unique to Dog.
</p>

<p>
Inheritance helps us avoid repeating code and makes
our program easier to extend.
</p>

                <hr />

                <h2>5. What is __name__ == "__main__" ?</h2>

                <SyntaxHighlighter language="python" style={oneDark}>
{`if __name__ == "__main__":
    print("You are running this file directly!")`}
                </SyntaxHighlighter>

                <p>
                    This block runs ONLY if the file is executed directly.
                    It does NOT run when the file is imported.
                </p>

<p>
Any code written outside the 
<code>if __name__ == "__main__":</code> block
will run whenever the file is imported or executed directly.
</p>
                <hr />

                <h2>6. Importing Modules in main.py</h2>

                <SyntaxHighlighter language="python" style={oneDark}>
{`from modules_area import area_circle, area_rectangle
from modules_animals import *`}
                </SyntaxHighlighter>

                <p>
                    Here we import:
                </p>

                <ul>
                    <li>Specific functions from modules_area</li>
                    <li>Everything (*) from modules_animals</li>
                </ul>

                <hr />

                <h2>7. Running the Main Program</h2>

                <SyntaxHighlighter language="python" style={oneDark}>
{`if __name__ == "__main__":
    A_circle = area_circle(3)
    A_rect = area_rectangle(5, 5)

    a = Animal("Animal")
    a.talk()

    doggo = Dog("Pochi", "Bow wow")
    doggo.talk()
    doggo.switch_awake()
    doggo.talk()
    doggo.whoIsThis()`}
                </SyntaxHighlighter>

                <h3>What Happens?</h3>

                <ol>
                    <li>Area functions are executed.</li>
                    <li>An Animal object is created.</li>
                    <li>A Dog object is created.</li>
                    <li>Methods are called on those objects.</li>
                </ol>

                <hr />

                <h2>8. Checklist </h2>
                <p>This article introduced </p>
                <ul>
                    <li>How to create Python modules</li>
                    <li>How to import functions and classes</li>
                    <li>How inheritance works</li>
                    <li>How __name__ == "__main__" works</li>
                    <li>How multiple files work together</li>
                </ul>

                <p>
                    Breaking programs into modules makes your code cleaner,
                    reusable, and easier to maintain.
                </p>
                <p>
                    Hereafter, you can get into different types of projects, 
                    including web-dev, games, AI/ML training, mobile app, etc. 
                    or you may proceed to next articles to learn mathematics with programming. 
                </p>
                <p>
                    Try out your understanding by completing the final exercise on my programming tutorial!
                </p>

<h2>Exercise 1: Dog Sound Dictionary</h2>

<p>
Before building the full Pet Life Simulator, let's practice
working with dictionaries and classes.
</p>

<p>
Create a class called <strong>DogDictionary</strong>.
This class will store dog names and their crying sounds.
</p>

<SyntaxHighlighter language="python" style={oneDark}>
{`class DogDictionary:
    def __init__(self, dogs: dict[str, str]):
        # store the dictionary
        pass

    def get_sound(self, name: str):
        # return the cry sound of the dog
        pass

    def add_dog(self, name: str, cry: str):
        # add a new dog to the dictionary
        pass

    def make_all_dogs_bark(self):
        # print: "{name} says {cry}"
        pass`}
</SyntaxHighlighter>

<h3>Requirements</h3>

<ul>
    <li>The dictionary format must be: <code>{`{"DogName": "CrySound"}`}</code></li>
    <li><code>get_sound()</code> should return the sound of the given dog</li>
    <li>If the dog does not exist, return <code>"Dog not found."</code></li>
    <li><code>add_dog()</code> should add a new name and cry to the dictionary</li>
    <li><code>make_all_dogs_bark()</code> should loop through all dogs and print their sounds</li>
</ul>

<h3>Example Usage</h3>

<SyntaxHighlighter language="python" style={oneDark}>
{`dogs = {
    "Pochi": "Bow wow",
    "Max": "Woof"
}

dd = DogDictionary(dogs)

dd.make_all_dogs_bark()
# Pochi says Bow wow
# Max says Woof

dd.add_dog("Charlie", "Arf")

print(dd.get_sound("Charlie"))
# Arf`}
</SyntaxHighlighter>


<p>
Once you finish this exercise, you will be ready
to build a full pet simulation system.
</p>

<details>
    <summary><b>Solution Code (Click to Expand):</b></summary>
<SyntaxHighlighter language="python" style={oneDark}>
{`class DogDictionary:
    def __init__(self, dogs: dict[str, str]):
        # store the dictionary
        self.dogs = dogs

    def get_sound(self, name: str):
        # return the cry sound of the dog
        if name in self.dogs:
            return self.dogs[name]
        else:
            return "No dog found."

    def add_dog(self, name: str, cry: str):
        # add a new dog to the dictionary
        self.dogs[name] = cry

    def make_all_dogs_bark(self):
        # print: "{name} says {cry}"
        for name, cry in self.dogs.items():
            print(f"{name} says {cry}")
`}
</SyntaxHighlighter>

</details>

<h2>Exercise 2:</h2>
<p>
Your task is to complete all sections marked <strong># FILL UP</strong>.
Do NOT change the structure of the program. Only complete the missing logic.
</p>

    <CodeDownloader href="/code/mathPy/simulator.py" fileName="simulator.py">
        Download the Template
    </CodeDownloader>

<hr />

<h3>Part 1 — Animal Class</h3>



<ol>
    <li>
        <strong>switch_awake()</strong><br />
        Toggle the animal's awake state.<br />
        If the animal wakes up, print:
        [name] has woken up. <br />
        If the animal falls asleep, print: 
        [name] has fallen asleep.
    </li>

    <li>
        <strong>talk()</strong><br />
        If the animal is awake, print:
        [name] says [cry] <br />
        If sleeping, print:
        name is sleeping. <br />
    </li>

    <li>
        <strong>feed()</strong><br />
        The animal can only eat if:
        <ul>
            <li>It is awake</li>
            <li>It has not been fed today</li>
        </ul>
        <b>If feeding is successful, print:</b> [name] 
        is happily eating. <br />
        <b>Otherwise print:</b> [name] 
        is sleeping or already fed today.
    </li>
</ol>

<hr />

<h3>Part 2 — Dog and Cat Classes</h3>

<ol start="4">
    <li>
        In <strong>Dog</strong>:
        <ul>
            <li>Prepare three cry sounds (example: "Bow wow", "Woof", "Arf arf")</li>
            <li>Randomly choose one using <code>random.choice()</code></li>
            <li>Call the parent constructor using <code>super()</code></li>
        </ul>
    </li>

    <li>
        In <strong>Cat</strong>:
        <ul>
            <li>Prepare three cry sounds (example: "Meow", "Mew", "Purr")</li>
            <li>Randomly choose one</li>
            <li>Call the parent constructor correctly</li>
        </ul>
    </li>
</ol>

<hr />

<h3>Part 3 — Simulator Class</h3>

<ol start="6">
    <li>
        <strong>goto()</strong><br />
        Update the current location based on the destination index.
    </li>

    <li>
        Implement sleep logic:
        <ul>
            <li>Animals sleep between 22:00 and 06:00</li>
            <li>If currently awake at night → make them sleep</li>
            <li>If currently sleeping during the day → wake them up</li>
        </ul>
    </li>

    <li>
        If location is <strong>Home</strong>, make all animals talk.
    </li>

    <li>
        In <strong>buy()</strong>:
        <ul>
            <li>If not enough money, print "Not enough money." and stop the purchase</li>
            <li>Create the correct animal type (Dog or Cat)</li>
            <li>Add the new animal to the animals list</li>
            <li>Subtract the correct amount of money</li>
            <li>For Pet Food, check total cost before purchase</li>
        </ul>
    </li>

    <li>
        In <strong>feed_animals()</strong>:
        <ul>
            <li>If you have no animals, print "You have no animals."</li>
            <li>Otherwise, call <code>feed()</code> for each animal</li>
        </ul>
    </li>
</ol>

<hr />

<h3>Part 4 — Main Program</h3>

<ol start="11">
    <li>
        Create a Simulator object starting at time 8.
    </li>

    <li>
        Print:
        <ul>
            <li>Current location</li>
            <li>Current money</li>
            <li>Current time</li>
        </ul>
    </li>

    <li>
        Connect menu options (1-6) to the correct Simulator methods.
    </li>
</ol>

<hr />
    <CodeDownloader href="/code/mathPy/simulator_sol.py" fileName="simulator.py">
        Download the Solution
    </CodeDownloader>
    
            </div>

        </div>
    );
}