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
* Tests whether every element in a strided array is falsy using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {boolean} boolean indicating whether all elements are falsy
*
* @example
* var x = [ 0, 0, 1, 1 ];
*
* var o = gnone( 4, x, 1, 0 );
* // returns false
*/
function gnone( N, x, strideX, offsetX ) {
	var ox;
	var ix;
	var i;

	if ( N <= 0 ) {
		return true;
	}
	ox = arraylike2object( x );
	if ( ox.accessorProtocol ) {
		return accessors( N, ox, strideX, offsetX );
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( x[ ix ] ) {
			return false;
		}
		ix += strideX;
	}
	return true;
}


// EXPORTS //

module.exports = gnone;
