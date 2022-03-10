const XTheroImage = document.getElementsByClassName("introbox__img-background")[0];

if (XTheroImage.offsetWidth < 450) {
  document.getElementsByClassName("introbox__img-background")[0].setAttribute("src", "https://i.imgur.com/HLuGIf0.jpg");

  document.getElementsByClassName("introbox__text")[0].innerHTML = "Geniet voor afhalingen van 25/8 t.e.m. 7/9 van mooie kortingen op jouw favoriete topmerken.";
  document.getElementsByClassName("introbox__title")[0].innerHTML = "Ontdek het Merkenfestival!";
}

const XTheroImage = document.getElementsByClassName("introbox__img-background")[0];

if (XTheroImage.offsetWidth < 450) {
  document.getElementsByClassName("introbox__img-background")[0].setAttribute("src", "https://i.imgur.com/lkYzgvz.jpg");

  document.getElementsByClassName("introbox__text")[0].innerHTML = "Profitez de belles réductions sur vos marques phares préférées pour tout retrait du 25/8 au 7/9 inclus. ";
  document.getElementsByClassName("introbox__title")[0].innerHTML = "À vos marques !";
}

{
  /* <div class="l-grid">
    	<div class="l-grid__item">
        	<span class="u-font-size-h2">Deze producten scoor je aan straffe kortingen!</span>
        </div>
    </div>


<div class="l-grid">
    	<div class="l-grid__item ">
        	<span class="u-font-size-h2">Emportez ces produits avec de belles réductions !  </span>
        </div>
    </div> */
}

document.getElementsByClassName("--carousel")[0].setAttribute("data-tms-intpromo-name", "AB_003_carousel");
