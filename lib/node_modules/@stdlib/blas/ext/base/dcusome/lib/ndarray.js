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

'use strict';

// MODULES //

var reinterpretBoolean = require( '@stdlib/strided/base/reinterpret-boolean' );


// MAIN //

/**
* Cumulatively tests whether at least `k` elements in a double-precision floating-point strided array are truthy using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {integer} k - minimum number of truthy elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {BooleanArray} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {BooleanArray} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var BooleanArray = require( '@stdlib/array/bool' );
*
* var x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0, 1.0 ] );
* var out = new BooleanArray( 5 );
*
* dcusome( 5, 2, x, 1, 0, out, 1, 0 );
* // out => <BooleanArray>[ false, false, false, true, true ]
*/
function dcusome( N, k, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var obuf;
	var flg;
	var cnt;
	var ix;
	var io;
	var i;

	if ( N <= 0 ) {
		return out;
	}
	obuf = reinterpretBoolean( out, 0 );
	flg = false;
	cnt = k;
	ix = offsetX;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		if ( !flg && x[ ix ] ) {
			cnt -= 1;
			if ( cnt <= 0 ) {
				flg = true;
			}
		}
		obuf[ io ] = flg;
		ix += strideX;
		io += strideOut;
	}
	return out;
}


// EXPORTS //

module.exports = dcusome;
