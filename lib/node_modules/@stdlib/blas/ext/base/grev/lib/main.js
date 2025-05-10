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
* Reverses a strided array in-place.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - stride length
* @returns {NumericArray} input array
*
* @example
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* grev( x.length, x, 1 );
* // x => [ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
*/
function grev( N, x, strideX ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ) );
}


// EXPORTS //

module.exports = grev;
