// var sequence = [4, 3, 5, 0, 1]
var sequence = [5,4,3,2,1]
var swaps = 0
let iterations = 0


const n = sequence.length

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n - i - 1; j++) {
        iterations ++
        if (sequence[j] > sequence[j + 1]) {
            let temp = sequence[j]
            sequence[j] = sequence[j + 1]
            sequence[j + 1] = temp
            swaps++
            console.log(`sequence[i]: ${sequence[i]} , sequence[i + 1]  ${sequence[i + 1]}, sequence: ${sequence}`)        
        }
    }
} 


// let sorted = false
// while (!sorted) {
//     sorted = true
    
//     for(let i = 0; i < n - 1; i++) {
//         iterations++
//         if(i + 1 === n.lenth) {
//             break
//         }
//         if(sequence[i] > sequence[i + 1]) {
//             swaps++
//             let temp = sequence[i]
//             sequence[i] = sequence[i + 1]
//             sequence[i + 1] = temp
//             sorted = false
//             // break;
//         }
//     }
// }

console.log("Final result: " + sequence)
console.log("Swaps: " + swaps)
console.log("Iterations: " + iterations)