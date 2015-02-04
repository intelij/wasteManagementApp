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
      element.synonyms = getSynonyms(element.title.split(/[^a-zA-Z0-9]/));
    });
  };
  this.init();

  this.search = function(input) {
    function getSuggestions(wordsArray, data) {
      var results = [];
      _.each(wordsArray, function(word) {
        results.push(_.filter(data, function(category) {
          return (category.title.search(new RegExp(word, "i")) > -1);
        }));
        results.push(_.filter(data, function(category) {
          return (category.synonyms.search(new RegExp(word, "i")) > -1);
        }));
      });
      return _.flatten(results);
    };
    var keywords = [];
    var words = input.split(/[^a-zA-Z0-9]/);
    keywords.push(input);
    if (words.length > 1) {
      _.each(words, function(element) {
        keywords.push(element);
      });
    }
    var results = getSuggestions(keywords, this.data);
    return _.uniq(results);
  };
};

exports.autocomplete = Autocomplete;
