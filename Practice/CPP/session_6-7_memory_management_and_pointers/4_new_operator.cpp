
#include <iostream>
using namespace std;

/*
>> The new operator in C++ is used to allocate 
memory dynamically on the heap during runtime.

- memory created with new exists until it is explicitly released.

> SYNTAX: pointer_variable = new data_type;
*/

// ---------------------------
void basic_example()
{
  // int *ptr = new int(50);

  int *ptr = new int;  // dynamic allocation
  *ptr = 25;  // storing value

  cout << "Value: " << *ptr << endl;

  delete ptr; // free memory
}

// ---------------------------
void dynaic_array_allocation()
{
  // SYNTAX: pointer = new data_type[size];

  int *arr = new int[5];

  arr[0] = 10;
  arr[1] = 20;
  arr[2] = 30;

  cout << arr[1];

  delete[] arr; // free memory
}

// ---------------------------
class Test {
public:
  void show(){
    cout << "Hello";
  }
};

void dynamic_object_creation()
{
  Test *obj = new Test;

  obj->show();

  delete obj;
}

// ---------------------------
#include <memory>
class Test1 {
  public:
    Test1() { cout << "Constructor called\n"; }
    ~Test1() { cout << "Destructor called\n"; }

    void show() {
      cout << "Hello from Test class\n";
    }
};

void modern_smart_pointer()
{
  /*
  - make_unique<Test>() allocates memory.
  - ptr owns the object.
  - When main() ends → destructor automatically runs.
  - Memory is freed without calling delete.
  */
  unique_ptr<Test1> ptr = make_unique<Test1>();
  ptr->show();

  // ERROR - Compilation fails because unique_ptr cannot have multiple owners.
  // unique_ptr<Test> ptr2 = ptr;
  
  // To transfer ownership - Now ptr2 owns the object and ptr becomes nullptr.
  unique_ptr<Test1> ptr2 = move(ptr);

  // ......... to be continued
}




