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

var base = require( './base.js' );


// MAIN //

/**
* Divides two double-precision complex floating-point numbers in real arithmetic.
*
* @param {number} a - real component of numerator
* @param {number} b - imaginary component of numerator
* @param {number} c - real component of denominator
* @param {number} d - imaginary component of denominator
* @param {Float64Array} P - array containing an element which is overwritten by the real part of the quotient
* @param {NonNegativeInteger} offsetP - index of the element in `P`
* @param {Float64Array} Q - array containing an element which is overwritten by the imaginary part of the quotient
* @param {NonNegativeInteger} offsetQ - index of the element in `Q`
* @returns {void}
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var P = new Float64Array( 1 );
* var Q = new Float64Array( 1 );
*
* dladiv( -13.0, -1.0, -2.0, 1.0, P, 0, Q, 0 );
* // P => <Float64Array>[ 5.0 ]
* // Q => <Float64Array>[ 3.0 ]
*/
function dladiv( a, b, c, d, P, offsetP, Q, offsetQ ) {
	return base( a, b, c, d, P, offsetP, Q, offsetQ );
}


// EXPORTS //

module.exports = dladiv;
