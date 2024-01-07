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

console.log(encrypt("012345",3))



function decrypt(encryptedText, n) {
    if (encryptedText === "" || n <= 0 || encryptedText ===null) {
        return encryptedText;
    } else {
        let arrChart = encryptedText.split("");

        function replaceIndexBack() {
            let mid = arrChart.length%2===0 ? arrChart.length / 2 : Math.floor(arrChart.length / 2)
            let odd = arrChart.slice(0, mid);
            let even = arrChart.slice(mid);
            let arr = [];

            for (let i = 0; i < mid; i++) {
                arr.push(even[i]);
                arr.push(odd[i]);
            }
            if(arrChart.length%2!==0) {arr.push(even[mid])}
            arrChart = arr;
        }

        for (let i = 0; i < n; i++) {
            replaceIndexBack();
        }

        return arrChart.join("");
    }
}

console.log(decrypt("hsi  etTi sats!", 1))