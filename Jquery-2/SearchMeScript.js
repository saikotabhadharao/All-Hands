$("document").ready(function(){
	$("span").hover(function(){
		$(this).css("backgroundColor","bisque");
		if($(this).text().includes("th"))
		{
			//$(this).css({"font-style":"italic","font-weight":"bold","text-shadow":"2px 2px pink"});
			$(this).addClass("find");
		}	
	},function(){
		$(this).css("backgroundColor","white");
	});
	
	
});