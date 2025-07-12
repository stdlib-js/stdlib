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
* @param {Complex128Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Complex128Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Complex128Array} `y`
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zdrot( x.length, x, 1, y, 1, 0.8, 0.6 );
* // x => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
* // y => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
*/
function zdrot( N, x, strideX, y, strideY, c, s ) {
	var ix = stride2offset( N, strideX );
	var iy = stride2offset( N, strideY );
	return ndarray( N, x, strideX, ix, y, strideY, iy, c, s );
}


// EXPORTS //

module.exports = zdrot;
