class Solution:
    
    #Function to check if Kth bit is set or not.
    def checkKthBit(self, n,k,result=''):
        #Your code here
        #print(len(result)-1,k,result)
        if(k == 0 and len(result) == 1 and result[-1] == '1'):
            return True

        if(len(result) - 1 < k):
            result = str(int(n) % 2) + result
            n = int(n) // 2
            return self.checkKthBit(n,k,result)

        if(len(result)-1 == k and result[0] == '1'):
            return True
        else:
            return False


t = Solution()
print(t.checkKthBit(39,5))
