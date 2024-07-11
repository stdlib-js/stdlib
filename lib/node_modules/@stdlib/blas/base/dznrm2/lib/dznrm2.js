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
* Computes the L2-norm of a complex double-precision floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} zx - input array
* @param {integer} strideX - `zx` stride length
* @returns {number} L2-norm
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var zx = new Complex128Array( [ 0.3, 0.1, 0.5, 0.0, 0.0, 0.5, 0.0, 0.2, 2.0, 3.0 ] );
*
* var norm = dznrm2( 4, zx, 1 );
* // returns ~0.8
*/
function dznrm2( N, zx, strideX ) {
	return ndarray( N, zx, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = dznrm2;
