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

/* eslint-disable max-len, max-statements */

'use strict';

// VARIABLES //

// cos( 2π/5 ):
var TR11 = 0.309016994374947;

// sin( 2π/5 ):
var TI11 = 0.951056516295154;

// cos( 4π/5 ):
var TR12 = -0.809016994374947;

// sin( 4π/5 ):
var TI12 = 0.587785252292473;


// FUNCTIONS //

/**
* Resolves an index into the input array.
*
* ## Notes
*
* In a forward real FFT, the previous stage writes its results as five "rows" per sub-sequence.
*
* Thus, when reading from an input array stored in linear memory, we can reinterpret the array as a three-dimensional logical view containing `L` independent sub-sequences having five "rows" (components 0, 1, 2, 3, and 4) and where each "row" is arranged as `M*L` contiguous elements corresponding to interleaved real and imaginary components.
*
* Accordingly, the following is a logical view of an input array (zero-based indexing) which contains `L = 3` transforms and in which each sub-sequence has length `M = 4`:
*
* ```text
*       │           k = 0                    k = 1                    k = 2
*       │ ──────────────────────────────────────────────────────────────────────────→ k
* j = 0 │  cc(0,0,0) ... cc(3,0,0)  cc(0,1,0) ... cc(3,1,0)  cc(0,2,0) ... cc(3,2,0)
*       │
* j = 1 │  cc(0,0,1) ... cc(3,0,1)  cc(0,1,1) ... cc(3,1,1)  cc(0,2,1) ... cc(3,2,1)
*       │
* j = 2 │  cc(0,0,2) ... cc(3,0,2)  cc(0,1,2) ... cc(3,1,2)  cc(0,2,2) ... cc(3,2,2)
*       │
* j = 3 │  cc(0,0,3) ... cc(3,0,3)  cc(0,1,3) ... cc(3,1,3)  cc(0,2,3) ... cc(3,2,3)
*       │
* j = 4 │  cc(0,0,4) ... cc(3,0,4)  cc(0,1,4) ... cc(3,1,4)  cc(0,2,4) ... cc(3,2,4)
*       └───────────────────────────────────────────────────────────────────────────→ i
*              ↑             ↑          ↑             ↑          ↑             ↑
*            i = 0          M-1         0            M-1         0            M-1
* ```
*
* In the above,
*
* -   `i` is the fastest varying index, which walks within one short sub-sequence corresponding to one of the five component rows.
* -   `j` selects between the five component rows (0, 1, 2, 3, or 4).
* -   `k` specifies the index of one of the `L` independent transforms we are processing.
*
* In linear memory, the three-dimensional logical view is arranged as follows:
*
* ```text
* | cc(0,0,0)...cc(3,0,0) ... cc(0,2,0)...cc(3,2,0) | cc(0,0,1)...cc(3,0,1) ... cc(0,2,1)...cc(3,2,1) | ... | cc(0,0,4)...cc(3,0,4) ... cc(0,2,4)...cc(3,2,4) |
*       ↑           ↑             ↑           ↑           ↑           ↑             ↑           ↑                 ↑           ↑             ↑           ↑
*       0          M-1           LM         LM-1       (L+1)M     (L+1)M-1       (2L-1)M      2LM-1              4LM      (4L+1)M-1       (5L-1)M      5LM-1
* ```
*
* @private
* @param {NonNegativeInteger} i - index of an element within a sub-sequence
* @param {NonNegativeInteger} k - index of the sub-sequence being transformed
* @param {NonNegativeInteger} j - input row
* @param {NonNegativeInteger} L - number of sub-sequences
* @param {NonNegativeInteger} M - sub-sequence length
* @param {integer} stride - stride length of the input array
* @param {NonNegativeInteger} offset - index specifying the first indexed element in the input array
* @returns {NonNegativeInteger} computed index
*
* @example
* var stride = 1;
* var offset = 0;
*
* var M = 4; // sub-sequence length
* var L = 3; // number of sub-sequences
*
* var idx = iptr( 0, 0, 0, L, M, stride, offset );
* // returns 0
*
* idx = iptr( 1, 0, 0, L, M, stride, offset );
* // returns 1
*
* idx = iptr( M-1, 0, 0, L, M, stride, offset );
* // returns 3
*
* idx = iptr( 0, 1, 0, L, M, stride, offset );
* // returns 4
*
* // ...
*
* idx = iptr( M-1, L-1, 1, L, M, stride, offset );
* // returns 23
*/
function iptr( i, k, j, L, M, stride, offset ) {
	var n = i + ( ( k+(j*L) ) * M );
	return ( n*stride ) + offset;
}

