/*
>> Combination of two or more inheritance types.

    Animal
    /     \
Mammal   Bird
    |
  Bat

*/

class Animal {};

class Mammal : public Animal {};
class Bird : public Animal {};

class Bat : public Mammal, public Bird {};

/*
This can create the Diamond Problem if Animal appears twice in the hierarchy.
Solution: virtual inheritance
*/

class Animal {};

class Mammal : virtual public Animal {};
class Bird : virtual public Animal {};

class Bat : public Mammal, public Bird {};

