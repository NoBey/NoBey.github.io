$('.td-w10').attr('width','10%')//.css('width','120px')//.css('display','block')
$('.td-w20').attr('width','20%')
$('.td-w15').attr('width','15%')
$('.td-w25').attr('width','25%')
$('.td-w40').attr('width','40%')


var datetest= { //属性名基本与数据库中字段名一致
        "ID": 1,// cb_bill.ID
        "BizType": 0, //0出1进
        "ShortBillCode": "123456789", //预录入编号
        "BillCode": "123456789123456789", //海关编号
        "DeclareCustomCode": "0202", //申报现场
        "EICustomCode": "0202", //出口口岸
        "ReferenceID": "1234", //备案号
        "EIDate": "2016-03-22", //出口日期
        "DeclareDate": "2016-03-22", //申报日期
        "ManagePartyCode": "1309962037", //经营单位
        "TransportModeCode": "2", //运输方式
        "TransportMachine": "COSCONETHERLANDS", //运输工具名称
        "WayBillNo": "TSRD004705A",// 提运单号
        "DeliverPartyCode": "1309962037", //发货单位
        "TradeModeCode": "0110", //贸易方式
        "TaxNatureCode": "101", //征免性质
        "SettlementModeCode": "2", //结汇方式
        "LisenseKey": "ABC123", //许可证号
        "CountryCode": "304", //运抵国（地区）
        "PortCode": "2110", //指运港
        "SubEntityCode": "13099", //境内货源地
        "ApprovalNo": "ABC123", //批准文号
        "TradeTermCode": "3", //成交方式
        "Freight": "11",// 运费
        "Insurance": "12",// 保费
        "OtherCharge": "13", //杂费
        "ContractNo": "ABC123", //合同协议号
        "Packnumber": "3332", //件数
        "PackageTypeCode": "2", //包装种类
        "GrossWeight": "49813.40", //毛重
        "NetWeight": "43982.40", //净重 
        "Doc":[{
		"ID": 1,
		"Code": "B",
		 "No": "120000213222047000"
		
	}, {
		"ID": 2,
		"Code": "B",
		"No": "120000213221931000"
	}],
	"Container":[{
	"ID": 1,
	"No": "A0000001",
	 "Size": "S",
	"Weight": "8.2"
	
}, {
	"ID": 2,
	"No": "A0000002",
	"Size": "L",
	"Weight": "25.6"
}, {
	"ID": 3,
	"No": "A0000003",
	"Size": "S",
	"Weight": "5.3"
}]

	
    }



//var Doctest = 

var Itemtest ={Itemt:[{
	"ID": 1,
"Code": "94032000",
	 "CodeExt": "00",
	"Name": "储物柜",
	 "Spec": "户外家具,休闲用|铁制|无品牌|无规格",
	 "DealQuantity": "3332",
	 "DealUnitCode": "011",
	 "LegalQuantity": "43982.40",
	 "LegalUnitCode": "035",
	 "SecondQuantity": "3332",
	"SecondUnitCode": "007",
	"GoodsCountryCode": "304",
	"DealUnitPrice": "32.15",
	 "DealTotalPrice": "107123.80",
	 "CurrencyCode": "502",
	 "TaxTypeCode": "1"
	
}, {
	"ID": 2,
	"Code": "94032000",
	"CodeExt": "01",
	"Name": "储物柜",
	"Spec": "户外家具,休闲用|铁制|无品牌|无规格",
	"DealQuantity": "3332",
	"DealUnitCode": "011",
	"LegalQuantity": "43982.40",
	"LegalUnitCode": "035",
	"SecondQuantity": "3332",
	"SecondUnitCode": "007",
	"GoodsCountryCode": "304",
	"DealUnitPrice": "32.15",
	"DealTotalPrice": "107123.80",
	"CurrencyCode": "502",
	"TaxTypeCode": "1"
}]}




