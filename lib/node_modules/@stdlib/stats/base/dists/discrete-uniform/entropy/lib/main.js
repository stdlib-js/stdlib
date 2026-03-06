/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Returns the entropy of a discrete uniform distribution.
*
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {number} entropy
*
* @example
* var v = entropy( 0, 1 );
* // returns ~0.693
*
* @example
* var v = entropy( 4, 12 );
* // returns ~2.197
*
* @example
* var v = entropy( -4, 4 );
* // returns ~2.197
*
* @example
* var v = entropy( 1, 2.5 );
* // returns NaN
*
* @example
* var v = entropy( -0.1, 1 );
* // returns NaN
*
* @example
* var v = entropy( 2, NaN );
* // returns NaN
*
* @example
* var v = entropy( NaN, 2 );
* // returns NaN
*/
function entropy( a, b ) {
	if (
		isnan( a ) ||
		isnan( b ) ||
		!isInteger( a ) ||
		!isInteger( b ) ||
		a > b
	) {
		return NaN;
	}
	return ln( b - a + 1 );
}


// EXPORTS //

module.exports = entropy;
