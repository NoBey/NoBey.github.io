
(function(){
var text = "";
numtext = function(){
	return text;
};

numtext.num = function(att){
		text=text+att;
		//console.log(text);
};
numtext.red = function(){
	text = text.substr(0,text.length-1);
	//console.log(text);
};
numtext.evl = function(){
	text =  eval(text);
};
numtext.retn = function(){
	$("#txet").html(text);
};
numtext.setnum =function(txt){
	text = txt;
};

})();




(function(){
  var att = $(".nunber");
for (var i=0;i<10;i++) {
	
	
	
	$(att[i]).on("click",function(){numtext.num($(this).html());numtext.retn()});
	//console.log(i);
	}

$(".addnum").on("click",function(){numtext.num($(this).html())});
$(".rednum").on("click",function(){numtext.num($(this).html())});
$("#ok").on("click",function(){ numtext.evl();numtext.retn();keydown();$("#"+ok_key).html(numtext());localStorage.setItem(ok_key,numtext()) })
	
})();


var ok_key


var calu = function(name,key){
	//弹出键盘，获取txet，
	keyup();
	ok_key = key
	$("#txet").html(localStorage.getItem(key));
	$("#op").html(name+":");	
	numtext.setnum(localStorage.getItem(key));
	
};

console.log(numtext());

(function(){
	
	   if(localStorage.income){
	   	$("#income").html(localStorage.income);
	   }
	  else{
	  	localStorage.income=10000;
	  	$("#income").html(localStorage.income);
	  }
	  
	  
	   if(localStorage.Food){
	   	$("#Food").html(localStorage.Food);
	   }
	  else{
	  	localStorage.Food=1;
	  	$("#Food").html(localStorage.Food);
	  }
	  
	  

if(localStorage.shopping){
	   	$("#shopping").html(localStorage.shopping);
	   }
	  else{
	  	localStorage.shopping=2;
	  	$("#shopping").html(localStorage.shopping);
	  }
	
	
	
	
	if(localStorage.clothes){
	   	$("#clothes").html(localStorage.clothes);
	   }
	  else{
	  	localStorage.clothes=3;
	  	$("#clothes").html(localStorage.clothes);
	  }
	  
	

	if(localStorage.traffic){
	   	$("#traffic").html(localStorage.traffic);
	   }
	  else{
	  	localStorage.traffic=4;
	  	$("#traffic").html(localStorage.traffic);
	  }


if(localStorage.entertainment){
	   	$("#entertainment").html(localStorage.entertainment);
	   }
	  else{
	  	localStorage.entertainment=5;
	  	$("#entertainment").html(localStorage.entertainment)
	  		  }
	

	    if(localStorage.movement){
	   	$("#movement").html(localStorage.movement);
	   }
	  else{
	  	localStorage.movement=6;
	  	$("#movement").html(localStorage.movement);
	  }

	    
	    
	    if(localStorage.travel){
	   	$("#travel").html(localStorage.travel);
	   }
	  else{
	  	localStorage.travel=7;
	  	$("#travel").html(localStorage.travel);
	  }
	    
	    
	    
	    if(localStorage.medical){
	   	$("#medical").html(localStorage.medical);
	   }
	  else{
	  	localStorage.medical=8;
	  	$("#medical").html(localStorage.medical);
	  }
	    
	    
	    
})();













//--------------
    var t
	var pxm = $("#keyboard").css("bottom");
	var numm = Number( pxm.substr(0,pxm.length-2) );
	console.log(numm);
	console.log(pxm);
	
function keyup(){


	
	
	if (numm == 0) {
		$("#keyboard").css("bottom",numm);
		console.log(numm+"ok");
		clearTimeout(t);
	} else{
		
		numm = numm + 20
		console.log(numm);
		$("#keyboard").css("bottom",numm);
		t=setTimeout("keyup()",10);
	}
}


 
 
function keydown(){


	
	
	if (numm == -500) {
		$("#keyboard").css("bottom",numm);
		console.log(numm+"ok");
		clearTimeout(t);
	} else{
		
		numm = numm - 20
		
		$("#keyboard").css("bottom",numm);
		t=setTimeout("keydown()",10);
	}
}
//--------------
