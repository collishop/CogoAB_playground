 
$(document).ready(function () {
  console.log("READY")
//let AB_afhaalDatum = utag_data.order_service_pickup_day;

  const AB_AllDeliveryDates = ["woensdag 19 mei", "donderdag 20 mei", "vrijdag 21 mei", "zaterdag 22 mei", "zondag 23 mei", "maandag 24 mei", "dinsdag 25 mei", "woensdag 26 mei", "donderdag 27 mei", "vrijdag 28 mei", "zaterdag 29 mei", "zondag 30 mei", "maandag 31 mei", "dinsdag 1 juni", "woensdag 2 juni", "donderdag 3 juni", "vrijdag 4 juni", "zaterdag 5 juni", "zondag 6 juni", "maandag 7 juni", "dinsdag 8 juni", "woensdag 9 juni", "donderdag 10 juni", "vrijdag 11 juni", "zaterdag 12 juni", "zondag 13 juni", "maandag 14 juni", "dinsdag 15 juni", "woensdag 16 juni", "donderdag 17 juni", "vrijdag 18 juni", "zaterdag 19 juni", "zondag 20 juni", "maandag 21 juni", "dinsdag 22 juni", "woensdag 23 juni", "donderdag 24 juni", "vrijdag 25 juni", "zaterdag 26 juni", "zondag 27 juni", "maandag 28 juni", "dinsdag 29 juni", "woensdag 30 juni", "donderdag 1 juli", "vrijdag 2 juli", "zaterdag 3 juli", "zondag 4 juli", "maandag 5 juli", "dinsdag 6 juli", "woensdag 7 juli", "donderdag 8 juli", "vrijdag 9 juli", "zaterdag 10 juli", "zondag 11 juli", "maandag 12 juli", "dinsdag 13 juli", "woensdag 14 juli", "donderdag 15 juli", "vrijdag 16 juli", "zaterdag 17 juli", "zondag 18 juli", "maandag 19 juli", "dinsdag 20 juli", "woensdag 21 juli", "donderdag 22 juli", "vrijdag 23 juli", "zaterdag 24 juli", "zondag 25 juli", "maandag 26 juli", "dinsdag 27 juli"];
if( AB_AllDeliveryDates.includes(utag.data.order_service_pickup_day)){
    const ALLServiceCostCarousel = document.getElementsByClassName("servicecost__item");
    const extraServiceColaAanbieding = '<li class="servicecost__item active">' +
      '<a href="/cogo/nl/themadetail/22373" class="servicecost__link">' +
      '<img src="https://i.imgur.com/VP8K5ea.jpg" class="servicecost__image">' +
      '<span class="servicecost__brand">Speciaal voor jou </span><span class="servicecost__quantity">12 flessen Fanta en/of Sprite »</span>' +
      '</a>' +
      '</li>';
    $(ALLServiceCostCarousel[0]).after(extraServiceColaAanbieding);
    $(ALLServiceCostCarousel[4]).removeClass("active");

  }
});
