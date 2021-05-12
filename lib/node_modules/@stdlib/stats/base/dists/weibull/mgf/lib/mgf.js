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
var gamma = require( '@stdlib/math/base/special/gamma' );
var EPS = require( '@stdlib/constants/float64/eps' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a Weibull distribution with shape `k` and scale `lambda` at a value `t`.
*
* @param {number} t - input value
* @param {PositiveNumber} k - shape parameter
* @param {PositiveNumber} lambda - scale parameter
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 1.0, 1.0, 0.5 );
* // returns ~2.0
*
* @example
* var y = mgf( -1.0, 4.0, 4.0 );
* // returns ~0.019
*
* @example
* var y = mgf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, 1.0, NaN );
* // returns NaN
*
* @example
* var y = mgf( 0.2, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 0.0, 0.5 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.2, 0.5, 0.0 );
* // returns NaN
*/
function mgf( t, k, lambda ) {
	var summand;
	var sum;
	var c;
	var n;

	if (
		isnan( t ) ||
		isnan( k ) ||
		isnan( lambda ) ||
		k <= 0.0 ||
		lambda <= 0.0
	) {
		return NaN;
	}
	sum = 1.0;
	c = 1.0;
	n = 0;
	do {
		n += 1;
		c *= ( t * lambda ) / n;
		if ( c === 0.0 ) {
			summand = 0.0;
		} else {
			summand = c * gamma( 1.0 + (n / k) );
		}
		sum += summand;
	} while ( summand / sum > EPS );
	return sum;
}


// EXPORTS //

module.exports = mgf;
