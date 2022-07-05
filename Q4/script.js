$("span").css({ display: "block" });
$("#btn").css("margin", "30px");


$("#btn").on("click", function () {
  $("p")
    .add("span")
    .css({ "background-color":"lightblue", border: "2px darkblue dashed"});
  
//$("#btn").off("click");
});
