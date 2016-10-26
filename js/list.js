// 戴欧妮珠宝 list  js
//list侧边栏点击出现下拉选项
function listSlideSection(){
	var firstMenu = $(".firstMenu",".listSlide");
	firstMenu.on("click",".firstMenuLink",function(){
		var activeSib = $(this).parent().siblings();
		var sib = $(this).parent().siblings();
		//点击导航后颜色变成红色
		$(this).addClass("active");
		$(".firstMenuLink",activeSib).removeClass("active");
		//点击导航后背景图片由+变为—
		$(this).css({
			"background":"url(../img/list/listhidebg.png) no-repeat"
		})
		$(".firstMenuLink",activeSib).css({
			"background":"url(../img/list/listshowbg.png) no-repeat"
		})
		//点击导航后相应的下拉菜单显示出来，其他兄弟菜单隐藏
		$(this).next().css("display","block");
		$(".secondMenu",sib).css("display","none");
		//console.log($(".secondMenu",sib))
	});
}

//通过获取json数据将相关内容动态的添加到list页面中
function addListMainPage(){
	
	//$.get("js/list.json",{},function(data){
		$.getJSON("../js/list.json",function(data){
		console.log(data);
		//解析json数据，提取出list导航栏的分类名
		
			var html = "";
			//console.log(data)
			for(var i in data){
				var item = data[i];
				html += "<li data-i='"+i+"'>"+item.name+"</li>"
			}
			$(".listMaiNavBar","#listContent").append(html);
			//自动加载列表页信息
		(function(){
			$(".listMaiNavBar").on("click","li",function(e){
				var i = $(this).data("i");
				//console.log(i);
				var item = data[i];
				var list = item.list;
				var html = "";
				for(var index = 0;index<list.length;index++){
					var child = list[index];
						html+='<div class="listMainPageSelection">'+
									'<div class="itemImg">'+
										'<a href="products.html?key='+i+'&id='+child.id+'">'+
											'<img src="../img/list/'+child.src+'"/>'+
										'</a>'+
									'</div>'+
									'<div class="itemName">'+
										'<a href="../producshow.html?key='+i+'&id='+child.id+'">'+child.name+'</a>'+
									'</div>'+
									'<div class="itemPrice clear">'+
										'<span class="priceMarket fl">'+
											'市场价：<b>'+child.marketprice+'</b>'+
										'</span>'+
										'<span class="priceDionly fr">'+
											'商城价：<b>'+child.dionlyprice+'</b>'+
										'</span>'+
									'</div>'+
								'</div>';
				}
				$(".listMainPage").html(html);
			})
			$("li",".listMaiNavBar").eq(0).trigger("click");
		})();
		
		
	})
}
function shopcar(shopInfo){
	//获取存在的商品信息
	//将字符串的商品信息 转换为对象
	var cars = [];
	//如果 cookie 中存在商品
	if(getCookie("cars")){
		//将 cookie 中的数据取出来，并转换为对象
		cars = JSON.parse(getCookie("cars"));
	}
	
	var flag = true; //假设购物车中没有这个商品
	
	//循环遍历购物车中的所有商品信息
	cars.forEach(function(shopitem){
		//条件成立，表示商品存在
		if(shopitem.id == shopInfo.id){
			flag = false; //证明购物车中有这个商品
			//将购买的商品数量 加到存在的商品数量上
			shopitem.count += shopInfo.count;
		}
	});
	
	//假设条件成立
	if(flag){
		//将商品存入这个数组对象
		cars.push(shopInfo);
	}
	
	//将数组转换为字符串存入 cookie
	setCookie("cars",JSON.stringify(cars));
	//将存入的商品信息取出，并打印
	console.log(getCookie("cars"));
}

function _shopinfo ($i,count) {
	var id = $i.data("id");
	var name = $i.data("name");
	var src = $i.data("src");
	var price = $i.data("price");
	var shopInfo = {
		"id" : id,
		"name" : name,	
		"src" : src,
		"price" : price
	};
	//将商品数量添加到 商品详细信息中
	shopInfo.count = count;
	shopcar(shopInfo);		
}

