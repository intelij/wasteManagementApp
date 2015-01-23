var data = Alloy.Globals.sites;

function showComplexes() {
  var tableData = [];
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var id = keys[i];
    var element = data[id];
    var resultRow = Ti.UI.createTableViewRow({
      title : element.name,
      id : id,
      color : "black",
      description : element,
      backgroundColor : "white",
      height : 60,
      borderColor : '#87CEFA',
      borderWidth : 2,
      borderRadius : 6,
      textAlign : "center"
    });
    tableData.push(resultRow);
  }
  $.complexTable.data = tableData;
}

showComplexes();

$.topbar.setTitle("Waste Segregation");

var site_id = Ti.App.Properties.getInt('site_id',0);

if (site_id == 0) {
  console.log('wasteApp', 'Site not found' + site_id);
  $.index.open();
} else {
  Alloy.createController('/findProductCategory', {
    data : data[site_id].name,
    id : site_id
  }).getView().open();
}

function selectComplex(e) {
  var complexID = e.rowData.id;
	console.log('complex id::'+complexID);
  Ti.App.Properties.setInt('site_id', complexID);
  Alloy.createController('/findProductCategory', {
    data : e.rowData.title,
    id : complexID
  }).getView().open();
}
