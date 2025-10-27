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
    string st;
    cin >> st;
    if (st.size() <= 10)
      cout << st << '\n';
    else {
      cout << st[0] << st.size() - 2 << st[st.size() - 1] << '\n';
    }
  }
  return 0;
}
