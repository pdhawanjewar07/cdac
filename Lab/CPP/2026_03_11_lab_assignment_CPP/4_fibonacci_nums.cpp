// print n fibonacci numbers


#include <iostream>
using namespace std;

static int upate_second;  // initialised as 0
static int cur_fib_count; // initialised as 0

int main()
{
  int req_fib_count;
  
  cout <<"Enter required amount of fibonacci nums: ";
  cin >>req_fib_count;

  int first = 0, second = 1;

  while (req_fib_count != cur_fib_count)
  {
    cout <<first <<", ";

    upate_second = first + second;  // use to update second later
    first = second;
    second = upate_second;

    cur_fib_count++;
  }

  return 0;
}


