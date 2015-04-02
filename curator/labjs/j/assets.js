$LAB
.script(function(){
	if (document.getElementsByTagName('html').length) {return "j/epicGrid.js"; }
	else {return null;}
})
.wait(function(){
	epicGrid();
});
