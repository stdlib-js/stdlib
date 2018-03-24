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


// MAIN //

/**
* Evaluates the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @param {number} x - input value
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {number} evaluated PMF
*
* @example
* var y = pmf( 2.0, 0, 4 );
* // returns ~0.2
*
* @example
* var y = pmf( 5.0, 0, 4 );
* // returns 0.0
*
* @example
* var y = pmf( 2, 0, 8 );
* // returns ~0.111
*
* @example
* var y = pmf( NaN, 0, 1 );
* // returns NaN
*
* @example
* var y = pmf( 0.0, NaN, 1 );
* // returns NaN
*
* @example
* var y = pmf( 0.0, 0, NaN );
* // returns NaN
*
* @example
* var y = pmf( 2.0, 3, 1 );
* // returns NaN
*/
function pmf( x, a, b ) {
	if (
		isnan( x ) ||
		isnan( a ) ||
		isnan( b ) ||
		!isInteger( a ) ||
		!isInteger( b ) ||
		a > b
	) {
		return NaN;
	}
	if ( x < a || x > b || !isInteger( x ) ) {
		return 0.0;
	}
	return 1.0 / ( b - a + 1.0 );
}


// EXPORTS //

module.exports = pmf;
