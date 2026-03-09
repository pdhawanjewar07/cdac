

#include <iostream>
using namespace std;


class Book
{
  static int update_bookID;
  int bookID;
  string title, author;
  float price;

  public:
    void input();
    void display();

};

int Book::update_bookID = 0;

void Book::input()
{
  cout <<"Enter title: ";
  cin >>title;

  cout <<"Enter author: ";
  cin >>author;

  cout <<"Enter price: ";
  cin >>price;

  update_bookID++;
  bookID = update_bookID;
}

void Book::display()
{
  cout <<"----------------------------" <<endl;
  cout <<"Book ID: " <<bookID <<endl;
  cout <<"Book Title: " <<title <<endl;
  cout <<"Book Author: " <<author <<endl;
  cout <<"Book Price: " <<price <<endl;
  cout <<"----------------------------" <<endl;

}

int main()
{
  Book arr[4];

  // Input for 4 books
  for (int i = 0; i < 4; i++)
  {
    cout << "Enter details for book " << i + 1 << endl;
    arr[i].input();
  }

  cout << "\nDisplaying Book Details\n";

  // Display books
  for (int i = 0; i < 4; i++)
  {
    cout << "Book " << i + 1 << " details:\n";
    arr[i].display();
  }

  return 0;
}

