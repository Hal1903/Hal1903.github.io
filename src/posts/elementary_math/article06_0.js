import '../../css/post.css';

export const title = "Advanced Exercise（発展問題）";
// export const category = "elementary_math";
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <h2>Basic Problems</h2>

                <ol>

                    <li>
                        <Block math={`5^2 + 24 = \\square^2`} />
                        のとき、<Inline math={`\\square`} /> の中身は何ですか。
                    </li>

                    <li>
                        <Block math={`(-1)^1 \\times (-2)^2 \\times (-3)^3`} />
                        を求めなさい。
                    </li>

                    <li>
                        <Block math={`\\frac{(-2)^3 \\times (-3)^3}{27 \\times (-4)}`} />
                        を約分しなさい。
                    </li>

                    <li>
                        <Block math={`1323000 = 8 \\times 27 \\times 125 \\times 49`} />
                        を素因数分解し、それぞれの素因数と指数を答えなさい。
                        また、15以下で割れる数はいくつありますか。
                    </li>

                    <li>
                        20までの奇数をすべて掛け合わせた積について：
                        <ul>
                            <li>3は何回かけられていますか。</li>
                            <li>7は何回かけられていますか。</li>
                            <li>21で何回割れますか。</li>
                        </ul>
                    </li>

                    <li>
                        あみだくじがあります。出発地点を12345、ゴールをABCDEとするとき、
                        スタートとゴールの組み合わせは何通りありますか。
                    </li>

                    <li>
                        2025を割り切る数字はいくつありますか。
                        そのあと、割り切る数字すべての和を求めなさい。
                    </li>

                    <li>
                        <ul>
                            <li>100の後で最初に23で割り切れる数は何ですか。</li>
                            <li>1000の後では何ですか。</li>
                            <li>100より小さい31の倍数で最大の数は何ですか。</li>
                            <li>1000より小さい31の倍数で最大の数は何ですか。</li>
                        </ul>
                    </li>

                    <li>
                        A, B, C, D を13で割った余りがそれぞれ
                        <Inline math={`1, 3, 7, 11`} /> のとき、
                        任意の2枚以上を足して余りが奇数になる組合せをすべて求めなさい。
                    </li>

                    <li>
                        <ul>
                            <li>平方数を7で割ったときの余りは何通りありますか。</li>
                            <li>
                                <Block math={`a^2 \\times b^2`} />
                                を7で割ったときの余りは何通りありますか。
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Block math={`1 \\times 2 \\times 3 \\times \\cdots \\times 20`} />
                        を23で割った余りを求めなさい。
                    </li>

                    <li>
                        <Block math={`\\{3,4,1,9,5,7,2,6,8\\}`} />
                        を巡回置換に直しなさい。
                    </li>

                    <li>
                        <Block math={`\\pi(1)=2,\\; \\pi(2)=4,\\; \\pi(3)=1,\\; \\pi(4)=3`} />
                        のとき：
                        <ul>
                            <li><Inline math={`\\pi(\\pi(1))`} /></li>
                            <li><Inline math={`\\pi(\\pi(\\pi(1)))`} /></li>
                            <li><Inline math={`\\pi(\\pi(\\pi(\\pi(1))))`} /></li>
                        </ul>
                        を求めなさい。
                    </li>

                </ol>

                <h2>Challenge Problems</h2>

                <h3>Problem 1</h3>
                <p>
                    ある数について、左から一桁ずつ「足す・引く」を交互に繰り返すと0になり、
                    さらに2、3、5、7で割れないとする。
                    約数の数を最大にできる最小の数は何ですか。
                </p>

                <h3>Problem 2</h3>
                <p>
                    ある数 A に7をかけて1を足し6で割った余りが2、
                    9をかけて1を足し7で割った余りも2のとき、
                    そのような最小の A を求めなさい。
                </p>

                <h3>Problem 3</h3>
                <p>
                    1665の約数の個数と、
                    1665より小さい1665と互いに素な数の個数を求めなさい。
                </p>

                <h3>Problem 4</h3>
                <Block math={`\\{7,3,4,5,8,2,1,6\\}`} />
                <p>
                    を 1 から順に戻すには、最小で何回の互換が必要ですか。
                </p>

                <h3>Problem 5</h3>
                <p>
                    <Inline math={`1 \\times 2 \\times 3 \\times \\cdots \\times 100`} />
                    は7で何回割り切れますか。
                </p>

            </div>
        </div>
    );
}