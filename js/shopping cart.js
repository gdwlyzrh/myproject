// 戴欧妮珠宝 shopcart js
$(function(){
	var cars = getCookie("cars");
	console.log(cars)
	//如果 cookie 有商品信息
	if(cars){
		//将商品信息转换为对象
		cars = JSON.parse(cars);
	}else{
		//默认空数据
		cars = [];
	}
	var html = "";
	//循环 cookie 中的商品信息
	//动态生成 html
	cars.forEach(function(shopinfo,i){
		html += '<table>'+
					'<tr class="headRow">'+
						'<td style="width:110px;">商品</td>'+
						'<td>型号</td>'+
						'<td style="width:110px;">数量</td>'+
						'<td style="width:110px;">市场价格</td>'+
						'<td style="width:110px;">商城价格</td>'+
						'<td style="width:110px;">操作</td>'+
					'</tr>'+
					'<tr class="productsDetail">'+
						'<td><img src="img/list/'+shopinfo.src+'" style="width:120px;height:120px;"/></td>'+
						'<td class="type">'+shopinfo.name+'</td>'+
						'<td class="size">'+shopinfo.count+'</td>'+
						'<td class="marketPrice">'+shopinfo.marketprice+'</td>'+
						'<td class="dionlyPrice">'+shopinfo.dionlyprice+'</td>'+
						'<td class="action">'+
							'<a class="delBtn" href="javascript:void(0);">删除</a>'+
						'</td>'+
					'</tr>'+
				'</table>'
//				<div class="count">
//					<span>共</span>
//					<span class="totalCount">1</span>
//					<span>件商品</span>
//					<span>商品总金额</span>
//					<span class="priceCount">￥</span>
//					<span class="button">结算</span>
//				</div>
		$(".dimondCart").html(html);
//		console.log($(".productsDetail"))
	});
	var _tdAction = $(".action",".productsDetail")

//	$(_tdAction).on("click",".delBtn",function(){
////		console.log(111)
//		if(confirm("是否确认删除 ？ ")){
//			var $shopItem = $(this).parent().parent().parent();
//			//取出商品信息
//			//var $p = $(this).siblings(".count");
//			//删除该商品
//			//removeShopCar($p.data());
//			$shopItem.remove();
//		}
//	})
})


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
//	console.log(getCookie("cars"));
}

function _shopinfo ($i,count) {
	var id = $i.data("id");
	var name = $i.data("name");
	var src = $i.data("src");
	var marketprice = $i.data("marketprice");
	var dionlyprice = $i.data("dionlyprice");
//	console.log($i);
	
	var shopInfo = {
		"id" : id,
		"name" : name,
		"src" : src,
		"marketprice" : marketprice,
		"dionlyprice" : dionlyprice
	};
	//将商品数量添加到 商品详细信息中
	shopInfo.count = count;
	shopcar(shopInfo);		
}

/**
 * 将一件商品从购物车中删除
 * @param {Object} shopinfo
 */
function removeShopCar(shopinfo){
	//获取存在的商品信息
	//将字符串的商品信息 转换为对象
	var cars = [];
	//如果 cookie 中存在商品
	if(getCookie("cars")){
		//将 cookie 中的数据取出来，并转换为对象
		cars = JSON.parse(getCookie("cars"));
	}
	for(var i=0;i<cars.length;i++){
		//判断这个商品是否存在
		if(cars[i].id == shopinfo.id){
			cars.splice(i,1);
			//应该将修改后的商品信息 ，从新写入到cookie中
			setCookie("cars",JSON.stringify(cars));
			break;
		}
	}
}
