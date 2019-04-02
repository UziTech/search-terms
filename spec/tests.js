const searchTerms = require("../src/index.js");

describe("search-terms", () => {
	it("should separate positive and negative terms", function () {
		const terms = searchTerms("this-is 'a string' -'-with' '-positive' -'and negative' -terms");
		expect(terms).toEqual(
			{
				positive: [
					"this-is",
					"a string",
					"-positive",
				],
				negative: [
					"-with",
					"and negative",
					"terms",
				]
			});
	});

	it("should allow escaping characters inside quotes", function () {
		const terms = searchTerms("'p1 \\\\\\'' -'n1 \\\\\\''");
		expect(terms).toEqual(
			{
				positive: [
					"p1 \\\\\\'",
				],
				negative: [
					"n1 \\\\\\'",
				]
			});
	});

	it("should remove escaping slashes", function () {
		const terms = searchTerms("'p1 \\\\\\'' -'n1 \\\\\\''", {removeSlashes: true});
		expect(terms).toEqual(
			{
				positive: [
					"p1 \\'",
				],
				negative: [
					"n1 \\'",
				]
			});
	});

	it("should allow escaping characters outside quotes", function () {
		const terms = searchTerms("\\'p1' -\\'n1' \\-p2 \\-'p3'", {removeSlashes: true});
		expect(terms).toEqual(
			{
				positive: [
					"'p1'",
					"-p2",
					"-'p3'",
				],
				negative: [
					"'n1'",
				]
			});
	});
});
