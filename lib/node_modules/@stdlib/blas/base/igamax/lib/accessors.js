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

var abs = require( '@stdlib/math/base/special/abs' );


// MAIN //

/**
* Finds the index of the first element having the maximum absolute value.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @returns {integer} index value
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
*
* var idx = igamax( 5, arraylike2object( toAccessorArray( x ) ), 1, 0 );
* // returns 4
*/
function igamax( N, x, strideX, offsetX ) {
	var xbuf;
	var max;
	var idx;
	var get;
	var ix;
	var i;
	var v;

	// Cache references to array data:
	xbuf = x.data;

	// Cache references to element accessors:
	get = x.accessors[ 0 ];

	max = abs( get( xbuf, offsetX ) );
	idx = 0;
	ix = offsetX + strideX;
	for ( i = 1; i < N; i++ ) {
		v = abs( get( xbuf, ix ) );
		if ( v > max ) {
			idx = i;
			max = v;
		}
		ix += strideX;
	}
	return idx;
}


// EXPORTS //

module.exports = igamax;
