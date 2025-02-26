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
var expm1 = require( '@stdlib/math/base/special/expm1' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var LNHALF = require( '@stdlib/constants/float64/ln-half' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Weibull distribution with shape parameter `k` and scale parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} k - shape parameter
* @param {PositiveNumber} lambda - scale parameter
* @returns {number} natural logarithm of CDF
*
* @example
* var y = logcdf( 2.0, 1.0, 1.0 );
* // returns ~-0.145
*
* @example
* var y = logcdf( -1.0, 2.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( +Infinity, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = logcdf( -Infinity, 4.0, 2.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = logcdf( 2.0, 0.0, -1.0 );
* // returns NaN
*/
function logcdf( x, k, lambda ) {
	var p;
	if (
		isnan( k ) ||
		isnan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return NINF;
	}
	p = -pow( x / lambda, k );
	return ( p < LNHALF ) ? log1p( -exp( p ) ) : ln( -expm1( p ) );
}


// EXPORTS //

module.exports = logcdf;
