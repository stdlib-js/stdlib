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

var expm1 = require( '@stdlib/math/base/special/expm1' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var log1p = require( '@stdlib/math/base/special/log1p' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var LNHALF = require( '@stdlib/constants/float64/ln-half' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the logarithm of the cumulative distribution function (CDF) for a Rayleigh distribution with scale parameter `sigma` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeNumber} sigma - scale parameter
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 3.0 );
* // returns ~-1.613
*
* @example
* var y = logcdf( 1.0, 2.0 );
* // returns ~-2.141
*
* @example
* var y = logcdf( -1.0, 4.0 );
* // returns -Infinity
*
* @example
* var y = logcdf( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN );
* // returns NaN
*
* @example
* // Negative scale parameter:
* var y = logcdf( 2.0, -1.0 );
* // returns NaN
*/
function logcdf( x, sigma ) {
	var s2;
	var p;
	if (
		isnan( x ) ||
		isnan( sigma ) ||
		sigma < 0.0
	) {
		return NaN;
	}
	if ( sigma === 0.0 ) {
		return ( x < 0.0 ) ? NINF : 0.0;
	}
	if ( x < 0.0 ) {
		return NINF;
	}
	s2 = pow( sigma, 2.0 );
	p = -pow( x, 2.0 ) / ( 2.0 * s2 );
	return ( p < LNHALF ) ? log1p( -exp( p ) ) : ln( -expm1( p ) );
}


// EXPORTS //

module.exports = logcdf;
