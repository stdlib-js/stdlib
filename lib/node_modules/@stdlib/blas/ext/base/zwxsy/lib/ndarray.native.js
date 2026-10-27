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
* Subtracts elements of a double-precision complex floating-point strided array `y` from the corresponding elements of a double-precision complex floating-point strided array `x` and assigns the results to elements in a double-precision complex floating-point strided array `w` using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex128Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @param {Complex128Array} w - output array
* @param {integer} strideW - `w` stride length
* @param {NonNegativeInteger} offsetW - starting `w` index
* @returns {Complex128Array} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex128Array( [ 1.0, 3.0, -2.0, 1.0, 3.0, 4.0 ] );
* var w = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* zwxsy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
* // w => <Complex128Array>[ 0.0, -1.0, 5.0, 3.0, 2.0, 2.0 ]
*/
function zwxsy( N, x, strideX, offsetX, y, strideY, offsetY, w, strideW, offsetW ) { // eslint-disable-line max-len
	var viewX = reinterpret( x, 0 );
	var viewY = reinterpret( y, 0 );
	var viewW = reinterpret( w, 0 );
	addon.ndarray( N, viewX, strideX, offsetX, viewY, strideY, offsetY, viewW, strideW, offsetW ); // eslint-disable-line max-len
	return w;
}


// EXPORTS //

module.exports = zwxsy;
