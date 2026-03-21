
#include <string>
using namespace std;

class Car {
  public:
    string brand;
    int speed;

    void accelerate() {
      speed += 10;
    }
};

int main() {
  Car c1;    // object
  c1.brand = "BMW";
  c1.speed = 0;
  c1.accelerate();

}


