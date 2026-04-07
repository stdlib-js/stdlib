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

/* eslint-disable max-params, max-len */

'use strict';

// MAIN //

/**
* Calculates the forward difference of a double-precision floating-point strided array.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {PositiveInteger} offsetX - starting index for `x`
* @param {PositiveInteger} N1 - number of indexed elements for `prepend`
* @param {Float64Array} prepend - prepend array
* @param {integer} strideP - stride length for `prepend`
* @param {PositiveInteger} offsetP - starting index for `prepend`
* @param {PositiveInteger} N2 - number of indexed elements for `append`
* @param {Float64Array} append - append array
* @param {integer} strideA - stride length for `append`
* @param {PositiveInteger} offsetA - starting index for `append`
* @param {Float64Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {PositiveInteger} offsetOut - starting index for `out`
* @returns {Float64Array} output array
*/
function base( N, x, strideX, offsetX, N1, prepend, strideP, offsetP, N2, append, strideA, offsetA, out, strideOut, offsetOut ) {
	var total;
	var prev;
	var curr;
	var ix;
	var io;
	var ip;
	var ia;
	var i;

	total = N + N1 + N2;
	if ( total <= 1 ) {
		return out;
	}
	// Compute forward differences:
	if ( N1 === 0 && N2 === 0 ) {
		ix = offsetX;
		io = offsetOut;
		prev = x[ ix ];
		for ( i = 1; i < N; i++ ) {
			ix += strideX;
			curr = x[ ix ];
			out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		}
		return out;
	}
	// Compute forward differences over the list of prepended values:
	if ( N1 > 0 ) {
		io = offsetOut;
		ip = offsetP;
		prev = prepend[ ip ];
		for ( i = 1; i < N1; i++ ) {
			ip += strideP;
			curr = prepend[ ip ];
			out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		}
		if ( N > 0 ) {
			curr = x[ offsetX ];
			out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		} else if ( N2 > 0 ) {
			curr = append[ offsetA ];
			out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		}
	} else if ( N > 0 ) {
		prev = x[ offsetX ];
		io = offsetOut;
	} else {
		prev = append[ offsetA ];
		io = offsetOut;
	}
	// Compute forward differences over the input array:
	if ( N > 0 ) {
		ix = offsetX;
		if ( N1 === 0 ) {
			prev = x[ ix ];
			ix += strideX;
			for ( i = 1; i < N; i++ ) {
				curr = x[ ix ];
				out[ io ] = curr - prev;
				prev = curr;
				io += strideOut;
				ix += strideX;
			}
		} else {
			ix += strideX;
			for ( i = 1; i < N; i++ ) {
				curr = x[ ix ];
				out[ io ] = curr - prev;
				prev = curr;
				io += strideOut;
				ix += strideX;
			}
		}
		if ( N2 > 0 ) {
			curr = append[ offsetA ];
			out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
		}
	}
	// Compute forward differences over the list of appended values:
	if ( N2 > 0 ) {
		ia = offsetA + strideA;
		for ( i = 1; i < N2; i++ ) {
			curr = append[ ia ];
			out[ io ] = curr - prev;
			prev = curr;
			io += strideOut;
			ia += strideA;
		}
	}
	return out;
}


// EXPORTS //

module.exports = base;
