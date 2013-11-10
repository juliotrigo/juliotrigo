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

    /* The index of the next free slot. */
    next_free_slot: 0,
    slot_id: ['bar_folder', 'bar_firefox', 'bar_chromium', 'bar_txt'],
    slot_index: {'bar_folder': 0, 'bar_firefox': 1, 'bar_chromium': 2, 'bar_txt': 3},

    /* Icons information. */
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

                    // If this window has not been opened yet
                    if (!existElementInArray(this.folder.windows, windowId)) {
                        this.folder.windows.push(windowId);
                    }

                    // If the icon must become visible
                    if ((this.folder.windows.length > 0) && (!this.folder.visible)) {

                        // Swap slots
                        this.showIcon(this.folder.element_id);

                        // Set the icon visible
                        document.getElementById(this.folder.element_id).style.visibility = "visible";
                        this.folder.visible = true;
                    }

                } else if (operation === -1) {

                    // Remove this window
                    removeElementFromArray(this.folder.windows, windowId);

                    // If the icon must become invisible
                    if ((this.folder.windows.length <= 0) && (this.folder.visible)) {

                        // Set the icon invisible
                        document.getElementById(this.folder.element_id).style.visibility = "hidden";
                        this.folder.visible = false;

                        // Swap slots
                        this.hideIcon(this.folder.element_id);
                    }
                }
                break;
            case this.firefox.type:
                if (operation === 1) {

                    // If this window has not been opened yet
                    if (!existElementInArray(this.firefox.windows, windowId)) {
                        this.firefox.windows.push(windowId);
                    }

                    // If the icon must become visible
                    if ((this.firefox.windows.length > 0) && (!this.firefox.visible)) {

                        // Swap slots
                        this.showIcon(this.firefox.element_id);

                        // Set the icon visible
                        document.getElementById(this.firefox.element_id).style.visibility = "visible";
                        this.firefox.visible = true;
                    }

                } else if (operation === -1) {

                    // Remove this window
                    removeElementFromArray(this.firefox.windows, windowId);

                    // If the icon must become invisible
                    if ((this.firefox.windows.length <= 0) && (this.firefox.visible)) {

                        // Set the icon invisible
                        document.getElementById(this.firefox.element_id).style.visibility = "hidden";
                        this.firefox.visible = false;

                        // Swap slots
                        this.hideIcon(this.firefox.element_id);
                    }
                }
                break;
            case this.chromium.type:
                if (operation === 1) {

                    // If this window has not been opened yet
                    if (!existElementInArray(this.chromium.windows, windowId)) {
                        this.chromium.windows.push(windowId);
                    }

                    // If the icon must become visible
                    if ((this.chromium.windows.length > 0) && (!this.chromium.visible)) {

                        // Swap slots
                        this.showIcon(this.chromium.element_id);

                        // Set the icon visible
                        document.getElementById(this.chromium.element_id).style.visibility = "visible";
                        this.chromium.visible = true;
                    }

                } else if (operation === -1) {

                    // Remove this window
                    removeElementFromArray(this.chromium.windows, windowId);

                    // If the icon must become invisible
                    if ((this.chromium.windows.length <= 0) && (this.chromium.visible)) {

                        // Set the icon invisible
                        document.getElementById(this.chromium.element_id).style.visibility = "hidden";
                        this.chromium.visible = false;

                        // Swap slots
                        this.hideIcon(this.chromium.element_id);
                    }
                }
                break;
            case this.txt.type:
                if (operation === 1) {

                    // If this window has not been opened yet
                    if (!existElementInArray(this.txt.windows, windowId)) {
                        this.txt.windows.push(windowId);
                    }

                    // If the icon must become visible
                    if ((this.txt.windows.length > 0) && (!this.txt.visible)) {

                        // Swap slots
                        this.showIcon(this.txt.element_id);

                        // Set the icon visible
                        document.getElementById(this.txt.element_id).style.visibility = "visible";
                        this.txt.visible = true;
                    }

                } else if (operation === -1) {

                    // Remove this window
                    removeElementFromArray(this.txt.windows, windowId);

                    // If the icon must become invisible
                    if ((this.txt.windows.length <= 0) && (this.txt.visible)) {

                        // Set the icon invisible
                        document.getElementById(this.txt.element_id).style.visibility = "hidden";
                        this.txt.visible = false;

                        // Swap slots
                        this.hideIcon(this.txt.element_id);
                    }
                }
                break;
        }
    },

    /**
     * Shows the icon in the bottom bar.
     * @param {string} id - Element ID of the bar icon.
     */
    showIcon: function (id) {
        // The icon to show is not in the next free slot
        if (this.slot_index[id] != this.next_free_slot) {
            this.swapIcons(id, this.slot_id[this.next_free_slot]);
        }

        // The new next free slot
        this.next_free_slot++;
    },

    /**
     * Hides the icon in the bottom bar.
     * @param {string} id - Element ID of the bar icon.
     */
    hideIcon: function (id) {
        // The icon to show is not in the next free slot
        if (this.slot_index[id] < (this.next_free_slot - 1)) {
            var i;
            for (i = this.slot_index[id]; i < 3; i++) {  // TODO
                this.swapIcons(this.slot_id[i], this.slot_id[i + 1]);
            }
        }

        // The new next free slot
        this.next_free_slot--;
    },

    /**
     * Swaps the icons in the bottom bar.
     * @param {string} current_id - Element ID of the bar icon.
     * @param {string} old_id - Element ID of the bar icon.
     */
    swapIcons: function (current_id, old_id) {
        // Old icon in the next free slot
        var old_index = this.slot_index[old_id];
        var old = document.getElementById(old_id);

        // Old cloned
        var old_cloned = old.cloneNode(true);

        // Current icon
        var current_index = this.slot_index[current_id];
        var current = document.getElementById(current_id);

        // Current cloned
        var current_cloned = current.cloneNode(true);

        // Parent node
        var parent = current.parentNode;

        // Swap values
        this.slot_id[old_index] = current_id;
        this.slot_id[current_index] = old_id;
        this.slot_index[old_id] = current_index;
        this.slot_index[current_id] = old_index;

        // Swap nodes
        parent.insertBefore(old_cloned, current);
        parent.insertBefore(current_cloned, old);
        parent.removeChild(current);
        parent.removeChild(old);
    }
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