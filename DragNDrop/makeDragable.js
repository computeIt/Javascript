/**
 * Created by Андрей on 26.06.2017.
 */
function makeDragable(d) {

    d.addEventListener("mousedown", function (e) {
        var gcs = getComputedStyle(d);
        var left0 = cutPx(gcs.left);
        /*координаты левого верхнего угла квадрата*/
        var top0 = cutPx(gcs.top);

        var x0 = e.pageX;
        /*координаты места нажатия мышкой*/
        var y0 = e.pageY;


        //d.addEventListener("mousemove", function (ev)... - тогда квадрат не отлипнет от мышки никогда*/
        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", mouseUp);


        function move(ev) {


            var x = ev.pageX;
            var y = ev.pageY;

            d.style.top = (top0 + (y - y0)) + "px";
            d.style.left = (left0 + (x - x0)) + "px";
        }

        function mouseUp() {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", mouseUp);

        }
    });

    function cutPx(str) {
        return Number.parseInt(str.substring(0, str.length - 2));

    }
}
