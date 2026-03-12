// reverse and print a given number

#include <iostream>

using namespace std;

int main()
{
    int input_num, remainder;

    cout <<"Enter a positive integer: ";
    cin >>input_num;

    int reversed_num = 0;

    while (input_num != 0)
    { 
        remainder = input_num % 10;
        input_num /= 10;
        
        reversed_num = (reversed_num * 10) + remainder;
    }

    cout <<"Reversed number: " <<reversed_num;

}

