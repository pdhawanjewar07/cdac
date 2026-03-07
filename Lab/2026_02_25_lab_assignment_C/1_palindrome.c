// check if an integer is a palindrome or not

#include <stdio.h>

void main()
{
	int num, original, reversed = 0, remainder;
	printf("Enter number: ");
	scanf("%d", &num);
    
    original = num;
    
    while(num%10 != 0)  // or while(num != 0)
    {
        remainder = num%10;
        
        reversed = (reversed * 10) + remainder;
        num = num/10;
    }
    
    if (reversed == original)
    {
        printf("Palindrome");
    }
    else
    {
        printf("Not Palindrome");
    }
}