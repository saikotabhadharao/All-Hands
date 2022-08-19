$("document").ready(function(){
	/*$("p").mouseenter(function(){
		$("p").css("background-color","red");
	});
	$("p").mouseleave(function(){
		$("p").css("background-color","blue");
	});*/
	
	$("p").hover(function(){
		$("p").css("background-color","red");
	},function(){
		$("p").css("background-color","blue");
	});
	$(":button").click(function(){
		$("p").slideUp(3000);
	
	});
	$(":submit").click(function(){
		$("p").slideDown(3000);
	
	});
	
});