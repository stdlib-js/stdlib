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

// MAIN //

/**
* Applies a unary function accepting and returning double-precision floating-point numbers to each element in a double-precision floating-point strided input array according to a corresponding element in a strided mask array and assigns each result to an element in a double-precision floating-point strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Uint8Array} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @param {NonNegativeInteger} offsetMask - starting `mask` index
* @param {Float64Array} y - destination array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Function} fcn - unary function to apply
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
* var y = new Float64Array( x.length );
*
* dmskmap( x.length, x, 1, 0, m, 1, 0, y, 1, 0, scale );
*
* console.log( y );
* // => <Float64Array>[ 10.0, 20.0, 0.0, 40.0, 50.0 ]
*/
function dmskmap( N, x, strideX, offsetX, mask, strideMask, offsetMask, y, strideY, offsetY, fcn ) { // eslint-disable-line max-len, max-params
	var ix;
	var im;
	var iy;
	var i;
	if ( N <= 0 ) {
		return y;
	}
	ix = offsetX;
	im = offsetMask;
	iy = offsetY;
	for ( i = 0; i < N; i++ ) {
		if ( mask[ im ] === 0 ) {
			y[ iy ] = fcn( x[ ix ] );
		}
		ix += strideX;
		im += strideMask;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = dmskmap;
