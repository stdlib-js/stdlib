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
* Takes elements from one of two strided arrays depending on a condition.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} condition - condition array
* @param {integer} strideC - stride length for `condition`
* @param {NonNegativeInteger} offsetC - starting index for `condition`
* @param {Collection} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Collection} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @param {Collection} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Collection} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 4.0, 5.0, 6.0 ];
* var condition = [ 1, 0, 1 ];
* var out = [ 0.0, 0.0, 0.0 ];
*
* gwhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
* // out => [ 1.0, 5.0, 3.0 ]
*/
function gwhere( N, condition, strideC, offsetC, x, strideX, offsetX, y, strideY, offsetY, out, strideOut, offsetOut ) { // eslint-disable-line max-len, max-params
	var oc;
	var ox;
	var oy;
	var oo;
	var ic;
	var ix;
	var iy;
	var io;
	var i;

	if ( N <= 0 ) {
		return out;
	}
	oc = arraylike2object( condition );
	ox = arraylike2object( x );
	oy = arraylike2object( y );
	oo = arraylike2object( out );
	if ( oc.accessorProtocol || ox.accessorProtocol || oy.accessorProtocol || oo.accessorProtocol ) { // eslint-disable-line max-len
		accessors( N, oc, strideC, offsetC, ox, strideX, offsetX, oy, strideY, offsetY, oo, strideOut, offsetOut ); // eslint-disable-line max-len
		return out;
	}
	ic = offsetC;
	ix = offsetX;
	iy = offsetY;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		if ( condition[ ic ] ) {
			out[ io ] = x[ ix ];
		} else {
			out[ io ] = y[ iy ];
		}
		ic += strideC;
		ix += strideX;
		iy += strideY;
		io += strideOut;
	}
	return out;
}


// EXPORTS //

module.exports = gwhere;
