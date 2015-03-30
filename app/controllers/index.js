var data = Alloy.Globals.sites;
var tableData = [];
var site_id = Ti.App.Properties.getInt('site_id', 0);

var tableRow = $.createStyle({
  classes : 'table_row',
  apiName : 'TableViewRow'
});

function hideKeypad(e) {
  $.complexSearchbar.blur();
};

function selectComplex(e) {
	hideKeypad();
  var complexID = e.rowData.id;
  console.log('complex id::' + complexID);
  Ti.App.Properties.setInt('site_id', complexID);
  Alloy.createController('/findProductCategory', {
    data : e.rowData.title,
    id : complexID,
    index: 1,
    categories: e.rowData.categories
  }).getView().open();
}

(function init() {
  getHomeScreen();
  $.topbar.settings.visible = false;
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var id = keys[i];
    var element = data[id];
    var resultRow = Ti.UI.createTableViewRow({
      title : element.name,
      id : id,
      description : element,
      categories: element.categories
    });
    resultRow.applyProperties(tableRow);
    tableData.push(resultRow);
    $.complexTable.data = tableData;
  }
  $.navbar.setTitle("Where do you live");
})();
function getHomeScreen() {
  if (site_id == 0) {
    console.log('wasteApp', 'Site not found' + site_id);
    $.index.open();

  } else {
    Alloy.createController('/findProductCategory', {
      data : data[site_id].name,
      id : site_id,
      index: 0,
      categories: data[site_id].categories
    }).getView().open();
    console.log('wasteApp', 'Site is ' + site_id);
  }
}

