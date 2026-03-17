
#include <iostream>

using namespace std;


class Node{
  int data;
  Node* next;
  public:
  Node(int data){
    this->data = data;
    next = nullptr;
  }
  ~Node(){
    delete this->next;
  }


};

int main()
{
  Node* head = new Node(10);
  Node* new_node_1 = new Node(20);
  


  return 0;
}










