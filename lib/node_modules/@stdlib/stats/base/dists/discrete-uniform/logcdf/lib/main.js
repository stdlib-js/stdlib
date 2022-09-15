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
var floor = require( '@stdlib/math/base/special/floor' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a discrete uniform distribution with minimum support `a` and maximum support `b` at a value `x`.
*
* @param {number} x - input value
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 9.0, 0, 10 );
* // returns ~-0.095
*
* @example
* var y = logcdf( 0.5, 0, 2 );
* // returns ~-1.099
*
* @example
* var y = logcdf( +Infinity, 2, 4 );
* // returns 0.0
*
* @example
* var y = logcdf( -Infinity, 2, 4 );
* // returns -Infinity
*
* @example
* var y = logcdf( NaN, 0, 1 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN, 1 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, 0, NaN );
* // returns NaN
*
* @example
* var y = logcdf( 2.0, 1, 0 );
* // returns NaN
*/
function logcdf( x, a, b ) {
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
	if ( x < a ) {
		return NINF;
	}
	if ( x >= b ) {
		return 0.0;
	}
	return ln( floor( x ) - a + 1.0 ) - ln( b - a + 1.0 );
}


// EXPORTS //

module.exports = logcdf;
