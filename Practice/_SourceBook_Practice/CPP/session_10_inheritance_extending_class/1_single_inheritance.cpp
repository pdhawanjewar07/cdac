/*
>> One derived class inherits from one base class.

  Base → Derived
*/

class Animal {
  public:
    void eat() {}
};

class Dog : public Animal {
  public:
    void bark() {}
};