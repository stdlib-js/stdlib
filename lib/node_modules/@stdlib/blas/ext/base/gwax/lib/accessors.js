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
* Multiplies each element in a strided array `x` by a scalar constant and assigns the results to elements in a strided array `w`.
*
* @private
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar constant
* @param {Object} x - input array object
* @param {Collection} x.data - input array data
* @param {Array<Function>} x.accessors - array element accessors
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Object} w - output array object
* @param {Collection} w.data - output array data
* @param {Array<Function>} w.accessors - array element accessors
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {Object} output array object
*
* @example
* var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
* var arraylike2object = require( '@stdlib/array/base/arraylike2object' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwax( x.length, 5.0, arraylike2object( toAccessorArray( x ) ), 1, 0, arraylike2object( toAccessorArray( w ) ), 1, 0 );
* // w => [ 5.0, 10.0, 15.0, 20.0, 25.0 ]
*/
function gwax( N, alpha, x, strideX, offsetX, w, strideW, offsetW ) {
	var xbuf;
	var wbuf;
	var xget;
	var wset;
	var ix;
	var iw;
	var i;

	// Cache references to array data:
	xbuf = x.data;
	wbuf = w.data;

	// Cache references to element accessors:
	xget = x.accessors[ 0 ];
	wset = w.accessors[ 1 ];

	ix = offsetX;
	iw = offsetW;
	for ( i = 0; i < N; i++ ) {
		wset( wbuf, iw, alpha * xget( xbuf, ix ) );
		ix += strideX;
		iw += strideW;
	}
	return w;
}


// EXPORTS //

module.exports = gwax;
