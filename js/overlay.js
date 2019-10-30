var $overlay = $("<div id='overlay'></div>");
var $image = $("<img id='overlay-image'>");
var $caption = $("<p></p>");
var $exit = $('<div id="exit"><img src="images/icons/emergency-exit.png" alt="exit"></div>');
var $rewind = $('<div id="rewind"><img src="images/icons/rewind.png" alt="rewind" /></div>');
var $forward = $('<div id="forward"><img src="images/icons/fast-forward.png" alt="forward" /></div>');
var $index = 0;

$("body").append($overlay);

$("#gallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  var imageCaption =  $(this).children("img").attr("alt");
  $overlay.append($exit);
  updateImage(imageLocation, imageCaption);
  $overlay.append($image);
  $index = $(this).parent().index();
  $overlay.append($caption);
  $image.after($rewind);
  $image.before($forward);
  $overlay.fadeIn(1500);
});

$forward.on("click", function(event) {
  nextImage();
});

$("body").keydown(function(event){
  if ( event.which == 39 ) {
    nextImage();
  }
});

$rewind.on("click", function(event){
  previousImage();
});

$("body").keydown(function(event){
  if ( event.which == 37 ) {
    previousImage();
  }
});

$exit.on("click", function() {
  $overlay.fadeOut(1000).hide();
});

$("body").keydown(function(event) {
  if (event.which == 27) {
    $overlay.fadeOut(1000).hide();
  }
});

function updateImage(imageLocation, imageCaption) {
  $image.attr("src", imageLocation);
  $caption.text(imageCaption);
}

function nextImage() {
  $index++;
  if ($index >= $("#gallery li").length) {
    $index = 0;
  }
  var nextImage = $("#gallery li").get($index).getElementsByTagName("a");
  var imageLocation = $(nextImage).attr("href");
  var imageCaption =  $(nextImage).children("img").attr("alt");
  updateImage(imageLocation, imageCaption);
}

function previousImage() {
  $index--;
  if ($index < 0) {
    $index = $("#gallery li").length - 1;
  }
  var prevImage = $("#gallery li").get($index).getElementsByTagName("a");
  var imageLocation = $(prevImage).attr("href");
  var imageCaption =  $(prevImage).children("img").attr("alt");
  updateImage(imageLocation, imageCaption);
}