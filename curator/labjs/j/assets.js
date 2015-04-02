$LAB
.script("j/epicgrid.js")
.script(function(){
	if (document.querySelectorAll('[data-sortable]').length) {return "j/sortable.js"; }
	else {return null;}
})
.script(function(){
	if (document.querySelectorAll('[data-collapse]').length) {return ["j/collapse.js", "//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"]; }	
	else {return null;}
})
.wait(function(){
  epicGrid();
});
