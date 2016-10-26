// 戴欧妮珠宝 common js
//搜索框聚焦失去焦点
function searchOnFocus(){
	$("#searchInput").focus(function(){
		//console.log(222)
		if ($.trim($("#searchInput").val()).length == 0) {
            $("#searchInput").val("请输入型号或者名称");
        }
		if ($.trim($("#searchInput").val()) == "请输入型号或者名称") {
            $("#searchInput").val("");
            //console.log(111)
        }
	})
}
function searchOnBlur(){
	$("#searchInput").blur(function(){
		//console.log(111)
        $("#searchInput").val("请输入型号或者名称");
    });
}

//全部分类的下拉选框
function subMenu(){
	$("#classAll").mouseenter(function(){
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
	$("#classAll ul a").mouseenter(function(){
		//console.log(1111)
		//$("#classAll ul li").css("background","")
		$(this).css("color","#db3962");
	})
	$("#classAll ul a").mouseleave(function(){
		//console.log(1111)
		$(this).css("color","#ffffff");
	})
	$("#classAll ul li").mouseenter(function(){
		$(this).css("background","#1c1919");
	})
	$("#classAll ul li").mouseleave(function(){
		$(this).css("background","#383333");
	})
}

//地区选择轮转框
function cityTab(){
	$("#experience .area a").mouseenter(function(){
		var num = $(this).index();
		$("#experience .address li").eq(num).css("display","block").siblings().css("display","none");
		$("#experience .pic li").eq(num).css("display","block").siblings().css("display","none");
	})
}

//用户名登录判断

$(function(){
	var logInHead = $(".headLeft","#header").find("li").eq(1);
	var logInLink = $("a",logInHead);
	//console.log(logInLink.html())
	if(getCookie("loginName")){
		logInLink.html(getCookie("loginName"));
		$("a",logInHead.next()).html("取消登录")
	}
})
//go top
$(function(){
	$(".txt1").click(function () {
	        var speed=200;//滑动的速度
	       $('body').scrollTop( $(document).scrollTop() );
	       console.log($('body').scrollTop());
	        $('body,html').animate({ scrollTop: 0 }, speed);
	       
	 });
});
$(function(){
	$(".showImg1").click(function () {
	        var speed=200;//滑动的速度
	       $('body').scrollTop( $(document).scrollTop() );
	       console.log($('body').scrollTop());
	        $('body,html').animate({ scrollTop: 0 }, speed);
	       
	 });
});















