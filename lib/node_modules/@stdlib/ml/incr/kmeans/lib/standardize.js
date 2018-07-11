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

// MAIN //

/**
* Normalizes a vector by standardization.
*
* @private
* @param {NonNegativeInteger} N - number of elements
* @param {NumericArray} X - strided array
* @param {integer} strideX - stride
* @param {NonNegativeInteger} offsetX - index offset
* @param {NumericArray} mean - strided array containing the sample mean along each dimension
* @param {integer} strideM - stride
* @param {NonNegativeInteger} offsetM - index offset
* @param {NumericArray} stdev - strided array containing the standard deviation along each dimension
* @param {integer} strideS - stride
* @param {NonNegativeInteger} offsetS - index offset
* @returns {ndarray} input array
*/
function standardize( N, X, strideX, offsetX, mean, strideM, offsetM, stdev, strideS, offsetS ) { // eslint-disable-line max-len
	var xi;
	var mi;
	var si;
	var i;

	// TODO: consider moving to an "extended" BLAS package

	xi = offsetX;
	mi = offsetM;
	si = offsetS;
	for ( i = 0; i < N; i++ ) {
		X[ xi ] = ( X[ xi ] - mean[ mi ] ) / stdev[ si ];
		xi += strideX;
		mi += strideM;
		si += strideS;
	}
	return X;
}


// EXPORTS //

module.exports = standardize;
