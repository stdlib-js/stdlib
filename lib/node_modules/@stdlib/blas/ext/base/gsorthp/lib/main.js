/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Sorts a strided array using heapsort.
*
* ## Notes
*
* -   This implementation uses an in-place algorithm derived from the work of Floyd (1964).
*
* ## References
*
* -   Williams, John William Joseph. 1964. "Algorithm 232: Heapsort." _Communications of the ACM_ 7 (6). New York, NY, USA: Association for Computing Machinery: 347–49. doi:[10.1145/512274.512284](https://doi.org/10.1145/512274.512284).
* -   Floyd, Robert W. 1964. "Algorithm 245: Treesort." _Communications of the ACM_ 7 (12). New York, NY, USA: Association for Computing Machinery: 701. doi:[10.1145/355588.365103](https://doi.org/10.1145/355588.365103).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @returns {NumericArray} input array
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* gsorthp( x.length, 1.0, x, 1 );
* // x => [ -4.0, -2.0, 1.0, 3.0 ]
*/
function gsorthp( N, order, x, strideX ) {
	return ndarray( N, order, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = gsorthp;
