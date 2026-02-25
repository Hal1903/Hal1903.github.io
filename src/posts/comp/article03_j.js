import '../../css/post.css';

export const title = "なぜスプレッドシートを学ぶべきか";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <p>
                    この記事では、なぜスプレッドシート（Excel や Google Sheets など）を学ぶべきなのかを説明します。
                    スプレッドシートは単なる表計算ソフトではありません。
                    実は「パターン認識」や「計算論的思考（computational thinking）」を身につけるための、とても優れたツールです。
                    保護者や教師の方であれば、ぜひ子どもや生徒に触れさせてほしいスキルの一つです。
                    では、なぜスプレッドシートがそのような力を育てるのでしょうか。
                    具体例を見てみましょう。
                </p>

                <h2>1. 作業の自動化</h2>

                <p>
                    例えば、締切付きのタスクリストをカレンダー形式にまとめたいとします。
                    手作業で並べ替えるのは大変ですが、スプレッドシートなら自動化できます。
                    タスクと締切日を入力し、数式（formula）を使えば、
                    自動的にカレンダー表示を作ることができます。
                    予定が変わっても、データを修正するだけで反映されます。
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
                    スプレッドシートで作った自動Todoカレンダー
                </figcaption>

                <br />

                <p>
                    最初はAIを使って複雑な数式を書いても構いません。
                    ただし、徐々に自分で書けるようになることが大切です。
                    問題を小さな手順に分解し、それを数式で表現する。
                    これこそが計算論的思考の本質であり、
                    スプレッドシートはそれを視覚的かつ直感的に学べる優れた教材なのです。
                </p>

                <h2>2. データ分析</h2>

                <p>
                    もう一つの重要な活用例がデータ分析です。
                    データを整理し、グラフを作り、そこから傾向や意味を読み取る。
                    これは現代社会で非常に価値のあるスキルです。
                    データサイエンティストやビジネスアナリストだけでなく、
                    多くの職種でスプレッドシートは基本ツールとして使われています。
                    使いこなせるようになれば、仕事の幅も広がるでしょう。
                </p>

                <div className="image-scroll">
                    <img
                        src="/images/articles/comp/an.png"
                        alt="Data Analysis in Spreadsheet"
                    />
                </div>

                <figcaption style={{ textAlign: "center" }}>
                    物理実験のデータ分析例
                </figcaption>

                <h2>3. エンターテインメント</h2>

                <p>
                    スプレッドシートは実用だけでなく、遊びにも使えます。
                    ゲームやパズル、簡単なシミュレーションを作ることも可能です。
                    カードゲームやボードゲーム、
                    さらにはテトリスのようなゲームまで実装できます。
                    楽しみながら学ぶことで、創造力と論理的思考の両方を伸ばすことができるのです。
                </p>

                <img
                    src="/images/articles/comp/tetris.gif"
                    alt="Tetris in Spreadsheet"
                />

                <figcaption style={{ textAlign: "center" }}>
                    スプレッドシートで作られたテトリス
                    （出典：
                    <a href="https://github.com/koirand/tetris.xlsm?tab=readme-ov-file">
                        GitHub（Kozuki Koide）
                    </a>
                    ）
                </figcaption>

            </div>

            <h2>まとめ</h2>

            <p>
                スプレッドシートを学ぶことは、
                計算論的思考を身につけ、
                データを扱う力を養い、
                さらには創造的な遊びにもつながる価値あるスキルです。
                学生でも社会人でも、
                しっかり使えるようになれば必ず役立ちます。
                問題解決力を高めるための基礎ツールとして、
                ぜひ積極的に学んでみてください。
            </p>

        </div>
    );
}