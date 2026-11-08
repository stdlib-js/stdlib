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
* Prepends elements to a double-precision floating-point strided array by repeating the leading edge element.
*
* @param {PositiveInteger} N - number of indexed elements in `x`
* @param {integer} k - number of elements to pad
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length for `x`
* @param {Float64Array} y - output array
* @param {integer} strideY - stride length for `y`
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Float64Array( 10 );
*
* var v = dleftPadEdge( 4, 6, x, 1, y, 1 );
* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 3.0, 4.0 ]
*/
function dleftPadEdge( N, k, x, strideX, y, strideY ) {
	var ox;
	var oy;

	if ( k < 0 ) {
		k = 0;
	}
	ox = stride2offset( N, strideX );
	oy = stride2offset( N + k, strideY );
	return ndarray( N, k, x, strideX, ox, y, strideY, oy );
}


// EXPORTS //

module.exports = dleftPadEdge;
