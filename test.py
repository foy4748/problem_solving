def convert_to_binary( decimal, result = '', count=0):
    if(decimal == 0 or (len(result) > 0 and result[0] == '1')):
        return count

    result = str(int(decimal) % 2) + result
    decimal = int(decimal) // 2
    count = count + 1
    return convert_to_binary(decimal, result, count)
    
def first_set_bit(binary):
    for i in range(1, len(binary)+1):
        if binary[len(binary) - i] == '1':
            return int(i)
    return -1

# print(first_set_bit(convert_to_binary(16)))
print(convert_to_binary(18))
