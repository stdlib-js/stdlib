/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Computes the covariance of two strided arrays provided known means and using a one-pass textbook algorithm.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {number} meanx - mean of `x`
* @param {Object} x - first input array object
* @param {Collection} x.data - first input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length of `x`
* @param {NonNegativeInteger} offsetX - starting index of `x`
* @param {number} meany - mean of `y`
* @param {Object} y - second input array object
* @param {Collection} y.data - second input array data
* @param {Array<Function>} y.accessors - array element accessors
* @param {integer} strideY - stride length of `y`
* @param {NonNegativeInteger} offsetY - starting index of `y`
* @returns {number} covariance
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = covarmtk( 4, 1, 1.25, arraylike2object( x ), 2, 1, 1.25, arraylike2object( x ), 2, 1 );
* // returns 6.25
*/
function covarmtk( N, correction, meanx, x, strideX, offsetX, meany, y, strideY, offsetY ) { // eslint-disable-line max-len
	var xbuf;
	var ybuf;
	var xget;
	var yget;
	var ix;
	var iy;
	var C;
	var n;
	var i;

	// Cache references to array data:
	xbuf = x.data;
	ybuf = y.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];

	n = N - correction;
	ix = offsetX;
	iy = offsetY;
	C = 0.0;
	for ( i = 0; i < N; i++ ) {
		C += ( xget( xbuf, ix ) - meanx ) * ( yget( ybuf, iy ) - meany );
		ix += strideX;
		iy += strideY;
	}
	return C / n;
}


// EXPORTS //

module.exports = covarmtk;
