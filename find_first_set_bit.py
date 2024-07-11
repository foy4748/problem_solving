### More Effective Solution
#{ 
 # Driver Code Starts
#Initial Template for Python 3

import math



# } Driver Code Ends
#User function Template for python3

class Solution:
    
    #Function to find position of first set bit in the given number.
    def getFirstSetBit(self,n):
        #Your code here
        return self.first_set_bit(n)
        
    def first_set_bit(self, decimal, result = '', count=0):
        if(decimal == 0 or (len(result) > 0 and result[0] == '1')):
            return count
    
        result = str(int(decimal) % 2) + result
        decimal = int(decimal) // 2
        count = count + 1
        return self.first_set_bit(decimal, result, count)
        




#{ 
 # Driver Code Starts.
    
    
def main():
    
    T=int(input())
    
    while(T>0):
        
        
        n=int(input())
        ob=Solution()
        
        print(ob.getFirstSetBit(n))
        
        
        T-=1
    
    




if __name__=="__main__":
    main()
## End of More Effective Solution

# } Driver Code Ends
###
import math



# } Driver Code Ends
#User function Template for python3

class Solution2:
    
    #Function to find position of first set bit in the given number.
    def getFirstSetBit(self,n):
        #Your code here
        return self.first_set_bit(self.convert_to_binary(n))
        
    def convert_to_binary(self, decimal, result = ''):
        if(decimal == 0):
            return result
    
        result = str(int(decimal) % 2) + result
        decimal = int(decimal) // 2
        return self.convert_to_binary(decimal, result)
        
    def first_set_bit(self, binary):
        for i in range(1, len(binary)):
            if binary[len(binary) - i] == '1':
                return int(i)
        return -1




#{ 
 # Driver Code Starts.
    
    
def main():
    
    T=int(input())
    
    while(T>0):
        
        
        n=int(input())
        ob=Solution2()
        
        print(ob.getFirstSetBit(n))
        
        
        T-=1

if __name__=="__main__":
    main()
# } Driver Code Ends
