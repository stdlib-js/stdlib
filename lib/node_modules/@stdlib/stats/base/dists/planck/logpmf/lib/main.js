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

var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var expm1 = require( '@stdlib/math/base/special/expm1' );
var ln = require( '@stdlib/math/base/special/ln' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// MAIN //

/**
* Evaluates the logarithm of the probability mass function (PMF) for a Planck distribution with shape parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} lambda - shape parameter
* @returns {NonPositiveNumber} logarithm of PMF
*
* @example
* var y = logpmf( 4.0, 0.3 );
* // returns ~-2.5502
*
* @example
* var y = logpmf( 2.0, 1.7 );
* // returns ~-3.6017
*
* @example
* var y = logpmf( -1.0, 2.5 );
* // returns -Infinity
*
* @example
* var y = logpmf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = logpmf( NaN, 0.5 );
* // returns NaN
*
* @example
* // Invalid shape parameter:
* var y = logpmf( 2.0, -1.0 );
* // returns NaN
*/
function logpmf( x, lambda ) {
	if ( isnan( x ) || isnan( lambda ) || lambda <= 0.0 ) {
		return NaN;
	}
	if ( isNonNegativeInteger( x ) ) {
		return ln( -expm1( -lambda ) ) - ( lambda * x );
	}
	return NINF;
}


// EXPORTS //

module.exports = logpmf;