/**
* Resolves an index into the output array.
*
* ## Notes
*
* When writing to an output array stored in linear memory, we can reinterpret the array as a three-dimensional logical view containing `L` independent sub-sequences having five "columns" corresponding to the five components of a radix-5 stage (with real and imaginary parts of each component interleaved along each sub-sequence) and where each "column" has `M` elements.
*
* Accordingly, the following is a logical view of an output array (zero-based indexing) which contains `L = 3` transforms and in which each "column" sub-sequence has length `M = 4`:
*
* ```text
*                 j = 0 (component 0)                     j = 1 (component 1)                    j = 2 (component 2)                    j = 3 (component 3)                    j = 4 (component 4)
* k = 0 ─┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┐
*        │ out(0,0,0)  out(1,0,0) ... out(3,0,0) │ out(0,1,0)  out(1,1,0) ... out(3,1,0) │ out(0,2,0)  out(1,2,0) ... out(3,2,0) │ out(0,3,0)  out(1,3,0) ... out(3,3,0) │ out(0,4,0)  out(1,4,0) ... out(3,4,0) │
*        └───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┤
* k = 1 ─┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┤
*        │ out(0,0,1)  out(1,0,1) ... out(3,0,1) │ out(0,1,1)  out(1,1,1) ... out(3,1,1) │ out(0,2,1)  out(1,2,1) ... out(3,2,1) │ out(0,3,1)  out(1,3,1) ... out(3,3,1) │ out(0,4,1)  out(1,4,1) ... out(3,4,1) │
*        └───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┤
* k = 2 ─┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┤
*        │ out(0,0,2)  out(1,0,2) ... out(3,0,2) │ out(0,1,2)  out(1,1,2) ... out(3,1,2) │ out(0,2,2)  out(1,2,2) ... out(3,2,2) │ out(0,3,2)  out(1,3,2) ... out(3,3,2) │ out(0,4,2)  out(1,4,2) ... out(3,4,2) │
*        └───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┘
*              ↑           ↑              ↑            ↑           ↑              ↑            ↑           ↑              ↑            ↑           ↑              ↑            ↑           ↑              ↑
*            i = 0         1             M-1           0           1             M-1           0           1             M-1           0           1             M-1           0           1             M-1
* ```
*
* In the above,
*
* -   `i` is the fastest varying index, which walks within one short "column" sub-sequence.
* -   `j` selects which of the five components (0, 1, 2, 3, or 4).
* -   `k` specifies the index of one of the `L` independent transforms we are processing.
*
* In linear memory, the three-dimensional logical view is arranged as follows:
*
* ```text
* | out(0,0,0)...out(3,0,0) | out(0,1,0)...out(3,1,0) | out(0,2,0)...out(3,2,0) | out(0,3,0)...out(3,3,0) | out(0,4,0)...out(3,4,0) | out(0,0,1)...out(3,0,1) | ... | out(0,4,2)...out(3,4,2) |
*       ↑            ↑            ↑            ↑            ↑            ↑            ↑            ↑            ↑            ↑            ↑            ↑                  ↑            ↑
*       0           M-1           M          2M-1          2M          3M-1          3M         4M-1          4M          5M-1          5M          6M-1              (5L-1)M       5LM-1
* ```
*
* As may be observed, when resolving an index in the output array, the `j` and `k` dimensions are swapped relative index resolution in the input array. This stems from `radf5` being only one stage in a multi-stage driver which alternates between using `cc` and `out` as workspace buffers. After each stage, the next stage reads what the previous stage wrote.
*
* Each stage expects a transpose, and, in order to avoid explicit transposition between the stages, we swap the last two logical dimensions while still maintaining cache locality within the inner loop logical dimension, as indexed by `i`.
*
* @private
* @param {NonNegativeInteger} i - index of an element within a sub-sequence
* @param {NonNegativeInteger} j - index specifying which of the five complex components we are in (0, 1, 2, 3, or 4)
* @param {NonNegativeInteger} k - index of the sub-sequence being transformed
* @param {NonNegativeInteger} M - sub-sequence length
* @param {integer} stride - stride length of the output array
* @param {NonNegativeInteger} offset - index specifying the first indexed element in the output array
* @returns {NonNegativeInteger} computed index
*
* @example
* var stride = 1;
* var offset = 0;
*
* var M = 4; // sub-sequence length
* var L = 3; // number of sub-sequences
*
* var idx = optr( 0, 0, 0, M, stride, offset );
* // returns 0
*
* idx = optr( 1, 0, 0, M, stride, offset );
* // returns 1
*
* idx = optr( M-1, 0, 0, M, stride, offset );
* // returns 3
*
* idx = optr( 0, 1, 0, M, stride, offset );
* // returns 4
*
* // ...
*
* idx = optr( M-1, 4, L-1, M, stride, offset );
* // returns 59
*/
function optr( i, j, k, M, stride, offset ) {
	var n = i + ( ( j+(k*5) ) * M );
	return ( n*stride ) + offset;
}


