$(document).ready(function () {
  $("button").click(function () {
    let info = $("input").val();
    $(".container #showInfo").append(
      `<p id="output" style="border: 1px solid black;background-color: white;width:500px;>${info}</p>`
    );
  });
  $("#showInfo").click(function () {
    $("#output").remove();
  });
});



