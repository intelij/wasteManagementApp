//require('ti-mocha');
var data = Alloy.Globals.sites;
var tableData = [];
var site_id = Ti.App.Properties.getInt('site_id', 0);
if (site_id == 0) {
  console.log('wasteApp', 'Site not found' + site_id);
  $.navbar.settings.hide();
  $.index.open();
} else {
  $.navbar.settings.addEventListener('click', function(e) {
    Alloy.createController('/findProductCategory', {
      data : data[site_id].name,
      id : site_id
    }).getView().open();
  });
  console.log('wasteApp', 'Site is ' + site_id);
  Alloy.createController('/findProductCategory', {
    data : data[site_id].name,
    id : site_id
  }).getView().open();
}
(function init() {
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var id = keys[i];
    var element = data[id];
    var resultRow = Ti.UI.createTableViewRow({
      title : element.name,
      id : id,
      color : "black",
      description : element,
      backgroundColor : "#cccccc",
      height : 50,
      textAlign : "center",
      rightImage : '/common/keyboard-arrow-right.png',
    });
    if (i % 2 == 0) {
      resultRow.backgroundColor = "#e0e0e0";
    } else {
      resultRow.backgroundColor = "#eeeeee";
    }
    tableData.push(resultRow);
    $.complexTable.data = tableData;
  }
  $.topbar.left.image = '/common/Small_logo.png';
  // $.navbar.right.image = '/common/arrow-right.png';
  $.navbar.setTitle("Where do you live");
})();

function selectComplex(e) {
  var complexID = e.rowData.id;
  console.log('complex id::' + complexID);
  Ti.App.Properties.setInt('site_id', complexID);
  Alloy.createController('/findProductCategory', {
    data : e.rowData.title,
    id : complexID
  }).getView().open();
}
