/**
 * Created by User on 24/06/2017.
 */

/* create container */
var cont = $("<div class='container'></div>")

/* create articles window and fill it with articles */
var aw = $("<div class='articlesWindow'></div>");
for (var i=0; i<10; i++){
    aw.append($("<div class='article'>Article "+(i+1)+"</div>"));
}
/* put articles window to the container */
cont.append(aw);

/* button "up" */
var up = $("<button class='but'>Up</button>");
cont.append(up);

/* button "down" */
var down = $("<button class='but'>Down</button>");
cont.append(down);

/* append the result to the body */
$("body").append(cont);


/* buttons click handlers */
up.on("click", function(){

    aw[0].scrollTop = aw[0].scrollTop + aw.children()[0].offsetHeight;

    var c = aw.children()[0];
    c.remove();
    aw.append(c);
});

down.on("click", function(){

    aw[0].scrollTop = aw[0].scrollTop - aw.children()[0].offsetHeight;

    var c = aw.children()[aw.children().length-1];
    c.remove();
    aw.prepend(c);
});
