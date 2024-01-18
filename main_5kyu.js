//Moving Zeros To The End
//https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
    let arrZero="0".repeat(arr.length-arr.filter(i=>i!==0).length).split("").map(el=>+el)
    return [...arr.filter(i=>i!==0),...arrZero]
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

//Simple Pig Latin
//https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str){
    return str.split(" ").map(i=>i!=="!" && i!=="?" ? i.slice(1)+i.slice(0,1)+"ay": i).join(" ")
}

console.log(pigIt("dsasdafs dsfsdfdf dsfsdf fdsfsdfssaSa asdsd fdfsd !"))

//Human Readable Time
//https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable (seconds) {
    let h=Math.floor(seconds / 3600);
    let m=Math.floor((seconds - h * 3600) / 60);
    function cor(e) {
        let eStr=e.toString()
        return eStr.length===1 ?  "0"+eStr : eStr
    }
    return `${cor(h)}:${cor(m)}:${cor(seconds-h*3600-m*60)}`
}

console.log(humanReadable (45465))


//Calculating with Functions
//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(arg) {return !arg? 0 : Math.floor( eval(`0${arg}`))}
function one(arg) {return !arg? 1 : Math.floor( eval(`1${arg}`))}
function two(arg) {return !arg? 2 : Math.floor( eval(`2${arg}`))}
function three(arg) {return !arg ? 3 : Math.floor( eval(`3${arg}`))}
function four(arg) {return !arg? 4 : Math.floor( eval(`4${arg}`))}
function five(arg) {return !arg? 5 : Math.floor( eval(`5${arg}`))}
function six(arg) {return !arg? 6 : Math.floor( eval(`6${arg}`))}
function seven(arg) {return !arg? 7 : Math.floor( eval(`7${arg}`))}
function eight(arg) {return !arg? 8 : Math.floor( eval(`8${arg}`))}
function nine(arg) {return !arg? 9 : Math.floor( eval(`9${arg}`))}

function plus(arg) {return ` + ${arg}`}
function minus(arg) { return ` - ${arg}`}
function times(arg) { return ` * ${arg}`}
function dividedBy(arg) {return ` / ${arg}`}

console.log(nine(dividedBy(three())))

//The Hashtag Generator
//https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
    str=str.trim()
    if (str.length===0) {return false} else {
        let newStr = str.replace(/\s+/g, ' ')
        let strHash=newStr.split(" ").map(i=>i.slice(0,1).toUpperCase()+i.slice(1)).join("");
        return ("#"+strHash).length>140 ? false : "#"+strHash
    }
}
console.log(generateHashtag ("dfsdfsdfs                       fdsfsdf      sdfs fsdfsdf      sdfdsfsdf sdf sd"))