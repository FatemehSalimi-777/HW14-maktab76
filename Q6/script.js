
   
$(document).ready(function(){
    $("button").click(function(){
        let v = $("#entery").val();
    $("ul").append(`<li>${v}</li>`);
    });
    
});


 $(document).ready(function(){
    $('ul').on('click',function(){
        $(this).remove();
     })
 })









