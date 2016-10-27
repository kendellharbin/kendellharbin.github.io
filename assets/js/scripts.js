function replaceImagesWithRetina() {
  var retina = window.devicePixelRatio > 1;
  if (retina) {
    $('img[data-retina]').each(function() {
      $(this).attr('src', $(this).data('retina'));
    });
  }
}

$( document ).ready(function() {
  replaceImagesWithRetina();
});
