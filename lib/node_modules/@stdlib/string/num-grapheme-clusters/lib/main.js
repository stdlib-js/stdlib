/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var nextGraphemeClusterBreak = require( '@stdlib/string/next-grapheme-cluster-break' );


// MAIN //

/**
* Returns the number of grapheme clusters in a string.
*
* @param {string} str - input string
* @throws {TypeError} must provide a string primitive
* @returns {NonNegative} number of grapheme clusters
*
* @example
* var out = numGraphemeClusters( 'last man standing' );
* // returns 17
*
* @example
* var out = numGraphemeClusters( 'presidential election' );
* // returns 21
*
* @example
* var out = numGraphemeClusters( 'अनुच्छेद' );
* // returns 5
*
* @example
* var out = numGraphemeClusters( '🌷' );
* // returns 1
*/
function numGraphemeClusters( str ) {
	var count;
	var idx;
	var brk;

	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. Must provide a string. Value: `' + str + '`.' );
	}
	count = 0;
	idx = 0;

	brk = nextGraphemeClusterBreak( str, idx );
	while ( brk !== -1 ) {
		count += 1;
		idx = brk;
		brk = nextGraphemeClusterBreak( str, idx );
	}
	if ( idx < str.length ) {
		count += 1;
	}
	return count;
}


// EXPORTS //

module.exports = numGraphemeClusters;
