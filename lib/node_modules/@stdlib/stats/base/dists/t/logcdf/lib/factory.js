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
var betainc = require( '@stdlib/math/base/special/betainc' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var LN_HALF = require( '@stdlib/constants/float64/ln-half' );


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the cumulative distribution function (CDF) for a Student's t distribution with degrees of freedom `v`.
*
* @param {PositiveNumber} v - degrees of freedom
* @returns {Function} logCDF
*
* @example
* var logcdf = factory( 0.5 );
* var y = logcdf( 3.0 );
* // returns ~-0.203
*
* y = logcdf( 1.0 );
* // returns ~-0.358
*/
function factory( v ) {
	if ( isnan( v ) || v <= 0.0 ) {
		return constantFunction( NaN );
	}
	return logcdf;

	/**
	* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Student's t distribution.
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
		var x2;
		var p;
		var z;
		if ( isnan( x ) ) {
			return NaN;
		}
		if ( x === 0.0 ) {
			return LN_HALF;
		}
		x2 = pow( x, 2.0 );
		if ( v > 2.0*x2 ) {
			z = x2 / ( v + x2 );
			p = betainc( z, 0.5, v/2.0, true, true ) / 2.0;
		} else {
			z = v / ( v + x2 );
			p = betainc( z, v/2.0, 0.5, true, false ) / 2.0;
		}
		return ( x > 0.0 ) ? log1p( -p ) : ln( p );
	}
}


// EXPORTS //

module.exports = factory;
