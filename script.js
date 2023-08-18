$(function () {
  $("h1").mouseenter(function () {
    $(this)
      .animate(
        {
          marginLeft: "+=300",
        },
        300
      )
      .fadeOut(400, function () {
        $(this).html("oooooooooo!").fadeIn(400);
      });
  });
});
