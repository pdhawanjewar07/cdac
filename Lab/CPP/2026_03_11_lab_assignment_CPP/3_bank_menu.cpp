/*

Create a menu-driven program.
Menu:
1.Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit

*/

#include <iostream>
using namespace std;


static float balance; // default is 0

void check_balance()
{
  cout <<">> Current Balance: " <<balance <<endl <<endl;
}

void deposit()
{
  float deposit_amount;

  cout <<"Enter Deposit Amount: ";
  cin >>deposit_amount;
  balance += deposit_amount;
  cout <<">> Deposited amount of " <<deposit_amount <<endl <<endl;
}

void withdraw()
{
  float withdraw_amount;

  cout <<"Enter Withdraw Amount: ";
  cin >>withdraw_amount;

  if (balance <= withdraw_amount)
  {
    cout <<">> Insufficient balance!" <<endl <<endl;
    return;
  }

  balance -= withdraw_amount;
  cout <<">> Withdrawn amount of " <<withdraw_amount <<endl <<endl;
}

int main()
{

  int user_input;

  while (1)
  {
    cout <<"====== MENU ======" <<endl;
    cout <<"1. Check Balance" <<endl;
    cout <<"2. Deposit Money" <<endl;
    cout <<"3. Withdraw Money" <<endl;
    cout <<"4. Exit" <<endl;
    cout <<"==================" <<endl;
    cout <<"Choose an option: ";
    cin >>user_input;
    cout <<"---------------------" <<endl;

    switch (user_input)
    {
      case 1:
        check_balance();
        break;
      case 2:
        deposit();
        break;
      case 3:
        withdraw();
        break;
      case 4:
        cout <<">> Exiting Bank Menu" <<endl;
        return 0;
        break;
      
      default:
        cout <<"Option invalid!" <<endl;
        break;
    }
  }
  return 0;
}










