// $('#btn').click(function(){
//     $.ajax({
//         type:'GET',
//         url:'https://62ab5a24bd0e5d29af0e4604.mockapi.io/api/ajax',
//         success: function(orders){
//             $.each(orders,function(index,order){
//                 $('#show-info').append(`<p>name:${order.name}  , drink:${order.drink }</p>`);

//             })
//         }
//     })
// })

$(document).ready(function () {
  const info = $("#show-info");
  $("#btn").click(function () {
    $.ajax({
      url: "https://62ab5a24bd0e5d29af0e4604.mockapi.io/api/ajax",
    }).done(function (orders) {
      $.each(orders, function (index, order) {
        info.append(`<p>name:${order.name}  , drink:${order.drink}</p>`);
      });
    });
  });
});
