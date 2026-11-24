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
* Replaces strided array elements not equal to a provided search element with a specified scalar constant using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {*} searchElement - search element
* @param {*} alpha - scalar constant
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Collection} input array
*
* @example
* var x = [ 0.0, -2.0, 3.0, 0.0, 4.0, -6.0 ];
*
* gfillNotEqual( 6, 0.0, 5.0, x, 1, 0 );
* // x => [ 0.0, 5.0, 5.0, 0.0, 5.0, 5.0 ]
*/
function gfillNotEqual( N, searchElement, alpha, x, strideX, offsetX ) {
	var ix;
	var o;
	var i;

	if ( N <= 0 ) {
		return x;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		accessors( N, searchElement, alpha, o, strideX, offsetX );
		return x;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( x[ ix ] !== searchElement ) {
			x[ ix ] = alpha;
		}
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = gfillNotEqual;
