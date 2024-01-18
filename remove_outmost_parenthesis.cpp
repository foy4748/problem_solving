#include <bits/stdc++.h>

// LeetCode
// https://leetcode.com/problems/remove-outermost-parentheses

using namespace std;

char isMatchedParenthesis(char c) {
  if (c == ')') {
    return '(';
  } else {
    return '\0';
  }
}

string removeOuterParentheses(string s) {

  stack<char> st;
  vector<char> v;

  for (char c : s) {
    if (st.empty()) {
      st.push(c);
    } else {
      char top = st.top();
      if (top == '(' && c == '(')
        v.push_back(top);
      if (top == isMatchedParenthesis(c)) {
        st.pop();
        if (!st.empty()) {
          v.push_back(c);
        }
      } else {
        st.push(c);
      }
    }
  }

  string result(v.begin(), v.end());

  return result;
}

int main() {
  // Write your code here
  string input;
  cin >> input;
  string result = removeOuterParentheses(input);
  // cout << result << endl;

  return 0;
}
