/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var RE_UTF16_LOW_SURROGATE = /[\uDC00-\uDFFF]/; // TODO: replace with stdlib pkg
var RE_UTF16_HIGH_SURROGATE = /[\uD800-\uDBFF]/; // TODO: replace with stdlib pkg


// MAIN //

/**
* Invokes a function for each Unicode code point in a string.
*
* @param {string} str - input string
* @param {Function} clbk - function to invoke
* @param {*} [thisArg] - execution context
* @returns {string} input string
*
* @example
* function log( value, index ) {
*     console.log( '%d: %s', index, value );
* }
*
* forEach( 'Hello', log );
*/
function forEach( str, clbk, thisArg ) {
	var len;
	var ch1;
	var ch2;
	var idx;
	var ch;
	var i;

	len = str.length;

	// Process the string one Unicode code unit at a time and handle UTF-16 surrogate pairs as a single Unicode code point...
	for ( i = 0; i < len; i++ ) {
		ch1 = str[ i ];
		idx = i;
		ch = ch1;

		// Check for a UTF-16 surrogate pair...
		if ( i < len-1 && RE_UTF16_HIGH_SURROGATE.test( ch1 ) ) {
			// Check whether the high surrogate is paired with a low surrogate...
			ch2 = str[ i+1 ];
			if ( RE_UTF16_LOW_SURROGATE.test( ch2 ) ) {
				// We found a surrogate pair:
				ch += ch2;
				i += 1; // bump the index to process the next code unit
			}
		}
		// Note: `ch` may be a lone surrogate (e.g., a low surrogate without a preceding high surrogate or a high surrogate at the end of the input string).

		// Invoke the callback with the code point:
		clbk.call( thisArg, ch, idx, str );
	}
	return str;
}


// EXPORTS //

module.exports = forEach;
