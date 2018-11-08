[![Build Status](https://travis-ci.com/UziTech/search-terms.svg?branch=master)](https://travis-ci.com/UziTech/search-terms)

# search-terms

Get search terms separated by spaces from a search query.
Negative terms have a dash(-) in front. Terms can have space or dash if quoted.

## Example

```js
const searchTerms = require("search-terms");

//  positive terms --------⏷----------⏷------------------⏷-----------------------⏷
console.log(searchTerms("this -is 'a string' -'-with' '-positive' -'and negative' terms"));
//  negative terms -----------⏶----------------⏶------------------------⏶

/*
 * Result:
 *
 * {
 *   "positive":  [
 *     "this",
 *     "a string",
 *     "-positive",
 *     "terms"
 *   ],
 *   "negative":  [
 *     "is",
 *     "-with",
 *     "and negative"
 *   ]
 * }
 */
```
