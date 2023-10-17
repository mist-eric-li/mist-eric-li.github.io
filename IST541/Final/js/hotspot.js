
$( function() {
   $("map area").click( function(){
	   $('#myModal').modal("show");

      if ($(this).attr("id") == "Cost") {
         $("#feedback").html("Correct! This area tells you the cost of the card.");
		   $("#feedback").css("background-color","#41695B")
		 $("#feedback").css("color","#f4f2ef");
      }

      if ($(this).attr("id") == "Name") {
       $("#feedback").css("color","#f4f2ef");
		  $("#feedback").css("background-color","#844352")
         $("#feedback").html("Incorrect. This area tells you the name of the card.");
      }

      if ($(this).attr("id") == "Description") {
         $("#feedback").css("color","#f4f2ef");
         $("#feedback").html("Incorrect. This area tells you what the card does on play.");
      }
	   if ($(this).attr("id") == "Type") {
         $("#feedback").css("color","#f4f2ef");
         $("#feedback").html("Incorrect. This area tells you the type of the card.");
      }

   });
});
