//Check if document linked with Javascript and jQuery. 
// $(document).ready(function() {
//     $("div").css("border", "3px solid red");
// });


//

// ADD THE BELOW BACK
// $(document).ready ( function () {
    // $(document).on("click", "#list-item", function () {
        $(".add").click(function () {
            // $(".list").appendTo(".list").attr("id","list-item")
            $(".list").append($('<div class="list-item"><input type="Tasks" class= "task-input"/><button class="done side-btn">✓</button><button class="delete side-btn">X</button></div>')); 
        
            // $("input").ready(function() {

            $(".done").click(function (){
                $(this).siblings("input").toggleClass("done-strike")});
        
            $('.delete').click(function(){
            $(this).parent().remove();
        
            $(".done").click(function (){
                $(this).siblings("input").toggleClass("done-strike")});
        
                    });
                 });
            // });

        // });

    // })
// $(".add").click(function () {

// //     $(".list").append($('<div class="list-item"><input type="Tasks" class= "task-input"/><button class="done side-btn">✓</button><button class="delete side-btn">X</button></div>')); 

//     $("input").ready(function() {
//         $( ".add" ).click(function() {

//     $(".done").click(function (){
//         $(this).siblings("input").toggleClass("done-strike")});

//     $('.delete').click(function(){
//     $(this).parent().remove();

//     $(".done").click(function (){
//         $(this).siblings("input").toggleClass("done-strike")});

//             });
//          });
//     });
// });
// });
//

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






