$(document).ready(function () {
  const XTsearchFieldInput = document.getElementsByClassName('c-header__search-input')[1];
  console.log(XTsearchFieldInput);
  XTsearchFieldInput.addEventListener('input', updateInputValue);

  function addNewLine() {
    setTimeout(function () {
      const XTchipsContent = '<li class="c-header__search-suggestions-product">' +
        '  <a class="c-header__search-suggestions-item" href="https://beta.collectandgo.be/colruyt/nl/zoek?searchTerm=chips&amp;autocomplete=true">' +
        '    <span class="c-header__search-suggestions-item-keyword">Extra</span> Line added' +
        '  </a>' +
        '  <div class="c-header__search-suggestions-append" data-search-product="chips">' +
        '    <svg viewBox="0 0 1000 1000" class="c-header__search-suggestions-arrow">' +
        '      <g>' +
        '        <g transform="translate(0.000000,509.000000) scale(0.100000,-0.100000)">' +
        '          <path' +
        '            d="M103.8,814.4c5.7-3970.7,7.7-4146.9,40.2-4248.4c107.3-319.9,318-588,578.5-741.3c641.7-377.3,1480.6-124.5,1792.8,540.2c128.3,272,120.7,143.7,132.2,2311.9l9.6,1967.1L5231.4-1917C6646.9-3324.8,7846-4506.6,7893.8-4543c114.9-84.3,289.2-164.7,432.9-203c149.4-38.3,463.5-40.2,612.9,0c434.8,111.1,779.6,440.5,913.7,871.5c67.1,218.4,61.3,524.8-13.4,745.1c-30.6,88.1-95.8,222.2-145.6,296.9c-67.1,103.4-704.9,750.8-2645.2,2687.3L4492,2406.1l1946.1,7.7c2172.1,5.8,2018.8-3.8,2319.6,143.7c210.7,103.4,446.3,339,553.6,559.3c182,371.6,182,758.5,0,1130.1c-107.3,218.3-341,455.9-553.6,559.3c-306.5,151.3,99.6,137.9-4526.1,143.7L100,4955.5L103.8,814.4z">' +
        '          </path>' +
        '        </g>' +
        '      </g>' +
        '    </svg>' +
        '  </div>' +
        '</li>';
      const XTfirstLineInSearchOutput = document.getElementsByClassName('c-header__search-suggestions-list')[1];
      XTfirstLineInSearchOutput.insertAdjacentHTML("afterbegin", XTchipsContent);
    }, 700);
  }

  function updateInputValue(e) {
    //console.log(e.target.value);

    const XTstaticSearchTermsArray = ["chi", "chip", "chips", "mel", "melk"];
    const XTstaticSearchTermsArrayChips = ["chi", "chip", "chips"];
    if (XTstaticSearchTermsArray.includes(e.target.value.toLowerCase())) {
      console.log('included');
      if (XTstaticSearchTermsArrayChips.includes(e.target.value.toLowerCase())) {
        const XTfirstLineInSearchOutput = document.getElementsByClassName('c-header__search-suggestions-list')[1];
        console.log(XTfirstLineInSearchOutput);
        //XTfirstLineInSearchOutput.append(XTchipsContent);
        addNewLine();
      }
    } else {
      // delete the extra rows
    }
    return
  }
});



//- REQ Als er chi of chips wordt ingetypt, dan moeten er extra lijntjes komen in het zoekscherm
//- Ik moet input registeren in mijn functie
//- Ik heb een functie nodig die nieuwe input toevoegd
//- Ik heb een functie nodig die ook alles weer weg kan doen
//? Meer?