var conditionslist =["客户","海关编号","品名","经营单位","统一编号","申报单位","提运单号","监管方式","航次","商品编号","运输工具","征免性质","申报地海关","合同协议号","集装箱号","客户业务号","通关单号","接单日期","申报日期"]
var conditionsnum=JSON.parse(localStorage.num1) 
var conditionsnum2=JSON.parse(localStorage.num2) 
var conditions =function() {
	var init=function(){
		var conditions= conditionslist

		creat('.cx_content_top',conditionsnum)
		creat('.cx_content_body',conditionsnum2)
		
		$("#confirm_btn").click(function(){
			var num1 = new Array()
			var num2 = new Array()
			
			$('.cx_content_top').children().each(
				function(){
					num1.push($(this).attr('number'))
				}
			)
			$('.cx_content_body').children().each(
				function(){
					num2.push($(this).attr('number'))
				}
			)
			localStorage.num1=JSON.stringify(num1)
			localStorage.num2=JSON.stringify(num2)
			alert("保存成功")
			  window.location.href="index.html"
			
		})
		
		
		
	}
	init()

function creat(element,list){
		for (var i in list) {
		if(	list[i]==''){
			continue
		}
		//console.log(list[i])
		//console.log(conditionslist[list[i]])
		var el ='<div'+" number="+list[i] +' class="cx_content_wrap"><span>'+conditionslist[list[i]]+'</span><input type="text" value="" /></div>'
			$(element).append(el)
		}
	}
	
}
conditions()

$(function() {
	$(".cx_content_body,.cx_content_top").sortable({
		connectWith: '.sortable',
		cursor: "move",
		opacity: 0.8,
		revert: true,
		scroll: false,
		deactivate: function(event, ui) {
			event.stopPropagation()
		},
		stop: function(event, ui) {
			event.stopPropagation()
			if ($(".cx_content_top").children().length > 3) {
  			  return false;
			}
		}
	});

	$(".cx_content_body,.cx_content_top").disableSelection();

});

// JSON.stringify([1,2,3])