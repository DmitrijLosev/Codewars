//Human readable duration format
//https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(s) {
    if (s === 0) {
        return "now"
    } else {
        let years = Math.floor(s / (365 * 24 * 3600));
        let days = Math.floor((s - years * 365 * 24 * 3600) / (24 * 3600));
        let hours = Math.floor((s - years * 365 * 24 * 3600 - days * 24 * 3600) / 3600);
        let minutes = Math.floor((s - years * 365 * 24 * 3600 - days * 24 * 3600 - hours * 3600) / 60);
        let seconds = s - years * 365 * 24 * 3600 - days * 24 * 3600 - hours * 3600 - minutes * 60
        years = years > 1 ? `${years} years, ` : years === 1 ? "1 year, " : ""
        days = days > 1 ? `${days} days, ` : days === 1 ? "1 day, " : ""
        hours = hours > 1 ? `${hours} hours, ` : hours === 1 ? "1 hour, " : ""
        minutes = minutes > 1 ? `${minutes} minutes and ` : minutes === 1 ? "1 minute and " : ""
        seconds = seconds > 1 ? `${seconds} seconds` : seconds === 1 ? "1 second" : ""
        let arr = [years, days, hours, minutes, seconds]
        arr = arr.map((i, index) => arr.slice(index + 1).every(el => el === "") && index < 3 ?
            i.slice(0, i.length - 2) : arr.slice(index + 1).every(el => el === "") && index === 3 ? i.slice(0, i.length - 5) : i)
        arr = arr.map((el, index) => index < 4 && arr.slice(index + 1).filter(i => i !== "").length === 1
        && arr.slice(0, index).filter(i => i !== "").length > 0
            ? el.replace(", ", " and ") : el)

        return arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
    }
}

console.log(formatDuration(120))


//Sum of Intervals
//https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
    console.log(intervals)
    let int = []
    intervals.forEach(i => int.push(...i))
    for (let i = 0; i < int.length - 1; i++) {

        if (int[i] >= int[i + 1] && int[i] !== "") {
            let x = 1;
            while (int[i] >= int[i + x] && i + x < int.length) {
                int[i + x] = ""
                x += 1
            }
            if (i + x !== int.length && x % 2 !== 1) {
                int[i] = ""
            }
        }
    }
    int = int.filter(el => el !== "")
    let res = 0
    let arr = []
    for (let i = 0; i < int.length; i++) {
        if (i % 2 === 0) {
            res -= int[i]
        } else {
            res += int[i]
            arr.push(res)
            res = 0
        }
    }
    return arr.reduce((a, b) => a + Math.abs(b))
}

console.log(sumIntervals(
    [[-14, -12], [-8, -2], [-2, 6], [-1, 0], [11, 12]]
))

//Sum Strings as Numbers
//https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a, b) {
    return (+a + (+b)) > Number.MAX_SAFE_INTEGER ? (BigInt(a) + BigInt(b)).toString() : (+a + (+b)).toString()
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))

//Smallest possible sum
//https://www.codewars.com/kata/52f677797c461daaf7000740
function solution1(num) {
    function correct(arr) {
        const maxInd = arr.indexOf(Math.max(...arr));
        let leftNeighbor = maxInd > 0 ? arr[maxInd - 1] : 0;
        let rightNeighbor = maxInd < arr.length - 1 ? arr[maxInd + 1] : 0;
        let el = Math.max(leftNeighbor, rightNeighbor);
        arr[maxInd] -= el;
        return arr;
    }

    let array = num;
    let first = array[0];
    while (!array.every(el => el === first) && !(array.filter(el => el !== 0).length === 1)) {
        array = correct(array);
        first = array[0];
    }
    return array.reduce((a, b) => a + b);
}

console.log(solution1([3, 13, 23, 7, 83]))

