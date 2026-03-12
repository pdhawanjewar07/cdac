// static variables and functions

#include <iostream>

using namespace std;

class item
{
    public:
        static int x;
        int number;

        void getData(int a)
        {
            number = a;
            number++;
            x++;
        }
        void getCount()
        {
            x=10;
            cout <<"Value is " <<x <<endl;
        }
        void getCount_1()
        {
            x++;
            cout <<"Value is " <<number <<endl;
            cout <<"Value is " <<x <<endl;
        }
};

int number = 9;
int item::x;
int main()
{
    item a;
    a.getCount();
    a.getData(100);
    a.getCount_1();
    cout <<number <<endl;
    cout <<a.number;
}