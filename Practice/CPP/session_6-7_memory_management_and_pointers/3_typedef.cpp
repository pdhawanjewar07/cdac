
#include <iostream>
using namespace std;

/*
>> typedef creates an alias (alternative name) 
for an existing data type.

- It does not create a new type, it only gives 
another name to an existing type to improve readability.

> SYNTAX: typedef existing_type new_name;

Notes:
- Use it only when it removes real complexity, not to look clever.
*/
// -----------------------
void basic_example()
{
  typedef int Integer;

  Integer a = 10;
  Integer b = 20;

  cout <<"==== basic_example() ====" <<endl;
  cout <<a + b <<endl;
}

// -----------------------
void typedef_with_structures()
{
  // Without typedef:
  struct Student {
    int id;
    float marks;
  };
  struct Student s;

  // With typedef: Now Student acts like a datatype.
  typedef struct {
    int id;
    float marks;
  } Student1;
  Student1 s1;
}

// -----------------------
void typedef_with_pointers()
{
  typedef int* IntPtr;

  IntPtr p1;  // int* p1;
  IntPtr p2;  // int* p2;
}

// -----------------------
void typedef_with_arrays()
{
  typedef int IntArray[5];  // int arr[5];

  IntArray arr = {1,2,3,4,5};
}

// -----------------------
void print(int x){
  cout << x << endl;
}

void typedef_with_function_pointers()
{
  // pointer to function taking int and returning void
  typedef void (*FuncPtr)(int);

  FuncPtr f = print;
  f(10);
}

// -----------------------
void modern_alternative_using()
{
  typedef long long ll;

  using ll = long long;
}





