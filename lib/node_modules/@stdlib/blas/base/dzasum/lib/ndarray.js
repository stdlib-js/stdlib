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

var abs = require( '@stdlib/math/base/special/abs' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );


// MAIN //

/**
* Computes the sum of the absolute values of the real and imaginary components of a double-precision complex floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {number} result
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 5.0, -3.0, 6.0, 4.0 ] );
*
* var out = dzasum( x.length, x, 1, 0 );
* // returns 18.0
*/
function dzasum( N, x, strideX, offsetX ) {
	var viewX;
	var stemp;
	var ix;
	var sx;
	var i;

	stemp = 0.0;
	if ( N <= 0 ) {
		return stemp;
	}
	viewX = reinterpret( x, 0 );
	sx = strideX * 2;
	ix = offsetX * 2;
	for ( i = 0; i < N; i++ ) {
		stemp += abs( viewX[ ix ] ) + abs( viewX[ ix+1 ] );
		ix += sx;
	}
	return stemp;
}


// EXPORTS //

module.exports = dzasum;
