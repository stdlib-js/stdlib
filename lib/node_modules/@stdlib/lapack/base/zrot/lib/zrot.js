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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Applies a plane rotation with real cosine and complex sine.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} zx - first input array
* @param {integer} strideX - `zx` stride length
* @param {Complex128Array} zy - second input array
* @param {integer} strideY - `zy` stride length
* @param {number} c - cosine of the angle of rotation
* @param {Complex128} s - sine of the angle of rotation
* @returns {Complex128Array} `zy`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
* var real = require( '@stdlib/complex/float64/real' );
* var imag = require( '@stdlib/complex/float64/imag' );
*
* var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var s = new Complex128( 0.3, 0.4 );
*
* zrot( zx.length, zx, 1, zy, 1, 0.8, s );
*
* var z = zy.get( 0 );
* // returns <Complex128>
*
* var re = real( z );
* // returns ~-1.1
*
* var im = imag( z );
* // returns ~-0.2
*
* z = zx.get( 0 );
* // returns <Complex128>
*
* re = real( z );
* // returns ~0.8
*
* im = imag( z );
* // returns ~1.6
*/
function zrot( N, zx, strideX, zy, strideY, c, s ) {
	var ix = stride2offset( N, strideX );
	var iy = stride2offset( N, strideY );
	return ndarray( N, zx, strideX, ix, zy, strideY, iy, c, s );
}


// EXPORTS //

module.exports = zrot;
