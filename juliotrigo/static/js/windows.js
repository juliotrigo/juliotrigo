function showstuff(boxid){
    document.getElementById(boxid).style.visibility="visible";
}
 
function hidestuff(boxid){
    document.getElementById(boxid).style.visibility="hidden";
}

var x = 0;
var y = 0;
var element = '';
var being_dragged = false;
var clicked = false;
var Xoffset = 0;
var Yoffset = 0;

function getMouseInfo(event){
    //x = event.clientX;
    //y = event.clientY;
	
	if(event.offsetX || event.offsetY) {
		x = event.offsetX - Xoffset;
		y = event.offsetY - Yoffset;
	}
	else {
		x = event.pageX - Xoffset;
		y = event.pageY -Yoffset;
	}
	
	if(clicked == true) {
		
		
		document.getElementById(element).style.top = y +'px';
		document.getElementById(element).style.left = x +'px';
	}	
}

function mouse_down(id) {	
	var obj = document.getElementById(id);
    var topVal = parseInt(window.getComputedStyle(obj).top, 10);
    var leftVal = parseInt(window.getComputedStyle(obj).left, 10);

    Xoffset = x - leftVal;
    Yoffset = y - topVal;
    
    clicked = true;
    element = id;
}

function mouse_up() {
    Xoffset = 0;
    Yoffset = 0;
	
    clicked = false;
    element = '';
}