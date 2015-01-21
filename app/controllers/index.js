var autocomplete = require('autocomplete');
var synonyms = require('data').data.synonyms;

var data=Alloy.Globals.categories;
var complexId=1;
var complexDetail=_.findWhere(Alloy.Globals.sites, {
		"id":complexId,
	}); 

var auto = new autocomplete.autocomplete(data, synonyms);
function showSuggestions(data){
	var tableData = [];
	_.each(data, function(element, index, list) {
		var resultRow =  Ti.UI.createTableViewRow({
			title : element.word,
			//hasChild : true,
			color: "black",
			description:element,
			backgroundColor:"white",
			height:60,
			top:1
		});
		tableData.push(resultRow);
	});
	
	if(tableData.length > 0) {	
		$.resultsTable.data = tableData;
		var rowCount = $.resultsTable.getSections()[0].rowCount;
		var rowHeight = $.resultsTable.rowHeight;
		$.resultsTable.height = (rowCount * rowHeight) + 50;
	} else {
		$.resultsTable.height = 50;
	}
}

function getCategoryId (title){
	var category ;
	Object.keys(data).forEach(function(k){
		if(data[k].title == title){
			category =  k;
		}
	});
	return category;
}

function selectWord(e){
	getCategoryId(e.rowData.title);
	alert(result);
	Alloy.createController('/categories', {data:e.rowData}).getView().open();
}

function searchWord(e) {
	if(e.source.value){
		var searchResult = auto.search(e.source.value);
    showSuggestions(searchResult);
	}else{
		$.resultsTable.height = 50;
	}
 }  

$.topbar.setTitle("Waste Segregation");
$.index.open();
