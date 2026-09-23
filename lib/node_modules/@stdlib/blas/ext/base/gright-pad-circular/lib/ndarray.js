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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Appends elements to a strided array by circularly repeating existing elements.
*
* @param {PositiveInteger} N - number of indexed elements in `x`
* @param {integer} k - number of elements to pad
* @param {Collection} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Collection} y - output array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Collection} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* grightPadCircular( 4, 6, x, 1, 0, y, 1, 0 );
* // y => [ 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0 ]
*/
function grightPadCircular( N, k, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var ox;
	var oy;
	var M;
	var i;
	var j;

	if ( N <= 0 ) {
		return y;
	}
	if ( k < 0 ) {
		k = 0;
	}
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	if ( ox.accessorProtocol || oy.accessorProtocol ) {
		accessors( N, k, ox, strideX, offsetX, oy, strideY, offsetY );
		return y;
	}
	M = N + k;
	j = 0;
	ix = offsetX;
	iy = offsetY;
	for ( i = 0; i < M; i++ ) {
		y[ iy ] = x[ ix ];
		iy += strideY;
		j += 1;
		if ( j === N ) {
			j = 0;
			ix = offsetX;
		} else {
			ix += strideX;
		}
	}
	return y;
}


// EXPORTS //

module.exports = grightPadCircular;
