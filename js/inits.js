epicGrid();
$(function() {
    $('#main').smoothState({
        prefetch: true,
        pageCacheSize: 1,
        onStart: {
            duration: 200,
            render: function (url, $container) {
                $('#main').addClass('byebye');
                $('#main').removeClass('hihi');
            }
        },
        callback: function(){
            epicGrid();
            $('#main').delay(100).addClass('hihi');
            $('#main').delay(100).removeClass('byebye');
        }
    });
});


/*
;(function($) {
  var $body = $('html, body'),
      content = $('#main').smoothState({
        onStart: {
          duration: 250,
          render: function (url, $container) {
            content.toggleAnimationClass('is-exiting');
            $body.animate({
              scrollTop: 0
            });
          }
        }
      }).data('smoothState');
})(jQuery);
*/
