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
* Sifts a value down from a specified index in a double-precision floating-point strided min-heap until the heap property is restored.
*
* ## Notes
*
* -   The function assumes that the subtrees rooted at the children of `index` already satisfy the min-heap property and only the value being sifted may violate the min-heap invariant.
* -   The min-heap algorithm is sensitive to the presence of `NaN` values. Since `NaN` comparisons always return `false`, if `NaN` values are present in the input array, the results may be unpredictable.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NonNegativeInteger} index - logical index at which to begin sifting
* @param {number} value - value to place into the heap
* @param {Float64Array} x - heap storage array
* @param {integer} strideX - stride length
* @returns {Float64Array} heap storage array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* dminheapSiftDown( 5, 0, 7.0, x, 1 );
* // x => <Float64Array>[ 2.0, 4.0, 3.0, 7.0, 5.0 ]
*/
function dminheapSiftDown( N, index, value, x, strideX ) {
	return ndarray( N, index, value, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = dminheapSiftDown;
