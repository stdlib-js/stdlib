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
var log1p = require( '@stdlib/math/base/special/log1p' );
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );
var LN_HALF = require( '@stdlib/constants/float64/ln-half' );


// MAIN //

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF) for a Student's t distribution with degrees of freedom `v` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} v - degrees of freedom
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.1 );
* // returns ~-0.493
*
* @example
* var y = logcdf( 1.0, 2.0 );
* // returns ~-0.237
*
* @example
* var y = logcdf( -1.0, 4.0 );
* // returns ~-1.677
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
* var y = logcdf( 2.0, -1.0 );
* // returns NaN
*/
function logcdf( x, v ) {
	var x2;
	var p;
	var z;
	if (
		isnan( x ) ||
		isnan( v ) ||
		v <= 0.0
	) {
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


// EXPORTS //

module.exports = logcdf;
