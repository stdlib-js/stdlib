/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var floor = require( '@stdlib/math/base/special/floor' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the logarithm of the cumulative distribution function (CDF) for a Planck distribution with shape parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} lambda - shape parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.5 );
* // returns ~-0.2525
*
* @example
* var y = logcdf( 2.0, 1.5 );
* // returns ~-0.0112
*
* @example
* var y = logcdf( -1.0, 0.5 );
* // returns -Infinity
*
* @example
* var y = logcdf( NaN, 0.5 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN );
* // returns NaN
*
* @example
* // Invalid shape parameter
* var y = logcdf( 2.0, -1.4 );
* // returns NaN
*/
function logcdf( x, lambda ) {
	if ( isnan( x ) || isnan( lambda ) || lambda <= 0.0 ) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return NINF;
	}
	if ( x === PINF ) {
		return 0.0;
	}
	return ln( -expm1( -lambda * ( floor(x)+1.0 ) ) );
}


// EXPORTS //

module.exports = logcdf;
