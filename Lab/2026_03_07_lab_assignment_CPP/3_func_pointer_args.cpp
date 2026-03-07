// pass function arguements as pointers

#include <iostream>
using namespace std;

int add(int* a, int* b)
{
  int sum = *a + *b;
  return sum;
}

int main()
{
  int a = 1;
  int b = 2;

  cout <<"a+b = " <<a <<"+" <<b <<" = " <<add(&a, &b) <<"(by passing function arguments as pointers)";

  return 0;
}


