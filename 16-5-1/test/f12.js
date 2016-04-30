var f12= document.getElementById('f12');
var gbody=document.getElementsByTagName('body')[0]
var gloalelement;

function f12down(event){
var	element=event.target;
event.stopPropagation()
//event.preventDefault()

    var mousey  =  event.pageY-element.offsetTop;
    var mousex  =  event.pageX-element.offsetLeft;
  // console.log('x'+mousex+'y'+mousey)
       function f12move(event){
       	event.stopPropagation()
   event.preventDefault()
    	var	element=event.target;
    	   //console.log('x'+event.pageX+'y'+event.pageY)
    	element.style.left=event.pageX-mousex+'px';
    	element.style.top=event.pageY-mousey+'px';
   //console.log('x'+event.pageX-mousex+'y'+element.style.left)
    }
function   f12up(event){
	     	event.stopPropagation()
  event.preventDefault()
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








//console.log(document.all)

function domevent(e) {
	var hhh = e.target.style.height
	var www = e.target.style.width
	var borer = '0px #000000 solid'
	e.stopPropagation()
    if (e.target.style.borderWidth!=="0px") {
    	borer = e.target.style.border
    	//console.log(borer)
	
    } 
	
	
	e.target.style.height = parseInt(hhh) - 2 + 'px'
	e.target.style.width = parseInt(www)- 2 + 'px'
	e.target.style.border = '1px #0000ff solid'
		e.target.style.overflow='hidden'
	//console.log(e.target.offsetHeight - 2 + 'px');

	function ot(e) {
		e.target.removeEventListener('mouseout',ot)
		e.stopPropagation()
		//console.log(e.target.nodeName);
		e.target.style.border = borer

		e.target.style.height = hhh 
		e.target.style.width = www  
		
	}
	e.target.addEventListener('mouseout',ot)


}

function echo(e){

if(e.children.length==0){return} 


     for (var i=0;i< e.children.length;i++) {
     //console.log(e.children[i].nodeName)	
     if(e.children[i]==f12){
     	continue
     }
     echo(e.children[i])
     e.children[i].onmouseover=domevent
     }  

	
	
}

echo(document.body)



var global={
	
}
//cookie

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}




function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}


//setCookie('b1','bbbbbbbbbb')



function echocookie(){
	
	 var ca = document.cookie.split(';');


for (var i=0;i<ca.length;i++) {
	
	ca[i]=ca[i].split('=')
}


console.log(ca)

}



echocookie()

//cookie

//








