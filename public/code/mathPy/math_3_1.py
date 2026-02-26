from modules_area import area_circle, area_rectangle
from modules_animals import *

if __name__ == "__main__":
    A_circle = area_circle(3)
    A_rect = area_rectangle(5,5)
    
    a = Animal("Animal")
    a.talk() # would not talk, condition supresses the output by returning
    a.switch_awake()
    
    doggo = Dog("Pochi", "Bow wow")
    doggo.talk()
    doggo.switch_awake()
    doggo.talk()
    doggo.switch_awake()
    doggo.whoIsThis()
    
    # rename your dog
    doggo.name = "Charlie"
    doggo.talk()