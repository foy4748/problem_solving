#include <iostream>
using std::string;
class Solution {
public:
  int strStr(string haystack, string needle) {
    char needleFirstChar = needle[0];
    int k = -1;
    for (int i = 0; i < haystack.size(); i++) {
      if (haystack[i] == needleFirstChar) {
        k = i;
        bool flag = true;
        for (char c : needle) {
          if (c != haystack[i]) {
            flag = false;
            k = -1;
          }
          if (i < haystack.size())
            i++;
        }
        if (flag)
          return k;
      }
    }

    return k;
  }
};
