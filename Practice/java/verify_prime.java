import java.util.Scanner;

public class verify_prime {
  //
  public static void main(String[] args) {
    //
    Scanner sc = new Scanner(System.in);

    System.out.println("Enter a positive integer(>=2): ");
    int input_num = sc.nextInt();
    sc.close();

    // Start check prime algorithm
    boolean flag_prime = true;

    for (int i=2; i<input_num; i++){
      if (input_num % i == 0){
        flag_prime = false;
        break;
      }
    }

    if (flag_prime){
      System.out.println("Is a prime: " + input_num);
    }
    else{
      System.out.println("Not a prime: " + input_num);
    }
  }
}
