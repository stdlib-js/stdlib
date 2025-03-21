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

var betainc = require( '@stdlib/math/base/special/betainc' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 0.5, 1.0, 1.0 );
* // returns ~-0.693
*
* @example
* var y = logcdf( 0.5, 2.0, 4.0 );
* // returns ~-0.208
*
* @example
* var y = logcdf( 0.2, 2.0, 2.0 );
* // returns ~-2.263
*
* @example
* var y = logcdf( 0.8, 4.0, 4.0 );
* // returns ~-0.034
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
function logcdf( x, alpha, beta ) {
	if (
		isnan( x ) ||
		isnan( alpha ) ||
		isnan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return NaN;
	}
	if ( x <= 0.0 ) {
		return NINF;
	}
	if ( x >= 1.0 ) {
		return 0.0;
	}
	return ln( betainc( x, alpha, beta ) );
}


// EXPORTS //

module.exports = logcdf;
