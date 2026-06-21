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
var Boolean = require( '@stdlib/boolean/ctor' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Tests whether every element in a strided array is truthy using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {boolean} boolean indicating whether every element is truthy
*
* @example
* var x = [ 1, 1, 1, 1 ];
*
* var out = gevery( 4, x, 1, 0 );
* // returns true
*/
function gevery( N, x, strideX, offsetX ) {
	var ix;
	var o;
	var i;

	if ( N <= 0 ) {
		return false;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, o, strideX, offsetX );
	}
	if ( strideX === 0 ) {
		return Boolean( x[ offsetX ] );
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( !x[ ix ] ) {
			return false;
		}
		ix += strideX;
	}
	return true;
}


// EXPORTS //

module.exports = gevery;
