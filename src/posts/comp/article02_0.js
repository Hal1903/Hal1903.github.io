import '../../css/post.css';

export const title = "Files and Cloud";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="body">
                <p>
                    A <b>file</b> is a collection of data on a computer uniquely identified by its filename and its location or <b>path</b>, 
                    which is the address that tells your operating system exactly where the file is stored (for example: 
                    <code>C:\Users\Luke\Documents\notes.txt</code> on Windows or <code>/home/luke/Documents/notes.txt</code> on Linux).
                    A folder is a container of files and other folders, called subfolders. 
                    When you download a file, your file is likely in a Downloads folder. If you take a screenshot, it is likely in a Pictures folder.
                    They are all subfolders of the root folder, which contains system files necessary to run your computer.
                    
                </p>

                <h2>Compression and Extraction</h2>
                <p>
                    Files can also be <b>compressed</b> into archive formats such as <code>.zip</code> to reduce their size and make them easier to share. 
                    Most <code>.zip</code> archives use <b>lossless compression</b>, meaning the original data can be perfectly restored when the file is extracted.
                </p>


                <h2>Common File Extensions</h2>
                <ul>
                    <li><strong>.txt</strong> - Plain text files, readable in any text editor.</li>
                    <li><strong>.docx</strong> - Microsoft Word documents.</li>
                    <li><strong>.xlsx</strong> - Excel spreadsheets.</li>
                    <li><strong>.jpg / .png</strong> - Image formats; JPG is compressed, PNG supports transparency.</li>
                    <li><strong>.mp4</strong> - Video file format.</li>
                    <li><strong>.zip</strong> - Compressed archive for multiple files or folders.</li>
                    <li><strong>.exe</strong> - Executable program (Windows).</li>
                </ul>

                <h2>Quick Access</h2>
                <p>
                    In most operating systems, <strong>Quick Access</strong> or <strong>Favorites</strong> is a 
                    section in your file explorer that shows frequently used folders and recently opened files. 
                    It's a shortcut hub, saving you from having to navigate deep folder paths every time.
                </p>



                <h2>What is the Cloud?</h2>
                <p>
                    The <strong>cloud</strong> refers to servers (a server is just a computer that is always accesible) 
                    accessible over the internet that store and manage your data remotely. 
                    Instead of keeping all your files on your local device, you can use services 
                    like Google Drive, Dropbox, iCloud, or OneDrive to
                </p>
                <ul>
                    <li>Access your files from anywhere, on any device.</li>
                    <li>Collaborate with others in real time.</li>
                    <li>Back up important files to prevent data loss.</li>
                </ul>
                <p>
                    Those secure servers are managed by companies, and files are often stored across multiple locations for safety.
                </p>

                <h2>Other Things Worth Knowing</h2>
                <ul>
                    <li><strong>Metadata:</strong> Information about a file (size, creation date, author, etc.).</li>
                    <li><strong>Permissions:</strong> Rules that control who can read, write, or execute a file.</li>
                    <li><strong>Backups:</strong> Always keep copies of important data, either on an external drive or in the cloud.</li>
                    <li><strong>Search Indexing:</strong> Modern systems create indexes so you can quickly find files by name or content.</li>
                </ul>

                <p>
                    Understanding your file system and how to use cloud storage will make you more 
                    organized, protect your important data, and save you time every day.
                </p>
            </div>
        </div>
    );
}
