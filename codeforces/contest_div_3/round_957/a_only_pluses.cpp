#include <bits/stdc++.h>
#define endl "\n"
//#define ll long long int

using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  // Write your code here

  int T;
  cin >> T;
  while (T--) {
    int arr[3];
    for (int i = 0; i < 3; i++) {
      cin >> arr[i];
    }
    sort(arr, arr + 3);
    int ops = 5;
    int i = 0;
    int diff = arr[1] - arr[0];
    if (diff <= ops) {
      arr[0] += diff;
      ops -= diff;

      i = 0;
      while (ops) {
        arr[i % 3]++;
        ops--;
        i++;
      }
    } else {
      arr[0] += 5;
    }
    int mult = 1;
    for (int c : arr)
      mult *= c;
    cout << mult << '\n';
  }
  return 0;
}
