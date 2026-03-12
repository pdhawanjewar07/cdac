

#include <iostream>
using namespace std;


class Calculator
{
  float num1, num2;
  public:
    Calculator(float a, float b); // constructor declaration

    float add();
    float subtract();
    float multiply();
    float divide();
    void square();
};

Calculator::Calculator(float a, float b)  // constructor definition
{
  num1 = a;
  num2 = b;
}

float Calculator::add()
{
  return (num1 + num2);
}

float Calculator::subtract()
{
  return (num1 - num2);
}

float Calculator::multiply()
{
  return (num1 * num2);
}

float Calculator::divide()
{
  return (num1 / num2);
}

void Calculator::square()
{
  cout <<"square(" <<num1 <<"): " <<num1*num1 <<endl;
  cout <<"square(" <<num2 <<"): " <<num2*num2 <<endl;
}




int main()
{
  float num1, num2;

  cout <<"Enter num1: ";
  cin >>num1;
  cout <<"Enter num2: ";
  cin >>num2;

  Calculator calc_1(num1, num2);

  //
  cout <<"add(" <<num1 <<", " <<num2 <<"): " <<calc_1.add() <<endl;
  cout <<"subtract(" <<num1 <<", " <<num2 <<"): " <<calc_1.subtract() <<endl;
  cout <<"multiply(" <<num1 <<", " <<num2 <<"): " <<calc_1.multiply() <<endl;
  cout <<"divide(" <<num1 <<", " <<num2 <<"): " <<calc_1.divide() <<endl;
  calc_1.square();

  
  return 0;
}