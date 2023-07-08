/**
* @copyright codewithsadee 2023
* @author sadee <codewithsadee@gmail.com>
*/

"use strict";

/**
 * convert Object to URL
 * @param {Object} urlObj url object
 * @returns url String
 */

export const urlEncode = urlObj => {
    return Object.entries(urlObj).join("&").replace(/,/g, "=").replace(/#/g, "%23");
}