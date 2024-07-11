#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int intPow(int base, int power){
    int mult = 1;
    for(int i=0; i<power; i++){
        mult *= base;
    }
    return mult;
}

int nthDigit(int num,int pos){
    int result =(num % intPow(10,pos))/intPow(10,pos-1);
    return result;

}

int main() {
	
    int n;
    scanf("%d", &n);
    //Complete the code to calculate the sum of the five digits on n.
    int sum = 0;
    for(int i=1; i<=5; i++){
        sum += nthDigit(n,i);
    }
    printf("%d",sum);        
    return 0;
}
