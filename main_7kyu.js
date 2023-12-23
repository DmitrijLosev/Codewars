//The highest profit wins!
//https://www.codewars.com/kata/559590633066759614000063

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1000, 2, 3, 4, 0]))


//Don't give me five!
//https://www.codewars.com/kata/5813d19765d81c592200001a
function dontGiveMeFive(start, end) {
    let arr = []
    for (let i = start; i <= end; i++) {
      !i.toString().includes("5") ? arr.push(i) : arr

    }
    return arr.length
}

console.log(dontGiveMeFive(4, 17))

//Find the stray number
//https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
    if(numbers[0]!==numbers[1] && numbers[1]===numbers[2]) {return numbers[0]}
    else {if((numbers.indexOf(Math.max(...numbers))-numbers.indexOf(Math.min(...numbers)))>0){
        return Math.max(...numbers)
    }
    else {return Math.min(...numbers)}}
}

console.log(stray([6,2,2,2,2,2,2]))