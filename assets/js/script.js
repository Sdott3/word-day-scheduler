$(document).ready(function() {

  
    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();
  
      // loop over time blocks
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
  
        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass("future");
        } 
        else if (blockHour === currentHour) {
          
          $(this).addClass("present");
        } 
        else {
          $(this).addClass("past");
        }
      });
    }

    hourUpdater();

     // listen for save button clicks
     $(".saveBtn").on("click", function() {
        // get nearby values
        var value = $(this).siblings(".value").text();
        var time = $(this).siblings(".time").val
    
        // save in localStorage
        localStorage.setItem(value, time);
    });

    // saved data from localStorage
    $("hour-9.description").val(localStorage.getItem("hour-9"));
    $("hour-10.description").val(localStorage.getItem("hour-10"));
    $("hour-11.description").val(localStorage.getItem("hour-11"));
    $("hour-12.description").val(localStorage.getItem("hour-12"));
    $("hour-1.description").val(localStorage.getItem("hour-1"));
    $("hour-2.description").val(localStorage.getItem("hour-2"));
    $("hour-3.description").val(localStorage.getItem("hour-3"));
    $("hour-4.description").val(localStorage.getItem("hour-4"));
    $("hour-5.description").val(localStorage.getItem("hour-5"));

    // display current day on page
    $("#currentDay").text(moment().format("ddd, MMM DD, YYYY h:mm a"));
});