#include <iostream>
using namespace std;



int factorial(int input_num){
  //
  if (input_num == 0){
    return 1;
  }

  return input_num * factorial(input_num - 1);
}


int main(){
  //
  int num = 6;
  cout <<factorial(num);

  return 0;
}

