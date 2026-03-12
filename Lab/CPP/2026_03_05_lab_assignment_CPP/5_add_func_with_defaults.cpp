// add function with default arguements

#include <iostream>
using namespace std;

void add(int a=10, int b=20)
{
    cout <<a <<" + " <<b <<" = " <<a+b <<endl;
    cout <<"-------------------------" <<endl;
}

int main()
{
    add();
    add(50);
    add(20, 70);

    return 0;
}


