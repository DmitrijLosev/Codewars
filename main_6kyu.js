//Replace With Alphabet Position
//https://www.codewars.com/kata/546f922b54af40e1e90001da
function alphabetPosition(text) {
    let alph="abcdefghijklmnopqrstuvwxyz"
    return text.toLowerCase().replace(/[^a-z]/g, '').split("")
        .map(i=>(alph.indexOf(i)+1).toString()).join(" ");
}

console.log(alphabetPosition("xxx DDD dfksjgkldjgkdj gksfjgkfdjglkjg;l gkfdsjgklsfdj][E[WQKALFSD;SJB"))

//Find the missing letter
//https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
    let str=array.join("")
    let chart=""
    for (let i=0; i < str.length; i++) {
        if(str.charCodeAt(i+1)-str.charCodeAt(i) !== 1) {
            chart=String.fromCharCode(str.charCodeAt(i)+1)
            break
        }
    }
    return  chart
}

console.log(findMissingLetter(["a","c","d"]))