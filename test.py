

def binary_search(list, target):
    first =0;
    last = len(list)-1
    
    while first<=last:
        midPoint = (first+last)//2
        if list[midPoint]==target:
         return midPoint
        elif list[midPoint]<target:
            first = midPoint+1
        else :
            last =midPoint-1

    return None

def verify(value):
    if value is None:
        print("Target Not Found")
    else:
        print("Target found in the index ",value)


numbers = [1,2,3,4,5,6,7,8,9]
results = binary_search(numbers,8)

verify(results)


