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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Applies a plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} cx - first input array
* @param {integer} strideX - `cx` stride length
* @param {Complex64Array} cy - second input array
* @param {integer} strideY - `cy` stride length
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Complex64Array} `cy`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* csrot( cx.length, cx, 1, cy, 1, 0.8, 0.6 );
* // cx => <Complex64Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
* // cy => <Complex64Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
*/
function csrot( N, cx, strideX, cy, strideY, c, s ) {
	var ix = stride2offset( N, strideX );
	var iy = stride2offset( N, strideY );
	return ndarray( N, cx, strideX, ix, cy, strideY, iy, c, s );
}


// EXPORTS //

module.exports = csrot;
