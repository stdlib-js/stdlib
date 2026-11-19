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
* Multiplies the Hadamard product of strided arrays `x` and `y` by a constant and adds the result to a strided array `z` multiplied by a constant.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - first scalar constant
* @param {Object} x - first input array object
* @param {Collection} x.data - first input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Object} y - second input array object
* @param {Collection} y.data - second input array data
* @param {Array<Function>} y.accessors - array element accessors
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {number} beta - second scalar constant
* @param {Object} z - output array object
* @param {Collection} z.data - output array data
* @param {Array<Function>} z.accessors - array element accessors
* @param {integer} strideZ - `z` stride length
* @param {NonNegativeInteger} offsetZ - starting `z` index
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var z = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
*
* ghad( x.length, 2.0, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( y ) ), 1, 0, 3.0, arraylike2object( toAccessorArray( z ) ), 1, 0 );
* // z => [ 7.0, 15.0, 27.0, 43.0, 63.0 ]
*/
function ghad( N, alpha, x, strideX, offsetX, y, strideY, offsetY, beta, z, strideZ, offsetZ ) { // eslint-disable-line max-len, max-params
	var xbuf;
	var ybuf;
	var zbuf;
	var xget;
	var yget;
	var zget;
	var zset;
	var ix;
	var iy;
	var iz;
	var i;

	// Cache references to array data:
	xbuf = x.data;
	ybuf = y.data;
	zbuf = z.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];
	zget = z.accessors[ 0 ];
	zset = z.accessors[ 1 ];

	ix = offsetX;
	iy = offsetY;
	iz = offsetZ;
	for ( i = 0; i < N; i++ ) {
		zset( zbuf, iz, ( alpha * xget( xbuf, ix ) * yget( ybuf, iy ) ) + ( beta * zget( zbuf, iz ) ) ); // eslint-disable-line max-len
		ix += strideX;
		iy += strideY;
		iz += strideZ;
	}
	return z;
}


// EXPORTS //

module.exports = ghad;
