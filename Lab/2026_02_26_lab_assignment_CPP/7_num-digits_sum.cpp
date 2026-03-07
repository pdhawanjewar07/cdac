// print summation of all digits of a number

#include <iostream>

using namespace std;

int main()
{
    int input_num, original, remainder;
    int sum=0;

    cout <<"Enter a positive integer: ";
    cin >>input_num;

    original = input_num;

    while (input_num != 0)
    {
        remainder = input_num % 10;
        input_num = input_num / 10;
        sum += remainder;
    }

    cout <<"Sum of all digits of num (" <<original <<") = " <<sum;
}

