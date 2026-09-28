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

var cffti1 = require( './cffti1.js' );


// MAIN //

/**
* Initializes a workspace array for performing a complex-valued Fourier transform.
*
* ## Notes
*
* The workspace array is divided into three sections:
*
* ```text
*           size = 2N                2N            2+ceil(log2(N)/2)
*                ↓                   ↓                  ↓
*     | scratch / workspace | twiddle factors | radix factor table |
*                ↑                   ↑                  ↑
* i = 0         ...         2N       ...      4N       ...
* ```
*
* where
*
* -   **scratch/workspace**: used as a scratch space when performing transforms. This section is not updated during initialization.
* -   **twiddle factors**: a table of reusable complex-exponential constants stored as cosine/sine pairs.
* -   **radix factor table**: a table containing the radix factorization of `N`.
*
* In general, a workspace array should have `4N + 34` indexed elements (as `log2(N)/2 ≤ 32` for all `2^64`). During initialization, only the sections for storing twiddle factors and the factorization of `N` are updated.
*
* > Note: FFTPACK only requires `4N+15`, but we increase that number here to accommodate larger workspace arrays, where `N` may exceed `2^30` indexed elements.
*
* The first two sections each contain `2N` elements, while the last section contains the sequence length, the number of integer factors, and, at most, `ceil(log2(N)/2)` integer radix factors.
*
* The factorization section is comprised as follows:
*
* ```text
* | sequence_length | number_of_factors | integer_factors |
* ```
*
* The sequence length and number of factors (`nf`) comprise a single element each. Only the first `nf` elements in the integer factors section are written to, with the rest being unused.
*
* As for twiddle factors, these are small, reusable complex-exponential constants that appear inside each "butterfly" stage of a Cooley–Tukey–style FFT. Every arithmetic step in an FFT multiplies one intermediate value by some
*
* ```tex
* W_N^k
* ```
*
* where `W_N^k` is an N-th root of unity. Formally, in a forward FFT,
*
* ```tex
* W_N^k = e^{-2\pi ik/N}
* ```
*
* In a backward FFT,
*
* ```tex
* W_N^k = e^{+2\pi ik/N}
* ```
*
* As may be observed, `W_N^k` for forward and backward FFTs is the same, except the sign of the exponent is flipped. As a consequence, both forward and backward FFT callers can reuse the same set of twiddle factors, with those performing a forward transform (e.g., `cfftf`) multiplying with `(cos,-sin)` and those performing a backward transform (e.g., `cfftb`) multiplying with `(cos,+sin)`.
*
* Because these constants only depend on the transform length `N` (and **not** on the input data), we can pre-compute and store them once, then "twiddle" them (i.e., reuse them with different indices) as we proceed through the factorization.
*
* > As a quick aside regarding the name "twiddle", early FFT papers (notably Gentleman & Sande, 1966) described how you "twiddle" one branch of each butterfly by a complex rotation before adding/subtracting. The coefficients themselves inherited the nickname "twiddle factors," and the term stuck.
*
* By reusing the workspace array when computing multiple transforms of the same length `N`, every subsequent `*f` (forward) or `*b` (backward) call can simply look up the pre-stored twiddle factors instead of recomputing sine and cosine on-the-fly.
*
* In short, twiddle factors are cached roots of unity that allow each stage of the algorithm to rotate data quickly and predictably.
*
* @param {NonNegativeInteger} N - length of the sequence to transform
* @param {Collection} workspace - workspace array
* @param {integer} strideW - stride length for `workspace`
* @param {NonNegativeInteger} offsetW - starting index for `workspace`
* @returns {Collection} workspace array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var N = 8;
* var workspace = new Float64Array( ( 4*N ) + 34 );
*
* var out = cffti( N, workspace, 1, 0 );
* // returns <Float64Array>
*
* var bool = ( out === workspace );
* // returns true
*
* var twiddleFactors = workspace.slice( 2*N, 4*N );
* // returns <Float64Array>[ 1, 0, ~0.707, ~0.707, ~0, 1, ~-0.707, ~0.707, 1, 0, 1, 0, 1, 0, ~0, -1 ]
*
* var factors = workspace.slice( 4*N, ( 4*N ) + 4 );
* // returns <Float64Array>[ 8, 2, 2, 4 ]
*/
function cffti( N, workspace, strideW, offsetW ) {
	var offsetT;
	var offsetF;

	// When a sub-sequence is a single data point, the FFT is the identity, so no initialization necessary...
	if ( N === 1 ) {
		return workspace;
	}
	// Resolve the starting indices for storing twiddle factors and factorization results:
	offsetT = offsetW + ( 2*N*strideW ); // index offset for twiddle factors
	offsetF = offsetT + ( 2*N*strideW ); // index offset for factorization results

	// Initialize a provided workspace array:
	cffti1( N, workspace, strideW, offsetT, workspace, strideW, offsetF );

	return workspace;
}


// EXPORTS //

module.exports = cffti;
