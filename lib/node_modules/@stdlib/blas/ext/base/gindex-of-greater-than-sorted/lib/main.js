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
* Returns the index of the first element in a sorted strided array which is greater than a specified search element.
*
* ## Notes
*
* -   The input strided array must be sorted in ascending order.
* -   If unable to find an element which is greater than the search element, the function returns `-1`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {*} searchElement - search element
* @param {Collection} x - sorted input array
* @param {integer} strideX - stride length
* @returns {integer} index
*
* @example
* var x = [ 1.0, 2.0, 2.0, 3.0 ];
*
* var idx = gindexOfGreaterThanSorted( x.length, 2.0, x, 1 );
* // returns 3
*/
function gindexOfGreaterThanSorted( N, searchElement, x, strideX ) {
	return ndarray( N, searchElement, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = gindexOfGreaterThanSorted;
