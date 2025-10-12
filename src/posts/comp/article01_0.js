import '../../css/post.css';
import './style.css';

export const title = "Which Computer to Pick?";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div>
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">
                <p>Picking a computer can feel overwhelming, but by understanding a few key components, you can make an informed decision. The most crucial components are the CPU (Central Processing Unit) and RAM (Random Access Memory), but your choice of operating system (OS) is also a major factor that dictates your user experience.</p>
               
                <h2>Windows vs. macOS: The Main Operating Systems</h2>
                <p>
                The first decision you'll likely make is Operating System (OS), between a Windows PC and a Mac. 
                Both are excellent, but they meet the different user needs.
                </p>
                <ul>
                    <li><b>Windows:</b> 
                    Dominating the market with over 70% share, Windows offers flexibility and price points. 
                    You can find a Windows PC from many manufacturers at virtually any budget. This makes it ideal for gaming, 
                    specialized business software, and generally cheaper to repair as well. 
                    In my opinion, I would recommend Windows for beginners and students due to its intuitive UI, software support, gaming capacity.
                    </li>
                    <li><b>macOS:</b> 
                    Mac computers are renowned for their seamless integration with other Apple product supports and designs. 
                    They are a favorite in creative industries like music, graphic design, and video editing due to their hardware-software optimization 
                    and excellent battery life in laptops. However, they are typically more costly and offer limited upgradeability.
                    </li>
                </ul>

                <h2>Understanding CPU Labels, Cores, and Threads</h2>
                <p>The CPU is the brain of your computer. Its performance is measured by its number of cores and threads.</p>
                <ul class="hanging-bullet">
                    <li>
                        <span class="label">Cores:</span>
                        <span class="desc">
                            A physical processing unit, like a worker on a task.
                            A multi-core CPU has multiple workers, allowing it to handle multiple tasks at once.
                        </span>
                    </li>
                    <li>
                        <span class="label">Threads:</span>
                        <span class="desc">
                            a virtual sequence of instructions. A single physical core can often run two threads at once.
                        </span>
                    </li>
                </ul>


                <p>Reading CPU labels can be a bit confusing, but here's a general guide:</p>
                <ul className="hanging-bullet">
                    <li><span className='label'>Intel:</span> 
                    You'll see "Core i3, i5, i7, i9" or similar naming scheme. The number indicates the performance tier, with higher numbers being more powerful. 
                    The next number indicates the generation (e.g., "14" in "i5-14600K" means 14th generation). 
                    A letter at the end, like "K" (unlocked for overclocking) or "F" (no integrated graphics), provides additional information.
                    You're less likely to see these letters on laptop processors because laptops have limited thermal capacity.
                    </li>
                    <li><span className='label'>AMD:</span> 
                    AMD's system for desktops uses "Ryzen 3, 5, 7, 9" to denote the performance tier. 
                    The following four digits provide the generation and model number (e.g., "7" in "Ryzen 7 7700X" means 7000 series). 
                    They similarly have a suffix like "X" (higher clock speeds) or "G" (includes integrated graphics).
                    </li>
                </ul>

                <h2>Memory</h2>
                <p>
                    Another key component is the capacity of Random Access Memory (RAM), amount of memory.
                    Memory is like short-term data storage, which disappears after shutting down, while storage or HDD/SSD keeps the data persistently.
                    If you are planning to open a software that is inherently intensive like Photoshop and a video editor, you must have at least 8GB.
                    Lack of memory causes freeze, crash, and/or inability to open some applications.

                </p>

                <h2>A Guide to CPU and RAM Choices by Workload</h2>
                <p>Here's a simple table to help you decide which CPU and RAM combination is right for you. Keep in mind that a good computer is a balanced computer, so make sure your CPU and GPU are on similar performance tiers to avoid bottlenecks.</p>
               
                <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Recommended CPU Tier (Intel/AMD)</th>
                            <th>Minimum Recommended RAM</th>
                            <th>Capable Workload</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Core i3 / Ryzen 3</td>
                            <td className='GB'>8GB</td>
                            <td>General office work, web Browse, email, streaming, and light gaming.</td>
                        </tr>
                        <tr>
                            <td>Core i5 / Ryzen 5</td>
                            <td className='GB'>8-16GB</td>
                            <td>
                            Multitasking, mainstream gaming at 1080p, and light content creation.
                            </td>
                        </tr>
                        <tr>
                            <td>Core i7 / Ryzen 7</td>
                            <td className='GB'>16-32GB</td>
                            <td>Professional content creation, high-end gaming (1440p/4K), and demanding multitasking.</td>
                        </tr>
                        <tr>
                            <td>Core i9 / Ryzen 9</td>
                            <td className='GB'>32GB+</td>
                            <td>
                            Expert-level workloads like 4K video editing, 3D rendering, and extreme gaming/streaming.
                            Likely be an overkill for a laptop and be cautious about bottlenecks.
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>

                <p style={{marginTop: "2em"}}>The performance can be evaluated with benchmark scores. Here are two helpful websites I have utilized before purchasing my CPU: </p>
                <ul>
                    <li><a href='https://www.cpubenchmark.net/cpu_list.php'>Passmark Comparison website</a></li>
                    <li><a href='https://pcfreebook.com/article/450856544.html'>ベンチマーク (in JPN, comparable to the above)</a></li>
                </ul>
                Just for a reference, I am using <b>Ryzen 5 7530U </b> (U stands for ultra-low power, a good option if battery-life is crucial) 6 cores for my laptop with 8GB RAM.
                It is capable of programming, video editing, photoshopping, and games like Minecraft, Roblox, and MTG Arena. 
                I have no problem with using my laptop class to class in my high school and university without much concern about battery as well.
                

                <div>
                <h2>Other Factors</h2>
                    <p>
                        For a laptop, pretty much that's it. 
                        Storage can be a key issue, but generally 256GB should be sufficient 
                        unless you are planning to install a lot of applications. If so, 512GB may be a better choice.
                        External USB can help with storing data, so if pictures, documents, or videos are your concern, usually it is fine.
                        You may also check the available ports i.e. compatibility to HDMI, Lightning cable, etc. in addition to the number of USB ports. 
                        while this issue can be resolved by adapters oftentimes, it is worth knowing, to save you a bit of money.
                        Additional factor is warranty. I do not know which plan is the best, but I personally have at least 1 year warranty. 
                        <br></br>
                        
                        However, for a desktop, there is one more critical component: <b>Graphics Processing Unit (GPU)</b>. 
                        Probably all the laptop has a GPU integrated to CPU, but if you are building your own computer, GPU would be the most significant investment. 
                        Although this article does not cover the detail on GPU, I will briefly put a small advice.
                        It is worth paying $500 for a GPU, and choose NVIDIA's one with <b>CUDA</b> if you are planning to learn how to make an AI. 
                        
                    </p>
                </div>
                
                <h2>
                    Conclusion
                </h2>
                <ul>
                    <li>Check OS, CPU (and cores), RAM, storage, and ports</li>
                    <li>Know how you would use your computer mainly.</li>
                    <li>Benchmark is a great tool to evaluate CPU before purchasing</li>
                    <li>256GB-512GB storage should be sufficient. </li>
                    <li>If desktop, invest in GPU so that you don't bottleneck</li>
                </ul>
            </div>
            I hope this helps your better experience with your computer.
        </div>
        <footer>
            
        </footer>
        </div>
    );
}