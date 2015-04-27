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
        callback: function(){
            epicGrid();
            $('body').removeClass('heeelllloooo');
        }
    });
});
