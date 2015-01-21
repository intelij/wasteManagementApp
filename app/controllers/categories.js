var args = arguments[0] || {};

$.topbar.setTitle(args.data.description.word);
$.categoryLabel.text = 'Category Type: ' + args.data.description.categories[0].type;
$.descriptionLabel.text = 'Description:';
