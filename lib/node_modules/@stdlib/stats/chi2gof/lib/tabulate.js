/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

// MAIN //

/**
* Creates a frequency table from an input array.
*
* @private
* @param {NonNegativeInteger} N - number of indexed elements
* @param {Collection} x - input array
* @param {integer} strideX - `x` stride length
* @param {Float64Array} y - output array
* @param {integer} strideY - `y` stride length
* @returns {Collection} output array
*
* @example
* var arr = [ 0, 1, 1, 0, 0, 2, 3, 5 ];
* var out = [ 0, 0, 0, 0, 0, 0, 0, 0 ];
*
* var freq = tabulate( arr.length, arr, 1, out, 1 );
* // returns [ 3, 2, 1, 1, 0, 1, 0, 0 ]
*/
function tabulate( N, x, strideX, y, strideY ) {
	var i;
	for ( i = 0; i < N; i++ ) {
		y[ x[ i*strideX ] * strideY ] += 1;
	}
	return y;
}


// EXPORTS //

module.exports = tabulate;
