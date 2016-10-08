
//全部分类的下拉选框
function subMenu(){
	$("#all").mouseenter(function(){
		$("#classAll ul").css({
			"display":"block",
			});
		$(this).css({"background-position":"160px -38px"})
		$("#classAll .classAll").css({
			"color":"#ffffff",
		})
	})
	$("#classAll").mouseleave(function(){
		$("#classAll ul").css({
			"display":"none",
		});
		$(this).css({"background-position":"160px 0"})
	})


	$("#all p").mouseenter(function(){
		//console.log(1111)
		//$("#classAll ul li").css("background","")
		$(this).css("color","#db3962");
	})
	$("##all p").mouseleave(function(){
		//console.log(1111)
		$(this).css("color","#ffffff");
	})
	$("#all p").mouseenter(function(){
		$(this).css("background","#1c1919");
	})
	$("#all p").mouseleave(function(){
		$(this).css("background","#383333");
	})
}