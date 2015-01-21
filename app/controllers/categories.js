var params = arguments[0] || {};

$.topbar.setTitle(params.data.title);
$.categoryLabel.text = 'Category Type: ' + params.data.description.type;
$.descriptionLabel.text = 'Description: You need to dump this material in ' + params.type + " as per your complex guidelines";
