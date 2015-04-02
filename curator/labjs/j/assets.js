$LAB
.script(function(){
	if (document.querySelectorAll('[class*="-col-"]').length) {return "j/epicGrid.js"; }
	else {return null;}
})
.wait(function(){
	epicGrid();
});
