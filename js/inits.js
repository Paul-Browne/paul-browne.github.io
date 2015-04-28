epicGrid();
$(function() {
    $('#main').smoothState({
        prefetch: true,
        pageCacheSize: 1,
        onStart: {
            duration: 250,
            render: function (url, $container) {
                $('body').addClass('byebye');
                $('body').removeClass('hihi');
            }
        },
        onEnd: {
            render: function (url, $container) {
                $('body').addClass('hihi');
                $('body').removeClass('byebye');
                epicGrid();
            }
        }
    });
});
