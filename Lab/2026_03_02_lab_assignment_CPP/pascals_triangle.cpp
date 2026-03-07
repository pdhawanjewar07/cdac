/*  needs dynamic space generators

                        1
                    1       1
                1       2       1
            1       3       3       1
        1       4       6       4       1
    1       5       10      10      5       1
1       6      "15"     20     "15"     6       1        


f(n, k) = n! / (k! * (n-k)!)    6! / 2! * (6-2)! => 6*5/2 => 15
n = row = 6
k = col = 2/4
*/


#include <iostream>

using namespace std;

int factorial(int input_num)
{
    int factorial = 1;

    for( int i=1; i<=input_num; i++)
    {
        factorial *= i;
    }
    // cout <<input_num <<"! = " <<factorial <<endl;
    return factorial;
}

// data for (row, col)
int getData(int row, int col)
{
    int data = factorial(row) / (factorial(col) * factorial(row - col));
    return data;
}

/*
int num_of_digits(int input_num)
{
    int num_of_digits = 0;
    while (input_num != 0)
    {
        input_num = input_num / 10;
        num_of_digits++;
    }
    return num_of_digits;
}
*/
int main()
{
    int input_rows;
    cout <<"Enter number of rows: ";
    cin >>input_rows;

    int count_rows = input_rows;

    for (int row=0; row<input_rows; row++)
    {
        // int curr_row = input_rows - count_rows;
        // cout <<"current row : " <<curr_row <<endl;
        cout <<endl;
        for (int i=1; i<=count_rows; i++)
        {
            cout <<"    ";  // 4
        }
        count_rows--;
        
        for (int col=0; col<=row; col++)
        {
            int data = getData(row, col);
            cout <<data <<"       ";    // 7
        }
        cout <<endl;
    }
}