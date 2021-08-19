console.log("hello");
// set interval clock to display the current time and date




//button to launch modal


$("#launch-btn").on("click", function () {
    $("#staticBackdrop").modal("show");
    console.log("bye");
    console.log($("#staticBackdrop"));
});

$("#close-btn").on("click", function () {
    $("#staticBackdrop").modal("hide");
    console.log("bye");
    console.log($("#staticBackdrop"));
});

$("#understood-btn").on("click", function () {
    $("#staticBackdrop").modal("hide");
    console.log("bye");
    console.log($("#staticBackdrop"));
});
