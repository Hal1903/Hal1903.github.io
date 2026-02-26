class Animal:
    def __init__(self, name, cry=""):
        self.name = name
        self.cry = cry
        self.awake = True
        
    def talk(self):
        if self.cry == "":
            return 
        if self.awake:
            print(f"{self.name} says {self.cry}")
        else:
            print(f"{self.name} is sleeping.")
            
    def switch_awake(self):
        self.awake = not self.awake
        if self.awake:
            print(f"{self.name} has slept.")
        else:
            print(f"{self.name} has woken up.")

class Dog(Animal):
    def __init__(self, name, cry):
        super().__init__(name, cry)
    
    def whoIsThis(self):
        print(self.name)



print("Using modules_animals.py.")

if __name__ == "__main__":
    print("You are runnng modules_animal.py!")