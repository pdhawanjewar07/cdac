

#include <iostream>
using namespace std;

void logical()  // Logical operators
{
  int a = 1;
  int b = 2;
  
  cout <<"------------------------------" << endl;
  cout <<"a: " <<a <<", b: " <<b <<endl;
  
  // logical AND
  int l1 = (a>b) && (b>0);
  cout <<"(a>b) && (b>0): " <<l1 <<endl;

  // logical OR
  int l2 = (a>b) || (b>0);
  cout <<"(a>b) || (b>0): " <<l2 <<endl;

  // logical NOT
  int l3 = !(a>b);
  cout <<"!(a>b): " <<l3 <<endl;
}

void unary()  // Unary operators
{
  int a = 1;
  int b = 2;
  bool flag = false;

  cout <<"------------------------------" << endl;
  cout <<"a: " <<a <<", b: " <<b <<", flag: " <<flag <<endl;

  // Unary plus
  cout << "Unary +a: " << +a << endl;

  // Unary minus
  cout << "Unary -a: " << -a << endl;

  // Pre-increment
  cout << "++a: " << ++a << endl;

  // Post-increment
  cout << "a++: " << a++ << endl;
  cout << "Value of a after a++: " << a << endl;

  // Pre-decrement
  cout << "--a: " << --a << endl;

  // Logical NOT
  cout << "!flag: " << !flag << endl;

  // Bitwise NOT
  cout << "~b: " << ~b << endl;

  // sizeof operator
  cout << "Size of a: " << sizeof(a) << " bytes" << endl;

  // Address-of operator
  cout << "Address of a: " << &a << endl;

  // Pointer dereference
  int* ptr = &a;
  cout << "Value using pointer *ptr: " << *ptr << endl;
}

void ternary()    //Ternary operator
{
  int a = 10, b = 20;
  int max;

  max = (a > b) ? a : b;

  cout <<"------------------------------" << endl;
  cout <<"a: " <<a <<", b: " <<b <<endl;

  cout << "Maximum number is: " << max << endl;
}

int main()
{
  
  logical();  // Logical operators

  unary();    // Unary operators

  ternary();  //Ternary operator
  
  return 0;
}

