var Autocomplete = function(data) {
	this.data = Object.keys(data).map(function(k) { return data[k]; });
	this.dictionary = [];
	this.dictionaryItem = {
		word : "",
		categories : []
	};

	this.init = function() {
		var wordsGroup = _.pluck(this.data, 'title');

		var words = [];
		words = _.uniq(words.concat.apply(words, wordsGroup));
		for (var i = 0; i < words.length; i++) {
			var dictionaryItem = {};
			dictionaryItem.word = words[i];
			dictionaryItem.categories = _.filter(this.data, function(data) {
				return data.title == words[i] || _.contains(data.synonyms, words[i]);
			});
			this.dictionary.push(dictionaryItem);
		}
		
	};
	this.init();

	this.search = function(word) {
		var results = _.filter(this.dictionary, function(category) {
			return category.word.toString().toLowerCase().search(word.toString().toLowerCase()) > -1;
			 
		});
		return results;
	};
};

exports.autocomplete = Autocomplete;
