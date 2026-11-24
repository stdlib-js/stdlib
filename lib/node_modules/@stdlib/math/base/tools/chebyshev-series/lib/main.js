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
*
*
* ## Notice
*
* The original C code, long comment, copyright, and license are from [Cephes]{@link http://www.netlib.org/cephes}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright 1984, 1995, 2000 by Stephen L. Moshier
*
* Some software in this archive may be from the book _Methods and Programs for Mathematical Functions_ (Prentice-Hall or Simon & Schuster International, 1989) or from the Cephes Mathematical Library, a commercial product. In either event, it is copyrighted by the author. What you see here may be used freely but it comes with no support or guarantee.
*
* Stephen L. Moshier
* moshier@na-net.ornl.gov
* ```
*/

'use strict';

// MAIN //

/**
* Evaluates a Chebyshev series.
*
* ## Notes
*
* The function evaluates
*
* ```text
*        N-1
*         - '
*  y  =   >   c[i] T (x/2)
*         -         i
*        i=0
* ```
*
* of Chebyshev polynomials `Ti` at argument `x/2`.
*
* A few comments:
*
* -   Coefficients must be stored in reverse order (i.e., the zero order term is last in the array). Note `N` is the number of coefficients, not the order.
* -   If coefficients are for the interval `a` to `b`, `x` must have been transformed to `x` -> `2(2x - b - a)/(b-a)` before entering the routine. This maps `x` from `(a, b)` to `(-1, 1)`, over which the Chebyshev polynomials are defined.
* -   If the coefficients are for the inverted interval, in which `(a, b)` is mapped to `(1/b, 1/a)`, the transformation required is `x` -> `2(2ab/x - b - a)/(b-a)`. If `b` is infinity, this becomes `x` -> `4a/x - 1`.
*
* ### Performance
*
* -   Taking advantage of the recurrence properties of the Chebyshev polynomials, the routine requires one more addition per loop than evaluating a nested polynomial of the same degree.
*
* @param {number} x - evaluation point
* @param {NumericArray} c - series coefficients in descending degree order
* @returns {number} evaluated series
*
* @example
* var v = chebyshevSeries( 1.0, [ 1.0, 0.5 ] );
* // returns 0.75
*
* @example
* var v = chebyshevSeries( 0.0, [ 1.0, 0.5, 0.25 ] );
* // returns -0.875
*
* @example
* var v = chebyshevSeries( 0.0, [] );
* // returns 0.0
*/
function chebyshevSeries( x, c ) {
	var b0;
	var b1;
	var b2;
	var n;
	var i;

	n = c.length;
	if ( n === 0 ) {
		return 0.0;
	}
	if ( n === 1 ) {
		return 0.5 * c[ 0 ];
	}
	b0 = c[ 0 ];
	b1 = 0.0;
	for ( i = 1; i < n; i++ ) {
		b2 = b1;
		b1 = b0;
		b0 = ( x * b1 ) - b2 + c[ i ];
	}
	return 0.5 * ( b0 - b2 );
}


// EXPORTS //

module.exports = chebyshevSeries;
