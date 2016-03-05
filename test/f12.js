var f12= document.getElementById('f12');
var gbody=document.getElementsByTagName('body')[0]
var gloalelement;

function f12down(event){
var	element=event.target;

    var mousey  =  event.pageY-element.offsetTop;
    var mousex  =  event.pageX-element.offsetLeft;
  // console.log('x'+mousex+'y'+mousey)
       function f12move(event){
    	var	element=event.target;
    	   //console.log('x'+event.pageX+'y'+event.pageY)
    	element.style.left=event.pageX-mousex+'px';
    	element.style.top=event.pageY-mousey+'px';
   //console.log('x'+event.pageX-mousex+'y'+element.style.left)
    }
function   f12up(event){
     var element=event.target;
     element.onmousemove=null;
      element.onmouseup=null;
  }
  element.onmousemove=f12move;
  element.onmouseup= f12up;
  element.onmouseleave=f12up;
  element.onmouseout=f12up;


//alert(element.offsetTop+'-'+element.offsetLeft+'-'+element.scrollTop+'-'+element.scrollLeft)	
}


function f12key(event){
	var keynum
if(window.event) // IE
  {
  keynum = event.keyCode
  }
else if(event.which) // Netscape/Firefox/Opera
  {
  keynum = event.which
  }
	
 if(event.shiftKey==1 && keynum==123){
 	     
 	     if (f12.style.display=='block') {
 	     	    f12.style.display='none';
 	     	   
 	     } else{
 	     	f12.style.display='block';
 	     
 	     }
 	 
                 }           


	
}


f12.onmousedown=f12down;

 gbody.onkeydown=f12key;


function getpra(ele){
	var e =ele
	if (e.parentElement==f12) {
		return true;
	} else{
		if (e.parentElement==document) {
			return false;
		}
		getpra(e);
	}
}



for (k in document.all) {
	if(getpra(k)){
		break
	}
	
	
	
				 document.all[k].onmouseover=function(e){
				 	e.stopPropagation();
		       var element=e.target;
		       element.style.overflow='hidden';
		       element.style.width=element.offsetWidth-4+'px';
		       element.style.height=element.offsetHeight-4+'px';
		       element.style.border="2px soild red"
		       
		       element.onmouseout=outmove
		       
		       function outmove(event){
		       	event.stopPropagation();
		       	 var element=event.target;
		       element.style.width=element.offsetWidth+4+'px';
		       element.style.height=element.offsetHeight+4+'px';
		       element.style.border="0px soild #ff0000";
		         element.onmouseout=null
		       
		       }
		       
		       
		       
		  }
				 
			}





