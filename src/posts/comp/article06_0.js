import '../../css/post.css';


export const title = "AutoHotKey";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
                <p>
                How do you type a dash symbol on your computer keyboard? Do you use Alt+0151? 
                To be honest, I did not like this typing process, so I was looking for a way to get around this, and I found one. 
                I set Alt+hyphen to output — mark, and I will show the exact procedure I used.
                </p>

                <ol>

                <li>
                <p>
                Install AutoHotKey from <a href='https://www.autohotkey.com/v2/'>here</a> or <a href='https://www.autohotkey.com/'>here</a>
                </p>
                </li>
                <li>
                Create a script, and open an editor. You may right click the ahk file created and open notepad or VSCode or whatever app you want to use.
                </li>
                <li>
                    Copy and paste below:
                    <br></br>
                        #Requires AutoHotkey v2.0
                    <br></br>
                        ; Alt + Hyphen sends an em dash (—)
                    <br></br>
                        !-::SendText Chr(0x2014)
                </li>
                <li >
                    Double click the ahk file to run. Now you should be able to output — by Alt -.
                    (Optional) press Win+r and type shell:startup. Move the ahk file to your Programs/Startup. This allows the computer to run the file automatically when it boots up. You can use this feature for other apps as well.
                </li>

                </ol>

                <p>
                You can use it with different key than hyphen; ChatGPT will help you with this. Just make sure the Alt+[your arbitrary preference] does not override the useful shortcut keys. Alt+s shows history on a browser, Alt+d directly navigates you to url bar enabling you to edit the link and search without clicking, Alt+b bookmarks a page, etc.

                Also, the functionality of autohotkey is not limited to set key shortcuts. It also works for mouse operations: click, hold & drag, scroll, etc. There are a lot of applications with ahk — it’s worth exploring the landscape of automation on your own!
                <br></br>
                I hope this article helps improve your workflow with your computers.
                </p>

            </div>

        </div>
    );
}
