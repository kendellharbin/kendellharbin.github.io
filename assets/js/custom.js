/*jshint esversion: 6 */

$(document).ready(function(){

    var items = ['hat1.png', 'pen.png', 'tape.png'];


    items.forEach(function(item, index){
        var section = index + 2;
    	var item_loc = `./assets/imgs/home/${item}`;
        var item_id = `section${index}`;
        var item_src = `<a href="#" class="item" data-src=${section}><img src=${item_loc} /></a>`;
    	$(item_src).appendTo("#section0 .content");

    });

	var ww = $(window).width();
    var wh = $(window).height();

    $(".item").each(function(i){
	    var rotationNum=Math.round((Math.random()*360)+1);
	    var rotation="rotate("+rotationNum+"deg)";
	    var posx = Math.round(Math.random() * ww)-20;
	    var posy = Math.round(Math.random() * wh)-20;
	    $(this).css("top", posy + "px").css("left", posx + "px").css("transform",rotation).css("-ms-transform",rotation).css("-webkit-transform",rotation);
    });

    $('a.item').click(function(){
      $.fn.fullpage.moveTo($(this).attr('data-src'), 0);
    });
});

