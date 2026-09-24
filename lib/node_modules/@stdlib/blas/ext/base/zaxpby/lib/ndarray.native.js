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
* Multiplies a double-precision complex floating-point strided array `x` by a constant and adds the result to a double-precision complex floating-point strided array `y` multiplied by a constant using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex128} alpha - first scalar constant
* @param {Complex128Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Complex128} beta - second scalar constant
* @param {Complex128Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Complex128Array} output array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
* var Complex128 = require( '@stdlib/complex/float64/ctor' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
* var y = new Complex128Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
*
* var alpha = new Complex128( 2.0, 1.0 );
* var beta = new Complex128( 1.0, -1.0 );
*
* zaxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
* // y => <Complex128Array>[ 3.0, 4.0, 9.0, 5.0, 3.0, -2.0 ]
*/
function zaxpby( N, alpha, x, strideX, offsetX, beta, y, strideY, offsetY ) {
	var viewX = reinterpret( x, 0 );
	var viewY = reinterpret( y, 0 );
	addon.ndarray( N, alpha, viewX, strideX, offsetX, beta, viewY, strideY, offsetY ); // eslint-disable-line max-len
	return y;
}


// EXPORTS //

module.exports = zaxpby;
