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
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b`.
*
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {Function} CDF
*
* @example
* var logcdf = factory( 0.5, 0.5 );
*
* var y = logcdf( 0.8 );
* // returns ~-0.393
*
* y = logcdf( 0.3 );
* // returns ~-1.116
*/
function factory( a, b ) {
	if (
		isnan( a ) ||
		isnan( b ) ||
		a <= 0.0 ||
		b <= 0.0
	) {
		return constantFunction( NaN );
	}
	return logcdf;

	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Kumaraswamy's double bounded distribution.
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
		if ( isnan( x ) ) {
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
}


// EXPORTS //

module.exports = factory;
