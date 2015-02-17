var params = arguments[0] || {};
var autocomplete = require('autocomplete');
var synonyms = require('data').data.synonyms;
var data = Alloy.Globals.categories;
var auto = new autocomplete.autocomplete(data, synonyms);
var complexId = params.id;
var complexDetail = Alloy.Globals.sites[complexId];

function showSuggestions(data) {
  var tableData = [];
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var id = keys[i];
    var element = data[id];
    var resultRow = Ti.UI.createTableViewRow({
      title : element.title,
      color : "black",
      description : element,
      height : 60,
      textAlign : "center",
      backgroundColor : 'transparent',
      top : 1,
      rightImage : '/common/keyboard-arrow-right.png',
    });
    tableData.push(resultRow);
  }

  if (tableData.length > 0) {
    $.resultsTable.data = tableData;
    var rowCount = $.resultsTable.getSections()[0].rowCount;
    var rowHeight = $.resultsTable.rowHeight;
    $.resultsTable.height = (rowCount * rowHeight);
  } else {
    $.resultsTable.height = 0;
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
  var categoryID = getCategoryId(e.rowData.title);
  var typeId = complexDetail.classification[categoryID][0];

  var typeTitle = isNaN(typeId) ? typeId : complexDetail.types[typeId].title;
  var typePickup = isNaN(typeId) ? null : complexDetail.types[typeId].schedule || 'None';
  var typeDestination = isNaN(typeId) ? null : complexDetail.types[typeId].destination;
  var typeMethod = isNaN(typeId) ? null : complexDetail.types[typeId].method;
  var typeInclusions = isNaN(typeId) ? null : complexDetail.types[typeId].inclusions;
  var typeExclusions = isNaN(typeId) ? null : complexDetail.types[typeId].exclusions;
  var backgroundColor = isNaN(typeId) ? "000000" : complexDetail.types[typeId].backgroundColor;
  Alloy.createController('/categories', {
    data : e.rowData,
    title : typeTitle,
    pickup : typePickup,
    destination : typeDestination,
    method : typeMethod,
    inclusions : typeInclusions,
    exclusions : typeExclusions,
    backgroundColor : backgroundColor
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
  Alloy.createController('index').getView().open();
});
$.topbar.settings.addEventListener('click', function(e) {
  Alloy.createController('index').getView().open();
});
$.navbar.left.image = '/common/back_button.png';
$.navbar.setTitle(params.data);
