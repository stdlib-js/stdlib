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

/* eslint-disable max-len */

'use strict';

// MODULES //

var floor = require( '@stdlib/math/base/special/floor' );
var gcopy = require( '@stdlib/blas/base/gcopy' ).ndarray;
var radf2 = require( './radf2.js' );
var radf3 = require( './radf3.js' );
var radf4 = require( './radf4.js' );
var radf5 = require( './radf5.js' );
var radfg = require( './radfg.js' );


// MAIN //

/**
* Performs the forward Fourier transform.
*
* @private
* @param {NonNegativeInteger} N - length of the sequence to transform
* @param {Collection} c - input array containing the sequence to be transformed
* @param {integer} sc - stride length for `c`
* @param {NonNegativeInteger} oc - starting index for `c`
* @param {Collection} ch - working array for intermediate results
* @param {integer} sch - stride length for `ch`
* @param {NonNegativeInteger} och - starting index for `ch`
* @param {Collection} wa - workspace array for storing twiddle factors
* @param {integer} swa - stride length for `wa`
* @param {NonNegativeInteger} owa - starting index for `wa`
* @param {Collection} ifac - workspace array for storing factorization results
* @param {integer} si - stride length for `ifac`
* @param {NonNegativeInteger} oi - starting index for `ifac`
* @returns {void}
*/
function rfftf1( N, c, sc, oc, ch, sch, och, wa, swa, owa, ifac, si, oi ) { // eslint-disable-line max-params
	var factor;
	var idl1;
	var FLG;
	var ido;
	var ix4;
	var ix3;
	var ix2;
	var nf;
	var l2;
	var l1;
	var kh;
	var iw;
	var k1;

	// Resolve the number of factors:
	nf = ifac[ oi+si ];

	FLG = 1; // flag to track whether the latest stage output resides in `c` or `ch`
	l2 = N;

	// Initialize an index offset to the last element in each workspace:
	iw = N - 1;

	for ( k1 = 1; k1 <= nf; k1++ ) {
		kh = nf - k1;

		// Resolve the next factor:
		factor = ifac[ oi+((kh+2)*si) ];

		// Compute a sub-transform length:
		l1 = floor( l2 / factor );

		ido = floor( N / l2 );
		idl1 = ido * l1;

		// Adjust the index offset
		iw -= ( ( factor - 1 ) * ido );

		// Toggle the flag to swap the input and output work buffers for the next stage:
		FLG = 1 - FLG;

		switch ( factor ) {
		case 4:
			ix2 = iw + ido;
			ix3 = ix2 + ido;
			radf4( ido, l1, ( FLG ) ? ch : c, ( FLG ) ? sch : sc, ( FLG ) ? och : oc, ( FLG ) ? c : ch, ( FLG ) ? sc : sch, ( FLG ) ? oc : och, wa, swa, owa+(iw*swa), wa, swa, owa+(ix2*swa), wa, swa, owa+(ix3*swa) );
			break;
		case 2:
			radf2( ido, l1, ( FLG ) ? ch : c, ( FLG ) ? sch : sc, ( FLG ) ? och : oc, ( FLG ) ? c : ch, ( FLG ) ? sc : sch, ( FLG ) ? oc : och, wa, swa, owa+(iw*swa) );
			break;
		case 3:
			ix2 = iw + ido;
			radf3( ido, l1, ( FLG ) ? ch : c, ( FLG ) ? sch : sc, ( FLG ) ? och : oc, ( FLG ) ? c : ch, ( FLG ) ? sc : sch, ( FLG ) ? oc : och, wa, swa, owa+(iw*swa), wa, swa, owa+(ix2*swa) );
			break;
		case 5:
			ix2 = iw + ido;
			ix3 = ix2 + ido;
			ix4 = ix3 + ido;
			radf5( ido, l1, ( FLG ) ? ch : c, ( FLG ) ? sch : sc, ( FLG ) ? och : oc, ( FLG ) ? c : ch, ( FLG ) ? sc : sch, ( FLG ) ? oc : och, wa, swa, owa+(iw*swa), wa, swa, owa+(ix2*swa ), wa, swa, owa+(ix3*swa), wa, swa, owa+(ix4*swa) );
			break;
		default:
			if ( ido === 1 ) {
				FLG = 1 - FLG;
			}
			if ( FLG === 0 ) {
				radfg( ido, factor, l1, idl1, c, sc, oc, c, sc, oc, c, sc, oc, ch, sch, och, ch, sch, och, wa, swa, owa+(iw*swa) );
				FLG = 1;
			} else {
				radfg( ido, factor, l1, idl1, ch, sch, och, ch, sch, och, ch, sch, och, c, sc, oc, c, sc, oc, wa, swa, owa+(iw*swa) );
				FLG = 0;
			}
			break;
		}
		l2 = l1;
	}
	if ( FLG === 1 ) {
		return;
	}
	// Now that we've finished computing the transforms, copy over the final results to the input array...
	gcopy( N, ch, sch, och, c, sc, oc );
}


// EXPORTS //

module.exports = rfftf1;
