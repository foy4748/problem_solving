#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

void printGrid(int size, int grid[2*size-1][2*size-1]){
	for(int i=0; i<2*size-1; i++){
		for(int j = 0; j<2*size-1; j++){
			printf("%d ",grid[i][j]);
		}
		printf("\n");
	}
}

int main() 
{

    int n;
    scanf("%d", &n);
	int grid[2*n-1][2*n-1];
	int i,j,k; // Iterators
  	// Complete the code to print the pattern.
	
	// Constructing grid
	for(i=0; i< 2*n-1; i++){
		for(j=0; j< 2*n-1; j++){
			grid[i][j] = n;
		}
	}

	// Printing Pattern
	for(k=1; k<n; k++){
		for(i=k; i<(2*n-1)-k; i++){
			for(j=k; j<(2*n-1)-k; j++){
				grid[i][j] = grid[i][j] - 1;
			}
		}

	}
	
	printGrid(n,grid);
    return 0;
}
