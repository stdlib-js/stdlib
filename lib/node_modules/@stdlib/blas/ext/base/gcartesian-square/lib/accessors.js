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

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );


// MAIN //

/**
* Computes the Cartesian square for a strided accessor array.
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
* @param {integer} strideOut1 - stride length for the first dimension of `out`
* @param {integer} strideOut2 - stride length for the second dimension of `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, 2.0 ];
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcartesianSquare( x.length, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( out ) ), 2, 1, 0 );
*
* console.log( out );
* // => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*/
function gcartesianSquare( N, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut ) { // eslint-disable-line max-len
	var xbuf;
	var obuf;
	var xget;
	var oset;
	var ix;
	var jx;
	var io;
	var v;
	var i;
	var j;

	xbuf = x.data;
	obuf = out.data;
	xget = x.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	ix = offsetX;
	io = offsetOut;
	if ( isRowMajor( [ strideOut1, strideOut2 ] ) ) {
		for ( i = 0; i < N; i++ ) {
			v = xget( xbuf, ix );
			jx = offsetX;
			for ( j = 0; j < N; j++ ) {
				oset( obuf, io, v );
				oset( obuf, io + strideOut2, xget( xbuf, jx ) );
				jx += strideX;
				io += strideOut1;
			}
			ix += strideX;
		}
		return out;
	}
	// Column-major...
	for ( i = 0; i < N; i++ ) { // Note: these loops inline the equivalent of `gfill` to avoid the overhead of intermediate object creation and accessor dispatch on each call...
		v = xget( xbuf, ix );
		for ( j = 0; j < N; j++ ) {
			oset( obuf, io, v );
			io += strideOut1;
		}
		ix += strideX;
	}
	io = offsetOut + strideOut2;
	for ( i = 0; i < N; i++ ) { // Note: these loops inline the equivalent of `gcopy` to avoid the overhead of intermediate object creation and accessor dispatch on each call...
		jx = offsetX;
		for ( j = 0; j < N; j++ ) {
			oset( obuf, io, xget( xbuf, jx ) );
			jx += strideX;
			io += strideOut1;
		}
	}
	return out;
}


// EXPORTS //

module.exports = gcartesianSquare;
