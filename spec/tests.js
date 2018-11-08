const searchTerms = require("../src/index.js");

describe("search-terms", () => {
	it("separate positive and negative terms", function () {
		const terms = searchTerms("this -is 'a string' -'-with' '-positive' -'and negative' terms");
		expect(terms).toEqual(
			{
				positive: [
					"this",
					"a string",
					"-positive",
					"terms"
				],
				negative: [
					"is",
					"-with",
					"and negative"
				]
			});
	});
});
