/*

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

#include <iostream>
using namespace std;

int main()
{
    static int col_data = 1;
    for (int row=1; row<=5; row++)
    {
        for (int col=1; col<=row; col++)
        {
            cout <<col_data <<"\t";
            col_data++;
        }
        cout <<endl;
    }
}
