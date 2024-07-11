#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

// Help ------------------
// https://sentry.io/answers/char-to-int-in-c-and-cpp/
int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
	char s[1000];
	int storage[] = {0,0,0,0,0,0,0,0,0,0,0};
	scanf("%[^\n]%*c", &s);
	for(int i = 0; s[i] != '\0'; i++){
		int parsed = s[i] - '0';
		if(parsed >= 0 && parsed <=9){
			storage[parsed]++;
		}
	}

	for(int i = 0; i<10; i++){
		printf("%d ",storage[i]);
	}
	//printf("\n");

    return 0;
}

