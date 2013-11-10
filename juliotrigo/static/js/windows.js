"use strict";

/*jslint browser: true*/
/*jshint browser: true, globalstrict: true*/

/*----------------------------- General ---------------------------*/

//No scroll
document.documentElement.style.overflow = 'hidden';
document.body.scroll = "no";

/**
* Removes all instances of an element from an array.
* @param array
* @param value
*/
function removeElementFromArray(array, value) {
    var i;
    for (i = 0; i < array.length; i++) {
        if (array[i] === value) {
            array.splice(i, 1);
            i--;
        }
    }
}

/**
* Checks whether a value exists in an array.
* @param array
* @param value
* @returns {Boolean}
*/
function existElementInArray(array, value) {
    var i;
    for (i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

/*----------------------------- Windows ---------------------------*/

/**
 * Application Windows.
 */
var appWindows = {
    /* z-index of the latest selected window. */
    zIndex_global: 100,

    /* Counts how many icon slots in the bar have been populated. */
    bar_icons_counter: 0,

    folder:   {windows: [], type: 'FOLDER',   element_id: 'bar_folder',   visible: false},
    firefox:  {windows: [], type: 'FIREFOX',  element_id: 'bar_firefox',  visible: false},
    chromium: {windows: [], type: 'CHROMIUM', element_id: 'bar_chromium', visible: false},
    txt:      {windows: [], type: 'TXT',      element_id: 'bar_txt',      visible: false},

    /**
     * Increments the global z-index.
     */
    incrementZIndex: function () {
        this.zIndex_global += 1;
    },

    /**
     * Returns the z-index variable.
     * @returns {number}
     */
    getZIndex: function () {
        return this.zIndex_global;
    },

    /**
     * Selects the window and puts it on the front.
     * @param {string} windowId - Element ID of the window.
     */
    selectWindow: function (windowId) {
        this.incrementZIndex();
        document.getElementById(windowId).style.zIndex = this.getZIndex();
    },

    /**
     * Shows the selected window.
     * @param {string} windowId - Element ID of the window.
     * @param {string} type - Type of the window.
     */
    showstuff: function (windowId, type) {
        this.selectWindow(windowId);
        document.getElementById(windowId).style.visibility = "visible";
        this.manageWindows(windowId, type, 1);
    },

    /**
     * Hides the selected window.
     * @param {string} windowId - Element ID of the window.
     * @param {string} type - Type of the window.
     */
    hidestuff: function (windowId, type) {
        document.getElementById(windowId).style.visibility = "hidden";
        this.manageWindows(windowId, type, -1);
    },

    /**
     * Counts the open windows and hides or shows their icons on the bottom bar.
     * @param {string} windowId - Element ID of the window.
     * @param {string} type - Type of the window.
     * @param {number} operation - Type of the operation: add a new window (1) or remove a window (-1).
     */
    manageWindows: function (windowId, type, operation) {
        switch (type) {
            case this.folder.type:
                if (operation === 1) {
                    if (!existElementInArray(this.folder.windows, windowId)) {
                        this.folder.windows.push(windowId);
                    }
                    if ((this.folder.windows.length > 0) && (!this.folder.visible)) {
                        document.getElementById(this.folder.element_id).style.visibility = "visible";
                        this.folder.visible = true;
                        this.bar_icons_counter++;
                    }
                } else if (operation === -1) {
                    removeElementFromArray(this.folder.windows, windowId);
                    if ((this.folder.windows.length <= 0) && (this.folder.visible)) {
                        document.getElementById(this.folder.element_id).style.visibility = "hidden";
                        this.folder.visible = false;
                        this.bar_icons_counter--;
                    }
                }
                break;
            case this.firefox.type:
                if (operation === 1) {
                    if (!existElementInArray(this.firefox.windows, windowId)) {
                        this.firefox.windows.push(windowId);
                    }
                    if ((this.firefox.windows.length > 0) && (!this.firefox.visible)) {
                        document.getElementById(this.firefox.element_id).style.visibility = "visible";
                        this.firefox.visible = true;
                        this.bar_icons_counter++;
                    }
                } else if (operation === -1) {
                    removeElementFromArray(this.firefox.windows, windowId);
                    if ((this.firefox.windows.length <= 0) && (this.firefox.visible)) {
                        document.getElementById(this.firefox.element_id).style.visibility = "hidden";
                        this.firefox.visible = false;
                        this.bar_icons_counter--;
                    }
                }
                break;
            case this.chromium.type:
                if (operation === 1) {
                    if (!existElementInArray(this.chromium.windows, windowId)) {
                        this.chromium.windows.push(windowId);
                    }
                    if ((this.chromium.windows.length > 0) && (!this.chromium.visible)) {
                        document.getElementById(this.chromium.element_id).style.visibility = "visible";
                        this.chromium.visible = true;
                        this.bar_icons_counter++;
                    }
                } else if (operation === -1) {
                    removeElementFromArray(this.chromium.windows, windowId);
                    if ((this.chromium.windows.length <= 0) && (this.chromium.visible)) {
                        document.getElementById(this.chromium.element_id).style.visibility = "hidden";
                        this.chromium.visible = false;
                        this.bar_icons_counter--;
                    }
                }
                break;
            case this.txt.type:
                if (operation === 1) {
                    if (!existElementInArray(this.txt.windows, windowId)) {
                        this.txt.windows.push(windowId);
                    }
                    if ((this.txt.windows.length > 0) && (!this.txt.visible)) {
                        document.getElementById(this.txt.element_id).style.visibility = "visible";
                        this.txt.visible = true;
                        this.bar_icons_counter++;
                    }
                } else if (operation === -1) {
                    removeElementFromArray(this.txt.windows, windowId);
                    if ((this.txt.windows.length <= 0) && (this.txt.visible)) {
                        document.getElementById(this.txt.element_id).style.visibility = "hidden";
                        this.txt.visible = false;
                        this.bar_icons_counter--;
                    }
                }
                break;
        }
    },
    /*
    createBarIcon: function () {
        
    }
    
    removeBarIcon: function () {
        
    }*/
};

/*------------------------- CSS Transitions -----------------------*/

var is_lan_expanded = false;

/**
 * Expands or contracts the language selection bar.
 */
function expand_contract_lan() {
    if (!is_lan_expanded) {
        document.getElementById('language-bar').style.bottom = "55px";
        is_lan_expanded = true;
    } else {
        document.getElementById('language-bar').style.bottom = "-55px";
        is_lan_expanded = false;
    }
}