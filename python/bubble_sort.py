sequence = [4, 3, 5, 0, 1]
swaps = 0
operations = 0

n = len(sequence)
for i in range(n - 1):
    for j in range(0,n - i - 1):
        operations += 1
        # print(f"operations {operations}")
        if  sequence[j] > sequence[j + 1]:
            swaps += 1
            sequence[j],sequence[j + 1] = sequence[j + 1],sequence[j]
            # print(f"sequence[j]: {sequence[j]} , sequence[j + 1]  {sequence[j + 1]}, sequence {sequence}")
            
        

print(f"Final result: {sequence}")
print(f"Swaps: {swaps}")

