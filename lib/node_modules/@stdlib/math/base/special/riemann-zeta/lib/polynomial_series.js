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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_60_0/boost/math/special_functions/zeta.hpp}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var pow = require( '@stdlib/math/base/special/pow' );
var powm1 = require( '@stdlib/math/base/special/powm1' );


// VARIABLES //

// -ln(eps)/2 => -ln(2.220446049250313e-16)/2 = 18.021826694558577
var N = 18|0; // asm type annotation

// 2**N
var TWO_N = 262144|0; // asm type annotation
var NEG_TWO_N = -TWO_N;


// MAIN //

/**
* Evaluates the Riemann zeta function using a polynomial series.
*
* ## References
*
* -   P. Borwein. "An Efficient Algorithm for the Riemann Zeta Function". Canadian Mathematical Society, Conference Proceedings. See algorithm [3][p155].
*
* [p155]: http://www.cecm.sfu.ca/personal/pborwein/PAPERS/P155.pdf
*
* @private
* @param {number} s - input value
* @returns {number} function value
*
* @example
* var v = series( 3.0 );
* // returns ~1.202
*/
function series( s ) {
	var sign;
	var term;
	var sum;
	var tmp;
	var N2;
	var i;

	sum = 0.0;
	sign = 1;
	for ( i = 0; i < N; i++ ) {
		sum += sign * NEG_TWO_N / pow(i+1, s);
		sign *= -1; // flip the sign
	}
	tmp = 1.0;
	term = 1.0;
	N2 = 2 * N;
	for ( i = N; i <= N2-1; i++ ) {
		sum += sign * (tmp - TWO_N) / pow(i+1, s);
		sign *= -1; // flip the sign
		term *= N2 - i;
		term /= i - N + 1.0;
		tmp += term;
	}
	return sum / (TWO_N * powm1(2.0, 1.0-s));
}


// EXPORTS //

module.exports = series;
