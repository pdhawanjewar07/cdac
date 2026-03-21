/*
>> Multiple classes inherit from one base class.

  Animal
  /   \
Dog   Cat

*/

class Animal {
  public:
    void eat() {}
};

class Dog : public Animal {
};

class Cat : public Animal {
};

