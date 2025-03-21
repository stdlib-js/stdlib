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

var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Returns the skewness of a beta distribution.
*
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {number} skewness
*
* @example
* var v = skewness( 1.0, 1.0 );
* // returns 0.0
*
* @example
* var v = skewness( 4.0, 12.0 );
* // returns ~0.529
*
* @example
* var v = skewness( 8.0, 2.0 );
* // returns ~-0.829
*
* @example
* var v = skewness( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = skewness( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = skewness( 2.0, NaN );
* // returns NaN
*
* @example
* var v = skewness( NaN, 2.0 );
* // returns NaN
*/
function skewness( alpha, beta ) {
	var out;
	var ab;
	if ( alpha <= 0.0 || beta <= 0.0 ) {
		return NaN;
	}
	ab = alpha + beta;
	out = 2.0 * ( beta-alpha ) * sqrt( ab + 1.0 );
	out /= ( ab + 2.0 ) * sqrt( alpha * beta );
	return out;
}


// EXPORTS //

module.exports = skewness;
