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
* Multiplies a strided array `x` by a constant and adds the result to a strided array `y` multiplied by a constant.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - first scalar constant
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {number} beta - second scalar constant
* @param {NumericArray} y - output array
* @param {integer} strideY - `y` stride length
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
*
* gaxpby( x.length, 5.0, x, 1, 2.0, y, 1 );
* // y => [ 9.0, 16.0, 23.0, 30.0, 37.0 ]
*/
function gaxpby( N, alpha, x, strideX, beta, y, strideY ) {
	return ndarray( N, alpha, x, strideX, stride2offset( N, strideX ), beta, y, strideY, stride2offset( N, strideY ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gaxpby;
