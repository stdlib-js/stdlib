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
* Takes elements from one of two strided arrays depending on a condition.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} condition - condition array object
* @param {Collection} condition.data - condition array data
* @param {Array<Function>} condition.accessors - array element accessors
* @param {integer} strideC - stride length for `condition`
* @param {NonNegativeInteger} offsetC - starting index for `condition`
* @param {Object} x - first input array object
* @param {Collection} x.data - first input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Object} y - second input array object
* @param {Collection} y.data - second input array data
* @param {Array<Function>} y.accessors - array element accessors
* @param {integer} strideY - stride length for `y`
* @param {NonNegativeInteger} offsetY - starting index for `y`
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
* var condition = arraylike2object( toAccessorArray( [ 1, 0, 1 ] ) );
* var x = arraylike2object( toAccessorArray( [ 1.0, 2.0, 3.0 ] ) );
* var y = arraylike2object( toAccessorArray( [ 4.0, 5.0, 6.0 ] ) );
* var out = arraylike2object( toAccessorArray( [ 0.0, 0.0, 0.0 ] ) );
*
* gwhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
*
* var v = out.data.get( 0 );
* // returns 1.0
*/
function gwhere( N, condition, strideC, offsetC, x, strideX, offsetX, y, strideY, offsetY, out, strideOut, offsetOut ) { // eslint-disable-line max-len, max-params
	var cbuf;
	var xbuf;
	var ybuf;
	var obuf;
	var cget;
	var xget;
	var yget;
	var oset;
	var ic;
	var ix;
	var iy;
	var io;
	var i;

	// Cache references to array data:
	cbuf = condition.data;
	xbuf = x.data;
	ybuf = y.data;
	obuf = out.data;

	// Cache references to element accessors:
	cget = condition.accessors[ 0 ];
	xget = x.accessors[ 0 ];
	yget = y.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	ic = offsetC;
	ix = offsetX;
	iy = offsetY;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		if ( cget( cbuf, ic ) ) {
			oset( obuf, io, xget( xbuf, ix ) );
		} else {
			oset( obuf, io, yget( ybuf, iy ) );
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
