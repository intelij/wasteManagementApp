
var data = Alloy.Globals.sites;

function showSearchresult(){
	var tableData = [];
  _.each(data, function(element, index, list) {
    var resultRow = Ti.UI.createTableViewRow({
      title : element.name,
      hasChild : true,
      color : "black",
      description : element,
      backgroundColor : "white",
      height : 60,
      top : 1
    });
    tableData.push(resultRow);
     $.complexTable.data = tableData;
  });
}
 showSearchresult();
/*
function ComplexsearchWord(e) {
	if (e.source.value) {
		
	} else {
		$.complexTable.height ="50%";
	}
}*/

function getComplexID(title) {
  var category;
  Object.keys(data).forEach(function(k) {
    if (data[k].name == title) {
      category = k;
    }
  });
  return category;
}

function selectComplex(e){
	var complexID=getComplexID(e.rowData.title);
  Alloy.createController('/findProductCategory', {
    data : e.rowData.title,
    id: complexID,
  }).getView().open();
}
$.topbar.setTitle("Waste Segregation");
$.index.open();
//Alloy.createController('findProductCategory').getView().open();
