/*
>> A destructor is a special function that:
-  Cleans up resources when an object is destroyed

>> SYNTAX: ~ClassName();

*/


#include <iostream>
using namespace std;

class Demo {
  public:
    int* ptr;

    Demo(int val) {
      ptr = new int(val);
    }

    ~Demo() {
      // delete is used (for dynamic objects)
      delete ptr; 
      cout << "Memory freed\n";
    }
};

int main() {
  Demo d1(10);
  
}
// destructor called afterwards