
$( function() {
   $("map area").click( function(){
	   $('#myModal').modal("show");

      if ($(this).attr("id") == "Cost") {
         $("#feedback").html("This area tells you the cost of the card.");
		 $("#feedback").css("color","#f4f2ef");
      }

      if ($(this).attr("id") == "Resources") {
       $("#feedback").css("color","#f4f2ef");
         $("#feedback").html("This area tells you the resources the card gives you on play.");
      }

      if ($(this).attr("id") == "Description") {
         $("#feedback").css("color","#f4f2ef");
         $("#feedback").html("This area tells you what the card does on play.");
      }
	   if ($(this).attr("id") == "Bounty") {
         $("#feedback").css("color","#f4f2ef");
         $("#feedback").html("This area tells you what the opponent needs to pay to remove the card from the game and what they get for doing so.");
      }

   });
});
