var Autocomplete = function(data) {
	this.data = data;
	this.dictionary = [];
	this.dictionaryItem = {
		word : "",
		categories : []
	};

	this.init = function() {
		var wordsGroup = _.union(_.pluck(this.data, 'title'), _.pluck(this.data, 'synonyms'));

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
			return category.word.search(word) > -1;

		});
		return results;
	};
};

exports.autocomplete = Autocomplete;
