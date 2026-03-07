

#include <iostream>
#include <string>

using namespace std;

class Date
{
    public:
        int day;
        int month;
        int year;
    
    // parameterized
    Date(int day, int month, int year)
    {
        this->day = day;
        this->month = month;
        this->year = year;
    }

    string getDate()
    {
        return to_string(day) + "/" + to_string(month) + "/" + to_string(year);
    }

};

class Student
{
    public:
        int roll_num;
        string date_of_birth;  // ------------------
        float total_marks;

    // non parameterized
    Student()
    {
        roll_num = 0;
        date_of_birth = "";
        total_marks = 0.0;
    }

    // parameterized
    Student(int roll_num, string date_of_birth, float total_marks)
    {
        this->roll_num = roll_num;
        this->date_of_birth = date_of_birth;
        this->total_marks = total_marks;
    }

    void display()
    {
        cout <<"roll_num: " <<roll_num <<endl;
        cout <<"date_of_birth: " <<date_of_birth <<endl;
        cout <<"total_marks: " <<total_marks <<endl;
    }

};

// Student::Student(){} // for outside constructors

int main()
{
    // Date date1(28, 11, 2026);
    // Student std1(1, date1.getDate(), 97);
    // std1.display();
    //----------------------------------
    Student students[10];

    for (int i=0; i<10; i++)
    {
        Date date1(i+1, 01, 2026);
        cout <<"------------------STUDENT " <<i+1 <<endl;
        students[i] = Student(i+1, date1.getDate(), (i+1)*10);
        students[i].display();
    }
    return 0;
}


