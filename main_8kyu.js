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
function greeting() {
    return "hello world!"
}

console.log(greeting())


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

//DNA to RNA Conversion
//https://www.codewars.com/kata/5556282156230d0e5e000089
function DNAtoRNA(dna) {
    return dna.split("").map(i => (i === "T" ? "U" : i)).join("")
}

console.log(DNAtoRNA("TTTT"))

//If you can't sleep, just count sheep!!
//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

function countSheep(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr[i] = `${i + 1} sheep...`
    }
    return arr.join("")
}

console.log(countSheep(3))

//Jenny's secret message
//https://www.codewars.com/kata/55225023e1be1ec8bc000390

function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!"
    } else {
        return "Hello, " + name + "!";
    }
}

console.log(greet("Johnny"))
//Count by X
//https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = x * (i + 1)
    }
    return arr;
}

console.log(countBy(2, 5))

//Find Maximum and Minimum Values of a List
//https://www.codewars.com/kata/577a98a6ae28071780000989

function min(list) {
    for (let i = 0; i < list.length; i++) {
        list[i] < list[i + 1] ? list[i + 1] = list[i] : ""
    }
    return list[list.length - 1];
}

console.log(min([1, 2, 3]))

function max(list) {
    for (let i = 0; i < list.length; i++) {
        list[i] > list[i + 1] ? list[i + 1] = list[i] : ""
    }
    return list[list.length - 1];
}

console.log(max([7, 2, 3]))


//Convert a string to an array
//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

function stringToArray(string) {
    return string.split(" ")
}

console.log(stringToArray("1 f f f f ff f"));

//Rock Paper Scissors!
//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!"
    } else {
        if (p1 === "paper" && p2 === "rock") {
            return "Player 1 won!"
        }
        if (p1 === "rock" && p2 === "scissors") {
            return "Player 1 won!"
        }
        if (p1 === "scissors" && p2 === "paper") {
            return "Player 1 won!"
        } else {
            return "Player 2 won!"
        }

    }
}

console.log(rps("paper", "scissors"))

//Array plus array
//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
    const arrSum = (arr) => {
        let sumArr = 0;
        for (let i = 0; i < arr.length; i++) {
            sumArr += arr[i]
        }
        return sumArr
    }
    return arrSum(arr1) + arrSum(arr2);
}

console.log(arrayPlusArray([1, 2, 3, 4, 5], [1, 2, 3]))

//Total amount of points
//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
    let points = 0;

    for (let i = 0; i < games.length; i++) {
        if (games[i].split(":")[0] > games[i].split(":")[1]) {
            points += 3;
        }
        if (games[i].split(":")[0] === games[i].split(":")[1]) {
            points += 1;
        }
    }
    return points
}

console.log(points(["3:1", "1:1", "2:2", "2:1"]))

//Grasshopper - Grade book
//https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade(s1, s2, s3) {
    const ave = (s1 + s2 + s3) / 3;
    console.log(ave)
    if (90 <= ave && ave <= 100) return 'A';
    if (80 <= ave && ave < 90) return 'B';
    if (70 <= ave && ave < 80) return 'C';
    if (60 <= ave && ave < 70) return 'D';
    if (0 <= ave && ave < 60) return 'F';


}

console.log(getGrade(75, 75, 70))

function sumArray(array) {
    const maxIndex = array.indexOf(Math.max(...array))
    const minIndex = array.indexOf(Math.min(...array))
    let sumArray = 0;
    for (let i = 0; i < array.length; i++) {
        i !== maxIndex && i !== minIndex ? sumArray += array[i] : ""
    }
    return sumArray
}

console.log(sumArray([2, 1, 3, 4]))


//Sum Mixed Array
//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum = sum + (+x[i])
    }
    return sum
}

//Count the Monkeys!
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

function monkeyCount(n) {
    let monkey = [];
    for (let i = 0; i < n; i++) {
        monkey[i] = i + 1
    }
    return monkey
}

console.log(monkeyCount(5))

//The Feast of Many Beasts
//https://www.codewars.com/kata/5aa736a455f906981800360d/
function feast(beast, dish) {
    return beast.split("")[0] === dish.split("")[0] && beast.split("")[beast.split("").length - 1] === dish.split("")[dish.split("").length - 1]
}

console.log(feast("app le", "anan na se"))

//Transportation on vacation
//https://www.codewars.com/kata/568d0dd208ee69389d000016
function rentalCarCost(d) {
    let x = d >= 3 && d < 7 ? 20 : d >= 7 ? 50 : 0
    return d * 40 - x
}

console.log(rentalCarCost(10))

//Thinkful - Logic Drills: Traffic light
//https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
    if (current === "green") {
        return "yellow"
    }
    if (current === "yellow") {
        return "red"
    } else {
        return "green"
    }
}

console.log(updateLight("green"))

//L1: Set Alarm
//https://www.codewars.com/kata/568dcc3c7f12767a62000038
function setAlarm(employed, vacation) {
    return employed && !vacation
}

console.log(setAlarm(true, true))

//Removing Elements
//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr) {
    return arr.filter((i, index) => index % 2 === 0)
}

console.log(removeEveryOther([1,2,3,4,5,6,7,8,9,0]))

//Third Angle of a Triangle
//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
function otherAngle(a, b) {
    return 180-a-b;
}

console.log( otherAngle(45, 45))

//Will there be enough space?
//https://www.codewars.com/kata/5875b200d520904a04000003

    function enough(cap, on, wait) {
        if(cap>=(on+wait)) {return 0} else {return (wait+on)-cap}
    }

console.log(enough(12,3,5))

//Beginner Series #4 Cockroach
//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
function cockroachSpeed(s) {
    return Math.floor(s*1000/36)
}

console.log(cockroachSpeed(60))