#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
//Complete the following function.


void calculate_the_maximum(int n, int k) {
  //Write your code here.
  int i,j;
  int and, or, xor;
  int max_and=0, max_or=0, max_xor=0;
  int current_and, current_or, current_xor;

  for(i=1; i<=n; i++){
	  for(j=i+1; j<=n; j++){
		  current_and = i & j;
		  current_or  = i | j;
		  current_xor = i ^ j;
		  if(current_and > max_and && current_and < k) max_and = current_and; 
		  if(current_or > max_or && current_or < k) max_or = current_or; 
		  if(current_xor > max_xor && current_xor < k) max_xor = current_xor; 
	  }
  }

  printf("%d\n%d\n%d",max_and,max_or,max_xor);
}

int main() {
    int n, k;
  
    scanf("%d %d", &n, &k);
    calculate_the_maximum(n, k);
 
    return 0;
}

