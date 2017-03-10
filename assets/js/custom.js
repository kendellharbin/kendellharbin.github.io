/*jshint esversion: 6 */

$(document).ready(function(){

    var maxSearchIterations = 100;
    var min_x = 50;
    var max_x = $(window).width() - 50;
    var min_y = 50;
    var max_y = $(window).height() - 50;
    var filled_areas = [];

    function calc_overlap(a1) {
        var overlap = 0;
        for (i = 0; i < filled_areas.length; i++) {

            var a2 = filled_areas[i];

            // no intersection cases
            if (a1.x + a1.width < a2.x) {
                continue;
            }
            if (a2.x + a2.width < a1.x) {
                continue;
            }
            if (a1.y + a1.height < a2.y) {
                continue;
            }
            if (a2.y + a2.height < a1.y) {
                continue;
            }

            // intersection exists : calculate it !
            var x1 = Math.max(a1.x, a2.x);
            var y1 = Math.max(a1.y, a2.y);
            var x2 = Math.min(a1.x + a1.width, a2.x + a2.width);
            var y2 = Math.min(a1.y + a1.height, a2.y + a2.height);

            var intersection = ((x1 - x2) * (y1 - y2));

            overlap += intersection;

            // console.log("( "+x1+" - "+x2+" ) * ( "+y1+" - "+y2+" ) = " + intersection);
        }

        // console.log("overlap = " + overlap + " on " + filled_areas.length + " filled areas ");
        return overlap;
    }

    function randomize() {

        filled_areas.splice(0, filled_areas.length);

        var index = 0;
        $('.item').each(function() {
            var rand_x = 0;
            var rand_y = 0;
            var i = 0;
            var smallest_overlap = 9007199254740992;
            var best_choice;
            var area;
            for (i = 0; i < maxSearchIterations; i++) {
                rand_x = Math.round(min_x + ((max_x - min_x) * (Math.random() % 1)));
                rand_y = Math.round(min_y + ((max_y - min_y) * (Math.random() % 1)));
                area = {
                    x: rand_x,
                    y: rand_y,
                    width: $(this).width(),
                    height: $(this).height()
                };
                var overlap = calc_overlap(area);
                if (overlap < smallest_overlap) {
                    smallest_overlap = overlap;
                    best_choice = area;
                }
                if (overlap === 0) {
                    break;
                }
            }

            filled_areas.push(best_choice);

            $(this).css({
                position: "absolute",
                left: rand_x,
                top: rand_y
            });

            // console.log("and the winner is : " + smallest_overlap);
        });
        return false;
    }

    randomize();

    $('a.item').click(function(){
      $.fn.fullpage.moveTo($(this).attr('data-src'), 0);
    });
});