
#include <iostream>
using namespace std;

/*
>> An enumeration is a user-defined data type that 
consists of a set of named integer constants.

- It is used when a variable should only take one 
value from a fixed set of possible values.

> SYNTAX: 
enum enum_name {
  value1,
  value2,
  value3
};

Notes:
- used with switch statements regularly

*/

// ------------------
void simple_usecase()
{
  enum Status {
    SUCCESS = 1,
    FAILURE = 0,
    PENDING = -1
  };

  Status s;

  s = SUCCESS;

  cout << s <<endl;
}

// ------------------
void enum_with_switch()
{
  enum Direction {
    LEFT,
    RIGHT,
    UP,
    DOWN
  };

  Direction move = RIGHT;

  switch(move)
  {
    case LEFT:
      cout << "Moving Left" <<endl;
      break;

    case RIGHT:
      cout << "Moving Right" <<endl;
      break;

    case UP:
      cout << "Moving Up" <<endl;
      break;

    case DOWN:
      cout << "Moving Down" <<endl;
      break;
  }
}

// ------------------
void modern_cpp_better_version()
{
  // Old enums pollute global scope. Modern C++ fixes this.
  enum class Color {
    RED,
    GREEN,
    BLUE
  };

  Color c = Color::GREEN;

  cout << (int)c <<endl;
}

int main()
{
  simple_usecase();

  enum_with_switch();

  modern_cpp_better_version();

  return 0;
}









