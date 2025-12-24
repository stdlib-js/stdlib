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
* Adds a scalar constant to each element in a strided array.
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
* var x = toAccessorArray( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* var v = gapx( 4, 5.0, arraylike2object( x ), 2, 1 );
* // returns {...}
*/
function gapx( N, alpha, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var set;
	var ix;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache reference to the element accessors:
	get = x.accessors[ 0 ];
	set = x.accessors[ 1 ];

	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		set( xbuf, ix, alpha + get( xbuf, ix ) );
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = gapx;
