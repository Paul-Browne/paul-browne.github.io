epicGrid();
$(function() {
    $('#main').smoothState({
        prefetch: true,
        pageCacheSize: 1,
        onStart: {
            duration: 4000,
            render: function () {
                $('body').addClass('byebye');
                $('body').removeClass('hello');
            }
        },
        onEnd: {
            duration: 4000,
            render: function () {
                $('body').addClass('hello');
                $('body').removeClass('byebye');
            }
        },
        callback: function(){
            epicGrid();
        }
    });
});
