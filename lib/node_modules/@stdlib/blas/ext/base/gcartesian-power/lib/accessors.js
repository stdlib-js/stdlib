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
var pow = require( '@stdlib/math/base/special/pow' );


// MAIN //

/**
* Computes the Cartesian power for a strided array using alternative indexing semantics.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {NonNegativeInteger} k - power
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
* var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gcartesianPower( 2, 2, arraylike2object( toAccessorArray( [ 1.0, 2.0 ] ) ), 1, 0, arraylike2object( out ), 2, 1, 0 );
* // out => [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*/
function gcartesianPower( N, k, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut ) { // eslint-disable-line max-len
	var xbuf;
	var obuf;
	var xget;
	var oset;
	var len;
	var oj;
	var io;
	var ix;
	var sj;
	var i;
	var j;
	var s;
	var t;

	// Cache references to array data:
	xbuf = x.data;
	obuf = out.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];
	oset = out.accessors[ 1 ];

	len = pow( N, k );
	if ( isRowMajor( [ strideOut1, strideOut2 ] ) ) {
		io = offsetOut;
		for ( i = 0; i < len; i++ ) {
			t = i;
			for ( j = k-1; j >= 0; j-- ) {
				s = t % N;
				t = (t-s) / N;
				ix = offsetX + (s*strideX);
				oj = io + (j*strideOut2);
				oset( obuf, oj, xget( xbuf, ix ) );
			}
			io += strideOut1;
		}
	} else { // isColMajor
		sj = len;
		for ( j = 0; j < k; j++ ) {
			sj /= N;
			io = offsetOut + (j*strideOut2);
			for ( i = 0; i < len; i++ ) {
				s = ((i-(i%sj))/sj) % N;
				ix = offsetX + (s*strideX);
				oset( obuf, io, xget( xbuf, ix ) );
				io += strideOut1;
			}
		}
	}
	return out;
}


// EXPORTS //

module.exports = gcartesianPower;
