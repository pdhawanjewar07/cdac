/*
>> One derived class inherits from more than one base class.

Base1
   \
    → Derived
   /
Base2

*/

class Camera {
  public:
    void takePhoto() {}
};

class Phone {
  public:
    void call() {}
};

//class child_class_name: access_specifier parent1, access_specifier parent2 {};
class Smartphone : public Camera, public Phone {};

// Risk: ambiguity problems if both parents have same member names.
