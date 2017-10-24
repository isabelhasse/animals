$(document).ready(function(){
  $("#animals").submit(function(event){
    event.preventDefault();
    var animal = $("#animal").val();
    $(".animal").hide();
    if (animal === "1") {
      $("#turtle").show();
    } else if (animal === "2") {
      $("#frog").show();
    } else if (animal === "3") {
      $("#octopi").show();
    } else if (animal === "4") {
      $("#kinkajou").show();
    }
  });
});
