

$(document).ready(function(){
const XTplaceOfLiving = XTRA.user.zip._value;

const XTpickupPlace = document.getElementsByClassName("c-basket-location-slot__address")[2].innerHTML.replace(/\D/g,'');;
const XTpossiblePickupPlaces = ["1500", "1501", "1502", "8000", "8200", "8310", "9000", "9030", "9031", "9032", "9040", "9041", "9050", "9051", "2170", "2060", "2900", "2110", "2180", "2930", "2160", "2050", "2940", "2030", "2970", "2950", "2520", "2960"];
  const XTavailablePickupPost = ["1500", "8200", "8000", "8310", "9000", "9050", "9051", "9040", "9032", "2170"];

if (XTavailablePickupPost.includes(XTpickupPlace) && XTpossiblePickupPlaces.includes(XTplaceOfLiving)) {
  console.log("first check true");
  XTopenQualifioForm();
  XTaddTheDropdownLink();
}

});
function XTopenQualifioForm(){
  const XTreservatieBlock = document.getElementsByClassName("order-info__bottom")[0];
  XTreservatieBlock.setAttribute("id", "Above_XTqualifioContainer");
  console.log(XTreservatieBlock);
  const XTqualifioElement = '<section id="XTqualifioContainer"><picture><img src="https://i.imgur.com/0lcxkwp.jpg80"></picture><div id="qualifio_insert_place_941810" class="qualifio_iframe_wrapper"></div></section>';

  $(XTreservatieBlock).after(XTqualifioElement);
}
function XTaddTheDropdownLink(){
  const XTorderContainer = document.getElementsByClassName('order-result-text')[0];
  const XTanchorLinkToQualifio = '<a id="XTanchorLinkQualifio" href="#Above_XTqualifioContainer">Faites livrer votre réservation chez vous</a>';
  $(XTorderContainer).after(XTanchorLinkToQualifio);

}
(function(b,o,n,u,s){var a,t;a=b.createElement(u);a.async=1;a.src=s;t=b.getElementsByTagName(u)[0];t.parentNode.insertBefore(a,t);o[n]=o[n]||[]}) (document,window,'_qual_async','script','https://files.qualifio.com/kit/qualp.2.min.js');
_qual_async.push(['createIframe','qualifio_insert_place_941810','colruyt.qualifioapp.com','20','5F844B8D-49EE-408D-8226-CACB90D7F5D2','100%','1200','','','','max-width:810px;margin:0 auto;']);



// Faites livrer votre réservation chez vous

// Laat je reservatie aan huis leveren