
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

  // like this->show();
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

// modern smart pointers
void unique_pointer()
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
}

void shared_ptr()
{
  /*
  - Allows multiple owners of the same object.
  - Uses reference counting.
  */
  std::shared_ptr<Test1> sp1 = make_shared<Test1>();

  std::shared_ptr<Test1> sp2 = sp1;

  cout << "Reference count: " << sp1.use_count() << endl;

}

void weak_ptr()
{
  /*
  - Used with shared_ptr to avoid circular references.
  - It does not increase reference count.
  - weak_ptr only observes the object but does not own it.
  */

  std::shared_ptr<int> sp = make_shared<int>(50);

  std::weak_ptr<int> wp = sp;

  cout << "Shared count: " << sp.use_count() << endl;

  // To access value:
  if(auto temp = wp.lock()) {
    cout << *temp;
  }

}

void correct_modern_pattern()
{
  // Bad(old style)
  Test* obj = new Test();
  delete obj;

  // Correct modern C++:
  // >> auto keyword in modern C++ (C++11 and later) is used for type deduction
  auto obj = make_unique<Test>(); // make_unique

  // or
  auto obj = make_shared<Test>(); // make_shared

}