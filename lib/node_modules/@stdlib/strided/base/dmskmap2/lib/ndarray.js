/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Applies a binary function to double-precision floating-point strided input arrays according to a strided mask array and assigns results to a double-precision floating-point strided output array.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float64Array} y - input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Uint8Array} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @param {NonNegativeInteger} offsetMask - starting `mask` index
* @param {Float64Array} z - destination array
* @param {integer} strideZ - `z` stride length
* @param {NonNegativeInteger} offsetZ - starting `z` index
* @param {Function} fcn - binary function to apply
* @returns {Float64Array} `z`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
* var z = new Float64Array( x.length );
*
* dmskmap2( x.length, x, 1, 0, y, 1, 0, m, 1, 0, z, 1, 0, add );
*
* console.log( z );
* // => <Float64Array>[ 2.0, 4.0, 0.0, 8.0, 10.0 ]
*/
function dmskmap2( N, x, strideX, offsetX, y, strideY, offsetY, mask, strideMask, offsetMask, z, strideZ, offsetZ, fcn ) { // eslint-disable-line max-len, max-params
	var ix;
	var iy;
	var iz;
	var im;
	var i;
	if ( N <= 0 ) {
		return z;
	}
	ix = offsetX;
	iy = offsetY;
	iz = offsetZ;
	im = offsetMask;
	for ( i = 0; i < N; i++ ) {
		if ( mask[ im ] === 0 ) {
			z[ iz ] = fcn( x[ ix ], y[ iy ] );
		}
		ix += strideX;
		iy += strideY;
		iz += strideZ;
		im += strideMask;
	}
	return z;
}


// EXPORTS //

module.exports = dmskmap2;
