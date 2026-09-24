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
* Adds elements of a strided array `x` to the corresponding elements of a strided array `y` and assigns the results to elements in a strided array `w`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {NumericArray} x - first input array
* @param {integer} strideX - `x` stride length
* @param {NumericArray} y - second input array
* @param {integer} strideY - `y` stride length
* @param {NumericArray} w - output array
* @param {integer} strideW - `w` stride length
* @returns {NumericArray} output array
*
* @example
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* gwxpy( x.length, x, 1, y, 1, w, 1 );
* // w => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
function gwxpy( N, x, strideX, y, strideY, w, strideW ) {
	return ndarray( N, x, strideX, stride2offset( N, strideX ), y, strideY, stride2offset( N, strideY ), w, strideW, stride2offset( N, strideW ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = gwxpy;
