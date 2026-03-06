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

var norm = require( './normalize.js' );


// MAIN //

/**
* Normalizes matrix elements by row magnitudes.
*
* @private
* @param {ndarray} mat - matrix to normalize
* @returns {ndarray} input matrix
*/
function normalize( mat ) { // TODO: eventually remove this function once project has implemented comparable functionality as a standalone package
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
		norm( N, mbuf, sm2, om );

		// Update the index offset to point to the next row:
		om += sm1;
	}
	return mat;
}


// EXPORTS //

module.exports = normalize;
