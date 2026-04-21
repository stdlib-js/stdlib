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
* Replicates each strided array element a specified number of times.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {PositiveInteger} k - number of times to replicate each element
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
* var x = toAccessorArray( [ 1.0, 2.0, 3.0 ] );
* var out = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* greplicate( 3, 2, arraylike2object( x ), 1, 0, arraylike2object( out ), 1, 0 );
*
* var v = out.get( 0 );
* // returns 1.0
*/
function greplicate( N, k, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var xbuf;
	var obuf;
	var get;
	var set;
	var io;
	var ix;
	var v;
	var i;
	var j;

	// Cache references to array data:
	xbuf = x.data;
	obuf = out.data;

	// Cache references to element accessors:
	get = x.accessors[ 0 ];
	set = out.accessors[ 1 ];

	ix = offsetX;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		v = get( xbuf, ix );
		for ( j = 0; j < k; j++ ) {
			set( obuf, io, v );
			io += strideOut;
		}
		ix += strideX;
	}
	return out;
}


// EXPORTS //

module.exports = greplicate;
