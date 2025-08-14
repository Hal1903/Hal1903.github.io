import '../../css/post.css';

export const title = "Exponentiation（累乗・冪乗）";
export const category = "elementary_math";

export default function Article1() {
  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="body">
        <section>
          <h2>掛け算： 累乗・冪乗</h2>
          <p>
            もし 1mm の紙を 42 回折れたらその厚さは月に届くと聞いたことありますか？これは折れば折るほど前の厚さの
            2 倍になるからです。1(mm) × 2 × 2 = 2<sup>2</sup>、2 × 2 × 2 = 2<sup>3</sup> … と書き、
            2<sup>x</sup> を 2 の<strong>x 乗</strong>といいます。このとき 2 を<strong>底（てい）</strong>、
            x を<strong>指数</strong>と言います。このような何かの 2 乗で表せる数を<strong>平方数</strong>と言います。
          </p>

          <div className="problems">
            <h3>練習問題</h3>
            <ol>
              <li>
                4<sup>3</sup> = □ × □ × □ = ?　&nbsp;&nbsp; 2<sup>4</sup> = ?　&nbsp;&nbsp; 
                (2<sup>3</sup>)<sup>2</sup> = ?　&nbsp;&nbsp; 
                (2 × 3)<sup>2</sup> = □<sup>3</sup> × □<sup>2</sup> = ?
              </li>
              <li>
                ポケットの中にはビスケットが一つ。ポケットを叩けばビスケットが二つに。もう一度叩けば四つにと、
                一つのビスケットが 2 倍になる。8 回ポケットを叩いたら何個になっているでしょうか。
              </li>
              <li>
                幹から 2 本の枝が生えている。木の枝先は一年で 3 つに分かれるとき、4 年後には枝先は何本になっているか。
                <em>（ヒント： 図を書いてみましょう）</em>
              </li>
              <li>
                100g のケーキがあり、残っている分の半分を毎日食べる。4 日後にはいくら残っているか。
                <em>（ヒント： 足し算と引き算を忘れずに）</em>
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2>ピタゴラスの定理</h2>
          <p>
            どんな直角三角形にも次の公式が成り立ちます：&nbsp;
            <code>斜辺<sup>2</sup> = 底辺<sup>2</sup> + 高さ<sup>2</sup></code>&nbsp;
            または <br></br> &nbsp;<code>c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup></code>
          </p>

          <div style={{ textAlign: 'center', margin: '1rem 0' }}>
            <img
              src="/images/articles/elementary_math/rightTri.png"
              alt="直角三角形の図（底辺 a、高さ b、斜辺 c）"
              style={{ maxWidth: '100%', height: 'auto', width: '360px' }}
            />
          </div>

          <div className="problems">
            <h3>練習問題</h3>
            <ol>
              <li>
                直角三角形が斜辺 5cm、高さ 4cm をもつときの底辺の長さは？
              </li>
              <li>
                直角三角形が底辺 8cm、高さ 6cm をもつときの斜辺の長さは？
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}
