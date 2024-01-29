//Moving Zeros To The End
//https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
    let arrZero = "0".repeat(arr.length - arr.filter(i => i !== 0).length).split("").map(el => +el)
    return [...arr.filter(i => i !== 0), ...arrZero]
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))

//Simple Pig Latin
//https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
    return str.split(" ").map(i => i !== "!" && i !== "?" ? i.slice(1) + i.slice(0, 1) + "ay" : i).join(" ")
}

console.log(pigIt("dsasdafs dsfsdfdf dsfsdf fdsfsdfssaSa asdsd fdfsd !"))

//Human Readable Time
//https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds - h * 3600) / 60);

    function cor(e) {
        let eStr = e.toString()
        return eStr.length === 1 ? "0" + eStr : eStr
    }

    return `${cor(h)}:${cor(m)}:${cor(seconds - h * 3600 - m * 60)}`
}

console.log(humanReadable(45465))


//Calculating with Functions
//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function zero(arg) {
    return !arg ? 0 : Math.floor(eval(`0
    ${arg}`))
}

function one(arg) {
    return !arg ? 1 : Math.floor(eval(`1
    ${arg}`))
}

function two(arg) {
    return !arg ? 2 : Math.floor(eval(`2
    ${arg}`))
}

function three(arg) {
    return !arg ? 3 : Math.floor(eval(`3
    ${arg}`))
}

function four(arg) {
    return !arg ? 4 : Math.floor(eval(`4
    ${arg}`))
}

function five(arg) {
    return !arg ? 5 : Math.floor(eval(`5
    ${arg}`))
}

function six(arg) {
    return !arg ? 6 : Math.floor(eval(`6
    ${arg}`))
}

function seven(arg) {
    return !arg ? 7 : Math.floor(eval(`7
    ${arg}`))
}

function eight(arg) {
    return !arg ? 8 : Math.floor(eval(`8
    ${arg}`))
}

function nine(arg) {
    return !arg ? 9 : Math.floor(eval(`9
    ${arg}`))
}

function plus(arg) {
    return ` + ${arg}`
}

function minus(arg) {
    return ` - ${arg}`
}

function times(arg) {
    return ` * ${arg}`
}

function dividedBy(arg) {
    return ` / ${arg}`
}

console.log(nine(dividedBy(three())))

//The Hashtag Generator
//https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
    str = str.trim()
    if (str.length === 0) {
        return false
    } else {
        let newStr = str.replace(/\s+/g, ' ')
        let strHash = newStr.split(" ").map(i => i.slice(0, 1).toUpperCase() + i.slice(1)).join("");
        return ("#" + strHash).length > 140 ? false : "#" + strHash
    }
}

console.log(generateHashtag("dfsdfsdfs                       fdsfsdf      sdfs fsdfsdf      sdfdsfsdf sdf sd"))

//First non-repeating character
//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase()
    let letter = "";
    for (let chart of str) {
        if (str.replaceAll(chart, "").length + 1 === str.length) {
            letter = chart;
            break;
        }
    }
    return !letter ? letter : s.includes(letter.toUpperCase()) ? letter.toUpperCase() : letter
}

console.log(firstNonRepeatingLetter("moonmen"))


//Extract the domain name from a URL
//https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
    let rest = url.split("//")[1] ? url.split("//")[1] : url
    console.log(rest)
    let rest2 = rest.startsWith("www.") ? rest.slice(4) : rest
    console.log(rest2)
    return rest2.slice(0, rest2.indexOf("."))
}

console.log(domainName("www.xakep.ru"))

//String incrementer
//https://www.codewars.com/kata/54a91a4883a7de5d7800009

function incrementString(s) {
    let numb = ""
    while (!isNaN(+s.slice(s.length - 1)) && s.length > 0) {
        numb += s.slice(s.length - 1)
        s = s.slice(0, s.length - 1)
    }
    if (numb.length === 0) {
        return s + "1"
    } else {
        let strNumb = (+numb.split("").reverse().join("") + 1).toString()
        if (strNumb.length < numb.length) {
            while (strNumb.length !== numb.length) {
                strNumb = "0" + strNumb
            }
        }
        return s + strNumb
    }
}

console.log(incrementString("1"))

//Not very secure
//https://www.codewars.com/kata/526dbd6c8c0eb53254000110

function alphanumeric(string) {
    let arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\"".split("")
    let len = string.length
    return string ? string.split("").filter(el => arr.includes(el)).length === len : false
}

console.log(alphanumeric("f9unbLfNTwnp6rtky83uGeOrh"))

//Convert PascalCase string into snake_case
//https://www.codewars.com/kata/529b418d533b76924600085d


function toUnderscore(string) {
    let res = ""
    string = string.slice(0, 1).toLowerCase() + string.slice(1)
    for (let chart of string) {
        res = (isNaN(parseInt(chart)) && chart.toUpperCase()) === chart ? res + "_" + chart.toLowerCase() : res + chart
    }
    return res
}

console.log(toUnderscore("hello_world"))

//Pete, the baker
//https://www.codewars.com/kata/525c65e51bf619685c000059
function cakes(recipe, available) {
    if (Object.keys(recipe).every(el => available[el])) {
        let arr = []
        for (const keys in recipe) {
            arr.push(Math.floor(available[keys] / recipe[keys]))
        }
        return Math.min(...arr)
    } else return 0
}

console.log(cakes({flour: 300, sugar: 150, milk: 100}, {sugar: 500, flour: 2000, milk: 2000, apples: 3, oil: 100}))


//Human readable duration format
//https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(s) {
    if (s === 0) {
        return "now"
    } else {
        let years=Math.floor(s/(365*24*3600));
        let days = Math.floor((s-years*365*24*3600)/(24*3600));
        let hours = Math.floor((s - years*365*24*3600 - days*24*3600)/3600);
        let minutes = Math.floor((s - years*365*24*3600 - days*24*3600 - hours*3600)/60);
        let seconds = s - years*365*24*3600 - days*24*3600 - hours*3600 - minutes*60
        years = years>1 ? `${years} years, ` : years===1 ? "1 year, " : ""
        days = days>1 ? `${days} days, ` : days===1 ? "1 day, " : ""
        hours = hours>1 ? `${hours} hours, ` : hours===1 ? "1 hour, " : ""
        minutes = minutes>1 ? `${minutes} minutes and ` : minutes===1 ? "1 minute and " : ""
        seconds = seconds>1 ? `${seconds} seconds` : seconds===1 ? "1 second" : ""
        let arr = [years, days, hours, minutes, seconds]
        arr = arr.map((i,index)=> arr.slice(index+1).every(el=>el==="") && index<3 ?
            i.slice(0,i.length-2) : arr.slice(index+1).every(el=>el==="") && index===3 ? i.slice(0,i.length-5) : i)
        arr = arr.map((el,index)=>index<4 &&  arr.slice(index+1).filter(i=>i !== "").length === 1
        && arr.slice(0,index).filter(i=>i !== "").length > 0
            ? el.replace(", "," and ") : el)

        return arr[0]+arr[1]+arr[2]+arr[3]+arr[4]
    }
}

console.log(formatDuration(120))
