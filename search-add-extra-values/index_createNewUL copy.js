$(document).ready(function () {
  const XTextraUl = '<ul id="newSearchResults" class="c-header__search-suggestions-list"></ul>';
  document.getElementsByClassName("c-header__search-suggestions-list")[1].insertAdjacentHTML("afterend", XTextraUl);

  const XTsearchFieldInput = document.getElementsByClassName("c-header__search-input")[1];
  XTsearchFieldInput.addEventListener("input", updateInputValue);

  function updateInputValue(e) {
    const XTstaticSearchTermsArray = ["chi", "chip", "chips", "mel", "melk"];
    const XTstaticSearchTermsArrayChips = ["chi", "chip", "chips"];
    if (XTstaticSearchTermsArray.includes(e.target.value.toLowerCase())) {
      if (XTstaticSearchTermsArrayChips.includes(e.target.value.toLowerCase())) {
        removeOldLines();
        addNewLine();
      }
    } else {
      removeOldLines();
    }
  }

  function addNewLine() {
    const XTchipsContent =
      '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" href="https://beta.collectandgo.be/colruyt/nl/zoek?searchTerm=chips&amp;autocomplete=true">' +
      '    <span class="c-header__search-suggestions-item-keyword">chips</span> paprika' +
      "  </a>" +
      '  <div class="c-header__search-suggestions-append" data-search-product="chips">' +
      '    <svg viewBox="0 0 1000 1000" class="c-header__search-suggestions-arrow">' +
      "      <g>" +
      '        <g transform="translate(0.000000,509.000000) scale(0.100000,-0.100000)">' +
      "          <path" +
      '            d="M103.8,814.4c5.7-3970.7,7.7-4146.9,40.2-4248.4c107.3-319.9,318-588,578.5-741.3c641.7-377.3,1480.6-124.5,1792.8,540.2c128.3,272,120.7,143.7,132.2,2311.9l9.6,1967.1L5231.4-1917C6646.9-3324.8,7846-4506.6,7893.8-4543c114.9-84.3,289.2-164.7,432.9-203c149.4-38.3,463.5-40.2,612.9,0c434.8,111.1,779.6,440.5,913.7,871.5c67.1,218.4,61.3,524.8-13.4,745.1c-30.6,88.1-95.8,222.2-145.6,296.9c-67.1,103.4-704.9,750.8-2645.2,2687.3L4492,2406.1l1946.1,7.7c2172.1,5.8,2018.8-3.8,2319.6,143.7c210.7,103.4,446.3,339,553.6,559.3c182,371.6,182,758.5,0,1130.1c-107.3,218.3-341,455.9-553.6,559.3c-306.5,151.3,99.6,137.9-4526.1,143.7L100,4955.5L103.8,814.4z">' +
      "          </path>" +
      "        </g>" +
      "      </g>" +
      "    </svg>" +
      "  </div>" +
      "</li>" +
      '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" href="https://beta.collectandgo.be/colruyt/nl/zoek?searchTerm=chips&amp;autocomplete=true">' +
      '    <span class="c-header__search-suggestions-item-keyword">chips</span> zout' +
      "  </a>" +
      '  <div class="c-header__search-suggestions-append" data-search-product="chips">' +
      '    <svg viewBox="0 0 1000 1000" class="c-header__search-suggestions-arrow">' +
      "      <g>" +
      '        <g transform="translate(0.000000,509.000000) scale(0.100000,-0.100000)">' +
      "          <path" +
      '            d="M103.8,814.4c5.7-3970.7,7.7-4146.9,40.2-4248.4c107.3-319.9,318-588,578.5-741.3c641.7-377.3,1480.6-124.5,1792.8,540.2c128.3,272,120.7,143.7,132.2,2311.9l9.6,1967.1L5231.4-1917C6646.9-3324.8,7846-4506.6,7893.8-4543c114.9-84.3,289.2-164.7,432.9-203c149.4-38.3,463.5-40.2,612.9,0c434.8,111.1,779.6,440.5,913.7,871.5c67.1,218.4,61.3,524.8-13.4,745.1c-30.6,88.1-95.8,222.2-145.6,296.9c-67.1,103.4-704.9,750.8-2645.2,2687.3L4492,2406.1l1946.1,7.7c2172.1,5.8,2018.8-3.8,2319.6,143.7c210.7,103.4,446.3,339,553.6,559.3c182,371.6,182,758.5,0,1130.1c-107.3,218.3-341,455.9-553.6,559.3c-306.5,151.3,99.6,137.9-4526.1,143.7L100,4955.5L103.8,814.4z">' +
      "          </path>" +
      "        </g>" +
      "      </g>" +
      "    </svg>" +
      "  </div>" +
      "</li>" +
      '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" href="https://beta.collectandgo.be/colruyt/nl/zoek?searchTerm=chips&amp;autocomplete=true">' +
      '    <span class="c-header__search-suggestions-item-keyword">chips</span> peper & zout' +
      "  </a>" +
      '  <div class="c-header__search-suggestions-append" data-search-product="chips">' +
      '    <svg viewBox="0 0 1000 1000" class="c-header__search-suggestions-arrow">' +
      "      <g>" +
      '        <g transform="translate(0.000000,509.000000) scale(0.100000,-0.100000)">' +
      "          <path" +
      '            d="M103.8,814.4c5.7-3970.7,7.7-4146.9,40.2-4248.4c107.3-319.9,318-588,578.5-741.3c641.7-377.3,1480.6-124.5,1792.8,540.2c128.3,272,120.7,143.7,132.2,2311.9l9.6,1967.1L5231.4-1917C6646.9-3324.8,7846-4506.6,7893.8-4543c114.9-84.3,289.2-164.7,432.9-203c149.4-38.3,463.5-40.2,612.9,0c434.8,111.1,779.6,440.5,913.7,871.5c67.1,218.4,61.3,524.8-13.4,745.1c-30.6,88.1-95.8,222.2-145.6,296.9c-67.1,103.4-704.9,750.8-2645.2,2687.3L4492,2406.1l1946.1,7.7c2172.1,5.8,2018.8-3.8,2319.6,143.7c210.7,103.4,446.3,339,553.6,559.3c182,371.6,182,758.5,0,1130.1c-107.3,218.3-341,455.9-553.6,559.3c-306.5,151.3,99.6,137.9-4526.1,143.7L100,4955.5L103.8,814.4z">' +
      "          </path>" +
      "        </g>" +
      "      </g>" +
      "    </svg>" +
      "  </div>" +
      "</li>" +
      '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" href="https://beta.collectandgo.be/colruyt/nl/zoek?searchTerm=chips&amp;autocomplete=true">' +
      '    <span class="c-header__search-suggestions-item-keyword">chips</span> pickles' +
      "  </a>" +
      '  <div class="c-header__search-suggestions-append" data-search-product="chips">' +
      '    <svg viewBox="0 0 1000 1000" class="c-header__search-suggestions-arrow">' +
      "      <g>" +
      '        <g transform="translate(0.000000,509.000000) scale(0.100000,-0.100000)">' +
      "          <path" +
      '            d="M103.8,814.4c5.7-3970.7,7.7-4146.9,40.2-4248.4c107.3-319.9,318-588,578.5-741.3c641.7-377.3,1480.6-124.5,1792.8,540.2c128.3,272,120.7,143.7,132.2,2311.9l9.6,1967.1L5231.4-1917C6646.9-3324.8,7846-4506.6,7893.8-4543c114.9-84.3,289.2-164.7,432.9-203c149.4-38.3,463.5-40.2,612.9,0c434.8,111.1,779.6,440.5,913.7,871.5c67.1,218.4,61.3,524.8-13.4,745.1c-30.6,88.1-95.8,222.2-145.6,296.9c-67.1,103.4-704.9,750.8-2645.2,2687.3L4492,2406.1l1946.1,7.7c2172.1,5.8,2018.8-3.8,2319.6,143.7c210.7,103.4,446.3,339,553.6,559.3c182,371.6,182,758.5,0,1130.1c-107.3,218.3-341,455.9-553.6,559.3c-306.5,151.3,99.6,137.9-4526.1,143.7L100,4955.5L103.8,814.4z">' +
      "          </path>" +
      "        </g>" +
      "      </g>" +
      "    </svg>" +
      "  </div>" +
      "</li>";

    const XTfirstLineInSearchOutput = document.getElementById("newSearchResults");
    XTfirstLineInSearchOutput.insertAdjacentHTML("afterbegin", XTchipsContent);
    let newSearchResultsChilds = document.getElementsByClassName("c-header__search-suggestions-list")[1].childElementCount;
    XTfirstLineInSearchOutput.style.top = "calc(100% + " + 29 * newSearchResultsChilds + "px)";
  }

  function removeOldLines() {
    console.log("remove is a go");
    document.getElementById("newSearchResults").innerHTML = "";
    document.getElementById("newSearchResults").style.top = "100%";
    console.log("Style should be 100%");
  }
});

//- REQ Als er chi of chips wordt ingetypt, dan moeten er extra lijntjes komen in het zoekscherm
//- Ik moet input registeren in mijn functie
//- Ik heb een functie nodig die nieuwe input toevoegd
//- Ik heb een functie nodig die ook alles weer weg kan doen
//? Meer?
