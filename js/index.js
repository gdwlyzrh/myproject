//banner图运动效果，每三秒切换图片，点击小图标切换到图标对应的图片上
function bannerTab() {
	var num = 1;
	var bannerTimer = setInterval(bannerTabTimer, 3000);
	$("#banner .iconTab li").click(function() {
		num = $(this).index();
		bannerTabTimer();
	});

	function bannerTabTimer() {
		$("#banner .imgTab li").eq(num).fadeIn(500).siblings().fadeOut(500);
		$("#banner .iconTab li").eq(num).addClass("active").siblings().removeClass("active");
		++num == 3 ? num = 0 : num;
	}
}