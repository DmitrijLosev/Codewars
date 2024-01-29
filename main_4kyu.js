
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
