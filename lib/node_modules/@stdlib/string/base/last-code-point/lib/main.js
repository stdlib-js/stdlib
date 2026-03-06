/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MODULES //

var RE_UTF16_SURROGATE_PAIR = require( '@stdlib/regexp/utf16-surrogate-pair' ).REGEXP;


// VARIABLES //

var RE_UTF16_LOW_SURROGATE = /[\uDC00-\uDFFF]/; // TODO: replace with stdlib pkg
var RE_UTF16_HIGH_SURROGATE = /[\uD800-\uDBFF]/; // TODO: replace with stdlib pkg


// MAIN //

/**
* Returns the last `n` Unicode code points of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} n - number of Unicode code points to return
* @returns {string} output string
*
* @example
* var out = last( 'Hello World', 1 );
* // returns 'd'
*
* @example
* var out = last( 'ASCII', 2 );
* // returns 'II'
*
* @example
* var out = last( 'JavaScript', 6 );
* // returns 'Script'
*/
function last( str, n ) {
	var len;
	var out;
	var ch1;
	var ch2;
	var cnt;
	var i;
	len = str.length;
	out = '';
	cnt = 0;
	if ( str === '' || n === 0 ) {
		return '';
	}
	if ( n === 1 ) {
		str = str.substring( len-2, len );
		if ( RE_UTF16_SURROGATE_PAIR.test( str ) ) {
			return str;
		}
		return str[1];
	}

	// Process the string backwards one Unicode code unit at a time and count UTF-16 surrogate pairs as a single Unicode code point...
	for ( i = len-1; i >= 0; i-- ) {
		ch1 = str[ i ];
		out = ch1 + out;
		cnt += 1;

		// Check for a low UTF-16 surrogate...
		if ( RE_UTF16_LOW_SURROGATE.test( ch1 ) ) {
			// Check for an unpaired surrogate at the start of the input string...
			if ( i === 0 ) {
				// We found an unpaired surrogate...
				break;
			}
			// Check whether the low surrogate is paired with a high surrogate...
			ch2 = str[ i-1 ];
			if ( RE_UTF16_HIGH_SURROGATE.test( ch2 ) ) {
				// We found a surrogate pair:
				out = ch2 + out;
				i -= 1; // decrement the index to process the next code unit
			}
		}
		// Check whether we've found the desired number of code points...
		if ( cnt === n ) {
			break;
		}
	}
	return out;
}


// EXPORTS //

module.exports = last;
