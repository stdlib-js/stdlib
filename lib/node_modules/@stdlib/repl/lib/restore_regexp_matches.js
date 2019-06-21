/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// VARIABLES //

var SEP_REGEXP_MATCHES = '\u0000\u0000\u0000';
var RE_REGEXP_MATCHES = new RegExp( [ '^', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)$' ].join( SEP_REGEXP_MATCHES ) );


// MAIN //

/**
* Restores the (non-standard) properties on the `RegExp` expression object to cached matches.
*
* ## Notes
*
* -   In certain JavaScript engines (e.g., V8, SpiderMonkey), the global `RegExp` object has ([non-standard][1]) static, read-only properties (`$1`, `$2`, ..., `$9`) with cached substring matches. This function restores matches to a prior state based on a provided list of cached matches.
*
* [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n
*
* @private
* @param {StringArray} cache - list of previously saved substring matches
*/
function restoreRegExpMatches( cache ) {
	RE_REGEXP_MATCHES.test( cache.join( SEP_REGEXP_MATCHES ) );
}


// EXPORTS //

module.exports = restoreRegExpMatches;
