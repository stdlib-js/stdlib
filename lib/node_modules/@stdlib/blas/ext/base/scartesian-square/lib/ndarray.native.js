/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Computes the Cartesian square for a single-precision floating-point strided array using alternative indexing semantics.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} out - output array
* @param {integer} strideOut1 - stride length for the first dimension of `out`
* @param {integer} strideOut2 - stride length for the second dimension of `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0 ] );
* var out = new Float32Array( 8 );
*
* scartesianSquare( x.length, x, 1, 0, out, 2, 1, 0 );
* // out => <Float32Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*/
function scartesianSquare( N, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut ) { // eslint-disable-line max-len
	addon.ndarray( N, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut ); // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = scartesianSquare;
