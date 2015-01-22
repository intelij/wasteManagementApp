var data = Alloy.Globals.sites;

function showSearchresult() {
	var tableData = [];
	_.each(data, function(element, index, list) {
		var resultRow = Ti.UI.createTableViewRow({
			title : element.name,
			color : "black",
			description : element,
			backgroundColor : "white",
			height : 60,
			borderColor : '#87CEFA',
			borderWidth : 2,
			borderRadius : 6,
			textAlign: "center"
		});
		tableData.push(resultRow);
		$.complexTable.data = tableData;
	});
}

showSearchresult();



function getComplexID(title) {
	var category;
	Object.keys(data).forEach(function(k) {
		if (data[k].name == title) {
			category = k;
		}
	});
	return category;
}

function selectComplex(e) {

	var complexID = getComplexID(e.rowData.title);
	Alloy.createController('/findProductCategory', {
		data : e.rowData.title,
		id : complexID,
	}).getView().open();

  var complexID = getComplexID(e.rowData.title);
  var site = Alloy.Collections.gtypes.get(1);
  if (site) {
    site.set("site_id", complexID);
  } else {
    site = Alloy.createModel('site',{
      "id" : 1,
      "site_id" : complexID
    });
  }
  site.save();

  Alloy.createController('/findProductCategory', {
    data : e.rowData.title,
    id : complexID,
  }).getView().open();

}

$.topbar.setTitle("Waste Segregation");
$.index.open();


var site = Alloy.Collections.gtypes.get(1);

if (!site) {
  $.index.open();
} else {
  var site_id = site.get('site_id');
  Alloy.createController('/findProductCategory', {
    data : data[site_id].name,
    id : site_id
  }).getView().open();
}