//Range Extraction
//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
function solution2(list) {
    let str = '';
    let arr = []
    while (list.length > 0) {
        if (list[0] + 1 === list[1]) {
            arr.push(list[0])
            list = list.slice(1)
        } else {
            if (arr.length > 0 && arr[arr.length - 1] + 1 === list[0]) {
                arr.push(list[0])
                list = list.slice(1)
                if (arr.length < 3 && arr.length > 0) {
                    str = str + arr.join(",") + ","
                    arr = []
                }
                if (arr.length > 0) {
                    str = str + arr[0] + "-" + arr[arr.length - 1] + ","
                    arr = []
                }
            } else {
                if (arr.length < 3 && arr.length > 0) {
                    str = str + arr.join(",") + ","
                    arr = []
                }
                if (arr.length > 0) {
                    str = str + arr[0] + "-" + arr[arr.length - 1] + ","
                    arr = []
                }

                str = str + list[0] + ","
                list = list.slice(1)
            }
        }
    }
    return str.slice(0, str.length - 1)
}

console.log(solution2([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

//Strip Comments
//https://www.codewars.com/kata/51c8e37cee245da6b40000bd

function solution(text, markers) {

    function corr(str) {
        if (markers.length > 0) {
            markers.forEach(marker => {
                if (str.indexOf(marker) === 0) {
                    str = ""
                } else {
                    while (str.indexOf(marker) > 0) {
                        str = str.slice(0, str.indexOf(marker))
                    }
                }
            });
        }
        return str
    }

    return text.split("\n").map(s => corr(s).replace(/\s+$/, "")).join("\n")
}


console.log(solution("#aa bb\ncc dd", ["#"]))

//Next bigger number with the same digits
//https://www.codewars.com/kata/55983863da40caa2c900004e

function nextBigger(n) {
    let arr = n.toString().split("");
    if (arr.length === 1 || Array.from(new Set(arr)).length === 1) {
        return -1;
    } else {
        for (let i = 2; i <= arr.length; i++) {
            let newArr = arr.slice(arr.length - i).map(el => +el);
            let repArr = newArr.slice(1).filter(el => el > newArr[0]);
            if (repArr.length >= 1) {
                let min = Math.min(...repArr);
                let minIndex = newArr.indexOf(min);
                [newArr[0], newArr[minIndex]] = [newArr[minIndex], newArr[0]];
                newArr = [newArr[0], ...newArr.slice(1).sort((a, b) => a - b)];
                if (+arr.slice(0, arr.length - i).concat(newArr.map(el => el.toString())).join("") > n) {
                    arr = arr.slice(0, arr.length - i).concat(newArr.map(el => el.toString()));
                    break;
                }
            }
        }
        return +arr.join("") === n ? -1 : +arr.join("");
    }
}

console.log(nextBigger(1234321))

//Snail
//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function(array) {
    if (array.length === 1 && array[0].length===0) {return []}
    else {
        let resArr = [];
        function cut() {
            const arr=[]
            if(!array.every(ar=>ar.length===0)) {
                resArr.push(...array.shift())
            }
            if(!array.every(ar=>ar.length===0)) {
                array.forEach(ar=> {
                    resArr.push(ar.pop())
                })
            }
            if(!array.every(ar=>ar.length===0)) {
                resArr.push(...array.pop().reverse())
            }
            if(!array.every(ar=>ar.length===0)) {
                array.forEach(ar=>{
                    arr.push(ar.shift())
                })
                resArr.push(...arr.reverse())
            }
        }
        while(array.length!==0){
            cut()
        }
        return resArr
    }
}
console.log(snail([[1,2,3,1],[4,5,6,4],[7,8,9,7],[7,8,9,7]]))
console.log(snail([[1]]))

//Adding Big Numbers
//https://www.codewars.com/kata/525f4206b73515bffb000b21

function add(a, b) {
    let arrA;
    let arrB;
    if(a.length > b.length){
        arrA = a.split('')
        arrB = b.split('')
    } else {
        arrA = b.split('')
        arrB = a.split('')
    }
    let newArr = arrA.slice(0, arrA.length-arrB.length)
    arrA = arrA.slice(arrA.length-arrB.length)
let sumArr = arrA.map((el,index,arr)=>(+arr[index]+(+arrB[index])).toString())
    let resArr = [...newArr,...sumArr]
    let counter = 0
    let res = ''
    for (let i = resArr.length-1; i >=0; i--) {

        if((+resArr[i]+counter).toString().length===1) {

            res = (+resArr[i]+counter).toString() + res
        counter = 0
        }
     else {
        res = (+resArr[i]+counter).toString().slice(1) + res
        counter=1
    }
    }
    if(counter === 1) {
        return "1"+res
    } else { return res}

}

console.log(add("123", "456"))