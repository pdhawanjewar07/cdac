// print factorials from positive int n1 to positive int n2

#include <iostream>

using namespace std;

int main()
{
    int n1, n2;

    cout <<"Enter n1: ";
    cin >>n1;
    cout <<"Enter n2: ";
    cin >>n2;

    for (int curr_num=n1; curr_num<=n2; curr_num++)
    {
        int factorial = 1;

        for( int i=1; i<=curr_num; i++)
        {
            factorial *= i;
        }
        cout <<curr_num <<"! = " <<factorial <<endl;
    }

}













