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
* Sifts a value down from a specified index in a single-precision floating-point strided min-heap until the heap property is restored using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} index - logical index at which to begin sifting
* @param {number} value - value to place into the heap
* @param {Float32Array} x - heap storage array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Float32Array} heap storage array
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* sminheapSiftDown( 5, 0, 7.0, x, 1, 0 );
* // x => <Float32Array>[ 2.0, 4.0, 3.0, 7.0, 5.0 ]
*/
function sminheapSiftDown( N, index, value, x, strideX, offsetX ) {
	addon.ndarray( N, index, value, x, strideX, offsetX );
	return x;
}


// EXPORTS //

module.exports = sminheapSiftDown;
