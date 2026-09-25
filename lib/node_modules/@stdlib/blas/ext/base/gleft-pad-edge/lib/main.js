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
* Prepends elements to a strided array by repeating the leading edge element.
*
* @param {PositiveInteger} N - number of indexed elements in `x`
* @param {integer} k - number of elements to pad
* @param {Collection} x - input array
* @param {integer} strideX - stride length for `x`
* @param {Collection} y - output array
* @param {integer} strideY - stride length for `y`
* @returns {Collection} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gleftPadEdge( x.length, 6, x, 1, y, 1 );
* // y => [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 2.0, 3.0, 4.0 ]
*/
function gleftPadEdge( N, k, x, strideX, y, strideY ) {
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

module.exports = gleftPadEdge;
