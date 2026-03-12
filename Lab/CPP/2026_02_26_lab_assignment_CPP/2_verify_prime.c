// verify if a number is prime or not

#include <stdio.h>

void main()
{
    printf("Input a positive integer number: ");
    int num;
    scanf("%d", &num);

    if(num==1)
    {
        printf("Not prime: %d", num);
        return;
    }

    for(int i=2; i<num; i++)
    {
        if(num % i == 0)
        {
            printf("Not prime: %d", num);
            return;
        }
    }
    printf("Is prime: %d", num);

}