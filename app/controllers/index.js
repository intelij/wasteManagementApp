var data = require ('data');


var createDb = function(data) {
	_.each(data.data.types, function(t) {
		var gtype = Alloy.createModel('gtype', t);
		Alloy.Collections.gtypes.add(gtype);
	});

	_.each(data.data.categories, function(d) {
		var category = Alloy.createModel('category', d);
		Alloy.Collections.categories.add(category);
	});

	_.each(data.data.sites, function(s) {
		var site = Alloy.createModel('site', s);
		Alloy.Collections.sites.add(site);
	});
	
	console.log("Categories from db");
	Alloy.Collections.categories.each(function(category) {
 		console.log('category: ' + category.get('title') + ' ' + category.get('type') + ' ' + category.get('id'));
	});

	console.log("Sites from db");
	Alloy.Collections.sites.each(function (t) {
		console.log(t.get('id') + ' ' + t.get('name'));
	});
	
	console.log("Types from db");
	Alloy.Collections.gtypes.each(function (t) {
		console.log(t.get('id') + ' ' + t.get('site_id') + ' ' + t.get('title'));
	});
};

function doClick(e) {
    console.log('In doClick');
    // var category = categories.get(24);
    // alert(category.get('title'));
	
	var type_id = Math.round(Math.random() * 15 + 1);
	var t = Alloy.Collections.gtypes.where({'site_id': 1})[0];
	alert('Aadi has ' + t.get('title') + ' and lives in ' + Alloy.Collections.sites.get(t.get('site_id')).get('name'));
}

createDb(data);
$.index.open();
