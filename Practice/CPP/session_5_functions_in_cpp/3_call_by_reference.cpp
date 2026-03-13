
#include <iostream>
using namespace std;

/*
>> Calling a function by reference:
- function receives a reference to the original variable, not a copy
- Any modification inside the function directly changes the original variable.

-> SYNTAX:  void functionName(type &parameter);
*/

// x becomes another name (alias) for a
void increment(int &x) {
  x = x + 1;
}

int main() {
  int a = 10;

  increment(a);   // calling by reference

  cout << a << endl;  // 11
}













