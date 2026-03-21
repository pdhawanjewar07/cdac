/*
>> Inheritance chain across multiple levels.

  Base → Derived1 → Derived2
*/

class Animal {
  public:
    void eat() {}
};

class Mammal : public Animal {
};

class Dog : public Mammal {
};
















