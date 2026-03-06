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
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for a Student's t distribution with degrees of freedom `v` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} v - degrees of freedom
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 2.0, 0.1 );
* // returns ~0.611
*
* @example
* var y = cdf( 1.0, 2.0 );
* // returns ~0.789
*
* @example
* var y = cdf( -1.0, 4.0 );
* // returns ~0.187
*
* @example
* var y = cdf( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2.0, -1.0 );
* // returns NaN
*/
function cdf( x, v ) {
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
		return 0.5;
	}
	x2 = pow( x, 2.0 );
	if ( v > 2.0*x2 ) {
		z = x2 / ( v + x2 );
		p = betainc( z, 0.5, v/2.0, true, true ) / 2.0;
	} else {
		z = v / ( v + x2 );
		p = betainc( z, v/2.0, 0.5, true, false ) / 2.0;
	}
	return ( x > 0.0 ) ? 1.0 - p : p;
}


// EXPORTS //

module.exports = cdf;
