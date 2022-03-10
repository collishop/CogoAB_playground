$(document).ready(function(){
  const BannerRows = document.querySelectorAll("section.grid-2-small-1")
  $(BannerRows[1]).before($(BannerRows[2]));
  $(BannerRows[3]).before($(BannerRows[1]));
});


$(document).ready(function(){
  const urlParaXT = window.location.search
  if(urlParaXT.includes("xtraUnsub")){
  console.log("xtraUnsub");
  console.log(urlParaXT);
  document.getElementsByClassName("intro__title")[0].style.display = "none";
  console.log("title gone")
  document.getElementsByClassName("intro__text")[0].style.display = "none";
  console.log("text gone")
  //document.getElementsByClassName("intro__text")[0].style.display = "none !important";
  }
  });