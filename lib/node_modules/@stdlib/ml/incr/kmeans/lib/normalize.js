/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var sqrt = require( '@stdlib/math/base/special/sqrt' );


// MAIN //

/**
* Normalizes a vector.
*
* @private
* @param {NonNegativeInteger} N - number of elements
* @param {NumericArray} X - strided array
* @param {integer} strideX - stride
* @param {NonNegativeInteger} offsetX - index offset
* @returns {NumericArray} input array
*/
function normalize( N, X, strideX, offsetX ) { // TODO: eventually remove this function once project has implemented comparable functionality as a standalone package (e.g., BLAS, which may avoid the naive approach susceptible to overflow/overflow due to summing squares and computing the square root)
	var xi;
	var m;
	var v;
	var i;

	m = 0.0;

	// Compute the vector magnitude...
	xi = offsetX;
	for ( i = 0; i < N; i++ ) {
		v = X[ xi ];
		m += v * v;
		xi += strideX;
	}
	m = sqrt( m );

	// Normalize the vector...
	xi = offsetX;
	for ( i = 0; i < N; i++ ) {
		X[ xi ] /= m;
	}
	return X;
}


// EXPORTS //

module.exports = normalize;
