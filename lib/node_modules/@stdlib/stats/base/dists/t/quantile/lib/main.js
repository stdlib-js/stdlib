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

var kernelBetaincinv = require( '@stdlib/math/base/special/kernel-betaincinv' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var sign = require( '@stdlib/math/base/special/signum' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Evaluates the quantile function for a Student's t distribution with degrees of freedom `v` at a probability `p`.
*
* @param {Probability} p - input value
* @param {PositiveNumber} v - degrees of freedom
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 1.0 );
* // returns ~1.376
*
* @example
* var y = quantile( 0.1, 1.0 );
* // returns ~-3.078
*
* @example
* var y = quantile( 0.5, 0.1 );
* // returns 0.0
*
* @example
* var y = quantile( -0.2, 0.1 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, -1.0 );
* // returns NaN
*/
function quantile( p, v ) {
	var prob;
	var xs;
	if (
		isnan( v ) ||
		isnan( p ) ||
		v <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	prob = ( p > 0.5 ) ? 1.0 - p : p;
	xs = kernelBetaincinv( v / 2.0, 0.5, 2.0 * prob, 1.0 - (2.0 * prob) );
	return sign( p - 0.5 ) * sqrt( v * xs[ 1 ] / xs[ 0 ] );
}


// EXPORTS //

module.exports = quantile;
