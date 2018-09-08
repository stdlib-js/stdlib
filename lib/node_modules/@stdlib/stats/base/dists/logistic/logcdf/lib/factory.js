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
var degenerate = require( '@stdlib/stats/base/dists/degenerate/logcdf' ).factory;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var log1pexp = require( './log1pexp.js' );


// MAIN //

/**
* Returns a function for evaluating the logarithm of the cumulative distribution function (CDF) for a logistic distribution with location parameter `mu` and scale parameter `s`.
*
* @param {number} mu - location parameter
* @param {NonNegativeNumber} s - scale parameter
* @returns {Function} logCDF
*
* @example
* var logcdf = factory( 3.0, 1.5 );
*
* var y = logcdf( 1.0 );
* // returns ~-1.567
*
* y = logcdf( 4.0 );
* // returns ~-0.414
*/
function factory( mu, s ) {
	if ( isnan( mu ) || isnan( s ) || s < 0.0 ) {
		return constantFunction( NaN );
	}
	if ( s === 0.0 ) {
		return degenerate( mu );
	}
	return logcdf;

	/**
	* Evaluates the logarithm of the cumulative distribution function (CDF) for a logistic distribution.
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
		z = ( x - mu ) / s;
		return -log1pexp( -z );
	}
}


// EXPORTS //

module.exports = factory;
