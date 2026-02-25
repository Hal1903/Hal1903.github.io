import '../../css/post.css';

export const title = "AutoHotKey (日本語)";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">
                <p>
                    パソコンでダッシュ記号（—）を入力するとき、どうしていますか？
                    Alt+0151 を使っていますか？
                    正直に言うと、私はこの入力方法があまり好きではありませんでした。
                    そこで別の方法を探し、より簡単に入力できる設定を見つけました。
                    Alt + ハイフン（-）で em ダッシュ（—）を出力するように設定したのです。
                    ここでは、その具体的な手順を紹介します。
                </p>

                <ol>
                    <li>
                        <p>
                            <a href='https://www.autohotkey.com/v2/'>こちら</a> または
                            <a href='https://www.autohotkey.com/'>こちら</a> から AutoHotKey をインストールします。
                        </p>
                    </li>

                    <li>
                        .ahk ファイルを作成し、エディタで開きます。
                        作成した ahk ファイルを右クリックして、メモ帳や VSCode など好きなエディタで開いてください。
                    </li>

                    <li>
                        以下の内容をコピー＆ペーストします。
                        <br />
                        #Requires AutoHotkey v2.0
                        <br />
                        ; Alt + Hyphen で em ダッシュ（—）を送信
                        <br />
                        !-::SendText Chr(0x2014)
                    </li>

                    <li>
                        ahk ファイルをダブルクリックして実行します。
                        これで Alt + - を押すと「—」が入力できるようになります。
                        <br />
                        （任意）Win + R を押して「shell:startup」と入力し、
                        作成した ahk ファイルを Programs/Startup フォルダに移動すれば、
                        パソコン起動時に自動で実行されます。
                        この仕組みは他のアプリケーションにも応用できます。
                    </li>
                </ol>

                <p>
                    ハイフン以外のキーを使うことも可能です。
                    組み合わせは ChatGPT に相談すればすぐに作れます。
                    ただし、既存の便利なショートカットと重ならないよう注意してください。
                    例えば、Alt+S はブラウザの履歴表示、
                    Alt+D はアドレスバーへ移動、
                    Alt+B はブックマークなど、既に重要な機能が割り当てられています。
                </p>

                <p>
                    また、AutoHotKey の機能はキーボード操作だけにとどまりません。
                    マウスのクリック、ドラッグ、スクロールなどの自動化も可能です。
                    AHK を使えば、さまざまな作業を効率化できます。
                    ぜひ自分なりに自動化の世界を探ってみてください。
                </p>

                <p>
                    この記事が、皆さんのパソコン作業の効率向上に少しでも役立てば嬉しいです。
                </p>

            </div>
        </div>
    );
}