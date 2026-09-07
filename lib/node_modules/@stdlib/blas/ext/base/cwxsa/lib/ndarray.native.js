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
* Subtracts a scalar constant from each element in a single-precision complex floating-point strided array `x` and assigns the results to elements in a single-precision complex floating-point strided array `w` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64} alpha - scalar constant
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex64Array} w - output array
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
* var alpha = new Complex64( 5.0, 3.0 );
*
* cwxsa( x.length, alpha, x, 1, 0, w, 1, 0 );
* // w => <Complex64Array>[ -4.0, -1.0, -2.0, 1.0, 0.0, 3.0 ]
*/
function cwxsa( N, alpha, x, strideX, offsetX, w, strideW, offsetW ) {
	var viewX = reinterpret( x, 0 );
	var viewW = reinterpret( w, 0 );
	addon.ndarray( N, alpha, viewX, strideX, offsetX, viewW, strideW, offsetW );
	return w;
}


// EXPORTS //

module.exports = cwxsa;
