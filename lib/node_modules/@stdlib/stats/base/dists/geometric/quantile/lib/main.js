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
var log1p = require( '@stdlib/math/base/special/log1p' );
var ceil = require( '@stdlib/math/base/special/ceil' );
var max = require( '@stdlib/math/base/special/max' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the quantile function for a geometric distribution with success probability `p` at a probability `r`.
*
* @param {Probability} r - input value
* @param {Probability} p - success probability
* @returns {NonNegativeInteger} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 0.4 );
* // returns 3
*
* @example
* var y = quantile( 0.5, 0.4 );
* // returns 1
*
* @example
* var y = quantile( 0.9, 0.1 );
* // returns 21
*
* @example
* var y = quantile( -0.2, 0.1 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 0.8 );
* // returns NaN
*
* @example
* var y = quantile( 0.4, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.5, 1.5 );
* // returns NaN
*/
function quantile( r, p ) {
	if (
		isnan( p ) ||
		isnan( r ) ||
		p < 0.0 ||
		p > 1.0 ||
		r < 0.0 ||
		r > 1.0
	) {
		return NaN;
	}
	if ( r === 1.0 ) {
		return PINF;
	}
	return max( 0.0, ceil( ( ln(1.0-r)/log1p(-p) )- ( 1.0+1.0e-12 ) ) );
}


// EXPORTS //

module.exports = quantile;
