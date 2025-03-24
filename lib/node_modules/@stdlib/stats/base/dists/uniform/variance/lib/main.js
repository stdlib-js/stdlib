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
* Returns the variance of a uniform distribution.
*
* @param {number} a - minimum support
* @param {number} b - maximum support
* @returns {PositiveNumber} variance
*
* @example
* var v = variance( 0.0, 1.0 );
* // returns ~0.083
*
* @example
* var v = variance( 4.0, 12.0 );
* // returns ~5.333
*
* @example
* var v = variance( -4.0, 4.0 );
* // returns ~5.333
*
* @example
* var v = variance( 1.0, -0.1 );
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
function variance( a, b ) {
	if ( a >= b ) {
		return NaN;
	}
	return (1.0/12.0) * pow( b-a, 2.0 );
}


// EXPORTS //

module.exports = variance;
