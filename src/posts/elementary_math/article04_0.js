import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";


export const title = "Applications of Remainder（余りの応用）";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
                </div>
            <div className="body">

        <section>
          <h2>余りと倍数判定</h2>
          <p>
            以前に倍数判定の方法を紹介しましたが、これは余りと密接に関係しています。
            数は 10 のべき乗 × 数字の和で表せます。例えば 5313 は <Inline math="5 \times 10^3 + 3 \times 10^2 + 1 \times 10^1 + 3 \times 10^0" /> です。
          </p>
          <p>
            余りには加法が成り立ちます。各項を割ったときの余りを足して 0 になれば割り切れることがわかります。
            例えば 5313 は 3 で割れるでしょうか？各項を 3 で割ると余りは 2,0,1,0 で合計 3、つまり割り切れます。
          </p>
          <div className="problems">
            <h3>練習問題</h3>
            <ol>
              <li>
                76415 は 7 で割れますか？<br />
                <em>各項に分解して余りの足し算で考えて解いてみましょう。</em>
              </li>
              <li>
                同じ方法で 10 のべき乗を 9 で割った時のパターンから、9 の倍数判定を作りましょう。
              </li>
            </ol>
          </div>
          <p>
            <strong>補足：</strong>余りの加法・乗法が成り立つ理由は <Inline math="d \times q + r" /> の形で表せるからです。
            足す場合、<Inline math="(d q_1 + r_1) + (d q_2 + r_2) = d(q_1+q_2) + (r_1+r_2)" />、
            掛ける場合も分配法則で余りだけに依存します。
          </p>
        </section>

        <section>
          <h2>二平方和定理</h2>
          <p>
            任意の奇数を選びます、それは二つの平方数で表せるでしょうか？例えば <Inline math="1^2+0^2" /> は 1、<Inline math="2^2+3^2" /> は 13 と表せます。では 3 や 7 はどうでしょうか、二つの平方数の和で表せるでしょうか？
          </p>
          <p>
            4 で割ったときの余りが 3 の数はこのように表せないことが分かっています。平方数の余りを考えます。どんな数も 4 で割ったときの余りは 0,1,2,3 なので、それを二乗すると <Inline math="0^2,1^2,2^2,3^2" />、4 で割った余りは <Inline math="0,1,0,1" /> になります。つまり平方数を 4 で割った余りは 0 か 1 しかあり得ません。
          </p>
          <p>
            平方数の足し算の余りの結果を考えてみましょう。0 と 1 の足し算の組合せの結果は 0,1,2 しか出ません。3 が作れないことから、4 で割ったときに余りが 3 の数は二つの平方数の和では表せません。これを <strong>フェルマーの二平方和定理</strong>（クリスマス定理とも呼ばれる）といいます。
          </p>

          <div className="problems">
            <h3>練習問題</h3>
            <ol>
              <li>
                3 で割った余りが 2 の数は平方数の積で表せますか？3 で割った余りを二乗して考えましょう。また、5 で割った余りが X のとき、二つの平方数で表せない場合の X は何ですか？
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2>ウィルソンの定理</h2>
          <p>
            好きな自然数 <Inline math="n" /> と素数 <Inline math="p" /> を選び、<Inline math="n, 2n, \dots, (p-1)n" /> の列を書きましょう。例として <Inline math="n=2, p=5" /> の場合、列は <Inline math="\{2,4,6,8\}" /> です。
          </p>
          <p>
            次に p で割った余りの列を作ります。今回は <Inline math="R = \{2,4,1,3\}" /> です。さらに 1 から p-1 で掛けて p の余りを取ると、それぞれ
            <Inline math="\{2,4,1,3\}, \{4,3,2,1\}, \{1,2,3,4\}, \{3,1,4,2\}" /> になります。
          </p>
          <p>
            この列の掛け算のペアを作ると全ての数が 1 になることが分かります。つまり各数には掛け算して 1 になる唯一の数が存在します。この性質を使うと便利な定理が導けます。
          </p>
          <p>
            <strong>ウィルソンの定理：</strong>素数 p に対して 1 から p-1 までの積を p で割ると余りは p-1 になる。
          </p>
          <p>
            例えば p=5 の場合、<Inline math="4\times3\times2\times1 = 24" /> を 5 で割ると余りは 4 (=p-1) です。p=7 の場合、1 と 6 を除く <Inline math="2\times4" /> と <Inline math="3\times5" /> は 1 になるペアを作れます。残った 1 と 6 の掛け算は 6 です。
          </p>

          <div className="problems">
            <h3>練習問題</h3>
            <ol>
              <li>
                1 から 15 までの積を 17 で割った余りはどうなりますか？1 から 16 までの積の余りを考えて答えましょう。
              </li>
            </ol>
          </div>
        </section>

            </div>

        </div>
    );
}