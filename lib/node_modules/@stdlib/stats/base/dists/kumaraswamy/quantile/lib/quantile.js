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


// MAIN //

/**
* Evaluates the quantile function for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b` at a probability `p`.
*
* @param {Probability} p - input probability
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {number} evaluated quantile function
*
* @example
* var y = quantile( 0.5, 1.0, 1.0 );
* // returns 0.5
*
* @example
* var y = quantile( 0.5, 2.0, 4.0 );
* // returns ~0.399
*
* @example
* var y = quantile( 0.2, 2.0, 2.0 );
* // returns ~0.325
*
* @example
* var y = quantile( 0.8, 4.0, 4.0 );
* // returns ~0.759
*
* @example
* var y = quantile( -0.5, 4.0, 2.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.8, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = quantile( 0.8, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = quantile( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.1, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 0.1, 1.0, NaN );
* // returns NaN
*/
function quantile( p, a, b ) {
	if (
		isnan( p ) ||
		isnan( a ) ||
		isnan( b ) ||
		a <= 0.0 ||
		b <= 0.0 ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	return pow( 1.0 - pow( 1.0-p, 1.0/b ), 1.0/a );
}


// EXPORTS //

module.exports = quantile;
