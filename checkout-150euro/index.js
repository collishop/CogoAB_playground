//* Req. Als de aankoop prijs boven de 150 euro is, dan willen we een actie laten zien. Anders tonen we niets.

//.basket-total-item__price s-total
const XTcurrentPrice = document.getElementsByClassName("s-total")[0].innerHTML;
const XTcurrentPriceParsed = parseInt(XTcurrentPrice);

$(document).ready(function(){
  const XTcurrentPrice = document.getElementsByClassName("s-total")[0].innerHTML;
  
  const XTbasketTotalItems = document.getElementsByClassName("basket-total-items")[0];

  const XTnewContent = '<div style="background-color: #77C6FF; border: 1px solid #77C6FF; border-radius: 3px;" class="l-grid">'+
  '<div class="l-grid__item --col-xs-1 --col-sm-1 --col-xl-1 u-my-10">'+
  '<img loading="lazy" src="/cogoecomwcs/static/efood/permanent/support/tip-icon.png" style="max-width: 35px;">'+
  '</div>'+
  '<div class="l-grid__item --col-xs-11 --col-sm-11 --col-xl-11 u-my-20">'+
  '<p style="color: #fff; margin-left: 10px;">Les frais de service (5,95 €) Wajo een actie vanaf 150! </p>'+
  '</div>'+
  '</div>';

  if(XTcurrentPriceParsed >= 150 ){
   XTbasketTotalItems.insertAdjacentHTML("afterend", XTnewContent);
  }
  else{
    // do nothing
  }
});
