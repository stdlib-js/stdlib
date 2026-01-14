/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// MAIN //

/**
* Tests if a string ends with the characters of another string.
*
* ## Notes
*
* -   The last parameter restricts the search to a substring within the input string beginning from the leftmost character. If provided a negative value, `len` indicates to ignore the last `len` characters, and is thus equivalent to `str.length + len`.
*
* @private
* @param {string} str - input string
* @param {string} search - search string
* @param {integer} len - substring length
* @returns {boolean} boolean indicating if the input string ends with the search string
*
* @example
* var bool = endsWith( 'To be, or not to be, that is the question.', 'to be', 19 );
* // returns true
*
* @example
* var bool = endsWith( 'To be, or not to be, that is the question.', 'to be', -23 );
* // returns true
*/
function endsWith( str, search, len ) {
	var idx;
	var N;
	var i;

	N = search.length;
	if ( len === 0 ) {
		return ( N === 0 );
	}
	if ( len < 0 ) {
		idx = str.length + len;
	} else {
		idx = len;
	}
	if ( N === 0 ) {
		// Based on the premise that every string can be "surrounded" by empty strings (e.g., "" + "a" + "" + "b" + "" === "ab"):
		return true;
	}
	idx -= N;
	if ( idx < 0 ) {
		return false;
	}
	for ( i = 0; i < N; i++ ) {
		if ( str.charCodeAt( idx + i ) !== search.charCodeAt( i ) ) {
			return false;
		}
	}
	return true;
}


// EXPORTS //

module.exports = endsWith;
