// by wuxu@cs.ucla.edu

function createTransition(start, stop) {
	// assume the start and stop are both grey colors
	// start, stop ranging from 0 to 255
	var step =2;
	var iteration = Math.round(200 / Math.abs(stop-start) );
	var currentColor = start;
	function transition() {
		if (currentColor>=stop) {
			clearInterval(handler);
		}
		currentColor = (stop>start)?(currentColor+step) : (currentColor-step);
		setcolor(currentColor);
	}
	var handler = setInterval(transition, iteration);
}

function setcolor(color){
	// set bg color
	document.body.style.backgroundColor = grey2hex(color);
 	$('a').css('color', grey2hex(255-color));
}

function grey2hex(num) {
	var hex = [];
	for (var i = 0; i < 3; i++) {
		hex.push(num.toString(16));
		if (hex[i].length < 2) { hex[i] = "0" + hex[i]; }
	}
	return "#" + hex[0] + hex[1] + hex[2];
}

function onLight(){
	createTransition(0,255);
	val = !val;
	setColor();
	//$( "to_remove" ).remove();
	$("#footer").text("et facta est lux");
	$(".body_text").css("color", "black");
}

$(document).ready(function(){ setColor(); });

function setColor(){
    var linkcolor = val ? "grey" : "black";
    var linkcolor_hover = val ? "white" : "#fb9150";
    $(".text").hover(function(){
    $(".text").css("color","white");
    },function(){
        $(".text").css("color","grey");
    });

    $("a").hover(function(){
        var $this = $(this);
        $this.css("color", linkcolor_hover);
    },function(){
        var $this = $(this);
        $this.css("color", linkcolor);
    });
}