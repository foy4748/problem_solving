
total_number_of_shelves = int(input(""))

storage = list()
for i in range(total_number_of_shelves):
    storage.append(list())

total_number_of_queries =  int(input(""))

while(total_number_of_queries != 0):
    qType = int(input(""))
    match qType:
        case 1:
            x = int(input(""))
            y = int(input(""))
            storage[x].append(y)
            total_number_of_queries = total_number_of_queries - 1
            pass
        case 2:
            x = int(input(""))
            y = int(input(""))
            total_number_of_queries = total_number_of_queries - 1
            print((storage[x])[y])
            pass
        case 3:
            x = int(input(""))
            total_number_of_queries = total_number_of_queries - 1
            print(len(storage[x]))
            pass
