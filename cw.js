(function($) {

  $blackout = $('<div class="content-warning-blackout">content warning</div>');

  $(document).ready(function(){

    $('[data-content-warning], .content-warning').each(function(){

      var $this = $(this);

      $fresh_bo = $blackout.clone();

      if($this.css('position') == 'absolute'){
        console.log('abs');
        var position = $this.position();
        $fresh_bo.css({
          top: position.top,
          left: position.left,
          width: $this.width(),
          height: $this.height()
        });
      }else{
        $this.css('position','relative').append($fresh_bo);
      }

    });

  })

})(jQuery);
