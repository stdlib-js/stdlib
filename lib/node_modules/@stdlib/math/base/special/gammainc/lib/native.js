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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the incomplete gamma function. The upper tail is calculated via the modified Lentz's method for computing continued fractions, the lower tail using a power expansion.
*
* @private
* @param {NonNegativeNumber} x - function parameter
* @param {PositiveNumber} a - function parameter
* @param {boolean} regularized - boolean indicating if the function should evaluate the regularized or non-regularized incomplete gamma functions
* @param {boolean} upper - boolean indicating if the function should return the upper tail of the incomplete gamma function
* @returns {number} function value
*
* @example
* var v = gammainc( 6.0, 2.0, true, false );
* // returns ~0.9826
*
* @example
* var v = gammainc( 1.0, 2.0, true, true );
* // returns ~0.7358
*
* @example
* var v = gammainc( 7.0, 5.0, true, false );
* // returns ~0.8270
*
* @example
* var v = gammainc( 7.0, 5.0, false, false );
* // returns ~19.8482
*
* @example
* var v = gammainc( NaN, 3.0, true, false );
* // returns NaN
*
* @example
* var v = gammainc( 1.0, NaN, true, false );
* // returns NaN
*/
function gammainc( x, a, regularized, upper ) {
	return addon( x, a, regularized, upper );
}


// EXPORTS //

module.exports = gammainc;
