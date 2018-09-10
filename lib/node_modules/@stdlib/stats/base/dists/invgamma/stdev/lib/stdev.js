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
* Returns the standard deviation of an inverse gamma distribution.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - rate parameter
* @returns {PositiveNumber} standard deviation
*
* @example
* var v = stdev( 3.0, 5.0 );
* // returns ~2.5
*
* @example
* var v = stdev( 4.0, 12.0 );
* // returns ~2.828
*
* @example
* var v = stdev( 8.0, 2.0 );
* // returns ~0.117
*
* @example
* var v = stdev( 3.0, -0.1 );
* // returns NaN
*
* @example
* var v = stdev( 1.5, 1.0 );
* // returns NaN
*
* @example
* var v = stdev( 3.0, NaN );
* // returns NaN
*
* @example
* var v = stdev( NaN, 2.0 );
* // returns NaN
*/
function stdev( alpha, beta ) {
	if ( alpha <= 2.0 || beta <= 0.0 ) {
		return NaN;
	}
	return beta / ( ( alpha-1.0 ) * sqrt( alpha-2.0 ) );
}


// EXPORTS //

module.exports = stdev;
