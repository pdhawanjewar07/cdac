
#include <iostream>
using namespace std;

/*
>> A pointer in C++ is a variable that stores the memory address
of another variable instead of storing the value directly.

> SYNTAX: data_type *pointer_name;

Notes:
- address of variable(&)
- dereference pointer(*)
- access members via pointer(->)
*/

class Student {
  public:
    int id;
    string name;
};

void basics_of_pointers()
{
  int a = 5;
  int *p; // p is a pointer
  p = &a; // store memory address(a) to p
  cout <<"==== basics_of_pointers() ====" <<endl;
  cout << "Pointer p(address(a) i.e., &a or p): " << p << endl;
  cout << "Value using pointer(*p): " << *p << endl;
  //
  int arr[5] = {8, 3, 9, 5, 2};
  int *p1 = arr;  // p1 is pointer to arr

  // print array by *(p1+i)
  cout <<"arr by *(p1+i): ";
  for (int i=0; i<5; i++){
    cout <<*(p1 + i) <<", ";
  }
  cout <<endl;
}

void dynamic_memory_allocation()
{
  int *p = new int;
}

void passing_variables_by_reference(int *x)
{
  *x = 20;
}

void pointer_to_pointer()
{
  int a = 10;
  int *p = &a;  // pointer to a
  int **p_to_p = &p;  // pointer to p(pointer)

  cout <<"==== pointer_to_pointer() ====" <<endl;
  cout <<"a: " <<a <<endl;
  cout <<"pointer to a(*p): " <<**p_to_p <<endl;
  cout <<"pointer to pointer_p(**p_to_p): " <<**p_to_p <<endl;
}

void access_class_member_via_ptr()
{
  Student s1;     // normal object
  Student *ptr;   // pointer to Student object

  ptr = &s1;      // pointer now holds address of s1

  ptr->id = 101;  // access member via pointer
  ptr->name = "Rahul";

  cout <<"==== access_class_member_via_ptr() ====" <<endl;
  cout <<"ptr->id: " <<ptr->id << endl;
  cout <<"ptr->name: " <<ptr->name << endl;
}

int main()
{
  //
  basics_of_pointers();

  // passing_variables_by_reference
  cout <<"==== passing_variables_by_reference(int *x) ====" <<endl;
  int a = 5;
  cout <<"a was: " <<a <<endl;
  passing_variables_by_reference(&a);
  cout <<"a after [passing_variables_by_reference(int *x){*x = 20;}]: " <<a <<endl;

  // pointer to pointer
  pointer_to_pointer();

  return 0;
}















