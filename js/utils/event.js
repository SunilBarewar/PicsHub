/**
 * @copyright codewithsadee 2023
 * @author sadee <codewithsadee@gmail.com>
 */

"use strict";

/**
 * 
 * @param {NodeList} $elements NodeList
 * @param {String}  eventType eg. "click"
 * @param   {Funtion} callback callback Function
 */

export const addEventsOnElements = function ($elements, eventType, callback) {
    $elements.forEach($element => $element.addEventListener(eventType, callback))
}

