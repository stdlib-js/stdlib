/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the multiplicative inverse of a single-precision floating-point number `x`.
*
* @param {number} x - input value
* @returns {number} multiplicative inverse
*
* @example
* var v = invf( -1.0 );
* // returns -1.0
*
* @example
* var v = invf( 2.0 );
* // returns 0.5
*
* @example
* var v = invf( 0.0 );
* // returns Infinity
*
* @example
* var v = invf( -0.0 );
* // returns -Infinity
*
* @example
* var v = invf( NaN );
* // returns NaN
*/
function invf( x ) {
	return float64ToFloat32( 1.0 / x );
}


// EXPORTS //

module.exports = invf;
