#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

void numToStr(int n){
    if(n && n > 9){
        if(n % 2){
            printf("odd");
        }else{
            printf("even");
        }
        return;
    }
    
    switch(n){
        case 1:
            printf("one");
            break;
        case 2:
            printf("two");
            break;
        case 3:
            printf("three");
            break;
        case 4:
            printf("four");
            break;
        case 5:
            printf("five");
            break;
        case 6:
            printf("six");
            break;
        case 7:
            printf("seven");
            break;
        case 8:
            printf("eight");
            break;
        case 9:
            printf("nine");
            break;
    } 
}

int main() 
{
    int a, b;
    scanf("%d\n%d", &a, &b);
  	// Complete the code.
    for(int i = a; i <= b; i++){
        numToStr(i);
        printf("\n");
    }

    return 0;
}


