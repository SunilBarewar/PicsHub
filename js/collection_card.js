/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";


/**
 * Imports
 */

import { ripple } from "./utils/ripple.js";

/**
 * Create collection card
 * @param {Object} collection Collection Object
 * @returns {Node} Collection card
 */
export const collectionCard = function (collection) {
    const /* {String} */ root = window.location.origin;

    console.log(collection)

    const {
        id,
        title,
        media_count
    } = collection;

    const /* {NodeElement} */ $card = document.createElement("div");

    $card.classList.add("grid-item", "two-line", "list-item");

    $card.setAttribute("title", title);

    $card.innerHTML = `
        <div>

            <h3 class="body-large">${title}</h3>

            <p class="body-medium label">${media_count}media</p>

        </div>

        <a href="${root}/pages/collections/collection.html?collectionId=${id}&title=${title}" class="state-layer"></a>
    `;

    ripple($card);

    return $card;

}