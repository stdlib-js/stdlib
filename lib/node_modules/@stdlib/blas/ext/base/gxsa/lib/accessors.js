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
* Subtracts a scalar constant from each element in a strided array.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar constant
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Object} input array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
*
* var v = gxsa( 4, 5.0, arraylike2object( toAccessorArray( x ) ), 2, 1 );
* // x => [ 2.0, -4.0, 2.0, -7.0, -2.0, -3.0, 3.0, -1.0 ]
*/
function gxsa( N, alpha, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var set;
	var ix;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache references to element accessors:
	get = x.accessors[ 0 ];
	set = x.accessors[ 1 ];

	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		set( xbuf, ix, get( xbuf, ix ) - alpha );
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = gxsa;
