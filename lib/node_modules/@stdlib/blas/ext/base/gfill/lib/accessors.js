/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Fills a strided array with a specified scalar constant.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {*} alpha - scalar constant
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Object} input array object
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var reinterpret64 = require( '@stdlib/strided/base/reinterpret-complex64' );
*
* function setter( data, idx, value ) {
*     data.set( value, idx );
* }
*
* var data = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var x = {
*     'data': data,
*     'accessors': [ null, setter ]
* };
*
* var alpha = new Complex64( 5.0, 5.0 );
*
* gfill( data.length, alpha, x, 1, 0 );
*
* var view = reinterpret64( x.data, 0 );
* // view => <Float32Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
*/
function gfill( N, alpha, x, strideX, offsetX ) {
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
		set( xbuf, ix, alpha );
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = gfill;
