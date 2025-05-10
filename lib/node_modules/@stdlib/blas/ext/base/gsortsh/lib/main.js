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
* Sorts a strided array using Shellsort.
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
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @returns {NumericArray} input array
*
* @example
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* gsortsh( x.length, 1.0, x, 1 );
* // x => [ -4.0, -2.0, 1.0, 3.0 ]
*/
function gsortsh( N, order, x, strideX ) {
	return ndarray( N, order, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = gsortsh;
