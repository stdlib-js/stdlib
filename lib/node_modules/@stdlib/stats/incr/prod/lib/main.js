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

var frexp = require( '@stdlib/math/base/special/frexp' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );


// VARIABLES //

// `frexp` workspace:
var PARTS = [ 0.0, 0 ]; // WARNING: not thread safe


// MAIN //

/**
* Returns an accumulator function which incrementally computes a product.
*
* ## Method
*
* To avoid overflow/underflow, we store the fractional and exponent parts of intermediate results separately. By keeping a normalized fraction, we prevent underflow/overflow of the fraction. Underflow of the exponent is impossible, as IEEE 754 floating-point exponents are integer values. Overflow of the exponent is possible, but highly unlikely. In the worst case, an intermediate exponent is greater than the minimum safe integer, and adding the exponent of an incoming value does not change the intermediate result. While incorrect, such behavior does not lead to exponent overflow.
*
* While intermediate results are largely immune to overflow and not subject to underflow, this does not mean that returned results will never be zero or infinite. In fact, zero (underflow) and infinite (overflow) results may be transient (i.e., infinity followed by a finite number).
*
*
* ## References
*
* -   Ueberhuber, Christoph W. 1997. _Numerical Computation 1: Methods, Software, and Analysis_. Springer-Verlag Berlin Heidelberg. doi:[10.1007/978-3-642-59118-1](https://doi.org/10.1007/978-3-642-59118-1).
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrprod();
*
* var prod = accumulator();
* // returns null
*
* prod = accumulator( 2.0 );
* // returns 2.0
*
* prod = accumulator( -5.0 );
* // returns -10.0
*
* prod = accumulator();
* // returns -10.0
*/
function incrprod() {
	var frac;
	var prod;
	var exp;

	// Initial product is 1.0, which may be split into its fractional and exponent parts (0.5 x 2.0**1 = 1.0):
	frac = 0.5;
	exp = 1.0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated product. If not provided a value, the accumulator function returns the current product.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {(number|null)} product or null
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return ( prod === void 0 ) ? null : prod;
		}
		// Split the incoming value into a normalized fraction and exponent:
		frexp( PARTS, x );

		// Update the accumulated fraction:
		frac *= PARTS[ 0 ];

		// Update the accumulated exponent:
		exp += PARTS[ 1 ];

		// Ensure fraction remains normalized to avoid overflow/underflow...
		if ( frac > -0.5 && frac < 0.5 ) {
			frexp( PARTS, frac );
			frac = PARTS[ 0 ];
			exp += PARTS[ 1 ];
		}
		prod = ldexp( frac, exp );
		return prod;
	}
}


// EXPORTS //

module.exports = incrprod;
