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
    $(".list").append($('<div class="list-item"><input type="Tasks"/><button class="done side-btn">✓</button><button class="delete side-btn">X</button></div>')); 
    });
//USEFUL BASE BELOW.


$("body").on("click", ".done", function () {
    $(".task-input").wrap("<strike>");
    alert('well done.');

    });

// $("body").on("click", ".delete", function () {
//     $('div .list-item').click(function(e) { 
//         $(e.target).remove(); 
//     });
// });
//     // alert('well done.');
    


// $('.delete').click(function() { $(".task-input").remove(); });

//USEFUL base - below.
$("body").on("click", ".delete", function () {
    alert("you clicked delete.");
})
//USEFUL base - above.


// var numberOfList = (n);

var listOfItems = [];

$( "body" ).click(function() {
    // $(".list").append( $( '<div class="list-item"><input type="Tasks"/><button class="done side-btn">✓</button><button class="delete side-btn">X</button></div>' ) );
    var n = $( "div .list-item" ).length;
    var numberOfList = (n);
    console.log(numberOfList);
    listOfItems.push(numberOfList);
    $(".delete").click (function () {
        $.remove('listOfItem').$(".list-item")
    })
    // alert("you have " + numberOfList + " items to complete.");
    // /*$( "span").*/alert( "There are " + n + " divs." + "Click to add more.");
});


//   Trigger the click to start
// .trigger("click");

