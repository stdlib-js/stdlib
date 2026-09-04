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
* Adds elements of a strided array `x` to the corresponding elements of a strided array `y` and assigns the results to elements in a strided array `w`.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
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
* @param {Object} w - output array object
* @param {Collection} w.data - output array data
* @param {Array<Function>} w.accessors - array element accessors
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxpy( x.length, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( y ) ), 1, 0, arraylike2object( toAccessorArray( w ) ), 1, 0 );
* // w => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
function gwxpy( N, x, strideX, offsetX, y, strideY, offsetY, w, strideW, offsetW ) { // eslint-disable-line max-len
	var xbuf;
	var ybuf;
	var wbuf;
	var xget;
	var yget;
	var wset;
	var ix;
	var iy;
	var iw;
	var i;

	// Cache references to array data:
	xbuf = x.data;
	ybuf = y.data;
	wbuf = w.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];
	wset = w.accessors[ 1 ];

	ix = offsetX;
	iy = offsetY;
	iw = offsetW;
	for ( i = 0; i < N; i++ ) {
		wset( wbuf, iw, xget( xbuf, ix ) + yget( ybuf, iy ) );
		ix += strideX;
		iy += strideY;
		iw += strideW;
	}
	return w;
}


// EXPORTS //

module.exports = gwxpy;
