//* AHL Qualifio
//? Omschrijving: Een qualifio bevraging moet komen als de klant evt zijn besteling kan leveren aan huis door mensen in de omgeving.
//?
//- REQ. 1. Klanten mogen de qualifio ENKEL zien als ze de juiste postcode (OF Afhaalpunt) hebben gekozen.
//- 2. Klant mag na het invullen ook NIET de gegevens onder de enquete zien staan => levering
//- 3.




$(document).ready(function(){
  const XTreservatieBlock = document.getElementsByClassName("order-info__top")[0];
  console.log(XTreservatieBlock);
  const XTqualifioElement = '<section id="XTqualifioContainer"><picture><img src="https://i.imgur.com/0lcxkwp.jpg"></picture><div id="qualifio_insert_place_932081" class="qualifio_iframe_wrapper"></div></section>';

  $(XTreservatieBlock).after(XTqualifioElement);

});
