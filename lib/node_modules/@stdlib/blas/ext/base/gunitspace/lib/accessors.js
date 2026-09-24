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
* Fills a strided array with linearly spaced numeric elements which increment by `1` starting from a specified value.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} start - starting value
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
* var x = [ 0.0, 0.0, 0.0, 0.0 ];
*
* gunitspace( 4, 3.0, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // x => [ 3.0, 4.0, 5.0, 6.0 ]
*/
function gunitspace( N, start, x, strideX, offsetX ) {
	var xbuf;
	var set;
	var ix;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	set = x.accessors[ 1 ];

	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		set( xbuf, ix, start + i );
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = gunitspace;
