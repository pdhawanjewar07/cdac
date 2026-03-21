/*
| Specifier | Accessible where               |
| --------- | ------------------------------ |
| public    | everywhere                     |
| private   | only inside class              |
| protected | inside class + derived classes |
*/

class Example {
  protected:
    int protected_var;

  private:
    int private_var;  // hidden

  public:
    void setX(int val) { private_var = val; }
};

