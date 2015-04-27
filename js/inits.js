epicGrid();
$(function() {
    $('#main').smoothState({
        prefetch: true,
        pageCacheSize: 1,
        onStart: {
            render: function () {
                $('body').addClass('heeelllloooo');
            }
        },
        onEnd: {
            render: function () {
                $('body').removeClass('heeelllloooo');
            }
        },
        callback: function(){epicGrid()}
    });
});
