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
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the natural logarithm of the probability mass function (PMF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @param {number} x - input value
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {number} evaluated logPMF
*
* @example
* var y = logpmf( 2.0, 0, 4 );
* // returns ~-1.609
*
* @example
* var y = logpmf( 5.0, 0, 4 );
* // returns -Infinity
*
* @example
* var y = logpmf( 2, 0, 8 );
* // returns ~-2.197
*
* @example
* var y = logpmf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = logpmf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logpmf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = logpmf( 2.0, 3.0, 1.0 );
* // returns NaN
*/
function logpmf( x, a, b ) {
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
		return NINF;
	}
	return -ln( b - a + 1.0 );
}


// EXPORTS //

module.exports = logpmf;
