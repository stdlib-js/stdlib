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
* Takes elements from one of two strided arrays depending on a condition.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} condition - condition array
* @param {integer} strideC - stride length for `condition`
* @param {Collection} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {Collection} y - second input array
* @param {integer} strideY - stride length for `y`
* @param {Collection} out - output array
* @param {integer} strideOut - stride length for `out`
* @returns {Collection} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0 ];
* var y = [ 4.0, 5.0, 6.0 ];
* var condition = [ 1, 0, 1 ];
* var out = [ 0.0, 0.0, 0.0 ];
*
* gwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
* // out => [ 1.0, 5.0, 3.0 ]
*/
function gwhere( N, condition, strideC, x, strideX, y, strideY, out, strideOut ) { // eslint-disable-line max-len
	var oc = stride2offset( N, strideC );
	var ox = stride2offset( N, strideX );
	var oy = stride2offset( N, strideY );
	var oo = stride2offset( N, strideOut );
	return ndarray( N, condition, strideC, oc, x, strideX, ox, y, strideY, oy, out, strideOut, oo ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gwhere;
