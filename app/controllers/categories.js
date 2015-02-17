var params = arguments[0] || {};
var tableDatainclusion = [];
var tableDataexclusions = [];
var inclusionsArray = [];
var exclusionsArray = [];

function getInclusions() {
  inclusionsArray = params.inclusions.split(',');
  for (var i = 0; i < inclusionsArray.length; i++) {
    var view = Ti.UI.createView({
      backgroundColor : 'transparent',
      layout : "horizontal",
      height : Ti.UI.SIZE,
      width : "100%",
      bottom : 2
    });
    var image = Ti.UI.createImageView({
      left : 26,
      height : 10,
      width : 10,
      image : "/common/bullet_point.png"
    });
    var aLabel = Ti.UI.createLabel({
      text : inclusionsArray[i].trim(),
      color : 'black',
      height : Ti.UI.SIZE,
      width : '80%',
      left : 5,
      right : 5,
      top : 2,
      font : {
        fontSize : 15,
        fontFamily : "Open Sans"
      }
    });
    view.add(image);
    view.add(aLabel);
    $.inclusionsView.add(view);
  }
}

function getExclusions() {
  exclusionsArray = params.exclusions.split(',');
  for (var i = 0; i < exclusionsArray.length; i++) {
    var view = Ti.UI.createView({
      backgroundColor : 'transparent',
      layout : "horizontal",
      height : Ti.UI.SIZE,
      width : "100%",
      bottom : 2
    });
    var image = Ti.UI.createImageView({
      left : 26,
      top : 8,
      height : 10,
      width : 10,
      image : "/common/bullet_point.png"
    });
    var aLabel = Ti.UI.createLabel({
      text : exclusionsArray[i].trim(),
      color : 'black',
      height : Ti.UI.SIZE,
      width : '75%',
      left : 5,
      right : 10,
      top : 2,
      bottom : 1,
      font : {
        fontSize : 15,
        fontFamily : "Open Sans"
      }
    });
    view.add(image);
    view.add(aLabel);
    $.exclusionsView.add(view);
  }
};

(function setUI() {
  if (params.inclusions) {
    getInclusions();
  } else {
    $.inclusionsView.visible = false;
    $.inclusionsView.height = 0;
  }

  if (params.exclusions && typeof (params.exclusions) !== 'undefined') {
    getExclusions();
  } else {
    $.exclusionsView.visible = false;
    $.exclusionsView.height = 0;
  }

  if (params.method && typeof (params.method) !== 'undefined') {
    $.methodValue.text = params.method;
  } else {
    $.methodView.visible = false;
    $.methodView.height = 0;
  }

  if (params.destination && typeof (params.destination) !== 'undefined') {
    $.destinationValue.text = params.destination;
  } else {
    $.destinationView.visible = false;
    $.destinationView.height = 0;
  }

  if (params.pickup == 'None') {
    $.scheduleView.visible = false;
    $.scheduleView.height = 0;
  } else {
    $.pickup.text = "" + params.pickup;
  }
})();

$.navbar.leftNav.addEventListener('click', function(e) {
  $.categories.close();
});
$.topbar.settings.addEventListener('click', function(e) {
  Alloy.createController('index').getView().open();
});

$.navbar.setTitle(params.data.title);
$.categoryLabel.text = params.title;
$.categoryView.backgroundColor = params.backgroundColor;
$.navbar.left.image = '/common/back_button.png';
