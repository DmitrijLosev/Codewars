//Find the smallest integer in the array
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2
const args=[1,2,3,4]

class SmallestIntegerFinder {

    findSmallestInt(args) {
        return Math.min(...args)
    }
}
console.log(new SmallestIntegerFinder().findSmallestInt(args))