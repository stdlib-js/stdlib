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
var exp = require( '@stdlib/math/base/special/exp' );
var LN2 = require( '@stdlib/constants/float64/ln-two' );
var weights = require( './weights.js' );


// MAIN //

/**
* Evaluates the quantile function of the Wilcoxon signed rank test statistic with `n` observations.
*
* @param {Probability} p - input value
* @param {PositiveInteger} n - number of observations
* @returns {NonNegativeInteger} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 5 );
* // returns 11
*
* @example
* var y = quantile( 0.5, 4 );
* // returns 5
*
* @example
* var y = quantile( 1.1, 5 );
* // returns NaN
*
* @example
* var y = quantile( -0.2, 5 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 5 );
* // returns NaN
*
* @example
* var y = quantile( 0.0, NaN );
* // returns NaN
*/
function quantile( p, n ) {
	var pui;
	var q;
	var r;
	if ( isnan( n ) || !isPositiveInteger( n ) || !isfinite( n ) ) {
		return NaN;
	}
	if ( isnan( p ) || p < 0.0 || p > 1.0 ) {
		return NaN;
	}
	if ( p === 0.0 ) {
		return 0;
	}
	if ( p === 1.0 ) {
		return ( n * ( n + 1 ) ) / 2;
	}
	pui = exp( -n * LN2 );
	r = 0;
	q = -1;
	while ( r < p ) {
		q += 1;
		r += pui * weights( q, n );
	}
	return q;
}


// EXPORTS //

module.exports = quantile;
