(function($) {

  $blackout = $('<aside class="content-warning-blackout"><h1>Content Warning</h1><p>This has been tagged as <span class="content-warning-reason"></span>.</p><button>Show</button></aside>');

  $(document).ready(function(){

    $('[data-content-warning], .content-warning').each(function(){

      var $this = $(this);

      $fresh_bo = $blackout.clone();

      var reason = $this.data('content-warning');
      if(reason === "" || reason === "true"){
        reason = "potentially triggering";
      }

      $('span.content-warning-reason', $fresh_bo).text(reason);

      $('button', $fresh_bo).click(function(){
        $fresh_bo.fadeOut(200, function(){
          $fresh_bo.remove(); 
        });
      });

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
