#include<iostream>
using namespace std;
int main()
{
    char name[10];
    cout<<"accept name of the city\n";
    cin>>name;//pune
    cout<<"name of the city is "<<name <<endl;

    for (int i=0; i<10; i++)
    {
        cout <<name[i] <<", ";
    }
}