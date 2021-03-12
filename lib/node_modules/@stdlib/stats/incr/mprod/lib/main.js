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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );
var frexp = require( '@stdlib/math/base/special/frexp' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );
var Float64Array = require( '@stdlib/array/float64' );


// FUNCTIONS //

/**
* Computes an updated product.
*
* @private
* @param {Array} workspace - workspace array
* @param {Object} acc - accumulated fractional and exponent parts
* @param {number} x - multiplicative factor
* @returns {number} product
*/
function product( workspace, acc, x ) {
	// Split the incoming value into a normalized fraction and exponent:
	frexp( workspace, x );

	// Update the accumulated fraction:
	acc.frac *= workspace[ 0 ];

	// Update the accumulated exponent:
	acc.exp += workspace[ 1 ];

	// Ensure fraction remains normalized to avoid overflow/underflow...
	if ( acc.frac > -0.5 && acc.frac < 0.5 ) {
		frexp( workspace, acc.frac );
		acc.frac = workspace[ 0 ];
		acc.exp += workspace[ 1 ];
	}
	return ldexp( acc.frac, acc.exp );
}


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving product.
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
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmprod( 3 );
*
* var p = accumulator();
* // returns null
*
* p = accumulator( 2.0 );
* // returns 2.0
*
* p = accumulator( -5.0 );
* // returns -10.0
*
* p = accumulator( 3.0 );
* // returns -30.0
*
* p = accumulator( 5.0 );
* // returns -75.0
*
* p = accumulator();
* // returns -75.0
*/
function incrmprod( W ) {
	var parts;
	var prod;
	var buf;
	var acc;
	var N;
	var i;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( 'invalid argument. Must provide a positive integer. Value: `' + W + '`.' );
	}
	buf = new Float64Array( W );
	i = -1;
	N = 0;

	// Initialize a workspace for `frexp`:
	parts = [ 0.0, 0 ];

	// Initial product is 1.0, which may be split into its fractional and exponent parts (0.5 x 2.0**1 = 1.0):
	prod = 1.0;
	acc = {};
	acc.frac = 0.5;
	acc.exp = 1.0;

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated prodct. If not provided a value, the accumulator function returns the current prodct.
	*
	* @private
	* @param {number} [x] - input value
	* @returns {(number|null)} product or null
	*/
	function accumulator( x ) {
		var k;
		var v;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return prod;
		}
		// Update the index for managing the circular buffer:
		i = (i+1) % W;

		// Case: incoming value is NaN, the accumulated value is automatically NaN...
		if ( isnan( x ) ) {
			N = W; // explicitly set to avoid `N < W` branch
			prod = NaN;
		}
		// Case: initial window...
		else if ( N < W ) {
			N += 1;
			prod = product( parts, acc, x );
		}
		// Case: outgoing value is a "special" value, and, thus, we need to compute the accumulated value...
		else if (
			buf[ i ] === 0.0 ||
			isnan( buf[ i ] ) ||
			isInfinite( buf[ i ] )
		) {
			N = 1;
			acc.frac = 0.5;
			acc.exp = 1.0;
			product( parts, acc, x );
			for ( k = 0; k < W; k++ ) {
				if ( k !== i ) {
					v = buf[ k ];
					if ( isnan( v ) ) {
						N = W; // explicitly set to avoid `N < W` branch
						prod = NaN;
						break; // product is automatically NaN, so no need to continue
					}
					N += 1;
					prod = product( parts, acc, v );
				}
			}
		}
		// Case: neither the current accumulated value nor the incoming value are NaN, so we need to update the accumulated value...
		else if ( isnan( prod ) === false ) {
			v = x / buf[ i ];
			prod = product( parts, acc, v );
		}
		// Case: the current accumulated value is NaN, so nothing to do until the buffer no longer contains NaN values...
		buf[ i ] = x;

		return prod;
	}
}


// EXPORTS //

module.exports = incrmprod;
