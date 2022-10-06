
 // This displays the current date on the header
var current = moment().format(" dddd MMMM D, YYYY ")
$("#currentDay").text(current)
// This is where we set up the save button also it is where we store the time and description
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var plan = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, plan);




});

// This calculates the current time in military time 
var currentTime = moment().format("HH")
//This function calculates the current time and compares it to the time we have inputed in our html. Also, in the function adds classes to help determine past, present, future.
$(".timeZone").each(function () {
    var timeBlock = $(this).attr("id").split("-")[1];
    if (currentTime == timeBlock) {
        $(this).addClass("present");
        $(this).removeClass("future")
        $(this).removeClass("past")
    }
    else if (currentTime > timeBlock) {
        $(this).removeClass("present");
        $(this).removeClass("future")
        $(this).addClass("past");
    }
    else if (currentTime < timeBlock) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});




// This is how we get our local storage to the page in the text boxes
$("#hour-09 .description").val(localStorage.getItem("09"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));




