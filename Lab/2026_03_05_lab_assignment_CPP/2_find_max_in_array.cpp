// print maximum integer in an array

#include <iostream>
using namespace std;

int main()
{
    int arr[5] = {8, 77, -3, 4, 115};
    int max = arr[0];

    for (int idx=0; idx<=4; idx++)
    {
        if (arr[idx] > max)
        {
            max = arr[idx];
        }
    }

    cout <<"Max integer in array: " <<max;

    return 0;
}






