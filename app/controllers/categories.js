var params = arguments[0] || {};
var tableDatainclusion = [];
var tableDataexclusions = [];
var inclusionsArray = [];
var exclusionsArray = [];
var inclusionView = $.createStyle({
  classes : 'inclusion_style',
  apiName : 'View'
});
var bullet_style = $.createStyle({
  classes : 'bullet_image',
  apiName : 'Image'
});
var labelStyle = $.createStyle({
  classes : 'label_style',
  apiName : 'Label'
});

function getInclusions() {
  inclusionsArray = params.inclusions.split(',');
  for (var i = 0; i < inclusionsArray.length; i++) {
    var view = Ti.UI.createView();
    var image = Ti.UI.createImageView();
    view.applyProperties(inclusionView);
    image.applyProperties(bullet_style);
    var aLabel = Ti.UI.createLabel({
      text : inclusionsArray[i].trim()
    });
    aLabel.applyProperties(labelStyle);
    view.add(image);
    view.add(aLabel);
    $.inclusionsView.add(view);
  }
}

function getExclusions() {
  exclusionsArray = params.exclusions.split(',');
  for (var i = 0; i < exclusionsArray.length; i++) {
    var view = Ti.UI.createView();
    var image = Ti.UI.createImageView();
    view.applyProperties(inclusionView);
    image.applyProperties(bullet_style);
    var aLabel = Ti.UI.createLabel({
      text : exclusionsArray[i].trim()
    });
    aLabel.applyProperties(labelStyle);
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

  if (params.pickup == 'None' || !params.pickup) {
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
  Ti.App.Properties.setInt('site_id', 0);
  Alloy.createController('index').getView().open();
});

$.navbar.setTitle(params.data.title);
$.categoryLabel.text = params.title;
$.categoryView.backgroundColor = params.backgroundColor;
$.navbar.left.image = '/common/back_button.png';
