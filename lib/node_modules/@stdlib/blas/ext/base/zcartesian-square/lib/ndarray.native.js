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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex128' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the Cartesian square for a double-precision complex floating-point strided array using alternative indexing semantics.
*
* ## Notes
*
* -   Pairs are stored as rows in the output matrix, where the first column contains the first element of each pair and the second column contains the second element.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Complex128Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Complex128Array} out - output array
* @param {integer} strideOut1 - stride length for the first dimension of `out`
* @param {integer} strideOut2 - stride length for the second dimension of `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Complex128Array} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var out = new Complex128Array( 8 );
*
* zcartesianSquare( x.length, x, 1, 0, out, 2, 1, 0 );
* // out => <Complex128Array>[ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0 ]
*/
function zcartesianSquare( N, x, strideX, offsetX, out, strideOut1, strideOut2, offsetOut ) { // eslint-disable-line max-len
	var viewX = reinterpret( x, 0 );
	var viewO = reinterpret( out, 0 );
	addon.ndarray( N, viewX, strideX, offsetX, viewO, strideOut1, strideOut2, offsetOut ); // eslint-disable-line max-len
	return out;
}


// EXPORTS //

module.exports = zcartesianSquare;
