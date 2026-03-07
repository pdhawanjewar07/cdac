// count and print number of even and odd integers in an array

#include <iostream>
using namespace std;

int main()
{
    int arr[5] = {8, 77, 24, 4, 115};
    int evens = 0;
    int odds = 0;

    for (int idx=0; idx<=4; idx++)
    {
        if (arr[idx] % 2 == 0){evens++;}
        else{odds++;}
    }

    cout <<"Even(count) integers in array: " <<evens <<endl;
    cout <<"_Odd(count) integers in array: " <<odds;

    return 0;
}


