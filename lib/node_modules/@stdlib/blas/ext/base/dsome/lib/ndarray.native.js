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
* Tests whether a double-precision floating-point strided array contains at least `k` truthy elements using alternative indexing semantics.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {integer} k - minimum number of truthy elements
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @returns {boolean} boolean indicating whether the input array contains at least `k` truthy elements
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 0.0, 0.0, 1.0, 2.0 ] );
*
* var v = dsome( 4, 2, x, 1, 0 );
* // returns true
*/
function dsome( N, k, x, strideX, offsetX ) {
	return addon.ndarray( N, k, x, strideX, offsetX );
}


// EXPORTS //

module.exports = dsome;
