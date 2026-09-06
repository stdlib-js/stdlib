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
* Multiplies each element in a strided array `x` by a scalar constant and adds a scalar constant before assigning the results to a strided array `w`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - first scalar constant
* @param {number} beta - second scalar constant
* @param {NumericArray} x - input array
* @param {integer} strideX - `x` stride length
* @param {NumericArray} w - output array
* @param {integer} strideW - `w` stride length
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwaxpb( x.length, 5.0, 3.0, x, 1, w, 1 );
* // w => [ 8.0, 13.0, 18.0, 23.0, 28.0 ]
*/
function gwaxpb( N, alpha, beta, x, strideX, w, strideW ) {
	return ndarray( N, alpha, beta, x, strideX, stride2offset( N, strideX ), w, strideW, stride2offset( N, strideW ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gwaxpb;
