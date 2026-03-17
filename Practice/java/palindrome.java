import java.util.Scanner;


public class palindrome {
  //
  public static void main(String[] args){
    //
    Scanner sc = new Scanner(System.in);

    System.out.print("Enter a positive integer: ");
    int input_num = sc.nextInt();
    // close the scanner
    sc.close();

    // save input_num for comparison
    int original = input_num;
    int reversed_num =  0;
    int remainder;
    
    // Start palindrome check algorithm
    while (input_num != 0){
      remainder = input_num % 10;
      reversed_num = reversed_num * 10 + remainder;

      input_num /= 10;
    }
    
    if (reversed_num == original){
      System.out.println("Palindrome: " + original);
    }
    else{
      System.out.println("Not a Palindrome: " + original);
    }
  }
}