function IsNum(s)
{
    if(s!=null){
        var r,re;
        re = /\d*/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return (r==s)?true:false;
    }
    return false;
}
//过滤器开始 SettlementModeCode
Vue.filter('PackageTypeCode', function (value) {
	if(IsNum(value)){
		return g_PackageType[value]
	}	
  return ''
})
Vue.filter('TradeTermCode', function (value) {
	if(IsNum(value)){
		return g_TradeTerm[value]
	}	
  return ''
})
Vue.filter('SubEntityCode', function (value) {
	if(IsNum(value)){
		return g_SubEntity[value]
	}	
  return ''
})
Vue.filter('PortCode', function (value) {
	if(IsNum(value)){
		return g_Port[value]
	}	
  return ''
})
Vue.filter('SettlementModeCode', function (value) {
	if(IsNum(value)){
		return g_SettlementMode[value]
	}	
  return ''
})
Vue.filter('TaxNatureCode', function (value) {
	if(IsNum(value)){
		return g_TaxNature[value]
	}	
  return ''
})
Vue.filter('TradeModeCode', function (value) {
	if(IsNum(value)){
		return g_TradeMode[value]
	}	
  return ''
})


Vue.filter('ManagePartyCode', function (value) {
	if(IsNum(value)){
		value='('+value+")"+g_Party[value]
		return value
	}	
  return 
})
Vue.filter('EICustomCode', function (value) {
	if(IsNum(value)){
		value='('+value+")"+g_Custom[value]
		return value
	}	
  return ''
})
Vue.filter('TransportModeCode', function (value) {
	if(IsNum(value)){
		return g_TransportMode[value]
	}	
  return ''
})
Vue.filter('Country', function (value) {
	if(IsNum(value)){
		value='('+value+")"+g_Country[value]
		return value
	}	
  return ''
})
//过滤器结束
var vueDate=new Vue({
el: '#Customs',
  data: datetest
}
)

var vueItem = new Vue({
el: '#translation-box',
  data: Itemtest,
  methods: {
    removeItem: function (index) {
      this.Itemt.splice(index, 1)
        layer.msg('删除成功')
    }
  }
})
    



laydate({
	elem: '#EIDate'
});
laydate({
	elem: '#DeclareDate'
});

console.log(vueItem)

$('.addcommodity').on('click', function(){
    layer.open({
        type: 1,
         btn: ['添加'],
        title: '添加商品',
        area: ['800px', '160px'],
        shadeClose: true, //点击遮罩关闭
        content: '\<\div id="layeritem" style="padding:20px;"> <input type="text" placeholder="商品编号" value="" /><input type="text" placeholder="商品附加编号" value="" /><input type="text" placeholder="商品名称" value="" /><input type="text" placeholder="规格型号" value="" /><input type="text" placeholder="成交数量" value="" /><input type="text" placeholder="成交数量" value="" /><input type="text" placeholder="单价" value="" /><input type="text" placeholder="总价" value="" /><input type="text" placeholder="币制" value="" /><input type="text" placeholder="征免" value="" />\<\/div>',
        yes: function(index){
        	var go=0
        $('#layeritem').children('input').each(
        	function(){
        		//console.log($(this).val())
        		if($(this).val()==''||$(this).val()==" "){
        			go=1
        			
        		}
        	}
        )
        	if(go===1){
        		layer.msg('请填写完成信息')
        		return
        	}
        	
        	var item={
	"ID": vueItem.Itemt.length+1,
	"Code": $('#layeritem').children('input').eq(0).val(),
	"CodeExt": $('#layeritem').children('input').eq(1).val(),
	"Name": $('#layeritem').children('input').eq(2).val(),
	"Spec": $('#layeritem').children('input').eq(3).val(),
	"DealQuantity": $('#layeritem').children('input').eq(4).val(),
	"DealUnitCode": $('#layeritem').children('input').eq(5).val(),
	"LegalQuantity": $('#layeritem').children('input').eq(6).val(),
	"LegalUnitCode": $('#layeritem').children('input').eq(7).val(),
	"SecondQuantity": $('#layeritem').children('input').eq(8).val(),
	"SecondUnitCode": $('#layeritem').children('input').eq(9).val(),
	"GoodsCountryCode":$('#layeritem').children('input').eq(10).val(),
	"DealUnitPrice": $('#layeritem').children('input').eq(6).val(),
	"DealTotalPrice":$('#layeritem').children('input').eq(7).val(),
	"CurrencyCode": $('#layeritem').children('input').eq(0).val(),
	"TaxTypeCode": $('#layeritem').children('input').eq(0).val()
}
        	vueItem.Itemt.push(item)
        layer.msg('添加成功')
       	layer.close(index)
    }
    });
});

