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
* Computes the squared absolute value for each element in a double-precision floating-point strided array `x` according to a strided mask array and assigns the results to elements in a double-precision floating-point strided array `y`.
*
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} sx - `x` stride length
* @param {Uint8Array} m - mask array
* @param {integer} sm - `m` stride length
* @param {Float64Array} y - destination array
* @param {integer} sy - `y` stride length
* @returns {Float64Array} `y`
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Float64Array( [ -2.0, 1.0, -3.0, -5.0, 4.0 ] );
* var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* dmskabs2( x.length, x, 1, m, 1, y, 1 );
* // y => <Float64Array>[ 4.0, 1.0, 0.0, 25.0, 0.0 ]
*/
function dmskabs2( N, x, sx, m, sm, y, sy ) {
	addon( N, x, sx, m, sm, y, sy );
	return y;
}


// EXPORTS //

module.exports = dmskabs2;
