
class Solution:
    
    #Function to find the first position with different bits.
    def posOfRightMostDiffBit(self,m,n,result1='', result2='', count=0):
        if(count == 0 and m == n):
            return -1

        #Your code here
        #logic1 = m == 0 or n == 0 
        logic1 = len(result1) > 0 and len(result2) > 0
        logic2 = logic1 and result1[0] != result2[0]
        if(logic2):
            return count

        result1 = str(int(m) % 2) + result1
        result2 = str(int(n) % 2) + result2
        m = int(m) // 2
        n = int(n) // 2
        count = count + 1
        return self.posOfRightMostDiffBit(m,n, result1, result2, count)

t = Solution()
print(t.posOfRightMostDiffBit(52,4))
