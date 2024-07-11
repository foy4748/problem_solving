#include <stdio.h>
/*
Add `int max_of_four(int a, int b, int c, int d)` here.
*/
int max_of_four(int a, int b, int c, int d){
    int arr[] = {a,b,c,d};
    int max_num = arr[0];
    for(int i = 1; i < 4; i++){
        if(max_num < arr[i]){
            max_num = arr[i];
        }
    }
    return max_num;
}

int main() {
    int a, b, c, d;
    scanf("%d %d %d %d", &a, &b, &c, &d);
    int ans = max_of_four(a, b, c, d);
    printf("%d", ans);
    
    return 0;
}
