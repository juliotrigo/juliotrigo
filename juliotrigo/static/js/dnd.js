"use strict";

/*jslint browser: true*/
/*jshint browser: true, globalstrict: true*/

/**
 * Draggable elements.
 */
var work = document.getElementById('work');
var projects = document.getElementById('projects');
var wrapper = document.getElementById('content-wrapper');

// Set them to 0 in the CSS file and assign the real coordinates here to avoid errors.
work.style.top = '220px';
work.style.left = '200px';
projects.style.top = '320px';
projects.style.left = '600px';

// Plain drag type
var PLAIN_DRAG_TYPE = 'text/plain';

/**
 * dragstart
 */
function handleDragStart(event) {
    var style, offset;

    style = window.getComputedStyle(event.target, null);
    offset = event.target.id + ',' + (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY);

    event.dataTransfer.setData(PLAIN_DRAG_TYPE, offset);
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';

    this.style.opacity = '0.4';
}

/**
 * drag
 */
function handleDrag(event) {}

/**
 * dragend
 */
function handleDragEnd(event) {
    this.style.opacity = '1';
}

/**
 * dragdrop
 */
function handleDrop(event) {
    var offset, dElement;

    offset = event.dataTransfer.getData(PLAIN_DRAG_TYPE).split(',');
    dElement = document.getElementById(offset[0]);

    dElement.style.left = (event.clientX + parseInt(offset[1], 10)) + 'px';
    dElement.style.top = (event.clientY + parseInt(offset[2], 10)) + 'px';

    if (event.preventDefault) {
        event.preventDefault();
    }

    return false;
}

/**
 * dragover
 */
function handleDragOver(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }

    return false;
}

/**
 * dragenter
 */
function handleDragEnter(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }

    return false;
}

/**
 * dragsleave
 */
function handleDragLeave(event) {}

/**
 * Drag and Drop.
 */
if (Modernizr.draganddrop) {
    // Browser supports HTML5 DnD.

    work.addEventListener('dragstart', handleDragStart, false);
    //work.addEventListener('drag', handleDrag, false);
    work.addEventListener('dragend', handleDragEnd, false);

    projects.addEventListener('dragstart', handleDragStart, false);
    //projects.addEventListener('drag', handleDrag, false);
    projects.addEventListener('dragend', handleDragEnd, false);

    document.body.addEventListener('dragenter', handleDragEnter, false);
    //wrapper.addEventListener('dragleave', handleDragLeave, false);
    document.body.addEventListener('dragover', handleDragOver, false);
    document.body.addEventListener('drop', handleDrop, false);
}