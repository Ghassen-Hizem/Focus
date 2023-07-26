if(localStorage.getItem("Timer") == null) {
    localStorage.setItem("Timer", 0);
}
let Counter = new Date(Number(localStorage.getItem("Timer")) * 1000).toISOString().slice(11, 19);

let div = document.createElement("div");
div.innerHTML = Counter;
div.style.fontSize="30px"
document.getElementById("primary-box").append(div);

//verifying the current state and updating the DOM 

if(localStorage.getItem("State")=="Flow"){
    document.getElementById("focus").innerHTML = "Work in progress";
}
else {
    document.getElementById("focus").innerHTML = "Start Flow State";
    localStorage.setItem("Timer",0);
}
let a;
// event listeners for State changes
document.getElementById("focus").addEventListener("click", () => {
    
    if(document.getElementById("focus").innerHTML == "Start Flow State") {
        document.getElementById("focus").innerHTML = "Work in progress";
        localStorage.setItem("State", "Flow");
       // console.log(localStorage.getItem("State"));
       a = setInterval(()=> {
            localStorage.setItem("Timer", Number(localStorage.getItem("Timer"))+1);
            Counter = new Date(Number(localStorage.getItem("Timer")) * 1000).toISOString().slice(11, 19);
            div.innerHTML = Counter;
        },1000)
    }
    else {
        document.getElementById("focus").innerHTML = "Start Flow State";
        localStorage.setItem("State", "Normal");
     //   console.log(localStorage.getItem("State"));
        clearInterval(a);
        a= null;
    }
    
})

