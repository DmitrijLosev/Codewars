//Replace With Alphabet Position
//https://www.codewars.com/kata/546f922b54af40e1e90001da
function alphabetPosition(text) {
    let alph = "abcdefghijklmnopqrstuvwxyz"
    return text.toLowerCase().replace(/[^a-z]/g, '').split("")
        .map(i => (alph.indexOf(i) + 1).toString()).join(" ");
}

console.log(alphabetPosition("xxx DDD dfksjgkldjgkdj gksfjgkfdjglkjg;l gkfdsjgklsfdj][E[WQKALFSD;SJB"))

//Find the missing letter
//https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
    let str = array.join("")
    let chart = ""
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
            chart = String.fromCharCode(str.charCodeAt(i) + 1)
            break
        }
    }
    return chart
}

console.log(findMissingLetter(["a", "c", "d"]))


//WeIrD StRiNg CaSe
//https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string) {
    return string.toLowerCase().split(" ")
        .map((el, index) => el
            .split("").map((i, index) => index % 2 === 0 ? i.toUpperCase() : i.toLowerCase())
            .join("")).join(" ")
}

console.log(toWeirdCase("asdadasda dsadsada dsadsadasd sdasad sdfg dhlghdg hlgjghlkjlg hkj"))

//Title Case
//https://www.codewars.com/kata/5202ef17a402dd033c000009
function titleCase(title, minorWords) {
    if (!title) return "";
    const minorWordsArray = minorWords
        ? minorWords.toLowerCase().split(" ") :
        [];
    let arr = title.split(" ")

    function lowCase(word) {
        return word[0].toUpperCase() + word.toLowerCase().slice(1)
    }

    arr = arr.map((el, index) =>
        (minorWordsArray
            .every(i => i !== el.toLowerCase()) && index > 0)
            ? lowCase(el) : el.toLowerCase())
    arr[0] = lowCase(arr[0])
    return arr.join(" ")
}

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))

//Simple Encryption #1 - Alternating Split
//https://www.codewars.com/kata/57814d79a56c88e3e0000786

function encrypt(text, n) {
    if (text === "" || n <= 0 || text === null) {
        return text
    } else {
        let arrChart = text.split("");

        function replaceIndex() {
            let odd = [];
            let even = [];
            for (let i = 0; i < arrChart.length; i++) {
                i % 2 === 0 ? even.push(arrChart[i]) : odd.push(arrChart[i])
            }
            arrChart = odd.concat(even)
        }

        while (n > 0) {
            replaceIndex()
            --n
        }
        return arrChart.join("")
    }
}

console.log(encrypt("012345", 3))


function decrypt(encryptedText, n) {
    if (encryptedText === "" || n <= 0 || encryptedText === null) {
        return encryptedText;
    } else {
        let arrChart = encryptedText.split("");

        function replaceIndexBack() {
            let mid = arrChart.length % 2 === 0 ? arrChart.length / 2 : Math.floor(arrChart.length / 2)
            let odd = arrChart.slice(0, mid);
            let even = arrChart.slice(mid);
            let arr = [];

            for (let i = 0; i < mid; i++) {
                arr.push(even[i]);
                arr.push(odd[i]);
            }
            if (arrChart.length % 2 !== 0) {
                arr.push(even[mid])
            }
            arrChart = arr;
        }

        for (let i = 0; i < n; i++) {
            replaceIndexBack();
        }

        return arrChart.join("");
    }
}

console.log(decrypt("hsi  etTi sats!", 1))

//Good vs Evil
//https://www.codewars.com/kata/52761ee4cffbc69732000738

function goodVsEvil(good, evil) {

    let goodMult = [1, 2, 3, 3, 4, 10];
    let evilMult = [1, 2, 2, 2, 3, 5, 10]

    function sumPoint(str, mult) {
        let arr = str.split(" ")
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            result += +arr[i] * mult[i]
        }
        return result

    }

    return sumPoint(good, goodMult) === sumPoint(evil, evilMult) ? "Battle Result: No victor on this battle field" :
        sumPoint(good, goodMult) > sumPoint(evil, evilMult) ? "Battle Result: Good triumphs over Evil" :
            "Battle Result: Evil eradicates all trace of Good"
}

console.log(goodVsEvil("1 1 1 2 4 5", "5 6 7 4 3 2 1"))

//Multiplication table
//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

multiplicationTable = function (size) {
    function multiple(ind) {
        let res = []
        for (let j = 1; j <= size; j++) {
            res.push(j * ind)
        }
        return res
    }

    let result = []
    for (let i = 1; i <= size; i++) {
        result.push(multiple(i));
    }
    return result
}

console.log(multiplicationTable(3))

//Backspaces in string
//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

function cleanString(s) {
    if (s.length === 0) {
        return ""
    } else {
        while (s.includes("#") && s.length > 0) {
            if (s.indexOf("#") > 0) {
                s = s.slice(0, s.indexOf("#") - 1) + s.slice(s.indexOf("#") + 1)
            } else {
                s = s.slice(1)
            }
        }
        return s
    }
}

console.log(cleanString('abc####d##c#') === "")

//The Vowel Code
//https://www.codewars.com/kata/53697be005f803751e0015aa


function encode(string) {
    let charts = {
        "a": "1",
        "e": "2",
        "i": "3",
        "o": "4",
        "u": "5"
    }
    return string.split("").map(i=>Object.keys(charts).includes(i) ? charts[i] : i).join("")
}

function decode(string) {
    let charts = {
        "1": "a",
        "2": "e",
        "3": "i",
        "4": "o",
        "5": "u"
    }
    return string.split("").map(i=>Object.keys(charts).includes(i) ? charts[i] : i).join("")
}

console.log(decode("Th2 W3nd 3n th2 W3ll4ws"));
console.log(encode("The Wind in the Willows"));


//https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004
//Highest Rank Number in an Array

function highestRank(arr){
    let res={}
    let sortedArr = arr.sort()
    while(sortedArr.length>0) {
        let value = sortedArr[0]
        let prevLength=sortedArr.length
        sortedArr=sortedArr.filter(i=>i!==value)
        if(Object.values(res)[0]<(prevLength-sortedArr.length) || !Object.values(res)[0] ||
            ((Object.values(res)[0]===(prevLength-sortedArr.length)) && value>+Object.keys(res)[0] )) {
            res={[value.toString()]:(prevLength-sortedArr.length)}
        }
    }
    return +Object.keys(res)[0]
}


console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))
