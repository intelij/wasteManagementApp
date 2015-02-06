var params = arguments[0] || {};
var tableDatainclusion = [];
var tableDataexclusions = [];
var inclusionsArray = [];
var exclusionsArray = [];

$.topbar.setTitle("Where it Goes");
$.selectedtypelabel.text = params.data.title;
$.categoryLabel.text = params.title;
$.destination.text = "Destination: " + params.destination;
$.inclusions.text = "Inclusions: ";
//

$.topbar.left.image = '/common/arrow-left.png';
$.topbar.right.image = '/common/settings.png';
$.topbar.leftNav.addEventListener('click', function(e) {
  $.categories.close();
});
$.topbar.settings.addEventListener('click', function(e) {
  Alloy.createController('index').getView().open();
});

function getInclusions() {
  inclusionsArray = params.inclusions.split(',');
  for (var i = 0; i < inclusionsArray.length; i++) {
    // Create a Label.
    var aLabel = Ti.UI.createLabel({
      text : '> '+inclusionsArray[i],
      color : '#78ab78',
      height:Ti.UI.SIZE,
      width : '100%',
      left : 15,
      right:5,
      top:2
    });
    // Add to the parent view.
    $.inclusionsView.add(aLabel);
  }
}
function getExclusions() {
	$.exclusions.text = "Exclusions: ";
  exclusionsArray = params.exclusions.split(',');
  for (var i = 0; i < exclusionsArray.length; i++) {
    var aLabel = Ti.UI.createLabel({
      text : '> '+exclusionsArray[i],
      color : 'red',
      height:Ti.UI.SIZE,
      width : '100%',
      left : 15,
      right:5,
      top:2
    });
    $.exclusionsView.add(aLabel);
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
 $.method.text = "Method: " + params.method;
 }else{
 	 $.methodView.visible =  false;
 	 $.methodView.height=0;
 }
 if(params.pickup == 'None'){
 $.clockView.visible =  false;
 $.clockView.height=0;
 }else{
 	 $.pickup.text = "Clock: " + params.pickup;
 }
