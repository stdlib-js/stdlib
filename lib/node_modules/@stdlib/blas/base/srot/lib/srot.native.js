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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Applies a plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float32Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Float32Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* srot( x.length, x, 1, y, 1, 0.8, 0.6 );
* // x => <Float32Array>[ ~4.4, ~5.8, ~7.2, ~8.6, 10.0 ]
* // y => <Float32Array>[ ~4.2, 4.4, 4.6, 4.8, 5.0 ]
*/
function srot( N, x, strideX, y, strideY, c, s ) {
	addon( N, x, strideX, y, strideY, c, s );
	return y;
}


// EXPORTS //

module.exports = srot;
