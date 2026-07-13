/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var Float64Array = require( '@stdlib/array/float64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the incomplete beta function and its first derivative.
*
* @private
* @param {Probability} x - function input
* @param {NonNegativeNumber} a - function parameter
* @param {NonNegativeNumber} b - function parameter
* @param {boolean} regularized - boolean indicating if the function should evaluate the regularized incomplete beta function
* @param {boolean} upper - boolean indicating if the function should return the upper tail of the incomplete beta function instead
* @returns {Float64Array} function value and first derivative
*
* @example
* var out = kernelBetainc( 0.5, 2.0, 2.0, false, false );
* // returns <Float64Array>[ ~0.083, ~1.5 ]
*
* @example
* var out = kernelBetainc( 0.2, 1.0, 2.0, true, false );
* // returns <Float64Array>[ 0.36, 1.6 ]
*/
function kernelBetainc( x, a, b, regularized, upper ) {
	var out = new Float64Array( 2 );
	addon( x, a, b, regularized, upper, out );
	return out;
}


// EXPORTS //

module.exports = kernelBetainc;
