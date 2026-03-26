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
* The original C code and copyright notice are from the [PFFFT library]{@link https://github.com/marton78/pffft/blob/0b4ee12c4ba45a4a8e567550c16d96d1679f50ce/src/fftpack.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (c) 2004 the University Corporation for Atmospheric
* Research ("UCAR"). All rights reserved. Developed by NCAR's
* Computational and Information Systems Laboratory, UCAR,
* www.cisl.ucar.edu.
*
* Redistribution and use of the Software in source and binary forms,
* with or without modification, is permitted provided that the
* following conditions are met:
*
*     - Neither the names of NCAR's Computational and Information Systems
*       Laboratory, the University Corporation for Atmospheric Research,
*       nor the names of its sponsors or contributors may be used to
*       endorse or promote products derived from this Software without
*       specific prior written permission.
*
*     - Redistributions of source code must retain the above copyright
*       notices, this list of conditions, and the disclaimer below.
*
*     - Redistributions in binary form must reproduce the above copyright
*       notice, this list of conditions, and the disclaimer below in the
*       documentation and/or other materials provided with the
*       distribution.
*
* THIS SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE CONTRIBUTORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES OR OTHER LIABILITY, WHETHER IN AN
* ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS WITH THE
* SOFTWARE.
* ```
*/

'use strict';

// MODULES //

var floor = require( '@stdlib/math/base/special/floor' );


// MAIN //

/**
* Factorizes a sequence length into a product of integers.
*
* ## Notes
*
* -   Factorization results are stored in the output array as follows:
*
*     ```text
*     [ sequence_length | number_of_factors | integer_factors | unused_storage ]
*     ```
*
* @param {NonNegativeInteger} N - length of the sequence
* @param {NonNegativeInteger} M - number of trial divisors
* @param {Collection} initial - strided array of initial trial divisors
* @param {integer} si - stride length for `initial`
* @param {NonNegativeInteger} oi - starting index for `initial`
* @param {Collection} out - output array for storing factorization results
* @param {integer} so - stride length for `out`
* @param {NonNegativeInteger} oo - starting index for `out`
* @returns {NonNegativeInteger} number of factors into which `N` was decomposed
*
* @example
* var N = 630;
* var initial = [ 3, 4, 2, 5 ]; // as found in FFTPACK
* var factors = [ 0, 0, 0, 0, 0, 0, 0 ];
*
* var numFactors = decompose( N, 4, initial, 1, 0, factors, 1, 0 );
* // returns 5
*
* var f = factors.slice();
* // returns [ 630, 5, 2, 3, 3, 5, 7 ]
*
* @example
* var N = 8;
* var initial = [ 3, 4, 2, 5 ]; // as found in FFTPACK
* var factors = [ 0, 0, 0, 0 ];
*
* var numFactors = decompose( N, 4, initial, 1, 0, factors, 1, 0 );
* // returns 2
*
* var f = factors.slice();
* // returns [ 8, 2, 2, 4 ]
*/
function decompose( N, M, initial, si, oi, out, so, oo ) {
	var divisor;
	var ntrials;
	var nl;
	var nf;
	var nq;
	var nr;
	var ib;
	var i;
	var j;

	if ( N === 0 ) {
		out[ oo ] = N;
		out[ oo+so ] = 0;
		return 0;
	}

	// Resolve the number of trial divisors:
	ntrials = M;

	// Initialize a variable for storing a trial divisor:
	divisor = 0;

	// Initialize a variable for storing a sub-sequence length:
	nl = N;

	// Initialize a variable for keeping track of the number of factors into which `N` decomposes:
	nf = 0;

	j = 0;
	do {
		if ( j < ntrials ) {
			divisor = initial[ oi + (j * si) ];
		} else {
			divisor += 2;
		}
		j += 1;
		while ( true ) {
			// Compute the integer quotient:
			nq = floor( nl / divisor );

			// Compute the remainder:
			nr = nl - ( divisor * nq );

			// If the divisor did not evenly divide the current sub-sequence length, try a new divisor...
			if ( nr !== 0 ) {
				break;
			}
			// We found a new factor:
			nf += 1;

			// Update the sub-sequence length:
			nl = nq;

			// Store the factor in the output array:
			out[ oo+((nf+1)*so) ] = divisor;

			// When the divisor is `2` and we've already found other factors, shift the other factors right to make room for the most recent `2` factor...
			if ( divisor === 2 && nf !== 1 ) {
				for ( i = 2; i <= nf; i++ ) {
					ib = nf - i + 2;
					out[ oo+((ib+1)*so) ] = out[ oo + (ib*so) ];
				}
				out[ oo+(2*so) ] = 2;
			}
			// If we cannot further divide the sequence length into smaller sub-sequences, we're done...
			if ( nl === 1 ) {
				break;
			}
		}
	} while ( nl !== 1 );

	// Store the sequence length:
	out[ oo ] = N;

	// Store the number of factors:
	out[ oo+so ] = nf;

	// Return the number of factors:
	return nf;
}


// EXPORTS //

module.exports = decompose;
