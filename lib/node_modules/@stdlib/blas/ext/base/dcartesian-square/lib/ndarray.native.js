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
* Computes the Cartesian square for a double-precision floating-point strided array using alternative indexing semantics.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float64Array} out - output array
* @param {integer} strideOut1 - stride length for the first dimension of `out`
* @param {integer} strideOut2 - stride length for the second dimension of `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0 ] );
* var out = new Float64Array( 8 );
*
* dcartesianSquare( x.length, x, 1, 0, out, 2, 1, 0 );
* // out => <Float64Array>[ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ]
*/
function dcartesianSquare( N, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut ) { // eslint-disable-line max-len
	addon.ndarray( N, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut ); // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = dcartesianSquare;
