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

var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Replicates each element in a single-precision complex floating-point strided array a specified number of times using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {PositiveInteger} k - number of times to replicate each element
* @param {Complex64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Complex64Array} out - output array
* @param {integer} strideOut - stride length for `out`
* @param {NonNegativeInteger} offsetOut - starting index for `out`
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Complex64Array( 6 );
*
* creplicate( 3, 2, x, 1, 0, out, 1, 0 );
* // out => <Complex64Array>[ 1.0, 2.0, 1.0, 2.0, 3.0, 4.0, 3.0, 4.0, 5.0, 6.0, 5.0, 6.0 ]
*/
function creplicate( N, k, x, strideX, offsetX, out, strideOut, offsetOut ) {
	var viewOut;
	var viewX;

	viewX = reinterpret( x, 0 );
	viewOut = reinterpret( out, 0 );
	addon.ndarray( N, k, viewX, strideX, offsetX, viewOut, strideOut, offsetOut );
	return out;
}


// EXPORTS //

module.exports = creplicate;
