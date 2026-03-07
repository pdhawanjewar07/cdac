// calculate the area of square and rectngle using function overloading

#include <iostream>
using namespace std;

// square
void area(int side)
{
    cout <<"Area of square as per side(" <<side <<"): " <<side*side <<endl;
}

// rectangle
void area(int length, int breadth)
{
    cout <<"Area of rectangle as per length(" <<length <<") and breadth(" <<breadth <<"): " <<length*breadth <<endl;
}

int main()
{
    // square
    area(12);
    // rectangle
    area(12, 10);

    return 0;
}


