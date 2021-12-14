$(document).ready(function () {
  console.log("ready");

  const allBuyButtons = document.getElementsByClassName("--add");
  
  allBuyButtons[0].addEventListener("click", ThingJustClicked);
  
  
  function ThingJustClicked(){
  alert("smth clicked");
  }
  
  console.log(allBuyButtons);
  allBuyButtons[0].click();
  console.log(allBuyButtons[0]);
  $(allBuyButtons[0]).click();
});
