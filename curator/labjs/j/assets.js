$LAB
.script(function(){
	if (document.getElementsByTagName('body').length) {return "j/epicGrid.js"; }
	else {return null;}
}).wait()
.wait(function(){
	epicGrid();
});
