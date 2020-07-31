/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var isnan = require( '@stdlib/math/base/assert/is-nan' );


// MAIN //

/**
* Computes the range of a strided array according to a mask.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {NumericArray} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @returns {number} range
*
* @example
* var x = [ 1.0, -2.0, 4.0, 2.0 ];
* var mask = [ 0, 0, 1, 0 ];
*
* var v = mskrange( x.length, x, 1, mask, 1 );
* // returns 4.0
*/
function mskrange( N, x, strideX, mask, strideMask ) {
	var max;
	var min;
	var ix;
	var im;
	var v;
	var i;

	if ( N <= 0 ) {
		return NaN;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideMask < 0 ) {
		im = (1-N) * strideMask;
	} else {
		im = 0;
	}
	for ( i = 0; i < N; i++ ) {
		if ( mask[ im ] === 0 ) {
			break;
		}
		ix += strideX;
		im += strideMask;
	}
	if ( i === N ) {
		return NaN;
	}
	min = x[ ix ];
	if ( isnan( min ) ) {
		return min;
	}
	max = min;
	i += 1;
	for ( i; i < N; i++ ) {
		ix += strideX;
		im += strideMask;
		if ( mask[ im ] ) {
			continue;
		}
		v = x[ ix ];
		if ( isnan( v ) ) {
			return v;
		}
		if ( v < min ) {
			min = v;
		} else if ( v > max ) {
			max = v;
		}
	}
	return max - min;
}


// EXPORTS //

module.exports = mskrange;
