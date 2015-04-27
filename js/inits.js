epicGrid();
$(function() {
    $('#main').smoothState({
        prefetch: true,
        pageCacheSize: 1,
        onStart: {
            duration: 250,
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
