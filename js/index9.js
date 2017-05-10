var map = new BMap.Map("myMap"); 
//注意在调用此构造函数时应确保容器元素myMap已经添加到地图上。
var point = new BMap.Point(120.139, 30.360);
var hznu = new BMap.Point(120.015015,30.296074);
map.centerAndZoom(point, 13);   
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());       
map.setCurrentCity("杭州"); 
map.enableScrollWheelZoom(true);
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker);//添加标注
//可托拽的标注
marker.enableDragging();
marker.addEventListener("dragend", function(e) {
	alert(e.point.lng + ", " + e.point.lat);
});
//搜索宾馆
var local = new BMap.LocalSearch(map,{
	renderOptions:{
		map:map,
		autoViewport:true,
		panel: "result"
	}
});
local.searchNearby("宾馆","西湖");
//hznu->hotel
var origin="杭州师范大学仓前新校区";
var transit = new BMap.TransitRoute(map,{
	renderOptions:{
		map:map,
		panel:"bus"
	}
});
local.setMarkersSetCallback(function(pois) {
	for (var i = 0; i < pois.length; i++) {
		var marker = pois[i].marker;
		marker.addEventListener("click",function(e){
			transit.search(origin, this.z.title);
			transit.clearResults();
		})
	}
})
//show school
var site_info=[
[120.012292,30.296283,"篮球场"],
[120.011798,30.295846,"西门"],
[120.017205,30.293741,"2号餐厅"],
[120.014298,30.295123,"体育场"],
[120.011798,30.295846,"图书馆"],
[120.023664,30.298294,"梅苑悦居"],
[120.016963,30.295402,"博文苑2号楼，2号超市"],
[120.016235,30.294825,"博文苑3号楼"],
[120.015777,30.295238,"博文苑4号楼，萌站，demo照相馆"],
[120.016478,30.295714,"博文苑5号楼"],
[120.016801,30.296267,"博文苑6号楼,菜鸟驿站"],
[120.015166,30.296415,"博文苑8号楼"],
[120.016208,30.296649,"博文苑9号楼,学生事物中心"]
[120.020026,30.294848,"恕园1号楼，阿里巴巴商学院"],
[120.020412,30.295729,"恕园2号楼"],
[120.019146,30.296423,"恕园13号楼,一鸣争鲜奶吧"],
[120.018158,30.296439,"外国语学院"],
[120.01831,30.297464,"公共艺术教育部"]
];
for(var i=0;i<site_info.length;i++)
{
	var marker=new BMap.Marker(new BMap.Point(site_info[i][0],site_info[i][1]));
	map.addOverlay(marker);
	var sContent =
	"<img style='margin:10px' id='imgDemo' src='img/pic.jpg' width='300' height='200' title='天安门'/>" +
	"<h4 style='margin:10px 0 5px 0;padding:0.2em 0'>XXXX</h4>" + 
	"<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>XXXXX</p>" + 
	"</div>";
	var infoWindow = new BMap.InfoWindow(sContent);
	marker.addEventListener("click", function(){          
	   this.openInfoWindow(infoWindow);
	   //图片加载完毕重绘infowindow
	   document.getElementById('imgDemo').onload = function (){
		   infoWindow.redraw();   //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
	   }
	});
}
