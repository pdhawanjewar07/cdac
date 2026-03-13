
#include <iostream>
using namespace std;

/*
>> A function prototype is a declaration of a function that tells the compiler:
- the function name
- the return type
- the number and types of parameters

-> It appears before main() so the compiler knows the function exists before it is used.
*/

// SYNTAX: return_type function_name(parameter_type1, parameter_type2, ...);
int add(int, int);   // function prototype

int main() {
  int result = add(5, 3);
  cout << result;
}

int add(int a, int b) {   // function definition
  return a + b;
}













