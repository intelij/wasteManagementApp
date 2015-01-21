var params = arguments[0] || {};

$.topbar.setTitle(params.data.title);
$.categoryLabel.text = 'Category Type: ' + params.title;
$.descriptionLabel.text = 'Description: ' + params.description;
