$("document").ready(function(){
	var a =parseInt($("#FirstNumber").val());
	
	var b = parseInt($("#SecondNumber").val());
	
	console.log(a);
	console.log(b);
	
	$("#btn").click(function(){
		if($("#FirstNumber").val()=="" || $("#SecondNumber").val()=="")
		{
			$(".number").addClass("empty");
		}
		else
		{
			$("#Answer").val(parseInt($("#FirstNumber").val())+parseInt($("#SecondNumber").val()));
			
			
		}
	});
});