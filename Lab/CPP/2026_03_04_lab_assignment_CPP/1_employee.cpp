//

#include <iostream>
using namespace std;



class Employee
{
    public:
        int empId;
        string name;
        float salary;
        static int totalEmployees;
        string companyName = "Company_A";

    Employee()
    {
        this->empId = 0;
        this->name = "John Doe";
        this->salary = 0.0;

        totalEmployees++;
    }

    Employee(int empId, string name, float salary)  
    {
        this->empId = empId;
        this->name = name;
        this->salary = salary;

        totalEmployees++;
    }

    void display()
    {
        cout <<"Employee id: " <<empId <<endl;
        cout <<"Employee name: " <<name <<endl;
        cout <<"Employee salary: " <<salary <<endl;
        cout <<"Company Name: " <<companyName <<endl;
    }

    static void showTotalEmployees()
    {
        cout <<"Total Employees: " <<totalEmployees <<endl;
    }

};

// 🔴 You MUST define static variable outside the class
int Employee::totalEmployees = 0;

int main()
{
    Employee(1, "Employee_1", 1000).display();
    cout <<"----------------------------" <<endl;
    Employee(2, "Employee_2", 2000).display();
    cout <<"----------------------------" <<endl;    
    Employee(3, "Employee_3", 3000).display();
    cout <<"----------------------------" <<endl;
    Employee(4, "Employee_4", 4000).display();
    cout <<"----------------------------" <<endl;
    Employee(5, "Employee_5", 5000).display();
    cout <<"----------------------------" <<endl;
    
    Employee::showTotalEmployees();

    return 0;
}
