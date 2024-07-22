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

var bernoulli = require( '@stdlib/random/base/bernoulli' );


// MAIN //

/**
* Converts a string to "sticky caps" case.
*
* @param {string} str - input string
* @param {number} [p=0.5] - probability of capitalization (between 0 and 1)
* @returns {string} converted string
*
* @example
* var str = stickycase( 'hello world' );
* // returns <string>
*
* @example
* var str = stickycase( 'hello world', 0.2 );
* // returns <string>
*
* @example
* var str = stickycase( 'hello world', 0.8 );
* // returns <string>
*
* @example
* var str = stickycase( 'hello world', '0.5' );
* // returns <string>
*/
function stickycase( str, p ) {
	var result = '';
	var char;
	var i;
	p = ( typeof p === 'number' && p >= 0 && p <= 1 ) ? p : 0.5;

	for ( i = 0; i < str.length; i++ ) {
		char = str.charAt( i );
		if ( bernoulli( p ) ) {
			char = char.toUpperCase();
		} else {
			char = char.toLowerCase();
		}
		result += char;
	}
	return result;
}


// EXPORTS //

module.exports = stickycase;
