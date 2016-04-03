 
 // 绑定更多条件按钮
 $("#seacher_btn").click(function(){
  $(".cx_content_body").toggle( "fold", { times: 3 }, "slow" ,function(){
  	if($(".cx_content_body").css('display')=='none'){
  		 $("#seacher_btn").html('更多条件')
  		 return
  	}
  	 $("#seacher_btn").html('收起更多条件')
  	 return
  });
  });
 //*****************
if(!localStorage.num1){
	localStorage.num1=[1,2,3]
}
if(!localStorage.num2){
	localStorage.num1=[4,5,6,7,8,9,10,11,12,13]
}
var conditionslist =["客户","海关编号","品名","经营单位","统一编号","申报单位","提运单号","监管方式","航次","商品编号","运输工具","征免性质","申报地海关","合同协议号","集装箱号","客户业务号","通关单号","接单日期","申报日期"]
var conditionsnum=JSON.parse(localStorage.num1) 
var conditionsnum2=JSON.parse(localStorage.num2) 
var conditions =function() {
	var init=function(){
		var conditions= conditionslist
		var conditions_body =new Array()
		var conditions_top=new Array()
		for (var i in conditionsnum) {
			conditions_top.push(conditions[conditionsnum[i]])
		}
		for (var i in conditionsnum2) {
			conditions_body.push(conditions[conditionsnum2[i]])
		}
		
		console.log(conditions_body)
		creat('.cx_content_top',conditions_top)
		creat('.cx_content_body',conditions_body)
		
	}
	init()
	
function creat(element,list){
		for (var i in list) {
		if(	list[i]==''){
			continue
		}
		var el ='<div class="cx_content_wrap"><span>'+list[i]+'</span><input type="text" value="" /></div>'
			$(element).append(el)
		}
	}
	
}

conditions() 



$('table tr').click(function() {
	console.log(11111)
	$('#move_box').css('left','100%')
	$('#seacher').hide()
	$("#result").animate({'width':'40%','height':'660px'})
	$('#move_box').animate({'left':'50%'})
		$("#result table").animate({'height':'560px'})
})



// cx_box1

  $(document).ready(function() {
            $(".cx_box_wrap").scroll(function() {
                //$(document).scrollTop() 获取垂直滚动的距离
                //$(document).scrollLeft() 这是获取水平滚动条的距离
                if ($(".cx_box_wrap").scrollTop() <= 0) {
                  console.log('1----'+$(".cx_box_wrap").scrollTop() )
                }


                if ($(".cx_box_wrap").scrollTop() >= $(".cx_box_wrap table").height() -$(".cx_box_wrap").height()) {
                 console.log('2----'+$(".cx_box_wrap").scrollTop() )
                $(".cx_box_wrap table").append('<tr><td class="q2" >1111</td><td class="q2"  >2</td><td class="q3" >3</td><td class="q4" >4</td></tr>')
                $(".cx_box_wrap table").append('<tr><td class="q2" >1111</td><td class="q2"  >2</td><td class="q3" >3</td><td class="q4" >4</td></tr>')
                $(".cx_box_wrap table").append('<tr><td class="q2" >1111</td><td class="q2"  >2</td><td class="q3" >3</td><td class="q4" >4</td></tr>')
                $(".cx_box_wrap table").append('<tr><td class="q2" >1111</td><td class="q2"  >2</td><td class="q3" >3</td><td class="q4" >4</td></tr>')
                $(".cx_box_wrap table").append('<tr><td class="q2" >1111</td><td class="q2"  >2</td><td class="q3" >3</td><td class="q4" >4</td></tr>')
                $(".cx_box_wrap table").append('<tr><td class="q2" >1111</td><td class="q2"  >2</td><td class="q3" >3</td><td class="q4" >4</td></tr>')
                $(".cx_box_wrap table").append('<tr><td class="q2" >1111</td><td class="q2"  >2</td><td class="q3" >3</td><td class="q4" >4</td></tr>')
                }
            });
            
            
            $('.box_list').children('input').click(function(){
            	var classs = $(this).attr('name')
            
            	if ($(this).prop("checked")==true) {
                  $(this).parents('.cxbox').find('.'+classs).show()
               
            	}
            		if ($(this).prop("checked")==false) {
            	$(this).parents('.cxbox').find('.'+classs).hide()
            	}
            })
        });
    
  $(function() {
    $( ".cx_box1,.cx_box2,.cx_box3" ).resizable({
      containment: "#result"
    });
  });
    
    
    $('.cx_top a').click(function(){
    	
    	$(this).parent().find('.box_list').toggle()
    })
    
    
// *************************