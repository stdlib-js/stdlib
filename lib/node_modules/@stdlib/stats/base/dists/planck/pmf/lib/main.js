/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var exp = require( '@stdlib/math/base/special/exp' );
var expm1 = require( '@stdlib/math/base/special/expm1' );


// MAIN //

/**
* Evaluates the probability mass function (PMF) for a Planck distribution with shape parameter `lambda` at a value `x`.
*
* @param {number} x - input value
* @param {PositiveNumber} lambda - shape parameter
* @returns {Probability} evaluated PMF
*
* @example
* var y = pmf( 4.0, 0.3 );
* // returns ~0.0781
*
* @example
* var y = pmf( 2.0, 1.7 );
* // returns ~0.0273
*
* @example
* var y = pmf( -1.0, 2.5 );
* // returns 0.0
*
* @example
* var y = pmf( 0.0, NaN );
* // returns NaN
*
* @example
* var y = pmf( NaN, 0.5 );
* // returns NaN
*
* @example
* // Invalid shape parameter:
* var y = pmf( 2.0, -1.0 );
* // returns NaN
*/
function pmf( x, lambda ) {
	if ( isnan( x ) || isnan( lambda ) || lambda <= 0.0 ) {
		return NaN;
	}
	if ( isNonNegativeInteger( x ) ) {
		return -expm1( -lambda ) * exp( -lambda * x );
	}
	return 0.0;
}


// EXPORTS //

module.exports = pmf;
