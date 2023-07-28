// Timer initializing
if(localStorage.getItem("Timer") == null) {
    localStorage.setItem("Timer", 0);
}
//Background Countdown
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

 
  function onUpdated(tab) {
    console.log(`Updated tab: ${tab.id}`);
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  //logic for redirection on social media tabs

 function handleCreated(tabID,changeinfo,tab) {
   // console.log(tab.url);
   if((tab.url == "https://www.facebook.com/") || (tab.url == "https://www.instagram.com/")){
    if((tab.status=="complete") && (localStorage.getItem("State")=="Flow")){
        // window.alert("The Focus State is activated , You will be redirected to another page")
        let updating = browser.tabs.update(tabID,{
            url: "https://google.com"
        });
        updating.then(onUpdated,onError);
    }
       
        
   }
  }

//event for opening a new tab 
 browser.tabs.onUpdated.addListener(handleCreated);

