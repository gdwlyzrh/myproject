$(function(){
	var usernameReg = /^1[3578]\d{9}$/;
	var passwordReg =/^\w{1,20}$/;
	//用户名验证
	var userNameFlag = false;
	var passwordFlag = false;
	var userName = $(".phoneNumber","#login");
	var passWord = $(".password","#login");
	$("input",userName).on("blur",function(){
		var str = $(this).val();
		if(usernameReg.test(str)){
			if(getCookie("name")==str){
				$(this).siblings().html("手机号码正确").css("color","blue");
				userNameFlag = true;
			}else{
				userNameFlag = false;
				$(this).siblings().html("手机号不存在请重新注册").css("color","blue");
			}
		}else{
			$(this).siblings().html("手机号不正确").css("color","red");
			userNameFlag = false;
		}
	})
	//登录密码验证
	$("input",passWord).on("blur",function(){
		var str = $(this).val();
		if(passwordReg.test(str)){
			if(getCookie("password")==str){
				$(this).siblings().html("密码正确").css("color","blue");
				passwordFlag = true;
			}else{
				$(this).siblings().html("密码错误").css("color","red");
				passwordFlag = false;
			}
		}else{
			$(this).siblings().html("密码错误").css("color","red");
			passwordFlag = false;
		}
	})
	var loginSubmit = $(".loginSubmit","#login");
	loginSubmit.on("click",function(){
		if(userNameFlag && passwordFlag){
			setCookie("loginName",$("input",userName).val(),60*60*24*1000);
			location.href = "list.html";
		}
	})
	
})
