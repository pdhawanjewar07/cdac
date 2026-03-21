
#include <iostream>
using namespace std;

/* >> Inline Functions 
- The compiler replaces the function call with the actual code to reduce overhead.
- Useful for very small functions.
*/ 
inline int square(int x) {
  return x * x;
}

/* >> Recursive Functions
- A function that calls itself.
*/ 
int factorial(int n) {
  if (n == 0)
    return 1;
  return n * factorial(n - 1);
}

/* >> Function Overloading
- Multiple functions with same name but different parameters.
*/ 
int add(int a, int b) {
  return a + b;
}
float add(float a, float b) {
  return a + b;
}

/* >> Lambda Functions (Modern C++)
- Anonymous functions introduced in C++11.
*/ 
auto add1 = [](int a, int b) {
  return a + b;
};

/* >> Member Functions (Class Functions)
- Functions that belong to a class.
*/ 
class Car {
public:
  void start() {
    cout << "Car started";
  }
};


