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

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Circularly shifts the elements of a single-precision floating-point strided array by a specified number of positions.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {integer} k - number of positions to shift
* @param {Float32Array} x - input array
* @param {integer} strideX - stride length
* @returns {Float32Array} input array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
*
* scircshift( x.length, 2, x, 1 );
* // x => <Float32Array>[ 5.0, 6.0, 1.0, 2.0, 3.0, 4.0 ]
*/
function scircshift( N, k, x, strideX ) {
	addon( N, k, x, strideX );
	return x;
}


// EXPORTS //

module.exports = scircshift;