$('#Doc').on('click', function(){
    layer.open({
        type: 1,
         btn: ['完成'],
        title: '编辑随附单证号',
        area: ['800px', '260px'],
        shadeClose: true, //点击遮罩关闭
        content: '\<\div id="layerdoc" style="padding:20px;"><div v-for="Doc in Doc"><input type="text" v-model="Doc.ID" value="{{Doc.ID}}" /><input type="text" v-model="Doc.Code" value="{{Doc.Code}}" /><input type="text" v-model="Doc.No" value="{{Doc.No}}" /><a v-on:click="removelayerdoc($index)" href="javascript:void(0)">删除</a></div><a v-on:click="addlayerdoc($index)" href="javascript:void(0)">添加</a><\/div>',
        yes: function(index){
        layer.msg('编辑成功')
       	//layer.close(index)
        }
    });

    var layerdoc=new Vue({
el: '#layerdoc',
  data: datetest,
  methods: {
    addlayerdoc: function () {
        this.Doc.push({
		"ID": '',
		"Code": "",
		"No": ""
	})
    },
    removelayerdoc: function (index) {
      this.Doc.splice(index, 1)
    }
  }
}
)

    
});

$('#Container').on('click', function(){
   layer.open({
        type: 1,
         btn: ['完成'],
        title: '编辑集装箱',
        area: ['800px', '260px'],
        shadeClose: false, //点击遮罩关闭
        content: '\<\div id="layerContainer" style="padding:20px;"><div v-for="Container in Container"><input type="text" v-model="Container.ID" value="{{Container.ID}}" /><input type="text" v-model="Container.No" value="{{Container.No}}" /><input type="text" v-model="Container.Size" value="{{Container.Size}}" /><input type="text" v-model="Container.Weight" value="{{Container.Weight}}" /><a v-on:click="removeContainer($index)" href="javascript:void(0)">删除</a></div><a v-on:click="addContainer($index)" href="javascript:void(0)">添加</a><\/div>',
        yes: function(index){
        layer.msg('编辑成功')
       	//layer.close(index)
        }
    });

    var layerContainer=new Vue({
el: '#layerContainer',
  data: datetest,
  methods: {
    addContainer: function () {
        this.Container.push({
                "ID": '',
                "No": "",
                "Size": "",
                "Weight": ""
            })
    },
    removeContainer: function (index) {
      this.Container.splice(index, 1)
    }
  }
}
)

    
});


//vueDate['ManagePartyCode'].val= '('+vueDate['ManagePartyCode']+')'+g_Party[vueDate['ManagePartyCode']]
//g_Party[vueDate['ManagePartyCode']]

//console.log(vueDate['ManagePartyCode'])
// console.log()


// 提交

function tijiao(){
	
	$('.form-control').each(
		function(){
			if($(this).attr('oa-value')!==undefined){
				vueDate[$(this).attr('name')]=$(this).attr('oa-value')
			}
		}
	)
}

function queren(){
	$('input').css('background','#00E8D7')
	
}


















$.oaFieldVerify('.form-control', {
				success : function(elem){
					return true;
				},
				error : function(elem, error){
					oaPopover.error(elem, error);
				},
				warning : function(elem, content){
					var type = $(elem).attr('oa-type');
					var value = $(elem).val();
					if(value == ''){
						$(elem).popover('hide');
						return;
					}
					if(type == 'dictionary'){
						if(content.length > 0){
							oaPopover.warning(elem, content);
						}else{
							oaPopover.error(elem, '查无结果');
						}
						
					}else{
						$(elem).popover('hide');
					}
				},
				out : function(elem){
					var popid = $(elem).attr('aria-describedby');
					var title = $('#' + popid).find('.popover-title').text();
					if(title != '错误'){
						$(elem).popover('hide');
					}
				}
			});




















