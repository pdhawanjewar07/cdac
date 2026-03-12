// swap int variables using reference variables

// Advantage: reference variables do not occupy any space

#include <iostream>
using namespace std;


void swap(int& p, int& q)   // passing args as reference variables
{
    int temp = p;
    p = q;
    q = temp;
}

int main()
{
    int a = 1;
    int b = 2;

    cout <<"a was: " <<a <<endl;
    cout <<"b was: " <<b <<endl;

    swap(a, b);

    cout <<"-----------After_Swap_With_Reference"<<endl;
    cout <<"a is: " <<a <<endl;
    cout <<"b is: " <<b <<endl;
}



