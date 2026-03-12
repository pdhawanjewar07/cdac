/*

>> Create a class Analyzer that stores numbers dynamically.
Requirements:
- Accept number of elements N.
- Dynamically allocate array.
- Accept numbers.
Find and print:
- Maximum number
- Minimum number
- Average value

*/

#include <iostream>
using namespace std;

class Analyzer{
  int num_of_elements;
  int* arr_ptr;

  public:
    Analyzer(); // constructor declaration
    ~Analyzer();  // destructor declaration
    // void make_dynamic_array();
    void display_analysis();

};

Analyzer::Analyzer()  // default constructor
{
  cout <<"Constructor was called!" <<endl;

  cout <<"Enter number of elements: ";
  cin >>num_of_elements;

  arr_ptr = new int[num_of_elements];

  for (int el_idx=0; el_idx<num_of_elements; el_idx++)
  {
    cin >>arr_ptr[el_idx];
  }

  cout <<"Dynamic array: ";
  for (int el_idx=0; el_idx<num_of_elements; el_idx++)
  {
    cout <<arr_ptr[el_idx] <<", ";
  }
  cout <<endl;
}

Analyzer::~Analyzer(){
  cout <<"Destructor was called!" <<endl;
  delete[] arr_ptr;
}

void Analyzer:: display_analysis()
{
  int min_num = arr_ptr[0];
  int max_num = arr_ptr[0];
  int sum = 0;

  for (int el_idx=0; el_idx<num_of_elements; el_idx++)
  {
    // evaluate larger
    if (arr_ptr[el_idx] > max_num)
    {
      max_num = arr_ptr[el_idx];
    }
    // evaluate smaller
    if (arr_ptr[el_idx] < min_num)
    {
      min_num = arr_ptr[el_idx];
    }

    // do summation
    sum += arr_ptr[el_idx];
  }

  cout <<"======== Analysis ==========" <<endl;
  cout <<"Minimum integer: " <<min_num <<endl;
  cout <<"Maximum integer: " <<max_num <<endl;
  cout <<"Average of _all: " <<float(sum)/num_of_elements <<endl;
  cout <<"===========================" <<endl;

}

int main()
{
  Analyzer a1;

  a1.display_analysis();


  return 0;
}




