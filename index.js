if(localStorage.getItem("State")=="Flow"){
    document.getElementById("focus").innerHTML = "Work in progress";
}
else {
    document.getElementById("focus").innerHTML = "Start Flow State";
}


document.getElementById("focus").addEventListener("click", () => {
    if(document.getElementById("focus").innerHTML == "Start Flow State") {
        document.getElementById("focus").innerHTML = "Work in progress";
        localStorage.setItem("State", "Flow");
        console.log(localStorage.getItem("State"));
    }
    else {
        document.getElementById("focus").innerHTML = "Start Flow State";
        localStorage.setItem("State", "Normal");
        console.log(localStorage.getItem("State"));
    }
    
})


