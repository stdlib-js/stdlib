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

var isInteger = require( '@stdlib/math/base/assert/is-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Evaluates the quantile function for a discrete uniform distribution with minimum support `a` and maximum support `b` at a probability `p`.
*
* @param {Probability} p - input value
* @param {integer} a - minimum support
* @param {integer} b - maximum support
* @returns {integer} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 0, 1 );
* // returns 1
*
* @example
* var y = quantile( 0.5, 0, 10 );
* // returns 5
*
* @example
* var y = quantile( 1.1, 0, 1 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 0, 1 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1, 1.5 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 0, 1 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, 0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 2, 1 );
* // returns NaN
*/
function quantile( p, a, b ) {
	var n;
	if (
		isnan( p ) ||
		isnan( a ) ||
		isnan( b ) ||
		!isInteger( a ) ||
		!isInteger( b ) ||
		a > b ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	n = b - a + 1;
	return a + floor( p * n );
}


// EXPORTS //

module.exports = quantile;
