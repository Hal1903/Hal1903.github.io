import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export const title = "Remainders and Periodicity（余りと周期）";
export const category = "elementary_math";

export default function Article1_7() {
  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <div className="body">
        <section>
          <h2>余りと周期</h2>
          <p>
            周期的なものと聞いて何を思い浮かべますか？私は暦の月を思い浮かべました。
            1月、2月…は巡って再度迎えますね。今は6月とします。100か月後は何月か計算できますか？
          </p>
          <p>
            まず、12か月でもう一度6月に戻りますね。100か月から12か月がいくつ入っているかを確認します。
            <Inline math="100 \div 12 = 8" /> 回と余り 4 か月です。ですので 6 月に 8 回戻った後 4 か月後、つまり 10 月と分かります。
          </p>
          <p>割り算と余りは周期的なものに対して使えます。</p>

          <div className="problems">
            <h3>練習問題</h3>
            <ol>
              <li>今日は木曜日として10日後、50日後、100日後は何曜日ですか。</li>
              <li>
                あるバスツアーは毎平日開催されていますが、休日は休みです。今日が火曜日として、88日後経った後次のバスツアーは何曜日ですか。
              </li>
              <li>
                100 の後で最初に 29 で割り切れる数はなんですか？
                <br />
                <em>ヒント：100 を 29 で割った余りにいくつ足せば 29 になりますか？</em>
                1000 の後はどうですか？
                <br />
                100、1000 より小さい数で最も大きい 37 で割り切れる数字はそれぞれなんですか？
              </li>
              <li>
                あるケーキ屋はケーキを 1 箱に 6 個ずつ詰めています。注文された 200 個のケーキを箱がちょうどいっぱいになるように焼くには、最小で何個焼けばよいですか？また、箱はいくつ必要ですか？
              </li>
              <li>
                1 から 20 までの数で 9 で割った余りを書きましょう。その下に 3 の倍数を 60 まで書き、それぞれ 9 で割った余りを書きましょう。二つの余りの列を比べて、何か規則がありそうですか？
                <br />
                3 の倍数以外に 5 や 7 の倍数にしたり、割る数を変える等して試してみましょう。
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2>余りの性質</h2>
          <p>
            余りには面白い性質が沢山あります。加法が成り立ちます。例えば <Inline math="31 + 41 + 52 = 124" /> のそれぞれの数を 6 で割った余りを足すと、
            合計を 6 で割った余りは <Inline math="124 \div 6" /> の余りと一致します。
          </p>
          <p>
            乗法も成り立ちます。例えば <Inline math="7 \div 6" /> の余りは 1 です。7 に対して 6 で割って 1 余る数を掛けても余りは 1 になります。
            例えば <Inline math="7 \times 7" /> や <Inline math="7 \times 13" />, <Inline math="7 \times 31" /> で試すと確認できます。
          </p>
          <p>
            このように互いに素な割られる数の倍数と割る数で除算すると、余りは 0 から割る数-1 で循環します。
            例えば 5 の倍数を 3 で割ると <Inline math="0,2,1,0,2,1,\dots" /> と周期的に循環します。
          </p>

          <div className="problems">
            <h3>練習問題</h3>
            <ol>
              <li><Inline math="123 + 456 + 789" /> や <Inline math="123 \times 456 \times 789" /> を 9 で割った時の余りは？</li>
              <li>
                9 の倍数を 7 で割った時の余りがどのように循環するか確認しましょう。
                <br />その後、<Inline math="9 \times 50" /> の余りを少なくとも二通りで計算してみましょう。
              </li>
              <li><Inline math="7^1, 7^2, 7^3, 7^4, 7^5, 7^{100}, 7^{444}" /> を 5 で割ったときの余りは？</li>
              <li>
                A、B、C、D、E を 11 で割ったときの余りがそれぞれ 1、3、7、9、10 のとき、足したら 11 で割り切れる組合せを全て求めましょう。
                <br />また <Inline math="A \times C \times E" /> と <Inline math="A \times B \times C \times D \times E" /> を 11 で割ったときの余りは？
              </li>
              <li>
                好きな自然数 n を選び、二乗しましょう <Inline math="(n-1)^2" />。その後 n で割ったら余りはどうなりますか？
              </li>
              <li>
                なぜ余りには加法と乗法が成り立つのでしょうか？考えたり調べてみましょう。
                <br /><em>ヒント：どんな数 n も <Inline math="d \times q + r" /> という形で表せることです。</em>
              </li>
            </ol>
          </div>
        </section>

        
      </div>
    </div>
  );
}
