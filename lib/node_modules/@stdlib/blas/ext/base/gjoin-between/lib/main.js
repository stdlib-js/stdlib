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
* Returns a string by joining strided array elements using a specified separator for each pair of consecutive elements.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {string} prefix - string to prepend to the output string
* @param {string} suffix - string to append to the output string
* @param {Collection} x - input array
* @param {integer} strideX - stride length for `x`
* @param {Collection} separators - separators array
* @param {integer} strideS - stride length for `separators`
* @returns {string} joined string
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var sep = [ ' + ', ' - ', ' != ' ];
*
* var out = gjoinBetween( x.length, 'op: ', '', x, 1, sep, 1 );
* // returns 'op: 1 + 2 - 3 != 4'
*/
function gjoinBetween( N, prefix, suffix, x, strideX, separators, strideS ) {
	var ox;
	var os;

	ox = stride2offset( N, strideX );
	os = stride2offset( N - 1, strideS );
	return ndarray( N, prefix, suffix, x, strideX, ox, separators, strideS, os ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gjoinBetween;
