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

var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
var accessors = require( './accessors.js' );


// MAIN //

/**
* Returns the index of the first element which passes a test implemented by a predicate function.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - execution context
* @returns {integer} index
*
* @example
* function isEven( v ) {
*     return v % 2.0 === 0.0;
* }
*
* var x = [ 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* var idx = gfindIndex( x.length, x, 1, 0, isEven );
* // returns 3
*/
function gfindIndex( N, x, strideX, offsetX, clbk, thisArg ) {
	var ix;
	var o;
	var i;

	if ( N <= 0 ) {
		return -1;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		return accessors( N, o, strideX, offsetX, clbk, thisArg );
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( clbk.call( thisArg, x[ ix ], i, ix, x ) ) {
			return i;
		}
		ix += strideX;
	}
	return -1;
}


// EXPORTS //

module.exports = gfindIndex;
