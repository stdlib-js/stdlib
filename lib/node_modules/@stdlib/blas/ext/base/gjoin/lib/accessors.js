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

// MODULES //

var isUndefinedOrNull = require( '@stdlib/assert/is-undefined-or-null' );


// MAIN //

/**
* Returns a string created by joining strided array elements using a specified separator.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {string} separator - separator
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {string} joined string
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = gjoin( x.length, ',', arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // returns '1,2,3,4'
*/
function gjoin( N, separator, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var out;
	var ix;
	var v;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	get = x.accessors[ 0 ];

	ix = offsetX;
	out = '';
	for ( i = 0; i < N; i++ ) {
		if ( i > 0 ) {
			out += separator;
		}
		v = get( xbuf, ix );
		if ( !isUndefinedOrNull( v ) ) {
			out += String( v );
		}
		ix += strideX;
	}
	return out;
}


// EXPORTS //

module.exports = gjoin;
