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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the cumulative distribution function (CDF) for a Kumaraswamy's double bounded distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} a - first shape parameter
* @param {PositiveNumber} b - second shape parameter
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 0.5, 1.0, 1.0 );
* // returns ~0.5
*
* @example
* var y = cdf( 0.5, 2.0, 4.0 );
* // returns ~0.684
*
* @example
* var y = cdf( 0.2, 2.0, 2.0 );
* // returns ~0.078
*
* @example
* var y = cdf( 0.8, 4.0, 4.0 );
* // returns ~0.878
*
* @example
* var y = cdf( -0.5, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = cdf( 1.5, 4.0, 2.0 );
* // returns 1.0
*
* @example
* var y = cdf( 2.0, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = cdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 1.0, NaN );
* // returns NaN
*/
function cdf( x, a, b ) {
	return addon( x, a, b );
}


// EXPORTS //

module.exports = cdf;
