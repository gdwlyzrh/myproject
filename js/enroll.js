// 戴欧妮珠宝 regin js
//function phoneNumber(){
$(function(){
	var phoenNumber = $(".phoneNumber","#regin");
	var phoneReg = /^1[3578]\d{9}$/;
	var phoneFlag = false;
	
	//手机号码验证
	$("input",phoenNumber).blur(function(){
		var	phone = $(this).val();
		if(phoneReg.test(phone)){//手机格式验证
			phoneFlag = true;
			$(this).siblings().html("输入的手机号码有效").css("color","blue");
//			if(cookie.length == 0){
//				$(this).siblings().html("输入的手机号码有效").css("color","blue");
//				phoneFlag = true;
//			}else{
//				for(var i=0;i<cookie.length;i++){
//					if(cookie[i].name == phone){
//						$(this),siblings().html("手机号码已被注册").css("color","red");
//						phoneFlag = false;
//						break;
//					}
//				}
//				if(flag){
//					$(this).siblings().html("输入的手机号码有效").css("color","blue");
//				}
//			}
		}else{
			$(this).siblings().html("输入的格式不正确").css("color","red");
			phoneFlag = false;
		}
		
	});
	//随机数字放入验证码对话框中
	$(".randomNumber",".detect").html(randomNum());
	
	//生产验证码
	function randomNum(){//生成验证码
		var a = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var arr = [];
		outer:
		for(var i=1;;){
			var num = Math.floor(Math.random()*a.length);
			inner:
			for(var j=0;j<arr.length;j++){
				if(arr[j]==a[num]){
					continue outer;
				}
			}
			arr.push(a[num]);
			i++;
			if(i==5)
			break;
		}
		return arr;
	}

	//密码验证
	var pwd = "";
	var setPassword = $(".setPassword","#regin");
	$("input",setPassword).on("blur",function(){
		pwd = $(this).val();
		if(/^\w{1,20}$/.test(pwd)){ //密码包含数字字母
			$(this).siblings().html("密码可用").css("color","blue");
			
		}else{
			$(this).siblings().html("密码必须为字母数字下划线").css("color","red");
		}
	})
	//密码确认
	var confirmPassword = $(".confirmPassword","#regin");
	$("input",confirmPassword).on("blur",function(){
		console.log($(".setPassword","#regin").val())
		if($(this).val() == pwd){
			$(this).siblings().html("密码正确").css("color","blue");
		}else{
			$(this).siblings().html("确认密码不正确").css("color","red");
		}
	});
	//获取用户名cookie
	//var cookie = JSON.parse(getCookies("username"))==null?[]:JSON.parse(getCookies("username"));
	
	//注册并将信息存入cookie
	var regSubmit = $(".regSubmit","#regin");
	regSubmit.click(function(){
		var phoneNum = $("input",phoenNumber).val();
		var pwdNum = $("input",setPassword).val();
		//console.log(pwdNum)
		//console.log(phoneNum)
		setCookie("name",phoneNum,1000*60*60*24);
		setCookie("password",pwdNum,1000*60*60*24);
		//console.log(getCookie("name"));
		alert("恭喜您,注册成功");
		location.href = "register.html";
	})
})
	