/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var ceil = require( '@stdlib/math/base/special/ceil' );
var ln = require( '@stdlib/math/base/special/ln' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Evaluates the quantile function for a Planck distribution with shape parameter `lambda` at a probability `p`.
*
* @param {Probability} p - input value
* @param {PositiveNumber} lambda - shape parameter
* @returns {NonNegativeInteger} evaluated quantile function
*
* @example
* var y = quantile( 0.8, 0.4 );
* // returns 4
*
* @example
* var y = quantile( 0.5, 1.4 );
* // returns 0
*
* @example
* var y = quantile( 0.9, 2.1 );
* // returns 1
*
* @example
* var y = quantile( 0.2, -0.1 );
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
* var y = quantile( -0.5, 1.0 );
* // returns NaN
*
* @example
* var y = quantile( 1.5, 1.0 );
* // returns NaN
*/
function quantile( p, lambda ) {
	if ( isnan( lambda ) || isnan( p ) || lambda <= 0.0 || p < 0.0 || p > 1.0 ) { // eslint-disable-line max-len
		return NaN;
	}
	if ( p === 1.0 ) {
		return PINF;
	}
	return ceil( -ln( 1.0-p ) / lambda ) - 1.0;
}


// EXPORTS //

module.exports = quantile;
