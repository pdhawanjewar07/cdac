/*

A B C D E
A B C D
A B C
A B
A

*/

#include <iostream>
using namespace std;

int main()
{
    for (int row=5; row>=1; row--)
    {
        for (int col=1; col<=row; col++)
        {
            char col_data = char('A' + col - 1);
            cout <<col_data <<"\t";
        }
        cout <<endl;
    }

}