const uspCollectiveXT = document.getElementsByClassName('swiper-slide');
console.log(uspCollectiveXT);
const uspCheckmarkXT = '<?xml version="1.0" encoding="UTF-8"?>' +
  '<svg width="14px" height="11px" viewBox="0 0 14 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
  '    <title>Path</title>' +
  '    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">' +
  '        <g id="299110_check_sign_icon" transform="translate(0.375000, 0.000000)" fill="#ffffff" fill-rule="nonzero">' +
  '            <polygon id="Path" points="10.625 0 4.625 6 2.125 3.5 0 5.6 2.5 8.1 4.5 10.1 4.625 10.2 12.75 2.1"></polygon>' +
  '        </g>' +
  '    </g>' +
  '</svg>';
let i = 0;
uspCollectiveXT.forEach(elementXT => {
  console.log(elementXT);
  i++;
   elementXT.insertAdjacentHTML("afterbegin", uspCheckmarkXT);
  elementXT.setAttribute("id", "XT"+i);
  return;
});
