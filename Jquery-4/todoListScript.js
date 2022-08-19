$("document").ready(function(){
	 
	 $("#btn").click(function(){
		 if($("#task").val()=="")
	 {
		 alert("enter the message");
	 }
	 else{
		 $("p").append("<br>"+$("#task").val());
	 }
	 });
	 
});