epicGrid();
$(function() {
    $('#main').smoothState({
        prefetch: true,
        pageCacheSize: 1,
        onStart: { function(){ $('body').addClass('start');} },
        callback: function(){epicGrid()}
    });
});
