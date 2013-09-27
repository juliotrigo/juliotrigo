/**
 * Draggable elements.
 */
var work = document.getElementById('work');
var projects = document.getElementById('projects');
var wrapper = document.getElementById('content-wrapper');

work.style.top = '220px';
work.style.left = '200px';
projects.style.top = '320px';
projects.style.left = '600px';

var internalDNDType = 'text/plain';
var offset_data;						// Global variable as Chrome doesn't allow access to event.dataTransfer in dragover
var draggable;							// Element in movement.

/**
 * Drag n Drop.
 */
if (Modernizr.draganddrop) {
	// Browser supports HTML5 DnD.
	
	work.addEventListener('dragstart', handleDragStart, false);
	//work.addEventListener('drag', handleDrag, false);
	//work.addEventListener('dragend', handleDragEnd, false);

	projects.addEventListener('dragstart', handleDragStart, false);
	//projects.addEventListener('drag', handleDrag, false);
	//projects.addEventListener('dragend', handleDragEnd, false);
	
	wrapper.addEventListener('dragenter', handleDragEnter, false);
	wrapper.addEventListener('dragleave', handleDragLeave, false);
	wrapper.addEventListener('dragover', handleDragOver, false);
	wrapper.addEventListener('drop', handleDrop, false);
	
}

/**
 * dragstart
 */
function handleDragStart(event) {
	draggable = event.target.id;
	
	var style = window.getComputedStyle(event.target, null);
	offset_data = (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY);
	
	event.dataTransfer.setData(internalDNDType, offset_data);
	event.dataTransfer.effectAllowed = 'move';
	event.dataTransfer.dropEffect = 'move';
}

/**
 * drag
 */
function handleDrag(event) {

}

/**
 * dragend
 */
function handleDragEnd(event) {
	
}

/**
 * dragdrop
 */
function handleDrop(event) {
	var offset;

	try {
		offset = event.dataTransfer.getData(internalDNDType).split(',');
	}
	catch(e) {
		offset = offset_data.split(',');
	}

	var dElement = document.getElementById(draggable);

	dElement.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
	dElement.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
	
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
function handleDragLeave(event) {

	if (event.preventDefault) {
		event.preventDefault();
	}
	
	return false;
}
