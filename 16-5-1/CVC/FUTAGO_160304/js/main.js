$('.m-search').find('label').click(function(){
	$(this).hide().siblings('input').focus();
}).end().find('input').blur(function(){
	if($(this).val()==''){
		$(this).siblings('label').show();
	}
})



$('.g-nav').find('li').hover(function(){
    var _this = $(this);
    if(_this.children('ul').length){
        _this.children('ul').toggle();
    }
})