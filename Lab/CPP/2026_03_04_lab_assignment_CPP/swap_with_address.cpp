// swap int variables using memory address

// limitation: pointer occupies 8 bytes

#include <iostream>
using namespace std;


void swap(int* p, int* q)   // pass args as memory address
{
    int temp = *p;
    *p = *q;
    *q = temp;
}


int main()
{
    int a = 1;
    int b = 2;

    cout <<"a was: " <<a <<endl;
    cout <<"b was: " <<b <<endl;

    swap(&a, &b);

    cout <<"-----------After_Swap_With_Address"<<endl;
    cout <<"a is: " <<a <<endl;
    cout <<"b is: " <<b <<endl;


}