// MAIN //

/**
* Performs one radix-5 stage within a forward Fourier transform for a real-valued sequence.
*
* @private
* @param {NonNegativeInteger} M - number of elements in each sub-sequence to be transformed
* @param {NonNegativeInteger} L - number of sub-sequences to be transformed
* @param {Collection} cc - input array containing the sub-sequences to be transformed
* @param {integer} sc - stride length for `cc`
* @param {NonNegativeInteger} oc - index offset for `cc`
* @param {Collection} out - output array containing transformed sub-sequences
* @param {integer} so - stride length for `out`
* @param {NonNegativeInteger} oo - index offset for `out`
* @param {Collection} twiddles1 - first array containing twiddle factors
* @param {integer} st1 - stride length for `twiddles1`
* @param {NonNegativeInteger} ot1 - index offset for `twiddles1`
* @param {Collection} twiddles2 - second array containing twiddle factors
* @param {integer} st2 - stride length for `twiddles2`
* @param {NonNegativeInteger} ot2 - index offset for `twiddles2`
* @param {Collection} twiddles3 - third array containing twiddle factors
* @param {integer} st3 - stride length for `twiddles3`
* @param {NonNegativeInteger} ot3 - index offset for `twiddles3`
* @param {Collection} twiddles4 - fourth array containing twiddle factors
* @param {integer} st4 - stride length for `twiddles4`
* @param {NonNegativeInteger} ot4 - index offset for `twiddles4`
* @returns {void}
*/
function radf5( M, L, cc, sc, oc, out, so, oo, twiddles1, st1, ot1, twiddles2, st2, ot2, twiddles3, st3, ot3, twiddles4, st4, ot4 ) { // eslint-disable-line max-params
	var it11;
	var it12;
	var it21;
	var it22;
	var it31;
	var it32;
	var it41;
	var it42;
	var ci2;
	var ci3;
	var ci4;
	var ci5;
	var cr2;
	var cr3;
	var cr4;
	var cr5;
	var dr2;
	var dr3;
	var dr4;
	var dr5;
	var di2;
	var di3;
	var di4;
	var di5;
	var ti2;
	var ti3;
	var ti4;
	var ti5;
	var tr2;
	var tr3;
	var tr4;
	var tr5;
	var ip1;
	var ip2;
	var ip3;
	var ip4;
	var ip5;
	var io;
	var im;
	var i;
	var k;

	/*
	* First, perform the core butterfly for each sub-sequence being transformed.
	*
	* In the following loop, we handle harmonic `n = 0` for every transform. As described for `iptr`, the input array is interpreted as a three-dimensional array, containing five "rows" per sub-sequence.
	*
	*     row0 = input component 0    (j = 0)
	*     row1 = input component 1    (j = 1)
	*     row2 = input component 2    (j = 2)
	*     row3 = input component 3    (j = 3)
	*     row4 = input component 4    (j = 4)
	*
	* For a radix-5 forward FFT of a real-valued signal `x` and `n = 0`,
	*
	*     cr2 = row4 + row1
	*     ci5 = row4 - row1
	*     cr3 = row3 + row2
	*     ci4 = row3 - row2
	*
	*     x[0]   = row0 + cr2 + cr3
	*     x[M]   = row0 + ( TR11*cr2 ) + ( TR12*cr3 )
	*     x[2M]  = ( TI11*ci5 ) + ( TI12*ci4 )
	*     x[3M]  = row0 + ( TR12*cr2 ) + ( TR11*cr3 )
	*     x[4M]  = ( TI12*ci5 ) - ( TI11*ci4 )
	*
	* Because `W_5^0 = 1`, no frequency-dependent twiddle multiplication is necessary beyond these constant factors.
	*/
	for ( k = 0; k < L; k++ ) {
		ip1 = iptr( 0, k, 0, L, M, sc, oc ); // row 0
		ip2 = iptr( 0, k, 1, L, M, sc, oc ); // row 1
		ip3 = iptr( 0, k, 2, L, M, sc, oc ); // row 2
		ip4 = iptr( 0, k, 3, L, M, sc, oc ); // row 3
		ip5 = iptr( 0, k, 4, L, M, sc, oc ); // row 4

		cr2 = cc[ ip5 ] + cc[ ip2 ]; // row4 + row1
		ci5 = cc[ ip5 ] - cc[ ip2 ]; // row4 - row1
		cr3 = cc[ ip4 ] + cc[ ip3 ]; // row3 + row2
		ci4 = cc[ ip4 ] - cc[ ip3 ]; // row3 - row2

		io = optr( 0, 0, k, M, so, oo );
		out[ io ] = cc[ ip1 ] + cr2 + cr3;

		io = optr( M-1, 1, k, M, so, oo );
		out[ io ] = cc[ ip1 ] + ( TR11 * cr2 ) + ( TR12 * cr3 );

		io = optr( 0, 2, k, M, so, oo );
		out[ io ] = ( TI11 * ci5 ) + ( TI12 * ci4 );

		io = optr( M-1, 3, k, M, so, oo );
		out[ io ] = cc[ ip1 ] + ( TR12 * cr2 ) + ( TR11 * cr3 );

		io = optr( 0, 4, k, M, so, oo );
		out[ io ] = ( TI12 * ci5 ) - ( TI11 * ci4 );
	}
	// When the number of elements in a sub-sequence is less than `2`, there is nothing more to do, as the above butterfly produced the full result...
	if ( M < 2 ) {
		return;
	}
	/*
	* Next, apply the general case where we need to loop through the non-trivial harmonics.
	*
	* For each harmonic `n = 1, ..., M/2-1`, we need to
	*
	* -   recover five spectra from the five input rows.
	* -   apply radix-5 twiddle factors to rows 1, 2, 3, and 4, then combine with row 0 to form five output columns.
	* -   form the following
	*
	*         x[5n]   = X₀ + (W₁⋅X₁ + W₄⋅X₄) + (W₂⋅X₂ + W₃⋅X₃)                                                                     => column 0
	*         x[5n+1] = X₀ + TR11⋅(W₁⋅X₁ + W₄⋅X₄) + TR12⋅(W₂⋅X₂ + W₃⋅X₃) - i⋅(TI11⋅(W₁⋅X₁ - W₄⋅X₄) + TI12⋅(W₂⋅X₂ - W₃⋅X₃))         => column 1
	*         x[5n+2] = X₀ + TR11⋅(W₁⋅X₁ + W₄⋅X₄) + TR12⋅(W₂⋅X₂ + W₃⋅X₃) + i⋅(TI11⋅(W₁⋅X₁ - W₄⋅X₄) + TI12⋅(W₂⋅X₂ - W₃⋅X₃))         => column 2
	*         x[5n+3] = X₀ + TR12⋅(W₁⋅X₁ + W₄⋅X₄) + TR11⋅(W₂⋅X₂ + W₃⋅X₃) - i⋅(TI12⋅(W₁⋅X₁ - W₄⋅X₄) - TI11⋅(W₂⋅X₂ - W₃⋅X₃))         => column 3
	*         x[5n+4] = X₀ + TR12⋅(W₁⋅X₁ + W₄⋅X₄) + TR11⋅(W₂⋅X₂ + W₃⋅X₃) + i⋅(TI12⋅(W₁⋅X₁ - W₄⋅X₄) - TI11⋅(W₂⋅X₂ - W₃⋅X₃))         => column 4
	*
	* The mirror index `im = M - i` selects the conjugate-symmetric partner, thus allowing the routine to read each symmetry pair only once.
	*/
	// Loop over each sub-sequence to be transformed...
	for ( k = 0; k < L; k++ ) {
		// Loop over the elements in each sub-sequence...
		for ( i = 2; i < M; i += 2 ) {
			im = M - i; // "mirror" index

			// Resolve twiddle factor indices for component 1:
			it11 = ( (i-2)*st1 ) + ot1; // cos(θ) for component 1
			it12 = ( (i-1)*st1 ) + ot1; // sin(θ) for component 1

			// Resolve twiddle factor indices for component 2:
			it21 = ( (i-2)*st2 ) + ot2; // cos(θ) for component 2
			it22 = ( (i-1)*st2 ) + ot2; // sin(θ) for component 2

			// Resolve twiddle factor indices for component 3:
			it31 = ( (i-2)*st3 ) + ot3; // cos(θ) for component 3
			it32 = ( (i-1)*st3 ) + ot3; // sin(θ) for component 3

			// Resolve twiddle factor indices for component 4:
			it41 = ( (i-2)*st4 ) + ot4; // cos(θ) for component 4
			it42 = ( (i-1)*st4 ) + ot4; // sin(θ) for component 4

			// Load component 1 data and apply twiddle...
			ip1 = iptr( i-1, k, 1, L, M, sc, oc ); // real part component 1
			ip2 = iptr( i, k, 1, L, M, sc, oc );   // imag part component 1

			// Apply the twiddle factors for component 1:
			dr2 = ( twiddles1[ it11 ] * cc[ ip1 ] ) + ( twiddles1[ it12 ] * cc[ ip2 ] ); // Re(dr2)
			di2 = ( twiddles1[ it11 ] * cc[ ip2 ] ) - ( twiddles1[ it12 ] * cc[ ip1 ] ); // Im(di2)

			// Load component 2 data and apply twiddle...
			ip1 = iptr( i-1, k, 2, L, M, sc, oc ); // real part component 2
			ip2 = iptr( i, k, 2, L, M, sc, oc );   // imag part component 2

			// Apply the twiddle factors for component 2:
			dr3 = ( twiddles2[ it21 ] * cc[ ip1 ] ) + ( twiddles2[ it22 ] * cc[ ip2 ] ); // Re(dr3)
			di3 = ( twiddles2[ it21 ] * cc[ ip2 ] ) - ( twiddles2[ it22 ] * cc[ ip1 ] ); // Im(di3)

			// Load component 3 data and apply twiddle...
			ip1 = iptr( i-1, k, 3, L, M, sc, oc ); // real part component 3
			ip2 = iptr( i, k, 3, L, M, sc, oc );   // imag part component 3

			// Apply the twiddle factors for component 3:
			dr4 = ( twiddles3[ it31 ] * cc[ ip1 ] ) + ( twiddles3[ it32 ] * cc[ ip2 ] ); // Re(dr4)
			di4 = ( twiddles3[ it31 ] * cc[ ip2 ] ) - ( twiddles3[ it32 ] * cc[ ip1 ] ); // Im(di4)

			// Load component 4 data and apply twiddle...
			ip1 = iptr( i-1, k, 4, L, M, sc, oc ); // real part component 4
			ip2 = iptr( i, k, 4, L, M, sc, oc );   // imag part component 4

			// Apply the twiddle factors for component 4:
			dr5 = ( twiddles4[ it41 ] * cc[ ip1 ] ) + ( twiddles4[ it42 ] * cc[ ip2 ] ); // Re(dr5)
			di5 = ( twiddles4[ it41 ] * cc[ ip2 ] ) - ( twiddles4[ it42 ] * cc[ ip1 ] ); // Im(di5)

			// Radix-5 butterfly intermediate computations (symmetric/antisymmetric combinations):
			cr2 = dr2 + dr5;
			ci5 = dr5 - dr2;
			cr5 = di2 - di5;
			ci2 = di5 + di2;
			cr3 = dr3 + dr4;
			ci4 = dr4 - dr3;
			cr4 = di3 - di4;
			ci3 = di3 + di4;

			// Output column 0 (real part):
			ip1 = iptr( i-1, k, 0, L, M, sc, oc );
			io = optr( i-1, 0, k, M, so, oo );
			out[ io ] = cc[ ip1 ] + cr2 + cr3;

			// Output column 0 (imag part):
			ip2 = iptr( i, k, 0, L, M, sc, oc );
			io = optr( i, 0, k, M, so, oo );
			out[ io ] = cc[ ip2 ] + ci2 + ci3;

			// Load component 0 data and compute intermediates...
			tr2 = cc[ ip1 ] + ( TR11 * cr2 ) + ( TR12 * cr3 );
			ti2 = cc[ ip2 ] + ( TR11 * ci2 ) + ( TR12 * ci3 );
			tr3 = cc[ ip1 ] + ( TR12 * cr2 ) + ( TR11 * cr3 );
			ti3 = cc[ ip2 ] + ( TR12 * ci2 ) + ( TR11 * ci3 );

			// Additional intermediates:
			tr5 = ( TI11 * cr5 ) + ( TI12 * cr4 );
			ti5 = ( TI11 * ci5 ) + ( TI12 * ci4 );
			tr4 = ( TI12 * cr5 ) - ( TI11 * cr4 );
			ti4 = ( TI12 * ci5 ) - ( TI11 * ci4 );

			// Output column 2 (real part):
			io = optr( i-1, 2, k, M, so, oo );
			out[ io ] = tr2 + tr5;

			// Output column 1 (real part):
			io = optr( im-1, 1, k, M, so, oo );
			out[ io ] = tr2 - tr5;

			// Output column 2 (imag part):
			io = optr( i, 2, k, M, so, oo );
			out[ io ] = ti2 + ti5;

			// Output column 1 (imag part):
			io = optr( im, 1, k, M, so, oo );
			out[ io ] = ti5 - ti2;

			// Output column 4 (real part):
			io = optr( i-1, 4, k, M, so, oo );
			out[ io ] = tr3 + tr4;

			// Output column 3 (real part):
			io = optr( im-1, 3, k, M, so, oo );
			out[ io ] = tr3 - tr4;

			// Output column 4 (imag part):
			io = optr( i, 4, k, M, so, oo );
			out[ io ] = ti3 + ti4;

			// Output column 3 (imag part):
			io = optr( im, 3, k, M, so, oo );
			out[ io ] = ti4 - ti3;
		}
	}
}


// EXPORTS //

module.exports = radf5;
