epicGrid();
$(function() {
    $('#main').smoothState({
        prefetch: true,
        pageCacheSize: 1,
        onStart: {
            duration: 250,
            render: function () {
                $('body').addClass('byebye');
                $('body').removeClass('hihi');
            }
        },
        callback: function(){
            $('body').addClass('hihi');
            $('body').removeClass('byebye');
            epicGrid();
        }
    });
});
