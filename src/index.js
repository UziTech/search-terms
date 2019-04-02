const defaultOptions = {
	removeSlashes: false,
};

/**
 * Get search terms separated by spaces from a search query.  Negative terms have a dash(-) in front. Terms can have space or dash if quoted.
 * @param {string} search Terms
 * @param {object} opts Options
 * @param {bool} opts.removeSlashes Remove escaping slashes
 * @return {object} An array of the terms seperated by positive and negative
 */
module.exports = function getSearchTerms(search, opts = {}) {
	// eslint-disable-next-line no-param-reassign
	opts = {...defaultOptions, ...opts};

	const matches = search.match(/-?"(?:\\.|[^"])+"|-?'(?:\\.|[^'])+'|(?:\\.|\S)+/g);

	// sort the terms
	const terms = {
		positive: [],
		negative: []
	};
	if (matches !== null) {
		for (let i = 0; i < matches.length; i++) {
			const match = matches[i];
			const negative = match.startsWith("-");
			let term = match.replace(/^-/, "").replace(/^(["'])(.*)\1$/, "$2");

			if (opts.removeSlashes) {
				term = term.replace(/\\(.)?/g, "$1");
			}

			if (negative) {
				terms.negative.push(term);
			} else {
				terms.positive.push(term);
			}
		}
	}

	return terms;
};
