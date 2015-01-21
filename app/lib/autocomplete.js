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
			return syn;
		}
		_.each(this.data, function(element) {
			element.synonyms = [];
			var s = getSynonyms(element.title.split(/[^a-zA-Z0-9]/));
			element.synonyms = _.uniq(element.synonyms.concat.apply(element.synonyms, s));
		});
	};
	this.init();

	this.search = function(word) {
		var results = _.filter(this.data, function(category) {
			return category.title.toLowerCase().search(word.toLowerCase()) > -1 || category.synonyms.indexOf(word) > -1;

		});
		return results;
	};
};

exports.autocomplete = Autocomplete;
