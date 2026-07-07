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
* Returns the first index of an element in a strided array which is not equal to a specified search element.
*
* ## Notes
*
* -   If all elements are equal to the search element, the function returns `-1`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {*} searchElement - search element
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @returns {integer} index
*
* @example
* var x = [ 1.0, 1.0, 0.0, 1.0 ];
*
* var idx = gindexOfNotEqual( x.length, 1.0, x, 1 );
* // returns 2
*/
function gindexOfNotEqual( N, searchElement, x, strideX ) {
	return ndarray( N, searchElement, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = gindexOfNotEqual;
