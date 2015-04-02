$LAB
.wait()
.script(function(){
	if (document.getElementsByTagName('body').length) {return "j/epicGrid.js"; }
	else {return null;}
})
.wait(function(){
	epicGrid();
});
