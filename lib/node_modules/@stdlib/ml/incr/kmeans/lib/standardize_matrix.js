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

var norm = require( './standardize.js' );


// MAIN //

/**
* Normalizes matrix elements by standardization.
*
* @private
* @param {ndarray} mat - matrix to normalize
* @param {Float64Array} stats - strided array containing the mean and standard deviation along each dimension
* @returns {ndarray} input matrix
*/
function standardize( mat, stats ) { // TODO: eventually remove this function once project has implemented comparable functionality as a standalone package
	var mbuf;
	var sm1;
	var sm2;
	var om;
	var M;
	var N;
	var i;

	mbuf = mat.data;
	M = mat.shape[ 0 ];
	N = mat.shape[ 1 ];
	sm1 = mat.strides[ 0 ];
	sm2 = mat.strides[ 1 ];
	om = mat.offset;

	for ( i = 0; i < M; i++ ) {
		// Normalize a matrix row:
		norm( N, mbuf, sm2, om, stats, 2, 0, stats, 2, 1 ); // Magic numbers come from knowing that the `stats` array is interleaved

		// Update the index offset to point to the next row:
		om += sm1;
	}
	return mat;
}


// EXPORTS //

module.exports = standardize;
