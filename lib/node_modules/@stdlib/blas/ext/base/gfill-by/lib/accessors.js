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
* Fills a strided array according to a provided callback function.
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
* function getter( data, idx ) {
*     return data.get( idx );
* }
*
* var data = new Complex64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* var x = {
*     'data': data,
*     'accessors': [ getter, setter ]
* };
*
* function clbk() {
*     return new Complex64( 5.0, 5.0 );
* }
*
* gfillBy( data.length, x, 1, 0, clbk, void 0 );
*
* var view = reinterpret64( x.data, 0 );
* // view => <Float32Array>[ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
*/
function gfillBy( N, x, strideX, offsetX, clbk, thisArg ) {
	var xbuf;
	var set;
	var get;
	var ix;
	var i;

	// Cache reference to array data:
	xbuf = x.data;

	// Cache a reference to the element accessors:
	get = x.accessors[ 0 ];
	set = x.accessors[ 1 ];

	ix = offsetX;
	for ( i = 0; i < N; i++ ) {
		set( xbuf, ix, clbk.call( thisArg, get( xbuf, ix ), i, ix, x ) );
		ix += strideX;
	}
	return x;
}


// EXPORTS //

module.exports = gfillBy;
