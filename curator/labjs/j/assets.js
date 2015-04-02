$LAB
.script("j/epicgrid.js")
.script(function(){
	if (document.querySelectorAll('[data-sortable]').length) {return "j/sortable.js"; }
	else {return null;}
})
.wait(function(){
  epicGrid();
});
