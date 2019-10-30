$("#search").keyup(function() {
  var $search = $(this).val();
  $("#gallery li").each(function() {
    var $altText = $(this).find("img").attr("alt");
    if($altText.toLowerCase().search($search.toLowerCase()) > -1) {
      $(this).show();
    } else {
      $(this).fadeOut(250);
    }
  });
});