
const args=[1,2,3,4]

class SmallestIntegerFinder {

    findSmallestInt(args) {
        return Math.min(...args)
    }
}
console.log(new SmallestIntegerFinder().findSmallestInt(args))