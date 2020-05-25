[![Actions Status](https://github.com/UziTech/search-terms/workflows/CI/badge.svg)](https://github.com/UziTech/search-terms/actions)

# search-terms

Get search terms separated by spaces from a search query.
Negative terms have a dash(-) in front.
Terms can have spaces or a dash at the beginning if quoted.

## Example

```js
const searchTerms = require("search-terms");

//  positive terms ---------⏷--------⏷------------------⏷
console.log(searchTerms("this-is 'a string' -'-with' '-positive' -'and negative' -terms"));
//  negative terms -----------------------------⏶-----------------------⏶---------⏶

/*
 * Result:
 *
 * {
 *   "positive":  [
 *     "this-is",
 *     "a string",
 *     "-positive",
 *   ],
 *   "negative":  [
 *     "-with",
 *     "and negative",
 *     "terms"
 *   ]
 * }
 */
```
