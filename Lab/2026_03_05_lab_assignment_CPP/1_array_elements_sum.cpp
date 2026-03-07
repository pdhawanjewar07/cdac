// print sum of all integers in an array 

#include <iostream>
using namespace std;

int main()
{
    int arr[5] = {1, 2, 3, 4, 5};
    int sum = 0;

    for (int idx=0; idx<=4; idx++)
    {
        sum += arr[idx];
    }

    cout <<"Sum of all integers in array: " <<sum;

    return 0;
}



