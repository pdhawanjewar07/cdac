// print all armstrong numbers from 100 to 999
// count total armstong numbers

#include <stdio.h>

void main()
{
    int total = 0;
    for(int i=100; i<=999; i++)
    {
        int summation_of_cubed_digits = 0;
        int remainder;
        int num = i;
        while(num != 0)
        {
            remainder = num % 10;
            summation_of_cubed_digits += remainder * remainder * remainder;
            num /= 10;
        }
        if(i == summation_of_cubed_digits)
        {
            total += 1;
            printf("%d, ", i);
        }
    }

    printf("Total: %d", total);
}