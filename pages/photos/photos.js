/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";

/**I
 * Imports
 */

import { client } from "../../js/api_configure.js";
import { gridInit, updateGrid } from "../../js/utils/masonry_grid.js";
import { photoCard } from "../../js/photo_card.js";
import { updateUrl } from "../../js/utils/updateUrl.js";
import { urlDecode } from "../../js/utils/urlDecode.js";
import { filter } from "../../js/filter.js";


/**
 * Show filter bar if searched anything
 */

const /**{NodeElement} */ $filterBar = document.querySelector("[data-filter-bar]");

$filterBar.style.display = window.location.search ? "flex" : "none";

/**
 * Filter init
 */

const /* {NodeList} */ $filterWrappers = document.querySelectorAll("[data-filter]");

$filterWrappers.forEach($filterWrapper => {
    filter($filterWrapper, window.filterObj, (newObj) => {
        // console.log(newObj)
        window.filterObj = newObj;
        updateUrl(newObj, "photos");
    });
})


/**
 * Render curated or searched photos
 * If searched something then render searchded photos
 * Otherwise reder curated photos
 */


const /** {NodeElement} */ $photoGrid = document.querySelector("[data-photo-grid]");

const /** {NodeElement} */ $title = document.querySelector("[data-title]");

const /** {object} */ photoGrid = gridInit($photoGrid);

const /** {Number} */ perPage = 30;
let /** {Number} */ currentPage = 1;
let /** {number} */ totalPage = 0;
const /** {String} */ searchUrl = window.location.search.slice(1);

let /** {Object} */ searchObj = searchUrl && urlDecode(searchUrl);

const /** {String} */ title = searchObj ? `${searchObj.query} photos` : "Curated photos";


$title.textContent = title;
document.title = title;




/**
 * Render All photos
 * @param {Number} currentPage Current page number
 */

const renderPhotos = function (currentPage) {

    client.photos[searchObj ? "search" : "curated"]({ ...searchObj, per_page: perPage, page: currentPage }, data => {
        console.log(data)

        totalPage = Math.ceil(data.total_results / perPage);

        data.photos.forEach(photo => {
            const /** {NodeElement} */ $photoCard = photoCard(photo);

            updateGrid($photoCard, photoGrid.columnsHeight, photoGrid.$columns);
        });
        isLoaded = true;
        // when no more photo found , hide loader

        if (currentPage >= totalPage) $loader.style.display = "none";
    });


    // when photos loaded

}

renderPhotos(currentPage);


/** laod More Photos */

const /** {NodeElement} */ $loader = document.querySelector("[data-loader]");

let /** {Boolean} */ isLoaded = true;

window.addEventListener("scroll", function () {
    // console.log($loader.getBoundingClientRect().top);
    console.log($loader.getBoundingClientRect().top, this.innerHeight * 2)
    if ($loader.getBoundingClientRect().top < this.innerHeight * 2 && currentPage <= totalPage && isLoaded) {
        console.log("fetching...")
        currentPage++;
        renderPhotos(currentPage);
        isLoaded = false;
    }
})