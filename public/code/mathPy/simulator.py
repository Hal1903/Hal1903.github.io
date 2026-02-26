import random

class Animal:
    def __init__(self, name, cry):
        self.name = name
        self.cry = cry
        self.awake = True
        self.fed_today = False

    # TASK 1
    def switch_awake(self):
        """
        Toggle the awake state of the animal.
        - If the animal becomes awake, print:
          "<name> has woken up."
        - If the animal becomes asleep, print:
          "<name> has fallen asleep."
        """
        pass

    # TASK 2
    def talk(self):
        """
        If the animal is awake:
            print "<name> says <cry>"
        Otherwise:
            print "<name> is sleeping."
        """
        pass

    # TASK 3
    def feed(self):
        """
        Feeding rules:
        - Animal can only eat if:
            1. It is awake
            2. It has NOT been fed today
        - If feeding succeeds:
            - Set fed_today to True
            - Print "<name> is happily eating."
        - Otherwise:
            - Print "<name> is sleeping or already fed today."
        """
        pass

    def new_day(self):
        self.fed_today = False


# TASK 4
class Dog(Animal):
    def __init__(self, name):
        """
        - Choose one cry randomly from:
          ["Bow wow", "Woof", "Arf arf"]
        - Call the parent constructor properly
        """
        cries = ["Bow wow", "Woof", "Arf arf"]
        pass


# TASK 5
class Cat(Animal):
    def __init__(self, name):
        """
        - Choose one cry randomly from:
          ["Meow", "Mew", "Purr"]
        - Call the parent constructor properly
        """
        cries = ["Meow", "Mew", "Purr"]
        pass


class Simulator:
    def __init__(self, time):
        self.my_location = "Home"
        self.places = ["Home", "Workplace", "Store"]
        self.money = 100
        self.time = time % 24
        self.wage_per_hour = 20
        self.animals = []

        self.stock = {
            0: {"name": "Dog", "price": 300},
            1: {"name": "Cat", "price": 200},
            2: {"name": "Pet Food", "price": 20}
        }

    # TASK 6
    def goto(self, dest_idx: int):
        """
        - Update the current location using dest_idx
        - Increase time by 1 hour
        - Animals should:
            Sleep between 22:00 and 6:00
            Wake up otherwise
        - If time reaches 24 or more:
            * Reset time using modulo 24
            * Call new_day() for all animals
        - Print the new location and time
        - If location is Home:
            Make all animals talk
        """
        pass

    def work(self):
        if self.my_location != "Workplace":
            print("You must be at Workplace to work.")
            return

        hours = int(input("How many hours do you want to work? "))

        # TASK 7
        """
        - Earn money based on hours * wage_per_hour
        - Increase simulator money
        - Increase time accordingly
        - Print how much was earned
        """
        pass

    def buy(self):
        if self.my_location != "Store":
            print("You must be at Store to buy.")
            return

        print("\nStore Items:")
        for idx, item in self.stock.items():
            print(f"{idx}: {item['name']} - ${item['price']}")

        choice = int(input("Select item index: "))

        if choice not in self.stock:
            print("Invalid selection.")
            return

        item = self.stock[choice]
        price = item["price"]

        # TASK 8
        """
        If not enough money:
            Print "Not enough money."
            Stop the purchase.
        """
        pass

        if item["name"] in ["Dog", "Cat"]:
            name = input("Give your pet a name: ")

            # TASK 9
            """
            - Create a Dog or Cat object depending on selection
            - Add the animal to self.animals
            - Subtract price from money
            - Print confirmation message
            """
            pass

        else:
            qty = int(input("Quantity: "))
            total = qty * price

            # TASK 10
            """
            - Check if enough money for total cost
            - Subtract total from money
            - Print confirmation message
            """
            pass

    def feed_animals(self):
        if self.my_location != "Home":
            print("You can only feed animals at Home.")
            return

        # TASK 11
        """
        - If there are no animals:
            Print "You have no animals."
            Stop.
        - Otherwise:
            Call feed() on each animal.
        """
        pass


if __name__ == "__main__":

    # TASK 12
    """
    - Create a Simulator object starting at time 8
    """
    pass

    while True:
        print("\n==== Life Simulator ====")

        # TASK 13
        """
        Print:
            Location
            Money
            Time
        """
        pass

        print("1. Go Home")
        print("2. Go Workplace")
        print("3. Go Store")
        print("4. Work")
        print("5. Buy")
        print("6. Feed Animals")
        print("7. Quit")

        choice = input("Choose action: ")

        # TASK 14
        """
        Connect each menu option to the correct simulator method.
        """
        pass