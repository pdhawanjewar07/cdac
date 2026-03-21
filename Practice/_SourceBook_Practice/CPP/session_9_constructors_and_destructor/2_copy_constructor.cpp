/*
>> A copy constructor creates a new object as a copy of an existing object.

SYNTAX: ClassName(const ClassName &obj);
- Takes reference (&) → avoids infinite recursion

*/

#include <iostream>
using namespace std;

class Demo {
  public:
    int *ptr;

    Demo(int val) {
      ptr = new int(val);
    }

    // copy constructor (deep copy)
    Demo(const Demo &obj) {
      ptr = new int(*(obj.ptr));  // new memory
    }

    void show() {
      cout << *ptr << endl;
    }
};

int main() {
  Demo d1(10);
  Demo d2 = d1;

  *(d2.ptr) = 50;

  d1.show(); // 10 (safe)
  d2.show(); // 50
}

