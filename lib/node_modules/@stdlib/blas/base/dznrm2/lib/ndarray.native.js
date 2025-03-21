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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the L2-norm of a complex double-precision floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} zx - input array
* @param {integer} strideX - `zx` stride length
* @param {NonNegativeInteger} offsetX - starting `zx` index
* @returns {number} L2-norm
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var dznrm2 = require( '@stdlib/blas/base/dznrm2' );
*
* var zx = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
*
* var norm = dznrm2( 4, zx, 1 );
* // returns ~0.8
*/
function dznrm2( N, zx, strideX, offsetX ) {
	var viewZX = reinterpret( zx, 0 );
	return addon.ndarray( N, viewZX, strideX, offsetX );
}


// EXPORTS //

module.exports = dznrm2;
