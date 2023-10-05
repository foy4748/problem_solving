#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
	char ch;
	char s[99];
	char sen[99];
	scanf("%c\n", ch);
	scanf("%[^\n]%*c", s);
	scanf("\n");
	scanf("%[^\n]%*c", sen);
	return 0;
}
