epicGrid();
$(function() {
    $('#main').smoothState({
        prefetch: true,
        pageCacheSize: 1,
        onStart: { $('body').addClass('start'); },
        callback: function(){epicGrid()}
    });
});
