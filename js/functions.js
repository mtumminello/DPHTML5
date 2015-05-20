function navClick(id){
	resetCSS();
			var mId = "m"+id;
			$(".marqueeMain").css("display","none");
			$("#"+mId).css("display","block");
			$("#"+id).css("color","white");
			$("#"+id+" span").css("visibility","visible");
			$("#"+id+" span").css("color","red");
}

function resetCSS(){
			$(".marquee").css("display","none");
			$("#sidebar li").css("color","rgba(179,221,242,1)");
			$("#sidebar li span").css("visibility","hidden");
			$("#sidebar li").css(":hover","hidden");
}
/* $(document).ready(function(){
    $("#sidebar li").hover(function(){
        $("#sidebar li").css("color","white");
        },function(){
        $("#sidebar li").css("color","rgba(179,221,242,1)");
    });
} */