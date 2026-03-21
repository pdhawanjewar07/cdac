/*
  NAMESPACES IN C++ — COMPLETE DEMO FILE

  Purpose:
  - Avoid name conflicts
  - Organize large codebases
  - Control scope and visibility
*/

#include <iostream>
#include <vector>

/*------------------------------------------------------------
1. BASIC NAMESPACE
------------------------------------------------------------*/
namespace MyNamespace {
  int x = 10;

  void display() {
    std::cout << "Hello from MyNamespace\n";
  }
}

/*------------------------------------------------------------
2. NAME COLLISION PROBLEM + SOLUTION
------------------------------------------------------------*/
namespace A {
  int x = 5;
}

namespace B {
  int x = 10;
}

/*------------------------------------------------------------
3. USING KEYWORD (SHORTCUT)
------------------------------------------------------------*/
// BAD PRACTICE in large codebases:
// using namespace std;

// BETTER:
using std::cout;
using std::endl;

/*------------------------------------------------------------
4. NESTED NAMESPACES
------------------------------------------------------------*/
namespace Outer {
  namespace Inner {
    int value = 100;
  }
}

// Modern C++ syntax
namespace Modern::Nested {
  int value = 200;
}

/*------------------------------------------------------------
5. ANONYMOUS NAMESPACE
- Only accessible within this file
- Similar to static global variables
------------------------------------------------------------*/
namespace {
  int hidden = 42;

  void hiddenFunc() {
    cout << "Hidden function (file-only)\n";
  }
}

/*------------------------------------------------------------
6. NAMESPACE ALIAS
------------------------------------------------------------*/
namespace veryLongNamespaceName {
  void func() {
    cout << "Function inside long namespace\n";
  }
}

namespace v = veryLongNamespaceName;

/*------------------------------------------------------------
7. STANDARD NAMESPACE (std)
------------------------------------------------------------*/
// All standard library stuff is inside std
// Example: std::cout, std::vector, etc.

/*------------------------------------------------------------
MAIN FUNCTION — DEMONSTRATION
------------------------------------------------------------*/
int main() {

  // 1. Accessing basic namespace
  cout << "MyNamespace::x = " << MyNamespace::x << endl;
  MyNamespace::display();

  cout << endl;

  // 2. Avoiding name collisions
  cout << "A::x = " << A::x << endl;
  cout << "B::x = " << B::x << endl;

  cout << endl;

  // 3. Using std without full qualification
  cout << "Using std selectively works cleanly\n";

  cout << endl;

  // 4. Nested namespaces
  cout << "Outer::Inner::value = " << Outer::Inner::value << endl;
  cout << "Modern::Nested::value = " << Modern::Nested::value << endl;

  cout << endl;

  // 5. Anonymous namespace usage
  cout << "Hidden value = " << hidden << endl;
  hiddenFunc();

  cout << endl;

  // 6. Namespace alias
  v::func();

  cout << endl;

  // 7. std namespace usage
  std::vector<int> nums = {1, 2, 3};
  cout << "Vector elements: ";
  for (int n : nums) {
      cout << n << " ";
  }
  cout << endl;

  return 0;
}

/*
------------------------------------------------------------
FINAL NOTES (READ THIS OR STAY MEDIOCRE)
------------------------------------------------------------

1. Namespaces prevent collisions — mandatory in real projects.

2. Avoid:
  using namespace std;
  → pollutes global scope, causes bugs at scale.

3. Use namespaces when:
  - Writing libraries
  - Large systems
  - Multiple developers involved

4. Anonymous namespace:
  - Use for file-private globals instead of 'static'

5. Don’t over-engineer:
  Deep nesting = unreadable garbage

------------------------------------------------------------
*/