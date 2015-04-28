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
        onEnd: function(){
            $('body').addClass('hihi');
            $('body').removeClass('byebye');
            epicGrid();
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
