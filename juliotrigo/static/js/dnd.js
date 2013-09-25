if (Modernizr.draganddrop) {
	// Browser supports HTML5 DnD.
	
	var obj_work = document.getElementById('work');
	var obj_projects = document.getElementById('projects');
	
	obj_work.addEventListener('dragstart', handleDragStart, false);
	obj_work.addEventListener('dragenter', handleDragEnter, false);
	obj_work.addEventListener('dragover', handleDragOver, false);
	obj_work.addEventListener('dragleave', handleDragLeave, false);
	obj_work.addEventListener('drop', handleDrop, false);
	obj_work.addEventListener('dragend', handleDragEnd, false);

	obj_projects.addEventListener('dragstart', handleDragStart, false);
	obj_projects.addEventListener('dragenter', handleDragEnter, false);
	obj_projects.addEventListener('dragover', handleDragOver, false);
	obj_projects.addEventListener('dragleave', handleDragLeave, false);
	obj_projects.addEventListener('drop', handleDrop, false);
	obj_projects.addEventListener('dragend', handleDragEnd, false);
	
} else {
	// Fallback to a library solution.
}

function handleDragStart(e) {
	// this / e.target is the source node.

}

function handleDragOver(e) {

}

function handleDragEnter(e) {
	// this / e.target is the current hover target.

}

function handleDragLeave(e) {
	// this / e.target is previous target element.

}

function handleDrop(e) {
	// this / e.target is current target element.

}

function handleDragEnd(e) {
	// this/e.target is the source node.

}
