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
var log1p = require( '@stdlib/math/base/special/log1p' );
var pow = require( '@stdlib/math/base/special/pow' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for a Pareto (Type I) distribution with shape parameter `alpha` and scale parameter `beta` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 1.0, 1.0 );
* // returns ~-0.693
*
* @example
* var y = logcdf( 5.0, 2.0, 4.0 );
* // returns ~-1.022
*
* @example
* var y = logcdf( 4.0, 2.0, 2.0 );
* // returns ~-0.288
*
* @example
* var y = logcdf( 1.9, 2.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( +Infinity, 4.0, 2.0 );
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
	if ( x < beta ) {
		return NINF;
	}
	return log1p( -pow( beta / x, alpha ) );
}


// EXPORTS //

module.exports = logcdf;
