/**
* @copyright codewithsadee 2023
* @author sadee <codewithsadee@gmail.com>
*/

"use strict";

/**
 * Convert URL to object
 * @param {String} urlString url  
 * @returns {Object} URL Object
 */
export const urlDecode = function (urlString) {
    return Object.fromEntries(urlString.replace(/%23/g, "#").replace(/%20/g, " ").split("&").map(i => i.split("=")));
}