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
* Computes the maximum value of a strided array according to a mask.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {NumericArray} mask - mask array
* @param {integer} strideMask - `mask` stride length
* @returns {number} maximum value
*
* @example
* var x = [ 1.0, -2.0, 4.0, 2.0 ];
* var mask = [ 0, 0, 1, 0 ];
*
* var v = mskmax( x.length, x, 1, mask, 1 );
* // returns 2.0
*/
function mskmax( N, x, strideX, mask, strideMask ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), mask, strideMask, stride2offset( N, strideMask ) );
}


// EXPORTS //

module.exports = mskmax;
