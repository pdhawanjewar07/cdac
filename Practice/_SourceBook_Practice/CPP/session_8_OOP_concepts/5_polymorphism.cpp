/*
>> Polymorphism (Same interface, different behavior)
(A) Compile-time → Overloading (already covered)
(B) Runtime → Virtual functions

*/

#include <iostream>
using namespace std;

class Animal {
  public:
    virtual void sound() {
      cout << "Animal sound\n";
    }
};

class Dog : public Animal {
  public:
    void sound() override {
      cout << "Dog barks\n";
    }
};



int main() {
  Animal* a = new Dog();
  a->sound();   // Dog's version (runtime decision)

}


