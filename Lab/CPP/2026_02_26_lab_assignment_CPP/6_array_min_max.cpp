// accept elements of an array, print min and max number out of all elements

#include <iostream>

using namespace std;

int main()
{
    int input_num;

    cout <<"Enter number of int elements: ";
    cin >>input_num;

    int arr[input_num];

    cout <<"Enter int elements: ";
    for (int i=0; i<input_num; i++)
    {
        cin >>arr[i];
    }

    int min=arr[0], max=arr[0];

    for (int i=1; i<input_num; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    cout <<"Minimum number in array: " <<min <<endl;
    cout <<"Maximum number in array: " <<max;
}


