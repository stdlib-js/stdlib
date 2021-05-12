/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isPositiveInteger = require( '@stdlib/math/base/assert/is-positive-integer' );
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var round = require( '@stdlib/math/base/special/round' );
var exp = require( '@stdlib/math/base/special/exp' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );
var weights = require( './weights.js' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) of the Wilcoxon signed rank test statistic with `n` observations.
*
* @param {number} x - input value
* @param {PositiveInteger} n - number of observations
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 7.0, 9 );
* // returns ~0.037
*
* @example
* var y = cdf( 7.0, 6 );
* // returns ~0.281
*
* @example
* var y = cdf( -1.0, 40 );
* // returns 0.0
*
* @example
* var y = cdf( NaN, 10 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2.0, -1 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 1.8 );
* // returns NaN
*/
function cdf( x, n ) {
	var mlim;
	var pui;
	var i;
	var p;
	if (
		isnan( x ) ||
		!isPositiveInteger( n ) ||
		!isfinite( n )
	) {
		return NaN;
	}
	if ( x < 0.0 ) {
		return 0.0;
	}
	x = round( x );
	mlim = n * ( n + 1 ) / 2;
	if ( x >= mlim ) {
		return 1.0;
	}
	pui = exp( -n * LN2 );
	p = 0;
	for ( i = 0; i <= x; i++ ) {
		p += weights( i, n ) * pui;
	}
	return p;
}


// EXPORTS //

module.exports = cdf;
