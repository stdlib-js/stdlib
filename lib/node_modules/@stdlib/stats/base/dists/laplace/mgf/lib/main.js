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
var abs = require( '@stdlib/math/base/special/abs' );
var exp = require( '@stdlib/math/base/special/exp' );
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Evaluates the moment-generating function (MGF) for a Laplace (double exponential) distribution with location parameter `mu` and scale parameter `b` at a value `t`.
*
* @param {number} t - input value
* @param {number} mu - mean
* @param {NonNegativeNumber} b - scale parameter
* @returns {number} evaluated MGF
*
* @example
* var y = mgf( 0.5, 0.0, 1.0 );
* // returns ~1.333
*
* @example
* var y = mgf( 0.0, 0.0, 1.0 );
* // returns 1.0
*
* @example
* var y = mgf( -1.0, 4.0, 0.2 );
* // returns ~0.019
*
* @example
* var y = mgf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = mgf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = mgf( 1.0, 0.0, 2.0 );
* // returns NaN
*
* @example
* var y = mgf( -0.5, 0.0, 4.0 );
* // returns NaN
*
* @example
* var y = mgf( 2.0, 0.0, 0.0 );
* // returns NaN
*
* @example
* var y = mgf( 2.0, 0.0, -1.0 );
* // returns NaN
*/
function mgf( t, mu, b ) {
	var bt;
	if (
		isnan( t ) ||
		isnan( mu ) ||
		isnan( b ) ||
		b <= 0.0 ||
		abs( t ) >= 1.0/b
	) {
		return NaN;
	}
	bt = b * t;
	return exp( mu * t ) / ( 1.0 - pow( bt, 2.0 ) );
}


// EXPORTS //

module.exports = mgf;
