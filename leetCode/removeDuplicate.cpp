#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::vector;

int main() {

  int N;
  cin >> N;
  vector<int> nums(N);
  for (int i = 0; i < N; i++)
    cin >> nums[i];

  if (nums.size() <= 2)
    return 1;
  int j = 1;
  int k = 0;
  bool flag = true;
  for (int i = 0; i < nums.size() - 1; i++) {
    if (nums[i] != nums[j]) {
      if (flag) {
        nums[k] = nums[i];
        k++;
        nums[k] = nums[j];
        k++;
        flag = false;
      } else {
        nums[k] = nums[j];
        k++;
      }
    }
    j++;
  }
  /* for (int i = k; i < nums.size(); i++) */
  /*   nums[i] = 0; */
  for (int i = 0; i < N; i++)
    cout << nums[i] << ' ';
  cout << '\n';
  cout << k << '\n';

  return 0;
}
