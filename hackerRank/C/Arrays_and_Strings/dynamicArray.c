#include <stdio.h>
#include <stdlib.h>

/*
 * This stores the total number of books in each shelf.
 */
int* total_number_of_books;

/*
 * This stores the total number of pages in each book of each shelf.
 * The rows represent the shelves and the columns represent the books.
 */
int** total_number_of_pages;

int main()
{
    int total_number_of_shelves;
    scanf("%d", &total_number_of_shelves);
    
    int total_number_of_queries;
    scanf("%d", &total_number_of_queries);
    total_number_of_pages = (int**) malloc(total_number_of_shelves*sizeof(int*));
    total_number_of_books = (int*)  malloc(total_number_of_shelves*sizeof(int));
 
	//printf("pages\tt_books\tn_books\n");
    for(int i = 0; i<total_number_of_shelves; i++){
        *(total_number_of_pages+i) = (int*) malloc(1*sizeof(int));
        if(*(total_number_of_pages+i)){
            *(*(total_number_of_pages+i)) = 0;
        }
        *(total_number_of_books+i) = 0;
		//printf("%d\t%d\n", *(*(total_number_of_pages+i)), *(total_number_of_books+i));
    }
     

    if(!total_number_of_pages || !total_number_of_books)
    {
        printf("FAILED to allocate memory");
        return 0;
    }
    while (total_number_of_queries--) {
        int type_of_query;
        scanf("%d", &type_of_query);
        
        if (type_of_query == 1) {
            /*
             * Process the query of first type here.
             */
            int x, y;
            scanf("%d %d", &x, &y);
			int* currentNumberOfBooks = total_number_of_books+x;
			*(*(total_number_of_pages+x)+(*currentNumberOfBooks)) = y;
			*currentNumberOfBooks = *currentNumberOfBooks + 1;
			int newSize = *currentNumberOfBooks + 1;
			*(total_number_of_pages+x) = (int*)realloc(*(total_number_of_pages+x),newSize*sizeof(int));
			//printf("Number of Books: %d\n", *currentNumberOfBooks);

			/*
			printf("Row element: %d\n", *(row+currentNumberOfBooks));
			printf("Number of Books: %d\n", currentNumberOfBooks);
			printf("Shelve number: %d\n", x);
			printf("-------------\n");
			*/
        } else if (type_of_query == 2) {
            int x, y;
            scanf("%d %d", &x, &y);
            printf("%d\n", *(*(total_number_of_pages + x) + y));
        } else {
            int x;
            scanf("%d", &x);
            printf("%d\n", *(total_number_of_books + x));
        }
    }

    if (total_number_of_books) {
        free(total_number_of_books);
    }
    
    for (int i = 0; i < total_number_of_shelves; i++) {
        if (*(total_number_of_pages + i)) {
            free(*(total_number_of_pages + i));
        }
    }
    
    if (total_number_of_pages) {
        free(total_number_of_pages);
    }
    
    return 0;
}
