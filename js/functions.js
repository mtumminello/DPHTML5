function navClick(id){
			
			resetCSS();
			
			var mId = "m"+id;
			var folder="url('./images/";
			var ext = ".jpg')";
			var imagefile = folder+mId+ext;
			
			$(".marqueeMain").css("display","none");
			$("#"+mId).css("display","block");
			$("#"+id).css("color","white");
			$("#"+id+" span").css("visibility","visible");
			$("#"+id+" span").css("color","red");
			$("#titleDiv").css("background-image",imagefile);
}

function navMobileClick(){
	var dispValue = $(".mainNav").css("display");
	if(dispValue == "none"){
		$(".mainNav").css("display","block");
	}	
	else{
	$(".mainNav").css("display","none");
	}	
}


function resetCSS(s){
			$(".marquee").css("display","none");
			$("#sidebar li").css("color","rgba(179,221,242,1)");
			$("#sidebar li span").css("visibility","hidden");

}