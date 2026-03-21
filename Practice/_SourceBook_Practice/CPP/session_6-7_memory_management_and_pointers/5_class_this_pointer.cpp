#include <iostream>
using namespace std;

class Car {
  public:
    int speed;

    void show() {
      cout << "Speed: " << speed << endl;
    }

    void setSpeed(int speed) {
      // current_object.speed = parameter_speed
      this->speed = speed;  // this(pointer to current class object)
      // *this(dereference to current object)
    }
};

int main() {
  Car c1;
  c1.speed = 120;

  // SYNTAX: ClassName* ptr;
  Car* ptr = &c1;   // pointer to object

  // (->) is just shorthand for: (*ptr).member
  cout << ptr->speed << endl;  // access data member
  ptr->show();                 // access member function

  // ---------------------------------------------------
  cout <<"---------------------------------------------" <<endl;
  Car c2;
  c2.setSpeed(200);
  c2.show();
}

















