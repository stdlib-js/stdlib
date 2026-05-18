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
* Cumulatively tests whether at least `k` elements in a strided array are truthy.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {integer} k - minimum number of truthy elements
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
* var x = [ 0, 0, 1, 1, 1 ];
* var out = [ false, false, false, false, false ];
*
* gcusome( 5, 2, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( out ) ), 1, 0 );
* // out => [ false, false, false, true, true ]
*/
function gcusome( N, k, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var xbuf;
	var obuf;
	var get;
	var set;
	var flg;
	var cnt;
	var ix;
	var io;
	var i;

	// Cache reference to array data:
	xbuf = x.data;
	obuf = out.data;

	// Cache reference to the element accessors:
	get = x.accessors[ 0 ];
	set = out.accessors[ 1 ];

	flg = false;
	cnt = k;
	ix = offsetX;
	io = offsetOut;
	for ( i = 0; i < N; i++ ) {
		if ( !flg && get( xbuf, ix ) ) {
			cnt -= 1;
			if ( cnt <= 0 ) {
				flg = true;
			}
		}
		set( obuf, io, flg );
		ix += strideX;
		io += strideOut;
	}
	return out;
}


// EXPORTS //

module.exports = gcusome;
