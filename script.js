$(".face-button").click(function() {
  $(".face-reply").text("you tend to be more more impulsive, spontaneous, and are less likely to take things seriously."); 
     $(".face-reply").css("background-color", "olive");
    $(".girl-reply").hide();
});

$(".girl-button").dblclick(function() {
    $(".girl-reply").show();
  $(".girl-reply").text("you are indecisive and are afraid to take risks.");
    $(".girl-reply").css("background-color", "darkblue");
    $(".face-reply").hide();
});

$(".bunny-button").click(function() {
  $(".bunny-reply").text("you are more likely to be more likely to be vulnerable and sensitive."); 
    $(".bunny-reply").css("background-color", "olive");
    $(".duck-reply").hide();
});
  $(".duck-button").dblclick(function() {
         $(".duck-reply").show();