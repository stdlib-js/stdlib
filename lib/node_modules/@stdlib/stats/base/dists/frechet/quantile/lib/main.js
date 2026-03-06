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
var pow = require( '@stdlib/math/base/special/pow' );
var ln = require( '@stdlib/math/base/special/ln' );


// MAIN //

/**
* Evaluates the quantile function for a Fréchet distribution with shape `alpha`, scale `s`, and location `m` at a probability `p`.
*
* @param {number} p - input probability
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} s - scale parameter
* @param {number} m - location parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.5, 2.0, 3.0, 2.0 );
* // returns ~5.603
*
* @example
* var y = quantile( 0.2, 1.0, 3.0, -1.0 );
* // returns ~0.864
*
* @example
* var y = quantile( 0.3, 2.0, 1.0, 1.0 );
* // returns ~1.911
*
* @example
* var y = quantile( NaN, 2.0, 1.0, -1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.1, NaN, 1.0, -1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.1, 2.0, NaN, -1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.1, 2.0, 1.0, NaN );
* // returns NaN
*
* @example
* var y = quantile( 0.1, -1.0, 1.0, 0.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.1, 1.0, -1.0, 0.0 );
* // returns NaN
*/
function quantile( p, alpha, s, m ) {
	if (
		isnan( p ) ||
		isnan( alpha ) ||
		isnan( s ) ||
		isnan( m ) ||
		p < 0.0 ||
		p > 1.0 ||
		alpha <= 0.0 ||
		s <= 0.0
	) {
		return NaN;
	}
	return m + ( s * ( pow( -ln( p ), -1.0/alpha ) ) );
}


// EXPORTS //

module.exports = quantile;
