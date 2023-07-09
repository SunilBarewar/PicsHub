/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";




/**
 * Import  
 */

import { addEventsOnElements } from './utils/event.js';


/**
 * Add menu functionality
 * @param {Node} $menuWrapper Menu parent node
 * @param {Function} callback Callback function
 */
let cnt = 1;
export const menu = function ($menuWrapper, callback) {
    const /** {NodeElement} */ $menu = $menuWrapper.querySelector("[data-menu]");
    // console.log($menuWrapper, cnt++)
    const /** {NodeList} */ $menuTogglers = $menuWrapper.querySelectorAll("[data-menu-toggler]");
    // console.log($menuTogglers, cnt++)

    const /** {NodeList} */ $menuItems = $menuWrapper.querySelectorAll("[data-menu-item]");


    addEventsOnElements($menuTogglers, "click", () => {
        $menu.classList.toggle("expanded");
    })

    addEventsOnElements($menuItems, "click", function (e) {
        e.preventDefault();
        $menu.classList.remove("expanded");
        // console.log(this.dataset.menuItem);

        if (callback) callback(this.dataset.menuItem);
    })

}
