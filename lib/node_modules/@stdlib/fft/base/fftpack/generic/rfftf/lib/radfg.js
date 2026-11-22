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

/* eslint-disable max-len, max-statements, max-lines-per-function */

'use strict';

// MODULES //

var TWO_PI = require( '@stdlib/constants/float64/two-pi' );
var cos = require( '@stdlib/math/base/special/cos' );
var sin = require( '@stdlib/math/base/special/sin' );
var floor = require( '@stdlib/math/base/special/floor' );


// FUNCTIONS //

/**
* Resolves an index into the input array.
*
* ## Notes
*
* In a forward real FFT, the previous stage writes its results as `R` "rows" per sub-sequence.
*
* Thus, when reading from an input array stored in linear memory, we can reinterpret the array as a three-dimensional logical view containing `L` independent sub-sequences having `R` "rows" (components 0, 1, 2, ..., R-1) and where each "row" is arranged as `M*L` contiguous elements corresponding to interleaved real and imaginary components.
*
* Accordingly, the following is a logical view of an input array (zero-based indexing) which contains `L = 3` transforms and in which each sub-sequence has length `M = 4`:
*
* ```text
*       │           k = 0                        k = 1                        k = 2
*       │ ─────────────────────────────────────────────────────────────────────────────────────→ k
* j = 0 │  cc(0,0,0) ... cc(3,0,0)      cc(0,1,0) ... cc(3,1,0)      cc(0,2,0) ... cc(3,2,0)
*       │
* j = 1 │  cc(0,0,1) ... cc(3,0,1)      cc(0,1,1) ... cc(3,1,1)      cc(0,2,1) ... cc(3,2,1)
*       │
* j = 2 │  cc(0,0,2) ... cc(3,0,2)      cc(0,1,2) ... cc(3,1,2)      cc(0,2,2) ... cc(3,2,2)
*       │
* j = 3 │  cc(0,0,3) ... cc(3,0,3)      cc(0,1,3) ... cc(3,1,3)      cc(0,2,3) ... cc(3,2,3)
*       │
*  ...  │           ...                      ...                      ...
*       │
* j=R-1 │  cc(0,0,R-1) ... cc(3,0,R-1)  cc(0,1,R-1) ... cc(3,1,R-1)  cc(0,2,R-1) ... cc(3,2,R-1)
*       └──────────────────────────────────────────────────────────────────────────────────────→ i
*              ↑             ↑              ↑             ↑              ↑             ↑
*            i = 0          M-1             0            M-1             0            M-1
* ```
*
* In the above,
*
* -   `i` is the fastest varying index, which walks within one short sub-sequence corresponding to one of the R component rows.
* -   `j` selects between the R component rows (0, 1, 2, ..., R-1).
* -   `k` specifies the index of one of the `L` independent transforms we are processing.
*
* In linear memory, the three-dimensional logical view is arranged as follows:
*
* ```text
* | cc(0,0,0)...cc(3,0,0) ... cc(0,2,0)...cc(3,2,0) | cc(0,0,1)...cc(3,0,1) ... cc(0,2,1)...cc(3,2,1) | ... | cc(0,0,R-1)...cc(3,0,R-1) ... cc(0,2,R-1)...cc(3,2,R-1) |
*       ↑           ↑             ↑           ↑           ↑           ↑             ↑           ↑                 ↑           ↑                 ↑               ↑
*       0          M-1           LM         LM-1       (L+1)M     (L+1)M-1       (2L-1)M      2LM-1           (R-1)LM    ((R-1)L+1)M-1       (RL-1)M          RLM-1
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
* idx = iptr( M-1, L-1, 6, L, M, stride, offset );
* // returns 83
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
* When writing to an output array stored in linear memory, we can reinterpret the array as a three-dimensional logical view containing `L` independent sub-sequences having `R` "columns" corresponding to the `R` components of a radix-R stage (with real and imaginary parts of each component interleaved along each sub-sequence) and where each "column" has `M` elements.
*
* Accordingly, the following is a logical view of an output array (zero-based indexing) which contains `L = 3` transforms and in which each "column" sub-sequence has length `M = 4` for an arbitrary radix `R`:
*
* ```text
*                 j = 0 (component 0)                     j = 1 (component 1)                    j = 2 (component 2)                                ...                                  j = R-1 (component R-1)
* k = 0 ─┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────────────┐
*        │ out(0,0,0)  out(1,0,0) ... out(3,0,0) │ out(0,1,0)  out(1,1,0) ... out(3,1,0) │ out(0,2,0)  out(1,2,0) ... out(3,2,0) │                  ...                  │ out(0,R-1,0)  out(1,R-1,0) ... out(3,R-1,0)   │
*        └───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────────────┤
* k = 1 ─┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────────────┤
*        │ out(0,0,1)  out(1,0,1) ... out(3,0,1) │ out(0,1,1)  out(1,1,1) ... out(3,1,1) │ out(0,2,1)  out(1,2,1) ... out(3,2,1) │                  ...                  │ out(0,R-1,1)  out(1,R-1,1) ... out(3,R-1,1)   │
*        └───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────────────┤
* k = 2 ─┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────┬───────────────────────────────────────────────┤
*        │ out(0,0,2)  out(1,0,2) ... out(3,0,2) │ out(0,1,2)  out(1,1,2) ... out(3,1,2) │ out(0,2,2)  out(1,2,2) ... out(3,2,2) │                  ...                  │ out(0,R-1,2)  out(1,R-1,2) ... out(3,R-1,2)   │
*        └───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────┴───────────────────────────────────────────────┘
*              ↑           ↑              ↑            ↑           ↑              ↑            ↑           ↑              ↑                                                        ↑             ↑                ↑
*            i = 0         1             M-1           0           1             M-1           0           1             M-1                                                       0             1               M-1
* ```
*
* In the above,
*
* -   `i` is the fastest varying index, which walks within one short "column" sub-sequence.
* -   `j` selects which of the R components we are in (0, 1, 2, ..., R-1).
* -   `k` specifies the index of one of the `L` independent transforms we are processing.
*
* In linear memory, the three-dimensional logical view is arranged as follows:
*
* ```text
* | out(0,0,0)...out(3,0,0) | out(0,1,0)...out(3,1,0) | out(0,2,0)...out(3,2,0) | ... | out(0,R-1,0)...out(3,R-1,0) | out(0,0,1)...out(3,0,1) | ... | out(0,R-1,2)...out(3,R-1,2) |
*       ↑            ↑            ↑            ↑            ↑            ↑                   ↑              ↑             ↑            ↑                   ↑              ↑
*       0           M-1           M          2M-1          2M          3M-1               (R-1)M          RM-1           RM         (R+1)M-1            (RL-1)M         RLM-1
* ```
*
* As may be observed, when resolving an index in the output array, the `j` and `k` dimensions are swapped relative index resolution in the input array. This stems from `radfg` being only one stage in a multi-stage driver which alternates between using `cc` and `out` as workspace buffers. After each stage, the next stage reads what the previous stage wrote.
*
* Each stage expects a transpose, and, in order to avoid explicit transposition between the stages, we swap the last two logical dimensions while still maintaining cache locality within the inner loop logical dimension, as indexed by `i`.
*
* @private
* @param {NonNegativeInteger} i - index of an element within a sub-sequence
* @param {NonNegativeInteger} j - index specifying which of the R complex components we are in (0, 1, ..., R-1)
* @param {NonNegativeInteger} k - index of the sub-sequence being transformed
* @param {NonNegativeInteger} R - radix
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
* var idx = optr( 0, 0, 0, 7, M, stride, offset );
* // returns 0
*
* idx = optr( 1, 0, 0, 7, M, stride, offset );
* // returns 1
*
* idx = optr( M-1, 0, 0, 7, M, stride, offset );
* // returns 3
*
* idx = optr( 0, 1, 0, 7, M, stride, offset );
* // returns 4
*
* // ...
*
* idx = optr( M-1, 6, L-1, 7, M, stride, offset );
* // returns 83
*/
function optr( i, j, k, R, M, stride, offset ) {
	var n = i + ( ( j+(k*R) ) * M );
	return ( n*stride ) + offset;
}

