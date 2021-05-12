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
var sinpi = require( '@stdlib/math/base/special/sinpi' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PI = require( '@stdlib/constants/float64/pi' );


// MAIN //

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a raised cosine distribution with location parameter `mu` and scale parameter `s` at a value `x`.
*
* @param {number} x - input value
* @param {number} mu - location parameter
* @param {NonNegativeNumber} s - scale parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 0.5, 0.0, 1.0 );
* // returns ~-0.095
*
* @example
* var y = logcdf( 1.2, 0.0, 1.0 );
* // returns 0.0
*
* @example
* var y = logcdf( -0.9, 0.0, 1.0 );
* // returns ~-7.108
*
* @example
* var y = logcdf( 2.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = logcdf( 2.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( NaN, 0.0, 1.0 );
* // returns NaN
*/
function logcdf( x, mu, s ) {
	var z;
	if (
		isnan( x ) ||
		isnan( mu ) ||
		isnan( s ) ||
		s < 0.0
	) {
		return NaN;
	}
	if ( s === 0.0 ) {
		return ( x < mu ) ? NINF : 0.0;
	}
	if ( x < mu - s ) {
		return NINF;
	}
	if ( x > mu + s ) {
		return 0.0;
	}
	z = ( x - mu ) / s;
	return ln( ( 1.0 + z + ( sinpi( z ) / PI ) ) / 2.0 );
}


// EXPORTS //

module.exports = logcdf;
