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
* Adds elements of a single-precision complex floating-point strided array `x` to the corresponding elements of a single-precision complex floating-point strided array `y` and assigns the results to `y` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex64Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
*
* cxpy( x.length, x, 1, 0, y, 1, 0 );
* // y => <Complex64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0, 13.0 ]
*/
function cxpy( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var viewX = reinterpret( x, 0 );
	var viewY = reinterpret( y, 0 );
	addon.ndarray( N, viewX, strideX, offsetX, viewY, strideY, offsetY );
	return y;
}


// EXPORTS //

module.exports = cxpy;
