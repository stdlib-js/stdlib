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
* Returns the index of the first element in a strided array which is not equal to the corresponding element in another strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Collection} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {Collection} y - second input array
* @param {integer} strideY - stride length for `y`
* @returns {integer} index
*
* @example
* var x = [ 0, 0, 1, 0 ];
* var y = [ 0, 0, 0, 0 ];
*
* var idx = gfirstIndexNotEqual( x.length, x, 1, y, 1 );
* // returns 2
*/
function gfirstIndexNotEqual( N, x, strideX, y, strideY ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gfirstIndexNotEqual;
