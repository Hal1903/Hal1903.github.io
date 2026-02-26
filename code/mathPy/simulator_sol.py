import random

class Animal:
    def __init__(self, name, cry):
        self.name = name
        self.cry = cry
        self.awake = True
        self.fed_today = False

    def switch_awake(self):
        self.awake = not self.awake
        if self.awake:
            print(f"{self.name} has woken up.")
        else:
            print(f"{self.name} has fallen asleep.")

    def talk(self):
        if self.awake:
            print(f"{self.name} says {self.cry}")
        else:
            print(f"{self.name} is sleeping.")

    def feed(self):
        if not self.fed_today and self.awake == 1:
            self.fed_today = True
            print(f"{self.name} is happily eating.")
        else:
            print(f"{self.name} is sleeping or already fed today.")

    def new_day(self):
        self.fed_today = False

class Dog(Animal):
    def __init__(self, name):
        cries = ["Bow wow", "Woof", "Arf arf"]
        chosen_cry = random.choice(cries)
        super().__init__(name, chosen_cry)


class Cat(Animal):
    def __init__(self, name):
        cries = ["Meow", "Mew", "Purr"]
        chosen_cry = random.choice(cries)
        super().__init__(name, chosen_cry)
        
class Simulator:
    def __init__(self, time):
        self.my_location = "Home"
        self.places = ["Home", "Workplace", "Store"]
        self.money = 100
        self.time = time % 24
        self.wage_per_hour = 20
        self.animals = []

        # Store stock
        self.stock = {
            0: {"name": "Dog", "price": 300},
            1: {"name": "Cat", "price": 200},
            2: {"name": "Pet Food", "price": 20}
        }

    def goto(self, dest_idx: int):
        self.my_location = self.places[dest_idx]
        self.time += 1
        
        if self.time >= 22 or self.time < 6:
            for animal in self.animals:
                if animal.awake:
                    animal.switch_awake()
        else:
            for animal in self.animals:
                if not animal.awake:
                    animal.switch_awake()

        if self.time >= 24:
            self.time %= 24
            for animal in self.animals:
                animal.new_day()

        print(f"\nYou moved to {self.my_location}. Time: {self.time}:00")

        if self.my_location == "Home":
            for animal in self.animals:
                animal.talk()

    def work(self):
        if self.my_location != "Workplace":
            print("You must be at Workplace to work.")
            return

        hours = int(input("How many hours do you want to work? "))
        earned = hours * self.wage_per_hour
        self.money += earned
        self.time += hours

        print(f"You earned ${earned}. Current money: ${self.money}")

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

        if self.money < price:
            print("Not enough money.")
            return

        if item["name"] in ["Dog", "Cat"]:
            name = input("Give your pet a name: ")

            if item["name"] == "Dog":
                animal = Dog(name)
            else:
                animal = Cat(name)

            self.animals.append(animal)
            self.money -= price
            print(f"You bought a {item['name']} named {name}!")

        else:
            qty = int(input("Quantity: "))
            total = qty * price

            if self.money < total:
                print("Not enough money.")
                return

            self.money -= total
            print(f"You bought {qty} Pet Food.")

    def feed_animals(self):
        if self.my_location != "Home":
            print("You can only feed animals at Home.")
            return

        if not self.animals:
            print("You have no animals.")
            return

        for animal in self.animals:
            animal.feed()
            
if __name__ == "__main__":

    sim = Simulator(time=8)

    while True:
        print("\n==== Life Simulator ====")
        print("Location:", sim.my_location)
        print("Money:", sim.money)
        print("Time:", sim.time)
        print("1. Go Home")
        print("2. Go Workplace")
        print("3. Go Store")
        print("4. Work")
        print("5. Buy")
        print("6. Feed Animals")
        print("7. Quit")

        choice = input("Choose action: ")

        if choice == "1":
            sim.goto(0)
        elif choice == "2":
            sim.goto(1)
        elif choice == "3":
            sim.goto(2)
        elif choice == "4":
            sim.work()
        elif choice == "5":
            sim.buy()
        elif choice == "6":
            sim.feed_animals()
        elif choice == "7":
            print("Goodbye!")
            break
        else:
            print("Invalid input.")