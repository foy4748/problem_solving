
total_number_of_shelves = int(input("Total Shelves: "))

storage = list()
for i in range(total_number_of_shelves):
    storage.append(list())

total_number_of_queries =  int(input("Total Queries: "))

while(total_number_of_queries != 0):
    qType = int(input("Query Type: "))
    match qType:
        case 1:
            x = int(input("x: "))
            y = int(input("y: "))
            storage[x].append(y)
            total_number_of_queries = total_number_of_queries - 1
            pass
        case 2:
            x = int(input("x: "))
            y = int(input("y: "))
            total_number_of_queries = total_number_of_queries - 1
            print((storage[x])[y])
            pass
        case 3:
            x = int(input("x: "))
            total_number_of_queries = total_number_of_queries - 1
            print(len(storage[x]))
            pass
