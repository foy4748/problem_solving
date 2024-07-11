#include<stdio.h>
#include <stdlib.h>

int** total_number_of_pages;

int main()
{
	int total_number_of_shelves; scanf("%d",&total_number_of_shelves);
	// Highly Important
	total_number_of_pages = (int**) malloc(total_number_of_shelves*sizeof(int*));
	int number_of_books[total_number_of_shelves] = {0};
	if(!total_number_of_pages)
	{
		printf("FAILED to allocate memory");
		return 0;
	}

	for(int i = 0; i<total_number_of_shelves; i++){
		*(total_number_of_pages+i) = (int*) malloc(1*sizeof(int));
		if(*(total_number_of_pages+i)){
			*(*(total_number_of_pages+i)) = 0;
		}
	}

	/* for(int i = 0; i<total_number_of_shelves; i++){ */
	/* 	printf("%d , %d\n", *(*(total_number_of_pages+i)), number_of_books[i]); */
	/* } */
	int x,y; scanf("%d", &x);
	int times = 5;
	while(times--){
		scanf("%d",&y);
		*(*(total_number_of_pages+x)) = y;
		number_of_books[x]++;
		*(total_number_of_pages+x) = (int*)realloc(*(total_number_of_pages+x),number_of_books[x]*sizeof(int));
		printf("\nLet's Check: %d \n", *(*(total_number_of_pages+x)));
	}
	return 0;
}
// ========================
/*
#include<stdio.h>
#include <stdlib.h>

int main()
{
	int * test;
	int arrSize = 1;

	test = (int*) malloc(arrSize*sizeof(int));
	if(!test){
		printf("FAILED to allocate memory");
		return 0;
	}
	*test = 5;
	printf("%d\n",*test);

	arrSize++;
	test = (int*) realloc(test, arrSize*sizeof(int));

	if(!test){
		printf("FAILED to re-allocate memory");
		return 0;
	}
	*(test+1) = 10;
	printf("%d\n",*(test+1));

	return 0;
}
*/
