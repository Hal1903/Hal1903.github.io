import '../../css/post.css';


export const title = "Why you should learn Spreadsheet";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
                <p>
                    In this article, I will explain why learning spreadsheet software (like Excel and Google Sheets) 
                    is a valuable skill in today's world.
                    It basically teaches you computational thinking— 
                    if you are a parent or a teacher, it is a skill that you should definitely teach your children or students.
                    But how does spreadsheet teach such skills? Let's see the examples:
                </p>

                <h2>1. Task Automation</h2>
                <p>
                Say you have a list of things to do with deadlines, 
                and you want to make it a calendar. However, this is a bit of a pain to do manually, and you want to automate it.
                You can use a spreadsheet to do this.
                You can input the list of tasks and deadlines, and then use formulas to generate a calendar view.
                This is much faster than doing it by hand, and it also allows you to easily update the calendar if your tasks or deadlines change.
                It will require you to learn a tool called <b>formulas</b>.
                This is one of the most fundamental tools in spreadsheet software and leads you to computational thinking.
                </p>
                <video
                controls
                style={{
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%",
                    maxHeight: "90vh",
                    width: "100%",
                    height: "auto"
                }}
                >
                <source src="/images/articles/comp/calendar.mp4" type="video/mp4" />
                </video>
                <figcaption style={{ textAlign: "center" }}>
                My auto todo-calendar system in Spreadsheet
                </figcaption>

                <br></br>
                <p>
                It is okay if they first use AI to write the complex formulas, but make sure that they steadily learn to write the formulas themselves.
                The point is to learn how to break down a problem into smaller steps and then use the tools available to solve it.
                This is the essence of computational thinking, and spreadsheet software is a great way to learn it with quick visualization.
                </p>

                <h2>2. Data Analysis</h2>
                <p>
                Another example is data analysis, 
                which lies at the extension of computational thinking 
                and is a highly valuable skill in the modern world.
                You can use spreadsheet software to analyze data,
                create charts, and generate insights.
                Data scientists, business analysts, and many other professionals use spreadsheet software as a fundamental tool in their work.
                Learning how to use it effectively can give you a competitive edge in the job market.
                </p>

                <div className="image-scroll">
                <img
                    src="/images/articles/comp/an.png"
                    alt="Data Analysis in Spreadsheet"
                />
                </div>
                <figcaption style={{ textAlign: "center" }}>
                    Data Analysis in Spreadsheet (from my physics I lab)
                </figcaption>

                <h2>3. Entertainment</h2>
                <p>
                Last but not least, spreadsheet can also be used for entertainment purposes.
                For example, you can create games, puzzles, or even simple simulations.
                You may design card games, board games, or even fully-functional Tetris using spreadsheet software.
                This not only makes learning more engaging but also helps you apply computational thinking in a fun and creative way.
                </p>
                <img src="/images/articles/comp/tetris.gif" alt="Tetris in Spreadsheet" />
                <figcaption style={{textAlign: "center"}}>Tetris in Spreadsheet (source: <a href="https://github.com/koirand/tetris.xlsm?tab=readme-ov-file">Source GitHub (Kozuki Koide)</a>)</figcaption>
            </div>

                <h2>Conclusion</h2>
                <p>
                    In conclusion, learning spreadsheet software is a valuable skill that can teach you computational thinking, data analysis, and even provide entertainment.
                    Whether you are a student, a professional, or just someone looking to learn a new skill, I highly recommend investing time in learning how to use spreadsheet software effectively.
                    It is a versatile tool that can open up many opportunities and enhance your problem-solving abilities in various aspects of life.
                </p>

        </div>
    );
}