Seriously Good Software by Marco Faella.
[Book official page](https://www.manning.com/books/seriously-good-software)

# Objectives (1.6.1)
```
This section describes the desired API for the water containers. At the very least, you’ll build a Container class, endowed with a public constructor that takes no arguments and creates an empty container, and the following three methods:

- public double getAmount()—Return the amount of water currently held in this container.
- public void connectTo(Container other)—Permanently connect this container with other.
- public void addWater(double amount)—Pour amount units of water into this container. This method automatically and equally distributes water among all containers that are connected, directly or indirectly, to this one. 
You can also use this method with a negative amount to remove water from this container. In that case, the group of connected containers should be holding enough water to satisfy the request—you wouldn’t want to leave a negative amount of water in a container.
```
