import '../../css/post.css';
import {Block, Inline} from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "全域木と最小全域木アルゴリズム";
// export const category = "elementary_math";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="body">

<h2>1. 全域木（Spanning Tree）とは何か</h2>

<p>
    グラフのすべての頂点を通り、
    しかも閉じたループ（サイクル）を作らないように
    辺を選んで一つにつないだものを
    <strong>全域木（Spanning Tree）</strong> と呼びます。
</p>

<p>
    「全域」とは“すべてを覆う”という意味です。
    つまり、元のグラフの全頂点を含みます。
    「木」とはサイクルを持たない連結グラフのことです。
</p>

<p>
    WiFiの配線設計、道路ネットワーク、
    電力供給、データ通信など、
    ネットワークを扱う多くの問題に応用されます。
</p>

<hr/>

<h2>2. 全域木を数える</h2>

<p>
    あるグラフ <Inline math="G" /> が与えられたとき、
    その全域木の総数を
</p>

<Block math="T(G)" />

<p>
    と書くことにします。
</p>

<h3>問題1</h3>

<p>
    図のグラフの全域木をすべて見つけ、
    その個数を数えてみましょう。
</p>

<p>
    次に、特定の辺 <Inline math="e_1" /> を含む全域木を数え、
    さらに <Inline math="e_1" /> を含まない全域木も数えてみましょう。
</p>

<hr/>

<h2>3. 縮約と削除（Deletion–Contraction）</h2>

<p>
    全域木を数えるときに重要な操作が2つあります。
</p>

<h3>① 辺の縮約（Contract）</h3>

<p>
    辺 <Inline math="e_1" /> を縮約するとは、
    その両端の頂点をくっつけて
    一つの頂点にしてしまう操作です。
</p>

<p>
    この新しいグラフを
    <Inline math="G / e_1" />
    と書きます。
</p>

<p>
    実は、
</p>

<Block math="T(G / e_1)" />

<p>
    は「<Inline math="e_1" /> を含む全域木の数」
    と一致します。
</p>

<h3>② 辺の削除（Delete）</h3>

<p>
    辺 <Inline math="e_1" /> を単に取り除いたグラフを
</p>

<Block math="G \backslash e_1" />

<p>
    と書きます。
</p>

<p>
    こちらの全域木の数
</p>

<Block math="T(G \backslash e_1)" />

<p>
    は「<Inline math="e_1" /> を含まない全域木の数」
    に一致します。
</p>

<h3>重要な関係式</h3>

<p>
    したがって、
</p>

<Block math="T(G) = T(G / e_1) + T(G \backslash e_1)" />

<p>
    が成り立ちます。
</p>

<p>
    これは
    「ある辺を含む場合」と
    「含まない場合」に分けて数えているだけです。
</p>

<h3>問題2</h3>

<p>
    与えられたグラフ <Inline math="G" /> に対し、
    赤い辺 <Inline math="e" /> を縮約した
    <Inline math="G/e" /> と、
    削除した <Inline math="G\backslash e" />
    を描き、
    それぞれの全域木の数を求めましょう。
</p>

<hr/>

<h2>4. 最小全域木（Minimum Spanning Tree）</h2>

<p>
    次は少し実用的な話です。
</p>

<p>
    町と町をつなぐ道路があり、
    それぞれに建設コストがあるとします。
    すべての町をつなぎたいが、
    コストは最小にしたい。
</p>

<p>
    これは
    <strong>最小全域木（MST: Minimum Spanning Tree）</strong>
    を求める問題です。
</p>

<hr/>

<h2>5. Prim（プリム）アルゴリズム</h2>

<p>
    手順は次の通りです。
</p>

<ol>
    <li>任意の頂点を1つ選ぶ。</li>
    <li>現在の木から伸びる辺のうち、最もコストの小さいものを選ぶ。</li>
    <li>新しい頂点を木に追加する。</li>
    <li>すべての頂点が含まれるまで繰り返す。</li>
</ol>

<p>
    同じコストの辺がある場合、
    複数の解が存在することがあります。
    しかし総コストは同じになります。
</p>

<h3>問題3</h3>

<p>
    最初に頂点 A を選び、
    Prim のアルゴリズムを実行してみましょう。
</p>

<p>
    採用される辺を順番に書き出し、
    最終的な総コストを求めましょう。
</p>

<hr/>

<h2>6. Kruskal（クラスカル）アルゴリズム</h2>

<p>
    もう一つの有名な方法が
    Kruskal のアルゴリズムです。
</p>

<ol>
    <li>すべての辺をコスト順に並べる。</li>
    <li>小さい順に辺を採用する。</li>
    <li>サイクルができる場合はその辺を却下する。</li>
    <li>全頂点がつながるまで続ける。</li>
</ol>

<p>
    「できるだけ安い辺から使う」
    という直感的な方法です。
</p>

<h3>問題4</h3>

<p>
    Kruskal のアルゴリズムを使って、
    採用される辺を順番に書き出しましょう。
</p>

<p>
    その後、Prim の結果と総コストを比較してみましょう。
</p>

<hr/>

<h2>7. どちらが速い？</h2>

<p>
    グラフの特徴によって適したアルゴリズムは変わります。
</p>

<ul>
    <li>辺が非常に多い（Dense なグラフ） → Prim が有利</li>
    <li>辺が少ない（Sparse なグラフ） → Kruskal が有利</li>
</ul>

<p>
    どちらも正しい最小全域木を与えますが、
    計算効率が異なります。
</p>

<hr/>

<h2>まとめ</h2>

<p>
    全域木は
    「すべてをつなぐ最小限の骨組み」です。
    そこにコストを導入すると、
    現実のインフラ設計やネットワーク構築の問題になります。
    この全域木を筆頭に、グラフ理論やアルゴリズムは数学的な構造と
    実社会の応用が結びつく
    非常に美しいテーマです。
</p>

            </div>
        </div>
    );
}