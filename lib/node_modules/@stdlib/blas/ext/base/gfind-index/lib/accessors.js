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
* Returns the index of the first element which passes a test implemented by a predicate function.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @param {Callback} clbk - callback function
* @param {*} thisArg - execution context
* @returns {integer} index
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* function isEven( v ) {
*     return v % 2.0 === 0.0;
* }
*
* var x = [ 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* var idx = gfindIndex( x.length, arraylike2object( toAccessorArray( x ) ), 1, 0, isEven );
* // returns 3
*/
function gfindIndex( N, x, strideX, offsetX, clbk, thisArg ) {
	var xbuf;
	var get;
	var ix;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessor:
	get = x.accessors[ 0 ];

	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( clbk.call( thisArg, get( xbuf, ix ), i, ix, x ) ) {
			return i;
		}
		ix += strideX;
	}
	return -1;
}


// EXPORTS //

module.exports = gfindIndex;
