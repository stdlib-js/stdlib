/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Returns a string created by joining strided array elements using a specified separator.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {string} separator - separator
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @returns {string} joined string
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = gjoin( x.length, ',', x, 1 );
* // return '1,2,3,4'
*/
function gjoin( N, separator, x, strideX ) {
	return ndarray( N, separator, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = gjoin;
