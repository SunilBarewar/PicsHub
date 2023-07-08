/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";


/* Imports */

import { urlEncode } from "./urlEncode.js";

/**
 * Update  url
 * @param {Object} filterObj selected Filter Options Object
 * @param {String} searchType Search type eg. 'videos'
*/

export const updateUrl = (filterObj, searchType) => {
    setTimeout(() => {
        const /* {String} */ root = window.location.origin;

        // console.log(filterObj)
        // console.log(searchType)
        const /* {String} */ searchQuery = urlEncode(filterObj);

        window.location = `${root}/pages/${searchType}/${searchType}.html?${searchQuery}`

        // console.log(searchQuery)
        // console.log(`${root}/pages/${searchType}/${searchType}.html?${searchQuery}`)
    })
}