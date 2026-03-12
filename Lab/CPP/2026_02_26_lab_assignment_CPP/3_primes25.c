// print first 25 prime numbers

#include <stdio.h>

void main()
{
    int total_primes_found = 0;
    int start_num = 2;
    while(total_primes_found <= 25)
    {
        int prime_flag = 1;

        for(int i=2; i<start_num; i++)
        {
            if(start_num % i == 0)
            {
                prime_flag = 0;
                break;  // not prime
            }
        }
        if(prime_flag)
        {
            printf("%d, ", start_num);
            total_primes_found += 1;
        }
        start_num += 1;
    }
}
