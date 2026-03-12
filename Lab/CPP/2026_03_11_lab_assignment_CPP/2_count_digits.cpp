/*

Count the digits present in a given positive integer

*/

#include <iostream>
using namespace std;

static int digits; // default is 0

int main()
{
  int input_num;
  cout <<"Enter a positive integer: ";
  cin >>input_num;


  while (input_num != 0)
  {
    input_num /= 10;
    digits++;
  }

  cout <<"Number of digits: " <<digits;

  return 0;
}












