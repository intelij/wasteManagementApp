var params = arguments[0] || {};
var autocomplete = require('autocomplete');
var synonyms = require('data').data.synonyms;
var data = params.categories;
var auto = new autocomplete.autocomplete(data, synonyms);
var complexId = params.id;
var complexDetail = Alloy.Globals.sites[complexId];

var tableRow = $.createStyle({
  classes : 'table_row',
  apiName : 'TableViewRow'
});

function hideKeypad(e) {
  $.searchbar.blur();
}

function showSuggestions(data) {
  var tableData = [];
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var id = keys[i];
    var element = data[id];
    var resultRow = Ti.UI.createTableViewRow({
      title : element.title,
      description : element,
    });
    resultRow.applyProperties(tableRow);
    tableData.push(resultRow);
  }

  if (tableData.length > 0) {
    $.resultsTable.data = tableData;
    var rowCount = $.resultsTable.getSections()[0].rowCount;
    var rowHeight = $.resultsTable.rowHeight;
    $.resultsTable.height = Ti.UI.SIZE;
  } else {
  }
};

function getCategoryId(title) {
  var category;
  Object.keys(data).forEach(function(k) {
    if (data[k] == title) {
      category = k;
    }
  });
  return category;
};

function selectWord(e) {
	hideKeypad();
  var categoryID = getCategoryId(e.rowData.title);
  var typeId = complexDetail.classification[categoryID][0];
  var typeTitle = isNaN(typeId) ? typeId : complexDetail.types[typeId].title;
  var typePickup = isNaN(typeId) ? null : complexDetail.types[typeId].schedule || 'None';
  var typeDestination = isNaN(typeId) ? null : complexDetail.types[typeId].destination;
  var typeMethod = isNaN(typeId) ? null : complexDetail.types[typeId].method;
  var typeInclusions = isNaN(typeId) ? null : complexDetail.types[typeId].inclusions;
  var typeExclusions = isNaN(typeId) ? null : complexDetail.types[typeId].exclusions;
  var backgroundColor = isNaN(typeId) ? "#202020" : complexDetail.types[typeId].backgroundColor;
  Alloy.createController('/categories', {
    data : e.rowData,
    title : typeTitle,
    pickup : typePickup,
    destination : typeDestination,
    method : typeMethod,
    inclusions : typeInclusions,
    exclusions : typeExclusions,
    backgroundColor : backgroundColor || "#202020"
  }).getView().open();
}

function searchWord(e) {
  if (e.source.value) {
    var searchResult = auto.search(e.source.value);
    showSuggestions(searchResult);
  } else {
    $.resultsTable.height = 0;
  }
};

$.navbar.leftNav.addEventListener('click', function(e) {
  $.findProductCategory.close();
});
$.topbar.settings.addEventListener('click', function(e) {
  Ti.App.Properties.setInt('site_id', 0);
  Alloy.createController('index').getView().open();
});
$.navbar.left.image =  '/common/back_button.png';
$.navbar.leftNav.visible = (params.index == 0) ? false : true;
$.navbar.setTitle(params.data); 