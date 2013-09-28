"use strict";

/*jslint browser: true*/
/*jshint browser: true, globalstrict: true*/

/**
 * z-index of the latest selected window.
 */
var zIndex_global = 100;

/**
 * Increments the global z-index.
 */
function incrementZIndex() {
    zIndex_global += 1;
}

/**
 * Returns the global z-index variable.
 * @returns {Number}
 */
function getZIndex() {
    return zIndex_global;
}

/**
 * Selects the window and puts it on the front.
 * @param windowId
 */
function selectWindow(windowId) {
    incrementZIndex();
    document.getElementById(windowId).style.zIndex = getZIndex();
}

/**
 * Shows the selected window.
 * @param windowId
 */
function showstuff(windowId) {
    selectWindow(windowId);
    document.getElementById(windowId).style.visibility = "visible";
}

/**
 * Hides the selected window.
 * @param windowId
 */
function hidestuff(windowId) {
    document.getElementById(windowId).style.visibility = "hidden";
}

// No scroll
document.documentElement.style.overflow = 'hidden';
document.body.scroll = "no";