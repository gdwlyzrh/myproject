$(function(){
		var magnify={
			init:function(){
				this.xWrapper=$('.xwrapper')
				this.dWrapper=$('.dwrapper')
				this.filter=this.xWrapper.find('.filter')
				this.largeImg=this.dWrapper.find('img')
				this.posX=0;
				this.posY=0;
				this.offset=this.xWrapper.offset();
				


				this.mouseenter();
				this.mousemove();
			},
			mouseenter:function(){
				var that=this;
				this.xWrapper.hover(function(e) {
					that.getPos(e)
					that.filter.css({
						left:that.posX-100,
						top:that.posY-100
					})
					that.filter.show();
					that.dWrapper.show();
				}, function() {
					that.filter.hide();
					that.dWrapper.hide();
				});
			},
			mousemove:function(){
				var that=this;
				this.xWrapper.mousemove(function(e){
					that.getPos(e);
					that.filter.css({
						left:that.posX-100,
						top:that.posY-100
					});
					that.largeImg.css({
						left:-(that.posX-100)*2,
						top:-(that.posY-100)*2
					});
				});
			},
			getPos:function(e){
				var x=e.pageX-this.offset.left;
				var y=e.pageY-this.offset.top;
				this.posX=(x<100)?100:(x>300?300:x)
				this.posY=(y<100)?100:(y>300?300:y)

			}
		};
		magnify.init();
	})
//放大镜修改属性
$(function(){
	$('.fdj_ul2 li').click(function(){
		var scrs = $(this).find('img').attr("src")
		$('.xwrapper img').attr({
			src:scrs
		})
		$('.dwrapper img').attr({
			src:scrs
		})
		$(this).addClass('redli2').siblings().removeClass('redli2');	
	})
	$('.fdj_ul2 li').hover(function() {
		$(this).addClass('redli');
	}, function() {
		$(this).removeClass('redli');
	});
})
//li
$(function(){
	var banner={
		init:function(){
			this.fLeft = $(".fdj_left");
            this.fRight = $(".fdj_right");
            this.fwrap3=$(".fdj_ul2")
            this.fliwudth=this.fwrap3.find("li").first().width();
            this.flistwudth=this.fwrap3.find("li")
			this.nextclick();
			this.preclick();
			this.index=0;

		},
		switchImg:function(){//circles ciritem
			var that=this;
			this.fwrap3.stop().animate({
				left:-that.index*that.fliwudth
			}, 1000)
			console.log(this.fwrap3)
		},
		nextclick:function(){
			var that=this;
			this.fLeft.click(function(){
				that.index--;
				if (that.index <= 0) {
					that.index = 0
				};
				//console.log(that.index)
				that.switchImg();
			})
		},
		preclick:function(){
			var that=this;
			this.fRight.click(function(){
				that.index++;
				if (that.index >= 7) {
					that.index = 7;
				};
				//console.log(that.index)
				that.switchImg();

			})
		}
	}
	banner.init();
})
//tab
$(function(){
   $('.map_nav').click(function(){
        $(this).addClass('mapact');
        $(this).siblings().removeClass('mapact');
        $('.mapcon').eq($(this).index()).addClass('mapact').siblings().removeClass('mapact')
   })
   $('.mapcolse').click(function(){
   		$('.map_tab').hide();
   })
   // $('.xqy_map').hover(function() {
   // 		$('.map_tab').show();
   // }, function() {
   // 		setTimeout(function(){
   // 			$('.map_tab').hide()
   // 		},3000)
   // });
   $('.xqy_map').mouseenter(function() {
   		console.log("huaru")
		$('.map_tab').show();  	
   });

   	$(".map_tab").mouseleave(function(event) {
   		/* Act on the event */
   		setTimeout(function(){
    			$('.map_tab').hide()
   		},3000)
   	});
})
//模态
$(function(){
	$('.modalbtn').click(function(){
		$('.xqy_modal').show();
	})
	$('.xqy_modal').click(function(e){
		if(!$(e.target).is('.modalimg,.modalimg *')){
			$('.xqy_modal').hide();
		}
	})
})