var args = arguments[0] || {};

$.categoriesTitle.title=args.data.description.word;
$.categoryLabel.text='Category Type: '+args.data.description.categories[0].type;
$.descriptionLabel.text='Description:';
$.descriptionTextarea.hasFocus = false; 
$.descriptionTextarea.addEventListener('click', function(){
   if($.descriptionTextarea.hasFocus){
        $.descriptionTextarea.blur();
        $.descriptionTextarea.hasFocus = false;
   }
   else{
        $.descriptionTextarea.hasFocus = true;
   }
});