/**
* Resolves an index into a flattened workspace array.
*
* ## Notes
*
* During the general radix stage, flattened workspace arrays store `ML = M * L` elements for each of the `R` component columns. Both the flattened input and output workspace arrays share the same `[ML, R]` logical layout.
*
* Thus, when accessing a flattened workspace array stored in linear memory, we can reinterpret the array as a two-dimensional logical view having `R` component columns, where each column has `ML` elements.
*
* Accordingly, the following is a logical view of a flattened workspace array (zero-based indexing) having flattened dimension `ML` and arbitrary radix `R`:
*
* ```text
*           │   j = 0          j = 1          j = 2          ...         j = R-1
*           │ ────────────────────────────────────────────────────────────────────────→ j
* ik = 0    │  ws(0,0)        ws(0,1)        ws(0,2)         ...        ws(0,R-1)
*           │
* ik = 1    │  ws(1,0)        ws(1,1)        ws(1,2)         ...        ws(1,R-1)
*           │
* ik = 2    │  ws(2,0)        ws(2,1)        ws(2,2)         ...        ws(2,R-1)
*           │
* ik = 3    │  ws(3,0)        ws(3,1)        ws(3,2)         ...        ws(3,R-1)
*           │
*  ...      │    ...            ...            ...           ...            ...
*           │
* ik = ML-1 │  ws(ML-1,0)     ws(ML-1,1)     ws(ML-1,2)      ...       ws(ML-1,R-1)
* ```
*
* In the above,
*
* -   `ik` is the fastest varying index, which walks along the flattened sub-sequence dimension.
* -   `j` selects between the `R` workspace component columns (0, 1, 2, ..., R-1).
*
* In linear memory, the two-dimensional logical view is arranged as follows:
*
* ```text
* | ws(0,0)...ws(ML-1,0) | ws(0,1)...ws(ML-1,1) | ws(0,2)...ws(ML-1,2) | ... | ws(0,R-1)...ws(ML-1,R-1) |
*      ↑           ↑          ↑           ↑          ↑          ↑                  ↑            ↑
*      0          ML-1        ML        2ML-1       2ML       3ML-1             (R-1)ML       RML-1
* ```
*
* Here, the original `M` and `L` dimensions have been collapsed into the single flattened `ik` dimension. Each workspace component `j` therefore occupies one contiguous block of `ML` elements in linear memory.
*
* @private
* @param {NonNegativeInteger} ik - index of an element within a flattened sub-sequence
* @param {NonNegativeInteger} j - index specifying which of the R workspace component columns we are in (0, 1, ..., R-1)
* @param {NonNegativeInteger} ML - flattened sub-sequence length
* @param {integer} stride - stride length of the flattened workspace array
* @param {NonNegativeInteger} offset - index specifying the first indexed element in the flattened workspace array
* @returns {NonNegativeInteger} computed index
*
* @example
* var stride = 1;
* var offset = 0;
*
* var M = 4; // sub-sequence length
* var L = 3; // number of sub-sequences
* var ML = M * L; // flattened dimension ( 4*3 = 12 )
*
* var idx = fptr( 0, 0, ML, stride, offset );
* // returns 0
*
* idx = fptr( 1, 0, ML, stride, offset );
* // returns 1
*
* idx = fptr( ML-1, 0, ML, stride, offset );
* // returns 11
*
* idx = fptr( 0, 1, ML, stride, offset );
* // returns 12
*
* // ...
*
* idx = fptr( ML-1, 6, ML, stride, offset );
* // returns 83
*/
function fptr( ik, j, ML, stride, offset ) {
	var n = ik + ( j*ML );
	return ( n*stride ) + offset;
}


