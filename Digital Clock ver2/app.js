

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



$(document).ready(function () {
    $(".add").click(function () {
        $(".list").append($('<div class="list-item"><input type="Tasks" id = "t1" class= "task-input"/><button class="done side-btn">✓</button><button type="submit" class="delete side-btn">X</button></div>'));
    });

    $(document).on("click", ".delete", function(){
        if ($(this).siblings(".task-input").val()) {
            $(this).parent().remove();
            $(".completed-section").append($('<div class="list-item"><p class="task-input2 completed">' + ($(this).siblings(".task-input").val()) + '</p>'));

          } else {
            $(this).parent().remove();
          }
      });

    });

    $(document).on("click", ".done", function(){
        $(this).siblings(".task-input").toggleClass("done-strike")
            $(this).toggleClass("done-click");
            });


// NEW JSCRIPT. 11-01-2021 ADD BUTTON
    $(document).ready(function() {
      $(".add").mouseover(function() {
        $(".add").append($('<p id="add-des">add a new note</p>'));
      })
    })

    $(document).ready(function() {
      $(".add").mouseout(function() {
        $("#add-des").remove();
      })
    })

// NEW JSCRIPT. 11-01-2021 DONE BUTTON

  // $(document).ready(function() {
  //   $(document).on("mouseover", ".done", function() {
  //     $(".done").mouseover(function() {
  //       $(".done").append($('<p id="done-des">add a new note</p>'));
  //     })
  //   })
  // })
  //
  // $(document).ready(function() {
  //   $(document).on("mouseout", ".done", function() {
  //     $(".done").mouseout(function() {
  //       $("#done-des").remove();
  //       console.log('works 2.');
  //     })
  //   })
  //   })
