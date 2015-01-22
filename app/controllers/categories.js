var params = arguments[0] || {};

$.categoryLabel.text = 'Category Type: ' + params.title;
$.descriptionLabel.text = 'Description: ' + params.description;


$.topbar.setTitle(params.data.title);
$.topbar.left.image = '/common/arrow-left.png';
$.topbar.leftNav.addEventListener('click', function(e){
	$.categories.close();
});