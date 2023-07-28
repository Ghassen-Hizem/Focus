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

  let updating;

  function onUpdated(tab) {
    console.log(`Updated tab: ${tab.id}`);
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
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


 browser.tabs.onUpdated.addListener(handleCreated);

