var autocomplete = require('autocomplete');
var data = [{
	title : "recording",
	synonyms : ['phonograph recording', 'tape record']
}, {
	title : "disc",
	synonyms : ['magnetic disc', 'magnetic disk', 'phonograph record', 'phonograph recording']
}];


var auto = new autocomplete.autocomplete(data);

function showSuggestions(data){
	var results = data;
	var tableData =  [];
	_.each(results, function(element, index, list){
		var resultRow =  Ti.UI.createTableViewRow({
			title : element.word,
			hasChild : true,
			color: "black",
			height: 40
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

function searchWord(e) {
	if(e.value){
		var searchResult = auto.search(e.value);
   showSuggestions(searchResult);
	}else{
		$.resultsTable.visible = false;
	}
   
}

$.index.open();
