if(localStorage.getItem("Timer") == null) {
    localStorage.setItem("Timer", 0);
}
let a;
window.addEventListener("storage", () => {

  
    if(localStorage.getItem("State")=="Flow"){
        a = setInterval(()=> {
            localStorage.setItem("Timer", Number(localStorage.getItem("Timer"))+1);
        },1000)
    }
    else {
        clearInterval(a);
        a= null;
    }
  })

