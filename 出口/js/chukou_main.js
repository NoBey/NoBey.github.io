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
    }


var Containertest = [{
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
var Doctest = [{
		"ID": 1,
		"Code": "B",
		 "No": "120000213222047000"
		
	}, {
		"ID": 2,
		"Code": "B",
		"No": "120000213221931000"
	}]

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
//过滤器开始
Vue.filter('ManagePartyCode', function (value) {
	if(IsNum(value)){
		value='('+value+")"+g_Party[vueDate['ManagePartyCode']]
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
Vue.filter('Currency', function (value) {
	if(IsNum(value)){
		value='('+value+")"+g_Currency[value]
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

console.log(vueItem)

$('.addcommodity').on('click', function(){
    layer.open({
        type: 1,
         btn: ['添加'],
        title: '添加商品',
        area: ['800px', '160px'],
        shadeClose: true, //点击遮罩关闭
        content: '\<\div style="padding:20px;"> <input type="text" placeholder="商品编号" value="" /><input type="text" placeholder="商品附加编号" value="" /><input type="text" placeholder="商品名称" value="" /><input type="text" placeholder="规格型号" value="" /><input type="text" placeholder="成交数量" value="" /><input type="text" placeholder="成交数量" value="" /><input type="text" placeholder="单价" value="" /><input type="text" placeholder="总价" value="" /><input type="text" placeholder="币制" value="" /><input type="text" placeholder="征免" value="" />\<\/div>',
        yes: function(index){
        	var item={
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
}
        	vueItem.Itemt.push(item)
        layer.msg('添加成功')
       	layer.close(index)
    }
    });
});


//vueDate['ManagePartyCode'].val= '('+vueDate['ManagePartyCode']+')'+g_Party[vueDate['ManagePartyCode']]
//g_Party[vueDate['ManagePartyCode']]

//console.log(vueDate['ManagePartyCode'])
// console.log()























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


















