// reverse and print an array
// 

#include <iostream>
using namespace std;

void display_arr(int arr[], int size)
{
    for (int idx=0; idx<size; idx++)
    {
        cout <<arr[idx] <<", ";
    }
    cout <<endl;
}

int main()
{
    int size = 5;
    int arr[size] = {8, 77, 24, 4, 115};
    // 115, 4, 24, 77, 8
    
    static int temp;

    cout <<"_Initial Array: "; display_arr(arr, size);

    for (int idx=0; idx<(size/2); idx++)    // size/2 for reversing just once
    {
        temp = arr[idx];
        // cout <<"temp: " <<temp <<endl;
        arr[idx] = arr[size-idx-1];
        // cout <<"arr[" <<idx <<"]: " <<arr[idx] <<endl;
        arr[size-idx-1] = temp;
        // cout <<"arr[" <<size-idx-1 <<"]: " <<arr[size-idx-1] <<endl;
        // cout <<"-------------------------------" <<endl;
    }

    cout <<"Reversed Array: "; display_arr(arr, size);

    return 0;
}


