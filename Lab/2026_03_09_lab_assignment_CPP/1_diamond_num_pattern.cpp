/*  Isn't it COOL?

   1
  121
 12321
1234321
 12321
  121
   1

*/

#include <iostream>

using namespace std;

int ceil(int a, int b)
{
  return (a+b-1)/b;
}

int print_row_data(int num_of_digits)
{
  int data = 0;
  int reverse_at = ceil(num_of_digits, 2);

  for (int col=1; col<=num_of_digits; col++)
  {
    // int data;
    if (col <= reverse_at)
    {data++;}
    else{data--;}

    cout <<data;
  }
}

int main()
{
  int num_rows; 
  cout <<"Enter a positive odd integer(number of rows): ";
  cin >>num_rows;
  // return if num_rows is even
  if (num_rows % 2 == 0 || num_rows<0)
  {
    cout <<"Input wasnt a positive odd integer!";
    return 0;
  }

  int reverse_at_row = ceil(num_rows, 2);
  
  for (int curr_row=1; curr_row<=num_rows; curr_row++)
  {
    // START calculating req. space
    int num_digits;
    if (curr_row <= reverse_at_row)
    {num_digits = 2*curr_row-1;}
    else{num_digits -= 2;}

    int num_lead_space = (num_rows - num_digits)/2;
    
    for (int col=1; col<=num_lead_space; col++)
    {
      cout <<" "; // single space
    }
    // END calculating req. space

    print_row_data(num_digits);
    cout <<endl;
  }
  
  return 0;
}




