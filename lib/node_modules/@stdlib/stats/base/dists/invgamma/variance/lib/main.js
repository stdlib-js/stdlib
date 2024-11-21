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

var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Returns the variance of an inverse gamma distribution.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - rate parameter
* @returns {PositiveNumber} variance
*
* @example
* var v = variance( 3.0, 5.0 );
* // returns ~6.25
*
* @example
* var v = variance( 4.0, 12.0 );
* // returns 8.0
*
* @example
* var v = variance( 8.0, 2.0 );
* // returns ~0.014
*
* @example
* var v = variance( 3.0, -0.1 );
* // returns NaN
*
* @example
* var v = variance( 1.5, 1.0 );
* // returns NaN
*
* @example
* var v = variance( 3.0, NaN );
* // returns NaN
*
* @example
* var v = variance( NaN, 2.0 );
* // returns NaN
*/
function variance( alpha, beta ) {
	if ( alpha <= 2.0 || beta <= 0.0 ) {
		return NaN;
	}
	return ( beta*beta ) / ( pow( alpha-1.0, 2.0 ) * ( alpha-2.0 ) );
}


// EXPORTS //

module.exports = variance;
