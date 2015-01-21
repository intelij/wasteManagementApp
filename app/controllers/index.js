var autocomplete = require('autocomplete');
var synonyms = require('data').data.synonyms;

var data=Alloy.Globals.categories;
var complexId=1;
var complexDetail=_.findWhere(Alloy.Globals.sites, {
		"id":complexId,
	}); 

var auto = new autocomplete.autocomplete(data, synonyms);

function showSuggestions(data){
	var results = data;
	var tableData =  [];
	_.each(results, function(element, index, list){
		var resultRow =  Ti.UI.createTableViewRow({
			title : element.word,
			hasChild : true,
			color: "black",
			height: 40,
			discription:element
		});
		tableData.push(resultRow);
	});
	if(tableData.length > 0){
		$.resultsTable.data = tableData;
		$.resultsTable.visible = true;
	}else{
		$.resultsTable.visible = false;
	}
	
}
function selectWord(e){
	
		Alloy.createController('/categories', {data:e.rowData}).getView().open();
	
}
function searchWord(e) {
	if(e.value){
		var searchResult = auto.search(e.value);
   		showSuggestions(searchResult);
	}else{
		$.resultsTable.visible = false;
	}
 }  
 

$.index.open();
