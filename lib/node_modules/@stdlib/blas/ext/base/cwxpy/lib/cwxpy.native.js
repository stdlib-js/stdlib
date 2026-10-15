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
* Adds elements of a single-precision complex floating-point strided array `x` to the corresponding elements of a single-precision complex floating-point strided array `y` and assigns the results to elements in a single-precision complex floating-point strided array `w`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - first input array
* @param {integer} strideX - `x` stride length
* @param {Complex64Array} y - second input array
* @param {integer} strideY - `y` stride length
* @param {Complex64Array} w - output array
* @param {integer} strideW - `w` stride length
* @returns {Complex64Array} output array
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
* var w = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* cwxpy( x.length, x, 1, y, 1, w, 1 );
* // w => <Complex64Array>[ 3.0, 5.0, 7.0, 9.0, 11.0, 13.0 ]
*/
function cwxpy( N, x, strideX, y, strideY, w, strideW ) {
	var viewX = reinterpret( x, 0 );
	var viewY = reinterpret( y, 0 );
	var viewW = reinterpret( w, 0 );
	addon( N, viewX, strideX, viewY, strideY, viewW, strideW );
	return w;
}


// EXPORTS //

module.exports = cwxpy;
