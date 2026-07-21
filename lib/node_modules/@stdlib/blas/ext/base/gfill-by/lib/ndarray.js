/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Fills a strided array according to a provided callback function.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @param {Callback} clbk - callback function
* @param {*} [thisArg] - execution context
* @returns {Collection} input array
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];
*
* function fill() {
*     return 5.0;
* }
*
* gfillBy( 3, x, 1, x.length-3, fill );
* // x => [ 1.0, -2.0, 3.0, 5.0, 5.0, 5.0 ]
*/
function gfillBy( N, x, strideX, offsetX, clbk, thisArg ) {
	var ix;
	var o;
	var i;

	if ( N <= 0 ) {
		return x;
	}
	o = arraylike2object( x );
	if ( o.accessorProtocol ) {
		accessors( N, o, strideX, offsetX, clbk, thisArg );
		return o.data;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		x[ ix ] = clbk.call( thisArg, x[ ix ], i, ix, x );
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = gfillBy;
