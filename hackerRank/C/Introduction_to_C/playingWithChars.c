#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
	char ch;
	char s[99];
	char sen[99];
	scanf("%c", &ch);
	scanf(" %[^\n]%*c", &s);
	scanf(" %[^\n]%*c", &sen);

	printf("%c\n",ch);
	puts(s);
	puts(sen);
	return 0;
}
