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
* Tests whether at least one element in a strided array is truthy using accessor functions.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {boolean} boolean indicating whether at least one element is truthy
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = toAccessorArray( [ 0, 0, 1, 1 ] );
*
* var v = gany( 4, arraylike2object( x ), 1, 0 );
* // returns true
*/
function gany( N, x, strideX, offsetX ) {
	var xbuf;
	var get;
	var ix;
	var i;

	xbuf = x.data;
	get = x.accessors[ 0 ];
	if ( strideX === 0 ) {
		if ( get( xbuf, offsetX ) ) {
			return true;
		}
		return false;
	}
	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		if ( get( xbuf, ix ) ) {
			return true;
		}
		ix += strideX;
	}
	return false;
}


// EXPORTS //

module.exports = gany;
