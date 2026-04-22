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
* Computes the number of non-`NaN` elements in a strided array.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {NonNegativeInteger} count
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
*
* var v = gnancount( 5, arraylike2object( x ), 2, 1 );
* // returns 4
*/
function gnancount( N, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var ix;
	var v;
	var n;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	get = x.accessors[ 0 ];

	if ( strideX === 0 ) {
		v = get( xbuf, offsetX );
		return ( v === v ) ? N : 0;
	}
	ix = offsetX;
	n = 0;
	for ( i = 0; i < N; i++ ) {
		v = get( xbuf, ix );
		if ( v === v ) {
			n += 1;
		}
		ix += strideX;
	}
	return n;
}


// EXPORTS //

module.exports = gnancount;
