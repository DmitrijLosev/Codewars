//Find the smallest integer in the array
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2
const args = [1, 2, 3, 4]

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

console.log(new SmallestIntegerFinder().findSmallestInt(args))

//Abbreviate a Two Word Name
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name) {
    const sepName = name.split(" ");

    return `${sepName[0].split("")[0].toUpperCase()}.${sepName[1].split("")[0].toUpperCase()}`

}

console.log(abbrevName("dmitrij losev"))

// Write a function "greet" that returns "hello world!"
//https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
function greet() {
    return "hello world!"
}

console.log(greet())


//A Needle in the Haystack
//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
function findNeedle(haystack) {
    for (i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i + 1}`
        }
    }

}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))

//Beginner - Lost Without a Map
//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x) {
    return x.map((i) => {
        return i * 2
    })
}

console.log(maps([1, 2, 3, 4]))

//Opposites Attract
//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
        return true
    }
    return flower2 % 2 === 0 && flower1 % 2 !== 0;
}
console.log(lovefunc(2, 2))











