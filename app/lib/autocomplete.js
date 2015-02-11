var Autocomplete = function(data, synonyms) {
  this.data = Object.keys(data).map(function(k) {
    return data[k];
  });
  this.init = function() {
    function getSynonyms(array) {
      var syn = [];
      _.each(array, function(element, idx) {
        if (element !== null && synonyms[element]) {
          syn.push(synonyms[element]);
        }
      });
      return _.uniq(_.flatten(syn)).join(',');
    }

    _.each(this.data, function(element) {
      element.synonyms = getSynonyms(element.title.split(/[^a-zA-Z0-9]/)).toLowerCase();
    });
  };
  this.init();

  this.search = function(input) {
    function getSuggestions(wordsArray, data) {
      var results = [];
      _.each(wordsArray, function(word) {
      	var lword = word.toLowerCase();
        results.push(_.filter(data, function(category) {
        	// Search is case insensitive but the category titles need to maintain
        	// their original case so that they can be displayed correctly, hence
        	// lowecase here.
          return (category.title.toLowerCase().search(lword) > -1);
        }));
      });
      _.each(wordsArray, function(word) {
      	var lword = word.toLowerCase();
        results.push(_.filter(data, function(category) {
          // synonyms are already lowercased while create data structure so no
          // need to lowercase again.
          return (category.synonyms.search(word) > -1);
        }));
      });
      return _.flatten(results);
    };
    // First search for the complete query
    var results = getSuggestions([input], this.data);
    var keywords = input.split(/[^a-zA-Z0-9]/);
    
    // Now do parts
    if (keywords.length > 1) {
    	results = results.concat(getSuggestions(keywords, this.data));
    }
    
    // Same result may come for more than one query words, so uniquify
    return _.uniq(results);
  }; 
};
exports.autocomplete = Autocomplete;
