/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var absf = require( '@stdlib/math/base/special/absf' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );


// MAIN //

/**
* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} cx - input array
* @param {integer} strideX - `cx` stride length
* @param {NonNegativeInteger} offsetX - starting index for `cx`
* @returns {number} result
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 5.0, -3.0, 6.0, 4.0 ] );
*
* var out = scasum( cx.length, cx, 1, 0 );
* // returns 18.0
*/
function scasum( N, cx, strideX, offsetX ) {
	var stemp;
	var viewX;
	var ix;
	var sx;
	var i;

	stemp = 0.0;
	if ( N <= 0 ) {
		return stemp;
	}
	viewX = reinterpret( cx, 0 );
	sx = strideX * 2;
	ix = offsetX * 2;
	for ( i = 0; i < N; i++ ) {
		stemp = f32( stemp + f32( absf( viewX[ ix ] ) + absf( viewX[ ix+1 ] ) ) );
		ix += sx;
	}
	return stemp;
}


// EXPORTS //

module.exports = scasum;
