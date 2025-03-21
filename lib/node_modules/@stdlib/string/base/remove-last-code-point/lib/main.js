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
* Removes the last `n` Unicode code points of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} n - number of Unicode code points to remove
* @returns {string} output string
*
* @example
* var out = removeLast( 'last man standing', 1 );
* // returns 'last man standin'
*
* @example
* var out = removeLast( 'presidential election', 1 );
* // returns 'presidential electio'
*
* @example
* var out = removeLast( 'JavaScript', 1 );
* // returns 'JavaScrip'
*
* @example
* var out = removeLast( 'Hidden Treasures', 1 );
* // returns 'Hidden Treasure'
*/
function removeLast( str, n ) {
	var len;
	var ch1;
	var ch2;
	var cnt;
	var i;
	if ( n === 0 ) {
		return str;
	}
	len = str.length;
	cnt = 0;

	// Process the string one Unicode code unit at a time and count UTF-16 surrogate pairs as a single Unicode code point...
	for ( i = len - 1; i >= 0; i-- ) {
		ch1 = str[ i ];
		cnt += 1;

		// Check for a low UTF-16 surrogate...
		if ( RE_UTF16_LOW_SURROGATE.test( ch1 ) ) {
			// Check for an unpaired surrogate at the end of the input string...
			if ( i === 0 ) {
				// We found an unpaired surrogate...
				break;
			}
			// Check whether the high surrogate is paired with a low surrogate...
			ch2 = str[ i-1 ];
			if ( RE_UTF16_HIGH_SURROGATE.test( ch2 ) ) {
				// We found a surrogate pair:
				i -= 1; // bump the index to process the next code unit
			}
		}
		// Check whether we've found the desired number of code points...
		if ( cnt === n ) {
			break;
		}
	}
	return str.substring( 0, i );
}


// EXPORTS //

module.exports = removeLast;
