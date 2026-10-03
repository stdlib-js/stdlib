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

var stride2offset = require( '@stdlib/strided/base/stride2offset' );
var ndarray = require( './ndarray.js' );


// MAIN //

/**
* Multiplies a single-precision complex floating-point strided array `x` by a constant and adds the result to a single-precision complex floating-point strided array `y` multiplied by a constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64} alpha - first scalar constant
* @param {Complex64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {Complex64} beta - second scalar constant
* @param {Complex64Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
* var y = new Complex64Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
*
* var alpha = new Complex64( 2.0, 1.0 );
* var beta = new Complex64( 1.0, -1.0 );
*
* caxpby( x.length, alpha, x, 1, beta, y, 1 );
* // y => <Complex64Array>[ 3.0, 4.0, 9.0, 5.0, 3.0, -2.0 ]
*/
function caxpby( N, alpha, x, strideX, beta, y, strideY ) {
	return ndarray( N, alpha, x, strideX, stride2offset( N, strideX ), beta, y, strideY, stride2offset( N, strideY ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = caxpby;
