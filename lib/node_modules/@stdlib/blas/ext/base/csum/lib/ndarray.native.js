/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the sum of single-precision complex floating-point strided array elements.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Complex64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Complex64} sum
*
* @example
* var Complex64Array = require( '@stdlib/array/complex64' );
*
* var x = new Complex64Array( [ 1.0, -2.0, 2.0, 3.0 ] );
*
* var v = csum( x.length, x, 1, 0 );
* // returns <Complex64>[ 3.0, 1.0 ]
*/
function csum( N, x, strideX, offsetX ) {
	var o = addon.ndarray( N, reinterpret( x, 0 ), strideX, offsetX );
	return new Complex64( o.re, o.im );
}


// EXPORTS //

module.exports = csum;
