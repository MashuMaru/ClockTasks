//Check if document linked with Javascript and jQuery. 
// $(document).ready(function() {
//     $("div").css("border", "3px solid red");
// });

function runTime() {
    var fullDate = new Date();

    var hours = fullDate.getHours();

    var minutes = fullDate.getMinutes();

    var seconds = fullDate.getSeconds();
    
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var weekdayInput = weekday[fullDate.getDay()];

    var date = fullDate.getDate();

    var month = new Array(12);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    var monthInput = month[fullDate.getMonth()];


    var year = fullDate.getFullYear();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    document.getElementById('hour').innerHTML = (hours + ":");

    document.getElementById('minute').innerHTML = (minutes + ":");

    document.getElementById('second').innerHTML = seconds;

    document.getElementById('date').innerHTML = weekdayInput;

    document.getElementById('day').innerHTML = date + " -";

    document.getElementById('month').innerHTML = monthInput + " -";

    document.getElementById('year').innerHTML = year;
};

setInterval(runTime, 1000);
//USEFUL BASE BELOW.
$(".add").click(function () {
    $(".list").append($('<div class="list-item"><input type="Tasks" class= "task-input"/><button class="done side-btn">✓</button><button class="delete side-btn">X</button></div>')); 

});
//USEFUL BASE BELOW.

//USEFUL base - below.
// $("body").on("click", ".delete", function () {
//     alert("you clicked delete.");
// })
//USEFUL base - above.


var listOfItems = [];

$( ".add" ).click(function() {
    var newID = $( "div .list-item" ).length;
    var numberOfList = (newID);
    console.log(listOfItems);

    listOfItems.push(numberOfList);

    $(this, ".list-item").attr("id", newID);

    $('.delete').click(function(){
        $(this).parent().remove();
     });

    // works to strike through text

    //   $('.done').click(function(){
    //     $(this).parent().find("input").css("text-decoration", "line-through");
    //  });
    // });
    
    // works to strike through text

    // the below function doesnt fully work - but does something....
//     $(".done").toggle()(function () {
//         $(this).parent().find("input").click() (function(){
//             $(this).parent().find("input").click().css("text-decoration", "line-through");
//          },  function () { $(this).parent().find("input").css("text-decoration", "none")}); 
//     });
// });
    // the above function doesnt fully work - but does something....
