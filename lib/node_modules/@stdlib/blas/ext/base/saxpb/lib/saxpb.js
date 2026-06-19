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
* Multiplies each element in a single-precision floating-point strided array by a scalar constant and adds a scalar constant to each result.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - first scalar constant
* @param {number} beta - second scalar constant
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @returns {Float32Array} input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* saxpb( x.length, 5.0, 3.0, x, 1 );
* // x => <Float32Array>[ -7.0, 8.0, 18.0, -22.0, 23.0, 3.0, -2.0, -12.0 ]
*/
function saxpb( N, alpha, beta, x, strideX ) {
	return ndarray( N, alpha, beta, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = saxpb;
