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

// MODULES //

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Computes the covariance of two strided arrays provided known means and using a one-pass textbook algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {number} meanx - mean of `x`
* @param {NumericArray} x - first input array
* @param {integer} strideX - stride length of `x`
* @param {NonNegativeInteger} offsetX - starting index of `x`
* @param {number} meany - mean of `y`
* @param {NumericArray} y - second input array
* @param {integer} strideY - stride length of `y`
* @param {NonNegativeInteger} offsetY - starting index of `y`
* @returns {number} covariance
*
* @example
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = covarmtk( 4, 1, 1.25, x, 2, 1, 1.25, x, 2, 1 );
* // returns 6.25
*/
function covarmtk( N, correction, meanx, x, strideX, offsetX, meany, y, strideY, offsetY ) { // eslint-disable-line max-len
	var ox;
	var oy;
	var ix;
	var iy;
	var C;
	var n;
	var i;

	n = N - correction;
	if ( N <= 0 || n <= 0.0 ) {
		return NaN;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	if ( ox.accessorProtocol || oy.accessorProtocol ) {
		return accessors( N, correction, meanx, ox, strideX, offsetX, meany, oy, strideY, offsetY ); // eslint-disable-line max-len
	}
	ix = offsetX;
	iy = offsetY;
	C = 0.0;
	for ( i = 0; i < N; i++ ) {
		C += ( x[ ix ] - meanx ) * ( y[ iy ] - meany );
		ix += strideX;
		iy += strideY;
	}
	return C / n;
}


// EXPORTS //

module.exports = covarmtk;
