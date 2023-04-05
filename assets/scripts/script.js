let utc = document.getElementById("UTC_Time")
let mmr = document.getElementById("mmrTime")
let local = document.getElementById("localTime")

setInterval(() => {
    let d = new Date();
    utc.innerHTML = d.toUTCString("en-US",{timeStyle:'medium'});
    mmr.innerHTML = d.toLocaleTimeString("en-US",{timeZone:'Asia/Yangon',timeStyle:'medium'});
},1000)