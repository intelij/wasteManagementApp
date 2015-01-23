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

	this.search = function(word) {
		var results = _.filter(this.data, function(category) {
			return (category.title.search(word) > -1) || (category.synonyms.search(word) > -1);
		});
		return results;
	};
};

exports.autocomplete = Autocomplete;
