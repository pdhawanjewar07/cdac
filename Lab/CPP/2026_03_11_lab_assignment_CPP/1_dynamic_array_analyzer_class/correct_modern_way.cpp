#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

using namespace std;

class Analyzer {
  vector<int> data;

  public:
    Analyzer(const vector<int>& arr) : data(arr) {}

  void display_analysis() {
    int min_num = *min_element(data.begin(), data.end()); // <algorithm>
    int max_num = *max_element(data.begin(), data.end()); // <algorithm>
    int sum = accumulate(data.begin(), data.end(), 0);  // <numeric>

    cout << "======== Analysis =========\n";
    cout << "Minimum integer: " << min_num << endl;
    cout << "Maximum integer: " << max_num << endl;
    cout << "Average: " << (float)sum / data.size() << endl;
    cout << "===========================\n";
  }
};

int main() {
  int n;
  cout << "Enter number of elements: ";
  cin >> n;

  vector<int> arr(n);

  for (int& x : arr)
      cin >> x;

  Analyzer a1(arr);
  a1.display_analysis();
}

