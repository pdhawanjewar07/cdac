#include <iostream>
using namespace std;

class Demo {
  public:
    int x, y;
    // >> (Constructor Overloading)

    // Default constructor
    Demo() {
      x = 0;
      y = 0;
    }

    // One parameter
    Demo(int a) {
      x = a;
      y = 0;
    }

    // Two parameters
    Demo(int a, int b) {
      x = a;
      y = b;
    }
};


int main() {
  Demo d1;        // default
  Demo d2(5);     // one param
  Demo d3(5, 10); // two params

  cout << d1.x << "," << d1.y << endl;
  cout << d2.x << "," << d2.y << endl;
  cout << d3.x << "," << d3.y << endl;

  //  << dynamic initialization >>
  int n;
  cout << "Enter value: ";
  cin >> n;

  Demo d(n);  // runtime value → dynamic initialization

  cout << "x = " << d.x << endl;

}