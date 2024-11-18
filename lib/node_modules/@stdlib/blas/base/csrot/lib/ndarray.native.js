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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Applies a plane rotation.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} cx - first input array
* @param {integer} strideX - `cx` stride length
* @param {NonNegativeInteger} offsetX - starting `cx` index
* @param {Complex64Array} cy - second input array
* @param {integer} strideY - `cy` stride length
* @param {NonNegativeInteger} offsetY - starting `cy` index
* @param {number} c - cosine of the angle of rotation
* @param {number} s - sine of the angle of rotation
* @returns {Complex64Array} `cy`
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var realf = require( '@stdlib/complex/float32/real' );
* var imagf = require( '@stdlib/complex/float32/imag' );
*
* var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
* var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* csrot( cx.length, cx, 1, 0, cy, 1, 0, 0.8, 0.6 );
*
* var z = cy.get( 0 );
* // returns <Complex64>
*
* var re = realf( z );
* // returns ~-0.6
*
* var im = imagf( z );
* // returns ~-1.2
*
* z = cx.get( 0 );
* // returns <Complex64>
*
* re = realf( z );
* // returns ~0.8
*
* im = imagf( z );
* // returns ~1.6
*/
function csrot( N, cx, strideX, offsetX, cy, strideY, offsetY, c, s ) {
	var viewX = reinterpret( cx, 0 );
	var viewY = reinterpret( cy, 0 );
	addon.ndarray( N, viewX, strideX, offsetX, viewY, strideY, offsetY, c, s );
	return cy;
}


// EXPORTS //

module.exports = csrot;
