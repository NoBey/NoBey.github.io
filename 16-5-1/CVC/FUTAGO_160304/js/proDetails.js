$('.m-pro-img-list').find('img').click(function(){
	bigImg=$(this).attr('big-img');
	$('.m-pro-img-big').find('img').attr('src',bigImg)
})

//调用
$('a[name="enquiry"]').click(function(){
    var h=[
        '<ul class="m-win-contact">',
		'<li><label><span class="m-win-tit">Name:</span><input type="text"></label></li>',
		'<li><label><span class="m-win-tit">Tel:</span><input type="text"></label></li>',
		'<li><label><span class="m-win-tit">E-mail:</span><input type="text"></label></li>',
		'<li><label><span class="m-win-tit">Massage:</span><textarea></textarea></label></li>',
		'<li><span class="m-win-tit">&nbsp;</span><label><input type="checkbox" class="checkbox" /> send me a copy</label></li>',
		'<li><span class="m-win-tit">&nbsp;</span><a href="#" class="u-btn">SUBMIT</a>',
		'</ul>'
    ];
    $.showWin({obj:'win',title:'CONTACT US',Width:'480',drag:1,content:h.join(''),button:0})
})