#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{

    int n;
    scanf("%d", &n);
	int i,j; // Iterators
  	// Complete the code to print the pattern.
	for(i=1; i<= 2*n-1; i++){
		for(j=1; j<= 2*n-1; j++){
			printf("%d\t", n - i + 1);
		}
		printf("\n");
	}
    return 0;
}
