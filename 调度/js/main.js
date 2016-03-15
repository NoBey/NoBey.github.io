var car = function() {
		car.start = function() {
			localStorage.car = "";
			$.get("http://www.e56ol.com/team/truck?PlateNumber=", function(result){
   car.creatcar(result)
})
			
			car.search()
			console.log("car对象已启动")
		}

	car.search=function(){
		$('#car .seachwrap input:button').click(function(){
			$.get("http://www.e56ol.com/team/truck?PlateNumber="+$('#car .seachwrap input:text').val(), function(result){
   car.creatcar(result)
})
		})
		
	}


		car.creatcar = function(carlist) {
					
			var div
			$('#car .rolling').children().remove()

			for (var i = 0; i < carlist["list"].length; i++) {

				div = '<div'+' TruckID='+ carlist["list"][i]['TruckID']  +' class="car-wrap" ' + "ApprovedLoad=" + carlist["list"][i]['ApprovedLoad'] + '><img src="img/car.png"/> <div class="chepai-wrap"><a href="javascript:void(0)" class="chepai">' + carlist["list"][i]['PlateNumber']  + '</a></div><div class="identity"><span>'+carlist["list"][i]['DriverName']+'</span><span>'+carlist["list"][i]['DriverTel']+'</span></div>'+"</div>"

				$('#car .rolling').append(div)
			}   car.carwrap()
		}

		car.carwrap = function() {
			var i = 1;
			$('.car-wrap').each(
				function() {
					$(this).attr('id', 'car-id' + i)
					i++
				}
			)
			$('.car-wrap').attr("draggable", "true").bind('dragstart', function(event) {
				console.log(event.target)
				localStorage.car = $(event.target).parents(".car-wrap").attr('id')
				
			})
		}
		return car.start()
	}
	//car对象-------对应车队的全部函数
	//
	//
	//
	//
