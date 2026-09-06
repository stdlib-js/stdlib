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
* Returns a string created by joining strided array elements into a human-readable list using a conjunction.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {string} prefix - string to prepend
* @param {string} suffix - string to append
* @param {string} conjunction - conjunction before the last element
* @param {boolean} oxfordComma - boolean specifying whether to include an Oxford comma
* @param {Collection} x - input array
* @param {integer} strideX - stride length
* @returns {string} joined string
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var out = gconjoin( x.length, '', '', 'and', true, x, 1 );
* // returns '1, 2, 3, and 4'
*/
function gconjoin( N, prefix, suffix, conjunction, oxfordComma, x, strideX ) {
	return ndarray( N, prefix, suffix, conjunction, oxfordComma, x, strideX, stride2offset( N, strideX ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gconjoin;
