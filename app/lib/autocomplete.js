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
			console.log(element.title + ':' + element.synonyms);
		});
		console.log(JSON.stringify(this.data));
	};
	this.init();

	this.search = function(word) {
		var results = _.filter(this.data, function(category) {
			if (category.title == "Paint - Concrete/Masonry") {
				console.log(category.synonyms);
				console.log("index = " + category.synonyms.search(word));
			}
			return (category.title.search(word) > -1) || (category.synonyms.search(word) > -1);
		});
		console.log(JSON.stringify(results));
		return results;
	};
};

exports.autocomplete = Autocomplete;
