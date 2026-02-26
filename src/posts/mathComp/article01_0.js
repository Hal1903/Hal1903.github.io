import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Python Installation: Hello World!";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <h2>Quick Start for "Programming": Google Colab (No Installation Required)</h2>

                <p>
                    When someone wants to learn programming, 
                    I usually recommend them to "set up" the environment, 
                    to learn more about what "computers" are 
                    and how it works, beforehand or concurrently, even if that might be a bit detouring 
                    (but this is necessary at some point and absolutely important for long-term vision!).
                </p>
                <p>
                    However, you can still immediately jump into programming,  
                    using <a href="https://colab.research.google.com/">Google Colab</a> in your browser.
                </p>

                <ol>
                    <li>Go to <a href="https://colab.research.google.com/">https://colab.research.google.com/</a></li>
                    <li>Click “New Notebook”</li>
                    <li>In the first cell, type:</li>
                </ol>

                <pre>
                print("Hello, World!")
                </pre>

                <p>
                    Click the ▶ button to run the code.
                </p>

                <p>
                    You can also use user input:
                </p>

                <pre>
                name = input("Enter your name: ")
                print("Hello,", name)
                </pre>

                <p>
                    A small input box will appear when you run the cell.
                </p>

                <p>
                    Google Colab is ideal for beginners because it requires no setup.
                    However, for larger projects, learning a local IDE like PyCharm is recommended.
                </p>

                <div className='image-center'>
                        <img src="/images/articles/comp/colab.png" />
                </div>
                <figcaption>You can add a code cell / space to run a different code separately.</figcaption>

                <h2>1. Set Up Your Local Programming Environment: Install Python</h2>

                <p>
                    Before using PyCharm, you need Python installed on your computer.
                </p>

                <ol>
                    <li>
                        Go to the official Python 
                        website: <a href="https://www.python.org/">https://www.python.org/</a>
                    </li>
                    <li>
                        Click “Downloads” and download the latest stable version for your operating system.
                    </li>
                    <li>
                        Run the installer.
                        <br />
                        <strong>Important (Windows users):</strong> Check the box that says
                        <b>“Add Python (or bin) to PATH”</b> before clicking Install.
                    </li>

                    <li>
                        After installation, open Command Prompt (or Terminal on Mac) and type:
                        <br />
                        <code>python --version</code>
                        <br />
                        If a version number appears, Python is installed correctly.
                    </li>
                    <div className='image-center'>
                        <img src="/images/articles/comp/cmd.png" />
                    </div>
                </ol>

                <h2>2. Install PyCharm</h2>

                <p>
                    PyCharm is an IDE (Integrated Development Environment) that makes writing Python code easier.
                </p>

                <ol>
                    <li>
                        Go to <a href="https://www.jetbrains.com/pycharm/"> https://www.jetbrains.com/pycharm/ </a>
                    </li>
                    <li>
                        Download the <strong>Community Edition</strong> (free version).
                    </li>
                    <li>
                        Run the installer and follow the setup instructions.
                    </li>
                    <div className='image-center'>
                        <img src="https://raw.githubusercontent.com/Hal1903/media/master/pycharm_in.png" />
                    </div>
                    <li>
                        Launch PyCharm after installation.
                    </li>
                </ol>

                <h2>3. Create a New Project</h2>

                <ol>
                    <li>
                        Open PyCharm.
                    </li>
                    <li>
                        Click “New Project”.
                    </li>
                    <li>
                        Choose a location (for example: Documents/PythonProjects).
                    </li>
                    <li>
                        Make sure the Python Interpreter is detected automatically.
                        If not, select the installed Python version manually.
                    </li>
                    <li>
                        Click “Create”.
                    </li>
                </ol>

                <h2>4. Write Your First Program</h2>

                <ol>
                    <li>
                        In the left panel, right-click the project folder.
                    </li>
                    <li>
                        Click New → Python File.
                    </li>
                    <li>
                        Name it <code>hello.py</code>
                    </li>
                    <li>
                        In the editor, type:
                        <br />
                        <code>print("Hello, World!")</code>
                    </li>
                </ol>

                <h2>5. Save and Run the Code</h2>

                <p>
                    PyCharm automatically saves your file, but you can press:
                    <br />
                    <strong>Ctrl + S</strong> (Windows) 
                    or <strong>Cmd + S</strong> (Mac) to save manually.
                </p>

                <p>
                    To run the program:
                </p>

                <ul>
                    <li>
                        Right-click inside the editor and click “Run 'hello'”
                    </li>
                    <li>
                        Or click the green ▶ run button at the top-right corner
                    </li>
                </ul>

                <p>
                    You should see the output at the bottom of the screen:
                    <br />
                    <code>Hello, World!</code>
                </p>

                <h2>6. Understanding What Just Happened</h2>

                <p>
                    The line <code>print("Hello, World!")</code> tells Python to display text on the screen.
                </p>

                <p>
                    Every Python program is executed from top to bottom.
                    Even a single line of code is already a complete program.
                </p>

                <h2>7. Next Steps</h2>

                <p>
                    Now that you can install Python, create a project, write code, and run it,
                    you are ready to start reading the next articles and learning basic syntax such as:
                </p>

                <ul>
                    <li>Variables</li>
                    <li>Input and Output</li>
                    <li>Conditional statements (if/else)</li>
                    <li>Loops (for / while)</li>
                    <li>Functions</li>
                </ul>

                <p>
                    <b>Programming is best learned by practice. </b> 
                    Try modifying the message inside the print statement and run it again.
                </p>

            </div>

        </div>
    );
}