
def gcd_euc(a, b):
    while b != 0:
        remainder = a % b
        a = b
        b = remainder
    return a


def backward_euclidean(n, b, gcd, q_n):
    # first solve for X_n
    X_n = gcd * q_n
    r_last = gcd
    for _ in range(1, n): 
        b_n = X_n
        r_n = r_last
        r_last = b_n
# because we are finding such the smallest X, 1 is the only option for us
        X_n = b_n*(1) + r_n
        print(f"({X_n} div {b_n} = 1 ... {r_n})")
    
    return X_n if gcd_euc(X_n, b) == gcd else "No Solution"


print(backward_euclidean(4, 285, 57, 2))
print(gcd_euc(456, 285))  # 57
# Example
print(gcd_euc(3968, 976))  # 16
