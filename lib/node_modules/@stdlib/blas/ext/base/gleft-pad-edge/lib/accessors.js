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
* Prepends elements to a strided array by repeating the leading edge element.
*
* @private
* @param {PositiveInteger} N - number of indexed elements in `x`
* @param {NonNegativeInteger} k - number of elements to pad
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} y - output array object
* @param {Collection} y.data - output array data
* @param {Array<Function>} y.accessors - array element accessors
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gleftPadEdge( 4, 6, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( y ) ), 1, 0 );
* // y => [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 3.0, 4.0 ]
*/
function gleftPadEdge( N, k, x, strideX, offsetX, y, strideY, offsetY ) {
	var xbuf;
	var ybuf;
	var get;
	var set;
	var ix;
	var iy;
	var v;
	var i;

	// Cache references to array data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache references to element accessors:
	get = x.accessors[ 0 ];
	set = y.accessors[ 1 ];

	v = get( xbuf, offsetX );
	iy = offsetY;
	for ( i = 0; i < k; i++ ) {
		set( ybuf, iy, v );
		iy += strideY;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		set( ybuf, iy, get( xbuf, ix ) );
		iy += strideY;
		ix += strideX;
	}
	return y;
}


// EXPORTS //

module.exports = gleftPadEdge;
