/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";

/** 
 * Import
 */
import { menu } from "./menu.js";

/**
 * Add filter funtionality
 * @param {Node} $filterWrapper  Fiter wrapper
 * @param {Object} filterObj filter object
 * @param {Function} callback Callback functions
 */

export const filter = ($filterWrapper, filterObj, callback) => {
    // console.log($filterWrapper);
    const /** {nodeElement} */ $filterClearBtn = $filterWrapper.querySelector("[data-filter-clear]");

    const /** {NodeElement} */ $filterValue = $filterWrapper.querySelector("[data-filter-value]");


    const /** {NodeElement} */ $filterChip = $filterWrapper.querySelector("[data-filter-chip]");
    const /** {NodeElement} */ $filterColorField = $filterWrapper.querySelector("[data-color-field]");

    const /** {string} */ filterKey = $filterWrapper.dataset.filter;

    const /** {Object} */ newObj = filterObj;

    menu($filterWrapper, filterValue => {
        $filterValue.innerText = filterValue;

        $filterChip.classList.add("selected");
        newObj[filterKey] = filterValue;

        callback(newObj);

    });

    $filterClearBtn.addEventListener("click", (e) => {
        e.preventDefault();
        $filterChip.classList.remove("selected");
        $filterValue.innerText = $filterValue.dataset.filterValue;

        delete newObj[filterKey];
        callback(newObj);
    });

    $filterColorField?.addEventListener("change", function () {
        const /** {String} */ filterValue = this.value.toLowerCase();

        $filterValue.innerText = filterValue;
        $filterChip.classList.add("selected");

        newObj[filterKey] = filterValue;
        callback(newObj)
    })

}