function doClick(e) {
	console.log('In doClick');
	
	var type_id = Math.round(Math.random() * 100 + 1);
	console.log("type_id: " + type_id);
	
	alert('Aadi has ' + Alloy.Globals.categories[type_id].title);
}

$.index.open();
