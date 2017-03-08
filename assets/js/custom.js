/*jshint esversion: 6 */

$(document).ready(function(){

	var containerW = $(window).width();
    var containerH = $(window).height();
    var positions = [];
    $(".item").each(function() {
        var coords = {
            w: $(this).outerWidth(true),
            h: $(this).outerHeight(true)
        };
        var success = false;
        while (!success)
        {
            coords.x = parseInt(Math.random() * (containerW-coords.w));
            coords.y = parseInt(Math.random() * (containerH-coords.h));
            success = true;
            $.each(positions, function(){
                if (
                    coords.x <= (this.x + this.w) &&
                    (coords.x + coords.w) >= this.x &&
                    coords.y <= (this.y + this.h) &&
                    (coords.y + coords.h) >= this.y
                )
                {
                    console.log('bad fit!');
                    success = false;
                }
            });
        }
        positions.push(coords);
        $(this).css({
            top: coords.y + 'px',
            left: coords.x + 'px'
        });
    });

    $('a.item').click(function(){
      $.fn.fullpage.moveTo($(this).attr('data-src'), 0);
    });
});