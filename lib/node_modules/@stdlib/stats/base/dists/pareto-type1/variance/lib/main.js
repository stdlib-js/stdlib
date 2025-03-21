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
var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the variance of a Pareto (Type I) distribution.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {PositiveNumber} variance
*
* @example
* var v = variance( 4.0, 12.0 );
* // returns 32.0
*
* @example
* var v = variance( 8.0, 2.0 );
* // returns ~0.109
*
* @example
* var v = variance( 1.0, 1.0 );
* // returns Infinity
*
* @example
* var v = variance( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = variance( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = variance( 2.0, NaN );
* // returns NaN
*
* @example
* var v = variance( NaN, 2.0 );
* // returns NaN
*/
function variance( alpha, beta ) {
	if (
		isnan( alpha ) ||
		alpha <= 0.0 ||
		isnan( beta ) ||
		beta <= 0.0
	) {
		return NaN;
	}
	if ( alpha < 2.0 ) {
		return PINF;
	}
	return ( beta*beta * alpha ) / ( pow( alpha-1.0, 2.0 ) * ( alpha-2.0 ) );
}


// EXPORTS //

module.exports = variance;
