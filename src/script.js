const time = document.getElementById("time");
let timer = 0;
setInterval(()=>{
    time.innerHTML = ++timer;
} , 1000)

console.log("hello");