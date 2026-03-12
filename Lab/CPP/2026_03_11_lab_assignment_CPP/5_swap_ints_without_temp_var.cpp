/*

Using XOR(^) operator and it's following properties

a ^ 0 = a
a ^ a = 0

*/

#include <iostream>
using namespace std;

int main()
{
  int a = 5;
  int b = 10;

  // before swap
  cout <<"Before XOR swap:" <<endl;
  cout <<"a = " <<a <<endl;
  cout <<"b = " <<b <<endl;

  // start swap
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  // end swap

  // after swap
  cout <<"After XOR swap:" <<endl;
  cout <<"a = " <<a <<endl;
  cout <<"b = " <<b <<endl;

  return 0;
}



