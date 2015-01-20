var args = arguments[0] || {};

$.categoriesTitle.title=args.data.discription.word;
$.categoryLabel.text='Category Type: '+args.data.discription.categories[0].type;
$.discriptionLabel.text='Description:';
$.discriptionTextarea.hasFocus = false; 
$.discriptionTextarea.addEventListener('click', function(){
   if($.discriptionTextarea.hasFocus){
        $.discriptionTextarea.blur();
        $.discriptionTextarea.hasFocus = false;
   }
   else{
        $.discriptionTextarea.hasFocus = true;
   }
});