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
* Simultaneously sorts two double-precision floating-point strided arrays based on the sort order of the first array using Shellsort.
*
* ## Notes
*
* -   This implementation uses the gap sequence proposed by Ciura (2001).
*
* ## References
*
* -   Shell, Donald L. 1959. "A High-Speed Sorting Procedure." _Communications of the ACM_ 2 (7). Association for Computing Machinery: 30–32. doi:[10.1145/368370.368387](https://doi.org/10.1145/368370.368387).
* -   Ciura, Marcin. 2001. "Best Increments for the Average Case of Shellsort." In _Fundamentals of Computation Theory_, 106–17. Springer Berlin Heidelberg. doi:[10.1007/3-540-44669-9\_12](https://doi.org/10.1007/3-540-44669-9_12).
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} order - sort order
* @param {NumericArray} x - first input array
* @param {integer} strideX - stride length for `x`
* @param {NumericArray} y - second input array
* @param {integer} strideY - stride length for `y`
* @returns {NumericArray} `x`
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
* var y = [ 0.0, 1.0, 2.0, 3.0 ];
*
* gsort2sh( x.length, 1.0, x, 1, y, 1 );
*
* console.log( x );
* // => [ -4.0, -2.0, 1.0, 3.0 ]
*
* console.log( y );
* // => [ 3.0, 1.0, 0.0, 2.0 ]
*/
function gsort2sh( N, order, x, strideX, y, strideY ) {
	return ndarray( N, order, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gsort2sh;
