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

var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 0.5, 1.0, 1.0 );
* // returns ~-0.693
*
* @example
* var y = logcdf( 0.5, 2.0, 4.0 );
* // returns ~-0.38
*
* @example
* var y = logcdf( 0.2, 2.0, 2.0 );
* // returns ~-2.546
*
* @example
* var y = logcdf( 0.8, 4.0, 4.0 );
* // returns ~-0.13
*
* @example
* var y = logcdf( -0.5, 4.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( 1.5, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = logcdf( 2.0, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = logcdf( 2.0, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = logcdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, 1.0, NaN );
* // returns NaN
*/
function logcdf( x, a, b ) {
	if (
		isnan( x ) ||
		isnan( a ) ||
		isnan( b ) ||
		a <= 0.0 ||
		b <= 0.0
	) {
		return NaN;
	}
	if ( x <= 0.0 ) {
		return NINF;
	}
	if ( x >= 1.0 ) {
		return 0.0;
	}
	return ln( 1.0 - pow( 1.0 - pow( x, a ), b ) );
}


// EXPORTS //

module.exports = logcdf;
