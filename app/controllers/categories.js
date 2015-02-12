var params = arguments[0] || {};
var tableDatainclusion = [];
var tableDataexclusions = [];
var inclusionsArray = [];
var exclusionsArray = [];

$.navbar.setTitle(params.data.title);
//$.selectedtypelabel.text = params.data.title;
//$.selectedtypeview.backgroundColor=params.backgroundcolor;
$.categoryLabel.text = params.title;
$.categoryView.backgroundColor=params.backgroundcolor;
$.destinationvalue.text = params.destination;
$.inclusions.text = "Inclusions ";
$.topbar.left.image = '/common/Small_logo.png';
	$.topbar.right.image = '/common/home_button.png';
$.navbar.left.image = '/common/back_button.png';
//$.navbar.right.image = '/common/settings.png';
$.navbar.leftNav.addEventListener('click', function(e) {
  $.categories.close();
});
$.topbar.logout.addEventListener('click', function(e) {
  Alloy.createController('index').getView().open();
});

function getInclusions() {
  inclusionsArray = params.inclusions.split(',');
  for (var i = 0; i < inclusionsArray.length; i++) {
    	var view=Ti.UI.createView({
  		backgroundColor:'#e6f8da',
	layout: "horizontal",
	height:Ti.UI.SIZE,
	width:"100%"
  	});
  	var image=Ti.UI.createImageView({
  		 left : 15,
      top:8,
      height:10,
      width:10,
      image:"/common/bullet_point.png"
  	});
    var aLabel = Ti.UI.createLabel({
      text : inclusionsArray[i].trim(),
      color : 'black',
      height:Ti.UI.SIZE,
      width : '80%',
      left : 5,
      right:5,
      top:2,
    });
    view.add(image);
    view.add(aLabel);
    $.inclusionsView.add(view);
  }
}
function getExclusions() {
	//$.exclusions.text = "Exclusions ";
  exclusionsArray = params.exclusions.split(',');
  for (var i = 0; i < exclusionsArray.length; i++) {
  	var view=Ti.UI.createView({
  		backgroundColor:'#f8dada',
	layout: "horizontal",
	height:Ti.UI.SIZE,
	width:"100%"
  	});
  	var image=Ti.UI.createImageView({
  		 left : 15,
      top:8,
      height:10,
      width:10,
      image:"/common/bullet_point.png"
  	});
    var aLabel = Ti.UI.createLabel({
      text : exclusionsArray[i].trim(),
      color : 'black',
      height:Ti.UI.SIZE,
      width : '75%',
      left : 5,
      right:10,
      top:2,
      bottom:1
    });
    view.add(image);
    view.add(aLabel);
    $.exclusionsView.add(view);
  }
}
getInclusions();
if(params.exclusions && typeof(params.exclusions) !== 'undefined'){
 getExclusions();
 }else
 {
 	$.exclusionsView.visible =  false;
 	$.exclusionsView.height=0;
 }
 if(params.method && typeof(params.method) !== 'undefined'){
 $.methodvalue.text = params.method;
 }else{
 	 $.methodView.visible =  false;
 	 $.methodView.height=0;
 }
 if(params.pickup == 'None'){
 $.scheduleview.visible =  false;
 $.scheduleview.height=0;
 }else{
 	 $.pickup.text = "" + params.pickup;
 	 $.clockimage.image="/common/clock_icon.png";
 }

 var clock=0;
 $.clockimage.addEventListener('click',function(e){
   if(clock==0){
    $.popupLabel.visible=true;
    clock=1;
   }else{
   	 $.popupLabel.visible=false;
   	 clock=0;
   }
      });
 
