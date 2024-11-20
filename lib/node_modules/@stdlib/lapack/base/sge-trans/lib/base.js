/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var isRowMajor = require( '@stdlib/ndarray/base/assert/is-row-major' );


// MAIN //

/**
* Converts a matrix from row-major layout to column-major layout or vice versa.
*
* @private
* @param {NonNegativeInteger} M - number of rows in matrix `A`
* @param {NonNegativeInteger} N - number of columns in matrix `A`
* @param {Float32Array} A - input matrix
* @param {integer} strideA1 - stride of the first dimension of `A`
* @param {integer} strideA2 - stride of the second dimension of `A`
* @param {NonNegativeInteger} offsetA - starting index for `A`
* @param {Float32Array} out - output matrix
* @param {integer} strideO1 - stride of the first dimension of `out`
* @param {integer} strideO2 - stride of the second dimension of `out`
* @param {NonNegativeInteger} offsetO - starting index for `out`
* @returns {Float32Array} `out`
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
*
* var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var out = new Float32Array( 6 );
*
* out = sgetrans( 2, 3, A, 3, 1, 0, out, 2, 1, 0 );
* // returns <Float32Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
*/
function sgetrans( M, N, A, strideA1, strideA2, offsetA, out, strideO1, strideO2, offsetO ) {
	var isrm;
	var da0;
	var da1;
	var do0;
	var do1;
	var ia;
	var io;
	var i0;
	var i1;
	var S0;
	var S1;

	// Note on variable naming convention: S#, da#, do#, i# where # corresponds to the loop number, with `0` being the innermost loop...

	// Perform loop interchange based on the layout format of the output matrix...
	isrm = isRowMajor( [ strideO1, strideO2 ] );
	if ( isrm ) {
		// For row-major matrices, the last dimensions have the fastest changing indices...
		S0 = M;
		S1 = N;
		da0 = strideA1;                   // offset increment for innermost loop
		da1 = strideA2 - ( S0*strideA1 ); // offset increment for outermost loop
		do0 = strideO2;
		do1 = strideO1 - ( S0*strideO2 );
	} else {
		// For column-major matrices, the first dimensions have the fastest changing indices...
		S0 = N;
		S1 = M;
		da0 = strideA2;                   // offset increment for innermost loop
		da1 = strideA1 - ( S0*strideA2 ); // offset increment for outermost loop
		do0 = strideO1;
		do1 = strideO2 - ( S0*strideO1 );
	}
	ia = offsetA;
	io = offsetO;
	for ( i1 = 0; i1 < S1; i1++ ) {
		for ( i0 = 0; i0 < S0; i0++ ) {
			out[ io ] = A[ ia ];
			ia += da0;
			io += do0;
		}
		ia += da1;
		io += do1;
	}
	return out;
}


// EXPORTS //

module.exports = sgetrans;
