$(function(){
  $('a[href="#conf_reset"]').click(function(){
    if( window.confirm('Are you sure?') ){
      alert('Sorry, not yet implemented.');
    } else {
      alert('Oops, nothing to do.');
    }

    $('a[href="#page_reload"]').click();
  });
});
