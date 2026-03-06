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

// VARIABLES //

var RE_UTF16_LOW_SURROGATE = /[\uDC00-\uDFFF]/;
var RE_UTF16_HIGH_SURROGATE = /[\uD800-\uDBFF]/;


// MAIN //

/**
* Tests if a string is a well-formed string.
*
* @param {string} str - input string
* @returns {boolean} boolean indicating if a value is a well-formed string primitive
*
* @example
* var bool = isWellFormed( '' );
* // returns true
*
* @example
* var bool = isWellFormed( new String( '\uDC00' ) );
* // returns false
*/
function isWellFormed( str ) {
	var i;
	for ( i = 0; i < str.length; i++ ) {
		// Checking if a low surrogate is present at the beginning
		if ( i === 0 && RE_UTF16_LOW_SURROGATE.test(str[i]) ) {
			return false;
		}

		// Checking if a high surrogate is present at the last position
		if ( i === str.length - 1 && RE_UTF16_HIGH_SURROGATE.test(str[i]) ) {
			return false;
		}

		// Checking if there is no low surrogate after a high surrogate
		if ( i < str.length - 1 && RE_UTF16_HIGH_SURROGATE.test(str[i]) ) {
			if ( RE_UTF16_LOW_SURROGATE.test(str[i + 1]) ) {
				i += 1;
			}
			else {
				return false;
			}
		}

		// Checking if there is no high surrogate before a low surrogate
		if ( i > 0 && RE_UTF16_LOW_SURROGATE.test(str[i]) ) {
			if ( !RE_UTF16_HIGH_SURROGATE.test(str[i - 1]) ) {
				return false;
			}
		}
	}
	return true;
}


// EXPORTS //

module.exports = isWellFormed;
