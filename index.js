let Counter = new Date(Number(localStorage.getItem("Timer")) * 1000).toISOString().slice(11, 19);

let div = document.createElement("div");
div.innerHTML = Counter;
div.style.fontSize="30px"
document.getElementById("primary-box").append(div);

//verifying the current state and updating the DOM 
let a;

if(localStorage.getItem("State")=="Flow"){
    document.getElementById("focus").innerHTML = "Work in progress";
    a = setInterval(()=> {
        Counter = new Date(Number(localStorage.getItem("Timer")) * 1000).toISOString().slice(11, 19);
        div.innerHTML = Counter;
    },1000)
}
else {
    document.getElementById("focus").innerHTML = "Start Flow State";
    localStorage.setItem("Timer",0);
    clearInterval(a);
    a= null;
}

// event listeners for State changes
document.getElementById("focus").addEventListener("click", () => {
    
    if(document.getElementById("focus").innerHTML == "Start Flow State") {
        document.getElementById("focus").innerHTML = "Work in progress";
        localStorage.setItem("State", "Flow");
       a = setInterval(()=> {
            Counter = new Date(Number(localStorage.getItem("Timer")) * 1000).toISOString().slice(11, 19);
            div.innerHTML = Counter;
        },1000)
    }
    else {
        document.getElementById("focus").innerHTML = "Start Flow State";
        localStorage.setItem("State", "Normal");

        clearInterval(a);
        a= null;
    }
    
})

