import math

def sieve(n: int):
    if n < 2:
        return []

    # Step 1: Assume all numbers are prime initially
    is_prime = [True] * (n + 1)
    is_prime[0] = False
    is_prime[1] = False

    # Step 2: Only check up to sqrt(n)
    limit = int(math.sqrt(n))

    for p in range(2, limit + 1):
        if is_prime[p]:
            # Start marking from p^2
            for multiple in range(p * p, n + 1, p):
                is_prime[multiple] = False

    # Step 3: Collect primes
    primes = [i for i in range(2, n + 1) if is_prime[i]]
    return primes


print(sieve(100)) # returns an array of primes