var cargo = function() {
		cargo.start = function() {
			cargo.detele()
			cargo.tab()			
			$.get("http://www.e56ol.com/team/fleet?CorpID=1&BizType=1&CustomerName=", function(result){
   cargo.creatlist(result,'#jinkou-one')
   })
			$.get("http://www.e56ol.com/team/fleet?CorpID=1&BizType=0&CustomerName=", function(result){
   cargo.creatlist(result,'#chukou-one')
   })
			cargo.search()
			console.log("cargo对象已启动")
		}
		cargo.search=function(){
		$('#cargo .seachwrap input:button').click(function(){
			$.get("http://www.e56ol.com/team/fleet?CorpID=1&BizType=1&CustomerName="+$('#cargo .seachwrap input:text').val(), function(result){
   cargo.creatlist(result,'#jinkou-one')
})
			$.get("http://www.e56ol.com/team/fleet?CorpID=1&BizType=0&CustomerName="+$('#cargo .seachwrap input:text').val(), function(result){
   cargo.creatlist(result,'#chukou-one')
})
		})
		
		$('#cargo-box input:button').click(
			function(){
				var No=$('#cargo-box input:text').val()
				var FleetID= $('#cargo-box').attr('FleetID')
				if(No==undefined){
					No=''
				}
				console.log($('#cargo-box').attr('FleetID'))
				cargo.creatbox(FleetID,No)
//				$.get("http://www.e56ol.com/team/container?CorpID=1&FleetID="+'' +"&No="+No, function(result){
//                   cargo.creatbox(result); 
//				})
			}
		)
		
	}
		
		
		
		cargo.tab = function() {
			$('#jinkou-one').hide()
			$('#cargo .tab').children().click(
				function(e) {
					e.stopPropagation()
					$('#select').attr('id','')
					e.target.id='select'
					if (e.target.innerHTML == "进口") {
						$('#jinkou-one').show()
						$('#chukou-one').hide()
						
					}
					if (e.target.innerHTML == "出口") {
						$('#jinkou-one').hide()
						$('#chukou-one').show()
					}
				}
			)
		}
		cargo.creatbox = function(FleetID) {
			//http://www.e56ol.com/team/container?CorpID=1&FleetID=61&No=
        $('#cargo-box').attr('FleetID',FleetID)
        var No= arguments[1] || ''
			
			
$.get("http://www.e56ol.com/team/container?CorpID=1&FleetID="+FleetID+'&No='+No, function(result){
   var collet=result
   $('#sea-box tr:first').siblings().remove()
			for (var i = 0; i < collet["list"].length; i++) {
				$('#sea-box').append('<tr FleetContainerID='+collet["list"][i]["FleetContainerID"] +' id="cargo-id' + (i + 1) + '"wt=' + collet["list"][i]["Weight"] + " size=" + collet["list"][i]["Size"] + '><td>' + collet["list"][i]["No"] + '</td><td>' + collet["list"][i]['Size'] + '</td><td>' + collet["list"][i]['ApproachLocation'] + '</td><td>' + collet["list"][i]['GoodsInspectionAddress'] + '</td> </tr>')
			}
  		$('#sea-box tr').attr("draggable", "true").bind('dragstart', function(event) {
				localStorage.cargo = event.target.id
				console.log(localStorage.cargo)
			})
    })
	}
		
		cargo.creatlist=function(list,id){
			//http://www.e56ol.com/team/fleet?CorpID=1&BizType=0&CustomerName=
			//http://www.e56ol.com/team/fleet?CorpID=1&BizType=1&CustomerName=
			$(id+" tr:first").siblings().remove()
		var tr=''
for (var i = 0; i < list["list"].length; i++) {
tr =  '<tr><td><a href="javascript:void(0)" FleetID="'+list['list'][i]['FleetID']+'">'+ list['list'][i]['CustomerName']
+'</a></td><td>'+list['list'][i]['DeliverPartyName']+'</td><td>'+list['list'][i]['GoodsName']+'</td><td>'+list['list'][i]['Qty']+'</td><td>'+ list['list'][i]['PackageName']+'</td><td>'+list['list'][i]['Weight'] +'</td><td>'+list['list'][i]['Volume'] +'</td></tr>'
				$(id).append(tr)
			}		
			cargo.table()
		}
		
		cargo.table = function() {
			$("#cargo table a").each(
				function() {
					$(this).click(function() {
						$('#cargo-box').fadeIn("slow")
						$('#red').attr('id', '')
						$(this).attr('id', 'red')
						cargo.creatbox($(this).attr('FleetID'))
					})
				}
			)
		}
		cargo.detele = function() {
			$('#close').click(function() {
				$('#cargo-box').fadeOut("slow")
				$('#red').attr('id', '')
			})
		}
		
		
		return cargo.start()
	}
	//cargo对象-------对应货物的全部函数
	//
	//
	//
	//
	//
