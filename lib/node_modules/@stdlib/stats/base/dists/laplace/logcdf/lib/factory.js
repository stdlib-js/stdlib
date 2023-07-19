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

var constantFunction = require( '@stdlib/utils/constant-function' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var LNHALF = require( '@stdlib/constants/float64/ln-half' );


// MAIN //

/**
* Returns a function for evaluating the logarithm of the cumulative distribution function (CDF) for a Laplace distribution with location parameter `mu` and scale parameter `b`.
*
* @param {number} mu - location parameter
* @param {PositiveNumber} b - scale parameter
* @returns {Function} logCDF
*
* @example
* var logcdf = factory( 3.0, 1.5 );
*
* var y = logcdf( 1.0 );
* // returns ~-2.026
*
* y = logcdf( 4.0 );
* // returns ~-0.297
*/
function factory( mu, b ) {
	if ( isnan( mu ) || isnan( b ) || b <= 0.0 ) {
		return constantFunction( NaN );
	}
	return logcdf;

	/**
	* Evaluates the logarithm of the cumulative distribution function (CDF) for a Laplace distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {number} evaluated logCDF
	*
	* @example
	* var y = logcdf( 2.0 );
	* // returns <number>
	*/
	function logcdf( x ) {
		var z;
		if ( isnan( x ) ) {
			return NaN;
		}
		z = ( x - mu ) / b;
		if ( x < mu ) {
			return LNHALF + z;
		}
		return LNHALF + log1p( -expm1( -z ) );
	}
}


// EXPORTS //

module.exports = factory;
