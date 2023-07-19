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
var kernelBetaincinv = require( '@stdlib/math/base/special/kernel-betaincinv' );


// MAIN //

/**
* Returns a value `p` such that `p = betainc(a, b, x)`.
*
* @param {Probability} p - function parameter
* @param {PositiveNumber} a - function parameter
* @param {PositiveNumber} b - function parameter
* @param {boolean} [upper=false] - boolean indicating if the function should return the inverse of the upper tail of the incomplete beta function
* @returns {number} function value
*
* @example
* var y = betaincinv( 0.2, 3.0, 3.0 );
* // returns ~0.327
*
* @example
* var y = betaincinv( 0.4, 3.0, 3.0 );
* // returns ~0.446
*
* @example
* var y = betaincinv( 0.4, 3.0, 3.0, true );
* // returns ~0.554
*
* @example
* var y = betaincinv( 0.4, 1.0, 6.0 );
* // returns ~0.082
*
* @example
* var y = betaincinv( 0.8, 1.0, 6.0 );
* // returns ~0.235
*/
function betaincinv( p, a, b, upper ) {
	if (
		isnan( p ) ||
		isnan( a ) ||
		isnan( b )
	) {
		return NaN;
	}
	if ( a <= 0.0 || b <= 0.0 ) {
		return NaN;
	}
	if ( p < 0.0 || p > 1.0 ) {
		return NaN;
	}
	if ( upper ) {
		return kernelBetaincinv( a, b, 1.0 - p, p )[ 0 ];
	}
	return kernelBetaincinv( a, b, p, 1.0 - p )[ 0 ];
}


// EXPORTS //

module.exports = betaincinv;
