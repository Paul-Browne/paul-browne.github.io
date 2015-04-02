$LAB
.script("j/epicgrid.js")
.script(function(){
	if (document.querySelectorAll('[data-sortable]').length) {return "j/sortable.js"; }
	else {return null;}
})
.script(function(){
	if (document.querySelectorAll('pre code').length) {return ["j/highlight.js", "j/highlight.css.js"]; }
	else {return null;}
})
.script(function(){
	if (document.querySelectorAll('[data-collapse]').length) {return ["//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js", "j/collapse.js"]; }	
	else {return null;}
})
.script(function(){
	if (document.querySelectorAll('[type="checkbox"],[type="radio"]').length) {return ["//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js", "j/icheck.css.js", "j/icheck.js"]; }	
	else {return null;}
})
.script(function(){
	if (document.querySelectorAll('textarea').length) {return ["//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js", "j/elasticize.js"]; }	
	else {return null;}
})
.wait(function(){
  epicGrid();
})
.wait(function(){
  hljs.initHighlighting();
})
.wait(function(){
  $('input').iCheck({checkboxClass: 'icheckbox_flat-blue',radioClass: 'iradio_flat-blue'});
})
.wait(function(){
  $('textarea').elasticize();
});
