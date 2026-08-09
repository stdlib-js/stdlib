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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );


// MAIN //

/**
* Replicates each element in a double-precision complex floating-point strided array a specified number of times using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {PositiveInteger} k - number of times to replicate each element
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Complex128Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Complex128Array} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Complex128Array( 6 );
*
* zreplicate( 3, 2, x, 1, 0, out, 1, 0 );
* // out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 5.0, 6.0, 5.0, 6.0 ]
*/
function zreplicate( N, k, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var viewX;
	var viewO;
	var re;
	var im;
	var ix;
	var io;
	var i;
	var j;

	if ( N <= 0 || k <= 0 ) {
		return out;
	}
	viewX = reinterpret( x, 0 );
	viewO = reinterpret( out, 0 );
	ix = offsetX * 2;
	io = offsetOut * 2;
	strideX *= 2;
	strideOut *= 2;
	for ( i = 0; i < N; i++ ) {
		re = viewX[ ix ];
		im = viewX[ ix+1 ];
		for ( j = 0; j < k; j++ ) {
			viewO[ io ] = re;
			viewO[ io+1 ] = im;
			io += strideOut;
		}
		ix += strideX;
	}
	return out;
}


// EXPORTS //

module.exports = zreplicate;
