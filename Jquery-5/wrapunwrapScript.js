$("document").ready(function(){
	$(":button").click(function(){
		$("#new").addClass("div");
		$("p").css("background-color","pink");
		$(":button").click(function(){
			
			//$("#new").css({"background-color":"white","border":"white","padding":"0px","font-weight":"normal","height":"auto"});
			$("#new").removeClass("div");
			
		});
	});
	
	
});

/*$("document").ready(function(){
	$(":button").click(function(){
		if($("p").parent().is("div")){
			$("p").unwrap();
		}
		else{
			$("p").wrap('<div class="div"></div>');
		}
		
	});
	
});*/