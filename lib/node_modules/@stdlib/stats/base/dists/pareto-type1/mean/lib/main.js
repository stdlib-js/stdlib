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

var PINF = require( '@stdlib/constants/float64/pinf' );


// MAIN //

/**
* Returns the expected value of a Pareto (Type I) distribution.
*
* @param {PositiveNumber} alpha - shape parameter
* @param {PositiveNumber} beta - scale parameter
* @returns {PositiveNumber} expected value
*
* @example
* var v = mean( 1.0, 1.0 );
* // returns Infinity
*
* @example
* var v = mean( 4.0, 12.0 );
* // returns 16.0
*
* @example
* var v = mean( 8.0, 2.0 );
* // returns ~2.286
*
* @example
* var v = mean( 1.0, -0.1 );
* // returns NaN
*
* @example
* var v = mean( -0.1, 1.0 );
* // returns NaN
*
* @example
* var v = mean( 2.0, NaN );
* // returns NaN
*
* @example
* var v = mean( NaN, 2.0 );
* // returns NaN
*/
function mean( alpha, beta ) {
	if ( alpha <= 0.0 || beta <= 0.0 ) {
		return NaN;
	}
	if ( alpha <= 1.0 ) {
		return PINF;
	}
	return ( alpha*beta ) / ( alpha-1.0 );
}


// EXPORTS //

module.exports = mean;
