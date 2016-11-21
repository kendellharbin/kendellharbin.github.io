/*jshint esversion: 6 */

$(document).ready(function(){

	var ww = $(window).width();
    var wh = $(window).height();

    $(".item").each(function(i){
	    var rotationNum = Math.round((Math.random()*360)+1);
	    var rotation = "rotate("+rotationNum+"deg)";
	    var posx = Math.round(Math.random() * ww)-40;
	    var posy = Math.round(Math.random() * wh)-40;
	    $(this).css("top", posy + "px").css("left", posx + "px").css("transform",rotation).css("-ms-transform",rotation).css("-webkit-transform",rotation);
    });

    $('a.item').click(function(){
      $.fn.fullpage.moveTo($(this).attr('data-src'), 0);
    });
});

