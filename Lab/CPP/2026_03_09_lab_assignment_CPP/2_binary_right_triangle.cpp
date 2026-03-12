/* 

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/

#include <iostream>
using namespace std;

static int binary;  // default 0

int main()
{
  for (int row=1; row<=5; row++)
  {
    // if row divisible by 2, start with 0 else 1
    if (row % 2 == 0){binary = 0;}
    else{binary = 1;}

    for (int col=1; col<=row; col++)
    {
      cout <<binary <<" ";
      binary = !binary;
    }
    cout <<endl;
  }

  return 0;
}










