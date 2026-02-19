import random as rand
import math

# repeat. range is an object...don't care about it for now. You will figure this out later.
for i in range(1,10): # [1,10) so start point is included but endpoint is not
    print(f"{i}: {rand.randint(1,5)}") # Both endpoints are included here

counter = 0
while (counter < 10): # be careful. Could run forever without a proper sentinel. Ctrl+C on terminal will force terminate. 
    print(f"{counter}: {rand.randint(1,6)}")
    counter += 1 # increment by one, same as counter = counter + 1.

# basically the same. But for has one convenient usage: list traversal
items = [3, 1, 4, 1, 5]
for item in items:
    print(item, end=" ") # end with a space not a new line

# reverse:
print() # new line
for item in reversed(items):
    print(item, end=" ") # end with a space not a new line

# string (text) is inherently an array of characters
string1 = "oyasumi"
for char in string1:
    print(char, end="")
    
print()

# we need a set of instruction in one, which will make the code cleaner and readable.
# A function to roll a die and count how many times you have already rolled, until the user instructs to stop:
def roll_a_die():
    return rand.randint(1,6)
# this is very simple definition. It will return a number obtained by a die.
# how to use:
die_num = roll_a_die()
print("We got", die_num)

def roll_n_count(counter):
    print(f"Number: {rand.randint(1,6)}")
    return counter + 1

# now we repeat the process
counter = 0 
while (True): # repeat forever
    counter = roll_n_count(counter)
    ans = input(f"You rolled {counter} times. Continue? (y/n): ")
    if ans.upper() == "N":
        break

# why do we return a "new, incremented counter"?
# why couldn't we just increment counter inside the function?
# Try this:
x = 10

def test():
    x = 5
    print(x)

test()
print(x) # should output 10, not 5, due to scope mismatch. Be cautious.


# file
import csv
def record_dice(n=1000, filename="dice_record.csv"): # can set a default value
    with open(filename, mode="w", newline="") as file:
        writer = csv.writer(file)
        
        for _ in range(n):
            roll = rand.randint(1, 6)
            writer.writerow([roll])
    file.close()

record_dice(1000)


# Exercise 1: modify record_n_count so that it will eturn both counter and record.
# write a record to the 
def record_roll_n_count(counter: int, record: list): # type specification
    n = rand.randint(1,6)
    record.append(n)
    print(f"Number: {n}")
    return counter + 1, record


numbers = []
counter = 0

while True:
    counter, numbers = record_roll_n_count(counter, numbers)
    
    ans = input(f"You rolled {counter} times. Continue? (y/n): ")
    if ans.upper() == "N":
        break

print("\nAll rolls:", numbers)
print("Total rolls:", counter)


# Capstone:
import random as rand
import csv


# 1. Input: Choose Dice Type (Even numbers only)
def get_dice_sides():
    while True:
        try:
            n = int(input("Choose dice sides (even number between 6 and 20): "))
            
            if 6 <= n <= 20 and n % 2 == 0:
                return n
            else:
                print("Invalid input. Must be EVEN and between 6 and 20.")
        
        except ValueError:
            print("Please enter a valid integer.")



# 2. Input: Number of Rolls (> 1000)
def get_roll_count():
    while True:
        try:
            rolls = int(input("How many rolls? (must be > 1000): "))
            
            if rolls > 1000:
                return rolls
            else:
                print("Number must be greater than 1000.")
        except ValueError:
            print("Please enter a valid integer.")



# 3. Rolling Function
def roll_die(sides):
    return rand.randint(1, sides)


# 4. Record Rolls
def roll_n_times(sides, n):
    record = []    
    for _ in range(n):
        record.append(roll_die(sides))
    return record


# 5. Save to CSV
def save_to_csv(record, filename="dice_record.csv"):
    with open(filename, mode="w", newline="") as file:
        writer = csv.writer(file)
        for value in record:
            writer.writerow([value])



# 6. Analyze Statistics
def analyze_statistics(record, sides):
    total_rolls = len(record)
    
    # Count occurrences
    counts = {i: 0 for i in range(1, sides + 1)}
    
    for value in record:
        counts[value] += 1
    
    print("\n--- Statistics ---")
    print(f"Total Rolls: {total_rolls}")
    
    theoretical_prob = 1 / sides # uniform
    tolerance = 0.02  # absolute tolerance
    
    converged = True
    
    for face in range(1, sides + 1):
        empirical_prob = counts[face] / total_rolls
        difference = abs(empirical_prob - theoretical_prob)
        
        print(f"Face {face}:")
        print(f"  Count = {counts[face]}")
        print(f"  Empirical Probability = {empirical_prob:.4f}")
        print(f"  Difference from 1/n = {difference:.4f}")
        
        if difference > tolerance:
            converged = False
    
    print("\nTheoretical Probability:", theoretical_prob)
    print("Tolerance:", tolerance)
    
    if converged:
        print("\n The distribution converged to uniform within tolerance.")
    else:
        print("\n The distribution did NOT converge within tolerance.")



# 7. Main Program
def main():
    sides = get_dice_sides()
    roll_count = get_roll_count()
    
    record = roll_n_times(sides, roll_count)
    
    save_to_csv(record)
    print("\nRolls saved to dice_record.csv")
    
    analyze_statistics(record, sides)


# Run program
main()
