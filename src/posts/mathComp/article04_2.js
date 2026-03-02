import '../../css/post.css';
import { Block, Inline } from "../../components/KatexBox";
import "katex/dist/katex.min.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const title = "The Sieve of Eratosthenes for Primes";

export default function Article1() {
    return (
        <div className="container">
            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="body">

                <h2>1. Introduction</h2>
                <p>
                    Prime numbers are one of the most fundamental ideas in mathematics.
                    They appear simple at first, but they form the foundation of number theory,
                    cryptography, and many modern technologies.
                </p>
                <p>
                    In this article, we will understand what prime numbers are,
                    why every number can be built from primes,
                    and how an ancient algorithm called the Sieve of Eratosthenes
                    can efficiently find them.
                </p>

                <h2>2. What Are Prime Numbers?</h2>
                <p>
                    A <strong>prime number</strong> is a natural number greater than 1
                    that has exactly two positive divisors:
                </p>

                <ul>
                    <li>1</li>
                    <li>Itself</li>
                </ul>

                <p>
                    For example:
                </p>

                <ul>
                    <li>2 is prime (divisors: 1, 2)</li>
                    <li>3 is prime (divisors: 1, 3)</li>
                    <li>5 is prime (divisors: 1, 5)</li>
                </ul>

                <p>
                    However, 4 is not prime because:
                </p>

                <Block math={String.raw`
4 = 2 \times 2
`} />

                <p>
                    It has divisors 1, 2, and 4 — more than two divisors.
                    Such numbers are called <strong>composite numbers</strong>.
                </p>

                <h2>3. Every Number Is Built from Primes</h2>
                <p>
                    An important fact in mathematics is:
                </p>

                <p>
                    <strong>Every integer greater than 1 can be written as a product of prime numbers.</strong>
                </p>

                <p>
                    For example:
                </p>

                <Block math={String.raw`
12 = 2 \times 2 \times 3
`} />

                <Block math={String.raw`
30 = 2 \times 3 \times 5
`} />

                <p>
                    Even large numbers can be broken down into primes.
                    This is called <strong>prime factorization</strong>.
                </p>

                <p>
                    This statement is part of a very important theorem called
                    the Fundamental Theorem of Arithmetic.
                </p>

                <h3>Exercise</h3>
                <p>
                Show that there are infinitely many prime numbers.
                </p><p>
                First, assume there are actually a finite number of prime numbers.
                Then, what can you say from here? 
                Can you create one more prime number?
                If so, that contradicts our assumption — 
                however, if your logic is not wrong, what was wrong? 
                What was your first step?
                </p>

                <h2>4. Why Must This Be True? (Proof by Contradiction)</h2>
                <p>
                    Let us briefly see why every number must be built from primes.
                    We use a method called <strong>proof by contradiction</strong>.
                </p>

                <p>
                    Suppose there exists a number greater than 1
                    that cannot be written as a product of primes.
                </p>

                <p>
                    Among all such numbers, choose the smallest one.
                    Call it <Inline math="n" />.
                </p>

                <p>
                    Since <Inline math="n" /> is not prime (otherwise it is already a prime product),
                    it must be composite. So:
                </p>

                <Block math={String.raw`
n = a \times b
`} />

                <p>
                    where both <Inline math="a" /> and <Inline math="b" /> are smaller than <Inline math="n" />.
                </p>

                <p>
                    But we chose <Inline math="n" /> to be the smallest number
                    that cannot be written as a product of primes.
                    Therefore, 
                    both <Inline math="a" /> and <Inline math="b" /> must 
                    be expressible as products of primes.
                </p>

                <p>
                    If both are products of primes, then their multiplication
                    is also a product of primes.
                </p>

                <Block math={String.raw`
n = a \times b
`} />

                <p>
                    This contradicts our assumption.
                </p>

                <p>
                    Therefore, every integer greater than 1
                    can be written as a product of primes.
                </p>

                <h2>5. The Sieve of Eratosthenes</h2>

                <p>
                    Now that we understand primes are fundamental,
                    how can we efficiently find all primes up to a number?
                </p>

                <p>
                    The Sieve of Eratosthenes is a clever algorithm
                    developed in ancient Greece.
                </p>

                <h3>Idea of the Algorithm</h3>

                <ol>
                    <li>Write down all numbers from 2 to N.</li>
                    <li>Start with the first number (2).</li>
                    <li>Cross out all multiples of that number.</li>
                    <li>Move to the next uncrossed number and repeat.</li>
                </ol>

                <p>
                    When you finish, the remaining numbers are primes.
                </p>

                <h3>Why Does This Work?</h3>

                <p>
                    If a number is composite,
                    it must have a prime factor less than or equal 
                    to <Inline math="\sqrt{n}" />.
                </p>

    <p>
 Why? If a composite number <Inline math="n" /> has a factor larger than 
    <Inline math="\sqrt{n}" />, then the factor paired with it must be 
    smaller than <Inline math="\sqrt{n}" />. 
    Since factors come in pairs whose product is <Inline math="n" />, 
    at least one factor in each pair is less than or equal to 
    <Inline math="\sqrt{n}" />. Therefore, it is sufficient to check 
    divisibility only up to <Inline math="\sqrt{n}" />.
    </p>

                <p>
                    Therefore, by removing multiples step by step,
                    we eliminate all composite numbers.
                </p>

                <h3>Implementation Exercise</h3>
                <p>Implement the sieve of Eratosthenes in Python.</p>
<ul>
    <li>
        Write a function named <Inline math="sieve" /> that takes 
        one parameter <code>n: int</code>.
    </li>
    <li>
        The function should return a list of all prime numbers 
        strictly less than <Inline math="n" />.
    </li>
    <li>
        If <Inline math="p" /> is not divisible by any primes found earlier,
        append it to the list.
    </li>
    <li>Stop the algorithm if you reached<Inline math="\sqrt{n}" /></li>
</ul>
<details>
<summary><b>Solution</b></summary>
                <SyntaxHighlighter language="python" style={oneDark}>
{`def sieve(n: int) -> list:
    primes = []
    for p in range(2, n):
        is_prime = True
        for prime in primes:
            if prime * prime > p:
                break
            if p % prime == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(p)
    return primes
sieve(100)
`}
                </SyntaxHighlighter>
</details>
{/* <p>
    This algorithm runs in approximately
    <Inline math="O(n \log \log n)" />,
    which is very fast compared to checking each number individually.
</p> */}

                <h2>Conclusion</h2>

                <p>
                    Prime numbers are the building blocks of integers.
                    Every number can be broken down into primes,
                    and with the Sieve of Eratosthenes,
                    we can find them efficiently.
                </p>

                <p>
                    What looks like a simple idea —
                    crossing out multiples —
                    turns out to be one of the most elegant algorithms in mathematics.
                </p>
<p>
Primality appears again in university-level mathematics. 
It is a topic worth remembering and exploring at a deeper level.
If you tackled to the previous article's last exercise, 
you might realized that prime number is crucial to understand the problem.
But we see primes in even deeper places.
</p>
<p>
For example, have you heard of the Riemann zeta function? 
It is a mathematical object whose properties are connected to 
a famous million-dollar unsolved problem.
</p>
<p>
Do you know what primitive roots are? 
A primitive root can generate all numbers from 1 to N
through exponentiation modulo N. 
Moreover, if N is prime, such a root always exists. 
Artin's conjecture is closely related to this idea.
</p>
<p>
Prime numbers appear in surprisingly many areas of mathematics and science.
If this topic interests you, I am glad. Thank you for reading.
</p>

            </div>
        </div>
    );
}