"use strict";

/*jslint browser: true*/
/*jshint browser: true, globalstrict: true*/

/**
 * Draggable elements.
 */
var work = document.getElementById('work');
var projects = document.getElementById('projects');
var readme = document.getElementById('readme');
var license = document.getElementById('license');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var recycle = document.getElementById('recycle');
var wrapper = document.getElementById('content-wrapper');

// Set them to 0 in the CSS file and assign the real coordinates here to avoid errors.
work.style.top = '20px';
work.style.left = '20px';
projects.style.top = '20px';
projects.style.left = '20px';
recycle.style.top = '20px';
recycle.style.left = '20px';
license.style.top = '20px';
license.style.left = '20px';
about.style.top = '20px';
about.style.left = '20px';
contact.style.top = '20px';
contact.style.left = '20px';
readme.style.top = '20px';
readme.style.left = '20px';

// Plain drag type
var PLAIN_DRAG_TYPE = 'text/plain';

// Global var: used when getData is not accessible
var offset_data;

/**
 * dragstart
 */
function handleDragStart(event) {
    var style, offset, elementID;

    elementID = event.target.id;
    style = window.getComputedStyle(event.target, null);
    offset = elementID + ',' + (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY);

    event.dataTransfer.setData(PLAIN_DRAG_TYPE, offset);
    //event.dataTransfer.effectAllowed = 'move';
    //event.dataTransfer.dropEffect = 'move';

    //this.style.opacity = '0.4';

    offset_data = offset;
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

    offset = offset_data.split(',');
    //offset = event.dataTransfer.getData(PLAIN_DRAG_TYPE).split(',');
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
    var offset, dElement;

    offset = offset_data.split(',');
    //offset = event.dataTransfer.getData(PLAIN_DRAG_TYPE).split(',');
    dElement = document.getElementById(offset[0]);

    dElement.style.left = (event.clientX + parseInt(offset[1], 10)) + 'px';
    dElement.style.top = (event.clientY + parseInt(offset[2], 10)) + 'px';

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
    //work.addEventListener('dragend', handleDragEnd, false);

    projects.addEventListener('dragstart', handleDragStart, false);
    //projects.addEventListener('drag', handleDrag, false);
    //projects.addEventListener('dragend', handleDragEnd, false);

    readme.addEventListener('dragstart', handleDragStart, false);
    //readme.addEventListener('drag', handleDrag, false);
    //readme.addEventListener('dragend', handleDragEnd, false);

    license.addEventListener('dragstart', handleDragStart, false);
    //license.addEventListener('drag', handleDrag, false);
    //license.addEventListener('dragend', handleDragEnd, false);

    about.addEventListener('dragstart', handleDragStart, false);
    //about.addEventListener('drag', handleDrag, false);
    //about.addEventListener('dragend', handleDragEnd, false);

    contact.addEventListener('dragstart', handleDragStart, false);
    //contact.addEventListener('drag', handleDrag, false);
    //contact.addEventListener('dragend', handleDragEnd, false);

    recycle.addEventListener('dragstart', handleDragStart, false);
    //recycle.addEventListener('drag', handleDrag, false);
    //recycle.addEventListener('dragend', handleDragEnd, false);

    document.body.addEventListener('dragenter', handleDragEnter, false);
    //wrapper.addEventListener('dragleave', handleDragLeave, false);
    document.body.addEventListener('dragover', handleDragOver, false);
    document.body.addEventListener('drop', handleDrop, false);
}