var scheduler = function() {
	scheduler.start = function() {
		scheduler.delel()
		scheduler.receivecar()
		scheduler.receivetime()
		scheduler.cargoone()
		scheduler.cargotwo()
		scheduler.reset()
		scheduler.paiche()
		console.log("scheduler对象已启动")
	}
	scheduler.delel = function() {
		$('.delete').click(
			function(e) {
				$(e.target).siblings().remove()
				$(e.target).hide()
					scheduler.check()
			}
		)
	}
	scheduler.receivecar = function() {
		var element = document.getElementById('receivecar')
		element.ondragover = function(event) {
			event.preventDefault()
		}
		element.ondrop = function(event) {
			event.preventDefault();
			if (localStorage.car == '') {
				return
			}
			var data = '#' + localStorage.car
			localStorage.car = ''
			$('#receivecar .tishi').hide();
			var delet = $(element).children('.delete')
			if (delet.css('display') == 'none') {
				delet.show()
				$(element).append($(data).clone().unbind().css('margin','0px'))
				$('#receivecar .identity').show()
				return
			}
			if($('#receivecar .car-wrap').length==1){
				$('#receivecar .car-wrap').remove()
				$(element).append($(data).clone().unbind().css('margin','0px'))
				$('#receivecar .identity').show()
			}
			
			scheduler.check()
		}

	}

	scheduler.cargoone = function() {
		var element = document.getElementById('cargoone')
		element.ondragover = function(event) {
			event.preventDefault()

		}
		element.ondrop = function(event) {
			event.preventDefault();
			if (localStorage.cargo == '') {
				return
			}
			if ($('#cargotwo div').attr('size')=='L') {
				alert("不能再放了")
				return
				
			}
			var data = '#' + localStorage.cargo
			localStorage.cargo = ''
			var delet = $(element).children('.delete')
			if (delet.css('display') == 'none') {
				delet.show()

				$(element).append("<div "+'FleetContainerID='+ $(data).attr('FleetContainerID')+ ' size='  + $(data).attr('size')+ ' wt='  + $(data).attr('wt') + ">" + "箱号:" + $(data + ' td:first').html() + "重量:" + $(data).attr('wt') + "</div>")
				$(data).remove()
			}
			scheduler.check()
		}

	}

	scheduler.cargotwo = function() {
		var element = document.getElementById('cargotwo')
		element.ondragover = function(event) {
			event.preventDefault()

		}
		element.ondrop = function(event) {
			event.preventDefault();
			if (localStorage.cargo == '') {
				return
			}
			
			if ($('#cargoone div').attr('size')=='L') {
				alert("不能再放了")
				return
				
			}

			var data = '#' + localStorage.cargo
			localStorage.cargo = ''
			var delet = $(element).children('.delete')
			if (delet.css('display') == 'none') {
				delet.show()
				$(element).append("<div "+'FleetContainerID='+ $(data).attr('FleetContainerID')+ ' size='  + $(data).attr('size')+ ' wt='  + $(data).attr('wt') + ">" + "箱号:" + $(data + ' td:first').html() + "重量:" + $(data).attr('wt') + "</div>")

				$(data).remove()
			}

			scheduler.check()
		}

	}
	scheduler.check = function() {
		var carheary = $('#receivecar .car-wrap').attr('approvedload')

		var cargoone = $('#cargoone div').attr('wt')
		var cargotow = $('#cargotwo div').attr('wt')
		
		if(carheary==undefined)
		{
			carheary=''
		}
		
		if(cargoone==undefined)
		{
			cargoone=''
		}
		if(cargotow==undefined)
		{
			cargotow=''
		}
		
		$('#chaozhong').removeClass("btn-red")
		if (carheary < Number(cargoone + cargotow)) {
			$('#chaozhong').addClass("btn-red")
		}
	}
	scheduler.paiche=function(){
		
		$('#paiche').click(function(){
			var TruckID =$('#receivecar .car-wrap').attr('truckid')
			var idone=$('#cargoone div').attr('fleetcontainerid')
			var idtwo=$('#cargotwo div').attr('fleetcontainerid')
			var BeginDate= $('#fleetcontainerid').val()
			
			//var FleetContainerID = idone+","+idtwo
			if(TruckID==undefined){
			    TruckID=''
			}
			if(idone==undefined){
				idone=''
			}
			if(idtwo==undefined){
				idtwo=''
			}
			
			if(BeginDate==undefined){
				BeginDate=''
			}
			$.get("http://www.e56ol.com/team/dispatchAdd?CorpID=1&TruckID="+TruckID+"&FleetContainerID="+idone+","+idtwo+"&BeginDate="+ BeginDate, function(result){
  console.log(result)
  if (result['status']==0) {
  	alert(result['error'])
  	return
  }
  if (result['status']==1) {
  	alert(result['content'])
  	//$.get("http://www.e56ol.com/team/dispatch?CorpID=1&BizType=1&PlateNumber=&BeginDate=&CustomerName=&FleetCode=&Weight=&GoodsName=&No=&Status=1", function(result){
	//listing.creatlist(result)})
	location.assign(location) 
  	return
  }
  
             })
			
		})

		
		
	}
	
	

	scheduler.receivetime = function() {

		document.getElementById('receivetime').contentEditable = 'true'
		laydate({
			elem: '#receivetime'
		});//BeginDate
		document.getElementById('BeginDate').contentEditable = 'true'
		laydate({
			elem: '#BeginDate'
		});
		
	}
	scheduler.reset = function(){
		$('#reset').click(function(){
			$('.delete').hide().siblings().remove()
		})
		
	}
	
	return scheduler.start()
}
//scheduler对象-------调度器的全部函数
//
//
//
//
//
var listing = function() {
		listing.start = function() {
			listing.tab()
				$.get("http://www.e56ol.com/team/dispatch?CorpID=1&BizType=0&PlateNumber=&BeginDate=&CustomerName=&FleetCode=&Weight=&GoodsName=&No=&Status=1", function(result){
		listing.creatlist(result)})
				listing.search()
			console.log("listing对象已启动")
			
			
			
		}

        listing.tab = function() {
			$('#listing #list-tab').children().click(
				function(e) {
					e.stopPropagation()
					$('#select1').attr('id','')
					e.target.id='select1'
					if (e.target.innerHTML == "进口") {
	$.get("http://www.e56ol.com/team/dispatch?CorpID=1&BizType=1&PlateNumber=&BeginDate=&CustomerName=&FleetCode=&Weight=&GoodsName=&No=&Status=1", function(result){
		listing.creatlist(result)
   })
						
					}
					if (e.target.innerHTML == "出口") {
	$.get("http://www.e56ol.com/team/dispatch?CorpID=1&BizType=0&PlateNumber=&BeginDate=&CustomerName=&FleetCode=&Weight=&GoodsName=&No=&Status=1", function(result){
		listing.creatlist(result)})
					}
				}
			)
		}
        listing.creatlist=function(list){
        	$("#listing  .rolling").html('')
        	 	
        	 	
        	 	for (key in list['list']) {
        	 	var table='<p class="table-time"><span>'+key+'</span></p><table class="base-other-table"><tbody><tr><td>车号</td><td>司机</td><td>联系电话</td><td>车载状态</td><td>已提箱</td><td>已到场</td><td>已收货</td><td>回空时间</td><td>散货</td><td>操作</td></tr>'
        	 	
        	 	for (i=0;i<list['list'][key].length;i++) {
        var tr=	'<tr DispatchID='+ list['list'][key][i]['DispatchID'] +'><td >'+list['list'][key][i]['PlateNumber']+
        '</td><td >'+ list['list'][key][i]['DriverName']+'</td><td >'+
		list['list'][key][i]['ContactInfo']+'</td><td><span class="man"></span><span class="man" ></span></td><td><span></span><span></span></td><td><span></span><span></span></td><td><span></span><span></span></td><td><span></span><span></span></td>'
		+'<td>3</td>	<td >位置 费4用 <a href="http://www.baidu.com">相关文件</a><button class="btn-grenn">编辑</button><button class="btn-red">删除</button></td></tr>	'
    table=table+tr
        	 		
        	 	}	
        	 	$("#listing  .rolling").append(table)
        	 	}
        	 
        		$("#listing  .rolling .btn-red").click(function(){ 
        			
        		var DispatchID = $(this).parents("tr").attr('DispatchID')   
        		if(confirm('确定删除')==true)
        	$.get("http://www.e56ol.com/team/dispatchDel?DispatchID="+DispatchID, function(result){
                     
if (result['status'] == 0) {
	alert(result['error'])
	return
}
if (result['status'] == 1) {
	alert(result['content'])
	return
}
                     
                   })
        		
        		})
        	
        	//console.log(1)
        }
        	listing.search=function(){
		$('#listingseach').click(function(){
			var BizType,Status=0
			if($('#select1').html()=='进口'){
				BizType=1
			}if ($('#select1').html()=='出口') {
			    BizType=0
			}
			//Status
			
			
			$.get("http://www.e56ol.com/team/dispatch?CorpID=1&BizType="+BizType+"&PlateNumber="+$('#PlateNumber').val()+'&BeginDate='+$('#BeginDate').val()+'&CustomerName='+$('#CustomerName').val()+'&FleetCode='+$('#FleetCode').val()+'&Weight='+$('#Weight').val()+'&GoodsName='+$('#GoodsName').val()+'&No='+$('#No').val()+'&Status='+Status, function(result){
   listing.creatlist(result)
})
		})
		
	}
        


		return listing.start()
	}
//listing对象-------清单的全部函数
//
//
//
//
//
//以下是启动全部函数
scheduler()
car()
cargo()
listing()



