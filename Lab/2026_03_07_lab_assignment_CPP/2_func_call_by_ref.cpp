// decalre and call a function by reference

#include <iostream>
using namespace std;

// return_type function_name(type &parameter)
void increment(int &x) {
  x = x + 1;
}


int main()
{
  
  int num = 10;

  cout << "Before function call: " << num << endl;

  increment(num);   // called normally, but passed by reference

  cout << "After function call: " << num << endl;

  return 0;
}



