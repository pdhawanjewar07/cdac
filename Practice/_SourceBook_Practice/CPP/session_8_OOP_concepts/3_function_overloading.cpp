// (Compile-time polymorphism)

class Math {
  public:
    int add(int a, int b) {
      return a + b;
    }

    // overload add function to behave differently based on arguments
    double add(double a, double b) {
      return a + b;
    }
};

