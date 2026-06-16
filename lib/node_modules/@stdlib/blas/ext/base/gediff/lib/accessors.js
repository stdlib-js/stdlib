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

// MAIN //

/**
* Calculates the differences between consecutive elements of a strided array.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} out - output array object
* @param {Collection} out.data - output array data
* @param {Array<Function>} out.accessors - array element accessors
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 2.0, 4.0, 7.0, 11.0, 16.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0 ];
*
* base( x.length, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( out ) ), 1, 0 );
* // out => [ 2.0, 3.0, 4.0, 5.0 ]
*/
function base( N, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var xbuf;
	var obuf;
	var oset;
	var xget;
	var prev;
	var curr;
	var ix;
	var io;
	var i;

	xbuf = x.data;
	obuf = out.data;
	xget = x.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	ix = offsetX;
	io = offsetOut;
	prev = xget( xbuf, ix );
	for ( i = 1; i < N; i++ ) {
		ix += strideX;
		curr = xget( xbuf, ix );
		oset( obuf, io, curr - prev );
		prev = curr;
		io += strideOut;
	}
	return out;
}


// EXPORTS //

module.exports = base;
