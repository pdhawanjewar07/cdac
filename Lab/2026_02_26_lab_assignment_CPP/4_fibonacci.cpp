// print 'n' fibonacci numbers

#include <iostream>

using namespace std;

int main()
{
    int total = 3;
    int input_num;
    int num1 = 0, num2 = 1, next_num = 1;
    
    cout <<"Enter required number of fibonacci numbers(>=3): ";
    cin >>input_num;

    cout <<num1 <<", " <<num2 <<", " <<next_num <<", ";

    while (total < input_num)
    {
        num1 = num2;
        num2 = next_num;
        next_num = num1 + num2;

        total++;

        cout <<next_num <<", ";
    }
    
    return 0;
}