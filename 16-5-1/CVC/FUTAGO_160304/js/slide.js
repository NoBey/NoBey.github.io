(function($){
	$.fn.slide=function(options){
		var opts = $.extend({},$.fn.slide.defaults,options);
		var _this = $(this),
			li_width = _this.find('li').outerWidth(),
			li_length = _this.find('li').length,
			doc_width = (_this.outerWidth() - li_width)/2,
			base_left = -li_width*li_length + doc_width;
			

		if(opts.pages){
			_this.append('<div class="m-slide-page"></div>');
			for(var i=0;i<li_length;i++){
				var h = i==0 ? '<i class="crt">'+(i+1)+'</i>' : '<i>'+(i+1)+'</i>';
				_this.find('.m-slide-page').append(h);
			}
		}

		_this.css('position','relative').find('ul').addClass('m-slide-box');
		var slide_box=_this.find('.m-slide-box');
		slide_box.css({ position:'absolute' , left:base_left , width:'19999px' , height:_this.height() })
				 .append( slide_box.html() + slide_box.html() );
		_this.find('li').eq(li_length).addClass('crt');

		var page=1;
		function slide_animate(k){
			if(!slide_box.is(':animated')){
				if(k){
					page++;
					slide_box.animate({left:'-='+li_width},opts.speed,function(){
						if(page>li_length){
							page=1;
							slide_box.css('left',base_left);
						}
					});
				}else{
					if(page==1){
						slide_box.css({left:base_left-(li_width*li_length)}).animate({left:'+='+li_width},opts.speed);
						page=li_length;
					}else{
						slide_box.animate({left:'+='+li_width},opts.speed);
						page--;
					}
				}
				setPage();
			}
		}

		/*
		 * 鼠标移入模块暂停动画，移出继续
		*/
		var s;
		_this.hover(function(){
			clearInterval(s);
			_this.children('span').show();
		},function(){
			s=setInterval(function(){
				slide_animate(true);
			},opts.autotime);
			_this.children('span').hide();
		}).trigger('mouseleave');

		/*
		 * 分页
		*/
		_this.find('.m-slide-page').find('i').each(function(i){
			var self=$(this);
			self.mouseover(function(){
				self.addClass('crt').siblings().removeClass('crt');
				slide_box.stop(true,false).animate({ left : base_left-i*li_width } , opts.speed);
				page=i+1;
				setPage();
			})
		})

		/*
		 * 是否添加‘上一个/下一个’按钮
		*/
		if(opts.arrow){
			_this.append('<span class="' + opts.prev + '"></span><span class="' + opts.next + '"></span>');
			_this.find('.'+opts.next).on('click',function() {
				slide_animate(true);
			});
			_this.find('.'+opts.prev).on('click',function() {
				slide_animate(false);
			})
		}

		function setPage(){
			setTimeout(function(){
				var index = page>li_length ? 0 : page-1 ;
				_this.find('li').eq(index + li_length).addClass('crt').siblings('li').removeClass('crt');
				_this.find('.m-slide-page').find('i').eq(index).addClass('crt').siblings().removeClass('crt');
			},opts.speed);
		}
	}
	$.fn.slide.defaults={
		next : '',	//下一个按钮（可不填）
		prev : '',	//上一个按钮（可不填）
		speed : '300',	//速度
		autotime : '3000', //间隔时间
		arrow : false,	//箭头
		pages : true		
	}
})(jQuery);