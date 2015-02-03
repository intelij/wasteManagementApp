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
      rightImage : '/common/keyboard-arrow-right.png',
    });
    if (i % 2 == 0) {
      resultRow.backgroundColor = "#cccccc";
    } else {
      resultRow.backgroundColor = "#e0e0e0";
    }
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
}

function getCategoryId(title) {
  var category;
  Object.keys(data).forEach(function(k) {
    if (data[k].title == title) {
      category = k;
    }
  });
  return category;
}

function selectWord(e) {

  var categoryID = getCategoryId(e.rowData.title);
  var typeId = complexDetail.classification[categoryID];
  var typeTitle = complexDetail.types[typeId].title;
  var typeDescription = complexDetail.types[typeId].description;
  Alloy.createController('/categories', {
    data : e.rowData,
    title : typeTitle,
    description : typeDescription
  }).getView().open();
}

function searchWord(e) {
  if (e.source.value) {
    var searchResult = auto.search(e.source.value);
    showSuggestions(searchResult);
  } else {
    $.resultsTable.height = 0;
  }
}

$.topbar.leftNav.addEventListener('click', function(e) {
  $.index.close();
});
$.topbar.settings.addEventListener('click', function(e) {
	Alloy.createController('index').getView().open();
});
$.topbar.left.image = '/common/arrow-left.png';
$.topbar.right.image='/common/settings.png';
$.topbar.setTitle(params.data);
