/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Computes the cube root for each element in a single-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float32Array} x - input array
* @param {integer} sx - `x` stride length
* @param {Uint8Array} m - mask array
* @param {integer} sm - `m` stride length
* @param {Float32Array} y - destination array
* @param {integer} sy - `y` stride length
* @returns {Float32Array} `y`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Float32Array( [ 0.0, 1.0, 8.0, 27.0, 64.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
* var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* smskcbrt( x.length, x, 1, m, 1, y, 1 );
* // y => <Float32Array>[ 0.0, 1.0, 0.0, 3.0, 0.0 ]
*/
function smskcbrt( N, x, sx, m, sm, y, sy ) {
	addon( N, x, sx, m, sm, y, sy );
	return y;
}


// EXPORTS //

module.exports = smskcbrt;
