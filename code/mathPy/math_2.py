# Computer is basically a calculator.
# Takes inputs and outputs the results
print(-1+2-3)
print(1*2*3*4)
print(2/5)
print(10/3)
print(10//3)
print(100 % 7) # remainder
print(not True)
print(not False)

# hash mark tells your computer that this line of text is a comment, not a code to execute.

# double quotations tell your computer to know the content inside is a text
print("This is a text")
# notice that every single time print changes a line.
# it's because they put newline symbol at the end by default.
# can we put two lines of texts inside one quotations? try this:
print("First line \nSecond line") # \n is a special character. \ is called an escape character.
print("Before tab \t after tab")
print("\"Outputting double quotations and backslashes \\ as a string requires escaping characters\"")


# Variable
# you can store your text or values as a data
book_price = 3
num_books = 5
unit = "dollars"
buyer = "I"

# f before the quotation means, format.
# try to change the variable contents and see how output changes.
print(f"{buyer} bought {num_books} and paid {book_price*num_books} {unit}")
# even without f, you can output the same. I prefer to use formatted output
print(buyer, "bought", num_books, "and paid", book_price*num_books, unit)


# Input
# place = input("where did you buy the books?: ")
# print(buyer, "bought", num_books, "and paid", book_price*num_books, unit, "at", place)
num_textbooks = input("how many textbooks did you buy? ")
try:
    total = num_textbooks + num_books
    print(f"You bought {total} books in total") # you get an error
except TypeError as e:
    print("""
        lines \n
        \tnum_textbooks = input("how many textbooks did you buy? ") \n
        \tprint(f"You bought {num_textbooks + num_books} books in total") \n
        returned ERROR
          """)

# because the type did not match
# text + integer is just invalid arithmetic
# you have to convert num_textbooks to integer, by this
num_textbooks = int(num_textbooks)
# now it should work
print(f"You bought {num_textbooks + num_books} books in total, now it runs successfully") # now it should work


# Arrays: you can store a collection of data into one container
cart = ["apple", "banana", "cucumber"]
print(f"You are buying: {cart}")
cart.append("donut")
cart.append("donut")
print(f"You added donuts: {cart}")
cart.remove("apple")
print(f"You are dropped an apple: {cart}")


# length and sum? easy
print(f"number of elements in a cart: {len(cart)}")
prices = [2,3,4,5]
print(f"sum of prices: {sum(prices)}") # 2+3+4+5=14

# you don't want any duplicates? use Sets
shop_list = set(["apple", "banana"])
shop_list.add("apple") # no effect; already a member
shop_list.add("corn") # will actually add corn
print("shop_list:", shop_list) 
shop_list.discard("donut") # no effect; not a member, nothing to discard
shop_list.discard("apple") # drops apple
print("shop_list:", shop_list)

# what is your data type? use type
print("shop_list dtype =", type(shop_list))
print("shop cart dtype =", type(cart))

# Condition: you want to change the output for a different situation?
# then you need to specify "under what condition" and "what to execute" for each case.

test_score = 67

if (test_score > 67):
    print("you passed!")
# otherwise you don't output any

if (test_score > 67):
    print("you passed!")
else:
    print("you failed") # what is the highest grade you can fail at?

# want more branches? sure, use elif

if (test_score > 67):
    print("you passed!")
elif (test_score == 67): # you need two equal signs here. Two signs for comparison, one sign for defining a variable.
    print("six seven")
else:
    print("you failed") # now how does the highest grade you can fail at change?

# multiple criteria? absolutely.
if (test_score % 2 == 0 and test_score % 3 == 0):
    print("multiple of 6") # because dividing by 2 and 3 yields no remainder, it is multiple of 2 and 3 thereby a multiple of 6.
elif (test_score % 2 == 0):
    print("even")
elif (test_score % 3 == 0):
    print("multiple of three")
elif (test_score % 5 == 0 or test_score % 7 == 0 or test_score % 11 == 0):
    print("at least multiple of 5 or 7 or 11") # either one of the criterion is true, then this will be the output
elif (test_score > 50): # if the score is not 13n + 1 
    print("in a form of 13x+1")
else:
    print("an arbitrary odd") # odd that can't be divided by 6 or 2 or 3 or 5 or 7 or 11.

# try to change the test score to see the result!


# Exercise 1: Write a program that is capable of a 4 binary arithmetic operations.
# 1. program should take an input of which operations (add/sub/mul/div)
# 2. program should take an input of 2 numbers.
# 3. program should outputs a resultant value.
# You have freedom of design choices to complete this.

# Exercise 1 Solution

# 1. Ask for operation
operation = input("Choose operation (add/sub/mul/div): ")

# 2. Ask for two numbers
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# 3. Compute result
if operation == "add":
    result = num1 + num2

elif operation == "sub":
    result = num1 - num2

elif operation == "mul":
    result = num1 * num2

# optional.
elif operation == "div":
    if num2 == 0:
        print("Error: Division by zero is not allowed.")
        result = None
    else:
        result = num1 / num2

else:
    print("Invalid operation.")
    result = None

# 4. Output result
if result is not None:
    print("Result:", result)



# Exercise 2: Write a program that determines user's preference by logic. 
# let the program ask one question: "do you like dogs?" and let the user answer this by yes or no.
# let the program ask another question: "do you like cats?" the answer would be in the same format.
# After these two questions, output the following:
# the user likes dogs and cats -> true/false
# the user likes dogs or cats -> true/false
# the user likes neither -> true/false
# Assume the input is strictly limited to yes or no.
# In reality, we have to manually limit, but this is beyond the scope of this chapter.

# Exercise 2 Solution

# Ask questions
likes_dogs_input = input("Do you like dogs? (yes/no): ")
likes_cats_input = input("Do you like cats? (yes/no): ")

# Convert to boolean
likes_dogs = (likes_dogs_input == "yes")
likes_cats = (likes_cats_input == "yes")

# Logical results
likes_both = likes_dogs and likes_cats
likes_either = likes_dogs or likes_cats
likes_neither = not (likes_dogs or likes_cats)

# Output results
print("Likes dogs and cats:", likes_both)
print("Likes dogs or cats:", likes_either)
print("Likes neither:", likes_neither)



