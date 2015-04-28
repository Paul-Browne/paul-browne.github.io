epicGrid();
$(function() {
    $('#main').smoothState({
        prefetch: true,
        pageCacheSize: 1,
        onEnd: {
            duration: 250,
            render: function (url, $container) {
                $('body').addClass('hihi');
                $('body').removeClass('byebye');
                epicGrid();
            }
        },
        onStart: {
            duration: 250,
            render: function (url, $container) {
                $('body').addClass('byebye');
                $('body').removeClass('hihi');
            }
        }
    });
});
