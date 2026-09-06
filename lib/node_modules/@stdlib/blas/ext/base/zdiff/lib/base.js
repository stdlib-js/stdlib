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
*/

/* eslint-disable max-params, max-len, max-statements */

'use strict';

// MODULES //

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );


// MAIN //

/**
* Calculates the forward difference of a double-precision complex floating-point strided array.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {NonNegativeInteger} N1 - number of indexed elements for `prepend`
* @param {Complex128Array} prepend - prepend array
* @param {integer} strideP - stride length for `prepend`
* @param {NonNegativeInteger} offsetP - starting index for `prepend`
* @param {NonNegativeInteger} N2 - number of indexed elements for `append`
* @param {Complex128Array} append - append array
* @param {integer} strideA - stride length for `append`
* @param {NonNegativeInteger} offsetA - starting index for `append`
* @param {Complex128Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Complex128Array} output array
*/
function base( N, x, strideX, offsetX, N1, prepend, strideP, offsetP, N2, append, strideA, offsetA, out, strideOut, offsetOut ) {
	var total;
	var rprev;
	var iprev;
	var rcurr;
	var icurr;
	var xv;
	var pv;
	var av;
	var ov;
	var sx;
	var sp;
	var sa;
	var so;
	var ix;
	var ip;
	var ia;
	var io;
	var i;

	total = N + N1 + N2;
	if ( total <= 1 ) {
		return out;
	}
	// Reinterpret the complex arrays as real-valued arrays of interleaved real and imaginary components:
	xv = reinterpret( x, 0 );
	pv = reinterpret( prepend, 0 );
	av = reinterpret( append, 0 );
	ov = reinterpret( out, 0 );

	// Adjust the strides and offsets according to the real-valued arrays:
	sx = strideX * 2;
	sp = strideP * 2;
	sa = strideA * 2;
	so = strideOut * 2;
	ix = offsetX * 2;
	ip = offsetP * 2;
	ia = offsetA * 2;
	io = offsetOut * 2;

	// Compute forward differences:
	if ( N1 === 0 && N2 === 0 ) {
		rprev = xv[ ix ];
		iprev = xv[ ix+1 ];
		for ( i = 1; i < N; i++ ) {
			ix += sx;
			rcurr = xv[ ix ];
			icurr = xv[ ix+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		}
		return out;
	}
	// Compute forward differences over the list of prepended values:
	if ( N1 > 0 ) {
		rprev = pv[ ip ];
		iprev = pv[ ip+1 ];
		for ( i = 1; i < N1; i++ ) {
			ip += sp;
			rcurr = pv[ ip ];
			icurr = pv[ ip+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		}
		if ( N > 0 ) {
			rcurr = xv[ ix ];
			icurr = xv[ ix+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		} else if ( N2 > 0 ) {
			rcurr = av[ ia ];
			icurr = av[ ia+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		}
	} else if ( N > 0 ) {
		rprev = xv[ ix ];
		iprev = xv[ ix+1 ];
	} else {
		rprev = av[ ia ];
		iprev = av[ ia+1 ];
	}
	// Compute forward differences over the input array:
	if ( N > 0 ) {
		ix += sx;
		for ( i = 1; i < N; i++ ) {
			rcurr = xv[ ix ];
			icurr = xv[ ix+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
			ix += sx;
		}
		if ( N2 > 0 ) {
			rcurr = av[ ia ];
			icurr = av[ ia+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
		}
	}
	// Compute forward differences over the list of appended values:
	if ( N2 > 0 ) {
		ia += sa;
		for ( i = 1; i < N2; i++ ) {
			rcurr = av[ ia ];
			icurr = av[ ia+1 ];
			ov[ io ] = rcurr - rprev;
			ov[ io+1 ] = icurr - iprev;
			rprev = rcurr;
			iprev = icurr;
			io += so;
			ia += sa;
		}
	}
	return out;
}


// EXPORTS //

module.exports = base;
