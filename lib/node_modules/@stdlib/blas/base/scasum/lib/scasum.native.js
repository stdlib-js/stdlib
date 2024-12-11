/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} cx - input array
* @param {integer} strideX - `cx` stride length
* @returns {number} result
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var cx = new Complex64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0 ] );
*
* var out = scasum( cx.length, cx, 1 );
* // returns 17.0
*/
function scasum( N, cx, strideX ) {
	var viewX = reinterpret( cx, 0 );
	return addon( N, viewX, strideX );
}


// EXPORTS //

module.exports = scasum;