// MAIN //

/**
* Performs one general radix stage within a forward Fourier transform for a real-valued sequence.
*
* @private
* @param {NonNegativeInteger} M - number of elements in each sub-sequence to be transformed
* @param {NonNegativeInteger} R - radix of the transform
* @param {NonNegativeInteger} L - number of sub-sequences to be transformed
* @param {NonNegativeInteger} ML - number of elements in each flattened sub-sequence (`M*L`)
* @param {Collection} cc - input array containing the sub-sequences to be transformed
* @param {integer} sc - stride length for `cc`
* @param {NonNegativeInteger} oc - index offset for `cc`
* @param {Collection} c1 - input workspace array containing intermediate sub-sequences to be transformed
* @param {integer} sc1 - stride length for `c1`
* @param {NonNegativeInteger} oc1 - index offset for `c1`
* @param {Collection} c2 - flattened input workspace array containing intermediate sub-sequences
* @param {integer} sc2 - stride length for `c2`
* @param {NonNegativeInteger} oc2 - index offset for `c2`
* @param {Collection} ch - output array containing transformed sequences
* @param {integer} sch - stride length for `ch`
* @param {NonNegativeInteger} och - index offset for `ch`
* @param {Collection} ch2 - flattened output workspace array containing intermediate sub-sequences
* @param {integer} sch2 - stride length for `ch2`
* @param {NonNegativeInteger} och2 - index offset for `ch2`
* @param {Collection} twiddles - array of twiddle factors
* @param {integer} stw - stride length for `twiddles`
* @param {NonNegativeInteger} otw - index offset for `twiddles`
* @returns {void}
*/
function radfg( M, R, L, ML, cc, sc, oc, c1, sc1, oc1, c2, sc2, oc2, ch, sch, och, ch2, sch2, och2, twiddles, stw, otw ) { // eslint-disable-line max-params
	var ar1h;
	var ar2h;
	var idij;
	var ic2o;
	var ic1o;
	var ich;
	var icc;
	var Rph;
	var Rp1;
	var ih1;
	var ih2;
	var ih3;
	var ih4;
	var ic1;
	var ic2;
	var ic3;
	var ic4;
	var it1;
	var it2;
	var io1;
	var io2;
	var io3;
	var io4;
	var dc2;
	var ai1;
	var ai2;
	var ar1;
	var ar2;
	var ds2;
	var nbd;
	var dcp;
	var dsp;
	var im;
	var ik;
	var is;
	var jc;
	var lc;
	var j2;
	var i;
	var j;
	var k;
	var l;

	// Compute the basic rotation angle for the radix-R DFT matrix:
	dcp = cos( TWO_PI / R ); // cos(2π/R)
	dsp = sin( TWO_PI / R ); // sin(2π/R)

	// Compute half the radix, rounded up, which is used as the exclusive upper bound for conjugate-symmetric component loops:
	Rph = floor( ( R + 1 ) / 2 );
	Rp1 = R + 1;

	// Compute the number of non-DC complex harmonics in each sub-sequence:
	nbd = floor( ( M - 1 ) / 2 );

	/*
	* First, initialize the work arrays for the general-radix butterfly.
	*
	* At this stage, each sub-sequence has already been split into `R` radix components. The `j = 0` component is carried in the flattened work arrays, while the remaining components `j = 1, ..., R-1` are carried in the three-dimensional work arrays.
	*
	* For harmonic `n = 0`, we only copy the DC terms.
	*
	* For harmonics `n = 1, ..., floor((M-1)/2)`, each nonzero radix component is multiplied by its stage twiddle factor and stored in `ch`.
	*/
	if ( M === 1 ) {
		// Copy the DC column from the flattened output workspace back to the flattened input workspace...
		for ( ik = 0; ik < ML; ik++ ) {
			ic2o = fptr( ik, 0, ML, sc2, oc2 );
			ich = fptr( ik, 0, ML, sch2, och2 );
			c2[ ic2o ] = ch2[ ich ];
		}
	} else {
		// Copy the DC column into the flattened output workspace...
		for ( ik = 0; ik < ML; ik++ ) {
			ich = fptr( ik, 0, ML, sch2, och2 );
			ic2o = fptr( ik, 0, ML, sc2, oc2 );
			ch2[ ich ] = c2[ ic2o ];
		}

		// Copy the DC terms for the remaining radix components...
		for ( j = 1; j < R; j++ ) {
			for ( k = 0; k < L; k++ ) {
				ih1 = optr( 0, k, j, L, M, sch, och );
				ic1 = iptr( 0, k, j, L, M, sc1, oc1 );
				ch[ ih1 ] = c1[ ic1 ];
			}
		}

		// Apply twiddle factors to the non-DC harmonics of the remaining radix components...
		if ( nbd <= L ) {
			// Loop over harmonics before sub-sequences...
			is = 0;
			for ( j = 1; j < R; j++ ) {
				idij = is;
				for ( i = 2; i < M; i += 2 ) {
					for ( k = 0; k < L; k++ ) {
						// Resolve output indices in ch:
						ih1 = optr( i-1, k, j, L, M, sch, och ); // real part
						ih2 = optr( i, k, j, L, M, sch, och );   // imaginary part

						// Resolve indices in the input workspace:
						ic1 = iptr( i-1, k, j, L, M, sc1, oc1 ); // real part
						ic2 = iptr( i, k, j, L, M, sc1, oc1 );   // imaginary part

						// Resolve twiddle factor indices:
						it1 = ( idij * stw ) + otw;     // cos(θ)
						it2 = ( (idij+1) * stw ) + otw; // sin(θ)

						// Apply the twiddle factor:
						ch[ ih1 ] = ( twiddles[ it1 ] * c1[ ic1 ] ) + ( twiddles[ it2 ] * c1[ ic2 ] ); // Re(ch)
						ch[ ih2 ] = ( twiddles[ it1 ] * c1[ ic2 ] ) - ( twiddles[ it2 ] * c1[ ic1 ] ); // Im(ch)
					}
					idij += 2;
				}
				is += M;
			}
		} else {
			// Loop over sub-sequences before harmonics...
			is = 0;
			for ( j = 1; j < R; j++ ) {
				for ( k = 0; k < L; k++ ) {
					idij = is;
					for ( i = 2; i < M; i += 2 ) {
						// Resolve output indices in ch:
						ih1 = optr( i-1, k, j, L, M, sch, och ); // real part
						ih2 = optr( i, k, j, L, M, sch, och );   // imaginary part

						// Resolve indices in the input workspace:
						ic1 = iptr( i-1, k, j, L, M, sc1, oc1 ); // real part
						ic2 = iptr( i, k, j, L, M, sc1, oc1 );   // imaginary part

						// Resolve twiddle factor indices:
						it1 = ( idij * stw ) + otw;     // cos(θ)
						it2 = ( (idij+1) * stw ) + otw; // sin(θ)

						// Apply the twiddle factor:
						ch[ ih1 ] = ( twiddles[ it1 ] * c1[ ic1 ] ) + ( twiddles[ it2 ] * c1[ ic2 ] ); // Re(ch)
						ch[ ih2 ] = ( twiddles[ it1 ] * c1[ ic2 ] ) - ( twiddles[ it2 ] * c1[ ic1 ] ); // Im(ch)

						idij += 2;
					}
				}
				is += M;
			}
		}

		/*
		* Next, combine mirrored radix components, storing their sums and differences in c1.
		*/
		if ( nbd >= L ) {
			// Loop over sub-sequences before harmonics...
			for ( j = 1; j < Rph; j++ ) {
				jc = Rp1 - j - 1; // "mirror" index
				for ( k = 0; k < L; k++ ) {
					for ( i = 2; i < M; i += 2 ) {
						// Resolve ch indices for component j:
						ih1 = optr( i-1, k, j, L, M, sch, och ); // Re(ch[j])
						ih2 = optr( i, k, j, L, M, sch, och );   // Im(ch[j])

						// Resolve ch indices for conjugate component jc:
						ih3 = optr( i-1, k, jc, L, M, sch, och ); // Re(ch[jc])
						ih4 = optr( i, k, jc, L, M, sch, och );   // Im(ch[jc])

						// Resolve input-workspace indices for component j:
						ic1 = iptr( i-1, k, j, L, M, sc1, oc1 ); // Re(component j)
						ic2 = iptr( i, k, j, L, M, sc1, oc1 );   // Im(component j)

						// Resolve input-workspace indices for component jc:
						ic3 = iptr( i-1, k, jc, L, M, sc1, oc1 ); // Re(component jc)
						ic4 = iptr( i, k, jc, L, M, sc1, oc1 );   // Im(component jc)

						// Form the sum and difference combinations:
						c1[ ic1 ] = ch[ ih1 ] + ch[ ih3 ]; // Re(j) + Re(jc)
						c1[ ic3 ] = ch[ ih2 ] - ch[ ih4 ]; // Im(j) - Im(jc)
						c1[ ic2 ] = ch[ ih2 ] + ch[ ih4 ]; // Im(j) + Im(jc)
						c1[ ic4 ] = ch[ ih3 ] - ch[ ih1 ]; // Re(jc) - Re(j)
					}
				}
			}
		} else {
			// Loop over harmonics before sub-sequences...
			for ( j = 1; j < Rph; j++ ) {
				jc = Rp1 - j - 1; // "mirror" index
				for ( i = 2; i < M; i += 2 ) {
					for ( k = 0; k < L; k++ ) {
						// Resolve ch indices for component j:
						ih1 = optr( i-1, k, j, L, M, sch, och ); // Re(ch[j])
						ih2 = optr( i, k, j, L, M, sch, och );   // Im(ch[j])

						// Resolve ch indices for conjugate component jc:
						ih3 = optr( i-1, k, jc, L, M, sch, och ); // Re(ch[jc])
						ih4 = optr( i, k, jc, L, M, sch, och );   // Im(ch[jc])

						// Resolve input-workspace indices for component j:
						ic1 = iptr( i-1, k, j, L, M, sc1, oc1 ); // Re(component j)
						ic2 = iptr( i, k, j, L, M, sc1, oc1 );   // Im(component j)

						// Resolve input-workspace indices for component jc:
						ic3 = iptr( i-1, k, jc, L, M, sc1, oc1 ); // Re(component jc)
						ic4 = iptr( i, k, jc, L, M, sc1, oc1 );   // Im(component jc)

						// Form the sum and difference combinations:
						c1[ ic1 ] = ch[ ih1 ] + ch[ ih3 ]; // Re(j) + Re(jc)
						c1[ ic3 ] = ch[ ih2 ] - ch[ ih4 ]; // Im(j) - Im(jc)
						c1[ ic2 ] = ch[ ih2 ] + ch[ ih4 ]; // Im(j) + Im(jc)
						c1[ ic4 ] = ch[ ih3 ] - ch[ ih1 ]; // Re(jc) - Re(j)
					}
				}
			}
		}
	}

	// Combine the DC terms for each conjugate-symmetric component pair...
	for ( j = 1; j < Rph; j++ ) {
		jc = Rp1 - j - 1; // "mirror" index
		for ( k = 0; k < L; k++ ) {
			ih1 = optr( 0, k, j, L, M, sch, och );
			ih2 = optr( 0, k, jc, L, M, sch, och );

			ic1 = iptr( 0, k, j, L, M, sc1, oc1 );
			ic2 = iptr( 0, k, jc, L, M, sc1, oc1 );

			c1[ ic1 ] = ch[ ih1 ] + ch[ ih2 ];
			c1[ ic2 ] = ch[ ih2 ] - ch[ ih1 ];
		}
	}

	/*
	* Next, apply the radix-`R` DFT matrix.
	*
	* For each mirrored output pair, accumulate the contributions of the radix components in the flattened work array.
	*
	* The required rotation factors are generated recursively from the previous ones:
	*
	*     W_l = W_{l-1} ⋅ W_1
	*     W_{lj} = W_{l(j-1)} ⋅ W_l
	*
	* Here, `W_1` is the basic radix-`R` rotation, `W_{l-1}` and `W_l` are the previous and current outer factors, and `W_{l(j-1)}` and `W_{lj}` are the previous and current inner factors.
	*/
	ar1 = 1.0; // Re(W_0)
	ai1 = 0.0; // Im(W_0)
	for ( l = 1; l < Rph; l++ ) {
		lc = Rp1 - l - 1; // "mirror" index

		// Advance the rotation factor by one step: W_l = W_{l-1} ⋅ W_1
		ar1h = ( dcp * ar1 ) - ( dsp * ai1 ); // Re(W_l)
		ai1 = ( dcp * ai1 ) + ( dsp * ar1 );  // Im(W_l)
		ar1 = ar1h;

		// Accumulate the contributions from components 1 and R-1:
		for ( ik = 0; ik < ML; ik++ ) {
			ich = fptr( ik, l, ML, sch2, och2 );
			ic1o = fptr( ik, lc, ML, sch2, och2 );

			ic2o = fptr( ik, 0, ML, sc2, oc2 );
			ic1 = fptr( ik, 1, ML, sc2, oc2 );
			ic2 = fptr( ik, R-1, ML, sc2, oc2 );

			ch2[ ich ] = c2[ ic2o ] + ( ar1 * c2[ ic1 ] );
			ch2[ ic1o ] = ai1 * c2[ ic2 ];
		}

		// Save W_l for the inner recurrence:
		dc2 = ar1;
		ds2 = ai1;

		// Initialize W_{l·1}:
		ar2 = ar1;
		ai2 = ai1;

		// Accumulate the remaining component pairs:
		for ( j = 2; j < Rph; j++ ) {
			jc = Rp1 - j - 1; // "mirror" index

			// Advance the nested rotation factor by one step: W_{l*j} = W_{l*(j-1)} ⋅ W_l
			ar2h = ( dc2 * ar2 ) - ( ds2 * ai2 ); // Re(W_{l*j})
			ai2 = ( dc2 * ai2 ) + ( ds2 * ar2 );  // Im(W_{l*j})
			ar2 = ar2h;

			// Accumulate the contributions from components j and jc:
			for ( ik = 0; ik < ML; ik++ ) {
				ich = fptr( ik, l, ML, sch2, och2 );
				ic1o = fptr( ik, lc, ML, sch2, och2 );

				ic1 = fptr( ik, j, ML, sc2, oc2 );
				ic2 = fptr( ik, jc, ML, sc2, oc2 );

				ch2[ ich ] += ar2 * c2[ ic1 ];
				ch2[ ic1o ] += ai2 * c2[ ic2 ];
			}
		}
	}

	// Accumulate the nonzero radix components into the DC output...
	for ( j = 1; j < Rph; j++ ) {
		for ( ik = 0; ik < ML; ik++ ) {
			ich = fptr( ik, 0, ML, sch2, och2 );
			ic1 = fptr( ik, j, ML, sc2, oc2 );
			ch2[ ich ] += c2[ ic1 ];
		}
	}

	// Copy the first output column from ch to cc...
	if ( M >= L ) {
		for ( k = 0; k < L; k++ ) {
			for ( i = 0; i < M; i++ ) {
				icc = optr( i, 0, k, R, M, sc, oc );
				ih1 = optr( i, k, 0, L, M, sch, och );
				cc[ icc ] = ch[ ih1 ];
			}
		}
	} else {
		for ( i = 0; i < M; i++ ) {
			for ( k = 0; k < L; k++ ) {
				icc = optr( i, 0, k, R, M, sc, oc );
				ih1 = optr( i, k, 0, L, M, sch, och );
				cc[ icc ] = ch[ ih1 ];
			}
		}
	}

	/*
	* `cc` is stored in output order, where the component index comes before the sub-sequence index. Accordingly, writes to `cc` use `optr`, not `iptr`.
	*/
	// Store DC harmonics for conjugate pairs in the output array...
	for ( j = 1; j < Rph; j++ ) {
		jc = Rp1 - j - 1; // "mirror" index
		j2 = 2 * j;       // output column index
		for ( k = 0; k < L; k++ ) {
			io1 = optr( M-1, j2-1, k, R, M, sc, oc );
			io2 = optr( 0, j2, k, R, M, sc, oc );

			ih1 = optr( 0, k, j, L, M, sch, och );
			ih2 = optr( 0, k, jc, L, M, sch, och );

			cc[ io1 ] = ch[ ih1 ];
			cc[ io2 ] = ch[ ih2 ];
		}
	}

	// When M = 1, there are no non-DC harmonics to process, so we're done...
	if ( M === 1 ) {
		return;
	}

	/*
	* Finally, store the non-DC harmonics in folded format.
	*
	* For each mirror pair, write the non-DC harmonics from `ch` to the two output columns as the required sum and difference combinations.
	*/
	if ( nbd >= L ) {
		// Loop over sub-sequences before harmonics...
		for ( j = 1; j < Rph; j++ ) {
			jc = Rp1 - j - 1; // "mirror" index
			j2 = 2 * j;       // output column index
			for ( k = 0; k < L; k++ ) {
				for ( i = 2; i < M; i += 2 ) {
					im = M - i; // "mirror" harmonic index

					// Resolve ch indices for component j:
					ih1 = optr( i-1, k, j, L, M, sch, och ); // Re(ch[j])
					ih2 = optr( i, k, j, L, M, sch, och );   // Im(ch[j])

					// Resolve ch indices for conjugate component jc:
					ih3 = optr( i-1, k, jc, L, M, sch, och ); // Re(ch[jc])
					ih4 = optr( i, k, jc, L, M, sch, och );   // Im(ch[jc])

					// Resolve cc output indices:
					io1 = optr( i-1, j2, k, R, M, sc, oc );
					io2 = optr( im-1, j2-1, k, R, M, sc, oc );
					io3 = optr( i, j2, k, R, M, sc, oc );
					io4 = optr( im, j2-1, k, R, M, sc, oc );

					// Store the sum and difference combinations:
					cc[ io1 ] = ch[ ih1 ] + ch[ ih3 ];
					cc[ io2 ] = ch[ ih1 ] - ch[ ih3 ];
					cc[ io3 ] = ch[ ih2 ] + ch[ ih4 ];
					cc[ io4 ] = ch[ ih4 ] - ch[ ih2 ];
				}
			}
		}
	} else {
		// Loop over harmonics before sub-sequences...
		for ( j = 1; j < Rph; j++ ) {
			jc = Rp1 - j - 1; // "mirror" index
			j2 = 2 * j;       // output column index
			for ( i = 2; i < M; i += 2 ) {
				im = M - i; // "mirror" harmonic index
				for ( k = 0; k < L; k++ ) {
					// Resolve ch indices for component j:
					ih1 = optr( i-1, k, j, L, M, sch, och ); // Re(ch[j])
					ih2 = optr( i, k, j, L, M, sch, och );   // Im(ch[j])

					// Resolve ch indices for conjugate component jc:
					ih3 = optr( i-1, k, jc, L, M, sch, och ); // Re(ch[jc])
					ih4 = optr( i, k, jc, L, M, sch, och );   // Im(ch[jc])

					// Resolve cc output indices:
					io1 = optr( i-1, j2, k, R, M, sc, oc );
					io2 = optr( im-1, j2-1, k, R, M, sc, oc );
					io3 = optr( i, j2, k, R, M, sc, oc );
					io4 = optr( im, j2-1, k, R, M, sc, oc );

					// Store the sum and difference combinations:
					cc[ io1 ] = ch[ ih1 ] + ch[ ih3 ];
					cc[ io2 ] = ch[ ih1 ] - ch[ ih3 ];
					cc[ io3 ] = ch[ ih2 ] + ch[ ih4 ];
					cc[ io4 ] = ch[ ih4 ] - ch[ ih2 ];
				}
			}
		}
	}
}


// EXPORTS //

module.exports = radfg;
